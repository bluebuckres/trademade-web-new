"use client";

import { motion } from "framer-motion";
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { Code, Lightning, LockKey, ChartLineUp } from "@phosphor-icons/react";

const features = [
    {
        title: "Institutional-Grade Precision",
        description: "Tick-by-tick historical data. Realistic slippage, brokerage, and impact costs built in. Your backtest reflects reality — not wishful thinking.",
        icon: ChartLineUp,
        colSpan: "md:col-span-2",
        delay: 0.1
    },
    {
        title: "100% Confidential",
        description: "Your strategy is yours. Signed NDAs before work begins. Zero data sharing. Your edge stays private.",
        icon: LockKey,
        colSpan: "md:col-span-1",
        delay: 0.2
    },
    {
        title: "From Idea to Live Algo",
        description: "Submit your strategy in plain language. Our quant team codes, tests, and deploys it across your brokers. No Python required.",
        icon: Code,
        colSpan: "md:col-span-1",
        delay: 0.3
    },
    {
        title: "AI-Powered Edge (Beta)",
        description: "Multi-Broker Alignment system syncs your algo across Zerodha, Upstox & more — with real-time AI news sentiment triggers.",
        icon: Lightning,
        colSpan: "md:col-span-2",
        delay: 0.4
    }
];

export function WhyTradeMade() {
    return (
        <section className="py-20 md:py-32 relative bg-background">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="mb-12 md:mb-20 text-center md:text-left">
                    <h2 className="font-satoshi text-3xl md:text-[3.5rem] font-bold tracking-tight text-white mb-6 leading-[1.1]">
                        Why Serious Traders Choose <br className="hidden md:block" />
                        <span className="text-primary tracking-tighter">TradeMade.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: feature.delay, ease: [0.21, 0.47, 0.32, 0.98] }}
                                className={`flex ${feature.colSpan}`}
                            >
                                <LiquidGlassCard className="w-full h-full p-8 md:p-12 flex flex-col group transition-all duration-500 bg-surface/40 hover:bg-surface/80 border-white/5 rounded-[2rem] shadow-none hover:shadow-[0_0_40px_-15px_rgba(0,212,170,0.15)]">
                                    <div className="h-14 w-14 rounded-2xl bg-[#0a0f16] border border-white/10 flex items-center justify-center mb-8 md:mb-12 shadow-sm text-primary group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                                        <Icon size={26} weight="duotone" />
                                    </div>
                                    <h3 className="font-satoshi text-2xl md:text-[1.75rem] font-bold text-white mb-4 tracking-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-400 leading-[1.7] text-sm md:text-base mt-auto max-w-[90%]">
                                        {feature.description}
                                    </p>
                                </LiquidGlassCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
