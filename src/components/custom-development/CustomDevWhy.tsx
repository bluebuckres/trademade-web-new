"use client";

import { AnimatedBentoGrid, AnimatedBentoItem } from "@/components/ui/AnimatedBentoGrid";
import { LockKey, LinkBreak, CloudArrowUp, Newspaper, PresentationChart, Headset } from "@phosphor-icons/react";

const reasons = [
    { icon: LockKey, title: "Confidentiality You Can Count On", desc: "Signed NDAs before work begins. Your strategy, your IP. We never reuse, resell, or reference client strategies. API keys are used only during deployment and never stored." },
    { icon: LinkBreak, title: "6+ Broker Integrations Ready", desc: "Zerodha Kite, Angel One SmartAPI, Upstox API, 5Paisa, Alice Blue ANT API, Fyers. We maintain live integrations with all major Indian retail and institutional brokers." },
    { icon: CloudArrowUp, title: "Cloud & VPS Ready", desc: "Algos deployed to your own AWS/GCP or our managed VPS (included on Pro+). 99.9% uptime. Auto-restart on crash. Daily performance logs." },
    { icon: Newspaper, title: "AI News-Ready Architecture", desc: "Pro and Enterprise algos are built with hooks for our AI news sentiment module. When you're ready to add news triggers, it's a simple activation, not a rebuild." },
    { icon: PresentationChart, title: "Real Testing, Not Demos", desc: "We don't just show you pretty equity curves. Every algo comes with a realistic backtest report including slippage, brokerage, and maximum adverse excursion." },
    { icon: Headset, title: "Fast Turnaround, Human Support", desc: "Real WhatsApp support from a real person. Not a bot. Not a ticket queue. Starter projects delivered in 3–7 days. We don't over-promise." }
];

export function CustomDevWhy() {
    return (
        <section className="py-24 relative bg-surface/10">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h2 className="font-satoshi text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Why Traders Trust TradeMade <br />for Custom Development
                </h2>
            </div>

            <AnimatedBentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {reasons.map((reason, idx) => {
                    const Icon = reason.icon;
                    return (
                        <AnimatedBentoItem key={idx}>
                            <div className="h-full p-8 rounded-3xl bg-surface/30 border border-white/5 hover:bg-surface/50 hover:border-white/10 transition-colors duration-300">
                                <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 text-accent flex items-center justify-center mb-6">
                                    <Icon size={24} weight="duotone" />
                                </div>
                                <h3 className="font-satoshi text-xl font-bold text-white mb-3">{reason.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {reason.desc}
                                </p>
                            </div>
                        </AnimatedBentoItem>
                    );
                })}
            </AnimatedBentoGrid>
        </section>
    );
}
