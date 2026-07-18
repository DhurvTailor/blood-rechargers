import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, MessageCircle, MapPin, ShieldCheck, Star } from "lucide-react";
import { bloodBanks, findBloodBankBySlug } from "@/lib/data";
import PageHeader from "@/components/PageHeader";

export function generateStaticParams() {
  return bloodBanks.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const bank = findBloodBankBySlug(params.slug);
  if (!bank) return {};
  return { title: bank.name, description: `${bank.name} — ${bank.category} in ${bank.city}, ${bank.state}.` };
}

export default function BloodBankDetailPage({ params }: { params: { slug: string } }) {
  const bank = findBloodBankBySlug(params.slug);
  if (!bank) notFound();

  const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${bank.lat},${bank.lng}`;

  return (
    <>
      <PageHeader eyebrow={bank.category} title={bank.name} description={bank.address} />
      <section className="container-page grid gap-8 py-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <div className="card p-6">
            <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-white">Current Stock</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {Object.entries(bank.stock).map(([g, units]) => (
                <span key={g} className="rounded-full bg-crimson-50 px-3 py-1.5 font-mono text-sm text-crimson-700 dark:bg-ink-700 dark:text-crimson-300">
                  {g}: {units} units
                </span>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-white">About this centre</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
              {bank.name} is a {bank.category.toLowerCase()} serving {bank.city}, {bank.state}. It is
              part of the Blood Rechargers verified network, meaning its registration, license, and
              contact details have been confirmed directly with the facility.
            </p>
            {bank.verified && (
              <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-vital-600 dark:text-vital-400">
                <ShieldCheck size={15} /> Verified by Blood Rechargers
              </p>
            )}
          </div>
        </div>

        <aside className="card h-fit space-y-4 p-6">
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={15} fill="currentColor" /> <span className="font-mono text-sm">{bank.rating.toFixed(1)} / 5.0</span>
          </div>
          <p className="flex items-start gap-2 text-sm text-ink-600 dark:text-ink-200">
            <MapPin size={15} className="mt-0.5 shrink-0" /> {bank.address}
          </p>
          <a href={`tel:${bank.phone}`} className="btn-primary w-full"><Phone size={15} /> Call Now</a>
          <a href={`https://wa.me/${bank.whatsapp}`} className="btn-secondary w-full"><MessageCircle size={15} /> WhatsApp</a>
          <a href={mapUrl} target="_blank" rel="noreferrer" className="btn-secondary w-full"><MapPin size={15} /> Get Directions</a>
        </aside>
      </section>
    </>
  );
}
