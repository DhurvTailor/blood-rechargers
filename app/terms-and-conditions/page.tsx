import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Terms and Conditions" };

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms &amp; Conditions" />
      <section className="container-page max-w-3xl py-14 space-y-6 text-sm leading-relaxed text-ink-600 dark:text-ink-200">
        <p>
          By using Blood Rechargers, you agree to provide accurate information when registering
          as a donor, blood bank, or camp organiser. Blood Rechargers acts as a connector between
          donors, patients, and blood banks — final eligibility, medical screening, and transfusion
          decisions remain the responsibility of the treating blood bank or hospital.
        </p>
        <h2 className="font-display text-xl font-semibold text-ink-900 dark:text-white">Use of the Platform</h2>
        <p>Listings and donor profiles must be accurate. Misrepresenting blood bank stock, credentials, or donor eligibility may result in removal from the network.</p>
        <h2 className="font-display text-xl font-semibold text-ink-900 dark:text-white">AI Features Disclaimer</h2>
        <p>The AI assistant and eligibility pre-check provide general guidance only and do not replace evaluation by a qualified medical professional at the point of donation.</p>
        <h2 className="font-display text-xl font-semibold text-ink-900 dark:text-white">Limitation of Liability</h2>
        <p>Blood Rechargers is not liable for medical outcomes arising from information listed by third-party blood banks or camp organisers on the platform.</p>
      </section>
    </>
  );
}
