"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

export default function LeadCaptureForm() {
    const [phone, setPhone] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const val = phone.replace(/\D/g, "");
        if (val.length !== 10) {
            return;
        }

        try {
            const res = await fetch("/api/blog-leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    phone: val,
                    source_page: typeof window !== "undefined" ? window.location.pathname : null,
                }),
            });

            if (!res.ok) {
                console.error("Failed to capture lead");
            }
        } catch (err) {
            console.error("Lead capture error:", err);
        }

        setSubmitted(true);
    };

    return (
        <div className="bg-[#0d1522] border border-primary/20 rounded-3xl p-8 md:p-12 my-12 text-center relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl mix-blend-screen" />

            <span className="inline-block bg-primary text-[#000000] font-satoshi text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
                Free Access
            </span>

            <h3 className="font-satoshi text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                Test Your Strategy on Tick-Level Data — Free
            </h3>

            <p className="text-slate-400 mb-8 max-w-xl mx-auto font-light">
                TradeMade's backtesting engine runs on 10+ years of tick data with realistic slippage, brokerage, options Greeks, walk-forward optimisation, and Monte Carlo simulation. Drop your number — we'll set you up.
            </p>

            {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch justify-center gap-0 max-w-md mx-auto relative z-10">
                    <div className="flex items-center bg-white/5 border border-white/10 sm:border-r-0 rounded-t-xl sm:rounded-tr-none sm:rounded-l-xl px-4 py-3 sm:py-0">
                        <span className="text-white font-medium">🇮🇳 +91</span>
                    </div>
                    <input
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        placeholder="98XXXXXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="flex-1 bg-white/5 border border-white/10 border-t-0 sm:border-t flex-none sm:border-x-0 px-4 py-3 sm:py-4 text-white placeholder:text-slate-500 focus:outline-none focus:bg-white/10 transition-colors rounded-none"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-primary hover:bg-primary-hover text-[#000000] font-bold px-6 py-3 sm:py-4 rounded-b-xl sm:rounded-bl-none sm:rounded-r-xl transition-colors font-satoshi uppercase tracking-wide text-sm"
                    >
                        Get Free Access →
                    </button>
                </form>
            ) : (
                <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-xl max-w-md mx-auto text-sm font-medium">
                    ✅ We've got your number. Expect a WhatsApp from us within 24 hours.
                </div>
            )}

            <p className="text-slate-500 text-xs mt-4 font-light">
                No spam. No cold calls. Just access.
            </p>
        </div>
    );
}
