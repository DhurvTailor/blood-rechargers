"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, MapPin, Clock, CheckCircle2, Radio } from "lucide-react";

type Request = {
  id: number;
  group: string;
  city: string;
  hospital: string;
  urgency: "critical" | "urgent" | "routine";
  minutesAgo: number;
  fulfilled?: boolean;
};

const seedRequests: Request[] = [
  { id: 1, group: "O-", city: "Jaipur", hospital: "SMS Hospital", urgency: "critical", minutesAgo: 4 },
  { id: 2, group: "B+", city: "Udaipur", hospital: "Geetanjali Medical", urgency: "urgent", minutesAgo: 12 },
  { id: 3, group: "AB+", city: "Jodhpur", hospital: "AIIMS Jodhpur", urgency: "routine", minutesAgo: 26 },
  { id: 4, group: "A-", city: "Ajmer", hospital: "JLN Hospital", urgency: "urgent", minutesAgo: 34 },
  { id: 5, group: "O+", city: "Kota", hospital: "MBS Hospital", urgency: "critical", minutesAgo: 2 },
];

const urgencyStyles: Record<Request["urgency"], { label: string; dot: string; text: string; ring: string }> = {
  critical: { label: "Critical", dot: "bg-crimson-500", text: "text-crimson-500", ring: "ring-crimson-500/20" },
  urgent: { label: "Urgent", dot: "bg-amber-500", text: "text-amber-600", ring: "ring-amber-500/20" },
  routine: { label: "Routine", dot: "bg-vital-500", text: "text-vital-600", ring: "ring-vital-500/20" },
};

export default function Liveemergencyboard() {
  const [requests, setRequests] = useState<Request[]>(seedRequests);
  const [fulfilledToday, setFulfilledToday] = useState(212);

  // Simulate a live feed: ages entries, occasionally marks one fulfilled and adds a fresh one.
  useEffect(() => {
    const tick = setInterval(() => {
      setRequests((prev) => {
        const aged = prev.map((r) => ({ ...r, minutesAgo: r.minutesAgo + 1 }));
        return aged;
      });
    }, 6000);

    const resolve = setInterval(() => {
      setRequests((prev) => {
        const idx = prev.findIndex((r) => !r.fulfilled);
        if (idx === -1) return prev;
        const next = [...prev];
        next[idx] = { ...next[idx], fulfilled: true };
        return next;
      });
      setFulfilledToday((n) => n + 1);
    }, 9000);

    return () => {
      clearInterval(tick);
      clearInterval(resolve);
    };
  }, []);

  return (
    <section className="bg-canvas py-16 dark:bg-ink-900 lg:py-20">
      <div className="container-page">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="section-eyebrow flex items-center gap-2">
              <Radio size={13} className="animate-pulse text-crimson-500" /> Live Right Now
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink-900 dark:text-white">
              Requests Coming In
            </h2>
            <p className="mt-2 max-w-lg text-sm text-ink-500 dark:text-ink-300">
              A snapshot of real requests moving through our network across Rajasthan today.
            </p>
          </div>
          <div className="rounded-2xl border border-vital-500/30 bg-vital-500/5 px-5 py-3 text-center">
            <p className="font-mono text-2xl font-semibold text-vital-600 dark:text-vital-400">{fulfilledToday}</p>
            <p className="text-xs text-ink-500 dark:text-ink-300">fulfilled today</p>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <AnimatePresence initial={false}>
            {requests.map((r) => {
              const style = urgencyStyles[r.urgency];
              return (
                <motion.div
                  key={r.id}
                  layout
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className={`flex flex-wrap items-center gap-4 rounded-xl2 border border-ink-100 bg-white p-4 ring-1 dark:border-ink-700 dark:bg-ink-800 ${style.ring}`}
                >
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold text-white ${r.fulfilled ? "bg-vital-500" : style.dot}`}>
                    {r.group}
                  </span>

                  <div className="min-w-[10rem] flex-1">
                    <p className="flex items-center gap-1.5 text-sm font-medium text-ink-900 dark:text-white">
                      <MapPin size={13} /> {r.hospital}, {r.city}
                    </p>
                    <p className="mt-0.5 flex items-center gap-1.5 text-xs text-ink-400">
                      <Clock size={12} /> {r.minutesAgo} min ago
                    </p>
                  </div>

                  {r.fulfilled ? (
                    <span className="flex items-center gap-1.5 rounded-full bg-vital-500/10 px-3 py-1.5 text-xs font-semibold text-vital-600 dark:text-vital-400">
                      <CheckCircle2 size={13} /> Fulfilled
                    </span>
                  ) : (
                    <span className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${style.text} bg-current/10`}>
                      <AlertTriangle size={13} /> {style.label}
                    </span>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}