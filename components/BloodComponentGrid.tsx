import Link from "next/link";
import { Droplet, Activity, FlaskConical, TestTube, TestTube2, FlaskRound, Droplets, CircleDot, Snowflake, Beaker } from "lucide-react";
import { bloodComponents } from "@/lib/data";

const icons: Record<string, any> = {
  droplet: Droplet, activity: Activity, "flask-conical": FlaskConical, "test-tube": TestTube,
  "test-tube-2": TestTube2, "flask-round": FlaskRound, droplets: Droplets, "circle-dot": CircleDot,
  snowflake: Snowflake, beaker: Beaker,
};

export default function BloodComponentGrid() {
  return (
    <section className="container-page py-16 lg:py-20">
      <div className="max-w-2xl">
        <p className="section-eyebrow">Live Inventory</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-ink-900 dark:text-white">Blood Component Stock</h2>
        <p className="mt-3 text-ink-500 dark:text-ink-300">
          Each component supports a different medical need — from surgery to cancer treatment.
          Stock levels update in real time from our network of blood banks.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {bloodComponents.map((c) => {
          const Icon = icons[c.icon] ?? Droplet;
          const low = c.unitsInStock < 20;
          return (
            <Link
              key={c.id}
              href={`/blood-availability?component=${c.slug}`}
              className="card group flex flex-col items-center gap-3 p-5 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-crimson-50 text-crimson-600 transition group-hover:bg-crimson-500 group-hover:text-white dark:bg-ink-700 dark:text-crimson-300">
                <Icon size={20} />
              </span>
              <span className="text-sm font-medium text-ink-800 dark:text-ink-50">{c.name}</span>
              <span className={`text-xs font-mono ${low ? "text-amber-600" : "text-vital-500"}`}>
                {c.unitsInStock} unit{c.unitsInStock !== 1 ? "s" : ""} {low ? "· low stock" : "in stock"}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
