import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <section className="container-page max-w-3xl py-14 space-y-6 text-sm leading-relaxed text-ink-600 dark:text-ink-200">
        <p>
          Blood Rechargers collects only the information needed to connect donors, patients,
          and blood banks — including name, contact details, blood group, and general location.
          Health information you provide during eligibility checks is used solely to generate
          your pre-check result and is not shared with third parties.
        </p>
        <h2 className="font-display text-xl font-semibold text-ink-900 dark:text-white">Information We Collect</h2>
        <p>Contact details, blood group, donation history, and location for the purpose of matching donors with requests.</p>
        <h2 className="font-display text-xl font-semibold text-ink-900 dark:text-white">How We Use It</h2>
        <p>To notify donors of nearby requests, display verified blood bank stock, and improve our AI matching accuracy over time.</p>
        <h2 className="font-display text-xl font-semibold text-ink-900 dark:text-white">Your Choices</h2>
        <p>You may update or delete your donor profile at any time from your account, or by contacting support@bloodrechargers.com.</p>
      </section>
    </>
  );
}
