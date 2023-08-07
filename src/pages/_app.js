import { Suspense, useEffect } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import LoadingUI from "@/components/LoadingUI";
import "@/styles/globals.css";
import LayoutProvider from "@/layout/LayoutProvider";
import AdminLayout from "@/adminLayout";
import { useState } from "react";

// Function to determine the layout based on isAdminRoute and accessToken
const getLayout = (
  isAdminRoute,
  accessToken,
  Component,
  pageProps,
  loading
) => {
  if (isAdminRoute && accessToken) {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AdminLayout>
            <Component {...pageProps} />
          </AdminLayout>
        </PersistGate>
      </Provider>
    );
  } else if (isAdminRoute) {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    );
  } else {
    return (
      <LayoutProvider loading={loading} isAdminRoute={isAdminRoute}>
        <Component {...pageProps} />
      </LayoutProvider>
    );
  }
};

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const isAdminRoute = router.pathname.includes("admin");
  const accessToken = Cookies.get("access_token");
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    const handleStart = (url) => {
      const localePrefix = `/${router.locale}`;
      if (url !== `${localePrefix}${router.asPath}`) {
        setLoading(true);
      }
    };

    const handleComplete = (url) => {
      const localePrefix = `/${router.locale}`;
      if (
        url === `${localePrefix}${router.asPath}` ||
        url === router.asPath ||
        url === localePrefix
      ) {
        setLoading(false);
      }
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.asPath, router.locale]);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  return (
    <>{getLayout(isAdminRoute, accessToken, Component, pageProps, loading)}</>
  );
};

export default App;
