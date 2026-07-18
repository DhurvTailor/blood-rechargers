import Link from "next/link";
import { Droplet, Facebook, Twitter, Instagram, Linkedin, Smartphone } from "lucide-react";

const columns = [
  {
    title: "Blood Bank",
    links: [
      { href: "/blood-availability", label: "Blood Availability" },
      { href: "/blood-bank-directory", label: "Blood Bank Directory" },
      { href: "/donate-blood", label: "Donate Blood" },
      { href: "/blood-bank-registration", label: "Add Blood Bank" },
    ],
  },
  {
    title: "Blood Donation",
    links: [
      { href: "/about-blood-donation", label: "About Blood Donation" },
      { href: "/blood-donation-camps", label: "Blood Donation Camp" },
      { href: "/thalassemia-request", label: "Thalassemia Request" },
      { href: "/login", label: "Donor Login" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/how-it-works", label: "How It Works" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-and-conditions", label: "Terms & Conditions" },
      { href: "/contact-us", label: "Contact Us" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-900 text-ink-100">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-crimson-500 text-white">
              <Droplet size={20} fill="white" strokeWidth={1} />
            </span>
            <span className="font-display text-xl font-semibold text-white">Blood Rechargers</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-300">
            Rajasthan&apos;s AI-assisted blood donor network — connecting verified donors,
            blood banks, and patients in real time, so help arrives before it&apos;s too late.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-ink-700 text-ink-300 transition hover:border-crimson-400 hover:text-crimson-400"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.blood_rechargers&hl=en_IN"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink-700 px-4 py-2 text-xs font-medium text-ink-200 transition hover:border-crimson-400 hover:text-crimson-300"
          >
            <Smartphone size={14} /> Download the app
          </a>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-ink-300 transition hover:text-crimson-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-ink-800">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-ink-400 sm:flex-row">
          <p>© 2023–{new Date().getFullYear()} Blood Rechargers. Rebuilt with Next.js.</p>
          <p>Every 2 seconds, someone needs blood. Be ready.</p>
        </div>
      </div>
    </footer>
  );
}
