import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";
import { Icon } from "lucide-react";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bloodrechargers.com"),
  title: {
    default: "Blood Rechargers — Blood Donor Network in Rajasthan",
    template: "%s | Blood Rechargers",
  },
  description:
    "Blood Rechargers connects verified blood donors, blood banks, and patients across Rajasthan with real-time stock lookup, AI donor matching, and eligibility checks.",
  keywords: [
    "Blood Donor in Rajasthan", "Blood Bank in Jaipur", "Blood Donation",
    "Blood Donor Registration", "Blood Rechargers", "Emergency Blood Help",
  ],
  openGraph: {
    title: "Blood Rechargers — Blood Donor Network in Rajasthan",
    description: "Find verified blood donors, live blood stock, and donation camps across Rajasthan.",
    url: "https://www.bloodrechargers.com/",
    siteName: "Blood Rechargers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blood Rechargers — Trusted Blood Donor Network",
    description: "Find and connect with verified blood donors across Rajasthan.",
  },
  icons: {
    icon: "/Images/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-crimson-500 focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <AIAssistant />
      </body>
    </html>
  );
}
