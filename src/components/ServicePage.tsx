import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ChevronRight, MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceIcon from "@/components/ServiceIcon";
import Reveal from "@/components/Reveal";
import { links } from "@/data/site";
import type { Service } from "@/data/services";

interface ServicePageProps {
  service: Service;
}

/** Shared layout template used by every dedicated service page. */
export default function ServicePage({ service }: ServicePageProps) {
  const related = service.relatedSlugs ?? [];

  return (
    <>
      <PageHero
        title={service.h1}
        description={service.intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="bg-white py-14 transition-colors duration-200 dark:bg-navy-950 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            {service.body.map((paragraph) => (
              <Reveal key={paragraph.slice(0, 32)}>
                <p className="mb-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.05}>
              <h2 className="mt-8 text-2xl font-bold text-navy-900 dark:text-white">
                What&apos;s Included
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2" role="list">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 font-medium text-navy-900 dark:text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-500 dark:text-brand-400" aria-hidden="true" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* CTA */}
            <Reveal delay={0.1}>
              <div className="mt-9 flex flex-wrap gap-3 rounded-2xl bg-blue-50 p-6 dark:border dark:border-navy-800 dark:bg-navy-900">
                <p className="w-full text-sm text-slate-600 dark:text-slate-300">
                  Need {service.title.toLowerCase()} in Tiruppur? Get a free quote today.
                </p>
                <a
                  href={links.tel}
                  className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-brand-400"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </a>
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-emerald-400"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:sticky lg:top-24">
            <Image
              src={service.image}
              alt={`${service.title} — Mak Tech service in Tiruppur`}
              className="h-auto w-full rounded-3xl shadow-xl shadow-navy-900/10 dark:shadow-navy-950/50"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <span className="mt-6 inline-flex items-center gap-2.5 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-navy-900 dark:border-navy-800 dark:bg-navy-900 dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-brand-500 dark:bg-brand-500/15 dark:text-brand-400">
                <ServiceIcon name={service.icon} className="h-4 w-4" />
              </span>
              Serving homes &amp; businesses across Tiruppur
            </span>
          </Reveal>
        </div>
      </section>

      {/* FAQ — native details/summary for zero-JS accessibility */}
      <section aria-labelledby="faq-heading" className="bg-slate-50 py-14 transition-colors duration-200 dark:bg-navy-900/50 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="text-center text-3xl font-bold tracking-tight text-navy-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-4">
            {service.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white p-5 open:shadow-md dark:border-navy-800 dark:bg-navy-900 dark:open:shadow-navy-950/50 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy-900 dark:text-white">
                  {faq.question}
                  <ChevronRight
                    className="h-5 w-5 shrink-0 text-brand-500 transition-transform group-open:rotate-90 dark:text-brand-400"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="border-t border-slate-100 bg-white py-12 transition-colors duration-200 dark:border-navy-850 dark:bg-navy-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="related-heading" className="text-xl font-bold text-navy-900 dark:text-white">
              Related Services
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((slug) => (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="group flex items-center justify-between rounded-xl border border-slate-200 p-5 transition-colors hover:border-brand-500 dark:border-navy-800 dark:bg-navy-900 dark:hover:border-brand-400"
                >
                  <span className="font-semibold text-navy-900 group-hover:text-brand-500 dark:text-white dark:group-hover:text-brand-400">
                    {slug
                      .split("-")
                      .map((w) => w[0].toUpperCase() + w.slice(1))
                      .join(" ")}
                  </span>
                  <ChevronRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 dark:text-slate-400" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
