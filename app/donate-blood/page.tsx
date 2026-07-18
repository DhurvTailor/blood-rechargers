"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import EligibilityChecker from "@/components/EligibilityChecker";
import { bloodGroups, states } from "@/lib/data";

export default function DonateBloodPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Become a Lifesaver"
        title="Register as a Blood Donor"
        description="Register once — our AI matching engine will alert you when a nearby patient needs your blood group."
      />
      <section className="container-page grid gap-8 py-12 lg:grid-cols-2">
        <div className="card p-6 sm:p-8">
          <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-white">Donor Details</h2>
          {submitted ? (
            <div className="mt-6 flex flex-col items-center gap-3 rounded-xl border border-vital-500/30 bg-vital-500/5 p-8 text-center">
              <CheckCircle2 size={32} className="text-vital-500" />
              <p className="font-semibold text-ink-900 dark:text-white">Thank you for registering!</p>
              <p className="text-sm text-ink-500 dark:text-ink-300">
                We&apos;ll notify you by SMS or app alert when your blood group is urgently needed nearby.
              </p>
            </div>
          ) : (
            <form
              className="mt-5 grid gap-4 sm:grid-cols-2"
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            >
              <label className="text-sm sm:col-span-2">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Full Name</span>
                <input required className="input-field" placeholder="Your full name" />
              </label>
              <label className="text-sm">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Phone Number</span>
                <input required type="tel" className="input-field" placeholder="10-digit mobile number" />
              </label>
              <label className="text-sm">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Blood Group</span>
                <select required className="input-field">
                  <option value="">Select</option>
                  {bloodGroups.map((g) => <option key={g} value={g}>{g}</option>)}
                </select>
              </label>
              <label className="text-sm">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">State</span>
                <select required className="input-field">
                  <option value="">Select</option>
                  {states.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </label>
              <label className="text-sm">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">City</span>
                <input required className="input-field" placeholder="City" />
              </label>
              <label className="flex items-center gap-2 text-sm sm:col-span-2">
                <input type="checkbox" required className="h-4 w-4 rounded border-ink-300 text-crimson-500" />
                I confirm the information above is accurate and consent to being contacted for donation requests.
              </label>
              <button type="submit" className="btn-primary sm:col-span-2">Register as Donor</button>
            </form>
          )}
        </div>

        <EligibilityChecker />
      </section>
    </>
  );
}
