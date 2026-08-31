import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export default function MapSection() {
  return (
    <section className="bg-white py-16 transition-colors duration-200 dark:bg-navy-950 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-500 dark:text-brand-400">
              Find Us
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-4xl">
              Our Location
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              {site.address}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 h-[450px] overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-navy-800 dark:shadow-navy-950/50">
            <iframe
              src={site.googleMapEmbedUrl}
              title="Mak Tech location on Google Maps, Tiruppur"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0 dark:opacity-90 dark:contrast-110"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
