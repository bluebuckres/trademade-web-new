"use client";

import { AsymmetricContainer } from "@/components/ui/AsymmetricContainer";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TerminalTypewriter } from "@/components/ui/TerminalTypewriter";
import { WhatsappLogo, ClipboardText } from "@phosphor-icons/react";

export function CustomDevHero() {
    return (
        <section className="relative w-full min-h-[85dvh] flex items-start lg:items-center pb-20 overflow-hidden pt-28 lg:pt-32">
            <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-accent/20 blur-[150px] rounded-full pointer-events-none -z-10 mix-blend-screen" />

            <AsymmetricContainer ratio="40/60">
                <div className="flex flex-col justify-center max-w-2xl pt-10 md:pt-0">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-accent w-fit mb-8 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        Zero-Code to Full Python
                    </div>

                    <h1 className="font-satoshi text-5xl md:text-7xl font-black tracking-tighter leading-[1.05] text-white mb-6">
                        Your Strategy, <br />
                        <span className="text-accent text-glow">Coded & Deployed</span><br />
                        by Experts.
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-lg">
                        From a rough idea on WhatsApp to a live algorithm on your Zerodha, Upstox, or Angel One — in as little as 5 days. Professional quant developers. Lifetime support.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <MagneticButton href="/contact" className="bg-accent hover:bg-accent/80 text-white shadow-[0_0_20px_rgba(30,107,255,0.3)] border-none flex items-center gap-2">
                            <WhatsappLogo size={20} weight="fill" />
                            Describe Your Idea
                        </MagneticButton>
                        <MagneticButton href="/contact" className="bg-transparent border border-white/10 hover:bg-white/5 text-white flex items-center gap-2">
                            <ClipboardText size={20} weight="fill" />
                            Request Free Quote
                        </MagneticButton>
                    </div>

                    <div className="mt-12 flex items-center gap-2 text-sm text-slate-500 font-medium">
                        ✓ 500+ algos built <span className="mx-2">·</span> ✓ 20+ broker integrations <span className="mx-2">·</span> ✓ 100% confidential
                    </div>
                </div>

                {/* Right side Visual - Whiteboard to IDE transition */}
                <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border border-white/10 bg-surface/30">
                    {/* Sketch side (top left diagonal) */}
                    <div className="absolute inset-0 opacity-20 mix-blend-luminosity bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-br from-surface to-transparent" />

                    {/* Code Side (Bottom Right) */}
                    <div className="absolute top-[30%] left-[20%] right-0 bottom-0 bg-[#0d1117] rounded-tl-2xl border-t border-l border-white/10 shadow-[-20px_-20px_50px_rgba(0,0,0,0.5)] p-4 md:p-6 overflow-hidden transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                        <div className="w-full h-8 flex items-center gap-2 border-b border-white/10 mb-4 pb-2">
                            <span className="text-xs font-mono text-slate-500">master_strategy.py</span>
                            <div className="ml-auto px-2 py-0.5 rounded text-[10px] bg-green-500/20 text-green-400 font-bold uppercase tracking-wider">
                                Oauth Active
                            </div>
                        </div>

                        <TerminalTypewriter
                            className="bg-transparent shadow-none border-none p-0 text-sm md:text-base text-slate-300"
                            lines={[
                                "def execute_trade(strategy_params):",
                                "    # 1. Check Entry Conditions",
                                "    if rsi_14 < 30 and engulfing_candle:",
                                "       target_qty = calc_position_size(cap)",
                                "       ",
                                "    # 2. Fire to Broker via API",
                                "       order_id = broker.place_order(",
                                "           symbol='NIFTY',",
                                "           qty=target_qty,",
                                "           type='MARKET'",
                                "       )",
                                "       return 'DEPLOYED'"
                            ]}
                            typingSpeed={30}
                            delayBetweenLines={300}
                        />
                    </div>

                    <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-accent/20 blur-3xl" />
                </div>
            </AsymmetricContainer>
        </section>
    );
}
