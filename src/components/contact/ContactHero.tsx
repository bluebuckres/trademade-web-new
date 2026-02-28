"use client";

import { AsymmetricContainer } from "@/components/ui/AsymmetricContainer";
import { MagneticButton } from "@/components/ui/MagneticButton";
import posthog from "posthog-js";

export function ContactHero() {
    return (
        <section className="relative w-full overflow-hidden pt-36 pb-20 bg-background text-center">
            {/* Background glow */}
            <div className="absolute top-0 inset-x-0 h-[50vh] bg-gradient-to-b from-surface/50 to-transparent pointer-events-none" />
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60vw] h-[40vw] bg-primary/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300 mb-8 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Online & Ready to Chat
                </div>

                <h1 className="font-satoshi text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-tight text-white mb-6">
                    Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 block md:inline">Talk</span>
                </h1>

                <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-4">
                    We're not a support ticket queue. We're a small, expert team that responds fast and takes your problem seriously.
                </p>

                <p className="text-sm font-mono text-primary bg-primary/10 inline-block px-3 py-1 rounded mb-8">
                    Typical first response: under 2 hours on WhatsApp during market hours.
                </p>

                <div className="flex justify-center">
                    <MagneticButton
                        id="open-popup-button"
                        className="bg-primary hover:bg-primary-hover text-[#000000] shadow-[0_0_20px_rgba(0,212,170,0.3)] border-none cursor-pointer py-4 px-8 font-bold text-lg"
                        onClick={() => posthog.capture('cta_clicked', { button: 'book_schedule_call', page: 'contact' })}
                    >
                        ▶ Book a Schedule Call
                    </MagneticButton>
                </div>
            </div>
        </section>
    );
}
