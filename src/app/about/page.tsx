import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Mak Tech — a Tiruppur-based computer and technology service company providing laptop, CCTV, printer and networking solutions with honest service.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Mak Tech"
        description="A trusted technology partner for homes and businesses across Tiruppur."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <About />
      <Stats />
      <Process />
      <WhyChooseUs />
      <Contact />
    </>
  );
}
