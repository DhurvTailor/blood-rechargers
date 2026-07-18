"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Droplet, Phone, ShieldCheck } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const bloodBankLinks = [
  { href: "/blood-availability", label: "Blood Availability" },
  { href: "/blood-bank-directory", label: "Blood Bank Directory" },
  { href: "/login", label: "Blood Bank Login" },
];

const bloodDonationLinks = [
  { href: "/about-blood-donation", label: "About Blood Donation" },
  { href: "/blood-donation-camps", label: "Blood Donation Camp" },
  { href: "/thalassemia-request", label: "Thalassemia Request" },
  { href: "/login", label: "Donor Login" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100/70 bg-canvas/90 backdrop-blur-md dark:border-ink-700/60 dark:bg-ink-900/90">
      {/* Utility bar */}
      <div className="hidden bg-ink-900 text-ink-100 md:block">
        <div className="container-page flex items-center justify-between py-1.5 text-xs">
          <div className="flex items-center gap-4">
            <a href="tel:+911800123456" className="flex items-center gap-1.5 hover:text-crimson-300">
              <Phone size={12} /> +91 1800-123-456 (24x7 Emergency)
            </a>
            <span className="flex items-center gap-1.5 text-vital-400">
              <ShieldCheck size={12} /> Verified donor &amp; blood bank network
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hover:text-crimson-300">Admin</Link>
            <Link href="/blood-bank-registration" className="hover:text-crimson-300">Add Blood Bank</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-page flex items-center justify-between py-3.5">
        <Link href="/" className="flex items-center gap-2 focus-ring rounded-md">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-crimson-500 text-white">
            <Droplet size={20} fill="white" strokeWidth={1} />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-ink-900 dark:text-white">
            Blood Rechargers
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link href="/" className="nav-link">Home</Link>

          <div className="group relative">
            <button className="nav-link flex items-center gap-1">
              Blood Bank <ChevronDown size={14} className="transition group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-full w-64 translate-y-1 rounded-xl border border-ink-100 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-ink-700 dark:bg-ink-800">
              {bloodBankLinks.map((l) => (
                <Link key={l.href} href={l.href} className="block rounded-lg px-3 py-2 text-sm text-ink-700 hover:bg-crimson-50 hover:text-crimson-600 dark:text-ink-100 dark:hover:bg-ink-700">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="group relative">
            <button className="nav-link flex items-center gap-1">
              Blood Donation <ChevronDown size={14} className="transition group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-0 top-full w-64 translate-y-1 rounded-xl border border-ink-100 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-ink-700 dark:bg-ink-800">
              {bloodDonationLinks.map((l) => (
                <Link key={l.href} href={l.href} className="block rounded-lg px-3 py-2 text-sm text-ink-700 hover:bg-crimson-50 hover:text-crimson-600 dark:text-ink-100 dark:hover:bg-ink-700">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/blogs" className="nav-link">Blog</Link>
          <Link href="/how-it-works" className="nav-link">How It Works</Link>
          <Link href="/contact-us" className="nav-link">Contact</Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            href="/donate-blood"
            className="focus-ring rounded-full bg-crimson-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-crimson-500/30 transition hover:bg-crimson-600"
          >
            Donate Blood
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="focus-ring rounded-lg p-2 text-ink-800 dark:text-white lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-ink-100 bg-white px-5 pb-6 pt-2 dark:border-ink-700 dark:bg-ink-800 lg:hidden">
          <Link href="/" className="mobile-link" onClick={() => setOpen(false)}>Home</Link>

          <button
            className="mobile-link flex w-full items-center justify-between"
            onClick={() => setMobileSection(mobileSection === "bank" ? null : "bank")}
          >
            Blood Bank <ChevronDown size={16} className={mobileSection === "bank" ? "rotate-180" : ""} />
          </button>
          {mobileSection === "bank" && (
            <div className="pl-4">
              {bloodBankLinks.map((l) => (
                <Link key={l.href} href={l.href} className="mobile-sublink" onClick={() => setOpen(false)}>{l.label}</Link>
              ))}
            </div>
          )}

          <button
            className="mobile-link flex w-full items-center justify-between"
            onClick={() => setMobileSection(mobileSection === "donation" ? null : "donation")}
          >
            Blood Donation <ChevronDown size={16} className={mobileSection === "donation" ? "rotate-180" : ""} />
          </button>
          {mobileSection === "donation" && (
            <div className="pl-4">
              {bloodDonationLinks.map((l) => (
                <Link key={l.href} href={l.href} className="mobile-sublink" onClick={() => setOpen(false)}>{l.label}</Link>
              ))}
            </div>
          )}

          <Link href="/blogs" className="mobile-link" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/how-it-works" className="mobile-link" onClick={() => setOpen(false)}>How It Works</Link>
          <Link href="/contact-us" className="mobile-link" onClick={() => setOpen(false)}>Contact</Link>

          <div className="mt-4 flex items-center justify-between">
            <ThemeToggle />
            <Link
              href="/donate-blood"
              onClick={() => setOpen(false)}
              className="rounded-full bg-crimson-500 px-5 py-2.5 text-sm font-semibold text-white"
            >
              Donate Blood
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
