import About from "@/components/home/About";
import ContactUs from "@/components/home/ContactUs";
import HomeHeader from "@/components/home/HomeHeader";
import Services from "@/components/home/Services";
import Head from "@/layout/head/Head";

export default function Home() {
  return (
    <>
      <Head title={"Anasayfa"} />
      <HomeHeader />
      <About />
      <Services />
      {/* <ChooseUs /> */}
      {/* <Portfolio /> */}
      {/* <Blog /> */}
      <ContactUs />
    </>
  );
}
