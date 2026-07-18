"use client";

import { useState } from "react";
import { bloodGroups, compatibility } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function CompatibilityChart() {
  const [selected, setSelected] = useState("O+");
  const info = compatibility[selected];

  return (
    <section className="container-page py-16 lg:py-20">
      <div className="max-w-2xl">
        <p className="section-eyebrow">Know Your Match</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-ink-900 dark:text-white">
          Who Can You Give Blood To?
        </h2>
        <p className="mt-3 text-ink-500 dark:text-ink-300">
          Select a blood group to see who it can donate to, and who it can safely receive from.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {bloodGroups.map((g) => (
          <button
            key={g}
            onClick={() => setSelected(g)}
            className={`rounded-full border px-4 py-2 text-sm font-mono font-semibold transition ${
              selected === g
                ? "border-crimson-500 bg-crimson-500 text-white"
                : "border-ink-200 text-ink-700 hover:border-crimson-300 dark:border-ink-600 dark:text-ink-100"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="card p-6">
          <p className="flex items-center gap-2 text-sm font-semibold text-ink-800 dark:text-white">
            <span className="rounded-full bg-crimson-500 px-3 py-1 font-mono text-white">{selected}</span>
            <ArrowRight size={15} /> can donate to
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {info.canDonateTo.map((g) => (
              <span key={g} className="rounded-lg bg-crimson-50 px-3 py-1.5 font-mono text-sm text-crimson-700 dark:bg-ink-700 dark:text-crimson-300">
                {g}
              </span>
            ))}
          </div>
        </div>
        <div className="card p-6">
          <p className="flex items-center gap-2 text-sm font-semibold text-ink-800 dark:text-white">
            can receive from <ArrowRight size={15} />
            <span className="rounded-full bg-vital-500 px-3 py-1 font-mono text-white">{selected}</span>
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {info.canReceiveFrom.map((g) => (
              <span key={g} className="rounded-lg bg-vital-500/10 px-3 py-1.5 font-mono text-sm text-vital-600 dark:text-vital-400">
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
