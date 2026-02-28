"use client";

import { AsymmetricContainer } from "@/components/ui/AsymmetricContainer";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Image from "next/image";
import { RocketLaunch, WhatsappLogo } from "@phosphor-icons/react";

export function BetaHero() {
    return (
        <section className="relative w-full min-h-[90dvh] flex items-start lg:items-center pb-20 overflow-hidden pt-28 lg:pt-32 bg-surface/20">
            {/* Background radial glow */}
            <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-accent/10 blur-[150px] rounded-full pointer-events-none -z-10 mix-blend-screen" />
            <div className="absolute top-1/2 right-1/4 w-[40vw] h-[40vw] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen" />

            <AsymmetricContainer ratio="50/50" className="items-center z-10">
                <div className="flex flex-col justify-center max-w-2xl pt-10 md:pt-0">
                    <div className="inline-flex items-center gap-2 px-3 py-1 pb-[5px] rounded-full border border-yellow-500/30 bg-yellow-500/10 text-xs font-bold text-yellow-500 w-fit mb-8 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                        Invite-Only Beta
                    </div>

                    <h1 className="font-satoshi text-5xl md:text-7xl font-black tracking-tighter leading-[1.05] text-white mb-6">
                        One Strategy. <br />
                        Multiple Brokers. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">AI-Powered.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-lg">
                        Deploy your algo across Zerodha, Angel One, Upstox, and more — simultaneously. Let AI news sentiment do the risk management.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <MagneticButton href="#waitlist-form" className="bg-primary text-[#000000] hover:bg-primary-hover shadow-[0_0_20px_rgba(0,212,170,0.3)] w-full sm:w-auto px-8 flex items-center gap-2">
                            <RocketLaunch weight="fill" size={20} />
                            Join the Beta Waitlist
                        </MagneticButton>
                        <MagneticButton href="https://wa.me/917908158639" className="bg-white/5 border border-white/10 hover:bg-white/10 text-white w-full sm:w-auto px-6 flex items-center gap-2">
                            <WhatsappLogo weight="fill" size={20} className="text-[#25D366]" />
                            Ask Us on WhatsApp
                        </MagneticButton>
                    </div>

                    <p className="mt-8 text-sm text-slate-500 font-medium font-mono">
                        * 31 out of 50 spots currently filled
                    </p>
                </div>

                {/* Right Graphic: Dashboard Mockup */}
                <div className="relative w-full aspect-square md:aspect-[4/3] rounded-[2rem] border border-white/10 shadow-[0_20px_60px_rgba(30,107,255,0.15)] overflow-hidden flex items-center justify-center p-2 bg-black/40 backdrop-blur-3xl group">
                    <Image
                        src="/images/dashboard.png"
                        alt="AI-Powered Multi-Broker Trading Dashboard Interface with Sentiment Analysis"
                        fill
                        className="object-cover rounded-xl"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </AsymmetricContainer>
        </section>
    );
}
