"use client";

import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { WhatsappLogo, Code, ChartLineUp, EnvelopeSimple, Buildings } from "@phosphor-icons/react";
import Link from "next/link";

const inquiries = [
    {
        icon: WhatsappLogo,
        title: "Quick Question / Discussion",
        desc: "Direct conversation with a quant team member.",
        channel: "WhatsApp",
        time: "Under 2 hours",
        cta: "Open WhatsApp Chat →",
        href: "https://wa.me/917908158639",
        color: "green-500",
        primary: true
    },
    {
        icon: Code,
        title: "Request Custom Algo Quote",
        desc: "Project scope, timeline, and pricing sent to your email.",
        channel: "Form Below",
        time: "24–48 hours",
        cta: "Fill Quote Request Form ↓",
        href: "#contact-form",
        color: "accent"
    },
    {
        icon: ChartLineUp,
        title: "Backtesting Support",
        desc: "Help with strategy setup, data questions, or results.",
        channel: "Email",
        time: "Same day",
        cta: "connect@trademade.in →",
        href: "mailto:connect@trademade.in",
        color: "primary"
    },
    {
        icon: EnvelopeSimple,
        title: "Beta Program (Multi-Broker)",
        desc: "Onboarding call, account setup, and dedicated beta support.",
        channel: "Waitlist Form",
        time: "Within 48 hours",
        cta: "Join Beta Waitlist →",
        href: "/multi-broker-beta",
        color: "yellow-500"
    },
    {
        icon: Buildings,
        title: "Enterprise Inquiry",
        desc: "Call with our head of quant and a customised proposal.",
        channel: "Email",
        time: "1 business day",
        cta: "connect@trademade.in →",
        href: "mailto:connect@trademade.in",
        color: "purple-500"
    }
];

export function ContactInquiries() {
    return (
        <section className="py-12 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="font-satoshi text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Choose Your Inquiry Type</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {inquiries.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <LiquidGlassCard
                                key={idx}
                                className={`p-8 hover:-translate-y-1 transition-transform duration-300 ${item.primary ? 'border-accent/30 shadow-[0_0_30px_rgba(30,107,255,0.1)]' : 'border-white/5'} ${idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''}`}
                            >
                                <div className={`w-12 h-12 rounded-xl bg-${item.color}/10 border border-${item.color}/20 flex items-center justify-center text-${item.color} mb-6`}>
                                    <Icon size={24} weight="duotone" />
                                </div>

                                <h3 className="font-satoshi text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-sm mb-6 h-10">{item.desc}</p>

                                <div className="space-y-2 text-xs font-mono text-slate-500 mb-8">
                                    <div className="flex justify-between border-b border-white/5 pb-2">
                                        <span>Best channel:</span> <span className="text-white">{item.channel}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-white/5 pb-2">
                                        <span>Response time:</span> <span className="text-white">{item.time}</span>
                                    </div>
                                </div>

                                <Link href={item.href} className={`inline-block font-medium ${item.primary ? 'text-accent hover:text-white' : 'text-slate-300 hover:text-white'} transition-colors`}>
                                    {item.cta}
                                </Link>
                            </LiquidGlassCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
