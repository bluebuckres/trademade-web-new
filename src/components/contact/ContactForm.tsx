"use client";

import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { WhatsappLogo, Calendar } from "@phosphor-icons/react";

export function ContactForm() {
    return (
        <section id="contact-form" className="py-24 relative overflow-hidden bg-surface/20 border-t border-white/5 mt-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Office Info */}
                <div>
                    <h2 className="font-satoshi text-3xl font-bold text-white mb-8">Schedule a Call</h2>
                    <p className="text-slate-400 mb-12 max-w-md">
                        Pick a time that works for you. We'll discuss your strategy, custom algo requirements, and how TradeMade can help you scale.
                    </p>

                    <div className="space-y-8 bg-surface/40 p-8 rounded-3xl border border-white/5">
                        <div>
                            <h3 className="text-white font-bold mb-1">TradeMade</h3>
                            <p className="text-slate-400 text-sm">Kolkata, West Bengal, India</p>
                        </div>

                        <div className="space-y-4 text-sm text-slate-300">
                            <div className="flex gap-4">
                                <span className="text-slate-500 w-20">Email:</span>
                                <a href="mailto:connect@trademade.in" className="hover:text-primary transition-colors">connect@trademade.in</a>
                            </div>
                            <div className="flex gap-4 items-center">
                                <span className="text-slate-500 w-24 flex items-center gap-2">
                                    <WhatsappLogo size={16} weight="fill" /> WhatsApp:
                                </span>
                                <a href="https://wa.me/917908158639" className="hover:text-primary transition-colors">+91 7908158639</a>
                            </div>
                            <div className="flex gap-4">
                                <span className="text-slate-500 w-20 shrink-0">Hours:</span>
                                <span>Mon–Fri, 9 AM–5 PM IST<br /><span className="text-slate-500 text-xs">(WhatsApp support extended during market hours)</span></span>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/5">
                            <p className="text-xs text-slate-500 font-mono">
                                * We do not offer investment advice. All algo development is a technology service.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Simple CTA to open popup */}
                <div className="flex justify-center flex-col items-center">
                    <LiquidGlassCard className="p-12 text-center border-white/10 relative overflow-hidden flex flex-col items-center justify-center max-w-md w-full">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full pointer-events-none" />

                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                            <Calendar size={32} weight="fill" className="text-primary" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4">Book a Discovery Call</h3>
                        <p className="text-slate-400 mb-8 max-w-xs text-sm">
                            Choose a convenient time on our calendar to discuss your algorithmic trading needs.
                        </p>

                        <MagneticButton
                            onClick={(e) => {
                                e.preventDefault();
                                const windowObj = window as any;
                                if (windowObj.neetoCal) {
                                    windowObj.neetoCal.embed({
                                        type: "popup",
                                        id: "6f2bfcb1-b1de-4959-a78e-993d3194d7a1",
                                        organization: "trademade"
                                    });
                                }
                            }}
                            className="bg-primary text-[#000000] hover:bg-primary-hover w-full sm:w-auto px-8 font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(0,212,170,0.3)] flex items-center justify-center gap-2 text-lg"
                        >
                            <Calendar size={24} weight="bold" />
                            Book a Quick Call
                        </MagneticButton>
                    </LiquidGlassCard>
                </div>

            </div>
        </section>
    );
}
