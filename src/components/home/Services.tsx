"use client";

import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Check } from "@phosphor-icons/react";

const services = [
    {
        tag: "Core",
        title: "High-Precision Backtesting",
        body: "Test any strategy on tick-level data spanning 10+ years. Realistic slippage, brokerage, options Greeks, portfolio-level analysis, walk-forward optimisation, and Monte Carlo simulation.",
        cta: "Start Free Backtest →",
        href: "/backtesting",
        features: ["Tick-level accuracy", "Multi-leg options", "Portfolio backtest", "Walk-forward testing"],
        accent: "text-primary",
        border: "border-primary/40",
        bgLight: "bg-primary/10",
        bgHover: "hover:bg-primary/5",
        borderHover: "hover:border-primary/60",
        tagBg: "bg-primary/20",
    },
    {
        tag: "Core",
        title: "Custom Algo Development",
        body: "Describe your strategy. We code it in Python, AFL, or Pine Script. Tested against historical data, optimised, and deployed to your broker with lifetime maintenance.",
        cta: "Get a Free Quote →",
        href: "/custom-development",
        features: ["6 broker integrations", "No-code to full custom", "Lifetime support", "NDA-protected"],
        accent: "text-blue-400",
        border: "border-blue-400/40",
        bgLight: "bg-blue-400/10",
        bgHover: "hover:bg-blue-400/5",
        borderHover: "hover:border-blue-400/60",
        tagBg: "bg-blue-400/20",
    },
    {
        tag: "Beta",
        title: "AI Multi-Broker Alignment",
        body: "Deploy one strategy across multiple brokers simultaneously. AI news sentiment layer auto-adjusts positions during RBI decisions, earnings, and market events.",
        cta: "Join Beta Waitlist →",
        href: "/multi-broker-beta",
        features: ["Real-time mirroring", "AI news triggers", "Unified P&L view", "Telegram alerts"],
        accent: "text-primary",
        border: "border-primary/40",
        bgLight: "bg-primary/10",
        bgHover: "hover:bg-primary/5",
        borderHover: "hover:border-primary/60",
        tagBg: "bg-primary/20",
    }
];

export function Services() {
    return (
        <section className="py-24 relative bg-surface">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="mb-14">
                    <div className="text-primary text-xs uppercase tracking-widest font-semibold mb-3">Our Services</div>
                    <h2 className="font-satoshi text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-tight text-white m-0">
                        Everything you need to trade<br />algorithmically
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <LiquidGlassCard
                            key={i}
                            className={`p-8 flex flex-col transition-all duration-300 ${s.borderHover} cursor-default`}
                        >
                            <div className="flex justify-between items-center mb-5">
                                <span className={`${s.tagBg} ${s.accent} text-[0.7rem] font-semibold px-3 py-1 rounded-full tracking-wider`}>
                                    {s.tag}
                                </span>
                                {s.tag === "Beta" && (
                                    <span className="bg-red-500/20 text-red-400 text-[0.65rem] font-semibold px-2 py-1 rounded-full">
                                        Limited Seats
                                    </span>
                                )}
                            </div>

                            <h3 className="font-satoshi text-[1.15rem] font-bold text-white mb-3 tracking-tight">
                                {s.title}
                            </h3>

                            <p className="text-slate-400 text-sm leading-[1.65] flex-1 mb-6">
                                {s.body}
                            </p>

                            <ul className="list-none p-0 m-0 mb-6 flex flex-col gap-2.5">
                                {s.features.map(f => (
                                    <li key={f} className="flex items-center gap-2 text-slate-300 text-sm">
                                        <span className={`${s.accent} text-xs`}><Check weight="bold" /></span> {f}
                                    </li>
                                ))}
                            </ul>

                            <MagneticButton
                                href={s.href}
                                className={`w-full bg-transparent ${s.accent} border ${s.border} rounded-lg py-3 text-sm font-semibold transition-all duration-300 ${s.bgHover} ${s.borderHover}`}
                            >
                                {s.cta}
                            </MagneticButton>
                        </LiquidGlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
