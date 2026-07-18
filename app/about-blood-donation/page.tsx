import type { Metadata } from "next";
import { Droplet, HeartPulse, ShieldCheck, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CompatibilityChart from "@/components/CompatibilityChart";

export const metadata: Metadata = {
  title: "About Blood Donation",
  description: "Learn who can donate, what happens during donation, and why every unit matters.",
};

const facts = [
  { icon: Droplet, title: "One donation, three lives", text: "Whole blood is separated into red cells, plasma, and platelets — each helping a different patient." },
  { icon: Clock, title: "Just 30–45 minutes", text: "Registration, a quick health check, the donation itself, and rest with refreshments." },
  { icon: ShieldCheck, title: "Safe & supervised", text: "Sterile, single-use equipment and trained staff throughout the process." },
  { icon: HeartPulse, title: "Every 2 seconds", text: "Someone in India needs blood — regular donors keep that demand met." },
];

export default function AboutBloodDonationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Learn"
        title="About Blood Donation"
        description="Understand the basics — eligibility, process, and impact — before you register."
      />
      <section className="container-page py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.title} className="card p-5">
              <f.icon size={22} className="text-crimson-500" />
              <h3 className="mt-3 font-display text-base font-semibold text-ink-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-ink-500 dark:text-ink-300">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-white">Who can donate?</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-600 dark:text-ink-200">
              <li>• Aged 18–65 years and generally in good health</li>
              <li>• Weigh at least 50kg</li>
              <li>• Haemoglobin of 12.5 g/dL or above</li>
              <li>• At least 90 days since your last whole-blood donation</li>
              <li>• No active infection, recent major surgery, or disqualifying medication</li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-white">What to expect</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-600 dark:text-ink-200">
              <li>• Quick registration and a confidential health questionnaire</li>
              <li>• A finger-prick test to confirm haemoglobin levels</li>
              <li>• The donation itself — around 8–10 minutes</li>
              <li>• A short rest with juice or snacks before you leave</li>
              <li>• Use our AI eligibility checker beforehand to save time</li>
            </ul>
          </div>
        </div>
      </section>
      <CompatibilityChart />
    </>
  );
}
