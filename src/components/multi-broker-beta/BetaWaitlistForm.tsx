"use client";

import { useState } from "react";
import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function BetaWaitlistForm() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [brokers, setBrokers] = useState("");
    const [strategy, setStrategy] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!fullName.trim() || !email.trim()) return;

        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/beta-waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    full_name: fullName.trim(),
                    email: email.trim(),
                    brokers: brokers.trim() || null,
                    strategy_description: strategy.trim() || null,
                }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Something went wrong.");
            }

            setStatus("success");
        } catch (err: unknown) {
            setStatus("error");
            setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
        }
    };

    return (
        <section className="py-24 relative border-t border-white/5 bg-surface/30">
            <div className="max-w-4xl mx-auto px-6">
                <LiquidGlassCard className="p-8 md:p-12 border-primary/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_100px_-20px_rgba(0,212,170,0.15)] relative overflow-hidden">

                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 blur-[100px] pointer-events-none rounded-full" />

                    <div className="text-center mb-10 relative z-10">
                        <h2 className="font-satoshi text-3xl md:text-4xl font-bold text-white mb-4">Join the Beta Waitlist</h2>
                        <p className="text-slate-300">
                            The AI Multi-Broker Alignment feature is in active beta testing.<br className="hidden md:block" />
                            Currently accepting: <span className="font-bold text-white">50 beta users</span>. (31 spots filled)
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 relative z-10">
                        <div className="space-y-4 text-slate-400 text-sm">
                            <h4 className="text-white font-bold mb-2">Beta Users Get:</h4>
                            <p>✓ Free access during beta period (3–6 months)</p>
                            <p>✓ Direct line to our development team</p>
                            <p>✓ Priority migration to paid plan at founding rates</p>
                            <p>✓ Dedicated WhatsApp onboarding support</p>
                        </div>
                        <div className="space-y-4 text-slate-400 text-sm">
                            <h4 className="text-white font-bold mb-2">Requirements:</h4>
                            <p>• Must have at least 2 active broker accounts</p>
                            <p>• Minimum trading experience: 6 months with algos</p>
                            <p>• Willingness to share feedback (30-min monthly call)</p>
                        </div>
                    </div>

                    {status === "success" ? (
                        <div className="relative z-10 bg-green-500/10 border border-green-500/30 text-green-400 p-6 rounded-xl text-center">
                            <p className="text-lg font-bold mb-2">🎉 Application Submitted!</p>
                            <p className="text-sm">We&apos;ll review your application and reach out on WhatsApp within 48 hours.</p>
                        </div>
                    ) : (
                        <form className="relative z-10 space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400">Full Name *</label>
                                    <input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Rakesh Jhunjhunwala"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400">Email Address *</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="rakesh@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Which Brokers Do You Use?</label>
                                <input
                                    type="text"
                                    value={brokers}
                                    onChange={(e) => setBrokers(e.target.value)}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors"
                                    placeholder="e.g. Zerodha, Angel One, Upstox"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Brief Description of Your Strategy</label>
                                <textarea
                                    rows={3}
                                    value={strategy}
                                    onChange={(e) => setStrategy(e.target.value)}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="e.g. Intraday Nifty Short Straddle triggered at 9:20 AM"
                                />
                            </div>

                            {status === "error" && (
                                <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded-xl text-sm text-center">
                                    {errorMsg}
                                </div>
                            )}

                            <div className="pt-4 text-center">
                                <MagneticButton
                                    className="bg-primary text-[#000000] hover:bg-primary-hover shadow-[0_0_20px_rgba(0,212,170,0.3)] w-full md:w-auto px-12 py-4 border-none text-lg"
                                >
                                    {status === "loading" ? "Submitting..." : "Submit Application For Beta"}
                                </MagneticButton>
                            </div>
                        </form>
                    )}

                </LiquidGlassCard>
            </div>
        </section>
    );
}
