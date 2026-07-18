"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Sparkles } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BloodBankCard from "@/components/BloodBankCard";
import { bloodBanks, bloodGroups, states } from "@/lib/data";

function parseAIQuery(q: string) {
  const text = q.toLowerCase();
  const groupMatch = text.match(/(ab|a|b|o)\s?[+-]/i);
  const group = groupMatch ? groupMatch[0].toUpperCase().replace(/\s/g, "") : "";
  const cityMatch = ["jaipur", "ajmer", "udaipur", "jodhpur", "kota"].find((c) => text.includes(c));
  return { group, city: cityMatch ? cityMatch[0].toUpperCase() + cityMatch.slice(1) : "" };
}

export default function BloodAvailabilityPage() {
  return (
    <Suspense fallback={null}>
      <BloodAvailabilityContent />
    </Suspense>
  );
}

function BloodAvailabilityContent() {
  const params = useSearchParams();
  const [state, setState] = useState(params.get("state") ?? "");
  const [city, setCity] = useState(params.get("city") ?? "");
  const [group, setGroup] = useState(params.get("group") ?? "");
  const [aiNote, setAiNote] = useState("");

  useEffect(() => {
    const q = params.get("q");
    if (q) {
      const parsed = parseAIQuery(q);
      if (parsed.group) setGroup(parsed.group);
      if (parsed.city) setCity(parsed.city);
      setAiNote(`AI matched your request to${parsed.group ? ` blood group ${parsed.group}` : ""}${parsed.city ? ` in ${parsed.city}` : ""}.`);
    }
  }, [params]);

  const results = useMemo(() => {
    return bloodBanks.filter((b) => {
      if (state && b.state !== state) return false;
      if (city && !b.city.toLowerCase().includes(city.toLowerCase())) return false;
      if (group && (b.stock[group] ?? 0) <= 0) return false;
      return true;
    });
  }, [state, city, group]);

  return (
    <>
      <PageHeader
        eyebrow="Live Inventory"
        title="Find Blood Availability"
        description="Search verified blood banks by state, city, and blood group. Stock levels reflect the latest reported inventory."
      />
      <section className="container-page py-12">
        {aiNote && (
          <div className="mb-6 flex items-center gap-2 rounded-xl border border-crimson-200 bg-crimson-50 px-4 py-3 text-sm text-crimson-700 dark:border-crimson-900 dark:bg-ink-800 dark:text-crimson-300">
            <Sparkles size={15} /> {aiNote}
          </div>
        )}

        <div className="grid gap-3 rounded-2xl border border-ink-100 bg-white p-4 dark:border-ink-700 dark:bg-ink-800 sm:grid-cols-4">
          <select className="input-field" value={state} onChange={(e) => setState(e.target.value)}>
            <option value="">All States</option>
            {states.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <input className="input-field" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
          <select className="input-field" value={group} onChange={(e) => setGroup(e.target.value)}>
            <option value="">All Blood Groups</option>
            {bloodGroups.map((g) => <option key={g} value={g}>{g}</option>)}
          </select>
          <button
            onClick={() => { setState(""); setCity(""); setGroup(""); setAiNote(""); }}
            className="btn-secondary"
          >
            Clear Filters
          </button>
        </div>

        <p className="mt-6 text-sm text-ink-500 dark:text-ink-300">
          {results.length} blood bank{results.length !== 1 ? "s" : ""} found
        </p>

        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((bank) => <BloodBankCard key={bank.id} bank={bank} />)}
          {results.length === 0 && (
            <p className="col-span-full rounded-xl border border-dashed border-ink-200 p-10 text-center text-ink-400 dark:border-ink-700">
              No blood banks match these filters yet. Try widening your search or ask the AI assistant for help.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
