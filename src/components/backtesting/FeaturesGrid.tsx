"use client";

import { AnimatedBentoGrid, AnimatedBentoItem } from "@/components/ui/AnimatedBentoGrid";
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { Lightning, Target, Database, Strategy, PresentationChart, Calculator, CalendarCheck, FilePdf, LinkBreak } from "@phosphor-icons/react";

const features = [
    { title: "Tick-Level Accuracy", desc: "Most platforms use OHLC data giving phantom fills. We use actual tick data to test exactly what happened.", icon: Lightning },
    { title: "Realistic Slippage", desc: "Choose fixed, % based, or order book depth impact cost models. Plus STT and GST.", icon: Calculator },
    { title: "Multi-Leg Options", desc: "Straddles, condors, broken butterflies. Real strike-selection and Greeks tracking.", icon: Target },
    { title: "Portfolio Backtesting", desc: "Test basket strategies, view combined drawdown, correlation, and shared capital utilization.", icon: PresentationChart },
    { title: "Walk-Forward Tests", desc: "Avoid curve fitting by automatically dividing in-sample and out-of-sample datasets.", icon: Strategy },
    { title: "Monte Carlo Sim", desc: "1000+ simulations to find exact probability of ruin and confidence intervals.", icon: Database },
    { title: "10+ Years Data", desc: "F&O data with survivorship-bias-free equities.", icon: CalendarCheck },
    { title: "PDF Export", desc: "Export heatmaps and full trade-level CSVs to share with clients.", icon: FilePdf },
    { title: "Broker Paper Trade", desc: "Deploy your backtest seamlessly into paper trading mode on major brokers.", icon: LinkBreak },
];

export function FeaturesGrid() {
    return (
        <section className="py-24 relative z-10">
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <h2 className="font-satoshi text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                    What Makes Our Engine Different
                </h2>
            </div>

            <AnimatedBentoGrid className="lg:grid-cols-3 auto-rows-fr">
                {features.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                        <AnimatedBentoItem key={idx}>
                            <LiquidGlassCard className="h-full p-8 bg-surface/20 hover:bg-surface/40 border-white/5 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6">
                                    <Icon size={24} weight="fill" />
                                </div>
                                <h3 className="font-satoshi text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </LiquidGlassCard>
                        </AnimatedBentoItem>
                    );
                })}
            </AnimatedBentoGrid>
        </section>
    );
}
