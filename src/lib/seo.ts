import { site, SITE_URL } from "@/data/site";

/** Builds an absolute URL for canonical tags, OG images and the sitemap. */
export const absUrl = (path = "/"): string =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export interface PageSeoInput {
  title: string;
  description: string;
  path: string;
}

/** Standard metadata for any page, with canonical + Open Graph + Twitter. */
export function pageMetadata({ title, description, path }: PageSeoInput) {
  return {
    title,
    description,
    alternates: { canonical: absUrl(path) },
    openGraph: {
      title,
      description,
      url: absUrl(path),
      siteName: site.name,
      type: "website" as const,
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
    },
  };
}

interface LocalBusinessJsonLdInput {
  /** Extra schema types to merge in (e.g. "ComputerStore"). */
  additionalTypes?: string[];
}

/**
 * LocalBusiness JSON-LD for local SEO.
 * ⚠️ Uses placeholder contact details from data/site.ts — replace them
 * there before publishing so search engines see real information.
 */
export function localBusinessJsonLd({
  additionalTypes = ["ComputerStore"],
}: LocalBusinessJsonLdInput = {}) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", ...additionalTypes],
    name: site.name,
    description: site.description,
    url: SITE_URL,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: site.addressLocality,
      addressRegion: site.region,
      addressCountry: "IN",
      postalCode: site.postalCode,
    },
    areaServed: {
      "@type": "City",
      name: `${site.city}, ${site.region}`,
    },
    openingHours: site.openingHoursSchema,
    priceRange: "₹₹",
  };
}

/** Service-specific JSON-LD used on each dedicated service page. */
export function serviceJsonLd(service: {
  h1: string;
  metaDescription: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    description: service.metaDescription,
    url: absUrl(`/${service.slug}`),
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.city,
        addressRegion: site.region,
        addressCountry: "IN",
      },
    },
    areaServed: `${site.city}, ${site.region}`,
  };
}

/** FAQPage JSON-LD to make FAQs eligible for rich results. */
export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
