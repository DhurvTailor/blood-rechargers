import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, MapPin, Users } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { bloodCamps } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blood Donation Camps",
  description: "Upcoming blood donation camps and drives across Rajasthan.",
};

export default function CampsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get Involved"
        title="Upcoming Blood Donation Camps"
        description="Join a camp near you, or register your own to reach more donors."
      />
      <section className="container-page py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bloodCamps.map((camp) => (
            <div key={camp.id} className="card p-5">
              <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">{camp.title}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-crimson-500">{camp.organizer}</p>
              <div className="mt-4 space-y-2 text-sm text-ink-500 dark:text-ink-300">
                <p className="flex items-center gap-2"><CalendarDays size={14} /> {new Date(camp.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</p>
                <p className="flex items-center gap-2"><MapPin size={14} /> {camp.address}</p>
                <p className="flex items-center gap-2"><Users size={14} /> {camp.expectedDonors} donors expected</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-crimson-300 bg-crimson-50 p-6 text-center dark:border-crimson-800 dark:bg-ink-800">
          <p className="text-sm text-ink-700 dark:text-ink-100">Organising a drive of your own?</p>
          <Link href="/camp-registration" className="mt-2 inline-block font-semibold text-crimson-600 hover:underline dark:text-crimson-300">
            Register your camp →
          </Link>
        </div>
      </section>
    </>
  );
}
