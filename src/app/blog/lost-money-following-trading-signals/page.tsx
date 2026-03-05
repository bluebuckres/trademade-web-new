import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  HandCoins,
} from "@phosphor-icons/react/dist/ssr";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { RecentPostsSidebar } from "@/components/blog/RecentPostsSidebar";

export const metadata: Metadata = {
  title: "Why Following Trading Signals Costs You Money | TradeMade",
  description:
    "What paid signal services don't tell you — and how one trader stopped paying for someone else's edge and built his own.",
  keywords: [
    "trading signals India",
    "telegram trading tips",
    "algo trading vs signals",
    "stop following signals",
    "build own trading strategy",
  ],
  openGraph: {
    title:
      "I Lost ₹2.3 Lakhs Following Trading Signals. Then I Built My Own Algo.",
    description:
      "What paid signal services don't tell you — and how one trader stopped paying for someone else's edge.",
    url: "https://trademade.in/blog/lost-money-following-trading-signals",
    type: "article",
  },
  alternates: {
    canonical: "https://trademade.in/blog/lost-money-following-trading-signals",
  },
};

export default function SignalsCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "I Lost ₹2.3 Lakhs Following Trading Signals. Then I Built My Own Algo.",
    datePublished: "2024-12-04T00:00:00+00:00",
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
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0c0c0c] transition-colors mb-10 font-medium text-sm"
        >
          <ArrowLeft weight="bold" /> Back to Research
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-start">
          <article>
            <header className="mb-10 border-b-2 border-[#0c0c0c] pb-8">
              <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.14em] text-[#0c0c0c] uppercase mb-4 flex-wrap">
                <span className="bg-[#0c0c0c] text-white px-2 py-0.5">
                  Case Study
                </span>
                <span className="text-[#0c0c0c]/40 mx-1">·</span>
                <span className="text-[#686868] normal-case tracking-normal">
                  04 Dec 2024
                </span>
              </div>

              <h1 className="font-playfair text-4xl md:text-[48px] font-extrabold text-[#0c0c0c] leading-[1.08] tracking-[-0.02em] mb-5">
                I Lost ₹2.3 Lakhs Following Trading Signals.{" "}
                <em className="italic text-[#686868] font-light">
                  Then I Built My Own Algo.
                </em>
              </h1>

              <p className="text-[18px] font-light text-[#3a3a3a] leading-[1.6] mb-5 font-playfair italic">
                What paid signal services don't tell you — and how one trader
                stopped paying for someone else's edge and built his own.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-5">
                <div className="text-[13px] text-[#686868] font-light">
                  6 min read &nbsp;·&nbsp; TradeMade Research
                </div>
                <ShareButtons title="I Lost ₹2.3 Lakhs Following Trading Signals. Then I Built My Own Algo. | TradeMade" />
              </div>
            </header>

            <div className="text-[17px] leading-[1.8] font-light text-[#0c0c0c]">
              <p className="mb-6">
                This one is uncomfortable to write because it's a story a lot of
                traders recognize but few talk about openly.
              </p>

              <p className="mb-6">
                <strong>Mihir</strong> lost ₹2.3 lakhs over fourteen months
                following trading signals from paid Telegram channels. Not in
                one bad month. Slowly, consistently, in the way that's actually
                harder to stop — because each month there were enough good calls
                to keep the hope alive.
              </p>

              <p className="mb-6">
                He's not embarrassed about it anymore. He thinks it's important
                to say clearly:
              </p>

              <div className="bg-[#0c0c0c] text-white p-6 my-8 font-syne text-[18px] font-bold tracking-[-0.01em] border-l-4 border-[#686868]">
                The signal service model is structurally broken for retail
                traders, and here's exactly why.
              </div>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                How Signal Services Actually Work (And Why the Math Doesn't Work
                for You)
              </h2>

              <p className="mb-6">
                The pitch is straightforward: a trader with a proven system
                sends you their trades in real time. You copy them. You make
                money.
              </p>

              <p className="mb-6">The problems start immediately.</p>

              <div className="flex flex-col gap-6 my-8">
                <div className="bg-[#edeae2] p-6 border-l-2 border-[#0c0c0c]">
                  <strong className="block font-syne text-[16px] text-[#0c0c0c] mb-2 uppercase tracking-wide">
                    Problem 1: Execution timing
                  </strong>
                  <p className="text-[#3a3a3a] m-0 text-[15px] leading-[1.6]">
                    The signal provider executes their trade. Then they send the
                    message to a Telegram group of 2,000 people. You see it,
                    decide to take it, open your broker app, navigate to the
                    right instrument, place the order. By the time your order
                    hits the market, the price the signal provider entered at is
                    gone. Sometimes by a little. In fast-moving intraday setups,
                    sometimes by a lot. The provider's backtest shows their
                    entry price. Your actual P&L reflects yours. They're not the
                    same number.
                  </p>
                </div>

                <div className="bg-[#edeae2] p-6 border-l-2 border-[#0c0c0c]">
                  <strong className="block font-syne text-[16px] text-[#0c0c0c] mb-2 uppercase tracking-wide">
                    Problem 2: Position sizing mismatch
                  </strong>
                  <p className="text-[#3a3a3a] m-0 text-[15px] leading-[1.6]">
                    The signal says "BUY RELIANCE." It doesn't say how much of
                    your capital to deploy. Most retail followers either
                    under-size (reducing wins to noise) or over-size (turning
                    normal drawdowns into painful losses). The provider manages
                    their own risk. You're managing yours blindly.
                  </p>
                </div>

                <div className="bg-[#edeae2] p-6 border-l-2 border-[#0c0c0c]">
                  <strong className="block font-syne text-[16px] text-[#0c0c0c] mb-2 uppercase tracking-wide">
                    Problem 3: Exit timing
                  </strong>
                  <p className="text-[#3a3a3a] m-0 text-[15px] leading-[1.6]">
                    Signals are easier to send at entry than at exit. "Book
                    profits" messages come late, come vague ("exit at your
                    levels"), or don't come at all. Mihir held three positions
                    well past their optimal exit because the channel went quiet.
                  </p>
                </div>

                <div className="bg-[#0c0c0c] p-6 text-white border-l-2 border-[#686868]">
                  <strong className="block font-syne text-[16px] text-white/90 mb-2 uppercase tracking-wide">
                    Problem 4: You have no idea why.
                  </strong>
                  <p className="text-white/80 m-0 text-[15px] leading-[1.6]">
                    This is the one that matters most. When the signal provider
                    is wrong, you don't know why they were wrong. You don't know
                    if it was bad luck, a broken thesis, or a strategy that
                    simply stopped working in current market conditions. You
                    can't evaluate it. You can't improve it. You're completely
                    dependent on someone else's judgment — someone you've never
                    met, whose real track record you can't verify.
                  </p>
                </div>
              </div>

              <div className="py-6 my-10 border-y border-[#dad5cc]">
                <p className="font-playfair text-[20px] font-semibold italic leading-[1.5] text-[#3a3a3a] m-0">
                  "I was paying ₹4,000 a month to not understand what I was
                  doing with my own money. That's not trading. That's gambling
                  with extra steps."
                </p>
              </div>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                The Moment Something Shifted
              </h2>

              <p className="mb-6">
                Fourteen months in, Mihir sat down and did something he should
                have done before paying for the first signal subscription: he
                audited his actual trade log.
              </p>

              <p className="mb-6">
                Not the channel's claimed results. His results.
              </p>

              <p className="mb-6">
                The gap was significant. The channel's claimed win rate: 68%.
                His actual win rate following the same signals: 51%. The
                difference was almost entirely execution slippage and late
                exits.
              </p>

              <p className="mb-6 font-bold text-[#0c0c0c]">
                He wasn't following a bad strategy. He was following a good
                strategy badly — because the infrastructure of "copy this signal
                manually" doesn't work at retail execution speeds.
              </p>

              <p className="mb-6">That audit was the turning point.</p>

              {/* CTA Banner */}
              <div className="bg-[#0c0c0c] text-white p-8 my-12 relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 text-[180px] text-white/[0.03] transition-transform group-hover:scale-110 duration-700 pointer-events-none">
                  <HandCoins weight="fill" />
                </div>
                <h3 className="font-syne text-[20px] font-bold mb-3 relative z-10">
                  💡 Still following signal services and wondering why your
                  results don't match theirs?
                </h3>
                <p className="text-white/80 text-[15px] mb-6 relative z-10 max-w-[90%]">
                  The gap is almost never the signals. It's the execution model.
                  Here's an alternative.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-white text-[#0c0c0c] px-5 py-2.5 font-syne text-[13px] font-bold tracking-[0.04em] uppercase hover:bg-[#f0f0f0] transition-colors relative z-10"
                >
                  See how self-built algos work on TradeMade{" "}
                  <ArrowRight weight="bold" />
                </Link>
              </div>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                Building His Own Instead
              </h2>

              <p className="mb-6">
                Mihir's insight from fourteen months of signal following: he
                actually understood the market reasonably well. He'd absorbed a
                lot about momentum setups, sector rotation, and entry timing
                just from following and studying the signals. What he lacked was
                a systematic way to act on his own knowledge.
              </p>

              <p className="mb-6">
                He spent two months documenting every pattern he'd observed —
                not as vague intuitions but as testable rules. Entry conditions.
                Exit conditions. What disqualified a trade.
              </p>

              <p className="mb-6">
                Then he built it on TradeMade's no-code builder. No Python, no
                developer. Just the rule logic he'd spent fourteen months
                accidentally learning.
              </p>

              <p className="mb-6">
                He backtested it on three years of tick data.
              </p>

              <p className="mb-6">
                <strong>
                  The backtest results were better than his signal service
                  results.
                </strong>{" "}
                Not dramatically — but measurably. And more importantly, he
                understood every single trade. He knew why it worked. He knew
                why it failed. He could improve it.
              </p>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                Eight Months of Running His Own Strategy
              </h2>

              <div className="overflow-x-auto my-8 border border-[#dad5cc] bg-white">
                <table className="w-full text-left text-[14px] min-w-[600px] border-collapse">
                  <thead>
                    <tr>
                      <th className="font-syne text-[11px] tracking-[0.08em] uppercase py-3 px-4 border-b border-[#dad5cc] bg-[#edeae2] font-bold text-[#0c0c0c]">
                        Metric
                      </th>
                      <th className="font-syne text-[11px] tracking-[0.08em] uppercase py-3 px-4 border-b border-[#dad5cc] bg-[#edeae2] font-bold text-[#0c0c0c]">
                        Signal Service (14 mos)
                      </th>
                      <th className="font-syne text-[11px] tracking-[0.08em] uppercase py-3 px-4 border-b border-[#dad5cc] bg-[#0c0c0c] font-bold text-white">
                        Own Algo (8 mos)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#dad5cc]">
                    <tr className="hover:bg-[#fafaf7]">
                      <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                        Monthly cost
                      </td>
                      <td className="py-3 px-4 text-[#686868]">
                        ₹4,000–₹8,000
                      </td>
                      <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                        ₹0 (TradeMade sub)
                      </td>
                    </tr>
                    <tr className="hover:bg-[#fafaf7]">
                      <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                        Win rate
                      </td>
                      <td className="py-3 px-4 text-[#686868] text-red-600/90">
                        51% (after slippage)
                      </td>
                      <td className="py-3 px-4 font-bold text-[#2c5f2e]">
                        57%
                      </td>
                    </tr>
                    <tr className="hover:bg-[#fafaf7]">
                      <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                        Understanding of each trade
                      </td>
                      <td className="py-3 px-4 text-[#686868]">Zero</td>
                      <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                        Complete
                      </td>
                    </tr>
                    <tr className="hover:bg-[#fafaf7]">
                      <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                        Ability to improve the strategy
                      </td>
                      <td className="py-3 px-4 text-[#686868]">None</td>
                      <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                        Full control
                      </td>
                    </tr>
                    <tr className="hover:bg-[#fafaf7]">
                      <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                        Emotional stress
                      </td>
                      <td className="py-3 px-4 text-[#686868]">High</td>
                      <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                        Manageable
                      </td>
                    </tr>
                    <tr className="hover:bg-[#fafaf7]">
                      <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                        Total P&L trajectory
                      </td>
                      <td className="py-3 px-4 font-bold text-red-600/90">
                        -₹2.3 lakhs
                      </td>
                      <td className="py-3 px-4 font-bold text-[#2c5f2e]">
                        Recovering
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-6">
                Eight months isn't enough to declare victory. Mihir would tell
                you that himself. But the trajectory is different — and the
                relationship with trading is different.
              </p>

              <p className="mb-6 font-bold text-[#0c0c0c]">
                He's not waiting for a message. He's running a system.
              </p>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                What Traders Who've Been Through This Usually Realize
              </h2>

              <p className="mb-6">
                A few honest observations from traders who've made the same
                journey from signal follower to self-built algo:
              </p>

              <ul className="space-y-6 my-8">
                <li className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0c0c0c] mt-2.5 shrink-0" />
                  <div>
                    <strong className="block text-[#0c0c0c] mb-1">
                      The signals weren't always wrong.
                    </strong>
                    Often the underlying strategy was sound. The delivery
                    mechanism was broken.
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0c0c0c] mt-2.5 shrink-0" />
                  <div>
                    <strong className="block text-[#0c0c0c] mb-1">
                      You learn more from one bad trade you understand than ten
                      bad trades you don't.
                    </strong>
                    When your own algo is wrong, you can diagnose it. When a
                    signal is wrong, you just lose money.
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0c0c0c] mt-2.5 shrink-0" />
                  <div>
                    <strong className="block text-[#0c0c0c] mb-1">
                      The goal was never to follow someone else forever.
                    </strong>
                    Most traders start with signals as a shortcut to learning.
                    The shortcut only works if you eventually graduate from it.
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0c0c0c] mt-2.5 shrink-0" />
                  <div>
                    <strong className="block text-[#0c0c0c] mb-1">
                      Building your own strategy doesn't require being
                      technical.
                    </strong>
                    It requires being systematic. Those are different skills.
                  </div>
                </li>
              </ul>

              <p className="mb-6">
                If you can write down your trading rules clearly enough to
                explain them to someone else, you can automate them. The
                technology barrier is lower than it's ever been.
              </p>

              {/* Footer CTA */}
              <div className="mt-14 pt-8 border-t-2 border-[#0c0c0c] text-[14px]">
                <p className="mb-4 text-[#3a3a3a] italic">
                  TradeMade's no-code strategy builder lets retail traders
                  systematize and automate their own strategies — without code,
                  without developers, and with tick-level backtesting to verify
                  results before going live.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Link
                    href="/services"
                    className="inline-flex justify-center items-center gap-2 bg-[#0c0c0c] text-white px-5 py-3 font-syne text-[13px] font-bold tracking-[0.04em] uppercase hover:bg-[#3a3a3a] transition-colors"
                  >
                    Stop following signals. Start running your own.{" "}
                    <ArrowRight weight="bold" />
                  </Link>
                </div>
                <p className="mt-6 text-[#686868] text-[13px]">
                  Made the same journey from signals to self-built? Or still on
                  the fence about it?{" "}
                  <Link
                    href="/contact"
                    className="underline hover:text-[#0c0c0c]"
                  >
                    We'd like to hear where you are
                  </Link>
                  .
                </p>
              </div>
            </div>
          </article>

          <aside className="hidden lg:block relative h-full">
            <div className="sticky top-24 pt-8 border-t-2 border-[#0c0c0c] lg:border-t-0 lg:pt-0">
              <RecentPostsSidebar currentSlug="/blog/lost-money-following-trading-signals" />
            </div>
          </aside>

          {/* Mobile sidebar */}
          <aside className="block lg:hidden mt-20 pt-10 border-t-2 border-[#0c0c0c]">
            <RecentPostsSidebar currentSlug="/blog/lost-money-following-trading-signals" />
          </aside>
        </div>
      </div>
    </main>
  );
}
