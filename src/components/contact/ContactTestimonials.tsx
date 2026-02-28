"use client";

import { LiquidGlassCard } from "@/components/ui/LiquidGlassCard";
import { Star, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useRef } from "react";

const testimonials = [
    {
        name: "Srinivasan Iyer",
        role: "Options Trader",
        location: "Chennai",
        ethnicity: "Tamil",
        text: "The tick-by-tick backtesting engine is phenomenal. Replicating my Iron Condor strategies with real slippage saved my capital. Romba nandri TradeMade team!"
    },
    {
        name: "Patel Bhavin",
        role: "Prop Desk Trader",
        location: "Ahmedabad",
        ethnicity: "Gujarati",
        text: "We wanted a custom algo for our swing trading setup. The team built it in Python within a week. First-class support and very transparent pricing and deployment. Saru che!"
    },
    {
        name: "Mohammed Tariq",
        role: "Retail Investor",
        location: "Kochi",
        ethnicity: "Malayali",
        text: "Adipoli experience! The multi-broker AI alignment lets me run my strategy on Zerodha and my wife's Upstox account simultaneously without any manual intervention. Superb tech."
    },
    {
        name: "Harpreet Singh",
        role: "Quant Developer",
        location: "Chandigarh",
        ethnicity: "Punjabi",
        text: "Top-notch Python API integration. Sent them a complex multi-leg strategy idea on WhatsApp and they coded it flawlessly. Sirra kaam kita bai!"
    },
    {
        name: "Neha Rathi",
        role: "SEBI Registered Analyst",
        location: "Jaipur",
        ethnicity: "Marwari",
        text: "Managing accounts for 20+ clients manually was a nightmare. TradeMade's multi-account deployment automated the entire execution for my clients. Ekdum badhiya!"
    },
    {
        name: "Arindam Chatterjee",
        role: "Systematic Trader",
        location: "Kolkata",
        ethnicity: "Bengali",
        text: "Their walk-forward optimization really opened my eyes. Stopped curve-fitting my models and started seeing actual consistent results. Darun service."
    }
];

export function ContactTestimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 relative bg-surface overflow-hidden border-t border-white/5">
            <div className="absolute top-0 right-1/4 w-[30vw] h-[30vw] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen opacity-50" />

            <div className="max-w-[1400px] mx-auto px-6 mb-12 flex flex-col items-center text-center gap-6">
                <div>
                    <h2 className="font-satoshi text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                        Trusted Across India
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        From Prop Desks in Ahmedabad to Quant Analysts in Chennai, serious algorithmic traders trust TradeMade for precision, privacy, and performance.
                    </p>
                </div>

                <div className="flex gap-3 items-center mt-4">
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
                        <LiquidGlassCard key={idx} className="flex-shrink-0 w-[300px] md:w-[420px] snap-center p-8 bg-background/60 hover:bg-background/80 transition-colors cursor-grab active:cursor-grabbing border-white/10">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex text-[#FFB800] gap-1">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <Star key={star} weight="fill" size={16} />
                                    ))}
                                </div>
                                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-[#34A853]">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                    </svg>
                                    Google Review
                                </div>
                            </div>

                            <p className="text-slate-300 italic leading-relaxed mb-8 min-h-[100px]">
                                &quot;{t.text}&quot;
                            </p>

                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary tracking-widest text-lg">
                                    {t.name.split(' ')[0][0]}{t.name.split(' ')[1][0]}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold tracking-wide">{t.name}</h4>
                                    <p className="text-sm text-slate-500">{t.role} · {t.location}</p>
                                </div>
                            </div>
                        </LiquidGlassCard>
                    ))}
                </div>

                {/* Gradients to fade edges on desktop */}
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[10%] bg-gradient-to-r from-surface to-transparent pointer-events-none" />
                <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[10%] bg-gradient-to-l from-surface to-transparent pointer-events-none" />
            </div>
        </section>
    );
}
