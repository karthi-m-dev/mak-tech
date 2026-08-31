import heroImg from "@/assets/hero.svg";
import laptopImg from "@/assets/service-laptop.svg";
import cctvImg from "@/assets/service-cctv.svg";
import printerImg from "@/assets/service-printer.svg";
import desktopImg from "@/assets/service-desktop.svg";
import networkingImg from "@/assets/service-networking.svg";
import accessoriesImg from "@/assets/service-accessories.svg";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  /** Short nav/card title */
  title: string;
  /** Unique on-page H1 */
  h1: string;
  metaTitle: string;
  metaDescription: string;
  cardDescription: string;
  intro: string;
  body: string[];
  features: string[];
  faqs: ServiceFaq[];
  keywords: string;
  /** Slugs of sibling services shown as "Related Services" on the page. */
  relatedSlugs: string[];
  icon:
    | "laptop"
    | "cctv"
    | "printer"
    | "desktop"
    | "network"
    | "accessories"
    | "repair"
    | "support";
  image: typeof heroImg;
}

export const services: Service[] = [
  {
    slug: "laptop-sales-service",
    title: "Laptop Sales & Service",
    h1: "Laptop Sales & Service in Tiruppur",
    metaTitle: "Laptop Sales & Service in Tiruppur | Mak Tech",
    metaDescription:
      "Buy laptops and get expert laptop repair in Tiruppur. Upgrades, OS installation, battery and screen replacement by experienced technicians.",
    cardDescription:
      "Laptop sales, upgrades, repairs, OS installation and maintenance.",
    intro:
      "Whether you are buying a new laptop or repairing a trusted one, Mak Tech helps you get the right machine at the right price — and keeps it running smoothly for years.",
    body: [
      "At our Tiruppur store you can compare popular laptop brands and configurations suited to students, working professionals, businesses and gamers. Our team explains the differences in plain language so you buy exactly what you need — no overselling.",
      "Already own a laptop? We diagnose and repair all major brands, from slow performance and overheating to screen, keyboard and battery issues. Genuine spares, transparent quotes and quick turnaround come standard with every job.",
    ],
    features: [
      "New laptop sales across leading brands",
      "RAM & SSD upgrades for faster performance",
      "Screen, keyboard and battery replacement",
      "Windows / Linux OS installation & data backup",
      "Overheating, fan and motherboard-level service",
      "Annual maintenance for business laptop fleets",
    ],
    faqs: [
      {
        question: "How long does a typical laptop repair take?",
        answer:
          "Software issues such as OS installation are usually completed the same day. Hardware repairs depend on part availability — common parts like batteries, keyboards and RAM are typically replaced within 1–2 working days.",
      },
      {
        question: "Do you sell both new and refurbished laptops?",
        answer:
          "Yes. Along with brand-new laptops we offer quality-checked refurbished options for customers on a tighter budget. Every refurbished unit is tested before delivery.",
      },
      {
        question: "Will my data be safe during a repair or upgrade?",
        answer:
          "We take a backup of your important data before any major service whenever possible, and confirm with you beforehand if a format is required.",
      },
      {
        question: "Which areas of Tiruppur do you serve?",
        answer:
          "We serve customers across Tiruppur, Tamil Nadu. Walk into our store with your device, or contact us to arrange pickup and drop-off for larger jobs.", // TODO: List specific neighbourhoods once confirmed
      },
    ],
    keywords:
      "laptop sales tiruppur, laptop repair tiruppur, laptop service centre, ssd upgrade tiruppur, os installation",
    relatedSlugs: ["computer-repair", "computer-accessories"],
    icon: "laptop",
    image: laptopImg,
  },
  {
    slug: "cctv-installation",
    title: "CCTV Installation",
    h1: "CCTV Installation Services in Tiruppur",
    metaTitle: "CCTV Installation in Tiruppur | CCTV Camera Setup | Mak Tech",
    metaDescription:
      "Professional CCTV camera installation in Tiruppur for homes and businesses. DVR/NVR setup, remote mobile viewing, maintenance and support.",
    cardDescription:
      "CCTV camera installation, DVR/NVR setup, remote viewing and maintenance.",
    intro:
      "Protect your home, shop, office or warehouse with a properly planned CCTV system — installed neatly, configured correctly and viewable from anywhere on your phone.",
    body: [
      "We survey your property, recommend camera positions that eliminate blind spots, and supply reliable cameras and recording equipment suited to your budget. Indoor, outdoor, dome, bullet and night-vision options are available.",
      "After installation we configure the recorder, connect it to your network and set up secure remote viewing on your mobile. Existing systems can also be serviced, upgraded or extended with additional cameras.",
    ],
    features: [
      "Free site survey and camera placement plan",
      "HD IP and analogue cameras with night vision",
      "DVR/NVR installation and storage configuration",
      "Remote viewing setup on mobile and PC",
      "Cabling, mounting and tidy finishing",
      "Periodic maintenance and system upgrades",
    ],
    faqs: [
      {
        question: "How many CCTV cameras does my shop or home need?",
        answer:
          "It depends on the layout and entry points. Most homes need 2–4 cameras covering entrances and key areas, while shops often need 4–8 including billing counters and storage rooms. We recommend a count only after a site visit.",
      },
      {
        question: "Can I view my CCTV cameras on my phone?",
        answer:
          "Yes. Remote mobile viewing comes standard with every installation. We configure the app securely on your phone and show you how to use playback and live view.",
      },
      {
        question: "How many days of recording will be stored?",
        answer:
          "Storage depends on the hard disk capacity and number of cameras. As a guide, a 4-camera system with a 2 TB drive stores roughly 2–3 weeks of continuous footage. We size storage based on how far back you need to review.",
      },
      {
        question: "Do you provide CCTV maintenance contracts?",
        answer:
          "Yes, periodic maintenance visits cover lens cleaning, alignment, hard-disk health checks and software updates so your system stays dependable.",
      },
    ],
    keywords:
      "cctv installation tiruppur, cctv camera dealers, dvr nvr setup, security camera tiruppur, hikvision dahua installation",
    relatedSlugs: ["networking-solutions", "printer-service"],
    icon: "cctv",
    image: cctvImg,
  },
  {
    slug: "printer-service",
    title: "Printer Service",
    h1: "Printer Sales & Service in Tiruppur",
    metaTitle: "Printer Service & Repair in Tiruppur | Mak Tech",
    metaDescription:
      "Printer repair, servicing, toner refill and setup in Tiruppur for inkjet and laser printers of all major brands. On-time doorstep support available.",
    cardDescription:
      "Printer repair, servicing, toner/refill, setup and troubleshooting.",
    intro:
      "From paper jams and faded prints to network printing problems, Mak Tech keeps home and office printers working reliably — and supplies consumables at fair prices.",
    body: [
      "Our technicians service inkjet and laser printers across popular brands, handling print-head cleaning, roller and fuser issues, driver problems and connectivity faults. We explain what failed, what it costs to fix, and whether a repair is worth it.",
      "For offices we offer scheduled servicing and toner/refill supply so printing never grinds to a halt mid-month. New printer sales include unboxing, setup and network configuration on every connected device.",
    ],
    features: [
      "Inkjet & laser printer diagnosis and repair",
      "Print-head cleaning and roller/fuser service",
      "Toner refills and genuine cartridge supply",
      "Wi-Fi and LAN printing setup for offices",
      "Scanner and copier troubleshooting",
      "New printer sales with complete setup",
    ],
    faqs: [
      {
        question: "My printer prints blank pages. Can it be fixed?",
        answer:
          "Usually yes. Blank pages are most often caused by dried print heads (inkjet) or an empty/damaged drum unit (laser). We diagnose the exact cause first and quote only the work needed.",
      },
      {
        question: "Do you refill toner cartridges or sell new ones?",
        answer:
          "Both. Quality refills keep costs low, while genuine cartridges are available for printers where reliability matters more. We advise the better option for your specific model.",
      },
      {
        question: "Can you set up one printer for my whole office Wi-Fi?",
        answer:
          "Yes. Network printer configuration for all Windows/Mac computers and mobile devices is a routine job for us — including scanning-to-email and shared folder setups.",
      },
      {
        question: "Is doorstep printer service available in Tiruppur?",
        answer:
          "Yes, for most repairs within Tiruppur. Compact printers can also be brought to our store for faster turnaround.", // TODO: Confirm doorstep coverage area
      },
    ],
    keywords:
      "printer repair tiruppur, printer service near me, toner refill tiruppur, hp canon epson printer service",
    relatedSlugs: ["laptop-sales-service", "computer-accessories"],
    icon: "printer",
    image: printerImg,
  },
  {
    slug: "computer-repair",
    title: "Computer Repair",
    h1: "Computer Repair & Desktop Service in Tiruppur",
    metaTitle: "Computer Repair in Tiruppur | PC & Desktop Service | Mak Tech",
    metaDescription:
      "Fast computer repair in Tiruppur. Custom PC assembly, hardware upgrades, virus removal, troubleshooting and performance optimisation by skilled technicians.",
    cardDescription:
      "PC assembly, hardware upgrades, troubleshooting and performance optimization.",
    intro:
      "Slow boots, random shutdowns, blue screens or no display at all — our workshop diagnoses computer problems properly instead of guessing, and fixes them at honest prices.",
    body: [
      "We handle hardware and software repairs for desktop PCs and workstations: power supplies, motherboards, memory, storage, displays and operating systems. Every repair starts with a clear diagnosis and an upfront quote.",
      "Building a custom PC? Tell us your budget and use case — office, design, development or gaming — and we assemble a balanced machine with genuine components, cable-managed neatly and stress-tested before handover.",
    ],
    features: [
      "Complete hardware diagnosis and component repair",
      "Custom PC assembly with genuine parts",
      "RAM, SSD and graphics card upgrades",
      "Virus removal and OS reinstall without data loss",
      "Power supply, SMPS and cooling fixes",
      "Performance tuning for ageing machines",
    ],
    faqs: [
      {
        question: "My PC turns on but shows nothing on screen. What could it be?",
        answer:
          "Common causes include faulty RAM, a failed power supply, loose display connections or motherboard issues. Bring it in for a free diagnosis — we identify the faulty component before quoting anything.",
      },
      {
        question: "Should I repair my old computer or buy a new one?",
        answer:
          "If the fault is minor (like a power supply or fan), repair is usually economical. For very old systems, a modest SSD + RAM upgrade often delivers new-PC speed at a fraction of the cost. We give honest advice either way.",
      },
      {
        question: "Can you build a custom gaming or editing PC?",
        answer:
          "Yes. We spec, source genuine components, assemble and stress-test custom builds, and help you pick parts that match your budget and workload.",
      },
      {
        question: "Do you charge for diagnosis?",
        answer:
          "Diagnosis charges, if any, are adjusted against the repair when you proceed with the work. You always know the cost before we begin.",
      },
    ],
    keywords:
      "computer repair tiruppur, pc service center, custom pc build tiruppur, desktop repair near me, virus removal",
    relatedSlugs: ["laptop-sales-service", "networking-solutions"],
    icon: "repair",
    image: desktopImg,
  },
  {
    slug: "networking-solutions",
    title: "Networking Solutions",
    h1: "Networking Solutions for Homes & Offices in Tiruppur",
    metaTitle: "Networking Solutions in Tiruppur | Wi-Fi, LAN Setup | Mak Tech",
    metaDescription:
      "Home and office networking in Tiruppur: Wi-Fi setup, structured LAN cabling, router configuration and network troubleshooting with reliable after-sales support.",
    cardDescription:
      "Wi-Fi, LAN/WAN, router configuration and network troubleshooting.",
    intro:
      "Weak Wi-Fi in back rooms, dropped video calls, messy cabling — we design and fix networks so every corner of your home or office gets a stable, fast connection.",
    body: [
      "For homes we optimise router placement, configure extenders or mesh systems and secure your Wi-Fi properly. For offices we run structured LAN cabling, set up switches, racks and routers, and document everything for easy future maintenance.",
      "Existing network giving trouble? We trace faults methodically — from internet lines and routers to cabling and network cards — and resolve them permanently rather than applying temporary restarts.",
    ],
    features: [
      "Wi-Fi coverage planning, mesh & extender setup",
      "Structured LAN cabling and patch panel termination",
      "Router, switch and firewall configuration",
      "Office network racks and cable management",
      "Internet sharing and WAN failover setup",
      "Network fault diagnosis and stabilisation",
    ],
    faqs: [
      {
        question: "Why is my Wi-Fi slow even with a fast broadband plan?",
        answer:
          "Slow Wi-Fi usually comes from poor router placement, interference, old hardware or too many devices crowding one band. A short site survey lets us pinpoint the cause and fix it with placement changes, settings or a small hardware upgrade.",
      },
      {
        question: "Do you handle cabling for new offices?",
        answer:
          "Yes. We plan and install structured LAN cabling for offices under construction or renovation, terminated neatly onto patch panels and tested port-by-port.",
      },
      {
        question: "Can guests use Wi-Fi without accessing my office network?",
        answer:
          "Yes. We set up separate guest networks with their own password, keeping your office devices and data isolated.",
      },
      {
        question: "What is included in network troubleshooting?",
        answer:
          "Checking the internet line, router health, cabling, switch ports, device settings and interference sources — followed by corrective work and a clear explanation of what was wrong.",
      },
    ],
    keywords:
      "networking solutions tiruppur, wifi setup tiruppur, lan cabling, office network installation, router configuration",
    relatedSlugs: ["cctv-installation", "computer-repair"],
    icon: "network",
    image: networkingImg,
  },
  {
    slug: "computer-accessories",
    title: "Accessories & More",
    h1: "Computer Accessories in Tiruppur",
    metaTitle: "Computer Accessories Shop in Tiruppur | Mak Tech",
    metaDescription:
      "Keyboards, mice, storage drives, cables, adapters and other computer accessories in Tiruppur — genuine products with friendly advice on what fits your setup.",
    cardDescription:
      "Keyboards, mouse, storage, cables and other computer accessories.",
    intro:
      "The right accessory makes every device better. Our shelves stock everyday essentials — and the odd connector you thought nobody sold anymore.",
    body: [
      "From mechanical keyboards and silent mice to SSDs, pen drives, HDMI cables, adapters, webcams and laptop bags, we stock tested products that last. If something fails within warranty, replacement support is handled right here at our counter.",
      "Not sure which cable or drive fits your device? Bring a photo of the ports or the device itself — our staff will match it exactly, no trial-and-error purchases.",
    ],
    features: [
      "Keyboards, mice and combo sets",
      "SSDs, HDDs, pen drives and memory cards",
      "HDMI/DisplayPort/VGA cables and adapters",
      "Webcams, headsets and speakers",
      "Laptop chargers, batteries and bags",
      "Genuine consumables: cartridges, toners, cleaners",
    ],
    faqs: [
      {
        question: "Are the accessories you sell genuine?",
        answer:
          "Yes, we source from authorised distributors wherever possible and clearly label any budget alternatives so you can choose knowingly.",
      },
      {
        question: "I don't know which charger/cable fits my laptop. Can you help?",
        answer:
          "Absolutely — bring your device or a photo of its charging port and model number, and we'll match the correct accessory before you pay.",
      },
      {
        question: "Do you take bulk orders for offices?",
        answer:
          "Yes, offices regularly order keyboards, mice, cables and consumables in bulk. Contact us for pricing on quantity orders.",
      },
      {
        question: "Is warranty support handled at your shop?",
        answer:
          "For products we sell, yes — bring the item and invoice to our counter and we process warranty claims with the supplier on your behalf.",
      },
    ],
    keywords:
      "computer accessories tiruppur, keyboard mouse price, ssd pen drive tiruppur, laptop charger shop",
    relatedSlugs: ["laptop-sales-service", "printer-service"],
    icon: "accessories",
    image: accessoriesImg,
  },
];

export const getService = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
