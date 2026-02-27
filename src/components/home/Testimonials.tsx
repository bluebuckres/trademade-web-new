"use client";

import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { Star, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useRef } from "react";

const testimonials = [
    {
        name: "Raghunath K.",
        role: "Derivatives Trader",
        location: "Chennai",
        text: "I had a short-strangle strategy that 'worked' on free tools. TradeMade's realistic slippage model showed me it would've lost ₹2.1L in 2022. That saved me from a live disaster. Worth every rupee."
    },
    {
        name: "Deepa S.",
        role: "SEBI RA",
        location: "Bengaluru",
        text: "Managing strategies for 30+ clients was becoming unmanageable. The multi-account deployment feature is exactly what the RA community needed. My clients get consistent fills."
    },
    {
        name: "Aman B.",
        role: "Prop Trader",
        location: "Delhi",
        text: "I gave them a rough idea on a WhatsApp voice note. Within 6 days I had a fully coded, backtested Nifty momentum algo running on my Zerodha. The communication was crisp."
    },
    {
        name: "Venkatesh P.",
        role: "Retail Trader",
        location: "Kochi",
        text: "The beta multi-broker feature is a game changer. I run the same iron condor strategy on my account, my brother's account, and my HUF account — all synced effortlessly."
    },
    {
        name: "Priyanka N.",
        role: "Quant Analyst",
        location: "Mumbai",
        text: "Tried 4 other backtesting platforms before TradeMade. The tick-data accuracy and options backtest engine are genuinely institutional quality. Rare to find this in India."
    }
];

export function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 relative bg-background overflow-hidden border-t border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                    <h2 className="font-satoshi text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-tight text-white mb-4">
                        What Our Traders Say
                    </h2>
                    <p className="text-slate-400 max-w-lg text-sm md:text-base leading-relaxed">
                        Don't just take our word for it. Here's what serious algorithmic traders across India think about our platform.
                    </p>
                </div>
                {/* Visible on both mobile and desktop now */}
                <div className="flex gap-3 items-center self-end md:self-auto">
                    <button
                        onClick={() => scroll('left')}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 hover:bg-white/5 flex items-center justify-center transition-colors text-white"
                        aria-label="Previous Testimonial"
                    >
                        <CaretLeft size={20} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 hover:bg-white/5 flex items-center justify-center transition-colors text-white"
                        aria-label="Next Testimonial"
                    >
                        <CaretRight size={20} />
                    </button>
                </div>
            </div>

            <div className="w-full relative px-6 md:px-0">
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto gap-6 hide-scrollbar pb-12 snap-x snap-mandatory px-0 lg:px-[calc((100vw-1400px)/2)] lg:pl-[calc((100vw-1400px)/2+1.5rem)]"
                >
                    {testimonials.map((t, idx) => (
                        <LiquidGlassCard key={idx} className="flex-shrink-0 w-[300px] md:w-[400px] snap-center p-8 bg-surface/40 hover:bg-surface/60 transition-colors cursor-grab active:cursor-grabbing">
                            <div className="flex text-primary mb-6 gap-1">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <Star key={star} weight="fill" size={16} />
                                ))}
                            </div>
                            <p className="text-slate-300 italic leading-relaxed mb-8">
                                "{t.text}"
                            </p>
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-white tracking-widest text-lg">
                                    {t.name.split(' ')[0][0]}{t.name.split(' ')[1][0]}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{t.name}</h4>
                                    <p className="text-sm text-slate-500">{t.role} · {t.location}</p>
                                </div>
                            </div>
                        </LiquidGlassCard>
                    ))}
                </div>

                {/* Gradients to fade edges on desktop */}
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            </div>
        </section>
    );
}
