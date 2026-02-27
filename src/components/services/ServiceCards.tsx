"use client";

import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { ArrowRight, CodeBlock, ChartLineUp, Infinity } from "@phosphor-icons/react";
import Link from "next/link";

const services = [
    {
        icon: ChartLineUp,
        title: "High-Precision Backtesting",
        desc: "Test any strategy on 10+ years of realistic historical data. Tick-level accuracy. Real slippage. Options multi-leg support. Portfolio-level analysis.",
        bestFor: "Strategy validation before going live. Comparing strategy variants. Stress-testing existing systems.",
        href: "/backtesting",
        cta: "Explore Backtesting",
        color: "primary"
    },
    {
        icon: CodeBlock,
        title: "Custom Algorithm Development",
        desc: "Describe your idea. We code, test, and deploy. No-code to full custom Python. 6 broker integrations. Lifetime maintenance.",
        bestFor: "Traders who have a strategy but can't code. RAs who need scalable multi-client execution. Institutions with complex requirements.",
        href: "/custom-development",
        cta: "Explore Custom Dev",
        color: "accent"
    },
    {
        icon: Infinity,
        title: "AI Multi-Broker Alignment (Beta)",
        desc: "Deploy one strategy across multiple brokers simultaneously. AI news triggers. Real-time alignment. Unified P&L dashboard.",
        bestFor: "Multi-account traders. SEBI RAs with client accounts. Anyone tired of manual order entry on multiple platforms.",
        href: "/multi-broker-beta",
        cta: "Join Beta Waitlist",
        color: "yellow-500"
    }
];

export function ServiceCards() {
    return (
        <section className="py-24 relative z-10 bg-background">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
                {services.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                        <LiquidGlassCard key={idx} className="p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 group hover:bg-surface/50 transition-colors duration-500 border-white/5 relative overflow-hidden">
                            <div className={`absolute top-0 w-full md:w-1 md:h-full md:left-0 h-1 bg-${service.color}/50`} />

                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <Icon size={32} weight="duotone" />
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col justify-center">
                                <h2 className="font-satoshi text-3xl font-bold text-white mb-4">{service.title}</h2>
                                <p className="text-slate-400 leading-relaxed text-lg mb-6 max-w-3xl">
                                    {service.desc}
                                </p>
                                <div className="bg-white/5 border border-white/5 rounded-xl p-4 md:p-6 mb-8 max-w-3xl">
                                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#94a3b8] mb-2 block">Best For</span>
                                    <p className="text-white text-sm md:text-base leading-relaxed">
                                        {service.bestFor}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center md:items-end md:justify-end shrink-0">
                                <Link href={service.href} className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:text-primary transition-all font-medium text-lg">
                                    {service.cta} <ArrowRight weight="bold" />
                                </Link>
                            </div>
                        </LiquidGlassCard>
                    );
                })}
            </div>
        </section>
    );
}
