import About from "@/components/home/About";
import Blog from "@/components/home/Blog";
import ChooseUs from "@/components/home/ChooseUs";
import ContactUs from "@/components/home/ContactUs";
import HomeHeader from "@/components/home/HomeHeader";
import Portfolio from "@/components/home/Portfolio";
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
