import About from "@/components/home/About";
import Blog from "@/components/home/Blog";
import ChooseUs from "@/components/home/ChooseUs";
import ContactUs from "@/components/home/ContactUs";
import HomeHeader from "@/components/home/HomeHeader";
import Portfolio from "@/components/home/Portfolio";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <About />
      <Services />
      <ChooseUs />
      <Portfolio />
      <Blog />
      <ContactUs />
    </>
  )
}
