import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, ChartLineUp, Code, Robot } from "@phosphor-icons/react/dist/ssr";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

const SITE_URL = "https://trademade.in";

export const metadata: Metadata = {
    title: "Low Latency Trading System Design India | C++, Rust, Python | TradeMade",
    description: "TradeMade builds high-performance, low-latency trading systems for Indian markets. C++ and Rust execution engines, NSE co-location support, sub-millisecond order routing, FIX protocol, and custom HFT infrastructure development.",
    keywords: [
        "low latency trading system India",
        "HFT software development India",
        "high frequency trading infrastructure India",
        "C++ trading engine development",
        "Rust trading system India",
        "trading system design India",
        "NSE colocation trading",
        "exchange colocation India",
        "FIX protocol trading India",
        "order management system India",
        "sub millisecond trading India",
        "latency optimization trading India",
        "quantitative trading infrastructure India",
        "prop desk technology India",
        "algorithmic trading system architecture",
    ],
    openGraph: {
        title: "Low Latency Trading System Design India | C++, Rust | TradeMade",
        description: "Build sub-millisecond trading infrastructure for Indian markets. C++, Rust execution engines, NSE co-location, FIX protocol, and full HFT system design.",
        url: `${SITE_URL}/low-latency-trading`,
    },
    alternates: { canonical: `${SITE_URL}/low-latency-trading` },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            "@id": `${SITE_URL}/low-latency-trading#service`,
            name: "Low Latency Trading System Design",
            description: "Professional design and development of high-performance, low-latency trading infrastructure for Indian markets. Specializing in C++, Rust, and Python execution engines, NSE/BSE co-location, and HFT system architecture.",
            provider: {
                "@type": "Organization",
                name: "TradeMade",
                url: SITE_URL,
            },
            serviceType: "Software Development",
            areaServed: { "@type": "Country", name: "India" },
            hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Low Latency Trading Services",
                itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "C++ Execution Engine Development" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rust Order Management System" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "NSE Co-location Infrastructure" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "FIX Protocol Integration" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Latency Profiling & Optimization" } },
                ],
            },
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is low latency trading and why does it matter in Indian markets?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Low latency trading refers to executing orders in microseconds to milliseconds, faster than standard retail execution. In Indian markets (NSE/BSE), co-located servers can achieve round-trip latencies below 1ms, giving a significant edge in HFT, arbitrage, and market-making strategies. Even for non-HFT strategies, a well-optimized execution engine reduces slippage substantially.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What programming languages do you use for low latency trading systems?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "TradeMade primarily uses C++ for the most latency-sensitive components (order routing, market data processing) and Rust for systems requiring both safety and performance (order management, risk management). Python is used for strategy logic and signal generation where microsecond performance is not critical.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Do you support NSE co-location for HFT?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. We design and configure trading systems for NSE and BSE co-location environments, including server setup, network optimization, kernel bypass techniques, and integration with exchange proximity services.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What is the cost of building a low latency trading system in India?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Costs vary based on complexity — from a single-broker C++ execution engine to a full multi-exchange HFT infrastructure. Contact TradeMade at connect@trademade.in for a custom quote based on your specific latency requirements, order volume, and market scope.",
                    },
                },
            ],
        },
    ],
};

const capabilities = [
    {
        icon: Code,
        title: "C++ Execution Engines",
        description: "Ultra-fast order routing in C++ with custom memory allocators, lock-free queues, and kernel bypass (DPDK/RDMA) for sub-100μs execution.",
        tags: ["C++17/20", "Lock-free", "DPDK", "RDMA"],
    },
    {
        icon: ShieldCheck,
        title: "Rust Order Management",
        description: "Memory-safe, high-performance OMS in Rust. No GC pauses, deterministic latency, and fearless concurrency for multi-strategy execution.",
        tags: ["Rust", "Async Tokio", "Zero-copy", "Safe concurrency"],
    },
    {
        icon: ChartLineUp,
        title: "Market Data Infrastructure",
        description: "High-throughput market data handlers for NSE/BSE tick feeds. Custom parsers for multicast market data with nanosecond timestamping.",
        tags: ["Multicast", "NSE TBT", "BSE BOLT", "Nanosecond TS"],
    },
    {
        icon: Robot,
        title: "NSE/BSE Co-location Setup",
        description: "Server configuration, network tuning, CPU affinity, NUMA optimization, and integration with exchange co-location services for minimal round-trip latency.",
        tags: ["Co-location", "CPU affinity", "NUMA", "Kernel bypass"],
    },
];

