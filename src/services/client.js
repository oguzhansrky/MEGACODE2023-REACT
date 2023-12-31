import axios from "axios";
import Cookies from "js-cookie";
import { generateApiEndpoint } from "../utils";
import { store } from "../store/store";

let axiosApiInstance = axios.create();

function isExpired(token) {
  // Split the token into three parts, separated by "."
  const tokenParts = token?.split(".");
  // Base64 decode the middle part to get the JSON payload
  if (tokenParts) {
    const jsonPayload = atob(tokenParts?.[1]);
    // Load the JSON payload into an object
    const claims = JSON.parse(jsonPayload);
    // Check the "exp" and "iat" claims to see if the token has expired
    if ("exp" in claims && "iat" in claims) {
      const exp = claims.exp;
      const iat = claims.iat;
      const currentTime = Math.floor(Date.now() / 1000);
      if (currentTime + 3 > exp || currentTime + 3 < iat) {
        return true;
      }
    }
  }
  return false;
}

async function refreshToken(credentials) {
  const state = store.getState();
  const user = state.user.currentUser;
  if (isExpired(Cookies.get("access_token"))) {
    const refreshToken = Cookies.get("refresh_token");

    const endpoint = generateApiEndpoint(`auth/refresh/${user?.id}`);
    try {
      const response = await axios.post(
        endpoint,
        { refresh_token: refreshToken },
        {
          headers: {
            credentials: JSON.stringify(credentials),
          },
        }
      );
      Cookies.set("access_token", response.data.payload.access_token);
      return response.data.payload.access_token;
    } catch (err) {
      /*             Cookies.remove("access_token");
                        window.history.pushState({}, "", "/auth-login?redirect401");
                        window.location.reload(); */
      throw err;
    }
  }

  return Cookies.get("access_token");
}

axiosApiInstance.interceptors.request.use(
  async (config) => {
    let credentials = null;
    if (typeof window !== "undefined") {
      const getFingerprint = (await import("../utils/getFingerprint")).default;
      credentials = getFingerprint();
    }

    config.headers["credentials"] = JSON.stringify(credentials);

    if (Cookies.get("access_token")) {
      config.headers["Authorization"] = `Bearer ${Cookies.get("access_token")}`;
    }
    if (!config.url.includes("login") && credentials) {
      // Check if the access token is expired
      if (isExpired(Cookies.get("access_token"))) {
        // Refresh the access token
        const newAccessToken = await refreshToken(credentials);
        // Update the Authorization header with the new access token
        config.headers["Authorization"] = `Bearer ${newAccessToken}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosApiInstance;
