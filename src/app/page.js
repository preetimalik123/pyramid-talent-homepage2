import Blog from "@/components/Blog";
import Connect from "@/components/Connect";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FooterAnimate from "@/components/FooterAnimate";
import HeroSection from "@/components/Hero";
import Industry from "@/components/Industry";
import Navbar from "@/components/Navbar";
import Partnership from "@/components/Partnership";
import Service from "@/components/Service";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative bg-[#080d1f]">
    <main className="relative z-10 mb-[520px] min-h-screen bg-[#080d1f] text-white">

<Navbar/>
<HeroSection/>
       <Stats />

     
      <Service/>
      <Industry/>
      <Testimonials/>
      <Partnership/>
    
      <Connect/>
        <Blog/>
      <Contact/>
      <Footer/>
   
    </main>
     <FooterAnimate/>
     </div>
  );
}
