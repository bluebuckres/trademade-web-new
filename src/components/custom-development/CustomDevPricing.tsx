"use client";

import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";

const plans = [
    {
        name: "Starter",
        priceRange: "₹15k – ₹50k",
        tagline: "Best for simple, rule-based strategies.",
        subTagline: "Simple rule-based strategies. Single broker. No AI/LLM.",
        features: [
            { text: "Up to 5 entry/exit conditions" },
            { text: "1 instrument (equity, futures, options)" },
            { text: "1 broker integration (Zerodha/Angel/Upstox)" },
            { text: "2-year backtest report" },
            { text: "30 days post-delivery support" },
            { text: "Signed NDA" }
        ],
        delivery: "3–7 days",
        cta: "Get Starter Quote",
        highlight: false,
        color: "primary"
    },
    {
        name: "Pro",
        priceRange: "₹50k – ₹1.5L",
        tagline: "Best for multi-leg options & SEBI RAs processing at scale.",
        subTagline: "Multi-leg options, SEBI RA tools, multi-account, Telegram bots included.",
        features: [
            { text: "Complex multi-leg options logic" },
            { text: "Up to 3 broker integrations" },
            { text: "Multi-account deployment" },
            { text: "5-year backtest + walk-forward opt" },
            { text: "90 days support + WhatsApp priority" },
            { text: "VPS setup & deployment included" }
        ],
        delivery: "7–14 days",
        cta: "Get Pro Quote",
        highlight: true,
        color: "accent"
    },
    {
        name: "Enterprise",
        priceRange: "Custom",
        tagline: "For institutions, prop desks & HNIs.",
        subTagline: "C++/Rust engines, AI news triggers, white-label, static IP, custom SLA.",
        features: [
            { text: "Unlimited complexity & instruments" },
            { text: "Full ATS development" },
            { text: "AI news sentiment integration" },
            { text: "Unlimited broker endpoints" },
            { text: "White-label options" },
            { text: "Dedicated quant developer (SLA)" }
        ],
        delivery: "14–30 days",
        cta: "Talk to Quant Team",
        highlight: false,
        color: "purple"
    }
];

export function CustomDevPricing() {
    return (
        <section className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h2 className="font-satoshi text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                    Transparent Pricing for Every Need
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto">
                    No hidden charges. Scope approved upfront. Source code transferred to you upon full payment.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {plans.map((plan, idx) => (
                    <LiquidGlassCard
                        key={idx}
                        className={`p-8 flex flex-col relative transition-transform duration-500 rounded-3xl ${plan.highlight
                            ? "border-accent/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_50px_-15px_rgba(30,107,255,0.2)] md:-translate-y-4 z-10 bg-[#1A1C23]"
                            : "border-white/10 bg-[#13151A] hover:bg-[#1A1C23] scale-100"
                            }`}
                    >
                        {plan.highlight && (
                            <>
                                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
                                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-[0_0_15px_rgba(30,107,255,0.5)]">
                                    Most Popular
                                </div>
                            </>
                        )}

                        <h3 className="font-satoshi text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <p className="text-sm text-slate-400 mb-2 h-10">{plan.tagline}</p>
                        <p className="text-xs text-slate-500 mb-6 h-10 italic">{plan.subTagline}</p>

                        <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-white/10">
                            <span className="text-3xl lg:text-4xl font-black text-white tracking-tighter">{plan.priceRange}</span>
                        </div>

                        <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Includes</p>
                        <ul className="space-y-4 mb-10 flex-1">
                            {plan.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex gap-3 text-sm text-slate-300">
                                    <span className={`text-${plan.color} shrink-0`}>✓</span>
                                    <span>{feature.text}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-6 border-t border-white/5 space-y-6">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Delivery</span>
                                <span className="text-white font-medium">{plan.delivery}</span>
                            </div>
                            <MagneticButton
                                href="/contact"
                                className={`w-full ${plan.highlight ? 'bg-accent text-white shadow-[0_0_20px_rgba(30,107,255,0.3)] border-none hover:bg-accent/90' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}
                            >
                                {plan.cta}
                            </MagneticButton>
                        </div>
                    </LiquidGlassCard>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-12">
                <div className="text-center text-sm text-slate-400 bg-surface/20 border border-white/5 mx-auto max-w-3xl rounded-2xl p-4 shadow-sm flex items-center justify-center">
                    <span className="text-slate-300 font-medium mr-1">Need a Telegram signal bot or Excel/Google Sheets to Broker automation?</span> That is covered too — ask us in your quote request.
                </div>
            </div>
        </section>
    );
}
