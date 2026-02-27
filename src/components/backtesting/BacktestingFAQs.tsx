"use client";

import { FAQAccordion } from "@/components/ui/FAQAccordion";

const faqs = [
    {
        question: "What makes TradeMade's backtesting different from free tools?",
        answer: "Free tools (like TradingView or Streak) use OHLC candle data and simplified cost models mathematically creating phantom fills. TradeMade uses tick-level data, models actual impact costs, and supports complex multi-leg options strategies with real strike-selection logic. The difference in P&L estimates can be 20–40%."
    },
    {
        question: "How do you handle options expiry in backtests?",
        answer: "Our engine automatically rolls expiry based on your rules (e.g., 'roll 3 days before expiry', 'switch to next weekly on Wednesday'). Strike selection (e.g., ATM±50 points, 0.3 delta) is computed at each bar using actual historical data strings."
    },
    {
        question: "What does 'realistic slippage' mean in your context?",
        answer: "We offer 3 models: Fixed per trade, % of trade value, and an Impact cost model based on historical order book depth. For liquid Nifty options, impact is minimal, but for mid-cap equities, this feature profoundly alters net P&L realism."
    },
    {
        question: "Can I backtest a portfolio of strategies?",
        answer: "Yes — on the Quant plan. You can run multiple strategies simultaneously, viewing combined capital utilisation, un-correlated equity curves, and portfolio-level Sharpe drops."
    },
    {
        question: "What is walk-forward optimisation?",
        answer: "Normal optimisation strictly finds the best parameters historically—which invariably means overfitting. Walk-forward testing automatically divides data into overlapping in-sample/out-of-sample segments to validate true future robustness."
    }
];

export function BacktestingFAQs() {
    return (
        <section className="py-24 relative">
            <div className="max-w-3xl mx-auto px-6 text-center mb-16">
                <h2 className="font-satoshi text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Frequently Asked Questions
                </h2>
                <p className="text-slate-400">
                    Everything you need to know about India's most precise backtesting platform.
                </p>
            </div>

            <div className="px-6">
                <FAQAccordion items={faqs} />
            </div>

            <div className="text-center mt-12">
                <button className="text-primary font-medium text-sm tracking-wide hover:text-white transition-colors">
                    💬 Have more questions? WhatsApp Us →
                </button>
            </div>
        </section>
    );
}
