"use client";

import { AsymmetricContainer } from "@/components/ui/AsymmetricContainer";
import { motion } from "framer-motion";
import { Code, ChartLineUp, AppWindow } from "@phosphor-icons/react";

export function ServicesHero() {
    return (
        <section className="relative w-full min-h-[40dvh] flex items-start lg:items-center pb-20 overflow-hidden pt-28 lg:pt-32 bg-surface/20 border-b border-white/5">
            {/* Ambient background */}
            <div className="absolute top-0 right-1/4 w-[50vw] h-[50vw] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10 mix-blend-screen" />
            <div className="absolute bottom-0 left-1/4 w-[40vw] h-[40vw] bg-accent/10 blur-[150px] rounded-full pointer-events-none -z-10 mix-blend-screen" />

            <AsymmetricContainer ratio="60/40" className="items-center z-10">
                <div className="flex flex-col justify-center max-w-3xl">
                    <h1 className="font-satoshi text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] text-white mb-6">
                        Everything You Need to Trade Algorithmically — <br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent py-2">Under One Roof.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl">
                        Whether you're testing an idea, building a custom system, or scaling across multiple accounts — TradeMade has a solution designed for your stage.
                    </p>
                </div>

                {/* Matrix Float Element right side */}
                <div className="relative w-full aspect-square md:aspect-auto md:h-full min-h-[400px] flex items-center justify-center pt-16 md:pt-0">
                    <div className="relative w-full max-w-[380px] h-[380px]">

                        {/* Card 1: Backtesting (Bottom Left, moves up/down) */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-0 left-0 w-48 bg-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-20"
                        >
                            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                                <ChartLineUp size={20} weight="fill" className="text-purple-400" />
                            </div>
                            <h3 className="font-bold text-white text-sm mb-1">Backtesting Engine</h3>
                            <p className="text-xs text-slate-400">10+ years of tick-by-tick NSE/BSE data simulation.</p>
                        </motion.div>

                        {/* Card 2: Custom Dev (Top Right, moves up/down offset) */}
                        <motion.div
                            animate={{ y: [15, -15, 15] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-0 right-0 w-48 bg-surface/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-10"
                        >
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                                <Code size={20} weight="fill" className="text-primary" />
                            </div>
                            <h3 className="font-bold text-white text-sm mb-1">Custom Algo Dev</h3>
                            <p className="text-xs text-slate-400">Your logic, coded natively in Python or Pine Script.</p>
                        </motion.div>

                        {/* Card 3: Multi-Broker (Center Overlap, moves subtle) */}
                        <motion.div
                            animate={{ y: [-5, 5, -5] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 bg-gradient-to-br from-surface to-background border border-accent/30 rounded-2xl p-5 shadow-[0_20px_50px_rgba(30,107,255,0.2)] z-30 cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-accent/5 rounded-2xl pointer-events-none" />
                            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4 border border-accent/20">
                                <AppWindow size={24} weight="fill" className="text-accent" />
                            </div>
                            <h3 className="font-bold text-white mb-2 text-base">TradeMade Core UI</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">Execute trades across Zerodha, Upstox, and Angel One simultaneously.</p>

                            <div className="mt-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-[10px] text-green-400 font-mono tracking-wider uppercase">Systems Active</span>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </AsymmetricContainer>
        </section>
    );
}
