"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Heart } from "lucide-react";
import Link from "next/link";

const TRAVEL_DURATION = 9; // seconds for one full donor -> lab -> recipient cycle

/* ---------- Small shared bits ---------- */

function StationLabel({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mt-5 text-center">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-crimson-500">{eyebrow}</p>
      <h3 className="mt-1 font-display text-base font-semibold text-ink-900">{title}</h3>
    </div>
  );
}

/* ---------- Station 1: Donor on the bed, bag filling ---------- */

function DonorStation() {
  return (
    <div className="card relative flex flex-col items-center bg-white p-6">
      <svg viewBox="0 0 240 170" className="h-40 w-full sm:h-44">
        {/* bed frame + legs */}
        <rect x="18" y="122" width="172" height="9" rx="4" fill="#CDD1D9" />
        <rect x="28" y="131" width="6" height="16" rx="2" fill="#8C93A3" />
        <rect x="178" y="131" width="6" height="16" rx="2" fill="#8C93A3" />
        {/* mattress */}
        <rect x="12" y="102" width="184" height="24" rx="11" fill="#FAFAF8" stroke="#E4E6EA" strokeWidth="2" />
        {/* pillow */}
        <ellipse cx="38" cy="108" rx="20" ry="11" fill="#E4E6EA" />
        {/* head */}
        <circle cx="40" cy="99" r="12" fill="#CDD1D9" />
        {/* blanket / body */}
        <rect x="56" y="98" width="118" height="20" rx="10" fill="#FBE4E8" />
        {/* arm reaching to the IV line */}
        <rect x="98" y="103" width="56" height="7" rx="3.5" fill="#CDD1D9" />

        {/* IV stand */}
        <line x1="206" y1="14" x2="206" y2="96" stroke="#8C93A3" strokeWidth="3" strokeLinecap="round" />
        <line x1="196" y1="14" x2="216" y2="14" stroke="#8C93A3" strokeWidth="3" strokeLinecap="round" />

        {/* bag outline */}
        <rect x="192" y="20" width="28" height="42" rx="8" fill="white" stroke="#D95470" strokeWidth="2" />
        {/* animated fill */}
        <motion.rect
          x="195"
          width="22"
          rx="5"
          fill="#C81E3A"
          animate={{ y: [58, 58, 24, 24, 58], height: [3, 3, 36, 36, 3] }}
          transition={{ duration: TRAVEL_DURATION / 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.05, 0.55, 0.75, 1] }}
        />

        {/* tube from arm to bag */}
        <path d="M150,105 C178,105 178,85 200,64" fill="none" stroke="#E8899C" strokeWidth="3" strokeLinecap="round" />
        <motion.circle
          r="3.2"
          fill="#C81E3A"
          animate={{ cx: [152, 176, 200], cy: [104, 92, 65] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
      <StationLabel eyebrow="Stage 1" title="Donor Gives Blood" />
      <p className="mt-1 text-center text-xs text-ink-500">A safe 8–10 minute collection, one bag at a time.</p>
    </div>
  );
}

/* ---------- Station 2: Testing & separation ---------- */

function ProcessingStation() {
  const radius = 52;
  const cx = 120;
  const cy = 82;
  const dots = [
    { angle: -90, color: "#C81E3A" }, // red cells
    { angle: 30, color: "#E8A33D" },  // platelets
    { angle: 150, color: "#1F8A70" }, // plasma
  ];

  return (
    <div className="card relative flex flex-col items-center bg-white p-6">
      <svg viewBox="0 0 240 170" className="h-40 w-full sm:h-44">
        <circle cx={cx} cy={cy} r={radius} fill="none" stroke="#F4F5F7" strokeWidth="10" />
        <motion.g
          style={{ originX: `${cx}px`, originY: `${cy}px` }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          {dots.map((d, i) => {
            const rad = (d.angle * Math.PI) / 180;
            const x = cx + radius * Math.cos(rad);
            const y = cy + radius * Math.sin(rad);
            return <circle key={i} cx={x} cy={y} r="7" fill={d.color} />;
          })}
        </motion.g>

        {/* pulsing core */}
        <motion.circle
          cx={cx}
          cy={cy}
          r="22"
          fill="white"
          stroke="#E4E6EA"
          strokeWidth="2"
          animate={{ r: [20, 24, 20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* "screened safe" badge */}
      <motion.span
        className="absolute right-6 top-6 flex items-center gap-1 rounded-full bg-vital-500/10 px-2.5 py-1 text-[11px] font-semibold text-vital-600"
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: TRAVEL_DURATION / 3, repeat: Infinity, times: [0, 0.15, 0.75, 1] }}
      >
        <CheckCircle2 size={12} /> Screened safe
      </motion.span>

      <StationLabel eyebrow="Stage 2" title="Tested &amp; Separated" />
      <p className="mt-1 text-center text-xs text-ink-500">Split into red cells, plasma &amp; platelets — 3 lives, not 1.</p>
    </div>
  );
}

/* ---------- Station 3: Recipient receiving, heartbeat recovering ---------- */

function RecipientStation() {
  return (
    <div className="card relative flex flex-col items-center bg-white p-6">
      <svg viewBox="0 0 240 170" className="h-40 w-full sm:h-44">
        {/* bed frame + legs (mirrored) */}
        <rect x="50" y="122" width="172" height="9" rx="4" fill="#CDD1D9" />
        <rect x="60" y="131" width="6" height="16" rx="2" fill="#8C93A3" />
        <rect x="210" y="131" width="6" height="16" rx="2" fill="#8C93A3" />
        {/* mattress */}
        <rect x="44" y="102" width="184" height="24" rx="11" fill="#FAFAF8" stroke="#E4E6EA" strokeWidth="2" />
        {/* pillow */}
        <ellipse cx="202" cy="108" rx="20" ry="11" fill="#E4E6EA" />
        {/* head */}
        <circle cx="200" cy="99" r="12" fill="#CDD1D9" />
        {/* blanket / body */}
        <rect x="66" y="98" width="118" height="20" rx="10" fill="#DDF2ED" />
        {/* arm reaching to the IV line */}
        <rect x="86" y="103" width="56" height="7" rx="3.5" fill="#CDD1D9" />

        {/* IV stand (left side) */}
        <line x1="34" y1="14" x2="34" y2="96" stroke="#8C93A3" strokeWidth="3" strokeLinecap="round" />
        <line x1="24" y1="14" x2="44" y2="14" stroke="#8C93A3" strokeWidth="3" strokeLinecap="round" />

        {/* bag outline */}
        <rect x="20" y="20" width="28" height="42" rx="8" fill="white" stroke="#2BA88F" strokeWidth="2" />
        {/* animated drain (emptying into patient) */}
        <motion.rect
          x="23"
          width="22"
          rx="5"
          fill="#1F8A70"
          animate={{ y: [24, 24, 58, 58, 24], height: [36, 36, 3, 3, 36] }}
          transition={{ duration: TRAVEL_DURATION / 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.05, 0.55, 0.75, 1] }}
        />

        {/* tube from bag to arm */}
        <path d="M40,64 C62,85 62,105 90,105" fill="none" stroke="#8FD3C4" strokeWidth="3" strokeLinecap="round" />
        <motion.circle
          r="3.2"
          fill="#1F8A70"
          animate={{ cx: [40, 62, 90], cy: [65, 92, 104] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ECG heartbeat line above the bed */}
        <motion.path
          d="M96,40 L118,40 L124,24 L132,56 L138,40 L226,40"
          fill="none"
          stroke="#1F8A70"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="220"
          animate={{ strokeDashoffset: [220, 0, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear", repeatDelay: 0.4 }}
        />
      </svg>

      {/* pulsing heart + "+1 life" toast */}
      <motion.span
        className="absolute right-8 top-6 text-vital-500"
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
      >
        <Heart size={18} fill="currentColor" />
      </motion.span>
      <motion.span
        className="absolute right-4 top-14 rounded-full bg-vital-500 px-2.5 py-1 text-[11px] font-semibold text-white"
        animate={{ opacity: [0, 1, 1, 0], y: [4, 0, 0, -6] }}
        transition={{ duration: TRAVEL_DURATION / 3, repeat: Infinity, times: [0, 0.6, 0.85, 1] }}
      >
        +1 life
      </motion.span>

      <StationLabel eyebrow="Stage 3" title="Recipient Recovers" />
      <p className="mt-1 text-center text-xs text-ink-500">Delivered, transfused, and back to living — because someone showed up.</p>
    </div>
  );
}

/* ---------- Connector row (desktop only): nodes + travelling bag ---------- */

function JourneyConnector() {
  return (
    <div className="relative mx-auto mb-2 hidden h-10 max-w-3xl md:block">
      <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <line x1="8" y1="5" x2="92" y2="5" stroke="#E4E6EA" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
      {["16.5%", "50%", "83.5%"].map((left, i) => (
        <span
          key={i}
          className="absolute top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-ink-200 shadow"
          style={{ left }}
        />
      ))}
      <motion.span
        className="absolute top-1/2 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-crimson-500 text-white shadow-lg"
        animate={{ left: ["16.5%", "16.5%", "50%", "50%", "83.5%", "83.5%"] }}
        transition={{ duration: TRAVEL_DURATION, repeat: Infinity, ease: "easeInOut", times: [0, 0.05, 0.32, 0.42, 0.7, 1] }}
      >
        <span className="h-2.5 w-3.5 rounded-sm bg-white/90" />
      </motion.span>
    </div>
  );
}

/* ---------- Main export ---------- */

export default function BloodDonationJourney() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">The Full Journey</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            From One Bed to Another
          </h2>
          <p className="mt-3 text-ink-500">
            Watch what actually happens between a donor lying down for ten minutes
            and a patient receiving exactly what they needed.
          </p>
        </div>

        <JourneyConnector />

        <div className="grid gap-6 md:grid-cols-3">
          <DonorStation />
          <ProcessingStation />
          <RecipientStation />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/donate-blood" className="btn-primary">Start Your Journey — Donate</Link>
          <Link href="/about-blood-donation" className="btn-secondary">See the Full Process</Link>
        </div>
      </div>
    </section>
  );
}



// "use client";

// import { useMemo } from "react";
// import { motion } from "framer-motion";
// import { User, Droplet, HeartPulse, Sparkles } from "lucide-react";
// import Link from "next/link";

// /**
//  * Samples a quadratic bezier curve so the blood drop can travel along a
//  * gentle arc from the donor to the recipient, instead of a flat straight line.
//  * Values are expressed as percentages so the whole animation stays responsive
//  * without measuring the container in JS.
//  */
// function useArcPath(steps = 24) {
//   return useMemo(() => {
//     const p0 = { x: 9, y: 68 };   // donor anchor
//     const p1 = { x: 50, y: 6 };   // arc peak (control point)
//     const p2 = { x: 91, y: 68 };  // recipient anchor

//     const xs: string[] = [];
//     const ys: string[] = [];
//     for (let i = 0; i <= steps; i++) {
//       const t = i / steps;
//       const x = (1 - t) ** 2 * p0.x + 2 * (1 - t) * t * p1.x + t ** 2 * p2.x;
//       const y = (1 - t) ** 2 * p0.y + 2 * (1 - t) * t * p1.y + t ** 2 * p2.y;
//       xs.push(`${x}%`);
//       ys.push(`${y}%`);
//     }
//     return { xs, ys };
//   }, [steps]);
// }

// const floatingDrops = [
//   { left: "18%", delay: 0, duration: 6 },
//   { left: "34%", delay: 1.4, duration: 7.5 },
//   { left: "62%", delay: 0.6, duration: 6.8 },
//   { left: "78%", delay: 2.1, duration: 5.6 },
//   { left: "50%", delay: 3, duration: 7 },
// ];

// const TRAVEL_DURATION = 3.2; 

// export default function Donortorecipienthero() {
//   const { xs, ys } = useArcPath();

//   return (
//     <section className="relative overflow-hidden bg-ink-900 py-20 text-white lg:py-28">
//       {/* ambient glow, donor side crimson, recipient side vital teal */}
//       <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_10%_25%,#C81E3A_0%,transparent_32%),radial-gradient(circle_at_90%_25%,#1F8A70_0%,transparent_32%)]" />

//       {/* soft floating ambient drops for depth */}
//       {floatingDrops.map((d, i) => (
//         <motion.span
//           key={i}
//           className="pointer-events-none absolute bottom-0 text-crimson-500/20"
//           style={{ left: d.left }}
//           animate={{ y: ["0%", "-320%"], opacity: [0, 0.5, 0] }}
//           transition={{ duration: d.duration, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
//         >
//           <Droplet size={22} fill="currentColor" />
//         </motion.span>
//       ))}

//       <div className="container-page relative">
//         <div className="mx-auto max-w-2xl text-center">
//           <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-crimson-300">
//             <Sparkles size={13} /> One journey, every 3 seconds
//           </span>
//           <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl">
//             You give it. <span className="text-vital-400">They live because of it.</span>
//           </h2>
//           <p className="mt-3 text-ink-300">
//             Watch what a single donation actually does — it doesn&apos;t sit in a fridge, it moves.
//           </p>
//         </div>

//         {/* The animated donor -> recipient visual */}
//         <div className="relative mx-auto mt-14 h-64 max-w-4xl sm:h-72">
//           {/* dashed arc guide */}
//           <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
//             <path
//               d="M9,27 Q50,2 91,27"
//               fill="none"
//               stroke="white"
//               strokeOpacity="0.15"
//               strokeWidth="0.5"
//               strokeDasharray="2 3"
//               strokeLinecap="round"
//             />
//           </svg>

//           {/* Donor node */}
//           <div className="absolute left-[9%] top-[68%] -translate-x-1/2 -translate-y-1/2 text-center">
//             <motion.span
//               className="absolute inset-0 -m-3 rounded-full border border-crimson-400/40"
//               animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
//               transition={{ duration: TRAVEL_DURATION, repeat: Infinity, ease: "easeOut" }}
//             />
//             <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-crimson-500 shadow-lg shadow-crimson-500/40 sm:h-20 sm:w-20">
//               <User size={28} className="text-white" />
//             </span>
//             <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-crimson-300">Donor</p>
//           </div>

//           {/* Recipient node */}
//           <div className="absolute left-[91%] top-[68%] -translate-x-1/2 -translate-y-1/2 text-center">
//             <motion.span
//               className="absolute inset-0 -m-3 rounded-full border border-vital-400/50"
//               animate={{ scale: [1, 1.7], opacity: [0.7, 0] }}
//               transition={{ duration: TRAVEL_DURATION, repeat: Infinity, ease: "easeOut", delay: TRAVEL_DURATION * 0.82 }}
//             />
//             <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-vital-500 shadow-lg shadow-vital-500/40 sm:h-20 sm:w-20">
//               <HeartPulse size={28} className="text-white" />
//             </span>
//             <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-vital-400">Recipient</p>

//             {/* "life restored" pulse ping timed to the drop's arrival */}
//             <motion.span
//               className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-vital-400"
//               initial={{ scale: 0, opacity: 0 }}
//               animate={{ scale: [0, 1.4, 1], opacity: [0, 1, 0] }}
//               transition={{ duration: 0.9, repeat: Infinity, repeatDelay: TRAVEL_DURATION - 0.9, delay: TRAVEL_DURATION * 0.92 }}
//             />
//           </div>

//           {/* The travelling blood drop */}
//           <motion.div
//             className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
//             animate={{ left: xs, top: ys, rotate: [0, 15, -10, 0] }}
//             transition={{ duration: TRAVEL_DURATION, repeat: Infinity, ease: "easeInOut", times: undefined }}
//           >
//             <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-xl ring-2 ring-crimson-400/60 sm:h-10 sm:w-10">
//               <Droplet size={18} className="text-crimson-500" fill="currentColor" />
//             </span>
//           </motion.div>
//         </div>

//         <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
//           <Link href="/donate-blood" className="btn-primary">Be the Donor</Link>
//           <Link href="/blood-availability" className="btn-secondary !border-white/20 !bg-white/5 !text-white hover:!text-vital-300">
//             Find Blood for Someone
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }