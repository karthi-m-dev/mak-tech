import { Send } from "lucide-react";

export default function CtaBanner() {
  return (
    <section aria-label="Call to action" className="relative overflow-hidden py-12">
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-gradient-start via-blue-600 to-brand-gradient-end" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(255,255,255,0.1),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
            <Send className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Ready to Improve Your Technology?
            </h2>
            <p className="mt-1 text-sm text-white/80">
              Let&apos;s discuss how we can help your business grow.
            </p>
          </div>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-500 transition-colors hover:bg-slate-50 whitespace-nowrap"
        >
          Get in Touch
          <span className="text-brand-500">→</span>
        </a>
      </div>
    </section>
  );
}
