import {
  ClipboardCheck,
  PackageCheck,
  PhoneCall,
  SearchCheck,
  Wrench,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const steps = [
  { icon: PhoneCall, title: "Contact Us", text: "Call, WhatsApp or visit our Tiruppur store to describe the issue." },
  { icon: SearchCheck, title: "Diagnose", text: "Our technicians inspect your device or site and find the real cause." },
  { icon: ClipboardCheck, title: "Get Quote", text: "You receive a clear, upfront quote — no hidden charges, ever." },
  { icon: Wrench, title: "Service / Repair", text: "Work is completed with genuine parts by experienced hands." },
  { icon: PackageCheck, title: "Delivery / Support", text: "On-time delivery with post-service support you can rely on." },
];

export default function Process() {
  return (
    <section aria-labelledby="process-heading" className="bg-white py-16 transition-colors duration-200 dark:bg-navy-950 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-500 dark:text-brand-400">
              Simple &amp; Transparent
            </p>
            <h2 id="process-heading" className="mt-2 text-3xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-4xl">
              How We Work
            </h2>
          </div>
        </Reveal>

        {/* Horizontal timeline on desktop (connecting line), vertical on mobile */}
        <ol className="relative mt-14 grid gap-10 md:grid-cols-5 md:gap-6">
          {/* Desktop connector line */}
          <span
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-7 hidden h-0.5 bg-gradient-to-r from-brand-300 via-brand-500 to-brand-300 dark:from-navy-750 dark:via-brand-500 dark:to-navy-750 md:block"
          />
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <li className="relative flex gap-5 md:flex-col md:items-center md:text-center">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-brand-500 bg-white text-brand-500 shadow-sm dark:bg-navy-900 dark:text-brand-400 dark:shadow-navy-950/60">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="md:mt-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-400 dark:text-brand-300">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-1 font-semibold text-navy-900 dark:text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {step.text}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
