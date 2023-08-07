import About from "@/components/home/About";
import ContactUs from "@/components/home/ContactUs";
import HomeHeader from "@/components/home/HomeHeader";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import Head from "@/layout/head/Head";
import { servicesService } from "@/services";
import { useRouter } from "next/router";

export default function Home({ services }) {
  const router = useRouter();
  const { asPath } = router;
  return (
    <>
      <Head title={"Anasayfa"} pathname={asPath}>
        <link rel="canonical" href="https://megacode.com.tr/" />
      </Head>
      <HomeHeader />
      <About />
      <Services data={services} />
      {/* <ChooseUs /> */}
      {/* <Portfolio /> */}
      {/* <Blog /> */}
      <Projects />
      <ContactUs />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const services = await servicesService.getServices();
    return { props: { services: services?.payload?.services } };
  } catch (err) {
    console.error(err);
    return { props: {} };
  }
}
