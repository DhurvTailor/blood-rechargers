import Link from "next/link";
import { ShieldCheck, Sparkles, Users } from "lucide-react";
import PulseDivider from "./PulseDivider";
import StatsTicker from "./StatsTicker";
import BloodStockSearch from "./BloodStockSearch";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_20%_20%,#C81E3A_0%,transparent_35%),radial-gradient(circle_at_85%_75%,#1F8A70_0%,transparent_30%)]" />

      <div className="container-page relative grid gap-12 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="animate-floatUp">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-crimson-300">
            <Sparkles size={13} /> Now with AI-matched donor search
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Every unit of blood
            <span className="text-crimson-400"> is a second chance.</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-200">
            Blood Rechargers connects verified donors, blood banks, and patients across
            Rajasthan in real time — so the right blood group reaches the right person,
            fast.
          </p>

          <div className="mt-4 text-ink-400" aria-hidden="true">
            <PulseDivider className="h-8 w-40 text-crimson-500" />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/donate-blood" className="btn-primary">Donate Blood</Link>
            <Link href="/blood-availability" className="btn-secondary !bg-white/5 !border-white/20 !text-white hover:!text-crimson-300">
              Find Blood Now
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-ink-300">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-vital-400" /> Verified blood banks only
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-crimson-400" /> 12,000+ registered donors
            </div>
          </div>

          <StatsTicker />
        </div>

        <div className="lg:justify-self-end lg:pl-6">
          <BloodStockSearch />
        </div>
      </div>
    </section>
  );
}
