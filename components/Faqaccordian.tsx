"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How quickly can I find blood in an emergency?",
    a: "Most searches return matching, verified blood banks in under a second. From there, calling or messaging the bank directly is usually the fastest path — often minutes, not hours.",
  },
  {
    q: "Is my health information kept private?",
    a: "Yes. Details you share for the eligibility pre-check are used only to generate your result and are never shared with blood banks or other users without your consent.",
  },
  {
    q: "Can I donate if I've never done it before?",
    a: "Absolutely — most first-time donors are eligible. Run the AI eligibility pre-check first so you know what to expect, then walk in with confidence.",
  },
  {
    q: "How do you verify blood banks on the platform?",
    a: "Every listing is checked against registration and license details directly with the facility before it appears in search results or the directory.",
  },
  {
    q: "What if I need blood for a recurring condition like Thalassemia?",
    a: "Register a Thalassemia request once, and we'll proactively match your transfusion schedule with nearby donors and stock, instead of you searching every time.",
  },
];

export default function Faqaccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="container-page py-16 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="section-eyebrow">Questions</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-ink-900 dark:text-white">
          Frequently Asked
        </h2>

        <div className="mt-8 divide-y divide-ink-100 dark:divide-ink-700">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.q} className="py-2">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="focus-ring flex w-full items-center justify-between gap-4 rounded-lg py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-medium text-ink-900 dark:text-white">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink-50 text-ink-500 transition-transform duration-300 dark:bg-ink-700 dark:text-ink-200 ${
                      isOpen ? "rotate-45 bg-crimson-500 text-white dark:bg-crimson-500" : ""
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-4 pr-10 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}