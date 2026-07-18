import Link from "next/link";
import { Phone, MessageCircle, MapPin, ShieldCheck, Star } from "lucide-react";
import { BloodBank } from "@/lib/types";

export default function BloodBankCard({ bank }: { bank: BloodBank }) {
  const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${bank.lat},${bank.lng}`;
  return (
    <div className="card flex flex-col p-5">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">{bank.name}</h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-crimson-500">{bank.category}</p>
        </div>
        {bank.verified && (
          <span className="flex shrink-0 items-center gap-1 rounded-full bg-vital-500/10 px-2 py-1 text-[11px] font-medium text-vital-600 dark:text-vital-400">
            <ShieldCheck size={12} /> Verified
          </span>
        )}
      </div>

      <p className="mt-3 flex items-start gap-1.5 text-sm text-ink-500 dark:text-ink-300">
        <MapPin size={14} className="mt-0.5 shrink-0" /> {bank.address}
      </p>

      <div className="mt-3 flex items-center gap-1 text-xs text-amber-500">
        <Star size={13} fill="currentColor" /> {bank.rating.toFixed(1)} rating
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {Object.entries(bank.stock).map(([g, units]) => (
          <span key={g} className="rounded-full bg-ink-50 px-2.5 py-1 text-xs font-mono text-ink-700 dark:bg-ink-700 dark:text-ink-100">
            {g}: {units}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-ink-100 pt-4 text-sm dark:border-ink-700">
        <Link href={`/blood-bank-directory/${bank.slug}`} className="font-semibold text-crimson-600 hover:underline dark:text-crimson-300">
          See Details
        </Link>
        <span className="text-ink-300">•</span>
        <a href={`tel:${bank.phone}`} className="flex items-center gap-1 text-ink-500 hover:text-crimson-600 dark:text-ink-300">
          <Phone size={13} /> Call
        </a>
        <a href={`https://wa.me/${bank.whatsapp}`} className="flex items-center gap-1 text-ink-500 hover:text-vital-600 dark:text-ink-300">
          <MessageCircle size={13} /> WhatsApp
        </a>
        <a href={mapUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-ink-500 hover:text-crimson-600 dark:text-ink-300">
          <MapPin size={13} /> Directions
        </a>
      </div>
    </div>
  );
}
