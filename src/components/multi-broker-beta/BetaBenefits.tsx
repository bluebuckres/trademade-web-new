"use client";

import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";

const benefits = [
    {
        title: "Scalpers & Intraday Traders",
        desc: "Millisecond-level execution alignment across accounts. No more manual order entry on 3 platforms. One click — all accounts trade.",
        gradient: "from-primary/20"
    },
    {
        title: "Options Sellers & Premium Collectors",
        desc: "Deploy your short straddle across your personal, HUF, and family accounts. AI news layer auto-pauses before RBI or inflation data — protecting your collected premium.",
        gradient: "from-accent/20"
    },
    {
        title: "Positional & Swing Traders",
        desc: "Set up weekly strategies that execute automatically across accounts. Let AI news sentiment handle event risk so you don't have to watch the screen all day.",
        gradient: "from-purple-500/20"
    },
    {
        title: "SEBI RAs Managing Client Accounts",
        desc: "Centralised strategy execution for all client accounts. Per-client risk rules. Compliance-ready trade logs. Scale your advisory without scaling your manual work.",
        gradient: "from-yellow-500/20"
    }
];

export function BetaBenefits() {
    return (
        <section className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h2 className="font-satoshi text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                    Who Benefits Most
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, idx) => (
                    <LiquidGlassCard key={idx} className="p-10 relative overflow-hidden group">
                        <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${benefit.gradient} to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                        <h3 className="font-satoshi text-2xl font-bold text-white mb-4 relative z-10">{benefit.title}</h3>
                        <p className="text-slate-400 leading-relaxed text-lg relative z-10">
                            {benefit.desc}
                        </p>
                    </LiquidGlassCard>
                ))}
            </div>
        </section>
    );
}
