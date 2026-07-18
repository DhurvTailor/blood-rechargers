import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { bloodBanks } from "@/lib/data";
import BloodBankCard from "./BloodBankCard";

export default function FeaturedBanks() {
  return (
    <section className="bg-ink-50/60 py-16 dark:bg-ink-800/40 lg:py-20">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <p className="section-eyebrow">Trusted Network</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-ink-900 dark:text-white">
              Nearby Blood Banks
            </h2>
            <p className="mt-3 text-ink-500 dark:text-ink-300">
              Verified government, private, and NGO-run blood banks across Rajasthan —
              each listing confirmed and refreshed regularly.
            </p>
          </div>
          <Link href="/blood-bank-directory" className="flex items-center gap-1.5 text-sm font-semibold text-crimson-600 hover:underline dark:text-crimson-300">
            View full directory <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bloodBanks.slice(0, 6).map((bank) => (
            <BloodBankCard key={bank.id} bank={bank} />
          ))}
        </div>
      </div>
    </section>
  );
}
