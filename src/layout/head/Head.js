import Head from "next/head";
const PageHead = ({ title, pathname }) => {
  return (
    <Head>
      <meta
        name="description"
        content="Zaman ve maliyet yönetiminiz için size dijital çözümler üretiyoruz."
      ></meta>
      <meta name="robots" content="index, follow, noarchive"></meta>
      
      <meta name="googlebot" content="index,follow"></meta>
      <meta name="google" content="nositelinkssearchbox"></meta>
      <meta name="googlebot" content="notranslate"></meta>
      <meta name="google" content="nopagereadaloud"></meta>
      <meta name="google-site-verification" content="..."></meta>
      <meta http-equiv="Content-Type" content="...; charset=UTF-8"></meta>
      <meta charset="UTF-8"></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      {pathname && (
        <>
          {" "}
          <link
            rel="alternate"
            href={`http://megacode.com.tr${pathname}`}
            hreflang="en-us"
          />
          <link
            rel="alternate"
            href={`http://megacode.com.tr/tr${pathname}`}
            hreflang="tr-TR"
          />
        </>
      )}

      <title>{`${title} | Megacode Yazılım` ?? "Megacode Yazılım"}</title>
    </Head>
  );
};

export default PageHead;
