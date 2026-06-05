import Navbar from "@/components/Navbar";
import HeroSection from "@/components/Hero";
import Stats from "@/components/Stats";
import Service from "@/components/Service";
import Industry from "@/components/Industry";
import Partnership from "@/components/Partnership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  LazyFooterAnimation,
  LazyPageSections,
} from "@/components/LazySections";

export default function HomePage() {
  return (
    <div className="relative bg-[#080d1f]">
      <main className="relative z-10 min-h-screen bg-[#080d1f] text-white lg:mb-[520px]">
        <Navbar />
        <HeroSection />
        <Stats />
        <Service />
        <Industry />
        <Partnership />
        <LazyPageSections />
        <Contact />
        <Footer />
      </main>

      <LazyFooterAnimation />
    </div>
  );
}