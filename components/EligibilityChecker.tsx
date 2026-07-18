"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, Sparkles, Loader2 } from "lucide-react";

type Result = {
  eligible: boolean;
  confidenceScore: number;
  reasons: string[];
  disclaimer: string;
};

export default function EligibilityChecker() {
  const [form, setForm] = useState({
    age: 25,
    weight: 60,
    lastDonationDays: "",
    hasChronicIllness: false,
    isPregnantOrRecent: false,
    hadRecentTattoo: false,
    hemoglobin: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/eligibility-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          age: Number(form.age),
          weight: Number(form.weight),
          lastDonationDays: form.lastDonationDays === "" ? null : Number(form.lastDonationDays),
          hasChronicIllness: form.hasChronicIllness,
          isPregnantOrRecent: form.isPregnantOrRecent,
          hadRecentTattoo: form.hadRecentTattoo,
          hemoglobin: form.hemoglobin === "" ? null : Number(form.hemoglobin),
        }),
      });
      const data = await res.json();
      setResult(data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card p-6 sm:p-8">
      <div className="flex items-center gap-2">
        <Sparkles size={16} className="text-crimson-500" />
        <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
          AI Eligibility Pre-Check
        </h3>
      </div>
      <p className="mt-2 text-sm text-ink-500 dark:text-ink-300">
        Answer a few quick questions to see if you&apos;re likely eligible to donate today.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="text-sm">
          <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Age</span>
          <input type="number" min={0} max={120} required className="input-field"
            value={form.age} onChange={(e) => setForm({ ...form, age: Number(e.target.value) })} />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Weight (kg)</span>
          <input type="number" min={0} max={300} required className="input-field"
            value={form.weight} onChange={(e) => setForm({ ...form, weight: Number(e.target.value) })} />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Days since last donation</span>
          <input type="number" min={0} placeholder="Leave blank if first time" className="input-field"
            value={form.lastDonationDays} onChange={(e) => setForm({ ...form, lastDonationDays: e.target.value })} />
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Haemoglobin (g/dL) — optional</span>
          <input type="number" step="0.1" placeholder="e.g. 13.5" className="input-field"
            value={form.hemoglobin} onChange={(e) => setForm({ ...form, hemoglobin: e.target.value })} />
        </label>

        <div className="sm:col-span-2 grid gap-2 sm:grid-cols-3">
          <label className="flex items-center gap-2 text-sm text-ink-700 dark:text-ink-100">
            <input type="checkbox" checked={form.hasChronicIllness}
              onChange={(e) => setForm({ ...form, hasChronicIllness: e.target.checked })}
              className="h-4 w-4 rounded border-ink-300 text-crimson-500 focus:ring-crimson-400" />
            Chronic illness
          </label>
          <label className="flex items-center gap-2 text-sm text-ink-700 dark:text-ink-100">
            <input type="checkbox" checked={form.isPregnantOrRecent}
              onChange={(e) => setForm({ ...form, isPregnantOrRecent: e.target.checked })}
              className="h-4 w-4 rounded border-ink-300 text-crimson-500 focus:ring-crimson-400" />
            Pregnant / recently delivered
          </label>
          <label className="flex items-center gap-2 text-sm text-ink-700 dark:text-ink-100">
            <input type="checkbox" checked={form.hadRecentTattoo}
              onChange={(e) => setForm({ ...form, hadRecentTattoo: e.target.checked })}
              className="h-4 w-4 rounded border-ink-300 text-crimson-500 focus:ring-crimson-400" />
            Tattoo/piercing &lt; 6 months
          </label>
        </div>

        <button type="submit" disabled={loading} className="btn-primary sm:col-span-2">
          {loading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
          {loading ? "Checking…" : "Check My Eligibility"}
        </button>
      </form>

      {result && (
        <div className={`mt-5 rounded-xl border p-4 ${result.eligible ? "border-vital-500/30 bg-vital-500/5" : "border-amber-500/30 bg-amber-500/5"}`}>
          <div className="flex items-center gap-2">
            {result.eligible ? (
              <CheckCircle2 size={18} className="text-vital-500" />
            ) : (
              <XCircle size={18} className="text-amber-500" />
            )}
            <p className="font-semibold text-ink-900 dark:text-white">
              {result.eligible ? "Likely eligible to donate" : "May need a short deferral"}
            </p>
            <span className="ml-auto font-mono text-xs text-ink-400">{result.confidenceScore}% confidence</span>
          </div>
          <ul className="mt-3 space-y-1.5 text-sm text-ink-600 dark:text-ink-200">
            {result.reasons.map((r, i) => (
              <li key={i}>• {r}</li>
            ))}
          </ul>
          <p className="mt-3 text-xs italic text-ink-400">{result.disclaimer}</p>
        </div>
      )}
    </div>
  );
}
