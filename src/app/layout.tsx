import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { ThemeProvider } from "@/components/ThemeProvider";
import { site } from "@/data/site";
import { localBusinessJsonLd } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Homepage title & description per SEO brief; child pages override via their own metadata.
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.maktech-example.com"),
  title: {
    default: "Mak Tech | Computer, Laptop, CCTV & Printer Services in Tiruppur",
    template: "%s | Mak Tech",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "computer service Tiruppur",
    "laptop repair Tiruppur",
    "CCTV installation Tiruppur",
    "printer service Tiruppur",
    "networking solutions Tiruppur",
    "Mak Tech",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
    title: "Mak Tech | Computer, Laptop, CCTV & Printer Services in Tiruppur",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mak Tech | Computer, Laptop, CCTV & Printer Services in Tiruppur",
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('mak_tech_theme');var d=s==='dark'||((!s||s==='system')&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}else{document.documentElement.classList.remove('dark');document.documentElement.style.colorScheme='light';}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased selection:bg-brand-500 selection:text-white">
        {/* LocalBusiness / ComputerStore structured data for local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
        <ThemeProvider>
          <div className="flex min-h-screen flex-col bg-white transition-colors duration-200 dark:bg-navy-950 dark:text-slate-200">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Brands />
            <Footer />
            <FloatingContact />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
