import type { Metadata } from "next";
import { Search, Sparkles, Phone, HeartHandshake } from "lucide-react";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "How It Works" };

const steps = [
  { icon: Search, title: "Search", text: "Look up blood availability by state, city, group, or component — or just describe your need in plain language." },
  { icon: Sparkles, title: "AI matches you", text: "Our matching engine ranks the nearest verified banks and donors by stock, distance, and reliability." },
  { icon: Phone, title: "Connect instantly", text: "Call, WhatsApp, or get directions to the blood bank in one tap — no waiting on hold." },
  { icon: HeartHandshake, title: "Donate & save lives", text: "Register as a donor once, and get notified automatically when your blood group is needed nearby." },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader eyebrow="Process" title="How Blood Rechargers Works" description="From search to save — here's the full journey." />
      <section className="container-page py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="card relative p-6">
              <span className="font-mono text-xs text-ink-300">{String(i + 1).padStart(2, "0")}</span>
              <s.icon size={22} className="mt-2 text-crimson-500" />
              <h3 className="mt-3 font-display text-base font-semibold text-ink-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-500 dark:text-ink-300">{s.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