export default function LowLatencyTradingPage() {
    return (
        <div className="flex flex-col w-full overflow-hidden pb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Breadcrumbs items={[
                { name: "Home", href: "/" },
                { name: "Low Latency Trading Systems", href: "/low-latency-trading" },
            ]} />

            {/* Hero */}
            <section className="relative w-full pt-12 pb-24 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[60vw] h-[40vw] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10" />
                <div className="max-w-5xl mx-auto px-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary w-fit mb-6">
                        Institutional Grade Infrastructure
                    </div>
                    <h1 className="font-satoshi text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                        Low Latency<br />
                        <span className="text-primary">Trading Systems</span><br />
                        <span className="text-slate-500">Built for India.</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed">
                        We design and build sub-millisecond trading infrastructure for Indian markets — C++ execution engines,
                        Rust order management systems, NSE co-location setups, and HFT strategy development.
                        The same technology stack used by prop desks and quant funds, now available to you.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact" className="px-8 py-4 rounded-full bg-primary text-[#000000] font-bold hover:bg-primary-hover shadow-[0_0_20px_rgba(0,212,170,0.3)] transition-all">
                            Discuss Your Requirements
                        </Link>
                        <Link href="/custom-development" className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 text-white font-bold transition-colors">
                            See All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-surface border-y border-white/5 py-10 mb-20">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { value: "<1ms", label: "Achievable Round-Trip (Co-lo)" },
                        { value: "C++ / Rust", label: "Primary Languages" },
                        { value: "NSE + BSE", label: "Exchange Support" },
                        { value: "FIX Protocol", label: "Industry Standard" },
                    ].map((s) => (
                        <div key={s.label}>
                            <div className="text-2xl font-black font-mono text-primary">{s.value}</div>
                            <div className="text-slate-400 text-sm mt-1">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Capabilities */}
            <section className="max-w-5xl mx-auto px-6 mb-20">
                <h2 className="font-satoshi text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                    What We Build
                </h2>
                <p className="text-slate-400 text-center mb-14 max-w-2xl mx-auto">
                    Every component of your low-latency stack, designed from first principles for Indian market microstructure.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {capabilities.map((cap) => {
                        const Icon = cap.icon;
                        return (
                            <div key={cap.title} className="bg-surface border border-white/5 rounded-2xl p-8 hover:border-primary/20 transition-colors group">
                                <Icon size={32} weight="duotone" className="text-primary mb-5" />
                                <h3 className="text-white font-bold text-xl mb-3">{cap.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-5">{cap.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {cap.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-1 rounded-md bg-white/5 text-xs font-mono text-slate-400 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Why Latency Matters */}
            <section className="max-w-5xl mx-auto px-6 mb-20">
                <div className="bg-surface/50 border border-white/10 rounded-3xl p-10 md:p-16">
                    <h2 className="font-satoshi text-3xl font-bold text-white mb-8">Why Latency Matters in Indian Markets</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-6 text-slate-400 leading-relaxed">
                            <p>
                                NSE's co-location facility allows servers to be physically placed within the exchange premises —
                                reducing round-trip order latency from <strong className="text-white">50–200ms</strong> (retail) to
                                <strong className="text-white"> sub-1ms</strong> (co-lo). For certain strategy types, this is the difference between
                                fill and no fill.
                            </p>
                            <p>
                                Even for non-HFT strategies, a slow execution engine costs money. Every millisecond of slippage
                                on a ₹10L intraday Nifty position can mean <strong className="text-white">₹500–₹2,000 in adverse fills</strong> per trade.
                                At 10 trades per day, that's ₹50,000/month in preventable losses.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { type: "Retail Broker API", latency: "50–300ms", color: "text-red-400" },
                                { type: "Optimised Python Engine", latency: "10–50ms", color: "text-amber-400" },
                                { type: "C++ Direct Market Access", latency: "1–10ms", color: "text-blue-400" },
                                { type: "C++ Co-location (NSE)", latency: "<1ms", color: "text-primary" },
                            ].map((row) => (
                                <div key={row.type} className="flex items-center justify-between bg-white/5 rounded-xl px-5 py-3 border border-white/5">
                                    <span className="text-slate-300 text-sm">{row.type}</span>
                                    <span className={`font-mono font-bold text-sm ${row.color}`}>{row.latency}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="max-w-5xl mx-auto px-6 mb-20">
                <h2 className="font-satoshi text-3xl font-bold text-white mb-12 text-center">Who This Is For</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "Proprietary Trading Desks", body: "Scale to dozens of strategies running simultaneously with microsecond co-ordination. Full risk management, kill switches, and P&L aggregation." },
                        { title: "Statistical Arbitrage Traders", body: "Cross-exchange and cross-instrument arbitrage requires deterministic, low-latency execution. We build the infrastructure that makes it feasible." },
                        { title: "Market Makers", body: "Continuous two-sided quoting demands the fastest possible quote updates. C++ market-making engines with custom spread and inventory logic." },
                    ].map((uc) => (
                        <div key={uc.title} className="bg-surface border border-white/5 rounded-2xl p-8 hover:border-primary/20 transition-colors">
                            <h3 className="text-white font-bold text-lg mb-3">{uc.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{uc.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="max-w-3xl mx-auto px-6 mb-20">
                <h2 className="font-satoshi text-3xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
                <div className="space-y-5">
                    {[
                        { q: "Do I need co-location for low latency trading?", a: "Not necessarily. Co-location gives the lowest possible latency but a well-optimised C++ engine on a good VPS can achieve 5–15ms — sufficient for most non-HFT strategies. We assess your actual latency requirements before recommending infrastructure." },
                        { q: "What is the minimum viable setup for a prop desk?", a: "A dedicated Linux VPS with a C++ or Python execution engine, proper broker API integration, risk management, and monitoring. For co-lo strategies, additionally a rack space application with NSE/BSE and a FIX engine. We scope this precisely based on your strategy." },
                        { q: "Do you build from scratch or use existing frameworks?", a: "We build from scratch for all latency-critical components to avoid hidden overhead from third-party libraries. For non-latency-critical parts (reporting, monitoring), we use proven open-source tools." },
                        { q: "Can you audit my existing trading system for latency?", a: "Yes. We perform latency profiling, hotspot analysis, and provide a detailed optimisation report with specific code changes that will reduce your end-to-end execution time." },
                    ].map((faq) => (
                        <div key={faq.q} className="bg-surface/50 border border-white/5 rounded-xl p-6">
                            <h3 className="text-white font-bold mb-2 text-sm">{faq.q}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-3xl mx-auto px-6 text-center">
                <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-3xl p-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Build Your Low-Latency Edge</h2>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                        Share your latency requirements and strategy type. We'll scope the right architecture and give you a quote.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-[#000000] font-bold hover:bg-primary-hover shadow-[0_0_20px_rgba(0,212,170,0.3)] transition-all">
                        Discuss Your Infrastructure <ArrowRight weight="bold" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
