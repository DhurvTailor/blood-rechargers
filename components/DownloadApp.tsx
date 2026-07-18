import Link from "next/link";
import { Heart, Building2, Smartphone } from "lucide-react";

export default function DownloadApp() {
  return (
    <section className="container-page grid gap-6 py-16 lg:grid-cols-3 lg:py-20">
      <div className="card flex flex-col items-start gap-3 bg-crimson-500 p-8 text-white">
        <Heart size={26} />
        <h3 className="font-display text-xl font-semibold">Want to donate blood?</h3>
        <p className="text-sm text-crimson-100">Register once, get matched to nearby requests automatically.</p>
        <Link href="/donate-blood" className="mt-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-crimson-600">
          Donate Blood
        </Link>
      </div>

      <div className="card flex flex-col items-start gap-3 bg-ink-900 p-8 text-white">
        <Building2 size={26} className="text-vital-400" />
        <h3 className="font-display text-xl font-semibold">Run a blood bank?</h3>
        <p className="text-sm text-ink-300">List your stock and reach verified donors and patients.</p>
        <Link href="/blood-bank-registration" className="mt-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-900">
          Add Blood Bank
        </Link>
      </div>

      <div className="card flex flex-col items-start gap-3 p-8">
        <Smartphone size={26} className="text-crimson-500" />
        <h3 className="font-display text-xl font-semibold text-ink-900 dark:text-white">Take it with you</h3>
        <p className="text-sm text-ink-500 dark:text-ink-300">
          Blood Rechargers is free on Android and iOS, with push alerts for urgent requests near you.
        </p>
        <div className="mt-2 flex gap-2">
          <a href="https://play.google.com/store/apps/details?id=com.blood_rechargers&hl=en_IN" className="btn-secondary !px-4 !py-2 text-xs">Google Play</a>
          <a href="#" className="btn-secondary !px-4 !py-2 text-xs">App Store</a>
        </div>
      </div>
    </section>
  );
}
