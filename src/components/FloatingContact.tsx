"use client";

import { MapPin, MessageCircle, Phone } from "lucide-react";
import { links } from "@/data/site";

const actions = [
  {
    label: "Location",
    icon: MapPin,
    href: links.directions,
    external: true,
    color: "bg-brand-500 hover:bg-brand-400",
  },
  {
    label: "Call",
    icon: Phone,
    href: links.tel,
    external: false,
    color: "bg-navy-800 hover:bg-navy-700",
  },
  {
    label: "WhatsApp",
    icon: MessageCircle,
    href: links.whatsapp,
    external: true,
    color: "bg-emerald-500 hover:bg-emerald-400",
  },
];

export default function FloatingContact() {
  return (
    <>
      {/* Desktop: compact floating stack on the right with tooltips on hover */}
      <div
        className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex"
        aria-label="Quick contact"
      >
        {actions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            target={action.external ? "_blank" : undefined}
            rel={action.external ? "noopener noreferrer" : undefined}
            aria-label={action.label}
            className={`group relative flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg shadow-navy-950/30 transition-colors ${action.color}`}
          >
            <action.icon className="h-5 w-5" aria-hidden="true" />
            {/* Tooltip */}
            <span className="pointer-events-none absolute right-full mr-2 whitespace-nowrap rounded-md bg-navy-900 px-2.5 py-1 text-xs font-medium text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100">
              {action.label}
            </span>
          </a>
        ))}
      </div>

      {/* Mobile: slim fixed bottom bar */}
      <nav
        className="fixed inset-x-0 bottom-0 z-40 flex divide-x divide-navy-600 border-t border-navy-600 bg-navy-900 lg:hidden"
        aria-label="Quick contact bar"
      >
        {actions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            target={action.external ? "_blank" : undefined}
            rel={action.external ? "noopener noreferrer" : undefined}
            className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-medium text-white active:bg-navy-700"
          >
            <action.icon className="h-4 w-4" aria-hidden="true" />
            {action.label}
          </a>
        ))}
      </nav>
    </>
  );
}
