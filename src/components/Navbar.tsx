"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { links, site } from "@/data/site";
import ThemeToggle from "@/components/ThemeToggle";
import logoImg from "@/assets/Gemini_Generated_Image_nbfbcbnbfbcbnbfb.png";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow once the user scrolls for depth
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 text-navy-900 backdrop-blur-md transition-all duration-200 dark:bg-navy-950/95 dark:text-white ${
        scrolled
          ? "shadow-lg shadow-slate-200/60 dark:border-b dark:border-navy-800 dark:shadow-navy-950/80"
          : "border-b border-slate-100 dark:border-navy-850"
      }`}
    >
      <nav
        className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo / brand */}
        <a href="#hero" className="flex shrink-0 items-center gap-2.5 font-bold tracking-wide">
          <Image
            src={logoImg}
            alt="Mak Tech Logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg object-contain shadow-md shadow-brand-500/20"
            priority
          />
          <div className="leading-tight whitespace-nowrap">
            <span className="text-lg text-navy-900 dark:text-white">
              MAK <span className="text-brand-500 dark:text-brand-400">TECH</span>
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-400">
              Technology Solutions
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-brand-500 dark:text-slate-300 dark:hover:text-brand-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={links.tel}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-brand-500 dark:text-slate-300 dark:hover:text-brand-400"
            aria-label={`Call ${site.name}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            +91 98765 43210
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-400 active:scale-95 dark:bg-brand-500 dark:hover:bg-brand-400"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile right items (Theme toggle + hamburger) */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-navy-900"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white dark:border-navy-800 dark:bg-navy-950 lg:hidden">
          <ul className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-brand-500 dark:text-slate-200 dark:hover:bg-navy-900 dark:hover:text-brand-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3 pt-3">
              <a
                href={links.tel}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-navy-750 dark:text-slate-200 dark:hover:bg-navy-900"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {site.phone}
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex flex-1 items-center justify-center rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-400"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
