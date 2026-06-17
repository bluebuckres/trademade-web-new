import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, XCircle, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

const SITE_URL = "https://trademade.in";

export const metadata: Metadata = {
    title: "TradeMade vs Streak — Best Streak Alternative for Serious Traders",
    description: "Looking for a Streak alternative? TradeMade offers tick-level backtesting, custom Python/C++/Rust development, and institutional-grade execution that Streak can't match. Compare now.",
    keywords: [
        "Streak alternative India",
        "Streak vs TradeMade",
        "better than Streak algo trading",
        "Streak backtesting alternative",
        "Streak competitor India",
        "professional algo trading instead of Streak",
        "custom algo development Streak alternative",
    ],
    openGraph: {
        title: "TradeMade vs Streak — The Best Streak Alternative for Indian Traders",
        description: "Why serious traders are switching from Streak to TradeMade: tick-level backtesting, C++/Rust execution, and custom code ownership.",
        url: `${SITE_URL}/alternatives/streak`,
    },
    alternates: { canonical: `${SITE_URL}/alternatives/streak` },
};

const comparisonData = [
    { feature: "Backtesting Data Quality", trademade: "Tick-level data (real fills)", streak: "OHLC candle data (approximated)" },
    { feature: "Slippage Modeling", trademade: "Impact cost + order book depth", streak: "Fixed % approximation" },
    { feature: "Custom Code Ownership", trademade: "Full source code handover", streak: "No code access (black box)" },
    { feature: "Strategy Complexity", trademade: "Unlimited — any custom logic", streak: "Limited by UI drag-and-drop" },
    { feature: "Languages Supported", trademade: "Python, C++, Rust, Pine Script", streak: "No custom code" },
    { feature: "Low-Latency HFT Support", trademade: "Yes — C++/Rust engines", streak: "No" },
    { feature: "Multi-Account Execution", trademade: "Yes — prop desk scale", streak: "Limited" },
    { feature: "Options Strategy Support", trademade: "Full multi-leg, Greeks, expiry", streak: "Basic options" },
    { feature: "NDA Protection", trademade: "Mutual NDA signed", streak: "Not applicable" },
    { feature: "Pricing Model", trademade: "Per-project custom quote", streak: "Monthly subscription" },
    { feature: "SEBI RA Compliance", trademade: "Built for SEBI RAs", streak: "General traders" },
    { feature: "AI/LLM Integration", trademade: "OpenAI, news sentiment, custom", streak: "No" },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is the best Streak alternative in India?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "TradeMade is the leading Streak alternative for traders who need custom algorithm development, tick-level backtesting, and production-grade code ownership. Unlike Streak's no-code UI, TradeMade builds fully custom strategies in Python, C++, and Rust with real slippage modeling.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Why switch from Streak to TradeMade?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Streak is a no-code tool limited by its UI builder. TradeMade writes production-grade custom code, uses tick-level backtesting data (not OHLC candles), handles complex multi-leg options strategies, and gives you full source code ownership. Streak's backtests can overestimate profitability by 20–40% due to simplified fill assumptions.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is TradeMade more expensive than Streak?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "TradeMade charges per-project for custom development (no monthly subscription lock-in), and you own the code forever. Streak charges a monthly subscription for a no-code tool where you never own the strategy code. For serious traders, TradeMade is the higher-ROI choice.",
                    },
                },
            ],
        },
        {
            "@type": "WebPage",
            "@id": `${SITE_URL}/alternatives/streak`,
            name: "TradeMade vs Streak",
            url: `${SITE_URL}/alternatives/streak`,
            description: "Detailed comparison between TradeMade and Streak for algorithmic trading in India",
            breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                    { "@type": "ListItem", position: 2, name: "Alternatives", item: `${SITE_URL}/alternatives` },
                    { "@type": "ListItem", position: 3, name: "TradeMade vs Streak" },
                ],
            },
        },
    ],
};

