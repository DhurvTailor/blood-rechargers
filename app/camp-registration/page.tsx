"use client";

import { useState } from "react";
import { CheckCircle2, Tent } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export default function CampRegistrationPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHeader
        eyebrow="Organise a Camp"
        title="Register a Blood Donation Camp"
        description="Planning a donation drive? List it here so donors nearby can find and join it."
      />
      <section className="container-page py-12">
        <div className="mx-auto max-w-2xl card p-6 sm:p-8">
          <div className="flex items-center gap-2">
            <Tent size={18} className="text-crimson-500" />
            <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-white">Camp Details</h2>
          </div>

          {submitted ? (
            <div className="mt-6 flex flex-col items-center gap-3 rounded-xl border border-vital-500/30 bg-vital-500/5 p-8 text-center">
              <CheckCircle2 size={32} className="text-vital-500" />
              <p className="font-semibold text-ink-900 dark:text-white">Camp submitted for review</p>
              <p className="text-sm text-ink-500 dark:text-ink-300">
                Once approved, it will appear on the Blood Donation Camp page and be promoted to nearby donors.
              </p>
            </div>
          ) : (
            <form className="mt-5 grid gap-4 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <label className="text-sm sm:col-span-2">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Camp Title</span>
                <input required className="input-field" placeholder="e.g. World Blood Donor Day Camp" />
              </label>
              <label className="text-sm">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Organiser</span>
                <input required className="input-field" placeholder="Organisation name" />
              </label>
              <label className="text-sm">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Date</span>
                <input required type="date" className="input-field" />
              </label>
              <label className="text-sm sm:col-span-2">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Venue Address</span>
                <textarea required rows={2} className="input-field resize-none" placeholder="Venue, city" />
              </label>
              <label className="text-sm">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Expected Donors</span>
                <input required type="number" min={1} className="input-field" placeholder="e.g. 150" />
              </label>
              <label className="text-sm">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Contact Number</span>
                <input required type="tel" className="input-field" placeholder="Organiser contact" />
              </label>
              <button type="submit" className="btn-primary sm:col-span-2">Submit Camp</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
