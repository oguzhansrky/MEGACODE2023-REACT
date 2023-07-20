import About from "@/components/home/About";
import ContactUs from "@/components/home/ContactUs";
import HomeHeader from "@/components/home/HomeHeader";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <>
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
