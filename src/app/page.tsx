import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import MapSection from "@/components/MapSection";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stats />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <CtaBanner />
      <MapSection />
      <Contact />
    </>
  );
}
