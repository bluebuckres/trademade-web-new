"use client";

import { Check, X, WhatsappLogo } from "@phosphor-icons/react";

const rows = [
    { label: "I want to test a strategy", s1: true, s2: true, s3: false },
    { label: "I want someone to code my strategy", s1: false, s2: true, s3: false },
    { label: "I want live execution across brokers", s1: false, s2: true, s3: true },
    { label: "I want AI news risk management", s1: false, s2: "Add-on", s3: true },
    { label: "Starting cost", s1: "₹999", s2: "₹15,000", s3: "Free (Beta)" },
];

export function ServiceComparison() {
    return (
        <section className="py-24 relative bg-surface/20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <h2 className="font-satoshi text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                    Which is Right For You?
                </h2>
            </div>

            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="overflow-x-auto border border-white/10 rounded-2xl bg-surface/30 backdrop-blur-md">
                    <table className="w-full text-left min-w-[800px]">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="p-6 font-satoshi text-lg text-white font-bold w-1/4">Feature / Need</th>
                                <th className="p-6 font-satoshi text-lg text-white font-bold w-1/4">Backtesting</th>
                                <th className="p-6 font-satoshi text-lg text-white font-bold w-1/4">Custom Algo Dev</th>
                                <th className="p-6 font-satoshi text-lg text-white font-bold w-1/4">AI Multi-Broker <span className="text-primary text-sm ml-2 font-mono">(Beta)</span></th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, idx) => (
                                <tr key={idx} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                    <td className="p-6 text-slate-300 font-medium">{row.label}</td>

                                    <td className="p-6">
                                        {typeof row.s1 === 'boolean'
                                            ? (row.s1 ? <Check size={24} className="text-primary" weight="bold" /> : <X size={24} className="text-slate-600" weight="bold" />)
                                            : <span className="text-white font-bold font-mono">{row.s1}</span>
                                        }
                                    </td>

                                    <td className="p-6 border-l border-r border-white/5 bg-white/5">
                                        {typeof row.s2 === 'boolean'
                                            ? (row.s2 ? <Check size={24} className="text-accent" weight="bold" /> : <X size={24} className="text-slate-600" weight="bold" />)
                                            : <span className="text-white font-bold font-mono">{row.s2}</span>
                                        }
                                    </td>

                                    <td className="p-6">
                                        {typeof row.s3 === 'boolean'
                                            ? (row.s3 ? <Check size={24} className="text-yellow-500" weight="bold" /> : <X size={24} className="text-slate-600" weight="bold" />)
                                            : <span className="text-white font-bold font-mono">{row.s3}</span>
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-12 text-center">
                    <button className="inline-flex items-center gap-2 text-primary font-medium hover:text-white transition-colors border border-primary/20 hover:border-white/20 rounded-full px-6 py-3">
                        <WhatsappLogo size={18} weight="fill" />
                        <span>Not sure which to choose? Ask us on WhatsApp →</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