export default function StreakAlternativePage() {
    return (
        <div className="flex flex-col w-full overflow-hidden pb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Breadcrumbs items={[
                { name: "Home", href: "/" },
                { name: "Alternatives", href: "/alternatives/streak" },
                { name: "TradeMade vs Streak", href: "/alternatives/streak" },
            ]} />

            {/* Hero */}
            <section className="max-w-5xl mx-auto px-6 pt-8 pb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary w-fit mb-6">
                    Streak Alternative
                </div>
                <h1 className="font-satoshi text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                    The Streak Alternative <br /><span className="text-primary">Built for Serious Traders</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-3xl mb-8">
                    Streak is great for beginners. But when your strategy outgrows drag-and-drop — when you need real tick data,
                    custom code you actually own, and execution that handles complexity — traders move to TradeMade.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link href="/contact" className="px-8 py-3 rounded-full bg-primary text-[#000000] font-bold text-sm hover:bg-primary-hover transition-colors">
                        Get a Free Consultation
                    </Link>
                    <Link href="/backtesting" className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 text-white font-bold text-sm transition-colors">
                        Try Free Backtesting
                    </Link>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-surface border-y border-white/5 py-8 mb-16">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { value: "2,100+", label: "Traders Served" },
                        { value: "500+", label: "Algos Delivered" },
                        { value: "20+", label: "Broker APIs" },
                        { value: "Tick-Level", label: "Backtesting Data" },
                    ].map((stat) => (
                        <div key={stat.label}>
                            <div className="text-2xl font-black font-mono text-primary">{stat.value}</div>
                            <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Comparison Table */}
            <section className="max-w-5xl mx-auto px-6 mb-20">
                <h2 className="font-satoshi text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                    TradeMade vs Streak — Full Comparison
                </h2>
                <p className="text-slate-400 text-center mb-12">A fair, detailed breakdown of what each platform actually offers.</p>

                <div className="overflow-x-auto rounded-2xl border border-white/10">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-surface border-b border-white/10">
                                <th className="py-4 px-6 text-left text-slate-400 font-medium text-sm w-1/3">Feature</th>
                                <th className="py-4 px-6 text-center text-primary font-bold">TradeMade</th>
                                <th className="py-4 px-6 text-center text-slate-400 font-medium">Streak</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, i) => (
                                <tr key={row.feature} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-surface/30" : ""}`}>
                                    <td className="py-4 px-6 text-slate-300 text-sm font-medium">{row.feature}</td>
                                    <td className="py-4 px-6 text-center">
                                        <span className="text-sm text-emerald-400 font-medium">{row.trademade}</span>
                                    </td>
                                    <td className="py-4 px-6 text-center">
                                        <span className="text-sm text-slate-500">{row.streak}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Key Differences */}
            <section className="max-w-5xl mx-auto px-6 mb-20">
                <h2 className="font-satoshi text-3xl font-bold text-white mb-12 text-center">Why Traders Leave Streak for TradeMade</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            title: "Your Backtest Results Are More Honest",
                            body: "Streak uses OHLC candle data and simplified fill assumptions. TradeMade uses actual tick data with impact cost modeling — the difference in P&L estimates can be 20–40%. Stop deploying strategies based on inflated backtest numbers.",
                        },
                        {
                            title: "You Actually Own Your Strategy Code",
                            body: "With Streak, your strategy lives on their platform. If they shut down, raise prices, or change their API — you lose your edge. TradeMade delivers full source code to you. It runs wherever you want.",
                        },
                        {
                            title: "No Strategy Complexity Ceiling",
                            body: "Streak's UI builder limits what you can express. Multi-leg options, conditional routing, AI sentiment triggers, custom data feeds, co-location setups — these require real code. That's what we write.",
                        },
                        {
                            title: "Built for Your Specific Broker Setup",
                            body: "We integrate with 20+ Indian broker APIs at the code level — Zerodha Kite, Upstox v2, Angel One SmartAPI, Shoonya, FYERS, Dhan, and more. We handle authentication refreshes, rate limits, and failover logic.",
                        },
                    ].map((item) => (
                        <div key={item.title} className="bg-surface border border-white/5 rounded-2xl p-8 hover:border-primary/20 transition-colors">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                                <CheckCircle size={20} weight="fill" className="text-primary" />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="max-w-3xl mx-auto px-6 mb-20">
                <h2 className="font-satoshi text-3xl font-bold text-white mb-10 text-center">Common Questions</h2>
                <div className="space-y-6">
                    {[
                        {
                            q: "I'm already using Streak. How easy is it to migrate to TradeMade?",
                            a: "Share your Streak strategy conditions with us. We'll reproduce and enhance them in Python with proper tick-level backtesting, then deploy to your existing broker. Most migrations take 3–7 days.",
                        },
                        {
                            q: "Is TradeMade only for expert traders?",
                            a: "No. We work with traders of all backgrounds. If you understand what your strategy should do (entry, exit, position sizing), we handle all the technical implementation. No coding knowledge required.",
                        },
                        {
                            q: "Can TradeMade handle the same broker integrations as Streak?",
                            a: "Yes, and more. We support Zerodha, Upstox, Angel One, and 17+ additional Indian brokers at the API level — with custom error handling, token refresh, and multi-account support.",
                        },
                    ].map((faq) => (
                        <div key={faq.q} className="bg-surface/50 border border-white/5 rounded-xl p-6">
                            <h3 className="text-white font-bold mb-3">{faq.q}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-3xl mx-auto px-6 text-center">
                <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-3xl p-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Switch from Streak?</h2>
                    <p className="text-slate-400 mb-8">Book a free 15-minute call. Bring your Streak strategy — we'll show you what's possible with real custom development.</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-[#000000] font-bold hover:bg-primary-hover shadow-[0_0_20px_rgba(0,212,170,0.3)] transition-all">
                        Book a Free Call <ArrowRight weight="bold" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
