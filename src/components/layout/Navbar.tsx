"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "../ui/MagneticButton";

const navLinks = [
    { name: "Backtesting", href: "/backtesting" },
    { name: "Custom Algo Dev", href: "/custom-development" },
    { name: "AI Multi-Broker", href: "/multi-broker-beta" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-4 md:px-6 pointer-events-none">
            <div className="pointer-events-auto w-full max-w-5xl relative">
                {/* Main Desktop/Tablet Bar */}
                <nav className="flex w-full items-center justify-between p-2 rounded-full bg-[#0d1117]/60 backdrop-blur-2xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_8px_32px_rgba(0,0,0,0.5)] z-50 relative">

                    {/* Logo */}
                    <Link href="/" className="ml-4 font-satoshi font-bold text-xl tracking-tight text-white flex items-center gap-2">
                        <Image src="/custom_logo.png" alt="TradeMade Logo" width={24} height={24} className="invert object-contain" />
                        TradeMade
                    </Link>

                    {/* Links - Desktop */}
                    <ul className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                            isActive ? "text-white bg-white/10" : "text-slate-400 hover:text-white hover:bg-white/5"
                                        )}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <div className="absolute inset-x-2 -bottom-1 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Desktop CTA & Mobile Toggle */}
                    <div className="flex items-center gap-2">
                        <div className="hidden lg:block">
                            <MagneticButton
                                className="bg-primary text-[#000000] hover:bg-primary-hover px-6 py-2.5 text-sm font-bold shadow-[0_0_15px_rgba(0,212,170,0.4)] border-none"
                                onClick={() => window.location.href = '/contact'}
                            >
                                Contact Us →
                            </MagneticButton>
                        </div>

                        {/* Mobile Toggle Button */}
                        <button
                            className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors mr-2"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Dropdown Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-16 left-0 right-0 bg-[#0d1117]/90 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl lg:hidden z-40 p-4"
                        >
                            <ul className="flex flex-col gap-2">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className={cn(
                                                    "block px-6 py-4 rounded-2xl text-base font-medium transition-colors",
                                                    isActive
                                                        ? "text-white bg-white/10 border border-white/5"
                                                        : "text-slate-400 hover:text-white hover:bg-white/5"
                                                )}
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                                <li className="mt-4 border-t border-white/10 pt-4 pb-2 px-2">
                                    <button
                                        className="w-full bg-primary text-[#000000] font-bold py-4 rounded-xl shadow-[0_0_15px_rgba(0,212,170,0.3)] transition-transform active:scale-95"
                                        onClick={() => {
                                            setIsOpen(false);
                                            window.location.href = '/contact';
                                        }}
                                    >
                                        Contact Us →
                                    </button>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
