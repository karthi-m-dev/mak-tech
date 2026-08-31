"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Maximize2,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";

type Category = "All" | "CCTV & Security" | "Networking" | "Hardware Repair" | "Custom PCs" | "Printers";

interface Project {
  id: string;
  title: string;
  category: "CCTV & Security" | "Networking" | "Hardware Repair" | "Custom PCs" | "Printers";
  location: string;
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  specs: string[];
  metrics: string;
  metricLabel: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

const categories: Category[] = [
  "All",
  "CCTV & Security",
  "Networking",
  "Hardware Repair",
  "Custom PCs",
  "Printers",
];

const projects: Project[] = [
  {
    id: "cctv-enterprise",
    title: "Corporate HQ 32-Channel 4K CCTV Surveillance",
    category: "CCTV & Security",
    location: "Guindy Industrial Estate, Tiruppur",
    image: "/images/projects/cctv-surveillance.jpg",
    summary:
      "Full coverage security deployment across 3 floors with remote live feed, night vision, and centralized command desk.",
    challenge:
      "Multiple blind spots in open workspaces, server room access control, and low-light entry areas requiring reliable 24/7 recording.",
    solution:
      "Installed 32 Hikvision 4K IP Dome cameras, dual NVRs with RAID storage for 45-day retention, and custom security monitoring consoles.",
    specs: ["32x 4K Ultra HD IP Domes", "64TB RAID Surveillance Storage", "PoE Gigabit Switch Backbone", "iOS/Android Mobile Live View"],
    metrics: "100%",
    metricLabel: "Blind Spot Elimination",
    testimonial: {
      quote: "The visual clarity and mobile access give our management total peace of mind. Mak Tech finished setup over a single weekend.",
      author: "Siddharth R.",
      role: "Operations Director",
    },
  },
  {
    id: "network-server-rack",
    title: "Structured Server Room LAN & 10Gbps Fiber Backbone",
    category: "Networking",
    location: "OMR IT Corridor, Tiruppur",
    image: "/images/projects/server-rack-cabling.jpg",
    summary:
      "Complete server rack re-architecture, Cat6A structured cabling, and multi-VLAN enterprise Wi-Fi for 150+ engineers.",
    challenge:
      "Tangled cable infrastructure causing intermittent network drops, overheating switches, and lack of guest network isolation.",
    solution:
      "Full cable dressing with color-coded Cat6A lines, 48-port managed switches, redundant fiber uplinks, and enterprise firewall setup.",
    specs: ["Cat6A 10Gbps Shielded Cable", "Cisco Managed L3 Switches", "Fortinet Hardware Firewall", "Dual ISP Failover Load Balancing"],
    metrics: "99.99%",
    metricLabel: "Network Uptime Achieved",
    testimonial: {
      quote: "Cleanest server rack in our building! Zero network latency issues since the overhaul.",
      author: "Venkatesh K.",
      role: "Head of Infrastructure",
    },
  },
  {
    id: "laptop-chipset-repair",
    title: "Precision Micro-Soldering & Motherboard Recovery",
    category: "Hardware Repair",
    location: "T. Nagar Service Centre, Tiruppur",
    image: "/images/projects/laptop-chip-repair.jpg",
    summary:
      "Component-level logic board repair for high-end Dell Precision and MacBook Pro laptops with zero data loss.",
    challenge:
      "Liquid damage and shorted power rail causing complete failure. Official service center quoted full board replacement with high cost.",
    solution:
      "Microscope-guided IC replacement, ultrasonic cleaning of oxidized traces, and power delivery restoration within 24 hours.",
    specs: ["Component-level BGA Soldering", "Genuine OEM Power Management ICs", "100% Data Preservation", "90-Day Warranty"],
    metrics: "65%",
    metricLabel: "Cost Saved vs Replacement",
    testimonial: {
      quote: "My entire development environment was on that laptop. They saved the logic board and all my files on the same day.",
      author: "Deepak S.",
      role: "Senior Software Architect",
    },
  },
  {
    id: "custom-pc-workstation",
    title: "Dual-GPU 3D Animation & Rendering Workstation",
    category: "Custom PCs",
    location: "Anna Nagar, Tiruppur",
    image: "/images/projects/custom-workstation.jpg",
    summary:
      "Custom assembled liquid-cooled super-workstation tailored for 8K video editing, Unreal Engine 5, and CAD workflows.",
    challenge:
      "Client experienced severe render bottlenecks and thermal throttling on stock pre-built systems.",
    solution:
      "Engineered custom airflow chassis with Intel Core i9, dual RTX 4090s, 128GB DDR5 RAM, and custom low-noise liquid cooling.",
    specs: ["Intel Core i9 14900K", "NVIDIA RTX 4090 24GB", "128GB DDR5 6000MHz RAM", "Dual 4TB Gen4 NVMe RAID"],
    metrics: "3.8x",
    metricLabel: "Faster 8K Render Times",
    testimonial: {
      quote: "Runs whisper-quiet under 100% load during overnight 3D renders. The build quality and cable neatness are top tier.",
      author: "Karthik Menon",
      role: "VFX Creative Studio Lead",
    },
  },
  {
    id: "printer-fleet-deployment",
    title: "Commercial Multifunction Laser Fleet Deployment",
    category: "Printers",
    location: "Nungambakkam, Tiruppur",
    image: "/images/projects/printer-fleet.jpg",
    summary:
      "Managed print services setup with secure badge release, automated toner monitoring, and high-speed duplex units.",
    challenge:
      "High per-page printing costs, frequent paper jams, and unmonitored confidential document handling across departments.",
    solution:
      "Deployed 8 heavy-duty Canon imageRUNNER laser multifunction units networked with departmental pin authentication.",
    specs: ["Canon imageRUNNER 55ppm", "Network Secure Print PIN", "Auto Low-Toner Telemetry", "Comprehensive AMC Support"],
    metrics: "40%",
    metricLabel: "Reduced Printing Costs",
    testimonial: {
      quote: "Print jobs run smoothly across all accounting and legal desks. Supplies arrive proactively without delays.",
      author: "Meera Subramanian",
      role: "Administrative Head",
    },
  },
  {
    id: "retail-pos-security",
    title: "Retail Boutique Multi-Branch POS & Security Hub",
    category: "CCTV & Security",
    location: "Alwarpet & Velachery, Tiruppur",
    image: "/images/projects/retail-pos-security.jpg",
    summary:
      "Synchronized POS billing terminals, barcode scanners, and wide-angle customer counter security cameras.",
    challenge:
      "Need seamless billing speed at checkout counters along with discrete high-resolution cameras capturing cash transactions.",
    solution:
      "Installed compact POS touch terminals, thermal receipt printers, and wide dynamic range counter-focused dome cameras.",
    specs: ["Touch POS Terminals", "High-Speed Thermal Printers", "WDR Counter Security Domes", "Central Cloud Backup"],
    metrics: "0",
    metricLabel: "Checkout Downtime",
    testimonial: {
      quote: "Fast billing and crystal clear security over cash transactions. Mak Tech handled the full store fit-out seamlessly.",
      author: "Anitha Prakash",
      role: "Retail Store Owner",
    },
  },
];

const workStats = [
  { label: "Completed Projects", value: "2,500+", icon: Award },
  { label: "Enterprise & Home Clients", value: "1,500+", icon: ShieldCheck },
  { label: "On-Time Service Rate", value: "99.8%", icon: CheckCircle2 },
  { label: "Years in Tiruppur", value: "10+", icon: Wrench },
];

export default function OurWorkClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageHero
        title="Our Work & Case Studies"
        description="Explore real projects delivered by Mak Tech across Tiruppur — from commercial CCTV networks and server infrastructure to precision hardware engineering."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Work" }]}
      />

