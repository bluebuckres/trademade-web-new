import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Broadcast, Brain, ChartBar, BellRinging, CheckCircle } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
    title: "How AI Sentiment Analysis Saved Us During the RBI Policy | TradeMade",
    description: "What happened when the market priced in a consensus RBI hold, and the Governor slashed GDP instead? How our AI parsed the panic faster than human traders.",
    keywords: ["ai sentiment analysis", "rbi policy trading", "algo trading", "nifty backtesting", "bank nifty options"],
    openGraph: {
        title: "How AI Sentiment Analysis Saved Us During the RBI Policy",
        description: "The edge wasn't in predicting the RBI. It was in reading the language faster than the market could price it.",
        url: "https://trademade.in/blog/how-ai-sentiment-analysis-saved-us-during-the-rbi-policy",
        type: "article",
    },
    alternates: { canonical: "https://trademade.in/blog/how-ai-sentiment-analysis-saved-us-during-the-rbi-policy" },
};

export default function RbiPolicyAIPost() {
    return (
        <main className="min-h-screen bg-[#fafaf7] pt-32 pb-24 text-[#0c0c0c] selection:bg-[#1a6b3a]/20 font-sans">
            <article className="max-w-[680px] mx-auto px-6">

                {/* Back Link */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#1a6b3a] transition-colors mb-10 font-medium text-sm">
                    <ArrowLeft weight="bold" /> Back to Research
                </Link>

                {/* Header */}
                <header className="mb-10 border-b-2 border-[#0c0c0c] pb-8">
                    <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.14em] text-[#1a6b3a] uppercase mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1a6b3a] animate-[pulse_1.6s_infinite] inline-block" />
                        Case Study <span className="text-[#0c0c0c]/40 mx-1">·</span> March 02, 2024
                    </div>

                    <h1 className="font-playfair text-4xl md:text-[50px] font-extrabold text-[#0c0c0c] leading-[1.1] tracking-[-0.02em] mb-5">
                        How AI Sentiment Analysis <em className="italic text-[#1a6b3a]">Saved Us</em> During the RBI Policy
                    </h1>

                    <div className="text-[13px] text-[#686868] font-light">
                        6 min read &nbsp;·&nbsp; TradeMade AI Team
                    </div>
                </header>

                {/* Article Content */}
                <div className="text-[17px] leading-[1.8] font-light text-[#0c0c0c]">

                    <p className="mb-6">
                        December 6, 2024. 9:58 AM. The RBI MPC outcome was 23 minutes away. Nifty was choppy. Bank Nifty had swung 400 points intraday already. Every trader in the room had a position and an opinion. Our AI had neither — just data.
                    </p>

                    <p className="mb-6">
                        What happened in the next 90 minutes is what this case study is about. And why human intuition, no matter how sharp, loses to structured sentiment reading when macro events break.
                    </p>

                    <h2 className="font-syne text-[21px] font-bold tracking-[-0.02em] mt-12 mb-4 text-[#0c0c0c]">
                        The Setup: What Everyone Expected
                    </h2>

                    <p className="mb-6">
                        Consensus heading into the December MPC was clear: repo rate hold at 6.5%, neutral stance, no surprises. Inflation had jumped to 6.21% in October. The rupee was at 84.7 against the dollar. Bond markets had priced in a no-change outcome. Most desks were either flat or lightly long.
                    </p>

                    <p className="mb-6">
                        But consensus is exactly when sentiment divergence becomes exploitable. When everyone expects the same thing, the move is in the surprise. Our system wasn't watching CNBC. It was reading something else.
                    </p>

                    <h2 className="font-syne text-[21px] font-bold tracking-[-0.02em] mt-12 mb-4 text-[#0c0c0c]">
                        What the AI Was Watching
                    </h2>

                    <p className="mb-6">
                        Three hours before the announcement, the system was ingesting RBI Governor speech transcripts, MPC member dissent history, global central bank language patterns, live options data on Bank Nifty (implied volatility was quietly rising — the market was buying protection despite "consensus"), and financial news sentiment across 40+ sources weighted by source credibility and recency.
                    </p>

                    {/* Dark Signal Card */}
                    <div className="bg-[#0c0c0c] text-white p-6 my-9 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-[#c8391e] font-syne text-[10px] font-bold tracking-[0.1em] text-white px-2.5 py-1 uppercase">
                            LIVE ALERT
                        </div>
                        <div className="font-syne text-[11px] font-semibold tracking-[0.1em] uppercase text-white/45 mb-2.5">
                            AI Sentiment Alert — 09:41 AM, Dec 6 2024
                        </div>
                        <p className="font-sans text-[15px] text-[#e8f5ed] leading-[1.6] m-0 font-light">
                            Sentiment Score: <strong className="text-[#aaefbd] font-semibold">BEARISH DIVERGENCE — 72% confidence</strong><br />
                            <span className="opacity-80 mt-2 block">Source signals: RBI minutes language shift detected (+0.4σ hawkish tone). Bank Nifty IV percentile: 78th. FII futures net short: ₹1,944 Cr previous session.</span><br />
                            Recommended: <strong className="text-[#aaefbd] font-semibold">Reduce long exposure before 10:15 AM. Monitor for CRR surprise signal.</strong>
                        </p>
                        <p className="mt-3.5 text-[12px] text-white/35 italic">
                            Delivered via Telegram · 34 seconds from data ingestion to alert
                        </p>
                    </div>

                    <p className="mb-6">
                        No one on the desk acted on it immediately. That's human nature — conviction is hard to override. Then the announcement came.
                    </p>

                    <h2 className="font-syne text-[21px] font-bold tracking-[-0.02em] mt-12 mb-4 text-[#0c0c0c]">
                        The Announcement & What Happened
                    </h2>

                    <p className="mb-6">
                        RBI held repo at 6.5% — as expected. But the Governor slashed GDP growth forecast to 6.6% from 7.2%. Simultaneously, a 50 bps CRR cut was announced, injecting ₹1.16 trillion of liquidity. The market read this as a distress signal first, then a liquidity boost. Bank Nifty collapsed 350 points in 4 minutes, recovered 400 in the next twelve.
                    </p>

                    {/* Timeline */}
                    <div className="my-10 border-l-2 border-[#ddd9d0] pl-6 ml-2">
                        <div className="relative mb-8 last:mb-0">
                            <div className="absolute -left-[32px] top-1 w-3.5 h-3.5 rounded-full border-2 border-[#fafaf7] bg-[#c8391e]" style={{ boxShadow: '0 0 0 3px rgba(200, 57, 30, 0.2)' }}></div>
                            <div className="font-syne text-[11px] font-bold tracking-[0.1em] uppercase text-[#686868] mb-1">10:18 AM</div>
                            <div className="font-syne text-[16px] font-bold mb-1 text-[#0c0c0c]">GDP forecast slashed to 6.6%</div>
                            <p className="text-[14px] font-light text-[#3a3a3a] m-0">Bank Nifty drops 350 pts in 4 minutes. Traders holding long calls wiped. Unhedged desks scramble.</p>
                        </div>
                        <div className="relative mb-8 last:mb-0">
                            <div className="absolute -left-[32px] top-1 w-3.5 h-3.5 rounded-full border-2 border-[#fafaf7] bg-[#b8860b]" style={{ boxShadow: '0 0 0 3px rgba(184, 134, 11, 0.2)' }}></div>
                            <div className="font-syne text-[11px] font-bold tracking-[0.1em] uppercase text-[#686868] mb-1">10:22 AM</div>
                            <div className="font-syne text-[16px] font-bold mb-1 text-[#0c0c0c]">CRR cut 50 bps announced — ₹1.16L Cr liquidity</div>
                            <p className="text-[14px] font-light text-[#3a3a3a] m-0">AI scores this as net positive. Sentiment flips to bullish within 11 seconds of text parsing.</p>
                        </div>
                        <div className="relative mb-8 last:mb-0">
                            <div className="absolute -left-[32px] top-1 w-3.5 h-3.5 rounded-full border-2 border-[#fafaf7] bg-[#1a6b3a]" style={{ boxShadow: '0 0 0 3px rgba(26, 107, 58, 0.08)' }}></div>
                            <div className="font-syne text-[11px] font-bold tracking-[0.1em] uppercase text-[#686868] mb-1">10:26 AM</div>
                            <div className="font-syne text-[16px] font-bold mb-1 text-[#0c0c0c]">Second alert: BULLISH REVERSAL — 81% confidence</div>
                            <p className="text-[14px] font-light text-[#3a3a3a] m-0">Positions re-entered on Bank Nifty and Realty. Sensex recovers 550 pts. Nifty reclaims 82,000.</p>
                        </div>
                    </div>

                    {/* Scorecard */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-[#ddd9d0] my-9 border border-[#ddd9d0]">
                        <div className="bg-[#fafaf7] p-4 md:p-5 text-center">
                            <div className="font-playfair text-[32px] font-extrabold leading-none mb-1 text-[#1a6b3a]">+2.3%</div>
                            <div className="text-[12px] font-light text-[#686868] leading-[1.4]">Portfolio gain on event day</div>
                        </div>
                        <div className="bg-[#fafaf7] p-4 md:p-5 text-center">
                            <div className="font-playfair text-[32px] font-extrabold leading-none mb-1 text-[#c8391e]">-0.8%</div>
                            <div className="text-[12px] font-light text-[#686868] leading-[1.4]">Average unhedged desk loss</div>
                        </div>
                        <div className="bg-[#fafaf7] p-4 md:p-5 text-center col-span-2 md:col-span-1">
                            <div className="font-playfair text-[32px] font-extrabold leading-none mb-1 text-[#b8860b]">11s</div>
                            <div className="text-[12px] font-light text-[#686868] leading-[1.4]">Signal-to-alert latency</div>
                        </div>
                    </div>

                    {/* Pullquote */}
                    <div className="py-7 border-y-2 border-[#0c0c0c] my-11 text-center">
                        <p className="font-playfair text-[22px] font-bold italic leading-[1.4] text-[#0c0c0c] m-0 px-4">
                            "The edge wasn't in predicting the RBI. It was in reading the language faster than the market could price it."
                        </p>
                    </div>

                    <h2 className="font-syne text-[21px] font-bold tracking-[-0.02em] mt-12 mb-4 text-[#0c0c0c]">
                        Why Human Reading Fails Here
                    </h2>

                    <p className="mb-6">
                        A human analyst reading the Governor's statement would take 3–5 minutes to parse, form a view, and act. In that window, options market makers — who do have algorithmic text readers — have already repriced the entire volatility surface. You're trading against their second move, not the first. Speed is not optional here; it's the whole game.
                    </p>

                    <p className="mb-6">
                        The other failure mode is recency bias. When consensus is strong, human traders anchor to it. The AI has no such anchor. It treats every data point as equally new. That's not intelligence — that's a structural advantage.
                    </p>

                    <h2 className="font-syne text-[21px] font-bold tracking-[-0.02em] mt-12 mb-4 text-[#0c0c0c]">
                        How the System Works
                    </h2>

                    {/* Feature Grid with Phosphor Icons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-9">
                        <div className="border border-[#ddd9d0] p-5 bg-[#f0ede6]">
                            <Broadcast weight="duotone" className="text-2xl text-[#1a6b3a] mb-2.5" />
                            <div className="font-syne text-[14px] font-bold mb-1.5 text-[#0c0c0c]">Real-Time Monitoring</div>
                            <p className="text-[13px] font-light text-[#686868] m-0 leading-[1.55]">
                                RBI statements, MPC minutes, Governor speeches, macro news — parsed the moment they hit the wire. 24/7, across 40+ sources.
                            </p>
                        </div>
                        <div className="border border-[#ddd9d0] p-5 bg-[#f0ede6]">
                            <Brain weight="duotone" className="text-2xl text-[#1a6b3a] mb-2.5" />
                            <div className="font-syne text-[14px] font-bold mb-1.5 text-[#0c0c0c]">NLP Sentiment Scoring</div>
                            <p className="text-[13px] font-light text-[#686868] m-0 leading-[1.55]">
                                Tone, language shift, and keyword clustering scored against historical central bank communication patterns. Context-aware, not just keyword matching.
                            </p>
                        </div>
                        <div className="border border-[#ddd9d0] p-5 bg-[#f0ede6]">
                            <ChartBar weight="duotone" className="text-2xl text-[#1a6b3a] mb-2.5" />
                            <div className="font-syne text-[14px] font-bold mb-1.5 text-[#0c0c0c]">Cross-Asset Coverage</div>
                            <p className="text-[13px] font-light text-[#686868] m-0 leading-[1.55]">
                                Signals mapped to Nifty, Bank Nifty, Realty, Auto, Bonds, and Rupee simultaneously. Asset-specific impact scoring, not one-size-fits-all.
                            </p>
                        </div>
                        <div className="border border-[#ddd9d0] p-5 bg-[#f0ede6]">
                            <BellRinging weight="duotone" className="text-2xl text-[#1a6b3a] mb-2.5" />
                            <div className="font-syne text-[14px] font-bold mb-1.5 text-[#0c0c0c]">Instant Telegram Alerts</div>
                            <p className="text-[13px] font-light text-[#686868] m-0 leading-[1.55]">
                                Actionable alerts in plain language — asset, direction, confidence score, and rationale. Delivered in under 60 seconds of trigger event.
                            </p>
                        </div>
                    </div>

                    {/* Internal Lead Capture - Dark Mixed */}
                    <div className="bg-[#0c0c0c] text-white p-8 md:p-11 mt-14 mb-10 relative overflow-hidden">
                        <div className="absolute top-1/2 -right-5 -translate-y-1/2 text-[120px] opacity-[0.03] pointer-events-none leading-none select-none">
                            AI
                        </div>

                        <div className="inline-flex items-center gap-1.5 bg-[#1a6b3a] text-white font-syne text-[11px] font-bold tracking-[0.08em] uppercase px-3 py-1 mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#aaefbd] animate-pulse inline-block" />
                            Free Access
                        </div>

                        <h3 className="font-playfair text-[26px] font-extrabold tracking-[-0.01em] mb-2.5 leading-[1.25]">
                            Get Your Own AI Sentiment Bot — Built for You
                        </h3>
                        <p className="text-[14px] text-white/60 mb-7 font-light">
                            TradeMade builds personalised AI sentiment analysers with real-time Telegram notifications, 24/7 monitoring across the assets you trade. Drop your number — we'll set it up free.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-7">
                            <span className="bg-[#1a6b3a]/25 border border-[#1a6b3a]/50 text-[#aaefbd] text-[12px] font-normal px-3 py-1 flex items-center gap-1.5">
                                <CheckCircle weight="fill" /> Real-time alerts
                            </span>
                            <span className="bg-[#1a6b3a]/25 border border-[#1a6b3a]/50 text-[#aaefbd] text-[12px] font-normal px-3 py-1 flex items-center gap-1.5">
                                <CheckCircle weight="fill" /> 24/7 monitoring
                            </span>
                            <span className="bg-[#1a6b3a]/25 border border-[#1a6b3a]/50 text-[#aaefbd] text-[12px] font-normal px-3 py-1 flex items-center gap-1.5">
                                <CheckCircle weight="fill" /> Cross-asset apps
                            </span>
                            <span className="bg-[#1a6b3a]/25 border border-[#1a6b3a]/50 text-[#aaefbd] text-[12px] font-normal px-3 py-1 flex items-center gap-1.5">
                                <CheckCircle weight="fill" /> Personalised
                            </span>
                            <span className="bg-white/5 border border-white/10 text-white/70 text-[12px] font-normal px-3 py-1">
                                RBI events
                            </span>
                            <span className="bg-white/5 border border-white/10 text-white/70 text-[12px] font-normal px-3 py-1">
                                Earnings
                            </span>
                        </div>

                        <form className="flex flex-col md:flex-row max-w-[440px] group relative" action="#">
                            <div className="bg-white/10 text-white/80 border border-white/15 border-b-0 md:border-b md:border-r-0 px-3.5 py-3 text-[15px] flex-shrink-0 font-medium whitespace-nowrap">
                                🇮🇳 +91
                            </div>
                            <input
                                type="tel"
                                inputMode="numeric"
                                maxLength={10}
                                placeholder="98XXXXXXXX"
                                className="flex-1 border border-white/15 border-b-0 md:border-b md:border-r-0 px-4 py-3 font-sans text-[15px] bg-white/5 text-white outline-none min-w-0 placeholder:text-white/30 focus:border-[#1a6b3a]"
                                required
                            />
                            <button type="submit" className="bg-[#1a6b3a] hover:bg-[#0f4d29] text-white border-none px-4 py-3 font-syne text-[13px] font-bold tracking-[0.03em] whitespace-nowrap transition-colors flex-shrink-0">
                                Get Free Access →
                            </button>
                        </form>
                        <p className="text-[12px] text-white/30 mt-3 mb-0 font-light">
                            No spam. No cold calls. Cancel anytime.
                        </p>
                    </div>

                    <p className="mb-10">
                        Events like RBI policy days aren't anomalies. They're scheduled. Earnings, Fed decisions, inflation prints — the calendar is known. The only variable is whether your system reads the room faster than everyone else. That's the entire edge on macro event days.
                    </p>

                </div>

            </article>
        </main>
    )
}
