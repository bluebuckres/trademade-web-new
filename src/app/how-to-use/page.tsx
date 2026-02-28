import type { Metadata } from 'next';
import { MagneticButton } from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
    title: "How to Use TradeMade | Step-by-Step Guide",
    description: "A quick start guide on how to turn your trading idea into a live deployed algorithm using TradeMade's backtesting and custom development tools.",
    alternates: { canonical: "https://trademade.in/how-to-use" },
    openGraph: {
        title: "How to Build Algorithmic Trading Bots | TradeMade",
        description: "Learn how to backtest and deploy your trading strategies in 3 simple steps.",
        url: "https://trademade.in/how-to-use",
    },
};

export default function HowToUsePage() {
    return (
        <div className="flex flex-col w-full min-h-[80vh] pt-32 pb-20 px-6 max-w-4xl mx-auto">
            <div className="mb-16 border-b border-white/10 pb-8">
                <h1 className="font-satoshi text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
                    How it <span className="text-primary">Works.</span>
                </h1>
                <p className="text-lg text-slate-400">
                    From a raw trading concept to a production-ready algorithm executing on your broker API. Here is the TradeMade process.
                </p>
            </div>

            <div className="space-y-12">
                <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xl border border-primary/30">1</div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Define Your Edge (The Strategy)</h3>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            Everything starts with your idea. You define the entry, exit, position sizing, and risk management rules. Whether it's a simple EMA crossover or a complex multi-timeframe options selling strategy, document the logic clearly.
                        </p>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center font-bold text-xl border border-accent/30">2</div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">High-Precision Backtesting</h3>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            Never trade an unproven idea. We run your strategy logic through our proprietary tick-level backtesting engine using 5-10 years of NSE/BSE data. We factor in exact brokerage costs, STT, and realistic slippage to ensure the equity curve you see is actually achievable in live markets.
                        </p>
                        <MagneticButton href="/backtesting" className="bg-white/5 border border-white/10 text-white px-6 py-2">
                            Explore Backtesting
                        </MagneticButton>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-xl border border-green-500/30">3</div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Custom Development & Live Deployment</h3>
                        <p className="text-slate-400 leading-relaxed mb-4">
                            Once the backtest is profitable, our quant developers write production-grade code (Python/Node.js) to connect your strategy to broker APIs like Zerodha Kite Connect, Upstox, or Angel One. We handle OAuth flows, order routing, and error handling so you can sleep while your bot trades.
                        </p>
                        <MagneticButton href="/custom-development" className="bg-accent hover:bg-accent/80 border-none text-white px-6 py-2">
                            View Custom Dev
                        </MagneticButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
