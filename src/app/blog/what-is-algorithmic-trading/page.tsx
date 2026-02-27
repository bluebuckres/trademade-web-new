import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
    title: "What Is Algorithmic Trading? Why Backtesting First Saves You Money",
    description: "Learn what algorithmic trading is, how it works in Indian markets, and why backtesting with realistic slippage is the single most important step before going live. A guide for Indian traders.",
    keywords: ["what is algorithmic trading", "algo trading explained", "backtesting India", "why backtest first", "algo trading for beginners India", "NSE algo trading guide"],
    openGraph: {
        title: "What Is Algorithmic Trading? Why Backtesting First Saves You Money | TradeMade",
        description: "Learn what algorithmic trading is, how it works in Indian markets, and why backtesting with realistic slippage is the single most important step.",
        url: "https://trademade.in/blog/what-is-algorithmic-trading",
        type: "article",
    },
    alternates: { canonical: "https://trademade.in/blog/what-is-algorithmic-trading" },
};

export default function BlogPost() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-24">
            <article className="max-w-3xl mx-auto px-6">

                {/* Back Link */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors mb-12 font-medium">
                    <ArrowLeft weight="bold" /> Back to Research
                </Link>

                {/* Header */}
                <header className="mb-16">
                    <div className="flex items-center gap-3 text-sm font-mono text-primary mb-6">
                        <span>Educational</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400">Mar 10, 2024</span>
                    </div>

                    <h1 className="font-satoshi text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
                        What Is Algorithmic Trading — And Why Should Every Indian Trader Backtest First?
                    </h1>

                    <div className="flex items-center gap-4 border-t border-b border-white/10 py-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-mono">
                            TM
                        </div>
                        <div>
                            <div className="font-bold text-white text-sm">TradeMade Quant Team</div>
                            <div className="text-slate-400 text-xs font-mono">8-minute read</div>
                        </div>
                    </div>
                </header>

                {/* Hero Banner Image */}
                <div className="mb-12 rounded-2xl overflow-hidden border border-white/10 relative aspect-[1200/630] shadow-2xl">
                    <Image
                        src="/algo-trading-banner.png"
                        alt="What Is Algorithmic Trading — And Why Should Every Indian Trader Backtest First?"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Article Content */}
                <div className="prose prose-invert prose-slate prose-lg max-w-none prose-headings:font-satoshi prose-headings:font-bold prose-headings:text-white prose-p:text-slate-300 prose-a:text-primary prose-strong:text-white prose-li:text-slate-300">

                    <h2>What Is Algorithmic Trading?</h2>
                    <p>
                        Algorithmic trading — also called algo trading or automated trading — is the practice of using computer programs to execute buy and sell orders in financial markets based on pre-defined rules. Instead of sitting in front of a screen and clicking "buy" when you spot a pattern, an algorithm does it for you — faster, without emotion, and without missing a signal.
                    </p>
                    <p>
                        In India, algo trading now accounts for a significant portion of daily exchange volume on NSE and BSE. What was once restricted to institutional desks and large proprietary trading firms is now accessible to individual traders and SEBI-registered analysts through retail broker APIs offered by Zerodha, Upstox, Angel One, and others.
                    </p>

                    <hr className="border-white/10 my-10" />

                    <h2>How Does Algorithmic Trading Work?</h2>
                    <p>At its core, an algo trading system has four components:</p>

                    <div className="space-y-6 my-8">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <h3 className="text-xl text-primary font-bold mt-0 mb-2">1. Signal Generation</h3>
                            <p className="mb-0 text-sm">The algorithm scans the market based on your rules — technical indicators (RSI, moving averages, Bollinger Bands), price patterns, options Greeks, or even news sentiment — and generates a buy or sell signal.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <h3 className="text-xl text-primary font-bold mt-0 mb-2">2. Order Execution</h3>
                            <p className="mb-0 text-sm">When a signal is generated, the algo automatically places an order through your broker's API. This happens in milliseconds — far faster than any human could react.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <h3 className="text-xl text-primary font-bold mt-0 mb-2">3. Risk Management</h3>
                            <p className="mb-0 text-sm">Built-in rules manage position size, stop-losses, daily loss limits, and exposure caps. The algo enforces discipline that humans often abandon under pressure.</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <h3 className="text-xl text-primary font-bold mt-0 mb-2">4. Monitoring & Reporting</h3>
                            <p className="mb-0 text-sm">The system logs every trade, tracks P&L in real-time, and sends alerts. You see exactly what happened and when.</p>
                        </div>
                    </div>

                    <hr className="border-white/10 my-10" />

                    <h2>Why Backtesting Is the Most Important Step</h2>
                    <p>
                        Here's where most traders make a critical mistake: they build or buy an algorithm and deploy it live immediately — without ever testing it on historical data.
                    </p>
                    <p>
                        <strong>Backtesting</strong> means running your strategy on past market data to simulate how it would have performed. It answers the question: <em>"If I had used this exact strategy over the last 3 years, what would my P&L, drawdown, and win rate have been?"</em>
                    </p>
                    <p>This is not optional. It is the difference between informed deployment and gambling.</p>

                    <h3>What Backtesting Reveals</h3>
                    <p>A well-constructed backtest on a platform like TradeMade will show you:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Net P&L after real costs</strong> — not just gross profits, but after brokerage, STT, GST, slippage, and impact costs. Many strategies that look profitable gross are losers net-of-costs.</li>
                        <li><strong>Maximum drawdown</strong> — the largest peak-to-trough loss your strategy experienced. This tells you if you'd have the psychological fortitude (and capital) to survive the worst period.</li>
                        <li><strong>Win rate and profit factor</strong> — how often your strategy wins, and the ratio of average win to average loss.</li>
                        <li><strong>Sharpe ratio</strong> — risk-adjusted return. A strategy with consistent moderate gains is often more valuable than one with huge wins and huge losses.</li>
                        <li><strong>Behaviour in different market regimes</strong> — does your strategy only work in trending markets? Does it collapse during high-volatility events like COVID or budget announcements?</li>
                    </ul>

                    <hr className="border-white/10 my-10" />

                    <h2>Why "Realistic" Backtesting Matters — The Slippage Problem</h2>
                    <p>
                        The #1 reason backtests lie is <strong>slippage</strong>. Slippage is the difference between the price you expected and the price you actually got.
                    </p>
                    <p>
                        On a free backtesting tool, your strategy buys Nifty futures at exactly the close price of a 1-minute candle. In reality, your limit order might not get filled at all — or you get filled at 3–8 points worse than expected. Across hundreds of trades per month, this destroys P&L.
                    </p>

                    <div className="p-6 bg-primary/10 border-l-4 border-primary rounded-r-xl my-8">
                        <p className="m-0 text-primary-foreground font-medium">
                            <strong>Realistic backtesting models this by:</strong>
                            <br /><br />
                            • Using tick-level data (not just OHLC candles)<br />
                            • Applying slippage based on your order size vs. typical volume at that time<br />
                            • Modelling partial fills on less liquid instruments<br />
                            • Including all regulatory charges (STT, SEBI charges, exchange charges, GST)
                        </p>
                    </div>

                    <p>
                        This is why professional traders using <strong>best backtesting software India</strong> prefer platforms like TradeMade over free tools — the difference in final P&L estimates can be 20–40% for active strategies.
                    </p>

                    <hr className="border-white/10 my-10" />

                    <h2>Common Backtesting Mistakes Indian Traders Make</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                        <div>
                            <h4 className="text-white font-bold mb-2">Mistake 1: Overfitting (Curve Fitting)</h4>
                            <p className="text-sm">Optimising your strategy parameters on historical data until it "works perfectly" on the past. This strategy almost never works on new, unseen data. <em>Solution: Walk-forward testing.</em></p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-2">Mistake 2: Survivorship Bias</h4>
                            <p className="text-sm">Testing on a stock universe that only includes companies still listed today. This ignores all the companies that went bust — which artificially inflates returns. <em>Solution: Use survivorship-bias-free data.</em></p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-2">Mistake 3: Look-Ahead Bias</h4>
                            <p className="text-sm">Using data in your rules that wasn't available at the time of the trade (e.g., using a daily close price in an intraday signal). <em>Solution: Strict event-time data access.</em></p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-2">Mistake 4: Ignoring Transaction Costs</h4>
                            <p className="text-sm">Always include real brokerage, STT, and slippage. Test with the exact brokerage plan you use.</p>
                        </div>
                    </div>

                    <hr className="border-white/10 my-10" />

                    <h2>Backtesting vs. Paper Trading vs. Live Trading</h2>

                    <div className="overflow-x-auto my-8">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/20">
                                    <th className="py-4 px-4 text-slate-400 font-mono text-sm font-normal">Feature</th>
                                    <th className="py-4 px-4 text-primary font-bold">Backtesting</th>
                                    <th className="py-4 px-4 text-white font-bold">Paper Trading</th>
                                    <th className="py-4 px-4 text-white font-bold">Live Trading</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                <tr>
                                    <td className="py-4 px-4 font-mono text-sm">Uses real past data</td>
                                    <td className="py-4 px-4 text-center">✅</td>
                                    <td className="py-4 px-4 text-center">❌</td>
                                    <td className="py-4 px-4 text-center">✅</td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-4 font-mono text-sm">Real money at risk</td>
                                    <td className="py-4 px-4 text-center">❌</td>
                                    <td className="py-4 px-4 text-center">❌</td>
                                    <td className="py-4 px-4 text-center">✅</td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-4 font-mono text-sm">Tests execution logic</td>
                                    <td className="py-4 px-4 text-center">❌</td>
                                    <td className="py-4 px-4 text-center">✅</td>
                                    <td className="py-4 px-4 text-center">✅</td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-4 font-mono text-sm">Tests strategy logic</td>
                                    <td className="py-4 px-4 text-center">✅</td>
                                    <td className="py-4 px-4 text-center">✅</td>
                                    <td className="py-4 px-4 text-center">✅</td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-4 font-mono text-sm">Speed</td>
                                    <td className="py-4 px-4 text-slate-400">Fast (historical)</td>
                                    <td className="py-4 px-4 text-slate-400">Real-time</td>
                                    <td className="py-4 px-4 text-slate-400">Real-time</td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-4 font-mono text-sm">Purpose</td>
                                    <td className="py-4 px-4 text-slate-400 italic">Validate strategy</td>
                                    <td className="py-4 px-4 text-slate-400 italic">Validate live execution</td>
                                    <td className="py-4 px-4 text-slate-400 italic">Generate returns</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-center font-bold text-white italic mt-6">
                        The ideal sequence: Backtest → Optimise → Paper Trade → Go Live.
                    </p>

                    <hr className="border-white/10 my-10" />

                    <h2>The Rise of Custom Algo Development in India</h2>
                    <p>
                        The good news for Indian traders is that <strong>custom algo development</strong> has become significantly more accessible. Platforms like TradeMade let you describe your strategy in plain English and have it professionally coded, tested, and deployed to your broker in days — not months.
                    </p>
                    <p>
                        This has opened algorithmic trading to traders who have deep market knowledge but no coding background. A seasoned equity trader who understands momentum, mean reversion, or options premium dynamics can now deploy that knowledge as a systematic strategy without writing a single line of Python.
                    </p>

                </div>

                {/* CTA Bottom Section */}
                <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to test your edge?</h3>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                        Stop risking real capital on untested theories. Start a free backtest today on India's most realistic engine.
                    </p>
                    <Link href="/backtesting" className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-[#000000] font-bold hover:bg-primary-hover shadow-[0_0_20px_rgba(0,212,170,0.3)] transition-all">
                        Run Your First Backtest →
                    </Link>
                </div>

            </article>
        </main>
    )
}
