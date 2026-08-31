"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Business Owner, Tiruppur",
    review:
      "Mak Tech provides excellent service and support. Very professional team and quick response. Highly recommended!",
    initials: "RK",
  },
  {
    name: "Priya Sharma",
    role: "Home Customer",
    review:
      "Got my laptop repaired the same day. Honest pricing and genuine parts. Will definitely come back again.",
    initials: "PS",
  },
  {
    name: "Anand Raj",
    role: "Office Manager",
    review:
      "They set up our entire office network and CCTV system. Everything works perfectly. Great team to work with.",
    initials: "AR",
  },
];

const blogPosts = [
  {
    tag: "Tech Tips",
    date: "May 15, 2024",
    title: "5 Tips to Keep Your Laptop Running Like New",
    color: "from-blue-500 to-blue-600",
  },
  {
    tag: "CCTV Guide",
    date: "May 15, 2024",
    title: "How to Choose the Right CCTV Camera for Home",
    color: "from-brand-500 to-brand-400",
  },
  {
    tag: "Networking",
    date: "May 05, 2024",
    title: "Improve Office Network Speed & Security",
    color: "from-violet-500 to-purple-600",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const go = useCallback(
    (dir: 1 | -1) =>
      setIndex((i) => (i + dir + testimonials.length) % testimonials.length),
    []
  );

  useEffect(() => {
    const id = setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[index];

  return (
    <section aria-labelledby="testimonials-heading" className="bg-white py-16 transition-colors duration-200 dark:bg-navy-950 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Testimonials */}
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-500 dark:text-brand-400">
                Testimonials
              </p>
              <h2 id="testimonials-heading" className="mt-2 text-3xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-4xl">
                What Our Clients
                <br />
                Say About <span className="text-brand-500 dark:text-brand-400">Us</span>
              </h2>

              <div className="relative mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-navy-800 dark:bg-navy-900 sm:p-8">
                {/* Quote icon */}
                <div className="mb-4 text-4xl leading-none text-brand-300 dark:text-brand-400/40">&ldquo;</div>

                <div className="min-h-32">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -24 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      <blockquote className="leading-relaxed text-slate-600 dark:text-slate-300">
                        {t.review}
                      </blockquote>
                      <figcaption className="mt-5 flex items-center gap-3">
                        <span
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-brand-300 dark:bg-navy-800 dark:text-brand-400"
                          aria-hidden="true"
                        >
                          {t.initials}
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-navy-900 dark:text-white">{t.name}</span>
                          <span className="block text-xs text-slate-400 dark:text-slate-400">{t.role}</span>
                        </span>
                      </figcaption>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="mt-6 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous testimonial"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-slate-400 transition-colors hover:border-brand-500 hover:text-brand-500 dark:border-navy-700 dark:text-slate-400 dark:hover:border-brand-400 dark:hover:text-brand-400"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next testimonial"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-slate-400 transition-colors hover:border-brand-500 hover:text-brand-500 dark:border-navy-700 dark:text-slate-400 dark:hover:border-brand-400 dark:hover:text-brand-400"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Blog */}
          <Reveal delay={0.1}>
            <div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-brand-500 dark:text-brand-400">
                    Latest Insights & News
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-4xl">
                    Our Latest Blog
                  </h2>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-brand-500 hover:text-navy-900 dark:text-brand-400 dark:hover:text-white"
                >
                  View All Articles
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <div className="mt-8 space-y-4">
                {blogPosts.map((post) => (
                  <article
                    key={post.title}
                    className="group flex gap-4 rounded-xl border border-slate-200 bg-white p-3 transition-all hover:border-brand-500/30 hover:shadow-md dark:border-navy-800 dark:bg-navy-900 dark:hover:border-navy-700"
                  >
                    <div className={`flex h-20 w-24 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${post.color}`}>
                      <span className="text-lg font-bold text-white/30">{post.tag.slice(0, 2).toUpperCase()}</span>
                    </div>
                    <div className="flex flex-1 flex-col justify-center">
                      <span className="inline-block w-fit rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-500 dark:bg-brand-500/15 dark:text-brand-400">
                        {post.tag}
                      </span>
                      <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-navy-900 transition-colors group-hover:text-brand-500 dark:text-white dark:group-hover:text-brand-400">
                        {post.title}
                      </h3>
                      <div className="mt-1 flex items-center justify-between">
                        <span className="text-xs text-slate-400 dark:text-slate-400">{post.date}</span>
                        <a
                          href="#"
                          className="text-xs font-semibold text-brand-500 hover:text-navy-900 dark:text-brand-400 dark:hover:text-white"
                        >
                          Read More →
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
