"use client";

import Link from 'next/link';
import { ChartBar, Robot, ChatCircleDots, TrendUp } from "@phosphor-icons/react";

export function CrossLinks() {
    return (
        <div className="py-12 bg-surface/10 border-t border-white/5 text-center">
            <span className="text-xs font-mono font-medium text-slate-500 mb-6 block uppercase tracking-widest">Also Ask Us About</span>
            <div className="flex flex-wrap items-center justify-center gap-4 px-6 max-w-4xl mx-auto">
                <Link href="/backtesting" className="px-5 py-2.5 rounded-full bg-surface/30 border border-white/10 text-sm font-medium text-slate-300 hover:text-white hover:border-white/20 hover:bg-surface/50 transition-colors hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] flex items-center gap-2">
                    <ChartBar className="text-slate-500" size={16} weight="bold" /> Backtesting Engine
                </Link>
                <Link href="/multi-broker-beta" className="px-5 py-2.5 rounded-full bg-surface/30 border border-white/10 text-sm font-medium text-slate-300 hover:text-white hover:border-white/20 hover:bg-surface/50 transition-colors hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] flex items-center gap-2">
                    <Robot className="text-slate-500" size={16} weight="bold" /> AI Multi-Broker
                </Link>
                <Link href="/contact" className="px-5 py-2.5 rounded-full bg-surface/30 border border-white/10 text-sm font-medium text-slate-300 hover:text-white hover:border-white/20 hover:bg-surface/50 transition-colors hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] flex items-center gap-2">
                    <ChatCircleDots className="text-slate-500" size={16} weight="bold" /> Telegram Bot Dev
                </Link>
                <Link href="/services" className="px-5 py-2.5 rounded-full bg-surface/30 border border-white/10 text-sm font-medium text-slate-300 hover:text-white hover:border-white/20 hover:bg-surface/50 transition-colors hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] flex items-center gap-2">
                    <TrendUp className="text-slate-500" size={16} weight="bold" /> Strategy Automation
                </Link>
            </div>
        </div>
    );
}
