"use client";

import { useState } from "react";
import { LogIn, User, Building2, Tent, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const roles = [
  { key: "donor", label: "Donor", icon: User },
  { key: "bank", label: "Blood Bank", icon: Building2 },
  { key: "camp", label: "Camp", icon: Tent },
  { key: "admin", label: "Admin", icon: ShieldCheck },
] as const;

export default function LoginPage() {
  const [role, setRole] = useState<(typeof roles)[number]["key"]>("donor");

  return (
    <>
      <PageHeader eyebrow="Account Access" title="Login" description="One platform, four ways in — pick your role to continue." />
      <section className="container-page py-14">
        <div className="mx-auto max-w-md card p-6 sm:p-8">
          <div className="grid grid-cols-4 gap-1.5 rounded-full bg-ink-50 p-1.5 dark:bg-ink-700">
            {roles.map((r) => (
              <button
                key={r.key}
                onClick={() => setRole(r.key)}
                className={`flex flex-col items-center gap-1 rounded-full px-2 py-2 text-[11px] font-medium transition ${
                  role === r.key ? "bg-crimson-500 text-white" : "text-ink-500 dark:text-ink-300"
                }`}
              >
                <r.icon size={15} /> {r.label}
              </button>
            ))}
          </div>

          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <label className="text-sm">
              <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Mobile Number or Email</span>
              <input required className="input-field" placeholder="Enter your mobile or email" />
            </label>
            <label className="text-sm">
              <span className="mb-1 block font-medium text-ink-700 dark:text-ink-100">Password</span>
              <input required type="password" className="input-field" placeholder="Enter your password" />
            </label>
            <button type="submit" className="btn-primary w-full">
              <LogIn size={16} /> Login as {roles.find((r) => r.key === role)?.label}
            </button>
          </form>
          <p className="mt-4 text-center text-xs text-ink-400">
            Don&apos;t have an account? <a href="/donate-blood" className="font-medium text-crimson-600 hover:underline dark:text-crimson-300">Register here</a>
          </p>
        </div>
      </section>
    </>
  );
}
