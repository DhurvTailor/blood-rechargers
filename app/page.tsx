import Hero from "@/components/Hero";
import BloodComponentGrid from "@/components/BloodComponentGrid";
import FeaturedBanks from "@/components/FeaturedBanks";
import CompatibilityChart from "@/components/CompatibilityChart";
import NewsSection from "@/components/NewsSection";
import DownloadApp from "@/components/DownloadApp";
import BlogSection from "@/components/BlogSection";
import OneDonationManyLives from "@/components/OneDonationManyLives";
import Livemergencyboard from "@/components/Liveemergencyboard";
import Donorjourneytimeline from "@/components/Donorjourneytimeline";
import Testimonialscarousel from "@/components/Testimonialscarousel";
import Faqaccordion from "@/components/Faqaccordian";
import Donortorecipienthero from "@/components/Donortoreceipnthero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Donortorecipienthero />
      <OneDonationManyLives />
      <Donorjourneytimeline />
      <Livemergencyboard />
      <BloodComponentGrid />
      <FeaturedBanks />
      <CompatibilityChart />
      <Testimonialscarousel />
      <NewsSection />
      <Faqaccordion />
      <DownloadApp />
      <BlogSection />
    </>
  );
}
