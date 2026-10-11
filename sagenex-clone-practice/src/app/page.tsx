import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Ticker } from "@/components/home/Ticker";
import { Legacy } from "@/components/home/Legacy";
import { InvestmentPillars } from "@/components/home/InvestmentPillars";
import { GlobalPayCard } from "@/components/home/GlobalPayCard";
import { Ecosystem } from "@/components/home/Ecosystem";
import { Roadmap } from "@/components/home/Roadmap";
import { FAQ } from "@/components/home/FAQ";
import { BrandStatement } from "@/components/home/BrandStatement";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Ticker />
        <Legacy />
        <InvestmentPillars />
        <GlobalPayCard />
        <Ecosystem />
        <Roadmap />
        <FAQ />
        <BrandStatement />
      </main>
      <Footer />
    </>
  );
}
