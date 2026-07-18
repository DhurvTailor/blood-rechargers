import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import StatsTicker from "@/components/StatsTicker";

export const metadata: Metadata = { title: "About Us" };

export default function AboutUsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Mission"
        title="About Blood Rechargers"
        description="Rajasthan's trusted, technology-driven blood donor network."
      />
      <section className="container-page grid gap-10 py-14 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-white">Our story</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
            Blood Rechargers began with a simple observation: the blood a patient needs often
            already exists nearby — it just isn&apos;t easy to find in time. We built a verified
            directory of blood banks, a donor network, and AI-assisted search so that the gap
            between &quot;blood is needed&quot; and &quot;blood arrives&quot; shrinks from hours to minutes.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
            Today we work with government, private, and NGO-run blood banks across Rajasthan,
            and with thousands of registered donors who show up when it matters most.
          </p>
        </div>
        <div className="rounded-2xl bg-ink-900 p-8 text-white">
          <h3 className="font-display text-lg font-semibold">Our impact so far</h3>
          <StatsTicker />
        </div>
      </section>
    </>
  );
}
