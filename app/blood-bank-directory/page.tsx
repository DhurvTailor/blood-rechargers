import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BloodBankCard from "@/components/BloodBankCard";
import { bloodBanks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blood Bank Directory",
  description: "Browse verified government, private, and NGO-run blood banks across Rajasthan.",
};

export default function BloodBankDirectoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Directory"
        title="Blood Bank Directory"
        description="Every listing is verified before it appears here — call, WhatsApp, or get directions in one tap."
      />
      <section className="container-page py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bloodBanks.map((bank) => (
            <BloodBankCard key={bank.id} bank={bank} />
          ))}
        </div>
      </section>
    </>
  );
}
