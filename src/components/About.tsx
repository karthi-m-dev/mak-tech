import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import aboutImg from "@/assets/tech-fixes-motherboard-service-center_87646-3939.avif";

const points = [
  "Experienced technicians",
  "Genuine products",
  "Fast and reliable service",
  "Affordable pricing",
  "Customer satisfaction",
];

export default function About() {
  return (
    <section id="about" className="bg-white py-16 transition-colors duration-200 dark:bg-navy-950 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl shadow-xl shadow-navy-900/10 dark:shadow-navy-950/50">
            <Image
              src={aboutImg}
              alt="Mak Tech technician performing hardware repair and motherboard service in Tiruppur"
              className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-500 dark:text-brand-400">
              About Mak Tech
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-4xl">
              Your Trusted Technology Partner
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Mak Tech provides reliable computer, laptop, CCTV, printer and
              networking products and services for homes and businesses across
              Tiruppur. From a single laptop repair to complete office IT setups,
              we treat every job with the same care and attention to detail.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-8 space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3 font-medium text-navy-900 dark:text-slate-200">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-500 dark:text-brand-400" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-8 border-l-4 border-brand-500 bg-blue-50/60 p-4 text-sm leading-relaxed text-slate-600 dark:border-brand-400 dark:bg-navy-900/80 dark:text-slate-300">
              Our promise is simple: honest diagnosis, genuine parts and service
              you can depend on — long after the invoice.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
