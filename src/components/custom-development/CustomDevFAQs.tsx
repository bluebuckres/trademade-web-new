"use client";

import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { WhatsappLogo, ClipboardText } from "@phosphor-icons/react";

const faqs = [
    {
        question: "Do I need to know coding to get an algo built?",
        answer: "No. Most of our clients are traders, not developers. Describe your strategy in plain language — entry conditions, exit conditions, position sizing, risk rules. Our team handles the rest."
    },
    {
        question: "How do I share my strategy idea without it being stolen?",
        answer: "We sign a mutual NDA before any discussion of strategy details. Our team is contractually prohibited from using client strategies for any purpose other than the contracted project."
    },
    {
        question: "What information do I need to provide?",
        answer: "Entry logic (conditions to buy/sell), exit logic (target, SL, trailing SL), instrument(s), timeframe, position sizing, broker preference, and any special rules (e.g., 'only trade between 9:30–11:30 AM')."
    },
    {
        question: "What happens if the algo doesn't perform well in backtesting?",
        answer: "We share the full backtest report before deployment. If results don't match agreed benchmarks, we revise the strategy parameters. We do not force deployment of underperforming algos."
    },
    {
        question: "Can you build strategies for all segment types?",
        answer: "Yes — equity intraday, delivery, F&O (options and futures), multi-leg options, pairs trading, statistical arbitrage, momentum, mean reversion, and more."
    },
    {
        question: "Do you provide the source code?",
        answer: "Yes, source code ownership is transferred to you upon full payment. You can modify it, share it, or have another developer maintain it."
    },
    {
        question: "How are my API keys handled?",
        answer: "You provide broker API keys only after the algo is ready and tested. Keys are used only during deployment setup. We do not store, log, or retain your API credentials after setup."
    },
    {
        question: "What programming languages do you use?",
        answer: "Primarily Python (for broker API integrations and live trading). AFL for AmiBroker backtesting. Pine Script for TradingView-based strategies. We choose the stack best suited to your broker."
    }
];

export function CustomDevFAQs() {
    return (
        <section className="py-24 relative bg-surface/20 border-t border-white/5">
            <div className="max-w-3xl mx-auto px-6 text-center mb-16">
                <h2 className="font-satoshi text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Everything You Want to Know Before Hiring Us
                </h2>
                <p className="text-slate-400">
                    Clear answers. No technical jargon.
                </p>
            </div>

            <div className="px-6">
                <FAQAccordion items={faqs} />
            </div>

            <div className="text-center mt-12 bg-surface/30 p-8 rounded-3xl max-w-xl mx-auto border border-white/5 backdrop-blur-md">
                <h3 className="font-bold text-white mb-2 text-xl">Ready to Start?</h3>
                <p className="text-slate-400 text-sm mb-6">Fill out our intake form or send us a WhatsApp message. We respond within a few hours.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-6 py-3 rounded-full bg-accent hover:bg-accent/90 text-white font-medium text-sm transition-colors shadow-[0_0_15px_rgba(30,107,255,0.3)] flex items-center gap-2">
                        <WhatsappLogo size={18} weight="fill" />
                        WhatsApp Us Idea
                    </button>
                    <button className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium text-sm transition-colors flex items-center gap-2">
                        <ClipboardText size={18} weight="fill" />
                        Fill Intake Form
                    </button>
                </div>
            </div>
        </section>
    );
}
