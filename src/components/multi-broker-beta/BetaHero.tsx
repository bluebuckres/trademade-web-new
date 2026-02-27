"use client";

import { AsymmetricContainer } from "@/components/ui/AsymmetricContainer";
import { MagneticButton } from "@/components/ui/MagneticButton";
import Image from "next/image";

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
                        <MagneticButton href="#waitlist-form" className="bg-primary text-[#000000] hover:bg-primary-hover shadow-[0_0_20px_rgba(0,212,170,0.3)] w-full sm:w-auto px-8">
                            🚀 Join the Beta Waitlist
                        </MagneticButton>
                        <MagneticButton href="https://wa.me/917908158639" className="bg-white/5 border border-white/10 hover:bg-white/10 text-white w-full sm:w-auto px-6">
                            💬 Ask Us on WhatsApp
                        </MagneticButton>
                    </div>

                    <p className="mt-8 text-sm text-slate-500 font-medium font-mono">
                        * 31 out of 50 spots currently filled
                    </p>
                </div>

                {/* Six-broker motion hub animation / Right Graphic */}
                <div className="relative w-full aspect-square rounded-[3rem] bg-black/40 border border-white/10 shadow-[0_20px_60px_rgba(30,107,255,0.15)] overflow-hidden flex items-center justify-center p-8 group backdrop-blur-3xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,170,0.05)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle_at_center,rgba(30,107,255,0.1)_0%,transparent_70%)] transition-colors duration-1000" />

                    <div className="relative w-full h-full flex items-center justify-center max-w-[400px]">
                        {/* Outer orbital track */}
                        <div className="absolute w-[90%] h-[90%] rounded-full border border-white/5 animate-[spin_60s_linear_infinite]" />
                        {/* Middle orbital track */}
                        <div className="absolute w-[60%] h-[60%] rounded-full border border-white/10 animate-[spin_40s_linear_infinite_reverse]" />

                        {/* Orbiting Nodes (Brokers) */}
                        {[
                            { name: 'Zerodha', src: '/logos/zerodha.jpg', padding: 'p-1' },
                            { name: 'Upstox', src: '/logos/upstox.png', padding: 'p-2' },
                            { name: 'AngelOne', src: '/logos/aliceblue.png', padding: 'p-1' },
                            { name: '5Paisa', src: '/logos/5paisa.png', padding: 'p-1.5' },
                            { name: 'Fyers', src: '/logos/fyers.png', padding: 'p-2' },
                            { name: 'Shoonya', src: '/logos/shoonya.jpeg', padding: 'p-1' }
                        ].map((broker, i) => {
                            const deg = i * 60;
                            return (
                                <div
                                    key={i}
                                    className={`absolute w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex flex-col items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)] overflow-hidden ${broker.padding}`}
                                    style={{
                                        transform: `rotate(${deg}deg) translateX(${140}px) rotate(-${deg}deg)`,
                                    }}
                                >
                                    <div className="relative w-full h-full rounded-full overflow-hidden">
                                        <Image
                                            src={broker.src}
                                            alt={broker.name}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 48px, 64px"
                                        />
                                    </div>
                                </div>
                            );
                        })}

                        {/* Connecting glow lines (represented statically here for performance, ideally SVG lines) */}
                        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 30%, rgba(255,255,255,0.02) 60%)' }} />

                        {/* Central Hub */}
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-surface to-background border-2 border-primary shadow-[0_0_40px_rgba(0,212,170,0.4)] flex flex-col items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-500">
                            <div className="absolute inset-0 rounded-full bg-primary/20 blur-[20px] animate-pulse" />
                            <span className="font-satoshi font-black text-white text-lg leading-tight text-center relative z-10">
                                TradeMade<br />Core
                            </span>
                        </div>

                        {/* Floating Notification Mockup */}
                        <div className="absolute bottom-8 right-0 md:-right-8 bg-surface/90 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-2xl flex items-start gap-4 transform translate-y-4 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-500 z-20 w-64">
                            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex flex-shrink-0 items-center justify-center text-blue-400">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" /></svg>
                            </div>
                            <div>
                                <p className="text-white text-xs font-bold mb-1">AI Risk Alert</p>
                                <p className="text-slate-400 text-[10px] leading-relaxed">RBI announcement detected. Pausing execution across 4 accounts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </AsymmetricContainer>
        </section>
    );
}
