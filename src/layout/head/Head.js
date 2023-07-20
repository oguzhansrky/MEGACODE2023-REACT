import Head from "next/head";
const PageHead = ({ title }) => {
  return (
    <Head>
      <title>{`${title} | Megacode Yazılım` ?? "Megacode Yazılım"}</title>
    </Head>
  );
};

export default PageHead;
