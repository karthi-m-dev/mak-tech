"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Play, Timer, Wrench, ShieldCheck, BadgeIndianRupee } from "lucide-react";
import heroBg from "@/assets/cctv-camera-technology-light-lines-background-ai-generated-image-302314421_upscaled.webp";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const highlights = [
  { icon: Timer, title: "Quick Response", text: "We value your time" },
  { icon: Wrench, title: "Expert Technicians", text: "Skilled & Experienced" },
  { icon: ShieldCheck, title: "Quality Service", text: "We ensure the best" },
  { icon: BadgeIndianRupee, title: "Affordable Pricing", text: "Best service, fair price" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-white transition-colors duration-200 dark:bg-navy-950">
      {/* Full-width background image with overlay */}
      <div className="relative min-h-[500px] lg:min-h-[600px]">
        {/* Background image */}
        <Image
          src={heroBg}
          alt="Mak Tech technology solutions and CCTV surveillance systems in Tiruppur"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-transparent" />

        {/* Text content overlaid on image */}
        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.5 }}
              className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-400"
            >
              Welcome to Mak Tech
            </motion.p>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Technology Solutions
              <br />
              You Can <span className="text-brand-400">Trust.</span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-5 max-w-lg text-lg leading-relaxed text-slate-300"
            >
              We provide complete computer, laptop, CCTV, printer and
              networking solutions for homes and businesses in Tiruppur.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3 font-semibold text-white shadow-md shadow-brand-500/20 transition-all hover:bg-brand-400 hover:shadow-lg active:scale-95"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:border-brand-400 hover:text-brand-400"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30">
                  <Play className="ml-0.5 h-3.5 w-3.5" aria-hidden="true" />
                </span>
                Watch Intro
              </button>
            </motion.div>
          </div>
        </div>


      </div>

      {/* Trust highlights bar */}
      <div className="border-t border-slate-100 bg-slate-50/80 dark:border-navy-850 dark:bg-navy-900/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              className="flex items-center gap-4"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand-500 dark:bg-brand-500/15 dark:text-brand-400">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-navy-900 dark:text-white">{item.title}</h3>
                <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
