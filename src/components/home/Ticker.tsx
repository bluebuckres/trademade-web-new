"use client";

import { motion } from "framer-motion";

const logos = [
    { src: '/logos/5paisa.png', alt: '5paisa' },
    { src: '/logos/NSE-002.webp', alt: 'NSE' },
    { src: '/logos/Telegram_2019_Logo.svg.webp', alt: 'Telegram' },
    { src: '/logos/Why-MCX-is-the-Best-Investment-Opportunity.webp', alt: 'MCX' },
    { src: '/logos/aliceblue.png', alt: 'Alice Blue' },
    { src: '/logos/aws.png', alt: 'AWS' },
    { src: '/logos/bse--600.png', alt: 'BSE' },
    { src: '/logos/c++.png', alt: 'C++' },
    { src: '/logos/flattrade.png', alt: 'Flattrade' },
    { src: '/logos/fyers.png', alt: 'Fyers' },
    { src: '/logos/github.jpeg', alt: 'GitHub' },
    { src: '/logos/grafana.png', alt: 'Grafana' },
    { src: '/logos/groww_logo-freelogovectors.net_.png', alt: 'Groww' },
    { src: '/logos/iifl.jpeg', alt: 'IIFL' },
    { src: '/logos/jainam.png', alt: 'Jainam' },
    { src: '/logos/kotak.png', alt: 'Kotak' },
    { src: '/logos/motilal-oswal-logo_startuptalky.jpg', alt: 'Motilal Oswal' },
    { src: '/logos/python.png', alt: 'Python' },
    { src: '/logos/sasonline.png', alt: 'SAS Online' },
    { src: '/logos/shoonya.jpeg', alt: 'Shoonya' },
    { src: '/logos/upstox-logo-png_seeklogo-435648.png', alt: 'Upstox' },
    { src: '/logos/vscode.jpeg', alt: 'VSCode' },
    { src: '/logos/zebu.jpeg', alt: 'Zebu' },
    { src: '/logos/zerodha6662.jpg', alt: 'Zerodha' },
];

export function Ticker() {
    return (
        <div className="overflow-hidden border-y border-white/5 py-6 bg-surface relative z-10 w-full">
            <div className="flex w-max shrink-0">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    // Increased duration because there are so many logos now.
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="flex gap-8 pr-8 items-center"
                >
                    {/* Double the array for seamless infinite loop */}
                    {[...logos, ...logos].map((logo, i) => (
                        <div
                            key={i}
                            // White pill background to unify transparent PNGs and solid JPEG squares
                            className="flex items-center justify-center shrink-0 bg-white px-5 py-2.5 rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.05)] border border-white/10"
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                // Kept colored by removing grayscale classes. Height constrained to manage space.
                                className="h-8 md:h-10 w-auto object-contain max-w-[120px]"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Fade Edges for smoother entry/exit */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent pointer-events-none z-10" />
        </div>
    );
}
