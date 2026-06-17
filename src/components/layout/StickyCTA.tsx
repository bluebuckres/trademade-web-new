"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { WhatsappLogo, X, ArrowRight } from "@phosphor-icons/react";
import posthog from "posthog-js";

/**
 * StickyCTA — appears at the bottom of the screen after the user scrolls 40%.
 * On mobile: a full-width bar with WhatsApp + Book Call CTAs.
 * Dismissible with an X button; persists dismissal in sessionStorage.
 *
 * FIX: styled-jsx (<style jsx>) is NOT supported in Next.js App Router.
 *      The slideUpCTA animation is defined in globals.css instead.
 * FIX: dismissed ref used in scroll handler to avoid stale closure without
 *      re-registering the scroll listener on every state change.
 */
export function StickyCTA() {
    const [visible, setVisible] = useState(false);
    const dismissedRef = useRef(false);

    useEffect(() => {
        // Don't show if already dismissed this session
        if (sessionStorage.getItem("sticky_cta_dismissed")) return;

        const handleScroll = () => {
            if (dismissedRef.current) return;
            const scrolled = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? (scrolled / docHeight) * 100 : 0;
            if (pct > 40) {
                setVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
        // Empty deps: register once on mount, use ref for dismissed state
    }, []);

    const handleDismiss = () => {
        dismissedRef.current = true;
        setVisible(false);
        sessionStorage.setItem("sticky_cta_dismissed", "1");
        posthog.capture("sticky_cta_dismissed");
    };

    if (!visible) return null;

    return (
        // animate-slide-up-cta is defined in globals.css (not styled-jsx)
        <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up-cta">
            {/* Mobile bar */}
            <div className="md:hidden bg-[#0d1117] border-t border-white/10 px-4 py-3 flex items-center gap-3 shadow-[0_-8px_32px_rgba(0,0,0,0.5)]">
                <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-bold truncate">Get a Free Algo Consultation</p>
                    <p className="text-slate-500 text-xs truncate">Describe your strategy — we&apos;ll quote it</p>
                </div>
                <a
                    href="https://wa.me/917908158639"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => posthog.capture("sticky_cta_clicked", { button: "whatsapp", device: "mobile" })}
                    className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] text-[#000000] font-bold text-xs"
                >
                    <WhatsappLogo size={14} weight="fill" />
                    WhatsApp
                </a>
                <button
                    id="sticky-cta-book"
                    type="button"
                    onClick={() => {
                        posthog.capture("sticky_cta_clicked", { button: "book_call", device: "mobile" });
                        (document.getElementById("open-popup-button") as HTMLElement | null)?.click();
                    }}
                    className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-[#000000] font-bold text-xs"
                >
                    Book Call
                </button>
                <button
                    type="button"
                    onClick={handleDismiss}
                    aria-label="Dismiss banner"
                    className="flex-shrink-0 p-1.5 rounded-full hover:bg-white/10 text-slate-500 transition-colors"
                >
                    <X size={14} />
                </button>
            </div>

            {/* Desktop floating bar */}
            <div className="hidden md:flex max-w-2xl mx-auto mb-6 bg-[#0d1117]/95 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 items-center gap-6 shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
                <div className="flex-1">
                    <p className="text-white font-bold">Get a Free Algo Strategy Consultation</p>
                    <p className="text-slate-400 text-sm">500+ algos delivered. Describe your idea — we&apos;ll scope and quote it free.</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                    <a
                        href="https://wa.me/917908158639"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => posthog.capture("sticky_cta_clicked", { button: "whatsapp", device: "desktop" })}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-bold text-sm hover:bg-[#25D366]/20 transition-colors"
                    >
                        <WhatsappLogo size={16} weight="fill" />
                        WhatsApp
                    </a>
                    <Link
                        href="/contact"
                        onClick={() => posthog.capture("sticky_cta_clicked", { button: "contact_form", device: "desktop" })}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-[#000000] font-bold text-sm hover:bg-primary-hover transition-colors shadow-[0_0_16px_rgba(0,212,170,0.3)]"
                    >
                        Get a Quote <ArrowRight size={14} weight="bold" />
                    </Link>
                </div>
                <button
                    type="button"
                    onClick={handleDismiss}
                    aria-label="Dismiss banner"
                    className="p-2 rounded-full hover:bg-white/10 text-slate-500 transition-colors flex-shrink-0"
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
}
