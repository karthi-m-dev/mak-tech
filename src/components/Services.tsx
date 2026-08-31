import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 transition-colors duration-200 dark:bg-navy-950 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-500 dark:text-brand-400">
                What We Do
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-4xl">
                Our <span className="text-brand-500 dark:text-brand-400">Services</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                We offer a wide range of technology solutions to keep your home and
                business running smoothly.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-brand-500 px-5 py-2.5 text-sm font-semibold text-brand-500 transition-colors hover:bg-brand-500 hover:text-white dark:border-brand-400 dark:text-brand-400 dark:hover:bg-brand-500 dark:hover:text-white"
            >
              View All Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 6) * 0.06}>
              <article className="group flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-500/10 dark:border-navy-800 dark:bg-navy-900 dark:hover:border-brand-500/50 dark:hover:shadow-navy-950/60">
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white dark:bg-brand-500/15 dark:text-brand-400 dark:group-hover:bg-brand-500 dark:group-hover:text-white">
                  <ServiceIcon name={service.icon} className="h-6 w-6" />
                </span>
                <h3 className="text-sm font-semibold text-navy-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {service.cardDescription}
                </p>
                <Link
                  href={`/${service.slug}`}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-500 transition-colors hover:text-navy-900 dark:text-brand-400 dark:hover:text-white"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
