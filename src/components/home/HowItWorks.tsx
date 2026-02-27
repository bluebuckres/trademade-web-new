"use client";

import { AsymmetricContainer } from "@/components/ui/AsymmetricContainer";

const steps = [
    { num: "01", title: "Define Your Strategy", desc: "Tell us your entry/exit rules — using plain English, TradingView alerts, or AFL/Python code. Our team helps translate any format." },
    { num: "02", title: "Select Universe", desc: "Choose instruments (NSE/BSE equities, F&O, indices), timeframe (1-min to daily), and date range (up to 10 years of tick data)." },
    { num: "03", title: "Configure Costs", desc: "Set brokerage, STT, slippage (fixed, %, or impact model), lot sizes, and capital. What you test is what you trade." },
    { num: "04", title: "Run & Review", desc: "Get results in minutes. Full trade log, equity curve, rolling Sharpe, max drawdown, win rate, and month-by-month breakdown." },
    { num: "05", title: "Optimise & Export", desc: "Walk-forward optimisation, parameter sensitivity heatmaps, and monte carlo. Export to PDF or share with your team." },
];

export function HowItWorks() {
    return (
        <section className="py-24 relative bg-surface/10">
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <h2 className="font-satoshi text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                    How Our Backtesting Works
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto">
                    5 simple steps from raw idea to institutional-grade execution report.
                </p>
            </div>

            <AsymmetricContainer ratio="40/60" className="items-center">
                {/* Left Side: Mockups */}
                <div className="w-full relative min-h-[400px] flex items-center justify-center">
                    <div className="absolute w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
                    <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[2rem] bg-surface border border-white/5 shadow-2xl p-6 overflow-hidden flex flex-col gap-4">
                        {/* Fake Mockup UI blocks */}
                        <div className="w-full h-12 rounded-xl bg-white/5 border border-white/10 flex items-center px-4 gap-3">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="flex-1 flex gap-4">
                            <div className="w-1/3 h-full rounded-xl bg-white/5 border border-white/10 p-4 space-y-4">
                                <div className="w-full h-2 bg-white/10 rounded-full" />
                                <div className="w-2/3 h-2 bg-white/10 rounded-full" />
                                <div className="w-full h-8 bg-primary/20 rounded-md mt-6" />
                                <div className="w-full h-2 bg-white/10 rounded-full" />
                            </div>
                            <div className="w-2/3 h-full rounded-xl bg-gradient-to-br from-surface to-background border border-white/10 p-4 flex flex-col gap-4">
                                <div className="w-full flex-1 rounded-xl bg-primary/10 border border-primary/20 relative overflow-hidden">
                                    <svg className="absolute inset-0 w-full h-full text-primary" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <path d="M0,100 L0,80 Q25,90 50,60 T100,20 L100,100 Z" fill="currentColor" opacity="0.2" />
                                        <path d="M0,80 Q25,90 50,60 T100,20" fill="none" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </div>
                                <div className="w-full h-1/3 rounded-xl bg-white/5 border border-white/10" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Step Flow */}
                <div className="flex flex-col gap-0 border-l border-white/5 ml-4 md:ml-0 pl-8 md:pl-16 relative py-10">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative pb-12 last:pb-0 group">
                            {/* Timeline dot */}
                            <div className="absolute -left-[32px] md:-left-[64px] top-1 w-4 h-4 rounded-full bg-surface border-2 border-slate-700 group-hover:border-primary transition-colors flex items-center justify-center z-10">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="font-mono text-primary text-sm font-bold mb-2">Step {step.num}</div>
                            <h3 className="font-satoshi text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-base max-w-md">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </AsymmetricContainer>
        </section>
    );
}
