"use client";

import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Check, X } from "@phosphor-icons/react";

const plans = [
    {
        name: "Basic",
        price: "₹999",
        features: [
            { name: "Historical Data", value: "1 Year" },
            { name: "Backtests / Month", value: "10" },
            { name: "Tick-Level Data", value: <X size={18} weight="bold" className="text-slate-600" /> },
            { name: "Equity Backtesting", value: "Basic" },
            { name: "Portfolio Backtest", value: <X size={18} weight="bold" className="text-slate-600" /> },
            { name: "Reports & Paper Trading", value: <X size={18} weight="bold" className="text-slate-600" /> }
        ],
        cta: "Get Started",
        highlight: false
    },
    {
        name: "Pro",
        price: "₹4,999",
        features: [
            { name: "Historical Data", value: "5 Years" },
            { name: "Backtests / Month", value: "Unlimited" },
            { name: "Tick-Level Data", value: <Check size={18} weight="bold" className="text-primary" /> },
            { name: "Equity/F&O Backtesting", value: "Full (multi-leg)" },
            { name: "Portfolio Backtest", value: <X size={18} weight="bold" className="text-slate-600" /> },
            { name: "Reports & Paper Trading", value: <Check size={18} weight="bold" className="text-primary" /> }
        ],
        cta: "Get Pro",
        highlight: true
    },
    {
        name: "Quant",
        price: "₹9,999",
        features: [
            { name: "Historical Data", value: "10 Years" },
            { name: "Backtests / Month", value: "Unlimited" },
            { name: "Tick-Level Data", value: <Check size={18} weight="bold" className="text-primary" /> },
            { name: "Equity/F&O/Commodity Backtesting", value: "Full + Greeks" },
            { name: "Portfolio Backtest", value: <Check size={18} weight="bold" className="text-primary" /> },
            { name: "Reports & Paper Trading", value: <span className="flex items-center justify-end gap-1.5"><Check size={18} weight="bold" className="text-primary" /> + Opt/MC</span> }
        ],
        cta: "Get Quant",
        highlight: false
    }
];

export function Pricing() {
    return (
        <section className="py-24 relative bg-surface/20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h2 className="font-satoshi text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto">
                    Annual billing saves 30%. All plans include a 7-day free trial of Pro features.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {plans.map((plan, idx) => (
                    <LiquidGlassCard
                        key={idx}
                        className={`p-8 flex flex-col relative transition-transform duration-500 ${plan.highlight
                            ? "border-primary/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_50px_-15px_rgba(0,212,170,0.2)] scale-100 md:scale-105 z-10 bg-surface/40"
                            : "border-white/10 bg-surface/20 hover:bg-surface/30 scale-100 md:scale-95"
                            }`}
                    >
                        {plan.highlight && (
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                        )}

                        <h3 className="font-satoshi text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <div className="flex items-baseline gap-1 mb-8">
                            <span className="text-4xl font-bold text-white tracking-tighter">{plan.price}</span>
                        </div>

                        <ul className="space-y-4 mb-10 flex-1">
                            {plan.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex justify-between items-center text-sm border-b border-white/5 pb-4 last:border-0">
                                    <span className="text-slate-400">{feature.name}</span>
                                    <span className={`font-medium text-right flex items-center justify-end ${typeof feature.value === 'string' && (feature.value === 'Unlimited' || feature.value.includes('Full')) ? 'text-white' : 'text-slate-300'}`}>
                                        {feature.value}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <MagneticButton
                            href="/contact"
                            className={`w-full ${plan.highlight ? 'bg-primary text-[#000000] hover:bg-primary-hover shadow-[0_0_15px_rgba(0,212,170,0.3)] border-none' : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'}`}
                        >
                            {plan.cta} →
                        </MagneticButton>
                    </LiquidGlassCard>
                ))}
            </div>
        </section>
    );
}
