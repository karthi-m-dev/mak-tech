import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
  Linkedin,
} from "lucide-react";
import { links, site } from "@/data/site";
import { services } from "@/data/services";
import logoImg from "@/assets/Gemini_Generated_Image_nbfbcbnbfbcbnbfb.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/our-work" },
  { label: "Products", href: "/products" },
  { label: "Blogs", href: "#" },
  { label: "Contact Us", href: "/contact" },
];

const supportLinks = [
  { label: "Remote Support", href: "/contact" },
  { label: "Warranty Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "FAQ", href: "#" },
];

const socials = [
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "WhatsApp", icon: MessageCircle, href: links.whatsapp },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "YouTube", icon: Youtube, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 pb-24 text-slate-300 lg:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        {/* Company */}
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-white">
            <Image
              src={logoImg}
              alt="Mak Tech Logo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-lg object-contain"
            />
            <div className="leading-tight">
              <span className="text-lg tracking-wide">
                MAK <span className="text-brand-400">TECH</span>
              </span>
              <span className="block text-[10px] font-medium uppercase tracking-wider text-slate-500">
                Technology Solutions
              </span>
            </div>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            Mak Tech provides complete computer, laptop, CCTV, printer and
            networking solutions in Tiruppur. Quality service, expert support,
            and customer satisfaction is our priority.
          </p>
          <div className="mt-6 flex gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${site.name} on ${social.label}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-800 text-slate-400 transition-colors hover:bg-brand-500 hover:text-white"
              >
                <social.icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick links">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-brand-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Our services">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
            Our Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/${service.slug}`} className="transition-colors hover:text-brand-300">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Support + Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white">
            Support
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {supportLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition-colors hover:text-brand-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-widest text-white">
            Contact Us
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              {site.address}
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              <a href={links.tel} className="hover:text-brand-300">+91 98765 43210</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-brand-300">info@maktech.com</a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              Mon - Sat: 9:00 AM – 7:00 PM
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {site.name}. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-slate-300">Privacy Policy</Link>
            <span>|</span>
            <Link href="#" className="hover:text-slate-300">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
