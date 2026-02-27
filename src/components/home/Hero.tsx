"use client";

import { AsymmetricContainer } from "@/components/ui/AsymmetricContainer";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ConsoleAnimation } from "@/components/ui/ConsoleAnimation";
import { WhatsappLogo } from "@phosphor-icons/react";

export function Hero() {
    return (
        <section className="relative w-full min-h-[calc(100dvh-8rem)] flex items-start lg:items-center pt-28 lg:pt-32 pb-20 overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-primary/20 blur-[150px] rounded-full pointer-events-none -z-10 mix-blend-screen" />

            <AsymmetricContainer ratio="50/50">
                <div className="flex flex-col justify-center max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary w-fit mb-8 shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        SEBI RA-Compatible Platform
                    </div>

                    <h1 className="font-satoshi text-5xl md:text-7xl font-black tracking-tighter leading-[1.05] text-white mb-6">
                        Backtest.
                        <br />
                        <span className="text-slate-500">Build.</span>
                        <br />
                        <span className="text-primary text-glow">Deploy.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-lg">
                        Stop guessing. Start testing. India's most precise backtesting engine meets professional custom algorithm development. From raw idea to live deployment.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <MagneticButton
                            id="open-popup-button"
                            className="bg-primary hover:bg-primary-hover text-[#000000] shadow-[0_0_20px_rgba(0,212,170,0.3)] border-none cursor-pointer"
                        >
                            ▶ Book a Quick Call
                        </MagneticButton>
                        <MagneticButton href="https://wa.me/917908158639" className="bg-transparent border border-white/10 hover:bg-white/5 text-white flex gap-2 items-center px-6">
                            <WhatsappLogo size={20} weight="fill" className="text-[#25D366]" />
                            WhatsApp Us
                        </MagneticButton>
                    </div>

                    <div className="mt-10 md:mt-12 flex flex-col items-start gap-4 sm:gap-6 text-sm font-medium border-t border-white/5 pt-8">
                        <div className="flex -space-x-3 shrink-0">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden relative shadow-sm">
                                    <img
                                        src={`/avatars/trader_${i}.png`}
                                        alt={`Trader ${i}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-400">
                            <span><strong className="text-white font-bold font-mono text-base">2,100+</strong> Traders</span>
                            <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:block"></span>
                            <span><strong className="text-white font-bold font-mono text-base">50+</strong> Institutions</span>
                            <span className="w-1 h-1 rounded-full bg-white/20 hidden xl:block"></span>
                            <span><strong className="text-white font-bold font-mono text-base">500+</strong> Algos</span>
                            <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:block"></span>
                            <span><strong className="text-white font-bold font-mono text-base">20+</strong> Broker APIs</span>
                        </div>
                    </div>
                </div>

                {/* Right side Terminal Visual */}
                <div className="relative w-full h-[420px] md:aspect-auto md:h-[500px] mt-10 md:mt-0 z-10 perspective-[1000px] max-w-[400px] lg:max-w-none mx-auto md:mx-0">
                    <div className="w-full h-full rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out shadow-2xl">
                        <ConsoleAnimation />
                    </div>
                </div>
            </AsymmetricContainer>
        </section>
    );
}
