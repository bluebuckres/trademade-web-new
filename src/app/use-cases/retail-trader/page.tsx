import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

const SITE_URL = "https://trademade.in";

export const metadata: Metadata = {
    title: "Algo Trading for Retail Traders — No Coding Required | TradeMade",
    description: "Automate your trading strategy without writing a single line of code. TradeMade's team builds your algo from your description, backtests it with real data, and deploys to Zerodha, Upstox, or Angel One.",
    keywords: [
        "algo trading for retail traders India",
        "trading automation no coding India",
        "automate trading strategy India",
        "algo trading for beginners India",
        "trading bot without coding India",
        "automated trading strategy India",
        "how to automate trading India",
        "trading bot for retail investor India",
        "non technical algo trading India",
        "trading automation India beginner",
    ],
    openGraph: {
        title: "Algo Trading for Retail Traders — No Coding Required | TradeMade",
        description: "Describe your strategy in plain English. We code it, backtest it, and deploy it to your broker. No programming skills needed.",
        url: `${SITE_URL}/use-cases/retail-trader`,
    },
    alternates: { canonical: `${SITE_URL}/use-cases/retail-trader` },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Can I get an algo trading bot without knowing how to code?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. TradeMade builds custom trading algorithms based on your strategy description in plain English. You describe the entry conditions, exit conditions, and risk rules — our developers write the code, backtest it, and deploy it to your broker. No programming knowledge required.",
            },
        },
        {
            "@type": "Question",
            name: "How much does it cost to get a custom algo built in India?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Costs vary by strategy complexity. Simple single-leg equity strategies start from a modest one-time development fee. Complex multi-leg options strategies with Telegram integration cost more. TradeMade provides a custom quote after a free 15-minute scoping call. Contact us at connect@trademade.in.",
            },
        },
        {
            "@type": "Question",
            name: "Which brokers does TradeMade support for retail traders?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "TradeMade supports Zerodha (Kite), Upstox, Angel One, Shoonya, FYERS, Dhan, Alice Blue, and 13+ other Indian retail brokers. Your algo runs directly through your existing broker account using its official API.",
            },
        },
    ],
};

const steps = [
    { num: "01", title: "Describe Your Strategy", body: "Tell us in plain language: when do you buy, when do you sell, how much to invest, and what your risk rules are. No technical jargon needed." },
    { num: "02", title: "We Scope & Quote", body: "Our team reviews your strategy in a free 15-minute call and gives you a fixed-price quote with delivery timeline." },
    { num: "03", title: "Backtest With Real Data", body: "Before writing any live code, we backtest your strategy on 5–10 years of tick-level NSE/BSE data. You see realistic P&L, drawdown, and win rate." },
    { num: "04", title: "We Code It Professionally", body: "Our developers write production-grade Python code — not fragile scripts. Full error handling, logging, and automatic restart on broker API disconnects." },
    { num: "05", title: "Deploy to Your Broker", body: "You connect your existing Zerodha / Upstox / Angel One account. The algo runs on a cloud server 24/7 and you get daily Telegram notifications." },
    { num: "06", title: "You Own the Code", body: "After delivery, the full source code belongs to you. Run it, modify it, or have any developer maintain it. No lock-in." },
];

