import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChartLineUp,
} from "@phosphor-icons/react/dist/ssr";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { RecentPostsSidebar } from "@/components/blog/RecentPostsSidebar";

export const metadata: Metadata = {
  title:
    "Why Your Algo Backtest Looks Profitable But Live Trades Aren't | TradeMade",
  description:
    "The slippage problem that costs Indian intraday traders ₹15,000–₹20,000 every month — and how to fix it with tick-level data.",
  keywords: [
    "algo trading slippage",
    "backtest vs live trades",
    "intraday trading India",
    "tick data backtesting",
    "live performance gap",
  ],
  openGraph: {
    title:
      "Why Your Algo Backtest Looks Profitable But Your Live Trades Aren't",
    description:
      "The slippage problem that costs Indian intraday traders ₹15,000–₹20,000 every month — and how to fix it with tick-level data.",
    url: "https://trademade.in/blog/algo-backtest-vs-live-trades",
    type: "article",
  },
  alternates: {
    canonical: "https://trademade.in/blog/algo-backtest-vs-live-trades",
  },
};

export default function SlippageCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Why Your Algo Backtest Looks Profitable But Your Live Trades Aren't",
    datePublished: "2024-09-22T00:00:00+00:00",
    author: { "@type": "Person", name: "TradeMade Research" },
    publisher: {
      "@type": "Organization",
      name: "TradeMade",
      logo: {
        "@type": "ImageObject",
        url: "https://trademade.in/custom_logo.png",
      },
    },
  };

  return (
    <main className="min-h-screen bg-[#fafaf7] pt-32 pb-24 text-[#0c0c0c] selection:bg-[#0c0c0c]/10 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-[1100px] mx-auto px-6 pt-8 md:pt-0">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0c0c0c] transition-colors mb-10 font-medium text-sm"
        >
          <ArrowLeft weight="bold" /> Back to Research
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-start">
          <article>
            {/* Header */}
            <header className="mb-10 border-b-2 border-[#0c0c0c] pb-8">
              <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.14em] text-[#0c0c0c] uppercase mb-4 flex-wrap">
                <span className="bg-[#0c0c0c] text-white px-2 py-0.5">
                  Case Study
                </span>
                <span className="text-[#0c0c0c]/40 mx-1">·</span>
                <span className="text-[#686868] normal-case tracking-normal">
                  22 Sep 2024
                </span>
              </div>

              <h1 className="font-playfair text-4xl md:text-[48px] font-extrabold text-[#0c0c0c] leading-[1.08] tracking-[-0.02em] mb-5">
                Why Your Algo Backtest Looks Profitable{" "}
                <em className="italic text-[#686868] font-light">
                  But Your Live Trades Aren't
                </em>
              </h1>

              <p className="text-[18px] font-light text-[#3a3a3a] leading-[1.6] mb-5 font-playfair italic">
                The slippage problem that costs Indian intraday traders
                ₹15,000–₹20,000 every month — and how to fix it with tick-level
                data.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-5">
                <div className="text-[13px] text-[#686868] font-light">
                  5 min read &nbsp;·&nbsp; TradeMade Research
                </div>
                <ShareButtons title="Why Your Algo Backtest Looks Profitable But Your Live Trades Aren't | TradeMade" />
              </div>
            </header>

            {/* Article Content */}
            <div className="text-[17px] leading-[1.8] font-light text-[#0c0c0c]">
              <p className="mb-6">
                If your algo strategy looks great on paper but consistently
                underperforms live, you probably don't have a strategy problem.
                You have a data problem.
              </p>

              <p className="mb-6">
                This is the story of how <strong>Raghunath</strong> — an
                intraday momentum trader from Hyderabad — spent eight months
                blaming bad luck before he found the real culprit.
              </p>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                The Strategy Was Fine. The Data Wasn't.
              </h2>

              <p className="mb-6">
                Raghunath ran a momentum strategy on mid-cap NSE stocks. Fast
                entries in the first 45 minutes, tight stops, exits before 11am.
                Clean, rule-based, no discretion. He'd backtested it thoroughly
                on 1-minute OHLC data and the numbers looked solid.
              </p>

              <p className="mb-6">
                But every single month, his live P&L came in ₹15,000–₹20,000
                short of what the backtest projected.
              </p>

              <p className="mb-6">
                He adjusted position sizes. He tweaked entry conditions. He
                switched brokers once. Nothing moved the needle.
              </p>

              <div className="bg-[#0c0c0c] text-white p-6 my-8 font-syne text-[18px] font-bold tracking-[-0.01em] border-l-4 border-[#686868]">
                The gap wasn't in his strategy. It was hiding inside every
                single candle.
              </div>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                What 1-Minute Data Doesn't Show You
              </h2>

              <p className="mb-6">
                When you backtest on 1-minute OHLC data, your strategy executes
                at the candle open. Clean, simple, the way most retail traders
                set it up.
              </p>

              <div className="bg-[#edeae2] p-6 my-8 border border-[#dad5cc]">
                <h3 className="font-syne text-[14px] font-bold tracking-[0.08em] uppercase text-[#0c0c0c] mb-4">
                  What it doesn't show you:
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#3a3a3a]">
                  <li>
                    The actual bid-ask spread at the moment your order hits the
                    market
                  </li>
                  <li>How deep the order book is at that price</li>
                  <li>
                    The 3–4 second delay between signal generation and exchange
                    execution
                  </li>
                  <li>
                    How much the price moves in those 3–4 seconds on a volatile
                    mid-cap stock
                  </li>
                </ul>
              </div>

              <p className="mb-6">
                Each trade might slip by ₹0.50–₹2.00. Across 200 trades a month,
                that's your entire month's edge — gone. Raghunath was losing
                roughly <strong>₹600 per day</strong> to slippage he couldn't
                see because his data wasn't granular enough to show it.
              </p>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                The Fix: Backtesting on Tick Data
              </h2>

              <p className="mb-6">
                A trader in his community mentioned TradeMade's tick-level data
                offhandedly. Raghunath looked it up out of curiosity.
              </p>

              <p className="mb-6">
                Tick data captures every single transaction — every bid, every
                ask, every executed order on the exchange. When you backtest on
                tick data, there's no hiding behind candle opens. Your strategy
                has to survive the real microstructure of the market.
              </p>

              <p className="mb-6">
                He re-ran his strategy on TradeMade using tick-level data for
                the same 6-month period. The simulated results dropped. Which
                was actually good news — because it meant the model finally
                matched reality.
              </p>

              <div className="py-6 my-10 border-y border-[#dad5cc]">
                <p className="font-playfair text-[20px] font-semibold italic leading-[1.5] text-[#3a3a3a] m-0">
                  "The backtest wasn't wrong about the strategy. It was wrong
                  about the world the strategy was operating in."
                </p>
              </div>

              {/* CTA Banner */}
              <div className="bg-[#0c0c0c] text-white p-8 my-12 relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 text-[180px] text-white/[0.03] transition-transform group-hover:scale-110 duration-700 pointer-events-none">
                  <ChartLineUp weight="fill" />
                </div>
                <h3 className="font-syne text-[20px] font-bold mb-3 relative z-10">
                  💡 Running an intraday strategy on 1-min data?
                </h3>
                <p className="text-white/80 text-[15px] mb-6 relative z-10 max-w-[90%]">
                  There's a good chance your live results are consistently
                  underperforming your backtest for the same reason.
                </p>
                <Link
                  href="/backtesting"
                  className="inline-flex items-center gap-2 bg-white text-[#0c0c0c] px-5 py-2.5 font-syne text-[13px] font-bold tracking-[0.04em] uppercase hover:bg-[#f0f0f0] transition-colors relative z-10"
                >
                  Test your strategy on tick data <ArrowRight weight="bold" />
                </Link>
              </div>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                Two Small Changes. A Very Different Result.
              </h2>

              <p className="mb-6">
                Once Raghunath could see the real microstructure, the fixes were
                obvious:
              </p>

              <div className="flex flex-col gap-6 my-8">
                <div className="border border-[#dad5cc] bg-white p-6">
                  <strong className="block font-syne text-[16px] uppercase tracking-widest text-[#0c0c0c] mb-2">
                    Change 1:
                  </strong>
                  <p className="text-[#3a3a3a] m-0">
                    Tightened entry conditions to only trigger when a minimum
                    volume threshold was present at the entry price level — not
                    just when price hit the level.
                  </p>
                </div>
                <div className="border border-[#dad5cc] bg-white p-6">
                  <strong className="block font-syne text-[16px] uppercase tracking-widest text-[#0c0c0c] mb-2">
                    Change 2:
                  </strong>
                  <p className="text-[#3a3a3a] m-0">
                    Added a small spread buffer to limit orders placed in the
                    first 30 minutes, when bid-ask spreads on mid-caps are
                    widest.
                  </p>
                </div>
              </div>

              <p className="mb-6">
                Neither change was dramatic. Both required seeing tick-level
                data to even know they were needed.
              </p>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                The Numbers, Six Weeks Later
              </h2>

              <div className="overflow-x-auto my-8 border border-[#dad5cc] bg-white">
                <table className="w-full text-left text-[14px] min-w-[500px] border-collapse">
                  <thead>
                    <tr>
                      <th className="font-syne text-[11px] tracking-[0.08em] uppercase py-3 px-4 border-b border-[#dad5cc] bg-[#edeae2] font-bold text-[#0c0c0c]">
                        Metric
                      </th>
                      <th className="font-syne text-[11px] tracking-[0.08em] uppercase py-3 px-4 border-b border-[#dad5cc] bg-[#edeae2] font-bold text-[#0c0c0c]">
                        Before
                      </th>
                      <th className="font-syne text-[11px] tracking-[0.08em] uppercase py-3 px-4 border-b border-[#dad5cc] bg-[#0c0c0c] font-bold text-white">
                        After
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#dad5cc]">
                    <tr className="hover:bg-[#fafaf7]">
                      <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                        Monthly backtest vs live gap
                      </td>
                      <td className="py-3 px-4 text-[#686868]">
                        ₹15,000–₹20,000
                      </td>
                      <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                        Under ₹3,000
                      </td>
                    </tr>
                    <tr className="hover:bg-[#fafaf7]">
                      <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                        Live performance vs backtest
                      </td>
                      <td className="py-3 px-4 text-[#686868]">~82%</td>
                      <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                        94–97%
                      </td>
                    </tr>
                    <tr className="hover:bg-[#fafaf7]">
                      <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                        Strategy changes needed
                      </td>
                      <td className="py-3 px-4 text-[#686868]">Zero</td>
                      <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                        Zero
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-6 font-bold text-[#0c0c0c]">
                The strategy didn't change. The edge was always there. He'd just
                been measuring it wrong.
              </p>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                What This Means for Your Strategy
              </h2>

              <p className="mb-6">
                If you're running an intraday algo and your live results are
                consistently 10–20% below backtest, here's the honest checklist:
              </p>

              <ol className="list-decimal pl-5 space-y-4 mb-8 text-[16px]">
                <li>
                  <strong>
                    Are you backtesting on 1-min or 5-min OHLC data?
                  </strong>{" "}
                  If yes, you're not seeing slippage.
                </li>
                <li>
                  <strong>Are you trading mid-cap or small-cap stocks?</strong>{" "}
                  Spreads are wider. Slippage is higher.
                </li>
                <li>
                  <strong>Is your strategy high-frequency?</strong> More trades
                  = more slippage events compounding.
                </li>
                <li>
                  <strong>Have you modelled execution delay?</strong> Even 2
                  seconds matters in momentum trading.
                </li>
              </ol>

              <p className="mb-6">
                Tick data won't fix a broken strategy. But if your strategy has
                a real edge and you're still losing to the market, the data is
                usually where the answer is.
              </p>

              {/* Footer CTA */}
              <div className="mt-14 pt-8 border-t-2 border-[#0c0c0c] text-[14px]">
                <p className="mb-4 text-[#3a3a3a] italic">
                  TradeMade provides tick-level historical data for NSE and BSE
                  instruments. Built specifically for Indian retail traders and
                  quants who are serious about the gap between backtest and
                  live.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Link
                    href="/backtesting"
                    className="inline-flex justify-center items-center gap-2 bg-[#0c0c0c] text-white px-5 py-3 font-syne text-[13px] font-bold tracking-[0.04em] uppercase hover:bg-[#3a3a3a] transition-colors"
                  >
                    Start backtesting on tick data <ArrowRight weight="bold" />
                  </Link>
                </div>
                <p className="mt-6 text-[#686868] text-[13px]">
                  Have a similar story about slippage or backtest gaps? We'd
                  genuinely like to hear it —{" "}
                  <Link
                    href="/contact"
                    className="underline hover:text-[#0c0c0c]"
                  >
                    reach out here
                  </Link>
                  .
                </p>
              </div>
            </div>
          </article>

          <aside className="hidden lg:block relative h-full">
            <div className="sticky top-24 pt-8 border-t-2 border-[#0c0c0c] lg:border-t-0 lg:pt-0">
              <RecentPostsSidebar currentSlug="/blog/algo-backtest-vs-live-trades" />
            </div>
          </aside>

          {/* Mobile sidebar */}
          <aside className="block lg:hidden mt-20 pt-10 border-t-2 border-[#0c0c0c]">
            <RecentPostsSidebar currentSlug="/blog/algo-backtest-vs-live-trades" />
          </aside>
        </div>
      </div>
    </main>
  );
}
