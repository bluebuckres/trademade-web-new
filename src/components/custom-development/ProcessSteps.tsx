"use client";

import { AsymmetricContainer } from "@/components/ui/AsymmetricContainer";

const steps = [
    { num: "01", title: "Submit Your Idea", desc: "Share your strategy via WhatsApp or email. Plain English is fine. Attach screenshots, TradingView charts, or a voice note. We ask clarifying questions to define the exact scope." },
    { num: "02", title: "Free Quote & Scoping", desc: "Within 24–48 hours, you receive a detailed project scope: deliverables, timeline, pricing tier, and tech stack. Approval required before any work starts." },
    { num: "03", title: "Build & Code", desc: "Our quant team codes your strategy in Python (Zerodha Kite SDK, AliceBlue, 5Paisa), AFL (AmiBroker), or Pine Script. We implement every rule exactly as scoped." },
    { num: "04", title: "Backtest & Optimise", desc: "We run a full backtest on historical data with realistic costs. You get a detailed performance report. If results don't meet benchmarks, we revise at no extra charge." },
    { num: "05", title: "Live / Paper Deployment", desc: "We deploy the algo to your broker account (you provide API keys — we never store them). Paper trading first if you prefer. We monitor the first 3 live days." },
    { num: "06", title: "Lifetime Support", desc: "Bugs fixed for free, forever. Strategy modifications and broker API changes handled within 48 hours. Priority WhatsApp support included." },
];

export function ProcessSteps() {
    return (
        <section className="py-24 relative bg-surface/20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <h2 className="font-satoshi text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                    How We Build Your Algorithm
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto">
                    A transparent, 6-step process from rough idea to fully automated execution.
                </p>
            </div>

            <AsymmetricContainer ratio="30/70" className="items-start max-w-6xl mx-auto">
                {/* Left Side: Sticky Visual / CTA */}
                <div className="sticky top-32 hidden md:block w-full">
                    <div className="aspect-[3/4] rounded-[2rem] bg-gradient-to-b from-accent/20 to-transparent border border-accent/20 p-8 flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/30 blur-[60px]" />

                        <h3 className="text-white font-satoshi font-bold text-2xl mb-4">Start Your Build</h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-8">
                            Typical starter projects are delivered in 3-7 days. What are you waiting for?
                        </p>

                        <div className="mt-auto space-y-3">
                            <button className="w-full py-4 rounded-xl bg-accent hover:bg-accent/90 text-white font-medium transition-colors">
                                Get a Free Quote
                            </button>
                            <button className="w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-colors">
                                WhatsApp Us
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Side: Step Flow */}
                <div className="flex flex-col gap-0 border-l border-white/10 ml-4 md:ml-0 pl-8 md:pl-16 relative py-4">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative pb-16 last:pb-0 group">
                            {/* Timeline dot */}
                            <div className="absolute -left-[32.5px] md:-left-[64px] top-1 w-4 h-4 rounded-full bg-surface border-2 border-slate-700 group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(30,107,255,0.5)] transition-all duration-300 flex items-center justify-center z-10 box-content -translate-x-[2px]" />

                            <div className="font-mono text-accent text-sm font-bold mb-2">Step {step.num}</div>
                            <h3 className="font-satoshi text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-base max-w-lg">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </AsymmetricContainer>
        </section>
    );
}
