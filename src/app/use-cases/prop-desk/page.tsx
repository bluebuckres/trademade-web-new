import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChartLineUp, Users, ShieldCheck, Lightning } from "@phosphor-icons/react/dist/ssr";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

const SITE_URL = "https://trademade.in";

export const metadata: Metadata = {
    title: "Multi-Account Trading Infrastructure for Prop Desks | TradeMade",
    description: "TradeMade builds multi-account algo trading infrastructure for Indian prop trading desks — scale to 50+ accounts, multi-broker execution, real-time P&L aggregation, risk management, and full co-location support.",
    keywords: [
        "prop trading desk technology India",
        "multi account trading India",
        "proprietary trading infrastructure India",
        "prop desk algo trading system",
        "multi account execution India",
        "prop trading software India",
        "HFT prop desk India",
        "prop trading technology provider India",
        "trading desk automation India",
        "multi broker prop desk India",
    ],
    openGraph: {
        title: "Prop Trading Desk Infrastructure | Multi-Account Algo Trading | TradeMade",
        description: "Scale your prop desk to 50+ accounts with custom multi-account execution, risk management, and real-time P&L aggregation built for Indian brokers.",
        url: `${SITE_URL}/use-cases/prop-desk`,
    },
    alternates: { canonical: `${SITE_URL}/use-cases/prop-desk` },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            name: "Prop Trading Desk Infrastructure",
            description: "Multi-account algo trading infrastructure for Indian proprietary trading desks. Scalable execution, risk management, and P&L aggregation.",
            provider: { "@type": "Organization", name: "TradeMade", url: SITE_URL },
            serviceType: "Software Development",
            areaServed: { "@type": "Country", name: "India" },
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "How many accounts can TradeMade's system handle for a prop desk?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "TradeMade has built systems deployed across 5 to 200+ accounts simultaneously. Execution time scales efficiently — orders across 50 accounts typically complete within 3–8 seconds of signal generation. For latency-critical strategies, we use parallel async execution to minimize spread across accounts.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What risk management features does TradeMade build for prop desks?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Our prop desk systems include per-account and portfolio-level daily loss limits, maximum position size caps, automatic position squaring at drawdown thresholds, strategy-level kill switches, and real-time exposure monitoring across all accounts simultaneously.",
                    },
                },
            ],
        },
    ],
};

export default function PropDeskPage() {
    return (
        <div className="flex flex-col w-full overflow-hidden pb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Breadcrumbs items={[
                { name: "Home", href: "/" },
                { name: "Use Cases", href: "/use-cases/prop-desk" },
                { name: "Prop Trading Desks", href: "/use-cases/prop-desk" },
            ]} />

            <section className="relative w-full pt-12 pb-24 overflow-hidden">
                <div className="absolute top-0 left-1/3 w-[60vw] h-[40vw] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />
                <div className="max-w-5xl mx-auto px-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary w-fit mb-6">
                        Prop Desk Use Case
                    </div>
                    <h1 className="font-satoshi text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                        Scale Your Prop Desk<br />
                        <span className="text-primary">Without Adding Headcount</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed">
                        TradeMade builds the multi-account execution infrastructure that lets one trader manage 50+ accounts
                        simultaneously — with real-time risk management, P&L aggregation, and broker-level execution across
                        the entire Indian market.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact" className="px-8 py-4 rounded-full bg-primary text-[#000000] font-bold hover:bg-primary-hover shadow-[0_0_20px_rgba(0,212,170,0.3)] transition-all">
                            Talk to Our Team
                        </Link>
                        <Link href="/low-latency-trading" className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 text-white font-bold transition-colors">
                            Low-Latency Options
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-surface border-y border-white/5 py-10 mb-20">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { value: "50+", label: "Max Accounts Supported" },
                        { value: "<8s", label: "Cross-Account Execution" },
                        { value: "20+", label: "Broker APIs" },
                        { value: "Real-Time", label: "Portfolio P&L" },
                    ].map((s) => (
                        <div key={s.label}>
                            <div className="text-2xl font-black font-mono text-primary">{s.value}</div>
                            <div className="text-slate-400 text-sm mt-1">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-6 mb-20">
                <h2 className="font-satoshi text-3xl font-bold text-white mb-12 text-center">Built for Prop Desk Scale</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { icon: Lightning, title: "Parallel Multi-Account Execution", body: "All 50+ accounts receive orders in parallel, within seconds of each other. No sequential loops — true async execution across broker APIs with configurable retry logic." },
                        { icon: ShieldCheck, title: "Portfolio-Level Risk Management", body: "Set daily loss limits, max drawdown, position caps, and exposure limits at both individual account and portfolio level. Automatic halt with configurable triggers." },
                        { icon: ChartLineUp, title: "Aggregated P&L Dashboard", body: "Real-time view of all account P&Ls, positions, and strategy performance aggregated into one view. Export for fund accounting." },
                        { icon: Users, title: "Multi-Broker Architecture", body: "Your traders may be on Zerodha, Upstox, Angel One, or 17+ other brokers simultaneously. We handle authentication, rate limits, and failover for each." },
                    ].map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.title} className="bg-surface border border-white/5 rounded-2xl p-8 hover:border-primary/20 transition-colors">
                                <Icon size={28} weight="duotone" className="text-primary mb-4" />
                                <h3 className="text-white font-bold text-lg mb-3">{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-6 mb-20">
                <h2 className="font-satoshi text-3xl font-bold text-white mb-4 text-center">Case Study Snapshot</h2>
                <div className="bg-surface/50 border border-primary/20 rounded-3xl p-10">
                    <p className="text-xs font-mono text-primary uppercase tracking-widest mb-6">Real client (anonymised)</p>
                    <blockquote className="text-xl text-slate-300 leading-relaxed mb-8 italic">
                        "We went from manually placing orders across 23 client accounts (taking 40 minutes per signal) to a
                        system that fires simultaneously across all 23 in under 5 seconds. We then scaled to 60 accounts without
                        changing the infrastructure."
                    </blockquote>
                    <div className="grid grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-black font-mono text-primary">60+</div>
                            <div className="text-slate-400 text-sm">Client Accounts</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black font-mono text-primary">40min → 5s</div>
                            <div className="text-slate-400 text-sm">Execution Time</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black font-mono text-primary">3</div>
                            <div className="text-slate-400 text-sm">Brokers Integrated</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-3xl mx-auto px-6 text-center">
                <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-3xl p-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Scale Your Prop Desk Today</h2>
                    <p className="text-slate-400 mb-8">Tell us your account count, strategy type, and current bottleneck. We'll design the right infrastructure.</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-[#000000] font-bold hover:bg-primary-hover shadow-[0_0_20px_rgba(0,212,170,0.3)] transition-all">
                        Get a Custom Quote <ArrowRight weight="bold" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
