"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CodeBlock, GitMerge, Lightning, Play } from "@phosphor-icons/react";

// CLI Typing Component
const TypewriterLine = ({ text, delay = 0, showCursorAfter = false }: { text: string; delay?: number; showCursorAfter?: boolean }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [started, setStarted] = useState(false);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const startTimeout = setTimeout(() => {
            setStarted(true);
            let i = 0;
            timeout = setInterval(() => {
                setDisplayedText(text.slice(0, i + 1));
                i++;
                if (i >= text.length) {
                    clearInterval(timeout);
                    setCompleted(true);
                }
            }, 30); // fast CLI typing speed
        }, delay);

        return () => {
            clearTimeout(startTimeout);
            clearInterval(timeout);
        };
    }, [text, delay]);

    if (!started) return null;

    return (
        <div className="flex items-center text-slate-300">
            <span className="text-primary mr-3">{">"}</span>
            <span>{displayedText}</span>
            {(!completed || showCursorAfter) && (
                <span className="text-primary ml-1 animate-pulse">_</span>
            )}
        </div>
    );
};

// Hardcoded perfect upward trend path to ensure it's never flat
const sparklinePath = "M 0,95 L 5,92 L 10,85 L 20,88 L 30,70 L 40,65 L 50,72 L 60,50 L 70,45 L 80,25 L 90,30 L 100,10";