export default function RetailTraderPage() {
    return (
        <div className="flex flex-col w-full overflow-hidden pb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Breadcrumbs items={[
                { name: "Home", href: "/" },
                { name: "Use Cases", href: "/use-cases/retail-trader" },
                { name: "Retail Traders", href: "/use-cases/retail-trader" },
            ]} />

            <section className="relative w-full pt-12 pb-24 overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[50vw] h-[40vw] bg-primary/10 blur-[150px] rounded-full pointer-events-none -z-10" />
                <div className="max-w-5xl mx-auto px-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary w-fit mb-6">
                        For Retail Traders
                    </div>
                    <h1 className="font-satoshi text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
                        Automate Your Trading<br />
                        <span className="text-primary">Without Writing Code</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mb-10 leading-relaxed">
                        You have a strategy that works — but executing it manually is exhausting, error-prone, and misses signals.
                        TradeMade builds your custom algo from your description, tests it on real historical data, and deploys it to your broker.
                        No programming. No guesswork.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact" className="px-8 py-4 rounded-full bg-primary text-[#000000] font-bold hover:bg-primary-hover shadow-[0_0_20px_rgba(0,212,170,0.3)] transition-all">
                            Get Your Free Quote
                        </Link>
                        <Link href="/blog/what-is-algorithmic-trading" className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 text-white font-bold transition-colors">
                            Learn About Algo Trading
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-surface border-y border-white/5 py-10 mb-20">
                <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { value: "2,100+", label: "Traders Automated" },
                        { value: "0", label: "Coding Required" },
                        { value: "7–21", label: "Days to Delivery" },
                        { value: "20+", label: "Indian Brokers" },
                    ].map((s) => (
                        <div key={s.label}>
                            <div className="text-2xl font-black font-mono text-primary">{s.value}</div>
                            <div className="text-slate-400 text-sm mt-1">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process */}
            <section className="max-w-5xl mx-auto px-6 mb-20">
                <h2 className="font-satoshi text-3xl font-bold text-white mb-4 text-center">How It Works — Start to Live in Days</h2>
                <p className="text-slate-400 text-center mb-14 max-w-2xl mx-auto">A simple, transparent process from strategy idea to live automated trading.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {steps.map((step) => (
                        <div key={step.num} className="flex gap-5 bg-surface/50 border border-white/5 rounded-xl p-6">
                            <div className="text-3xl font-black font-mono text-primary/25 shrink-0 w-10">{step.num}</div>
                            <div>
                                <h3 className="text-white font-bold mb-2">{step.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{step.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* What strategies */}
            <section className="max-w-5xl mx-auto px-6 mb-20">
                <h2 className="font-satoshi text-3xl font-bold text-white mb-12 text-center">What Kind of Strategies Do We Build?</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        "MACD / RSI based entry-exit",
                        "Opening range breakout",
                        "Options buying — straddle/strangle",
                        "Options selling — Iron Condor",
                        "EMA crossover with ATR stop",
                        "Price action setups",
                        "Multi-leg spreads",
                        "Momentum strategies",
                        "Mean reversion intraday",
                        "Gap up/down strategies",
                        "Supertrend based systems",
                        "Custom indicator combos",
                    ].map((item) => (
                        <div key={item} className="flex items-center gap-2 bg-surface/50 border border-white/5 rounded-xl p-4 text-sm text-slate-300">
                            <span className="text-primary text-base">✓</span> {item}
                        </div>
                    ))}
                </div>
            </section>

            {/* Trust */}
            <section className="max-w-5xl mx-auto px-6 mb-20">
                <div className="bg-surface/50 border border-white/10 rounded-3xl p-10">
                    <h2 className="font-satoshi text-2xl font-bold text-white mb-8 text-center">What Real Traders Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { quote: "I described my 5-year manual strategy over a WhatsApp call. Within 2 weeks I had a fully working algo on Zerodha. Now it runs while I sleep.", name: "Equity trader, Mumbai" },
                            { quote: "I was sceptical — thought I'd need to learn Python. But I literally just explained my setup in plain English and the team built exactly what I wanted.", name: "Options trader, Pune" },
                        ].map((t) => (
                            <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <p className="text-slate-300 text-sm leading-relaxed mb-4 italic">"{t.quote}"</p>
                                <p className="text-slate-500 text-xs font-mono">— {t.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-3xl mx-auto px-6 text-center">
                <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-3xl p-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Start Automating Today</h2>
                    <p className="text-slate-400 mb-8">Book a free 15-minute call. Describe your strategy. Get a fixed-price quote.</p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-[#000000] font-bold hover:bg-primary-hover shadow-[0_0_20px_rgba(0,212,170,0.3)] transition-all">
                        Book Your Free Call <ArrowRight weight="bold" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
