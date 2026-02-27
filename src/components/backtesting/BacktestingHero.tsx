"use client";

import { AsymmetricContainer } from "@/components/ui/AsymmetricContainer";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { WhatsappLogo } from "@phosphor-icons/react";

export function BacktestingHero() {
    return (
        <section className="relative w-full min-h-[85dvh] flex items-start lg:items-center pb-20 overflow-hidden pt-28 lg:pt-32">
            {/* Background ambient glow centered for a dashboard aesthetic */}
            <div className="absolute top-0 inset-x-0 w-full h-[50dvh] bg-gradient-to-b from-primary/10 to-transparent blur-3xl pointer-events-none -z-10 mix-blend-screen" />

            <div className="w-full max-w-7xl mx-auto px-6 text-center z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs font-bold text-slate-300 bg-surface/50 backdrop-blur-md mb-10 mx-auto shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Options · Futures · Equities · Indices
                </div>

                <h1 className="font-satoshi text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1] text-white mx-auto max-w-5xl mb-8">
                    India's Most Realistic <br className="hidden md:block" />
                    <span className="text-primary text-glow italic pr-4">Backtesting Engine.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl mx-auto">
                    Test your strategy on 10+ years of tick data — with slippage, brokerage, and real-world costs built in. No surprises when you go live.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <MagneticButton href="/contact" className="bg-primary hover:bg-primary-hover text-[#000000] shadow-[0_0_20px_rgba(0,212,170,0.3)] border-none w-full sm:w-auto px-10 py-4 text-base">
                        ▶ Start Your Free Backtest
                    </MagneticButton>
                    <MagneticButton href="https://wa.me/917908158639" className="bg-white/5 border border-white/10 hover:bg-white/10 text-white w-full sm:w-auto px-10 py-4 text-base flex gap-2 items-center justify-center">
                        <WhatsappLogo size={20} weight="fill" className="text-[#25D366]" />
                        WhatsApp Us
                    </MagneticButton>
                </div>

                <p className="text-slate-500 font-medium text-sm mt-6 mb-16">Free tier available. No credit card required.</p>

                {/* The "Dark Terminal Interface" Mockup floating */}
                <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[2rem] bg-black border border-white/10 shadow-[0_30px_100px_rgba(0,212,170,0.15)] overflow-hidden mt-12 group">
                    <div className="absolute inset-0 bg-surface/30 backdrop-blur-3xl" />

                    {/* Mac toolbar */}
                    <div className="absolute top-0 inset-x-0 h-12 bg-white/5 border-b border-white/5 flex items-center px-6">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="mx-auto text-xs font-mono text-slate-500">trademade/engine/run_backtest.py</div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="absolute inset-x-0 bottom-0 top-12 p-8 grid grid-cols-3 gap-6">
                        <div className="col-span-2 rounded-xl bg-white/5 border border-white/5 relative overflow-hidden flex items-end">
                            {/* Fake Equity Curve - using SVG to bypass Unsplash */}
                            <svg className="w-full h-[80%] text-primary" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0,80 Q10,75 20,85 T40,60 T60,50 T80,30 T100,20 L100,100 L0,100 Z" fill="currentColor" opacity="0.1" />
                                <path d="M0,80 Q10,75 20,85 T40,60 T60,50 T80,30 T100,20" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="1000" strokeDashoffset="0" className="animate-[dash_3s_ease-out_forwards]" />
                            </svg>
                            <div className="absolute top-6 left-6 flex flex-col gap-1">
                                <span className="text-slate-500 text-xs font-mono font-bold uppercase tracking-wider">Net P&L</span>
                                <span className="text-3xl font-geist-mono font-bold text-white">+₹2,48,930</span>
                            </div>
                        </div>

                        <div className="col-span-1 flex flex-col gap-6">
                            {/* Key metrics blocks */}
                            <div className="flex-1 rounded-xl bg-white/5 border border-white/5 p-6 flex flex-col justify-center">
                                <span className="text-slate-500 text-xs font-mono font-bold uppercase tracking-wider mb-2">Sharpe Ratio</span>
                                <span className="text-3xl font-geist-mono font-bold text-primary">1.84</span>
                            </div>
                            <div className="flex-1 rounded-xl bg-white/5 border border-white/5 p-6 flex flex-col justify-center">
                                <span className="text-slate-500 text-xs font-mono font-bold uppercase tracking-wider mb-2">Max Drawdown</span>
                                <span className="text-3xl font-geist-mono font-bold text-red-400">-4.2%</span>
                            </div>
                            <div className="flex-1 rounded-xl bg-white/5 border border-white/5 p-6 flex flex-col justify-center">
                                <span className="text-slate-500 text-xs font-mono font-bold uppercase tracking-wider mb-2">Win Rate</span>
                                <span className="text-3xl font-geist-mono font-bold text-white">68.5%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
