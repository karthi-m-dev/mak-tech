import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Mak Tech in Tiruppur for computer, laptop, CCTV, printer and networking sales and service. Call, WhatsApp or visit our store.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get In Touch"
        description="Questions about a repair, an installation or a quote? We're happy to help."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <div className="-mb-16">
        <Contact />
      </div>
    </>
  );
}
