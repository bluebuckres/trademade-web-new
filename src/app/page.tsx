import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Ticker } from "@/components/home/Ticker";
import { WhyTradeMade } from "@/components/home/WhyTradeMade";
import { Personas } from "@/components/home/Personas";
import { Services } from "@/components/home/Services";
import { HowItWorks } from "@/components/home/HowItWorks";
import { BetaSpotlight } from "@/components/home/BetaSpotlight";
import { Testimonials } from "@/components/home/Testimonials";
import { BlogTease } from "@/components/home/BlogTease";

export const metadata: Metadata = {
  title: "Backtest. Build. Deploy. Trade Smarter | TradeMade",
  description: "India's most precise backtesting engine meets professional custom algorithm development. From raw idea to live deployment on Zerodha, Upstox, Angel One & more.",
  keywords: ["algo trading India", "backtesting platform", "custom trading bot", "Zerodha algo", "NSE backtesting", "quant trading", "algorithmic strategy development"],
  openGraph: {
    title: "Backtest. Build. Deploy. Trade Smarter | TradeMade",
    description: "India's most precise backtesting engine meets professional custom algorithm development. From raw idea to live deployment.",
    url: "https://trademade.in",
  },
  alternates: {
    canonical: "https://trademade.in",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      <Ticker />
      <WhyTradeMade />
      <Personas />
      <Services />
      <HowItWorks />
      <BetaSpotlight />
      <Testimonials />
      <BlogTease />
    </div>
  );
}
