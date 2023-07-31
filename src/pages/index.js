import About from "@/components/home/About";
import ContactUs from "@/components/home/ContactUs";
import HomeHeader from "@/components/home/HomeHeader";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import Head from "@/layout/head/Head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { asPath } = router;
  console.log(asPath, router);
  return (
    <>
      <Head title={"Anasayfa"} pathname={asPath}>
        <link rel="canonical" href="https://megacode.com.tr/" />
      </Head>
      <HomeHeader />
      <About />
      <Services />
      {/* <ChooseUs /> */}
      {/* <Portfolio /> */}
      {/* <Blog /> */}
      <Projects />
      <ContactUs />
    </>
  );
}
