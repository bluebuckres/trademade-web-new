import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

const SITE_URL = "https://trademade.in";

export const metadata: Metadata = {
    title: "TradeMade vs AlgoTest — Best AlgoTest Alternative for Indian Traders",
    description: "Looking for an AlgoTest alternative? TradeMade offers custom algorithm development, tick-level NSE/BSE backtesting, and full code ownership — not just a testing interface.",
    keywords: [
        "AlgoTest alternative India",
        "AlgoTest vs TradeMade",
        "better than AlgoTest",
        "AlgoTest competitor",
        "custom algo instead of AlgoTest",
        "professional backtesting AlgoTest alternative",
        "options backtesting better than AlgoTest",
    ],
    openGraph: {
        title: "TradeMade vs AlgoTest — Professional Custom Algo Alternative",
        description: "Beyond backtesting: TradeMade builds your strategy with custom code, tick-level data, and full deployment to Indian brokers.",
        url: `${SITE_URL}/alternatives/algotest`,
    },
    alternates: { canonical: `${SITE_URL}/alternatives/algotest` },
};

const comparisonData = [
    { feature: "Primary Function", trademade: "Custom dev + backtesting + deployment", algotest: "Backtesting interface only" },
    { feature: "Live Deployment", trademade: "Full live deployment to 20+ brokers", algotest: "Limited live trading support" },
    { feature: "Custom Code", trademade: "Python, C++, Rust — fully custom", algotest: "No custom code — web interface" },
    { feature: "Code Ownership", trademade: "100% yours after project", algotest: "No code to own" },
    { feature: "Options Backtesting", trademade: "Tick-level, Greeks, multi-leg", algotest: "Good options interface" },
    { feature: "Equity Intraday", trademade: "Full support with real impact cost", algotest: "Supported" },
    { feature: "Low-Latency HFT", trademade: "C++/Rust engines for HFT", algotest: "Not applicable" },
    { feature: "Telegram Bots", trademade: "Custom Telegram signal bots", algotest: "No" },
    { feature: "Multi-Account Execution", trademade: "Prop desk scale, 50+ accounts", algotest: "No" },
    { feature: "AI Integration", trademade: "OpenAI/LLM, sentiment analysis", algotest: "No" },
    { feature: "SEBI RA Support", trademade: "Purpose-built for SEBI RAs", algotest: "General use" },
    { feature: "NDA Protection", trademade: "Mutual NDA for all clients", algotest: "Not applicable" },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the best AlgoTest alternative in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "TradeMade is the leading AlgoTest alternative for traders who need more than just a backtesting UI — custom algorithm development in Python/C++/Rust, live deployment to Indian brokers, and full code ownership. AlgoTest is a backtesting interface; TradeMade is a full-service algo development partner.",
            },
        },
        {
            "@type": "Question",
            name: "Can TradeMade do the same options backtesting as AlgoTest?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes and more. TradeMade performs tick-level options backtesting with real Greeks computation, dynamic strike selection, multi-leg strategies, and real impact cost modeling. We also deploy the strategy live to your broker — AlgoTest stops at the testing phase.",
            },
        },
    ],
};

export default function AlgoTestAlternativePage() {
    return (
        <div className="flex flex-col w-full overflow-hidden pb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Breadcrumbs items={[
                { name: "Home", href: "/" },
                { name: "Alternatives", href: "/alternatives/algotest" },
                { name: "TradeMade vs AlgoTest", href: "/alternatives/algotest" },
            ]} />

            <section className="max-w-5xl mx-auto px-6 pt-8 pb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary w-fit mb-6">
                    AlgoTest Alternative
                </div>
                <h1 className="font-satoshi text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                    Test It. Build It. <br /><span className="text-primary">Deploy It. Own It.</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-3xl mb-8">
                    AlgoTest helps you validate ideas. TradeMade takes you from validated idea to live, production-grade algorithm
                    running on your broker — with full custom code you own forever.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link href="/contact" className="px-8 py-3 rounded-full bg-primary text-[#000000] font-bold text-sm hover:bg-primary-hover transition-colors">
                        Get a Free Consultation
                    </Link>
                    <Link href="/backtesting" className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 text-white font-bold text-sm transition-colors">
                        See Our Backtesting
                    </Link>
                </div>
            </section>

            <section className="bg-surface border-y border-white/5 py-8 mb-16">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { value: "Tick-Level", label: "Data Precision" },
                        { value: "500+", label: "Strategies Built" },
                        { value: "End-to-End", label: "Test → Deploy" },
                        { value: "20+", label: "Indian Brokers" },
                    ].map((stat) => (
                        <div key={stat.label}>
                            <div className="text-2xl font-black font-mono text-primary">{stat.value}</div>
                            <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-6 mb-20">
                <h2 className="font-satoshi text-3xl md:text-4xl font-bold text-white mb-4 text-center">TradeMade vs AlgoTest</h2>
                <p className="text-slate-400 text-center mb-12">One stops at testing. The other takes you all the way to live trading.</p>
                <div className="overflow-x-auto rounded-2xl border border-white/10">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-surface border-b border-white/10">
                                <th className="py-4 px-6 text-left text-slate-400 font-medium text-sm w-1/3">Feature</th>
                                <th className="py-4 px-6 text-center text-primary font-bold">TradeMade</th>
                                <th className="py-4 px-6 text-center text-slate-400 font-medium">AlgoTest</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, i) => (
                                <tr key={row.feature} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-surface/30" : ""}`}>
                                    <td className="py-4 px-6 text-slate-300 text-sm font-medium">{row.feature}</td>
                                    <td className="py-4 px-6 text-center"><span className="text-sm text-emerald-400 font-medium">{row.trademade}</span></td>
                                    <td className="py-4 px-6 text-center"><span className="text-sm text-slate-500">{row.algotest}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-6 mb-20">
                <h2 className="font-satoshi text-3xl font-bold text-white mb-12 text-center">From Strategy to Live — Without the Gap</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { step: "01", title: "Backtest with Real Data", body: "Tick-level NSE/BSE data. Real slippage, real brokerage, real impact costs. No inflated results." },
                        { step: "02", title: "We Build the Algo", body: "Once validated, our team codes it in Python (or C++/Rust for HFT). You describe it; we build it." },
                        { step: "03", title: "Deploy to Your Broker", body: "Live on Zerodha, Upstox, Angel One or any of 20+ Indian brokers. You own the code and run it yourself." },
                    ].map((item) => (
                        <div key={item.step} className="bg-surface border border-white/5 rounded-2xl p-8">
                            <div className="text-5xl font-black font-mono text-primary/20 mb-4">{item.step}</div>
                            <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-3xl mx-auto px-6 text-center">
                <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-3xl p-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Go Beyond AlgoTest?</h2>
                    <p className="text-slate-400 mb-8">Book a free call. We'll show you how to go from backtested idea to live deployment in days.</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-[#000000] font-bold hover:bg-primary-hover shadow-[0_0_20px_rgba(0,212,170,0.3)] transition-all">
                        Book a Free Call <ArrowRight weight="bold" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
