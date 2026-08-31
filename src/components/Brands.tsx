"use client";

const brands = [
  { name: "Acer", src: "/brands/acer.png" },
  { name: "Asus", src: "/brands/ase.png" },
  { name: "Dell", src: "/brands/dell.png" },
  { name: "Fujitsu", src: "/brands/fs.png" },
  { name: "HP", src: "/brands/hp.png" },
  { name: "Lenovo", src: "/brands/lenovo.png" },
  { name: "MSI", src: "/brands/msi.png" },
];

// Duplicate for seamless loop
const duplicatedBrands = [...brands, ...brands, ...brands];

export default function Brands() {
  return (
    <section aria-labelledby="brands-heading" className="border-y border-slate-100 bg-white pt-7 pb-12 overflow-hidden transition-colors duration-200 dark:border-navy-850 dark:bg-navy-950 sm:pt-8 sm:pb-14">
      <h2 id="brands-heading" className="sr-only">
        Brands We Work With
      </h2>
      <p className="mb-7 text-center text-xs font-bold uppercase tracking-widest text-navy-900 dark:text-slate-200 sm:mb-8 sm:text-sm">
        Brands We Work With
      </p>

      {/* Scrolling track */}
      <div className="relative">
        {/* Left & right fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent dark:from-navy-950" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent dark:from-navy-950" />

        <div className="flex w-fit animate-marquee">
          {duplicatedBrands.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex shrink-0 items-center justify-center px-10"
            >
              <img
                src={brand.src}
                alt={`${brand.name} logo`}
                className="h-16 w-auto object-contain transition-all duration-300 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
