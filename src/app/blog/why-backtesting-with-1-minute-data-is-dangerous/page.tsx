import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import LeadCaptureForm from "@/components/blog/LeadCaptureForm";

export const metadata: Metadata = {
    title: "Why Backtesting with 1-Minute Data is Dangerous",
    description: "Your backtest shows a 180% CAGR. Sharpe 3.4. Near-zero drawdown. You deploy ₹5L. In three weeks, the strategy is down 28%. Here's why.",
    keywords: ["1-minute data backtesting", "tick data backtesting", "bid ask bounce", "algo trading slippage", "TradeMade research"],
    openGraph: {
        title: "Why Backtesting with 1-Minute Data is Dangerous | TradeMade",
        description: "Your backtest shows a 180% CAGR. Sharpe 3.4. Near-zero drawdown. You deploy ₹5L. In three weeks, the strategy is down 28%. Here's why.",
        url: "https://trademade.in/blog/why-backtesting-with-1-minute-data-is-dangerous",
        type: "article",
    },
    alternates: { canonical: "https://trademade.in/blog/why-backtesting-with-1-minute-data-is-dangerous" },
};

export default function BlogPost() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-24">
            <article className="max-w-3xl mx-auto px-6">

                {/* Back Link */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors mb-12 font-medium">
                    <ArrowLeft weight="bold" /> Back to Research
                </Link>

                {/* Header */}
                <header className="mb-16">
                    <div className="flex items-center gap-3 text-sm font-mono text-primary mb-6">
                        <span>Quant Research</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400">Mar 15, 2024</span>
                    </div>

                    <h1 className="font-satoshi text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
                        Why Backtesting with 1-Minute Data is <em className="text-primary not-italic">Dangerous</em>
                    </h1>

                    <div className="flex items-center gap-4 border-t border-b border-white/10 py-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-mono">
                            TM
                        </div>
                        <div>
                            <div className="font-bold text-white text-sm">TradeMade Research Desk</div>
                            <div className="text-slate-400 text-xs font-mono">7-minute read</div>
                        </div>
                    </div>
                </header>

                {/* Article Content */}
                <div className="prose prose-invert prose-slate prose-lg max-w-none prose-headings:font-satoshi prose-headings:font-bold prose-headings:text-white prose-p:text-slate-300 prose-a:text-primary prose-strong:text-white prose-li:text-slate-300">

                    <p>
                        Your backtest shows a 180% CAGR. Sharpe 3.4. Near-zero drawdown. You deploy ₹5L. In three weeks, the strategy is down 28%.
                    </p>
                    <p>
                        This is not bad luck. This is what 1-minute data does to intelligent people who trust it too much. Let's break down exactly why — and what actually works.
                    </p>

                    <hr className="border-white/10 my-10" />

                    <h2>The Core Problem: You're Fitting to Noise</h2>
                    <p>
                        A 1-minute OHLC bar doesn't represent the market. It represents <em>one snapshot</em> of a noisy, microstructure-contaminated stream of prices. Every 1-minute close is polluted by bid-ask bounce — prices oscillating between ₹100.05 and ₹99.95 not because of any real movement, but because of the mechanical alternation between buyers hitting the ask and sellers hitting the bid.
                    </p>

                    <div className="bg-[#111827] border-l-4 border-primary p-6 rounded-r-xl my-8">
                        <h3 className="text-primary font-bold mt-0 mb-2 uppercase tracking-wide text-sm font-satoshi">⚠ The Bid-Ask Bounce Trap</h3>
                        <p className="text-sm m-0">
                            At 1-minute granularity, a significant portion of price movement is pure market microstructure noise — not signal. A strategy that "works" on this data has often learned the noise pattern of that specific period, not a real market inefficiency. When regime changes, it collapses.
                        </p>
                    </div>

                    <p>
                        Add to this the fact that a 5-year backtest on 1-minute data gives you ~625,000 data points. When you're optimising even 4–5 parameters across that, you will find combinations that look like genius. That's not edge — that's the multiple testing problem. If you run 1,000 random parameter combos, roughly 50 will show a Sharpe above 2.0 purely by chance.
                    </p>

                    <blockquote className="border-l-4 border-primary pl-6 my-10 italic text-2xl font-satoshi text-white">
                        "With four parameters I can fit an elephant, and with five I can make him wiggle his trunk."
                    </blockquote>

                    <p>
                        John von Neumann said that about curve fitting in general. In quant trading on 1-minute data, you've got 20 parameters and a very cooperative elephant.
                    </p>

                    <hr className="border-white/10 my-10" />

                    <h2>What the Research Actually Says</h2>
                    <p>
                        Quantopian studied 888 live strategies. The finding: Sharpe ratios from 1-minute backtests had near-zero predictive power for live performance. The more a strategy was optimised, the worse it performed. Bailey & López de Prado demonstrated mathematically that after enough trials on the same dataset, finding a "profitable" strategy by pure chance is essentially guaranteed.
                    </p>
                    <p>
                        The academic consensus on sampling frequency is also telling. Researchers working on volatility estimation found that as bar frequency increases beyond a certain point, microstructure noise begins to dominate the true price signal. The optimal sampling frequency for most equity strategies is between 5 and 30 minutes — not 1 minute.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 relative">
                        <div className="p-6 border-t-4 border-red-500/80 bg-red-500/5 rounded-b-xl">
                            <div className="font-satoshi text-xs font-bold tracking-widest text-red-500 uppercase mb-4">❌ 1-Min Backtest Reality</div>
                            <ul className="text-sm space-y-2 m-0 mt-2 list-none p-0 text-slate-300">
                                <li>Captures bid-ask bounce as signal</li>
                                <li>5M+ data points invite overfitting</li>
                                <li>Ignores realistic slippage</li>
                                <li>No intra-bar execution modelling</li>
                                <li>Strategy breaks on regime shift</li>
                            </ul>
                        </div>
                        <div className="p-6 border-t-4 border-primary bg-primary/5 rounded-b-xl">
                            <div className="font-satoshi text-xs font-bold tracking-widest text-primary uppercase mb-4">✅ Tick-Level Backtesting</div>
                            <ul className="text-sm space-y-2 m-0 mt-2 list-none p-0 text-slate-300">
                                <li>Tests real execution prices</li>
                                <li>Accurate slippage + brokerage</li>
                                <li>Intra-bar price path modelling</li>
                                <li>Walk-forward validation built-in</li>
                                <li>Monte Carlo stress-tested</li>
                            </ul>
                        </div>
                    </div>

                    <hr className="border-white/10 my-10" />

                    <h2>The Execution Reality Check</h2>
                    <p>
                        Even if your signal were valid, 1-minute backtests almost never model execution honestly. Your backtest assumes you bought at the 1-minute close. In reality, your market order moved the price, you waited for order routing latency, and you filled ₹0.35 above the close. Do this 200 times a month and the "alpha" you thought you had is entirely eaten by execution costs.
                    </p>

                    <div className="bg-[#fff3cd]/10 border border-[#e0c84a]/50 p-6 rounded-xl my-8">
                        <p className="m-0 text-[#e0c84a]">
                            <strong className="text-white">Practical rule:</strong> If your strategy doesn't survive adding 0.05% per trade in slippage + brokerage, it has no live edge. Most 1-minute strategies die right here.
                        </p>
                    </div>

                    <p>
                        Walk-forward optimisation is the standard fix for curve-fitting — optimise on a 2-year window, test on the next 6 months, roll forward, repeat. Most retail traders never do this because their backtesting tool doesn't support it. They run one optimisation on 5 years of data and call it validated.
                    </p>

                    <hr className="border-white/10 my-10" />

                    <h2>What You Should Actually Do</h2>
                    <p>
                        Test on tick-level data, not OHLC bars. Use at minimum 8–10 years of data to capture multiple market regimes — bull, bear, crash, sideways. Model slippage realistically based on your typical order size vs. average traded volume. Run Monte Carlo simulation to stress-test the strategy across synthetic price paths, not just the one historical path you happened to test on. And always hold out a completely unseen out-of-sample period that you never touch during development.
                    </p>
                    <p>
                        These aren't nice-to-haves. They're the difference between a strategy that works and one that only worked on paper.
                    </p>

                </div>

                <LeadCaptureForm />

                <div className="prose prose-invert prose-slate prose-lg max-w-none mt-10">
                    <p>
                        The traders who consistently survive aren't necessarily smarter. They've just stopped trusting pretty equity curves and started demanding statistical rigour from their tools. That starts with throwing out 1-minute backtests entirely.
                    </p>
                </div>

            </article>
        </main>
    )
}
