"use client";

import { useState } from "react";
import { Phone } from "lucide-react";

const categories = [
  "Laptop Service",
  "Computer Repair",
  "CCTV Installation",
  "Printer Service",
  "Networking",
  "Accessories",
  "Other",
];

export default function CallbackForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg dark:border-navy-800 dark:bg-navy-900">
      <h3 className="text-xl font-bold text-navy-900 dark:text-white">
        Get a Callback
      </h3>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        Quick enquiry for Tiruppur
      </p>

      {submitted ? (
        <div className="mt-8 flex flex-col items-center justify-center py-8 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
            <Phone className="h-8 w-8" />
          </div>
          <p className="text-lg font-semibold text-navy-900 dark:text-white">
            Thank you!
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            We&apos;ll call you back shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name *"
              required
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy-900 placeholder-slate-400 outline-none transition-colors focus:border-brand-500 focus:bg-white dark:border-navy-700 dark:bg-navy-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-brand-400"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number *"
              required
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy-900 placeholder-slate-400 outline-none transition-colors focus:border-brand-500 focus:bg-white dark:border-navy-700 dark:bg-navy-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-brand-400"
            />
          </div>
          <div>
            <select
              defaultValue=""
              required
              className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-brand-500 focus:bg-white dark:border-navy-700 dark:bg-navy-800 dark:text-white dark:focus:border-brand-400 [&>option]:text-navy-900 dark:[&>option]:text-white"
            >
              <option value="" disabled>
                Select Category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <textarea
              placeholder="Message (Optional)"
              rows={3}
              className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy-900 placeholder-slate-400 outline-none transition-colors focus:border-brand-500 focus:bg-white dark:border-navy-700 dark:bg-navy-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-brand-400"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-brand-500 py-3 text-sm font-semibold text-white shadow-md shadow-brand-500/20 transition-all hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-500/30 active:scale-[0.98]"
          >
            Request Call
          </button>
        </form>
      )}
    </div>
  );
}
