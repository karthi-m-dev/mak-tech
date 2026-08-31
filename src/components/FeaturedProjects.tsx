"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const projects = [
  {
    title: "Website Design & Development",
    category: "Corporate Website for Tech Company",
    color: "from-blue-500 to-blue-600",
    initial: "WD",
  },
  {
    title: "E-Commerce Development",
    category: "Online Store for Electronics",
    color: "from-brand-500 to-brand-400",
    initial: "EC",
  },
  {
    title: "SEO & Analytics Dashboard",
    category: "Data Analytics & Reporting System",
    color: "from-violet-500 to-purple-600",
    initial: "SA",
  },
];

export default function FeaturedProjects() {
  return (
    <section aria-labelledby="projects-heading" className="bg-slate-50 py-16 transition-colors duration-200 dark:bg-navy-900/40 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-500 dark:text-brand-400">
                Our Work
              </p>
              <h2 id="projects-heading" className="mt-2 text-3xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-4xl">
                Featured Projects
                <br />
                That Make An <span className="text-brand-500 dark:text-brand-400">Impact</span>
              </h2>
            </div>
            <Link
              href="/our-work"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-brand-500 px-5 py-2.5 text-sm font-semibold text-brand-500 transition-colors hover:bg-brand-500 hover:text-white dark:border-brand-400 dark:text-brand-400 dark:hover:bg-brand-500 dark:hover:text-white"
            >
              View All Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-navy-800 dark:bg-navy-900 dark:shadow-navy-950/40 dark:hover:border-navy-700">
                <div className={`relative h-52 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <span className="text-5xl font-bold text-white/20">{project.initial}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-navy-900 transition-colors group-hover:text-brand-500 dark:text-white dark:group-hover:text-brand-400">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{project.category}</p>
                  <span className="mt-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-colors group-hover:border-brand-500 group-hover:text-brand-500 dark:border-navy-750 dark:text-slate-400 dark:group-hover:border-brand-400 dark:group-hover:text-brand-400">
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
