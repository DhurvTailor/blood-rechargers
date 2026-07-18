"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, Droplet, FlaskConical, Warehouse, HeartHandshake } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Register & Screen",
    duration: "10 min",
    text: "A quick health questionnaire and haemoglobin check confirm you're ready to donate today.",
  },
  {
    icon: Droplet,
    title: "Donate",
    duration: "8–10 min",
    text: "Around 350–450ml is collected under trained supervision, using sterile single-use kits.",
  },
  {
    icon: FlaskConical,
    title: "Test & Process",
    duration: "Same day",
    text: "Every unit is screened for infections and separated into red cells, plasma, and platelets.",
  },
  {
    icon: Warehouse,
    title: "Store & Match",
    duration: "Up to 42 days",
    text: "Components are refrigerated or frozen and logged into the network so nearby banks can find them.",
  },
  {
    icon: HeartHandshake,
    title: "Delivered to Patient",
    duration: "Often within hours",
    text: "The moment a request matches, the unit is dispatched — sometimes reaching a patient in the same day.",
  },
];

export default function Donorjourneytimeline() {
  const [active, setActive] = useState(1);

  return (
    <section className="container-page py-16 lg:py-20">
      <p className="section-eyebrow">The Journey</p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-ink-900 dark:text-white">
        What Happens After You Donate
      </h2>
      <p className="mt-3 max-w-xl text-ink-500 dark:text-ink-300">
        Tap a stage to see what&apos;s happening to your donation right now.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        {/* Stepper rail */}
        <div className="relative">
          <div className="absolute left-[22px] top-2 bottom-2 w-px bg-ink-100 dark:bg-ink-700" aria-hidden="true" />
          <div className="space-y-2">
            {steps.map((step, i) => {
              const isActive = active === i;
              return (
                <button
                  key={step.title}
                  onClick={() => setActive(i)}
                  className={`focus-ring relative flex w-full items-center gap-4 rounded-xl2 px-3 py-3.5 text-left transition ${
                    isActive ? "bg-crimson-50 dark:bg-ink-700" : "hover:bg-ink-50 dark:hover:bg-ink-800"
                  }`}
                >
                  <span
                    className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 transition ${
                      isActive
                        ? "border-crimson-500 bg-crimson-500 text-white"
                        : "border-ink-200 bg-white text-ink-400 dark:border-ink-600 dark:bg-ink-800"
                    }`}
                  >
                    <step.icon size={18} />
                  </span>
                  <span>
                    <span className={`block text-sm font-semibold ${isActive ? "text-crimson-600 dark:text-crimson-300" : "text-ink-800 dark:text-ink-100"}`}>
                      {step.title}
                    </span>
                    <span className="block font-mono text-xs text-ink-400">{step.duration}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail panel */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="card p-8"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-crimson-500 text-white">
            {(() => {
              const Icon = steps[active].icon;
              return <Icon size={22} />;
            })()}
          </span>
          <h3 className="mt-4 font-display text-xl font-semibold text-ink-900 dark:text-white">
            {steps[active].title}
          </h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-wide text-crimson-500">
            Stage {active + 1} of {steps.length} · {steps[active].duration}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-600 dark:text-ink-200">
            {steps[active].text}
          </p>

          <div className="mt-6 flex gap-1.5">
            {steps.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 flex-1 rounded-full transition ${i <= active ? "bg-crimson-500" : "bg-ink-100 dark:bg-ink-700"}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}