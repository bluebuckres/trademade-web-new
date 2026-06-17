"use client";

import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { WhatsappLogo, Calendar } from "@phosphor-icons/react";
import posthog from "posthog-js";

export function ContactForm() {
    return (
        <section id="contact-form" className="py-24 relative overflow-hidden bg-surface/20 border-t border-white/5 mt-12">
            <div className="max-w-4xl mx-auto px-6">
                <LiquidGlassCard className="p-8 md:p-12 border-white/10 relative overflow-hidden text-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full pointer-events-none" />
                    
                    <h2 className="font-satoshi text-3xl md:text-4xl font-bold text-white mb-4">Let's Build Your System</h2>
                    <p className="text-slate-400 mb-10 max-w-xl mx-auto">
                        Whether you need a custom trading bot, backtesting engine, or ultra-low latency execution infrastructure, we're here to help.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <MagneticButton
                            id="open-popup-button"
                            className="bg-primary text-[#000000] font-bold flex gap-2 items-center px-8 py-4 rounded-xl hover:bg-primary-hover shadow-[0_0_20px_rgba(0,212,170,0.3)] transition-all"
                            onClick={() => posthog.capture("cta_clicked", { button: "book_call_contact_page", page: "contact" })}
                        >
                            <Calendar size={20} weight="fill" />
                            Book a Free Consultation
                        </MagneticButton>

                        <a 
                            href="https://wa.me/917908158639" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-[#25D366] text-[#000000] font-bold flex gap-2 items-center px-8 py-4 rounded-xl hover:bg-[#20bd5a] shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all"
                            onClick={() => posthog.capture("cta_clicked", { button: "whatsapp_contact_page", page: "contact" })}
                        >
                            <WhatsappLogo size={20} weight="fill" />
                            Chat on WhatsApp
                        </a>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/5 text-slate-400 text-sm flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-white font-medium">Email</span>
                            <a href="mailto:connect@trademade.in" className="hover:text-primary transition-colors">connect@trademade.in</a>
                        </div>
                        <div className="hidden md:block w-px h-8 bg-white/10" />
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-white font-medium">Location</span>
                            <span>Kolkata, West Bengal, India</span>
                        </div>
                        <div className="hidden md:block w-px h-8 bg-white/10" />
                        <div className="flex flex-col items-center gap-1">
                            <span className="text-white font-medium">Hours</span>
                            <span>Mon–Fri, 9 AM–5 PM IST</span>
                        </div>
                    </div>
                </LiquidGlassCard>
            </div>
        </section>
    );
}
