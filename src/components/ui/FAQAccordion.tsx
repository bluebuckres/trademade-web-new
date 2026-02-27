"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "@phosphor-icons/react";
import { LiquidGlassCard } from "./LiquidGlassCard";
import { cn } from "@/lib/utils";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
    className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // first open by default

    return (
        <div className={cn("flex flex-col gap-4 w-full max-w-3xl mx-auto", className)}>
            {items.map((item, idx) => {
                const isOpen = openIndex === idx;

                return (
                    <LiquidGlassCard key={idx} className="p-0 overflow-hidden cursor-pointer bg-surface/30 hover:bg-surface/50 border border-white/5" onClick={() => setOpenIndex(isOpen ? null : idx)}>
                        <div className="flex justify-between items-center p-6 md:p-8">
                            <h3 className="font-satoshi text-lg md:text-xl font-bold text-white pr-8">{item.question}</h3>
                            <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-white/10 transition-colors duration-300", isOpen ? "bg-primary text-[#000000] border-transparent" : "bg-white/5 text-slate-400")}>
                                {isOpen ? <Minus weight="bold" /> : <Plus weight="bold" />}
                            </div>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-slate-400 leading-relaxed border-t border-white/5 mt-4">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </LiquidGlassCard>
                );
            })}
        </div>
    );
}
