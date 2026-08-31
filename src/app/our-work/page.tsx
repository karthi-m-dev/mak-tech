import type { Metadata } from "next";
import OurWorkClient from "@/components/OurWorkClient";

export const metadata: Metadata = {
  title: "Our Work & Projects",
  description:
    "Explore real projects delivered by Mak Tech across Tiruppur — commercial CCTV security networks, structured server LANs, precision hardware repairs, and custom workstations.",
  alternates: { canonical: "/our-work" },
};

export default function OurWorkPage() {
  return <OurWorkClient />;
}
