"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Award, Users, Briefcase, BadgeCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience", icon: Award },
  { value: 1500, suffix: "+", label: "Happy Customers", icon: Users },
  { value: 2500, suffix: "+", label: "Projects Completed", icon: Briefcase },
  { value: 100, suffix: "%", label: "Customer Satisfaction", icon: BadgeCheck },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-3xl font-extrabold text-white sm:text-4xl">
      {display.toLocaleString("en-IN")}
      <span className="text-brand-300">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section aria-label="Mak Tech at a glance" className="relative overflow-hidden py-14">
      {/* Blue-to-purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-gradient-start via-blue-600 to-brand-gradient-end" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <div className="mb-3 flex justify-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white">
                  <stat.icon className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm font-medium text-white/80">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
