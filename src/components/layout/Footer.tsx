"use client";

import Link from "next/link";
import Image from "next/image";
import { AsymmetricContainer } from "../ui/AsymmetricContainer";
import { RocketLaunch, WhatsappLogo } from "@phosphor-icons/react";

export function Footer() {
    return (
        <footer className="w-full bg-surface border-t border-white/5 pt-20 pb-10 mt-32 relative overflow-hidden">
            {/* Top subtle gradient highlight */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="w-full max-w-7xl mx-auto px-6 mb-16">
                <div className="max-w-2xl">
                    <h3 className="font-satoshi text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                        Ready to <span className="text-primary text-glow">Trade Smarter?</span>
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                        Your strategy deserves better than a spreadsheet. Get institutional-grade backtesting, professional algo development, and real-time multi-broker execution — all under one roof.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact" className="px-8 py-3 rounded-full bg-primary text-[#000000] font-bold text-sm hover:bg-primary-hover transition-colors flex items-center gap-2 cursor-pointer inline-flex">
                            <RocketLaunch size={20} weight="fill" className="text-[#000000]" />
                            Book a Quick Call
                        </Link>
                        <Link
                            href="https://wa.me/917908158639"
                            target="_blank"
                            className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 text-white font-bold text-sm transition-colors flex items-center gap-2 cursor-pointer inline-flex"
                        >
                            <WhatsappLogo size={20} weight="fill" className="text-[#25D366]" />
                            WhatsApp Us
                        </Link>
                    </div>
                    <p className="text-slate-500 text-sm mt-6 italic">
                        *No spam. No sales calls. Just fast, expert help.*
                    </p>
                </div>
            </div>

            <div className="w-full h-px bg-white/5 my-10" />

            <AsymmetricContainer ratio="60/40" className="items-start gap-12">
                <div className="space-y-4">
                    <Link href="/" className="font-satoshi font-bold text-2xl tracking-tight text-white flex items-center gap-2 mb-6">
                        <Image src="/custom_logo.png" alt="TradeMade Logo" width={28} height={28} className="invert object-contain" />
                        TradeMade
                    </Link>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                        TradeMade is a technology platform for algorithmic strategy development. We are not a SEBI-registered investment advisor. Past backtest performance does not guarantee future returns.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-8 text-sm">
                    <div className="flex flex-col gap-3">
                        <span className="font-bold text-white mb-2">Platform</span>
                        <Link href="/" className="text-slate-400 hover:text-primary transition-colors">Home</Link>
                        <Link href="/backtesting" className="text-slate-400 hover:text-primary transition-colors">Backtesting</Link>
                        <Link href="/custom-development" className="text-slate-400 hover:text-primary transition-colors">Custom Algo Dev</Link>
                        <Link href="/multi-broker-beta" className="text-slate-400 hover:text-primary transition-colors">AI Multi-Broker</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="font-bold text-white mb-2">Company</span>
                        <Link href="/services" className="text-slate-400 hover:text-primary transition-colors">Services</Link>
                        <Link href="/blog" className="text-slate-400 hover:text-primary transition-colors">Blog</Link>
                        <Link href="/contact" className="text-slate-400 hover:text-primary transition-colors">Contact</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="font-bold text-white mb-2">Legal</span>
                        <Link href="/privacy-policy" className="text-slate-400 hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms-and-conditions" className="text-slate-400 hover:text-primary transition-colors">Terms & Conditions</Link>
                        <Link href="/refund-policy" className="text-slate-400 hover:text-primary transition-colors">Refund Policy</Link>
                        <Link href="/security" className="text-slate-400 hover:text-primary transition-colors">Security</Link>
                    </div>
                </div>
            </AsymmetricContainer>
        </footer>
    );
}
