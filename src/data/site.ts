/**
 * Central site configuration for Mak Tech.
 *
 * ⚠️ PLACEHOLDERS: Every value wrapped in brackets below (e.g. "[PHONE NUMBER]")
 * must be replaced with real business information before going live.
 * Do not publish the site while placeholders remain.
 */

// TODO: Replace with the real production domain (used for canonical URLs, sitemap, OG tags).
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.maktech-example.com";

export const site = {
  name: "Mak Tech",
  legalName: "Mak Tech", // TODO: Update to registered business name if different
  tagline: "Technology Solutions You Can Trust",
  description:
    "Mak Tech provides laptop sales and service, computer repair, CCTV installation, printer service, networking and technology solutions in Tiruppur.",
  city: "Tiruppur",
  region: "Tamil Nadu",
  country: "India",
  addressLocality: "Tiruppur",
  address: "228, Kannammal Building, Kongu Main Road, LRG Compound Opposite, Tiruppur, Tamil Nadu, India",
  postalCode: "[POSTAL CODE]",
  // ⚠️ PLACEHOLDER — replace with real phone number (used in tel: links).
  phone: "[PHONE NUMBER]",
  // ⚠️ PLACEHOLDER — replace with the WhatsApp number in international format without "+".
  whatsapp: "[WHATSAPP NUMBER]",
  whatsappDisplay: "[WHATSAPP NUMBER]",
  email: "[EMAIL]",
  hours: "Mon – Sat: 9:30 AM – 8:00 PM | Sun: 10:00 AM – 2:00 PM", // TODO: Confirm actual business hours
  openingHoursSchema: ["Mo-Sa 09:30-20:00", "Su 10:00-14:00"],
  googleMapEmbedUrl:
    "https://www.google.com/maps?q=228+Kannammal+Building+Kongu+Main+Road+LRG+Compound+Opposite+Tiruppur+Tamil+Nadu+India&output=embed",
  googleMapDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=228+Kannammal+Building+Kongu+Main+Road+LRG+Compound+Opposite+Tiruppur+Tamil+Nadu+India",
} as const;

/** Convenience link builders so tel:/wa.me links stay consistent everywhere. */
export const links = {
  tel: `tel:${site.phone}`,
  whatsapp: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hi Mak Tech, I would like to enquire about your services."
  )}`,
  directions: site.googleMapDirectionsUrl,
};
