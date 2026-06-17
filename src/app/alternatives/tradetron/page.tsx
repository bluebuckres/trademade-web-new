import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

const SITE_URL = "https://trademade.in";

export const metadata: Metadata = {
    title: "TradeMade vs Tradetron — Best Tradetron Alternative India 2026",
    description: "Searching for a Tradetron alternative? TradeMade offers production-grade custom algo development, tick-level backtesting, and C++/Rust execution engines — far beyond what Tradetron's no-code automation can offer.",
    keywords: [
        "Tradetron alternative India",
        "Tradetron vs TradeMade",
        "better than Tradetron",
        "Tradetron competitor India",
        "professional algo instead of Tradetron",
        "custom algo development Tradetron alternative",
        "Tradetron backtesting alternative",
    ],
    openGraph: {
        title: "TradeMade vs Tradetron — Custom Algo Development Alternative",
        description: "Why traders switch from Tradetron to TradeMade: real custom code, tick-level backtesting, C++/Rust engines, and full code ownership.",
        url: `${SITE_URL}/alternatives/tradetron`,
    },
    alternates: { canonical: `${SITE_URL}/alternatives/tradetron` },
};

const comparisonData = [
    { feature: "Code Ownership", trademade: "Full source code delivered to you", tradetron: "No code — platform-locked strategy" },
    { feature: "Backtesting Data", trademade: "Tick-level, 10+ years NSE/BSE", tradetron: "Candle-based, basic simulation" },
    { feature: "Strategy Complexity", trademade: "Unlimited custom logic", tradetron: "Limited to marketplace templates" },
    { feature: "Execution Language", trademade: "Python, C++, Rust", tradetron: "Visual rule-builder only" },
    { feature: "Low-Latency HFT", trademade: "Yes — C++/Rust engines", tradetron: "No" },
    { feature: "Multi-Broker Support", trademade: "20+ Indian broker APIs", tradetron: "Select brokers via marketplace" },
    { feature: "AI/Sentiment Integration", trademade: "OpenAI, news feeds, custom LLMs", tradetron: "No" },
    { feature: "NDA & IP Protection", trademade: "Mutual NDA signed before discussion", tradetron: "Strategy shared on marketplace" },
    { feature: "Options Multi-Leg", trademade: "Full multi-leg with Greeks", tradetron: "Basic options support" },
    { feature: "SEBI RA Compliance", trademade: "Purpose-built for SEBI RAs", tradetron: "General use" },
    { feature: "Telegram Integration", trademade: "Full custom Telegram bots", tradetron: "Basic alerts only" },
    { feature: "Support Model", trademade: "Dedicated dev team per project", tradetron: "Community + ticket support" },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the best Tradetron alternative in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "TradeMade is the top Tradetron alternative for traders who need custom algorithm development with full code ownership, tick-level backtesting, and production-grade execution in Python, C++, or Rust. Unlike Tradetron's marketplace model, TradeMade builds bespoke strategies tailored to your exact logic.",
            },
        },
        {
            "@type": "Question",
            name: "How is TradeMade different from Tradetron?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Tradetron is a strategy marketplace and automation platform — you pick from existing templates or build with a visual rule-builder. TradeMade writes fully custom code from scratch based on your unique strategy, delivers full source code ownership, and uses tick-level data for significantly more accurate backtesting.",
            },
        },
        {
            "@type": "Question",
            name: "Can TradeMade migrate my Tradetron strategy?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Share your Tradetron strategy conditions and we will rebuild it in Python with proper tick-level backtesting validation, enhanced error handling, and deployment to your preferred Indian broker. Migration typically takes 3–10 days.",
            },
        },
    ],
};

