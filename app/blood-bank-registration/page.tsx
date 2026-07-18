"use client";

import { useState } from "react";
import { CheckCircle2, Building2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { states } from "@/lib/data";

export default function BloodBankRegistrationPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHeader
        eyebrow="Partner With Us"
        title="Register Your Blood Bank"
        description="List your inventory on Blood Rechargers so verified donors and patients can find you in real time."
      />
      <section className="container-page py-12">
        <div className="mx-auto max-w-2xl card p-6 sm:p-8">
          <div className="flex items-center gap-2">
            <Building2 size={18} className="text-crimson-500" />
            <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-white">Blood Bank Details</h2>
          </div>

          {submitted ? (
            <div className="mt-6 flex flex-col items-center gap-3 rounded-xl border border-vital-500/30 bg-vital-500/5 p-8 text-center">
              <CheckCircle2 size={32} className="text-vital-500" />
              <p className="font-semibold text-ink-900 dark:text-white">Registration submitted</p>
              <p className="text-sm text-ink-500 dark:text-ink-300">
                Our verification team will confirm your license details within 2–3 business days.
              </p>
            </div>
          ) : (
            <form className="mt-5 grid gap-4 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <label className="text-sm sm:col-span-2">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Blood Bank Name</span>
                <input required className="input-field" placeholder="e.g. City Hospital Blood Bank" />
              </label>
              <label className="text-sm">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Category</span>
                <select required className="input-field">
                  <option>Government Blood Bank</option>
                  <option>Private Blood Bank</option>
                  <option>NGO run Blood Bank</option>
                </select>
              </label>
              <label className="text-sm">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">License Number</span>
                <input required className="input-field" placeholder="Blood bank license no." />
              </label>
              <label className="text-sm sm:col-span-2">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Full Address</span>
                <textarea required rows={2} className="input-field resize-none" placeholder="Street, area, city, pincode" />
              </label>
              <label className="text-sm">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">State</span>
                <select required className="input-field">
                  {states.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </label>
              <label className="text-sm">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Contact Number</span>
                <input required type="tel" className="input-field" placeholder="Landline or mobile" />
              </label>
              <button type="submit" className="btn-primary sm:col-span-2">Submit for Verification</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
