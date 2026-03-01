"use client";

import { AnimatedBentoGrid, AnimatedBentoItem } from "@/components/ui/AnimatedBentoGrid";
import { LockKey, Plugs, CloudArrowUp, Robot, PresentationChart, TreeStructure } from "@phosphor-icons/react";

const reasons = [
    { span: "md:col-span-2", icon: LockKey, title: "Confidentiality You Can Count On", desc: "Signed NDAs before work begins. Your strategy, your IP. We never reuse, resell, or reference client strategies. API keys are used only during deployment and never stored." },
    { span: "md:col-span-1", icon: Plugs, title: "Broker-Agnostic by Design", desc: "We're not locked into any broker's ecosystem. We integrate with 20+ Indian brokers via their official APIs. Switching brokers? Your algo moves with you — no rebuild required. New broker? We add it." },
    { span: "md:col-span-1", icon: CloudArrowUp, title: "Cloud, VPS & Static IP Ready", desc: "Algos deployed to AWS, GCP, or our managed VPS (Pro+). Static IP available for brokers requiring it for API whitelisting. 99.9% uptime, auto-restart on crash, daily logs. Your algo never sleeps." },
    { span: "md:col-span-1", icon: Robot, title: "AI, Telegram & Automation Native", desc: "We build Telegram bots, OpenAI/LLM news sentiment layers, MCP-powered decision engines, and Excel/Google Sheets signal pipelines — all as first-class features, not afterthoughts. If it can be automated, we automate it." },
    { span: "md:col-span-2", icon: PresentationChart, title: "Real Testing, Not Demos", desc: "We don't just show you pretty equity curves. Every algo comes with a realistic backtest report including slippage, brokerage, and maximum adverse excursion." },
    { span: "md:col-span-1", icon: TreeStructure, title: "Multi-Account, Complex Logic", desc: "Managing 5 accounts or 500? Our execution engine handles position sizing per account, risk caps, group-level P&L monitoring, and simultaneous order dispatch. Prop desks and SEBI RAs rely on us for exactly this." }
];

export function CustomDevWhy() {
    return (
        <section className="py-24 relative bg-surface/10">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h2 className="font-satoshi text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Why Traders Trust TradeMade <br />for Custom Development
                </h2>
            </div>

            <AnimatedBentoGrid className="grid-cols-1 md:grid-cols-4">
                {reasons.map((reason, idx) => {
                    const Icon = reason.icon;
                    return (
                        <AnimatedBentoItem key={idx} className={reason.span}>
                            <div className="h-full p-8 rounded-3xl bg-[#1A1C23] border border-white/5 hover:bg-[#22252E] hover:border-white/10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-6">
                                    <Icon size={32} weight="duotone" className="md:w-10 md:h-10" />
                                </div>
                                <h3 className="font-satoshi text-xl font-bold text-white mb-3">{reason.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm md:text-base">
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
