"use client";

import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { Path, ChartPieSlice, ShieldWarning, DeviceMobile, ChartLineUp, AppWindow, Newspaper } from "@phosphor-icons/react";

const features = [
    { icon: Path, title: "Real-Time Order Mirroring", desc: "One master strategy. Infinite execution accounts. When your algo signals a trade, orders are placed simultaneously across all connected broker accounts within milliseconds. Position sizing is configurable per account." },
    { icon: Newspaper, title: "AI News Sentiment Triggers", desc: "Our NLP engine monitors news feeds in real-time. Based on sentiment score and event category, the system can auto-pause all positions, reduce size by a defined %, or trigger specific entry logic." },
    { icon: ChartPieSlice, title: "Per-Account Risk Rules", desc: "Each connected account has its own risk configuration: max capital per trade, max daily loss limit, max open positions, instrument-level exposure caps. One account hitting a limit doesn't affect others." },
    { icon: DeviceMobile, title: "Telegram Alerts Per Account", desc: "Dedicated Telegram channel per account (or a unified dashboard channel). Alerts for order placement, fills, rejections, stop-loss hits, limits reached, and news triggers activated." },
    { icon: ChartLineUp, title: "Unified P&L Dashboard", desc: "See all connected accounts — across all brokers — in one real-time dashboard. Individual account P&L, combined portfolio P&L, open positions, and today's trade log. No switching between broker apps." },
    { icon: ShieldWarning, title: "Manual Override & ATS Mode", desc: "Pause mirroring for any account, cancel open orders, or take manual control at any time. Or run full ATS mode with scheduled session start/stop and auto-square-off at 3:15 PM." },
];

export function BetaFeatures() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <h2 className="font-satoshi text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                    What AI Multi-Broker Alignment Can Do
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {features.map((feature, idx) => {
                    const Icon = feature.icon;
                    return (
                        <LiquidGlassCard key={idx} className="p-8 md:p-10 flex flex-col md:flex-row gap-6 group hover:bg-surface/50 transition-colors border-white/5">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                <Icon size={28} weight="fill" />
                            </div>
                            <div>
                                <h3 className="font-satoshi text-2xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-[15px]">
                                    {feature.desc}
                                </p>
                            </div>
                        </LiquidGlassCard>
                    );
                })}
            </div>
        </section>
    );
}
