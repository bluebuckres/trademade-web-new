"use client";

import { AsymmetricContainer } from "@/components/ui/AsymmetricContainer";

const personas = [
    {
        title: "Individual Traders",
        description: "You have a strategy in your head — or in an Excel sheet. We turn it into a battle-tested, live-trading algorithm. No coding knowledge needed. Start with a backtest; deploy when confident.",
        cta: "→ Start with Free Backtesting",
        gradient: "from-blue-500/20 to-transparent",
    },
    {
        title: "Strategy Creators & SEBI RAs",
        description: "Manage client strategies at scale. Create rule-based algos your clients can subscribe to. Multi-account execution, portfolio-level risk controls, and compliance-friendly reporting.",
        cta: "→ See RA Features",
        gradient: "from-primary/20 to-transparent",
    },
    {
        title: "Prop Desks & Institutions",
        description: "Custom quant development for complex multi-leg strategies, basket orders, and high-frequency requirements. Full white-label options. VPS/cloud hosting. SLA-backed support.",
        cta: "→ Talk to Our Quant Team",
        gradient: "from-purple-500/20 to-transparent",
    }
];

export function Personas() {
    return (
        <section className="py-24 relative border-t border-white/5 bg-surface/30">
            <AsymmetricContainer ratio="40/60" className="items-start">
                <div className="sticky top-32">
                    <h2 className="font-satoshi text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Built for Every Level of <br />
                        <span className="text-slate-400">Algorithmic Trader</span>
                    </h2>
                    <p className="text-slate-500 text-lg max-w-sm leading-relaxed">
                        From retail traders starting their first backtest to institutions requiring millisecond execution across 50 accounts.
                    </p>
                </div>

                <div className="flex flex-col gap-8">
                    {personas.map((persona, idx) => (
                        <div
                            key={idx}
                            className="group relative p-8 md:p-10 rounded-3xl bg-surface border border-white/5 transition-all duration-300 hover:border-white/10 overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${persona.gradient} blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                            <h3 className="font-satoshi text-2xl font-bold text-white mb-4 relative z-10">{persona.title}</h3>
                            <p className="text-slate-400 leading-relaxed mb-8 relative z-10">{persona.description}</p>

                            <button className="text-primary font-medium text-sm tracking-wide hover:text-white transition-colors relative z-10">
                                {persona.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </AsymmetricContainer>
        </section>
    );
}