export default function TradetronAlternativePage() {
    return (
        <div className="flex flex-col w-full overflow-hidden pb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Breadcrumbs items={[
                { name: "Home", href: "/" },
                { name: "Alternatives", href: "/alternatives/tradetron" },
                { name: "TradeMade vs Tradetron", href: "/alternatives/tradetron" },
            ]} />

            <section className="max-w-5xl mx-auto px-6 pt-8 pb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary w-fit mb-6">
                    Tradetron Alternative
                </div>
                <h1 className="font-satoshi text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                    Beyond the Marketplace.<br /><span className="text-primary">Build What You Actually Need.</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-3xl mb-8">
                    Tradetron's marketplace gives you someone else's strategy. TradeMade builds yours — from scratch, in production-grade code,
                    with tick-level backtesting and full source code ownership.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link href="/contact" className="px-8 py-3 rounded-full bg-primary text-[#000000] font-bold text-sm hover:bg-primary-hover transition-colors">
                        Get a Free Consultation
                    </Link>
                    <Link href="/custom-development" className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 text-white font-bold text-sm transition-colors">
                        See Custom Dev Process
                    </Link>
                </div>
            </section>

            <section className="bg-surface border-y border-white/5 py-8 mb-16">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { value: "500+", label: "Algos Delivered" },
                        { value: "100%", label: "Code Ownership" },
                        { value: "20+", label: "Broker APIs" },
                        { value: "Tick-Level", label: "Backtesting Accuracy" },
                    ].map((stat) => (
                        <div key={stat.label}>
                            <div className="text-2xl font-black font-mono text-primary">{stat.value}</div>
                            <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-6 mb-20">
                <h2 className="font-satoshi text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                    TradeMade vs Tradetron — Full Comparison
                </h2>
                <p className="text-slate-400 text-center mb-12">An honest look at what each platform delivers.</p>
                <div className="overflow-x-auto rounded-2xl border border-white/10">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-surface border-b border-white/10">
                                <th className="py-4 px-6 text-left text-slate-400 font-medium text-sm w-1/3">Feature</th>
                                <th className="py-4 px-6 text-center text-primary font-bold">TradeMade</th>
                                <th className="py-4 px-6 text-center text-slate-400 font-medium">Tradetron</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, i) => (
                                <tr key={row.feature} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-surface/30" : ""}`}>
                                    <td className="py-4 px-6 text-slate-300 text-sm font-medium">{row.feature}</td>
                                    <td className="py-4 px-6 text-center"><span className="text-sm text-emerald-400 font-medium">{row.trademade}</span></td>
                                    <td className="py-4 px-6 text-center"><span className="text-sm text-slate-500">{row.tradetron}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-6 mb-20">
                <h2 className="font-satoshi text-3xl font-bold text-white mb-12 text-center">Why Serious Traders Choose TradeMade</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { title: "Your Strategy Stays Yours", body: "Tradetron strategies live on their platform and can be rented to others. TradeMade builds your strategy as private, custom code that you own outright. We sign a mutual NDA before any discussion." },
                        { title: "Backtesting You Can Trust", body: "Tradetron's backtesting uses simplified candle-based simulation. TradeMade uses tick-level data with real impact cost and slippage modeling — results that actually match live performance." },
                        { title: "No Complexity Ceiling", body: "Need a 4-leg iron condor with dynamic delta hedging, Telegram alerts, and a kill switch tied to VIX? Tradetron can't do that. TradeMade codes exactly what you need." },
                        { title: "Python, C++, or Rust — You Choose", body: "For most strategies, Python is ideal. For latency-sensitive execution, we build in C++ or Rust. You get the right tool for your actual requirements." },
                    ].map((item) => (
                        <div key={item.title} className="bg-surface border border-white/5 rounded-2xl p-8 hover:border-primary/20 transition-colors">
                            <CheckCircle size={24} weight="fill" className="text-primary mb-4" />
                            <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-3xl mx-auto px-6 text-center">
                <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-3xl p-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Go Beyond Tradetron?</h2>
                    <p className="text-slate-400 mb-8">Tell us your strategy. We'll quote the build cost and estimated delivery time — no obligation.</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-[#000000] font-bold hover:bg-primary-hover shadow-[0_0_20px_rgba(0,212,170,0.3)] transition-all">
                        Get a Free Quote <ArrowRight weight="bold" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
