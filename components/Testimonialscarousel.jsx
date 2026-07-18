"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ritika Sharma",
    role: "Donor · 14 donations",
    initials: "RS",
    color: "bg-crimson-500",
    quote: "The reminder came the same week I hit 3 months. I donated on my lunch break — took less time than getting coffee.",
  },
  {
    name: "Vikram Singh",
    role: "Recipient's family, Jodhpur",
    initials: "VS",
    color: "bg-vital-500",
    quote: "We found O- stock at 11pm through the app when three hospitals had already said no. That call changed everything for us.",
  },
  {
    name: "Anaya Kapoor",
    role: "First-time donor",
    initials: "AK",
    color: "bg-amber-500",
    quote: "I was nervous about eligibility, so I used the pre-check first. It told me exactly what to expect before I even walked in.",
  },
  {
    name: "Dr. Meera Joshi",
    role: "Blood Bank Officer, Jaipur",
    initials: "MJ",
    color: "bg-ink-700",
    quote: "Listing our stock here means fewer phone calls and more units actually reaching the people who need them.",
  },
];

export default function Testimonialscarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, [paused]);

  const t = testimonials[index];

  return (
    <section
      className="bg-ink-50/60 py-16 dark:bg-ink-800/40 lg:py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-page">
        <p className="section-eyebrow">Real Stories</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-ink-900 dark:text-white">
          From the Community
        </h2>

        <div className="relative mt-10 mx-auto max-w-2xl">
          <Quote size={40} className="text-crimson-500/20" />

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4 }}
              className="-mt-4"
            >
              <p className="font-display text-xl leading-relaxed text-ink-800 dark:text-ink-50 sm:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className={`flex h-11 w-11 items-center justify-center rounded-full font-mono text-sm font-semibold text-white ${t.color}`}>
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-ink-500 dark:text-ink-300">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition hover:border-crimson-300 hover:text-crimson-600 dark:border-ink-600 dark:text-ink-300"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex flex-1 gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 flex-1 rounded-full transition ${i === index ? "bg-crimson-500" : "bg-ink-200 dark:bg-ink-600"}`}
                />
              ))}
            </div>

            <button
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              aria-label="Next testimonial"
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition hover:border-crimson-300 hover:text-crimson-600 dark:border-ink-600 dark:text-ink-300"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}