import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  ShieldWarning,
  Warning,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Why 90% of Backtests Lie — And How to Fix Yours | TradeMade",
  description:
    "The most common mistakes traders make when testing strategies, and the slippage model that changes everything.",
  keywords: [
    "algo trading",
    "backtesting",
    "trading strategy",
    "look-ahead bias",
    "slippage model",
    "survivorship bias",
  ],
  openGraph: {
    title: "Why 90% of Backtests Lie — And How to Fix Yours",
    description:
      "The most common mistakes traders make when testing strategies, and the slippage model that changes everything.",
    url: "https://trademade.in/blog/why-90-percent-of-backtests-lie-and-how-to-fix-yours",
    type: "article",
  },
  alternates: {
    canonical:
      "https://trademade.in/blog/why-90-percent-of-backtests-lie-and-how-to-fix-yours",
  },
};

export default function BacktestFlawsPost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Why 90% of Backtests Lie — And How to Fix Yours",
    "datePublished": "2023-12-12T00:00:00+00:00",
    "author": { "@type": "Organization", "name": "TradeMade Research Desk" },
    "publisher": { "@type": "Organization", "name": "TradeMade", "logo": { "@type": "ImageObject", "url": "https://trademade.in/custom_logo.png" } }
  };

  return (
    <main className="min-h-screen bg-[#fafaf7] pt-32 pb-24 text-[#0c0c0c] selection:bg-[#c8391e]/20 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="max-w-[680px] mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-[#c8391e] transition-colors mb-10 font-medium text-sm"
        >
          <ArrowLeft weight="bold" /> Back to Research
        </Link>

        {/* Header */}
        <header className="mb-10 border-b-2 border-[#0c0c0c] pb-8">
          <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.14em] text-[#c8391e] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8391e] animate-[pulse_1.6s_infinite] inline-block" />
            Backtesting <span className="text-[#0c0c0c]/40 mx-1">·</span> Dec
            12, 2023
          </div>

          <h1 className="font-playfair text-4xl md:text-[50px] font-extrabold text-[#0c0c0c] leading-[1.1] tracking-[-0.02em] mb-5">
            Why <em className="italic text-[#c8391e]">90%</em> of Backtests Lie
            — And How to Fix Yours
          </h1>

          <div className="text-[18px] font-light text-[#3a3a3a] leading-[1.6] mb-5">
            The most common mistakes traders make when testing strategies, and
            the slippage model that changes everything.
          </div>

          <div className="text-[13px] text-[#686868] font-light">
            5 min read &nbsp;·&nbsp; TradeMade Research Desk
          </div>
        </header>

        {/* Article Content */}
        <div className="text-[17px] leading-[1.8] font-light text-[#0c0c0c]">
          <p className="mb-6">
            Your backtest is a controlled hallucination. It shows you a world
            where you always got the price you wanted, where every stock you
            tested survived, where tomorrow's news never leaked into today's
            signal. None of that is real. And the gap between that world and the
            live market is where money disappears.
          </p>

          <p className="mb-6">
            Here are the four lies most backtests tell — and specifically how to
            stop them.
          </p>

          {/* Stat Trio - Black and White styling */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-[1px] bg-[#ddd9d0] my-11 border border-[#ddd9d0]">
            <div className="bg-[#fafaf7] p-5 md:p-6 text-center">
              <div className="font-playfair text-[36px] font-extrabold leading-none mb-2 text-[#c8391e]">
                90%
              </div>
              <div className="text-[12px] font-light text-[#686868] leading-[1.4] max-w-[140px] mx-auto">
                of retail backtests have at least one critical flaw
              </div>
            </div>
            <div className="bg-[#fafaf7] p-5 md:p-6 text-center">
              <div className="font-playfair text-[36px] font-extrabold leading-none mb-2 text-[#0a3d6b]">
                1–4%
              </div>
              <div className="text-[12px] font-light text-[#686868] leading-[1.4] max-w-[140px] mx-auto">
                annual return inflation from survivorship bias alone
              </div>
            </div>
            <div className="bg-[#fafaf7] p-5 md:p-6 text-center col-span-2 md:col-span-1">
              <div className="font-playfair text-[36px] font-extrabold leading-none mb-2 text-[#1a6b3a]">
                0.05%
              </div>
              <div className="text-[12px] font-light text-[#686868] leading-[1.4] max-w-[140px] mx-auto">
                per-trade slippage that kills most "profitable" systems
              </div>
            </div>
          </div>

          <h2 className="font-syne text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
            The Four Lies
          </h2>

          {/* Mistake Stack */}
          <div className="flex flex-col gap-6 my-9">
            {/* Mistake 1 */}
            <div className="border border-[#ddd9d0] overflow-hidden bg-white">
              <div className="flex items-center gap-3.5 px-5 py-4 bg-[#f0ede6] border-b border-[#ddd9d0]">
                <span className="font-mono text-[12px] font-bold text-white bg-[#c8391e] px-2 py-0.5">
                  01
                </span>
                <h3 className="font-syne text-[16px] font-bold text-[#0c0c0c] flex-1 m-0">
                  Look-Ahead Bias
                </h3>
                <div className="text-[11px] font-bold tracking-[0.06em] uppercase text-[#c8391e] bg-[#c8391e]/10 px-2 py-0.5 rounded-sm shrink-0">
                  Critical
                </div>
              </div>
              <div className="p-5 text-[15px] font-light">
                <p className="mb-4 text-[#2a2a2a] leading-[1.6]">
                  Your code uses tomorrow's close to generate today's signal. Or
                  you use an earnings number on the day the quarter closed —
                  when in reality that report arrived 45 days later. The
                  backtest never complains. It just quietly inflates every
                  return. This is the hardest bug to catch because the code
                  looks correct — you're just indexing one row off.
                </p>
                <div className="flex items-start gap-2.5 pt-3.5 border-t border-dashed border-[#ddd9d0]">
                  <span className="font-mono text-[11px] font-bold text-[#1a6b3a] tracking-[0.06em] uppercase mt-1 shrink-0">
                    Fix →
                  </span>
                  <p className="text-[14px] text-[#333] m-0 leading-[1.6]">
                    Enforce strict point-in-time data access. Signal generated
                    on bar{" "}
                    <code className="bg-[#f0ede6] text-[#c8391e] px-1 py-0.5 text-[12px] border border-[#ddd9d0]">
                      t
                    </code>{" "}
                    executes on bar{" "}
                    <code className="bg-[#f0ede6] text-[#c8391e] px-1 py-0.5 text-[12px] border border-[#ddd9d0]">
                      t+1
                    </code>{" "}
                    open, always. For fundamental data, apply the actual filing
                    date — not the period-end date.
                  </p>
                </div>
              </div>
            </div>

            {/* Mistake 2 */}
            <div className="border border-[#ddd9d0] overflow-hidden bg-white">
              <div className="flex items-center gap-3.5 px-5 py-4 bg-[#f0ede6] border-b border-[#ddd9d0]">
                <span className="font-mono text-[12px] font-bold text-white bg-[#c8391e] px-2 py-0.5">
                  02
                </span>
                <h3 className="font-syne text-[16px] font-bold text-[#0c0c0c] flex-1 m-0">
                  Survivorship Bias
                </h3>
                <div className="text-[11px] font-bold tracking-[0.06em] uppercase text-[#c8391e] bg-[#c8391e]/10 px-2 py-0.5 rounded-sm shrink-0">
                  Critical
                </div>
              </div>
              <div className="p-5 text-[15px] font-light">
                <p className="mb-4 text-[#2a2a2a] leading-[1.6]">
                  You're testing on stocks that exist today. That means every
                  company that went bankrupt, got delisted, or was acquired
                  between 2015 and now — vanished from your dataset. Your
                  "universe" is pre-filtered by success. You're backtesting on
                  the winners by definition, and wondering why the backtest
                  always wins.
                </p>
                <div className="flex items-start gap-2.5 pt-3.5 border-t border-dashed border-[#ddd9d0]">
                  <span className="font-mono text-[11px] font-bold text-[#1a6b3a] tracking-[0.06em] uppercase mt-1 shrink-0">
                    Fix →
                  </span>
                  <p className="text-[14px] text-[#333] m-0 leading-[1.6]">
                    Use a survivorship-bias-free dataset that includes all
                    historical constituents — including delisted stocks. For
                    Indian equities, Nifty 500 composition changes are publicly
                    available and must be applied point-in-time.
                  </p>
                </div>
              </div>
            </div>

            {/* Mistake 3 */}
            <div className="border border-[#ddd9d0] overflow-hidden bg-white">
              <div className="flex items-center gap-3.5 px-5 py-4 bg-[#f0ede6] border-b border-[#ddd9d0]">
                <span className="font-mono text-[12px] font-bold text-white bg-[#c8391e] px-2 py-0.5">
                  03
                </span>
                <h3 className="font-syne text-[16px] font-bold text-[#0c0c0c] flex-1 m-0">
                  Overfitting / Data Snooping
                </h3>
                <div className="text-[11px] font-bold tracking-[0.06em] uppercase text-[#b8860b] bg-[#b8860b]/10 px-2 py-0.5 rounded-sm shrink-0">
                  High
                </div>
              </div>
              <div className="p-5 text-[15px] font-light">
                <p className="mb-4 text-[#2a2a2a] leading-[1.6]">
                  You ran 400 parameter combinations. The best one had a Sharpe
                  of 3.1. You called it your strategy. But if you run 400 random
                  strategies on any dataset, roughly 20 will show a Sharpe above
                  2.0 purely by chance. You found noise with a good costume. The
                  moment market conditions shift even slightly, it collapses —
                  because it never understood the market, it memorised it.
                </p>
                <div className="flex items-start gap-2.5 pt-3.5 border-t border-dashed border-[#ddd9d0]">
                  <span className="font-mono text-[11px] font-bold text-[#1a6b3a] tracking-[0.06em] uppercase mt-1 shrink-0">
                    Fix →
                  </span>
                  <p className="text-[14px] text-[#333] m-0 leading-[1.6]">
                    Form your hypothesis first, then test. Use walk-forward
                    optimisation — optimise on a rolling 2-year window, validate
                    on the following 6 months, never revisit. Hold out a
                    completely untouched out-of-sample period. Never touch it
                    until the strategy is finalised.
                  </p>
                </div>
              </div>
            </div>

            {/* Mistake 4 */}
            <div className="border border-[#ddd9d0] overflow-hidden bg-white">
              <div className="flex items-center gap-3.5 px-5 py-4 bg-[#f0ede6] border-b border-[#ddd9d0]">
                <span className="font-mono text-[12px] font-bold text-white bg-[#c8391e] px-2 py-0.5">
                  04
                </span>
                <h3 className="font-syne text-[16px] font-bold text-[#0c0c0c] flex-1 m-0">
                  Ignoring Realistic Transaction Costs
                </h3>
                <div className="text-[11px] font-bold tracking-[0.06em] uppercase text-[#b8860b] bg-[#b8860b]/10 px-2 py-0.5 rounded-sm shrink-0">
                  High
                </div>
              </div>
              <div className="p-5 text-[15px] font-light">
                <p className="mb-4 text-[#2a2a2a] leading-[1.6]">
                  Most backtesting tools apply a flat ₹20 brokerage and call it
                  done. That's not how the market works. When you place a market
                  order for 500 lots of Bank Nifty during an RBI event, you
                  don't fill at the mid. You fill wherever the order book has
                  liquidity — which, in volatile moments, is significantly worse
                  than you modelled.
                </p>
                <div className="flex items-start gap-2.5 pt-3.5 border-t border-dashed border-[#ddd9d0]">
                  <span className="font-mono text-[11px] font-bold text-[#1a6b3a] tracking-[0.06em] uppercase mt-1 shrink-0">
                    Fix →
                  </span>
                  <p className="text-[14px] text-[#333] m-0 leading-[1.6]">
                    Model slippage as a function of order size, instrument
                    liquidity, and volatility regime. Use VWAP or
                    limit-order-based execution assumptions, not market-order
                    fills at close.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="font-syne text-[24px] font-bold tracking-[-0.02em] mt-14 mb-5 text-[#0c0c0c]">
            The Slippage Model That Changes Everything
          </h2>

          <p className="mb-6">
            Most traders apply a fixed slippage — say, 0.05% per trade — and
            think they're done. That's better than nothing. But it misses the
            variable that destroys high-frequency and event-driven strategies:
            slippage scales with volatility and position size. A model that
            works fine when VIX is at 12 falls apart when it hits 22 — because
            your assumed fills were calibrated to calm markets.
          </p>

          {/* Dark Slippage Box */}
          <div className="bg-[#0c0c0c] text-white p-7 md:p-9 my-10 relative overflow-hidden">
            <div className="absolute -bottom-8 -right-4 text-[180px] font-syne font-bold text-white/5 leading-none pointer-events-none select-none">
              ₹
            </div>

            <div className="font-mono text-[11px] font-bold text-[#ffcc44] tracking-[0.12em] uppercase mb-4 flex items-center gap-1.5">
              <Warning weight="bold" /> Slippage Model Comparison
            </div>

            <h3 className="font-syne text-[20px] md:text-[22px] font-bold mb-7 leading-[1.3] text-white">
              Same strategy. Different slippage assumptions. Opposite
              conclusions.
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 relative z-10">
              <div className="bg-[#c8391e]/10 border border-[#c8391e]/30 p-5">
                <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#ff7a5a] mb-3.5 flex items-center gap-1.5">
                  <ShieldWarning weight="fill" className="text-sm" /> Naive
                  Model
                </div>
                <div className="space-y-1.5 text-[14px] text-white/75 font-light">
                  <div className="flex justify-between">
                    <span>Slippage:</span>{" "}
                    <span className="font-mono font-bold text-white ml-2">
                      flat 0.02%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Brokerage:</span>{" "}
                    <span className="font-mono font-bold text-white ml-2">
                      ₹20/trade
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Volatility:</span>{" "}
                    <span className="font-mono font-bold text-white ml-2">
                      ignored
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Order size impact:</span>{" "}
                    <span className="font-mono font-bold text-white ml-2">
                      ignored
                    </span>
                  </div>
                  <div className="flex justify-between mt-3 pt-3 border-t border-[#c8391e]/20 text-[#ff7a5a] font-medium">
                    <span>Backtest CAGR:</span>{" "}
                    <span className="font-mono font-bold text-white text-[16px] ml-2">
                      +148%
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a6b3a]/10 border border-[#1a6b3a]/30 p-5">
                <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#7fffa8] mb-3.5 flex items-center gap-1.5">
                  <CheckCircle weight="fill" className="text-sm" /> Realistic
                  Model
                </div>
                <div className="space-y-1.5 text-[14px] text-white/75 font-light">
                  <div className="flex justify-between">
                    <span>Slippage:</span>{" "}
                    <span className="font-mono font-bold text-white ml-2 text-right">
                      vol-adjusted, size-aware
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Brokerage:</span>{" "}
                    <span className="font-mono font-bold text-white ml-2 text-right">
                      ₹20 + STT/exch
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Volatility:</span>{" "}
                    <span className="font-mono font-bold text-white ml-2 text-right">
                      regime-dependent
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Order size:</span>{" "}
                    <span className="font-mono font-bold text-white ml-2 text-right">
                      % of avg volume
                    </span>
                  </div>
                  <div className="flex justify-between mt-3 pt-3 border-t border-[#1a6b3a]/20 text-[#7fffa8] font-medium">
                    <span>Backtest CAGR:</span>{" "}
                    <span className="font-mono font-bold text-white text-[16px] ml-2">
                      +31%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[13px] text-white/50 m-0 pt-4 border-t border-white/10 italic relative z-10">
              Same signals, same entry/exit logic. The only variable changed was
              the cost model. The 148% strategy never existed.
            </p>
          </div>

          <p className="mb-6">
            The formula most production quants use as a starting point for
            Indian equity options:
          </p>

          {/* Formula Box */}
          <div className="bg-[#f0ede6] border border-[#ddd9d0] p-6 my-9 font-mono text-[14px] md:text-[15px] overflow-x-auto whitespace-pre">
            <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#686868] mb-3">
              // Realistic per-trade cost estimate
            </div>
            <div className="text-[#0c0c0c] leading-[1.8]">
              <span className="text-[#c8391e] font-bold">Total_Cost</span> ={" "}
              <span className="text-[#0a3d6b] font-bold">Brokerage</span> +{" "}
              <span className="text-[#0a3d6b] font-bold">STT</span> +{" "}
              <span className="text-[#0a3d6b] font-bold">Exchange_fees</span>
              <br />
              {"              "}+ (
              <span className="text-[#c8391e] font-bold">Slippage_base</span> ×{" "}
              <span className="text-[#c8391e] font-bold">VIX_multiplier</span>)
              <br />
              {"              "}+{" "}
              <span className="text-[#c8391e] font-bold">Market_impact</span>
              (order_size / avg_daily_vol)
              <br />
              <br />
              <span className="text-[#686868] italic">
                // If this kills your edge — your edge was never real
              </span>
            </div>
          </div>

          {/* Pullquote */}
          <div className="py-7 border-y-[3px] border-[#0c0c0c] my-12 text-center">
            <p className="font-syne text-[22px] md:text-[24px] font-bold leading-[1.4] text-[#0c0c0c] m-0 px-2 tracking-[-0.01em]">
              "A strategy that survives realistic costs on 10 years of tick data
              across two market cycles — that's the first one worth deploying."
            </p>
          </div>

          <h2 className="font-syne text-[24px] font-bold tracking-[-0.02em] mt-14 mb-5 text-[#0c0c0c]">
            The Honest Backtest Checklist
          </h2>

          {/* Checklist */}
          <div className="my-8">
            {[
              "Point-in-time data — signal on bar T executes on bar T+1 open",
              "Survivorship-bias-free universe with historical index constituents",
              "Walk-forward validation — no single in-sample optimisation window",
              "Untouched out-of-sample holdout — never peeked during development",
              "Vol-adjusted, size-aware slippage model",
              "Full brokerage: STT + exchange charges + SEBI fees",
              "Monte Carlo simulation over synthetic price paths",
              "Tested across bull, bear, and sideways regimes",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3.5 py-4 border-b border-[#ddd9d0] first:border-t text-[15px] font-light"
              >
                <div className="w-[22px] h-[22px] shrink-0 rounded-full border-2 border-[#1a6b3a] flex items-center justify-center text-[#1a6b3a] mt-0.5">
                  <CheckCircle weight="bold" className="text-[12px]" />
                </div>
                <span className="text-[#1c1c1c] leading-[1.5]">{item}</span>
              </div>
            ))}
          </div>

          {/* Internal Lead Capture - Dark Mixed */}
          <div className="bg-[#0b0b0b] text-white p-8 md:p-11 mt-16 mb-10 relative overflow-hidden">
            <div className="absolute -bottom-6 right-5 text-[160px] font-syne font-extrabold opacity-[0.04] pointer-events-none leading-none select-none">
              ✓
            </div>

            <div className="inline-flex items-center gap-1.5 bg-[#ffcc44] text-[#0b0b0b] font-syne text-[11px] font-extrabold tracking-[0.1em] uppercase px-3 py-1.5 mb-5 shadow-sm">
              Free Backtest Access
            </div>

            <h3 className="font-syne text-[24px] md:text-[28px] font-extrabold tracking-[-0.02em] mb-4 leading-[1.2] max-w-[500px]">
              Run Your Strategy on Tick-Level Data — We'll Show You Where It's
              Lying
            </h3>

            <p className="text-[15px] text-white/70 mb-8 font-light max-w-[500px] leading-[1.6]">
              TradeMade's engine applies every fix on this checklist
              automatically — 10+ years of tick data, walk-forward testing,
              vol-adjusted slippage, Monte Carlo. Drop your number and we'll run
              your first backtest free.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-[#7fffa8] text-[13px] font-medium flex items-center gap-1.5 mr-3 mb-2">
                <CheckCircle weight="bold" /> Tick-level accuracy
              </span>
              <span className="text-[#7fffa8] text-[13px] font-medium flex items-center gap-1.5 mr-3 mb-2">
                <CheckCircle weight="bold" /> Realistic slippage model
              </span>
              <span className="text-[#7fffa8] text-[13px] font-medium flex items-center gap-1.5 mr-3 mb-2">
                <CheckCircle weight="bold" /> Walk-forward built-in
              </span>
              <span className="text-[#7fffa8] text-[13px] font-medium flex items-center gap-1.5 mr-3 mb-2">
                <CheckCircle weight="bold" /> Monte Carlo stress test
              </span>
              <span className="text-[#7fffa8] text-[13px] font-medium flex items-center gap-1.5 mr-3 mb-2">
                <CheckCircle weight="bold" /> Options Greeks support
              </span>
              <span className="text-[#7fffa8] text-[13px] font-medium flex items-center gap-1.5 mb-2">
                <CheckCircle weight="bold" /> 10+ years data
              </span>
            </div>

            <form
              className="flex flex-col md:flex-row max-w-[460px] group relative z-10"
              action="#"
            >
              <div className="bg-white/10 text-white/80 border border-white/15 border-b-0 md:border-b md:border-r-0 px-4 py-3.5 text-[15px] flex-shrink-0 font-medium whitespace-nowrap">
                🇮🇳 +91
              </div>
              <input
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="98XXXXXXXX"
                className="flex-1 border border-white/15 border-b-0 md:border-b md:border-r-0 px-4 py-3.5 font-sans text-[15px] bg-white/5 text-white outline-none min-w-0 placeholder:text-white/30 focus:border-[#ffcc44]"
                required
              />
              <button
                type="submit"
                className="bg-[#ffcc44] hover:bg-[#e6b800] text-[#0b0b0b] border-none px-5 py-3.5 font-syne text-[14px] font-extrabold tracking-[0.03em] whitespace-nowrap transition-colors flex-shrink-0"
              >
                Start Free Backtest →
              </button>
            </form>
            <p className="text-[12px] text-white/40 mt-3 mb-0 font-light">
              No spam. No cold calls. First backtest on us.
            </p>
          </div>

          <p className="mb-10 pt-4">
            The best quants aren't the ones with the most creative strategies.
            They're the ones most ruthlessly honest about what their data is
            actually telling them. A backtest that survives every item on that
            checklist might show 30% CAGR instead of 150% — but that 30% is
            real. And real is the only number that matters.
          </p>
        </div>
      </article>
    </main>
  );
}
