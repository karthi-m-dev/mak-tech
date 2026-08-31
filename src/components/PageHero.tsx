import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbs: { label: string; href?: string }[];
}

/** Consistent navy hero band used at the top of every subpage. */
export default function PageHero({ title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="bg-navy-900 py-14 text-white transition-colors duration-200 dark:bg-navy-950 dark:border-b dark:border-navy-800 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-400">
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />}
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-brand-300 dark:hover:text-brand-400">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-brand-300 dark:text-brand-400" aria-current="page">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="mt-4 max-w-3xl text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300 dark:text-slate-300">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
