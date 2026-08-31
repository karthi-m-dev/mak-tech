import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";
import { faqJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";

const service = getService("printer-service")!;

export const metadata: Metadata = pageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${service.slug}`,
});

export default function PrinterServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            serviceJsonLd(service),
            faqJsonLd(service.faqs),
          ]),
        }}
      />
      <ServicePage service={service} />
    </>
  );
}
