"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search, Sparkles, MapPin } from "lucide-react";
import { states, bloodGroups } from "@/lib/data";

export default function BloodStockSearch() {
  const router = useRouter();
  const [mode, setMode] = useState<"structured" | "ai">("structured");
  const [state, setState] = useState("Rajasthan");
  const [city, setCity] = useState("");
  const [group, setGroup] = useState("");
  const [aiQuery, setAiQuery] = useState("");

  function submitStructured(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (state) params.set("state", state);
    if (city) params.set("city", city);
    if (group) params.set("group", group);
    router.push(`/blood-availability?${params.toString()}`);
  }

  function submitAI(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/blood-availability?q=${encodeURIComponent(aiQuery)}`);
  }

  return (
    <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white p-5 text-ink-900 shadow-2xl sm:p-6">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold">Find The Blood Stock</h2>
        <div className="flex rounded-full bg-ink-50 p-1 text-xs font-medium">
          <button
            onClick={() => setMode("structured")}
            className={`rounded-full px-3 py-1.5 transition ${mode === "structured" ? "bg-crimson-500 text-white" : "text-ink-500"}`}
          >
            Filters
          </button>
          <button
            onClick={() => setMode("ai")}
            className={`flex items-center gap-1 rounded-full px-3 py-1.5 transition ${mode === "ai" ? "bg-crimson-500 text-white" : "text-ink-500"}`}
          >
            <Sparkles size={12} /> AI
          </button>
        </div>
      </div>

      {mode === "structured" ? (
        <form onSubmit={submitStructured} className="mt-4 space-y-3">
          <select value={state} onChange={(e) => setState(e.target.value)} className="input-field">
            {states.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City (e.g. Jaipur)"
            className="input-field"
          />
          <select value={group} onChange={(e) => setGroup(e.target.value)} className="input-field">
            <option value="">Select Blood Group</option>
            {bloodGroups.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
          <button type="submit" className="btn-primary w-full">
            <Search size={16} /> Search Now
          </button>
        </form>
      ) : (
        <form onSubmit={submitAI} className="mt-4 space-y-3">
          <p className="text-xs text-ink-500">
            Describe what you need in plain language — our AI matches it to the right filters.
          </p>
          <textarea
            value={aiQuery}
            onChange={(e) => setAiQuery(e.target.value)}
            placeholder="e.g. Urgent O- whole blood needed near Jaipur tonight"
            rows={3}
            className="input-field resize-none"
          />
          <button type="submit" className="btn-primary w-full">
            <Sparkles size={16} /> Ask AI to Find It
          </button>
        </form>
      )}

      <div className="mt-4 flex items-center gap-1.5 text-xs text-ink-400">
        <MapPin size={12} /> Showing results across Rajasthan by default
      </div>
    </div>
  );
}
