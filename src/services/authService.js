import { generateApiEndpoint } from "../utils";
import restApiClient from "./client";

/**
 * GET: /auth/login'
 */
export async function login(data) {
  const endpoint = generateApiEndpoint(`auth/login`);
  const response = await restApiClient.post(endpoint, data);

  return response.data;
}

/**
 * POST: '/api/auth/logout'
 */
export async function logout() {
  const endpoint = generateApiEndpoint(`auth/logout`);
  const response = await restApiClient.post(endpoint);

  return response.data;
}
