import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, ChartLineUp, Users, Code } from "@phosphor-icons/react/dist/ssr";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

const SITE_URL = "https://trademade.in";

export const metadata: Metadata = {
    title: "Algo Trading Platform for SEBI Registered Advisors | TradeMade",
    description: "TradeMade builds SEBI-compliant algorithmic trading infrastructure for SEBI Registered Advisors (RAs). Custom strategy coding, backtesting, multi-client execution, Telegram alerts, and full compliance documentation.",
    keywords: [
        "algo trading for SEBI RA",
        "SEBI registered advisor algo platform",
        "algo trading SEBI compliant India",
        "SEBI RA trading automation",
        "registered advisor algo system India",
        "SEBI RA strategy deployment",
        "algo trading for research analysts India",
        "SEBI compliant trading system",
        "algo trading platform SEBI India",
    ],
    openGraph: {
        title: "Algo Trading Platform for SEBI Registered Advisors | TradeMade",
        description: "SEBI-compliant algo infrastructure for RAs — multi-client execution, Telegram alerts, strategy backtesting, and full code ownership.",
        url: `${SITE_URL}/use-cases/sebi-ra`,
    },
    alternates: { canonical: `${SITE_URL}/use-cases/sebi-ra` },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Service",
            name: "Algo Trading Infrastructure for SEBI Registered Advisors",
            description: "SEBI-compliant algorithmic trading systems for registered investment advisors and research analysts in India.",
            provider: { "@type": "Organization", name: "TradeMade", url: SITE_URL },
            serviceType: "Software Development",
            areaServed: { "@type": "Country", name: "India" },
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Can SEBI Registered Advisors use algo trading legally in India?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. SEBI's 2022 circular on algorithmic trading allows registered advisors and research analysts to use automated systems for executing recommendations, subject to specific API registration requirements with their broker. TradeMade builds infrastructure that is specifically designed around these compliance requirements.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How does TradeMade help SEBI RAs execute for multiple clients?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "TradeMade builds multi-account execution systems that can simultaneously place identical orders across dozens of client accounts on different brokers, within milliseconds of each other. Clients provide their own broker API access; the system executes proportionally based on each client's capital allocation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "What documentation does TradeMade provide for SEBI compliance?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "We provide full technical documentation of the system architecture, order logs, audit trails, and execution methodology — sufficient for SEBI compliance audits. We do not provide SEBI registration services; we build the technology that supports your compliance framework.",
                    },
                },
            ],
        },
    ],
};