export function ConsoleAnimation() {
    const [clip, setClip] = useState<number>(0);

    useEffect(() => {
        const sequence = async () => {
            // Clip 0: Terminal typing (4 lines staggered) -> approx 3 seconds
            setClip(0);
            await new Promise(r => setTimeout(r, 4500));

            // Clip 1: Building Strategy / Dashboard -> 3.5 seconds
            setClip(1);
            await new Promise(r => setTimeout(r, 3500));

            // Clip 2: Upward Chart Visualization -> 4 seconds
            setClip(2);
            await new Promise(r => setTimeout(r, 4000));

            // Clip 3: Final results -> 4.5 seconds
            setClip(3);
            await new Promise(r => setTimeout(r, 4500));

            // Loop back
            sequence();
        };
        sequence();
    }, []);

    return (
        <div className="w-full h-full bg-[#0a0f18]/80 rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden backdrop-blur-3xl">
            {/* macOS Window Controls */}
            <div className="h-10 bg-surface/50 border-b border-white/5 flex items-center px-4 gap-2 shrink-0">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="mx-auto text-xs text-slate-500 font-mono tracking-wider ml-4 mr-0 md:mr-4">
                    trademade — backtest_engine
                </div>
            </div>

            <div className="relative flex-1 p-4 md:p-6 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    {/* CLIP 0: TERMINAL TYPING */}
                    {clip === 0 && (
                        <motion.div
                            key="clip0"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="font-mono text-sm space-y-3"
                        >
                            <TypewriterLine text="01 Initializing TradeMade Engine..." delay={0} />
                            <TypewriterLine text="02 Loading 10-Year Tick Data: NIFTY50" delay={800} />
                            <TypewriterLine text="03 Applying Impact Cost Model (Depth: 5)" delay={1800} />
                            <TypewriterLine text="04 Executing Strategy: Short Strangle (Delta 0.2)" delay={2800} />

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 3.8 }}
                                className="flex items-center text-slate-300 mt-4"
                            >
                                <span className="text-primary mr-3">{">"}</span>
                                <span className="w-2 h-4 bg-primary animate-pulse" />
                            </motion.div>
                        </motion.div>
                    )}

                    {/* CLIP 1: BUILDING STRATEGY DASHBOARD */}
                    {clip === 1 && (
                        <motion.div
                            key="clip1"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col w-full h-full"
                        >
                            <div className="text-xs font-mono text-slate-400 mb-6 flex items-center justify-between border-b border-white/5 pb-2">
                                <span>STRATEGY BUILDER</span>
                                <span className="text-primary animate-pulse flex items-center gap-1"><Lightning size={12} weight="fill" /> LIVE</span>
                            </div>

                            <div className="flex-1 grid grid-cols-2 gap-3 md:gap-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                                    className="bg-white/5 rounded-xl border border-white/10 p-3 md:p-4 flex flex-col relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 blur-xl group-hover:bg-blue-500/20 transition-colors" />
                                    <CodeBlock size={20} className="text-blue-400 mb-1 md:mb-2" />
                                    <span className="text-[9px] md:text-[10px] text-slate-500 font-mono tracking-wider">ENTRY CONDITION</span>
                                    <div className="mt-1 md:mt-2 text-xs md:text-sm text-slate-300 font-mono leading-relaxed truncate whitespace-normal">
                                        RSI(14) {'<'} 30 <br />
                                        <span className="text-blue-400">AND</span><br />
                                        MACD {'>'} Signal
                                    </div>
                                    <motion.div
                                        className="h-1 bg-blue-500/50 mt-auto rounded-full origin-left"
                                        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 2.5 }}
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
                                    className="bg-white/5 rounded-xl border border-white/10 p-3 md:p-4 flex flex-col relative overflow-hidden group"
                                >
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-accent/10 blur-xl group-hover:bg-accent/20 transition-colors" />
                                    <GitMerge size={20} className="text-accent mb-1 md:mb-2" />
                                    <span className="text-[9px] md:text-[10px] text-slate-500 font-mono tracking-wider">RISK MANAGEMENT</span>
                                    <div className="mt-1 md:mt-2 text-xs md:text-sm text-slate-300 font-mono leading-relaxed truncate whitespace-normal">
                                        Stop Loss: 2%<br />
                                        Trailing Stop: 1%<br />
                                        Max Trades: 3/day
                                    </div>
                                    <motion.div
                                        className="h-1 bg-accent/50 mt-auto rounded-full origin-left"
                                        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.7, duration: 2.5 }}
                                    />
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
                                className="mt-4 bg-primary/10 border border-primary/20 rounded-xl p-3 flex items-center justify-center gap-2 text-primary font-bold text-sm tracking-wide"
                            >
                                <Play size={16} weight="fill" /> COMPILING ALGORITHM
                            </motion.div>
                        </motion.div>
                    )}

                    {/* CLIP 2: UPWARD CHART VISUALIZATION */}
                    {clip === 2 && (
                        <motion.div
                            key="clip2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full flex flex-col justify-end relative"
                        >
                            <div className="absolute top-0 left-0 text-xs font-mono text-primary/80">
                                BACKTESTING P&L CURVE [10Y DATA]
                            </div>

                            {/* SVG Chart preserve aspect ratio none so it spans the whole div, vector-effect non-scaling-stroke to stop the line getting thick horizontally */}
                            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-3/4 overflow-visible">
                                <motion.path
                                    d={sparklinePath}
                                    fill="none"
                                    stroke="#00d4aa"
                                    strokeWidth="2"
                                    vectorEffect="non-scaling-stroke"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2.5, ease: "easeInOut" }}
                                    className="drop-shadow-[0_0_8px_rgba(0,212,170,0.8)]"
                                />

                                <motion.path
                                    d={`${sparklinePath} L 100,100 L 0,100 Z`}
                                    fill="url(#gradient)"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 1 }}
                                />

                                <defs>
                                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="rgba(0, 212, 170, 0.4)" />
                                        <stop offset="100%" stopColor="rgba(0, 212, 170, 0)" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Scanning bar */}
                            <motion.div
                                className="absolute top-0 bottom-0 w-px bg-white/20 shadow-[0_0_10px_#fff]"
                                initial={{ left: "0%" }}
                                animate={{ left: "100%" }}
                                transition={{ duration: 3, ease: "linear" }}
                            />
                        </motion.div>
                    )}

                    {/* CLIP 3: FINAL RESULTS */}
                    {clip === 3 && (
                        <motion.div
                            key="clip3"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, filter: "blur(10px)" }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col items-center justify-center w-full h-full space-y-6"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-sm font-mono text-slate-400 border-b border-white/10 pb-4 w-full text-center"
                            >
                                <TypewriterLine text="Backtest Complete [245ms]" delay={0} />
                            </motion.div>

                            <div className="flex gap-8 items-center w-full justify-center mt-2">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1 }}
                                    className="flex flex-col items-center"
                                >
                                    <span className="text-4xl font-bold font-mono text-primary text-glow">3.24</span>
                                    <span className="text-xs text-slate-500 uppercase tracking-widest mt-1">Sharpe Ratio</span>
                                </motion.div>

                                <div className="w-px h-12 bg-white/10" />

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 1.5 }}
                                    className="flex flex-col items-center"
                                >
                                    <span className="text-4xl font-bold font-mono text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">+142%</span>
                                    <span className="text-xs text-slate-500 uppercase tracking-widest mt-1">Total Return</span>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2.5, duration: 0 }}
                                className="mt-8 text-primary font-mono text-sm border border-primary/20 bg-primary/5 px-4 py-2 rounded-full"
                            >
                                <TypewriterLine text="Ready for Live Deployment" delay={2600} showCursorAfter={true} />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Background glow syncing with clips */}
            <motion.div
                className={`absolute inset-0 -z-10 bg-primary/5 rounded-2xl blur-2xl transition-opacity duration-1000 ${clip === 3 ? 'opacity-100' : 'opacity-0'}`}
            />
        </div>
    );
}
