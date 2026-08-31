import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import CallbackForm from "@/components/CallbackForm";
import { links, site } from "@/data/site";

const items = [
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    href: links.tel,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: site.whatsappDisplay,
    href: links.whatsapp,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: site.hours,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-16 transition-colors duration-200 dark:bg-navy-950 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-500 dark:text-brand-400">
              Get In Touch
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-4xl">
              Visit Mak Tech
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Tiruppur, Tamil Nadu, India — drop in, call or message us for sales
              and service support.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Details + actions */}
          <Reveal delay={0.05}>
            <div className="flex h-full flex-col gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-navy-800 dark:bg-navy-900">
              <ul className="space-y-5" role="list">
                {items.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-500 dark:bg-brand-500/15 dark:text-brand-400">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-400">
                        {item.label}
                      </h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.label === "WhatsApp" ? "_blank" : undefined}
                          rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                          className="font-medium text-navy-900 hover:text-brand-500 dark:text-white dark:hover:text-brand-400"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-navy-900 dark:text-white">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-500 dark:bg-brand-500/15 dark:text-brand-400">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-400">
                      Address
                    </h3>
                    <p className="font-medium text-navy-900 dark:text-white">{site.address}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-auto flex flex-wrap gap-3 pt-2">
                <a
                  href={links.tel}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-brand-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-brand-400"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </a>
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-emerald-400"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
                <a
                  href={links.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 px-5 py-3 font-semibold text-navy-900 transition-colors hover:border-brand-500 hover:text-brand-500 dark:border-navy-700 dark:text-slate-200 dark:hover:border-brand-400 dark:hover:text-brand-400 dark:hover:bg-navy-800"
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" />
                  Get Directions
                </a>
              </div>
            </div>
          </Reveal>

          {/* Callback Form */}
          <Reveal delay={0.1}>
            <CallbackForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