export default function SEBIRAPage() {
    return (
        <div className="flex flex-col w-full overflow-hidden pb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Breadcrumbs items={[
                { name: "Home", href: "/" },
                { name: "Use Cases", href: "/use-cases/sebi-ra" },
                { name: "SEBI Registered Advisors", href: "/use-cases/sebi-ra" },
            ]} />

            <section className="relative w-full pt-12 pb-24 overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[50vw] h-[40vw] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />
                <div className="max-w-5xl mx-auto px-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary w-fit mb-6">
                        SEBI RA Use Case
                    </div>
                    <h1 className="font-satoshi text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                        Algo Trading for<br />
                        <span className="text-primary">SEBI Registered Advisors</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed">
                        You've got the registered advisory licence and the strategy. TradeMade builds the infrastructure to
                        execute it across all your client accounts simultaneously — compliantly, consistently, and at scale.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact" className="px-8 py-4 rounded-full bg-primary text-[#000000] font-bold hover:bg-primary-hover shadow-[0_0_20px_rgba(0,212,170,0.3)] transition-all">
                            Talk to Our Team
                        </Link>
                        <Link href="/custom-development" className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 text-white font-bold transition-colors">
                            See Custom Dev Process
                        </Link>
                    </div>
                </div>
            </section>

            {/* Problems we solve */}
            <section className="max-w-5xl mx-auto px-6 mb-20">
                <h2 className="font-satoshi text-3xl font-bold text-white mb-12 text-center">
                    The Problems Every SEBI RA Faces
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            problem: "Manual execution for 50+ clients takes 30 minutes",
                            solution: "TradeMade builds a one-click system that executes across all client accounts in seconds",
                            icon: Users,
                        },
                        {
                            problem: "Each client is on a different broker (Zerodha, Upstox, Angel One)",
                            solution: "We integrate all 20+ major Indian broker APIs into a single execution interface",
                            icon: Code,
                        },
                        {
                            problem: "Your backtest shows a strategy works, but you can't trust the numbers",
                            solution: "We run tick-level backtests with real slippage, giving you actual realistic performance metrics",
                            icon: ChartLineUp,
                        },
                        {
                            problem: "SEBI compliance requires audit trails and order logs",
                            solution: "Every execution is logged with timestamps, order IDs, and full audit trail — ready for SEBI review",
                            icon: ShieldCheck,
                        },
                    ].map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.problem} className="bg-surface border border-white/5 rounded-2xl p-8 hover:border-primary/20 transition-colors">
                                <Icon size={28} weight="duotone" className="text-primary mb-4" />
                                <div className="text-red-400/70 text-sm mb-2 font-medium">❌ Problem: {item.problem}</div>
                                <div className="text-emerald-400 text-sm font-medium">✅ TradeMade: {item.solution}</div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* What we build */}
            <section className="max-w-5xl mx-auto px-6 mb-20">
                <h2 className="font-satoshi text-3xl font-bold text-white mb-4 text-center">What We Build for SEBI RAs</h2>
                <p className="text-slate-400 text-center mb-12">A complete technology stack so you can focus on your strategy, not the plumbing.</p>
                <div className="space-y-4">
                    {[
                        { title: "Multi-Client Execution Engine", desc: "Simultaneous order placement across all client accounts on different brokers. Proportional position sizing by client capital." },
                        { title: "Telegram Signal Bot", desc: "WhatsApp or Telegram bot that accepts your signals and automatically fires orders across all enrolled client accounts — no manual intervention." },
                        { title: "Tick-Level Strategy Backtesting", desc: "Validate your strategy on 10 years of NSE/BSE tick data before risking client capital. Full slippage and cost modeling." },
                        { title: "Compliance Audit Trail", desc: "Every order logged with timestamps, broker response codes, client account IDs, and P&L tracking. Exportable reports for SEBI audits." },
                        { title: "Risk Management Layer", desc: "Per-client daily loss limits, position size caps, and automatic halt conditions. Protects you and your clients from runaway algos." },
                        { title: "Client Dashboard (Optional)", desc: "A white-labelled web dashboard showing each client their real-time P&L, trade history, and strategy performance." },
                    ].map((item, i) => (
                        <div key={item.title} className="flex gap-6 bg-surface/50 border border-white/5 rounded-xl p-6 items-start">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                <span className="text-primary text-xs font-mono font-bold">{String(i + 1).padStart(2, "0")}</span>
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-1">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="max-w-3xl mx-auto px-6 mb-20">
                <h2 className="font-satoshi text-3xl font-bold text-white mb-10 text-center">SEBI RA FAQs</h2>
                <div className="space-y-5">
                    {[
                        { q: "Is algo trading legal for SEBI Registered Advisors?", a: "Yes. SEBI's API trading framework allows RAs to use algorithmic execution systems. The key requirement is that orders must pass through your broker's approved API system. TradeMade builds systems that comply with these requirements." },
                        { q: "Do my clients need to share their broker login?", a: "No. Clients generate an API key from their own broker account (Zerodha, Upstox, etc.) and share only that — not login credentials. The key is revocable by them at any time. This is the standard SEBI-compliant approach." },
                        { q: "How many clients can the system handle?", a: "Our systems have been deployed for RAs with 5 to 200+ client accounts. Execution time scales near-linearly; typically all orders across 50 accounts are placed within 3–8 seconds of signal." },
                        { q: "What happens if my strategy produces a loss for clients?", a: "The risk management layer can enforce per-client daily loss limits, auto-squaring positions at a set drawdown. Beyond that, your advisory agreement with clients governs liability — TradeMade provides technology only." },
                    ].map((faq) => (
                        <div key={faq.q} className="bg-surface/50 border border-white/5 rounded-xl p-6">
                            <h3 className="text-white font-bold mb-2">{faq.q}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-3xl mx-auto px-6 text-center">
                <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-3xl p-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Scale Your Advisory?</h2>
                    <p className="text-slate-400 mb-8">Tell us how many clients, which brokers, and what your strategy does. We'll quote a system that handles it all.</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-[#000000] font-bold hover:bg-primary-hover shadow-[0_0_20px_rgba(0,212,170,0.3)] transition-all">
                        Get a Free Consultation <ArrowRight weight="bold" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
