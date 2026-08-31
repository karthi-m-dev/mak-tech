import { BadgeIndianRupee, ShieldCheck, Timer, Wrench } from "lucide-react";
import Reveal from "@/components/Reveal";

const highlights = [
  { icon: Timer, title: "Quick Response", text: "Fast turnaround on every job" },
  { icon: Wrench, title: "Expert Technicians", text: "Skilled hands, honest advice" },
  { icon: ShieldCheck, title: "Quality Service", text: "Genuine parts, proper workmanship" },
  { icon: BadgeIndianRupee, title: "Affordable Pricing", text: "Fair rates, upfront quotes" },
];

export default function TrustHighlights() {
  return (
    <section aria-label="Why customers trust us" className="border-b border-slate-100 bg-white transition-colors duration-200 dark:border-navy-850 dark:bg-navy-950">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        {highlights.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-500 dark:bg-brand-500/15 dark:text-brand-400">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold text-navy-900 dark:text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
