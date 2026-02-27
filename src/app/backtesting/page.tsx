import type { Metadata } from 'next';
import { BacktestingHero } from "@/components/backtesting/BacktestingHero";
import { FeaturesGrid } from "@/components/backtesting/FeaturesGrid";
import { Pricing } from "@/components/backtesting/Pricing";
import { BacktestingFAQs } from "@/components/backtesting/BacktestingFAQs";

export const metadata: Metadata = {
    title: "India's Most Realistic Backtesting Engine",
    description: "Test your strategy on 10+ years of tick data — with slippage, brokerage, and real-world costs built in. Free tier available.",
    keywords: ["backtesting engine India", "NSE backtest", "tick data backtesting", "strategy testing", "slippage simulation", "algo backtest free", "options backtesting India"],
    openGraph: {
        title: "India's Most Realistic Backtesting Engine | TradeMade",
        description: "Test your strategy on 10+ years of tick data — with slippage, brokerage, and real-world costs built in.",
        url: "https://trademade.in/backtesting",
    },
    alternates: { canonical: "https://trademade.in/backtesting" },
};

export default function BacktestingPage() {
    return (
        <div className="flex flex-col w-full overflow-hidden">
            <BacktestingHero />
            <FeaturesGrid />
            <Pricing />
            <BacktestingFAQs />
        </div>
    );
}
