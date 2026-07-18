import { newsItems } from "@/lib/data";
import { Newspaper } from "lucide-react";

export default function NewsSection() {
  return (
    <section className="bg-ink-50/60 py-16 dark:bg-ink-800/40 lg:py-20">
      <div className="container-page">
        <p className="section-eyebrow">Research &amp; Updates</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-ink-900 dark:text-white">Latest News</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((n) => (
            <article key={n.id} className="card p-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-crimson-50 text-crimson-600 dark:bg-ink-700 dark:text-crimson-300">
                <Newspaper size={16} />
              </span>
              <h3 className="mt-3 font-display text-base font-semibold leading-snug text-ink-900 dark:text-white">
                {n.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{n.excerpt}</p>
              <p className="mt-3 font-mono text-xs text-ink-400">
                {new Date(n.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
