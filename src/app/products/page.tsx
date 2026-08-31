import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cctv, HardDrive, Laptop, Monitor, Network, Printer } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Products We Sell",
  description:
    "Laptops, desktops, CCTV cameras, printers, networking equipment and computer accessories — genuine products from Mak Tech, Tiruppur.",
  alternates: { canonical: "/products" },
};

const productCategories = [
  { icon: Laptop, title: "Laptops", text: "New laptops for students, professionals and businesses across leading brands." },
  { icon: Monitor, title: "Desktops & Custom PCs", text: "Ready-made desktops and custom-built PCs assembled with genuine components." },
  { icon: Cctv, title: "CCTV Cameras & Recorders", text: "Indoor/outdoor cameras, DVRs, NVRs and storage sized to your needs." },
  { icon: Printer, title: "Printers & Consumables", text: "Inkjet and laser printers plus cartridges, toners and refills." },
  { icon: Network, title: "Networking Equipment", text: "Routers, switches, access points, mesh systems and structured cabling material." },
  { icon: HardDrive, title: "Accessories & Parts", text: "Keyboards, mice, SSDs, drives, cables, adapters, chargers and more." },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Products We Sell"
        description="Genuine hardware and accessories — matched to your requirement, not oversold."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />

      <section className="bg-white py-16 transition-colors duration-200 dark:bg-navy-950 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category, i) => (
              <Reveal key={category.title} delay={(i % 3) * 0.08}>
                <article className="flex h-full flex-col rounded-2xl border border-slate-200 p-6 transition-all hover:shadow-lg hover:shadow-navy-900/5 dark:border-navy-800 dark:bg-navy-900 dark:hover:border-navy-700 dark:hover:shadow-navy-950/50">
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand-500 dark:bg-brand-500/15 dark:text-brand-400">
                    <category.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="text-lg font-semibold text-navy-900 dark:text-white">{category.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{category.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Detailed product catalogue note */}
          <Reveal>
            <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center dark:border-navy-800 dark:bg-navy-900/60">
              <h2 className="text-lg font-semibold text-navy-900 dark:text-white">Looking for something specific?</h2>
              <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500 dark:text-slate-400">
                Our inventory changes often. Tell us what you need and we&apos;ll confirm availability,
                price and the best option for your budget.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-brand-400"
              >
                Ask About a Product
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Contact />
    </>
  );
}
