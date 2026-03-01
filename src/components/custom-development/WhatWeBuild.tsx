"use client";

import { motion } from "framer-motion";
import { ChartLineUp, Target, TrendUp, BracketsCurly, Crosshair, Brain, Lightning, ArrowsLeftRight } from "@phosphor-icons/react";

/* ── data ── */
const markets = [
    { icon: ChartLineUp, text: "Equity (NSE/BSE)", sub: "Intraday, Positional, Delivery" },
    { icon: Crosshair, text: "F&O", sub: "Single leg, multi-leg, spreads" },
    { icon: Lightning, text: "Commodity (MCX)", sub: "Crude, Gold, Natural Gas, Metals" },
    { icon: ArrowsLeftRight, text: "Currency (CDS)", sub: "NSE / BSE" },
    { icon: Target, text: "Indices", sub: "Nifty, BankNifty, FinNifty, MidcapNifty" },
];

const strategyGroups = [
    {
        category: "Options-Focused",
        color: "purple",
        items: ["Iron Condor / Iron Fly / Straddle / Strangle", "VIX-triggered & IV Rank strategies", "Delta-Neutral & Gamma Scalping"],
    },
    {
        category: "Price & Trend Based",
        color: "blue",
        items: ["Support/Resistance & Candlestick patterns", "EMA crossovers, Supertrend, Donchian", "Swing & Day Trading", "Bollinger Bands, RSI extremes, Z-score"],
    },
    {
        category: "Advanced / Institutional",
        color: "rose",
        items: ["Factor models & Statistical Arbitrage", "Pair Trading / Spread Trading", "High-Frequency & Low-Latency Engines", "AI/NLP News Sentiment Triggers"],
    },
];

const techStack = [
    { label: "Core Logic", value: "Python, C++, Rust" },
    { label: "Broker APIs", value: "Zerodha, Angel, Upstox, 5Paisa, AliceBlue, Fyers +" },
    { label: "Signal Inputs", value: "TradingView Webhooks, AmiBroker AFL, REST APIs" },
    { label: "Messaging", value: "Telegram Bot API, WhatsApp API, Email" },
    { label: "AI & Infra", value: "OpenAI GPT, MCP, AWS, GCP, Dedicated VPS" },
];

/* ── animation variants ── */
const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};
const item = {
    hidden: { opacity: 0, y: 24, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 120, damping: 22 } },
};

/* ── color helpers ── */
const categoryColor: Record<string, { bg: string; border: string; text: string; dot: string }> = {
    purple: { bg: "bg-purple-500/8", border: "border-purple-500/20", text: "text-purple-400", dot: "bg-purple-400" },
    blue: { bg: "bg-sky-500/8", border: "border-sky-500/20", text: "text-sky-400", dot: "bg-sky-400" },
    rose: { bg: "bg-rose-500/8", border: "border-rose-500/20", text: "text-rose-400", dot: "bg-rose-400" },
};

/* ── component ── */
export function WhatWeBuild() {
    return (
        <section className="py-24 relative bg-surface/10 border-t border-white/5">
            {/* heading */}
            <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
                <h2 className="font-satoshi text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                    What We Build
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    Every type of algo, every market, every complexity.
                </p>
            </div>

            {/* bento grid */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto px-6"
            >
                {/* ── Card 1: Markets ── */}
                <motion.div variants={item} className="group">
                    <div className="h-full p-7 rounded-2xl bg-[#16181F] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-0.5">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0">
                                <ChartLineUp size={20} weight="duotone" />
                            </div>
                            <h3 className="font-satoshi text-lg font-bold text-white">Markets We Cover</h3>
                        </div>
                        <div className="space-y-3.5">
                            {markets.map((m, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <m.icon size={16} weight="bold" className="text-accent/70 shrink-0 mt-0.5" />
                                    <div>
                                        <span className="text-[13px] font-medium text-slate-200">{m.text}</span>
                                        <span className="text-[13px] text-slate-500 ml-1.5">{m.sub}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* ── Card 2: Strategy Types (spans 2 cols on lg) ── */}
                <motion.div variants={item} className="group lg:col-span-2">
                    <div className="h-full p-7 rounded-2xl bg-[#16181F] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-0.5">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                                <TrendUp size={20} weight="duotone" />
                            </div>
                            <h3 className="font-satoshi text-lg font-bold text-white">Strategy Types</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            {strategyGroups.map((group, idx) => {
                                const c = categoryColor[group.color];
                                return (
                                    <div key={idx} className={`rounded-xl ${c.bg} border ${c.border} p-4`}>
                                        <h4 className={`text-[11px] font-mono uppercase tracking-wider ${c.text} mb-3 font-semibold`}>
                                            {group.category}
                                        </h4>
                                        <ul className="space-y-2">
                                            {group.items.map((s, si) => (
                                                <li key={si} className="flex gap-2 items-start text-[13px] text-slate-300 leading-snug">
                                                    <div className={`w-1 h-1 rounded-full ${c.dot} shrink-0 mt-[7px]`} />
                                                    <span>{s}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* ── Card 3: Tech Stack (spans full width) ── */}
                <motion.div variants={item} className="group md:col-span-2 lg:col-span-3">
                    <div className="h-full p-7 rounded-2xl bg-[#16181F] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-0.5">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                                <BracketsCurly size={20} weight="duotone" />
                            </div>
                            <h3 className="font-satoshi text-lg font-bold text-white">Tech Stack We Use</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                            {techStack.map((tech, idx) => (
                                <div key={idx} className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-4 hover:bg-white/[0.05] transition-colors duration-200">
                                    <span className="text-[10px] font-mono text-accent uppercase tracking-widest block mb-1.5 font-semibold">{tech.label}</span>
                                    <span className="text-[13px] text-slate-300 leading-snug font-medium">{tech.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
