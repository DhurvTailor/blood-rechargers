"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHeader eyebrow="Get In Touch" title="Contact Us" description="Questions, partnership requests, or urgent help — we're here." />
      <section className="container-page grid gap-8 py-14 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-1">
          <div className="card flex items-start gap-3 p-5">
            <Phone size={18} className="mt-0.5 text-crimson-500" />
            <div>
              <p className="font-semibold text-ink-900 dark:text-white">24×7 Emergency Line</p>
              <a href="tel:+911800123456" className="text-sm text-ink-500 hover:text-crimson-600 dark:text-ink-300">+91 1800-123-456</a>
            </div>
          </div>
          <div className="card flex items-start gap-3 p-5">
            <Mail size={18} className="mt-0.5 text-crimson-500" />
            <div>
              <p className="font-semibold text-ink-900 dark:text-white">Email</p>
              <a href="mailto:support@bloodrechargers.com" className="text-sm text-ink-500 hover:text-crimson-600 dark:text-ink-300">support@bloodrechargers.com</a>
            </div>
          </div>
          <div className="card flex items-start gap-3 p-5">
            <MapPin size={18} className="mt-0.5 text-crimson-500" />
            <div>
              <p className="font-semibold text-ink-900 dark:text-white">Head Office</p>
              <p className="text-sm text-ink-500 dark:text-ink-300">Jaipur, Rajasthan, India</p>
            </div>
          </div>
        </div>

        <div className="card p-6 sm:p-8 lg:col-span-2">
          {submitted ? (
            <div className="flex flex-col items-center gap-3 rounded-xl border border-vital-500/30 bg-vital-500/5 p-10 text-center">
              <CheckCircle2 size={32} className="text-vital-500" />
              <p className="font-semibold text-ink-900 dark:text-white">Message sent</p>
              <p className="text-sm text-ink-500 dark:text-ink-300">We typically respond within one business day.</p>
            </div>
          ) : (
            <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <label className="text-sm">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Name</span>
                <input required className="input-field" />
              </label>
              <label className="text-sm">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Email</span>
                <input required type="email" className="input-field" />
              </label>
              <label className="text-sm sm:col-span-2">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Subject</span>
                <input required className="input-field" />
              </label>
              <label className="text-sm sm:col-span-2">
                <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Message</span>
                <textarea required rows={5} className="input-field resize-none" />
              </label>
              <button type="submit" className="btn-primary sm:col-span-2">Send Message</button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
