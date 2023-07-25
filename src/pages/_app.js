import LayoutProvider from "@/layout/LayoutProvider";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store, persistor } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import AdminLayout from "@/adminLayout";
import Cookies from "js-cookie";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isAdminRoute = router.pathname.includes("admin");
  const accessToken = Cookies.get("access_token");
  return (
    <>
      {isAdminRoute && accessToken ? (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AdminLayout>
              <Component {...pageProps} />
            </AdminLayout>
          </PersistGate>
        </Provider>
      ) : isAdminRoute ? (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      ) : (
        <LayoutProvider>
          <Component {...pageProps} />
        </LayoutProvider>
      )}
    </>
  );
}
