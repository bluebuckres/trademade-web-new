"use client";

import { AsymmetricContainer } from "@/components/ui/AsymmetricContainer";

const steps = [
    { num: "01", title: "Connect Your Broker Accounts", desc: "Securely link your broker accounts via their official APIs (OAuth / API key). We support Zerodha, Angel One, Upstox, 5Paisa, Alice Blue. Linking takes under 5 minutes per broker." },
    { num: "02", title: "Define Your Master Strategy", desc: "Upload your existing TradeMade algo, or have our team build one. This becomes your master strategy. All connected accounts will mirror this strategy's signals." },
    { num: "03", title: "Configure Per-Account Rules", desc: "Set position sizing (₹ or % of capital), daily loss limit, allowed instruments, and risk level per account. Accounts can be set to 'full mirror' or 'filtered mirror'." },
    { num: "04", title: "Activate AI News Layer (Optional)", desc: "Choose which news categories trigger risk responses. Set sensitivity (conservative / moderate / aggressive). The AI layer activates automatically before high-impact events." },
    { num: "05", title: "Go Live", desc: "Activate the system. Monitor via the unified dashboard or Telegram. The system trades, manages risk, and sends alerts — entirely automatically." },
];

export function BetaSteps() {
    return (
        <section className="py-24 relative bg-surface/10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <h2 className="font-satoshi text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                    How AI Multi-Broker Alignment Works
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto">
                    Five steps from manual multi-platform trading to fully automated mirror execution.
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-6">
                <div className="flex flex-col gap-0 border-l border-white/10 ml-4 md:ml-0 pl-10 md:pl-16 relative py-4">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative pb-16 last:pb-0 group">
                            {/* Timeline dot */}
                            <div className="absolute -left-[48.5px] md:-left-[72px] top-1 w-5 h-5 rounded-full bg-surface border-2 border-slate-700 group-hover:border-primary group-hover:shadow-[0_0_15px_rgba(0,212,170,0.5)] transition-all duration-300 flex items-center justify-center z-10 box-content">
                                <div className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="font-mono text-primary text-sm font-bold mb-2 tracking-widest uppercase">Step {step.num}</div>
                            <h3 className="font-satoshi text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-lg max-w-2xl">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
