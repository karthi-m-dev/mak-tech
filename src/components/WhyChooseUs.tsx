import {
  BadgeIndianRupee,
  Headset,
  PackageCheck,
  Timer,
  UserCog,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const reasons = [
  { icon: UserCog, title: "Skilled & Certified Technicians", text: "Trained professionals who keep up with the latest hardware and systems." },
  { icon: PackageCheck, title: "Genuine Products", text: "Authorised spares and accessories — no questionable duplicates." },
  { icon: Timer, title: "Fast & On-time Service", text: "Realistic timelines, honoured commitments, quick turnaround." },
  { icon: BadgeIndianRupee, title: "Affordable Pricing", text: "Fair, transparent quotes agreed before any work begins." },
  { icon: Headset, title: "Customer Support", text: "We stay reachable after the job is done — that's a promise." },
];

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="why-heading" className="relative overflow-hidden bg-navy-900 py-16 transition-colors duration-200 dark:bg-navy-950 dark:border-y dark:border-navy-800 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.15),transparent_55%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">
              The Mak Tech Difference
            </p>
            <h2 id="why-heading" className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why Choose Mak Tech
            </h2>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5" role="list">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.08}>
              <li className="h-full rounded-2xl border border-navy-600 bg-navy-800/70 p-6 transition-colors hover:border-brand-500/60 dark:border-navy-800 dark:bg-navy-900/80 dark:hover:border-brand-400/50">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
                  <reason.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="font-semibold text-white">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{reason.text}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
