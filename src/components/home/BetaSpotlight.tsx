"use client";

import { useState, useEffect } from "react";
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";

const features = [
    "Real-time order mirroring across 20+ brokers",
    "Per-account position sizing and risk caps",
    "AI news sentiment scoring (integrated with custom NLP)",
    "Auto-pause on volatility spikes or news triggers",
    "Telegram + email alerts per account",
    "Live P&L dashboard across all accounts in one view",
    "Full ATS (Automated Trading System) with override"
];

const brokerNodes = [
    { name: "Zerodha", logo: "/logos/zerodha6662.jpg" },
    { name: "Angel One", logo: "/logos/groww_logo-freelogovectors.net_.png" }, // Fallback to Groww image if Angel One is missing
    { name: "Upstox", logo: "/logos/upstox-logo-png_seeklogo-435648.png" },
    { name: "5Paisa", logo: "/logos/5paisa.png" },
    { name: "Alice Blue", logo: "/logos/aliceblue.png" },
    { name: "Fyers", logo: "/logos/fyers.png" }
];

export function BetaSpotlight() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const t = setInterval(() => {
            setActive(x => (x + 1) % brokerNodes.length);
        }, 1400);
        return () => clearInterval(t);
    }, []);

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <LiquidGlassCard className="p-8 md:p-16 border-primary/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_100px_-20px_rgba(0,212,170,0.2)]">

                    <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center relative z-10">
                        {/* Left Copy */}
                        <div className="order-2 md:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-red-500/40 bg-red-500/10">
                                <span className="w-2 h-2 rounded-full bg-red-400 animate-[pulse_1.5s_ease-in-out_infinite]" />
                                <span className="text-red-400 text-xs font-semibold uppercase tracking-wider">Beta — Limited Access</span>
                            </div>

                            <h2 className="font-satoshi text-3xl md:text-5xl font-extrabold tracking-tighter text-white leading-[1.1] mb-6">
                                One strategy.<br />
                                <span className="text-primary">Every broker.</span><br />
                                Real-time.
                            </h2>

                            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                                Deploy your algo across 20+ Indian brokers simultaneously. Our AI news engine auto-adjusts your positions during RBI policy decisions, earnings calls, and global events — before they move the market.
                            </p>

                            <ul className="list-none p-0 m-0 mb-10 flex flex-col gap-4">
                                {features.map(item => (
                                    <li key={item} className="flex items-start gap-3 text-slate-300 text-sm md:text-base">
                                        <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">
                                            ✓
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap items-center gap-6">
                                <MagneticButton href="/multi-broker-beta" className="bg-primary hover:bg-primary-hover text-[#000000] shadow-[0_0_20px_rgba(0,212,170,0.3)] border-none rounded-xl py-3.5 px-6 font-bold text-sm">
                                    Join Beta Waitlist →
                                </MagneticButton>
                                <div className="text-slate-400 text-sm flex items-center font-medium">
                                    <span className="text-white font-bold mr-1 block">31 of 50</span> seats filled
                                </div>
                            </div>
                        </div>

                        {/* Right — Animated Broker Web */}
                        <div className="order-1 md:order-2 relative w-full aspect-square flex items-center justify-center group">

                            {/* Orbital background glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,170,0.15)_0%,transparent_60%)] group-hover:bg-[radial-gradient(circle_at_center,rgba(0,212,170,0.25)_0%,transparent_60%)] transition-colors duration-1000 rounded-full" />

                            <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center scale-75 sm:scale-90 md:scale-100">
                                {/* SVG Connecting Lines - Behind the nodes */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 400 400">
                                    {brokerNodes.map((b, i) => {
                                        const angle = (i / brokerNodes.length) * 2 * Math.PI - Math.PI / 2;
                                        const r = 160; // Spread radius
                                        const x = 200 + Math.cos(angle) * r;
                                        const y = 200 + Math.sin(angle) * r;
                                        const isActive = active === i;
                                        return (
                                            <line
                                                key={b.name}
                                                x1="200"
                                                y1="200"
                                                x2={x}
                                                y2={y}
                                                stroke={isActive ? "#00d4aa" : "rgba(255,255,255,0.05)"}
                                                strokeWidth={isActive ? "3" : "1"}
                                                strokeDasharray={isActive ? "6 4" : "none"}
                                                className="transition-all duration-500 ease-out"
                                            />
                                        );
                                    })}
                                </svg>

                                {/* Central Hub */}
                                <div className="absolute z-20 bg-surface border-2 border-primary rounded-2xl px-5 py-4 text-center shadow-[0_0_50px_rgba(0,212,170,0.4)] min-w-[160px]">
                                    <div className="absolute inset-0 bg-primary/10 animate-pulse rounded-2xl" />
                                    <div className="relative z-10">
                                        <div className="text-primary text-[0.65rem] font-bold tracking-widest uppercase mb-1">
                                            Strategy Hub
                                        </div>
                                        <div className="font-mono text-white text-base font-bold tracking-tight">
                                            TradeMade Core
                                        </div>
                                    </div>
                                </div>

                                {/* Broker Nodes */}
                                {brokerNodes.map((b, i) => {
                                    const angle = (i / brokerNodes.length) * 2 * Math.PI - Math.PI / 2;
                                    const r = 160;
                                    const x = Math.cos(angle) * r;
                                    const y = Math.sin(angle) * r;
                                    const isActive = active === i;

                                    return (
                                        <div
                                            key={b.name}
                                            className={`absolute z-10 flex items-center justify-center rounded-[1.25rem] p-2.5 transition-all duration-500 cubic-bezier(0.16,1,0.3,1) overflow-hidden
                                                ${isActive
                                                    ? "bg-white border-2 border-primary scale-[1.2] shadow-[0_0_30px_rgba(0,212,170,0.6)] z-30"
                                                    : "bg-surface/80 border border-white/10 scale-100 opacity-50 grayscale hover:grayscale-0 hover:opacity-100"
                                                }`}
                                            style={{
                                                left: `calc(50% + ${x}px - 36px)`,
                                                top: `calc(50% + ${y}px - 36px)`,
                                                width: "72px",
                                                height: "72px"
                                            }}
                                        >
                                            <img
                                                src={b.logo}
                                                alt={b.name}
                                                className={`w-full h-full object-contain ${isActive ? '' : 'mix-blend-luminosity'}`}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </LiquidGlassCard>
            </div>
        </section>
    );
}
