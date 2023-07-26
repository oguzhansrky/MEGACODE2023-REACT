import LoadingUI from "@/components/LoadingUI";
import LayoutProvider from "@/layout/LayoutProvider";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`);
      setLoading(true);
    };

    const handleComplete = (url) => {
      console.log(`Completed: ${url}`);
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingUI />
      ) : (
        <LayoutProvider>
          <Component {...pageProps} />
        </LayoutProvider>
      )}
    </div>
  );
}

export default MyApp;
