"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Ambulance, Baby, Stethoscope, HeartPulse, Droplet, ArrowRight } from "lucide-react";

const impacts = [
  {
    icon: Ambulance,
    title: "Accident & Trauma Victims",
    stat: "Every 2 sec",
    text: "Emergency transfusions stabilise blood loss from road accidents and injuries.",
  },
  {
    icon: Stethoscope,
    title: "Surgery Patients",
    stat: "1 in 7",
    text: "Hospital admissions need blood during or after a major operation.",
  },
  {
    icon: Baby,
    title: "Newborns & Mothers",
    stat: "Life-critical",
    text: "Complicated deliveries and premature births often depend on ready stock.",
  },
  {
    icon: HeartPulse,
    title: "Cancer & Thalassemia Patients",
    stat: "Every few weeks",
    text: "Many patients need recurring transfusions just to keep going.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function OneDonationManyLives() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 text-white lg:py-28">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(circle_at_15%_15%,#C81E3A_0%,transparent_38%),radial-gradient(circle_at_90%_85%,#1F8A70_0%,transparent_32%)]" />

      <div className="container-page relative">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* Left: the single drop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80"
          >
            {/* pulse rings */}
            <span className="absolute inset-0 rounded-full border border-crimson-500/30 animate-ping [animation-duration:2.4s]" />
            <span className="absolute inset-6 rounded-full border border-crimson-500/25" />
            <span className="absolute inset-12 rounded-full border border-crimson-500/20" />

            <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-crimson-500 shadow-2xl shadow-crimson-500/40 sm:h-36 sm:w-36">
              <Droplet size={52} className="text-white" fill="white" strokeWidth={1} />
            </div>

            <span className="absolute -bottom-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-mono text-crimson-200 backdrop-blur">
              1 donation
            </span>
          </motion.div>

          {/* Right: heading + impact grid */}
          <div>
            <p className="section-eyebrow !text-crimson-400">Why It Matters</p>
            <h2 className="mt-2 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              One donation. <span className="text-crimson-400">Up to three lives.</span>
            </h2>
            <p className="mt-3 max-w-xl text-ink-300">
              Whole blood is separated into red cells, plasma, and platelets — each one
              reaching a different patient. Here&apos;s who&apos;s waiting on the other end.
            </p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              {impacts.map((i) => (
                <motion.div
                  key={i.title}
                  variants={item}
                  className="group rounded-xl2 border border-white/10 bg-white/[0.04] p-5 transition hover:border-crimson-400/40 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-crimson-300 transition group-hover:bg-crimson-500 group-hover:text-white">
                      <i.icon size={18} />
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wide text-vital-400">{i.stat}</span>
                  </div>
                  <h3 className="mt-3 font-display text-sm font-semibold text-white">{i.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-300">{i.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/donate-blood" className="btn-primary">
                Become a Donor <ArrowRight size={16} />
              </Link>
              <Link href="/about-blood-donation" className="text-sm font-semibold text-ink-300 hover:text-crimson-300">
                See who&apos;s eligible →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
