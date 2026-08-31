import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Laptop sales and service, CCTV installation, printer service, computer repair, networking solutions and accessories from Mak Tech, Tiruppur.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Technology Services for Homes & Businesses"
        description="From laptop repairs to complete office networks — explore everything Mak Tech can do for you."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <div className="pt-4">
        <Services />
      </div>
      <Process />
      <WhyChooseUs />
      <Contact />
    </>
  );
}
