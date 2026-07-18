"use client";

import { useEffect, useState } from "react";

const targets = [
  { label: "Units currently in stock", value: 352 },
  { label: "Verified blood banks", value: 128 },
  { label: "Lives supported this year", value: 4870 },
];

function useCountUp(target: number, durationMs = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs]);
  return value;
}

function Counter({ target }: { target: number }) {
  const value = useCountUp(target);
  return <span className="font-mono text-2xl font-semibold text-white">{value.toLocaleString()}</span>;
}

export default function StatsTicker() {
  return (
    <div className="mt-8 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6">
      {targets.map((t) => (
        <div key={t.label}>
          <Counter target={t.value} />
          <p className="mt-1 text-xs leading-snug text-ink-400">{t.label}</p>
        </div>
      ))}
    </div>
  );
}
