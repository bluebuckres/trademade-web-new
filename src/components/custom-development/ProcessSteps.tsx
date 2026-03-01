"use client";

import { AsymmetricContainer } from "@/components/ui/AsymmetricContainer";
import { Cpu, Lightbulb, Receipt, Code, ChartLineUp, RocketLaunch, Headset } from "@phosphor-icons/react";

const steps = [
    { num: "01", title: "Submit Your Idea", desc: "Share your strategy via WhatsApp or email. Plain English is fine. We ask clarifying questions to define the exact scope.", icon: Lightbulb },
    { num: "02", title: "Free Quote & Scoping", desc: "Within 24–48 hours, you receive a detailed project scope: deliverables, timeline, pricing tier, and tech stack.", icon: Receipt },
    { num: "03", title: "Build & Code", desc: "Our quant team codes your strategy in Python, C++, or Rust depending on latency requirements.", icon: Code },
    { num: "04", title: "Backtest & Optimise", desc: "We run a full backtest on historical data with realistic costs and provide a detailed performance report.", icon: ChartLineUp },
    { num: "05", title: "Live / Paper Deployment", desc: "We deploy the algo to your broker account (you provide API keys). Paper trading first if you prefer.", icon: RocketLaunch },
    { num: "06", title: "Lifetime Support", desc: "Bugs fixed for free, forever. Strategy modifications and broker API changes handled within 48 hours.", icon: Headset },
];

export function ProcessSteps() {
    return (
        <section className="py-24 relative bg-[#040812] border-t border-white/5 overflow-hidden">
            {/* Background glowing effects */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-sky-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="max-w-7xl mx-auto px-6 mb-24 text-center relative z-10">
                <h2 className="font-satoshi text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                    How We Build Your Algorithm
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto">
                    A transparent, 6-step process from rough idea to fully automated execution.
                </p>
            </div>

            <AsymmetricContainer ratio="40/60" className="items-start max-w-6xl mx-auto relative z-10 px-6">
                {/* Left Side: Sticky Tech Visual */}
                <div className="sticky top-40 hidden md:flex w-full h-[500px] items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center">

                        {/* Central glowing hub */}
                        <div className="relative z-20 w-44 h-44 bg-[#0A1224] border-2 border-sky-500/40 rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(14,165,233,0.25)] rotate-45 group hover:shadow-[0_0_80px_rgba(14,165,233,0.4)] hover:border-sky-400/60 transition-all duration-700">
                            <div className="absolute inset-2 border border-sky-400/20 rounded-2xl" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.2)_0%,transparent_70%)] rounded-3xl" />
                            <Cpu size={72} weight="duotone" className="text-sky-400 -rotate-45 drop-shadow-[0_0_20px_rgba(14,165,233,0.6)] group-hover:scale-110 transition-transform duration-700" />
                        </div>

                        {/* Node lines pointing OUTWARDS */}
                        {/* Top Node */}
                        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center">
                            <div className="w-12 h-12 rounded-xl border border-sky-500/30 bg-[#0A1224] flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.1)] z-10">
                                <Lightbulb size={24} className="text-sky-400/80" weight="duotone" />
                            </div>
                            <div className="w-0.5 h-16 bg-gradient-to-b from-sky-500/40 to-transparent" />
                        </div>

                        {/* Bottom Node */}
                        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center justify-end">
                            <div className="w-0.5 h-16 bg-gradient-to-t from-sky-500/40 to-transparent" />
                            <div className="w-12 h-12 rounded-xl border border-sky-500/30 bg-[#0A1224] flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.1)] z-10">
                                <Headset size={24} className="text-sky-400/80" weight="duotone" />
                            </div>
                        </div>

                        {/* Left Node */}
                        <div className="absolute left-[5%] top-1/2 -translate-y-1/2 flex items-center">
                            <div className="w-12 h-12 rounded-xl border border-sky-500/30 bg-[#0A1224] flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.1)] z-10">
                                <Code size={24} className="text-sky-400/80" weight="duotone" />
                            </div>
                            <div className="w-16 h-0.5 bg-gradient-to-r from-sky-500/40 to-transparent" />
                        </div>

                        {/* Right Top Node */}
                        <div className="absolute right-[10%] top-[25%] flex items-center">
                            <div className="w-16 h-0.5 bg-gradient-to-l from-sky-500/40 to-transparent" />
                            <div className="w-12 h-12 rounded-xl border border-sky-500/30 bg-[#0A1224] flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.1)] z-10">
                                <Receipt size={24} className="text-sky-400/80" weight="duotone" />
                            </div>
                        </div>

                        {/* Right Bottom Node */}
                        <div className="absolute right-[10%] bottom-[25%] flex items-center">
                            <div className="w-16 h-0.5 bg-gradient-to-l from-sky-500/40 to-transparent" />
                            <div className="w-12 h-12 rounded-xl border border-sky-500/30 bg-[#0A1224] flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.1)] z-10">
                                <RocketLaunch size={24} className="text-sky-400/80" weight="duotone" />
                            </div>
                        </div>

                        {/* Circuit board background pattern */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#040812_70%),linear-gradient(rgba(14,165,233,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.04)_1px,transparent_1px)] bg-[size:100%_100%,32px_32px,32px_32px]" />

                        {/* Abstract right connection lines heading toward steps */}
                        <div className="absolute -right-12 top-1/3 w-32 h-[1px] bg-gradient-to-r from-sky-500/30 to-transparent" />
                        <div className="absolute -right-8 top-2/3 w-24 h-[1px] bg-gradient-to-r from-sky-500/20 to-transparent" />
                    </div>
                </div>

                {/* Right Side: Step Flow Timeline */}
                <div className="w-full flex flex-col gap-0 border-l-2 border-sky-900/40 ml-4 md:ml-12 pl-8 md:pl-16 relative py-4">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div key={idx} className="relative pb-[4.5rem] last:pb-0 group">
                                {/* Glowing Timeline dot */}
                                <div className="absolute -left-[33px] md:-left-[65px] top-1.5 w-4 h-4 rounded-full bg-[#040812] border-2 border-sky-500/50 group-hover:border-sky-400 group-hover:bg-sky-500/20 shadow-[0_0_10px_rgba(14,165,233,0.2)] group-hover:shadow-[0_0_20px_rgba(14,165,233,0.8)] transition-all duration-300 flex items-center justify-center z-10 box-content -translate-x-[2px]">
                                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                {/* Horizontal connector line on hover */}
                                <div className="absolute -left-[31px] md:-left-[63px] top-[13px] w-4 md:w-8 h-[2px] bg-sky-500/20 group-hover:bg-sky-400/60 transition-colors duration-300" />

                                <div className="flex items-center gap-3 mb-3">
                                    <div className="hidden sm:flex w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                                        <Icon size={16} weight="duotone" />
                                    </div>
                                    <div className="font-mono text-sky-400/80 text-sm font-bold tracking-wider">STEP {step.num}</div>
                                </div>
                                <h3 className="font-satoshi text-2xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors duration-300 drop-shadow-md">
                                    {step.title}
                                </h3>
                                <p className="text-slate-400/90 leading-relaxed text-base md:text-lg max-w-lg">
                                    {step.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </AsymmetricContainer>
        </section>
    );
}
