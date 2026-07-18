"use client";

import { useState } from "react";
import { CheckCircle2, HeartHandshake } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { bloodGroups, states } from "@/lib/data";

export default function ThalassemiaRequestPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHeader
        eyebrow="Ongoing Care"
        title="Thalassemia Blood Request"
        description="Register recurring transfusion needs so nearby donors and blood banks can plan ahead for you."
      />
      <section className="container-page py-12">
        <div className="mx-auto max-w-2xl card p-6 sm:p-8">
          <div className="flex items-center gap-2">
            <HeartHandshake size={18} className="text-crimson-500" />
            <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-white">Patient Details</h2>
          </div>

          {submitted ? (
            <div className="mt-6 flex flex-col items-center gap-3 rounded-xl border border-vital-500/30 bg-vital-500/5 p-8 text-center">
              <CheckCircle2 size={32} className="text-vital-500" />
              <p className="font-semibold text-ink-900 dark:text-white">Request registered</p>
              <p className="text-sm text-ink-500 dark:text-ink-300">
                We&apos;ll proactively match your recurring transfusion schedule with nearby donors and stock.
              </p>
            </div>
          ) : (
            <form className="mt-5 grid gap-4 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <label className="text-sm sm:col-span-2">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Patient Name</span>
                <input required className="input-field" />
              </label>
              <label className="text-sm">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Blood Group Needed</span>
                <select required className="input-field">
                  {bloodGroups.map((g) => <option key={g} value={g}>{g}</option>)}
                </select>
              </label>
              <label className="text-sm">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Transfusion Frequency</span>
                <select required className="input-field">
                  <option>Every 2 weeks</option>
                  <option>Every 3 weeks</option>
                  <option>Monthly</option>
                  <option>Irregular</option>
                </select>
              </label>
              <label className="text-sm">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">State</span>
                <select required className="input-field">
                  {states.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </label>
              <label className="text-sm">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Contact Number</span>
                <input required type="tel" className="input-field" />
              </label>
              <label className="text-sm sm:col-span-2">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Hospital / Treatment Centre</span>
                <input required className="input-field" />
              </label>
              <button type="submit" className="btn-primary sm:col-span-2">Register Request</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