      {/* Main Showcase Section */}
      <section className="bg-slate-50/70 py-14 transition-colors duration-200 dark:bg-navy-950 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header & Filter Controls */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brand-500 dark:text-brand-400">
                <Sparkles className="h-3.5 w-3.5" />
                Proven Engineering
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 dark:text-white sm:text-4xl">
                Recent Projects Portfolio
              </h2>
              <p className="mt-2 max-w-2xl text-base text-slate-500 dark:text-slate-400">
                Filter by category to view our real-world implementations, equipment specifications, and measurable results.
              </p>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`relative rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-brand-500 text-white shadow-md shadow-brand-500/25 dark:bg-brand-500"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-brand-500/40 hover:text-brand-500 dark:border-navy-800 dark:bg-navy-900 dark:text-slate-300 dark:hover:border-navy-700 dark:hover:text-brand-400"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/50 hover:shadow-xl hover:shadow-brand-500/10 dark:border-navy-800 dark:bg-navy-900/90 dark:shadow-navy-950/60 dark:hover:border-brand-400/50"
                >
                  {/* Image container with subtle zoom */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-80" />

                    {/* Category badge */}
                    <span className="absolute left-4 top-4 rounded-lg bg-navy-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md dark:bg-navy-950/80">
                      {project.category}
                    </span>

                    {/* Expand icon indicator */}
                    <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-110 group-hover:bg-brand-500">
                      <Maximize2 className="h-4 w-4" />
                    </span>

                    {/* Location chip */}
                    <span className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs font-medium text-slate-200 drop-shadow">
                      <MapPin className="h-3.5 w-3.5 text-brand-400" />
                      {project.location}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold leading-snug text-navy-900 transition-colors group-hover:text-brand-500 dark:text-white dark:group-hover:text-brand-400">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {project.summary}
                    </p>

                    {/* Metric pill */}
                    <div className="mt-5 flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-2.5 dark:border-navy-800 dark:bg-navy-950/60">
                      <div>
                        <p className="text-lg font-extrabold text-brand-500 dark:text-brand-400">
                          {project.metrics}
                        </p>
                        <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-400">
                          {project.metricLabel}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-500 group-hover:text-brand-400">
                        View Study
                        <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>

                    {/* Specs chips */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.specs.slice(0, 2).map((spec) => (
                        <span
                          key={spec}
                          className="rounded-md border border-slate-200/60 bg-white px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:border-navy-750 dark:bg-navy-800 dark:text-slate-300"
                        >
                          {spec}
                        </span>
                      ))}
                      {project.specs.length > 2 && (
                        <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500 dark:bg-navy-800 dark:text-slate-400">
                          +{project.specs.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Trust & Delivery Stats Bar */}
      <section className="border-y border-slate-100 bg-white py-12 transition-colors duration-200 dark:border-navy-850 dark:bg-navy-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {workStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 text-left"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-500 dark:bg-brand-500/15 dark:text-brand-400">
                  <stat.icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-2xl font-extrabold tracking-tight text-navy-900 dark:text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-navy-950/75 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-navy-800 dark:bg-navy-900 sm:p-8"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 dark:bg-navy-800 dark:text-slate-300 dark:hover:bg-navy-700"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Modal Image Header */}
              <div className="relative mb-6 h-64 w-full overflow-hidden rounded-2xl bg-slate-900 sm:h-72">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 768px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs font-semibold text-white drop-shadow">
                  <MapPin className="h-4 w-4 text-brand-400" />
                  {selectedProject.location}
                </span>
                <span className="absolute right-4 bottom-4 rounded-lg bg-brand-500 px-3 py-1 text-xs font-semibold text-white">
                  {selectedProject.category}
                </span>
              </div>

              {/* Title & Key Stat */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-extrabold text-navy-900 dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {selectedProject.summary}
                  </p>
                </div>

                <div className="shrink-0 rounded-2xl border border-brand-500/20 bg-brand-500/10 p-4 text-center dark:border-brand-500/30">
                  <p className="text-2xl font-black text-brand-500 dark:text-brand-400">
                    {selectedProject.metrics}
                  </p>
                  <p className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
                    {selectedProject.metricLabel}
                  </p>
                </div>
              </div>

              {/* Problem vs Solution Grid */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 dark:border-navy-800 dark:bg-navy-950/60">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-navy-900 dark:text-white">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-rose-500/10 text-rose-500 text-xs">!</span>
                    The Challenge
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 dark:border-navy-800 dark:bg-navy-950/60">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-navy-900 dark:text-white">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 text-xs">✓</span>
                    The Mak Tech Solution
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Specs & Hardware Included */}
              <div className="mt-6">
                <h4 className="text-sm font-bold text-navy-900 dark:text-white">
                  Hardware & Technology Specifications
                </h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {selectedProject.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white p-3 text-xs font-medium text-slate-700 dark:border-navy-800 dark:bg-navy-950 dark:text-slate-300"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-500 dark:text-brand-400" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Client Quote */}
              {selectedProject.testimonial && (
                <div className="mt-6 rounded-2xl border border-brand-500/20 bg-blue-50/50 p-5 dark:border-navy-800 dark:bg-navy-950/50">
                  <p className="text-xs italic leading-relaxed text-slate-700 dark:text-slate-300">
                    &ldquo;{selectedProject.testimonial.quote}&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-bold text-navy-900 dark:text-white">
                    — {selectedProject.testimonial.author},{" "}
                    <span className="font-normal text-slate-500 dark:text-slate-400">
                      {selectedProject.testimonial.role}
                    </span>
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-navy-800">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-xl border border-slate-200 px-5 py-2.5 text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100 dark:border-navy-750 dark:text-slate-300 dark:hover:bg-navy-800"
                >
                  Close
                </button>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-brand-500/20 transition-all hover:bg-brand-400"
                >
                  Request Similar Solution
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Contact />
    </>
  );
}
