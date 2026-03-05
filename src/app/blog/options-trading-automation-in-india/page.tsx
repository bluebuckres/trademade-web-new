import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  FlowArrow,
} from "@phosphor-icons/react/dist/ssr";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { RecentPostsSidebar } from "@/components/blog/RecentPostsSidebar";

export const metadata: Metadata = {
  title: "Options Trading Automation in India | TradeMade",
  description:
    "An honest guide to automating options strategies on Indian markets — the real complexity, the real risks, and how traders are actually doing it.",
  keywords: [
    "options trading automation",
    "algo options trading India",
    "automate straddle",
    "automate iron condor",
    "delta hedge automation",
  ],
  openGraph: {
    title: "Options Trading Automation in India: What Works, What Doesn't",
    description:
      "An honest guide to automating options strategies on Indian markets — the real complexity, the real risks, and how traders are actually doing it.",
    url: "https://trademade.in/blog/options-trading-automation-in-india",
    type: "article",
  },
  alternates: {
    canonical: "https://trademade.in/blog/options-trading-automation-in-india",
  },
};

export default function OptionsCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Options Trading Automation in India: What Works, What Doesn't",
    datePublished: "2024-11-03T00:00:00+00:00",
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
                  03 Nov 2024
                </span>
              </div>

              <h1 className="font-playfair text-4xl md:text-[48px] font-extrabold text-[#0c0c0c] leading-[1.08] tracking-[-0.02em] mb-5">
                Options Trading Automation in India:{" "}
                <em className="italic text-[#686868] font-light">
                  What Works, What Doesn't
                </em>
              </h1>

              <p className="text-[18px] font-light text-[#3a3a3a] leading-[1.6] mb-5 font-playfair italic">
                An honest guide to automating options strategies on Indian
                markets — the real complexity, the real risks, and how traders
                are actually doing it.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-5">
                <div className="text-[13px] text-[#686868] font-light">
                  7 min read &nbsp;·&nbsp; TradeMade Research
                </div>
                <ShareButtons title="Options Trading Automation in India: What Works, What Doesn't | TradeMade" />
              </div>
            </header>

            <div className="text-[17px] leading-[1.8] font-light text-[#0c0c0c]">
              <p className="mb-6">
                Options automation is the most requested and most misunderstood
                corner of Indian algo trading.
              </p>

              <p className="mb-6">
                The pitch sounds clean: automate your iron condor, your
                straddle, your short strangle. Let the system manage strikes,
                monitor Greeks, roll positions — while you do something else.
              </p>

              <p className="mb-6">
                The reality has more edges than the pitch suggests.
              </p>

              <p className="mb-6">
                This is what <strong>Karan</strong> — an options seller from
                Bengaluru who's been trading Nifty and BankNifty weekly expiries
                for three years — learned when he tried to automate his setup.
                And what actually worked.
              </p>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                Why Options Automation Is Harder Than Equity Automation
              </h2>

              <p className="mb-6">
                When you automate an equity momentum strategy, the variables are
                relatively contained: price, volume, a few indicators, a stop
                loss level.
              </p>

              <p className="mb-6">
                Options automation has to handle a completely different set of
                moving parts simultaneously:
              </p>

              <ul className="list-disc pl-5 space-y-2 mb-6 text-[16px] text-[#3a3a3a]">
                <li>
                  <strong>Strike selection</strong> that adjusts based on
                  current spot price and target delta
                </li>
                <li>
                  <strong>Premium targets</strong> that change as IV expands or
                  contracts
                </li>
                <li>
                  <strong>Greeks monitoring</strong> — delta drift, gamma
                  exposure as expiry approaches
                </li>
                <li>
                  <strong>Adjustment logic</strong> — when to roll, when to
                  hedge, when to close early
                </li>
                <li>
                  <strong>Expiry-specific rules</strong> — weekly vs monthly,
                  what to do on expiry day itself
                </li>
                <li>
                  <strong>Margin management</strong> — options strategies have
                  dynamic margin requirements
                </li>
              </ul>

              <div className="bg-[#0c0c0c] text-white p-6 my-8 font-syne text-[18px] font-bold tracking-[-0.01em] border-l-4 border-[#686868]">
                Most platforms that support "options automation" handle entry
                and exit. They don't handle the adaptive logic that makes
                options selling actually work.
              </div>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                The Setup That Almost Worked
              </h2>

              <p className="mb-6">
                Karan's core strategy was a short strangle on BankNifty weekly
                expiries — sell OTM call and put, collect premium, manage if
                spot moved against either leg.
              </p>

              <p className="mb-6">
                His entry rules were well-defined. Sell 1.5% OTM on both sides,
                between 10am and 11am, when IV rank was above 40.
              </p>

              <p className="mb-6">
                What he couldn't automate cleanly on his first attempt: the
                adjustment logic.
              </p>

              <p className="mb-6">
                Specifically — when spot moved 1.2% against one leg, he would
                roll that leg further OTM and add a hedge. The decision wasn't
                binary. It depended on how much time was left to expiry, what
                the premium on the threatened leg still was, and whether overall
                position delta had crossed his threshold.
              </p>

              <p className="mb-6 font-bold text-[#0c0c0c]">
                That's not an IF/THEN rule. That's a multi-variable decision
                that changes based on market conditions.
              </p>

              <p className="mb-6">
                His first automation handled entry and exit fine. It didn't
                handle the middle — the adjustments. Those still required him to
                be at the screen, which meant he'd automated the boring part and
                was still manually doing the important part.
              </p>

              <div className="py-6 my-10 border-y border-[#dad5cc]">
                <p className="font-playfair text-[20px] font-semibold italic leading-[1.5] text-[#3a3a3a] m-0">
                  "I'd automated myself into a weird half-manual system that was
                  somehow more stressful than just trading manually from the
                  start."
                </p>
              </div>

              {/* CTA Banner */}
              <div className="bg-[#0c0c0c] text-white p-8 my-12 relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 text-[180px] text-white/[0.03] transition-transform group-hover:scale-110 duration-700 pointer-events-none">
                  <FlowArrow weight="fill" />
                </div>
                <h3 className="font-syne text-[20px] font-bold mb-3 relative z-10">
                  💡 Trying to automate an options strategy with adjustments?
                </h3>
                <p className="text-white/80 text-[15px] mb-6 relative z-10 max-w-[90%]">
                  The entry and exit are the easy part. Here's how to think
                  about automating the logic in between.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-white text-[#0c0c0c] px-5 py-2.5 font-syne text-[13px] font-bold tracking-[0.04em] uppercase hover:bg-[#f0f0f0] transition-colors relative z-10"
                >
                  See TradeMade's options capabilities{" "}
                  <ArrowRight weight="bold" />
                </Link>
              </div>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                What He Had to Systematize Before He Could Automate
              </h2>

              <p className="mb-6">
                This is the part most automation guides skip:{" "}
                <strong>
                  you can't automate a strategy that isn't fully defined.
                </strong>
              </p>

              <p className="mb-6">
                Karan spent six weeks doing something uncomfortable — writing
                out every possible scenario his strategy could encounter and
                defining exactly what he would do in each one.
              </p>

              <p className="mb-6">Not vague rules. Specific ones:</p>

              <ul className="list-disc pl-5 space-y-3 mb-8 text-[16px] text-[#3a3a3a] bg-[#edeae2] p-6 border border-[#dad5cc]">
                <li>
                  If delta of position exceeds +0.25, roll short call up by 100
                  points IF premium received on roll ≥ ₹15. If not, add a long
                  call hedge at 50 delta.
                </li>
                <li>
                  If 2 days to expiry and position is profitable by {">"}60% of
                  max premium, close entirely.
                </li>
                <li>
                  If spot gaps more than 1.8% on open, do not enter that week's
                  trade.
                </li>
              </ul>

              <p className="mb-6">
                It took longer than he expected. But by the end, he had a
                document that was essentially a decision tree — and a decision
                tree can be automated.
              </p>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                The TradeMade Implementation
              </h2>

              <p className="mb-6">
                With fully defined rules, building it on TradeMade took four
                days. The key capabilities that made it possible:
              </p>

              <div className="flex flex-col gap-6 my-8">
                <div className="border border-[#dad5cc] bg-white p-5 pl-8 relative">
                  <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-[#0c0c0c]" />
                  <strong className="block text-[#0c0c0c] mb-1">
                    Dynamic strike selection
                  </strong>
                  <p className="text-[14px] text-[#3a3a3a] m-0">
                    The strategy selects strikes based on live spot price and
                    target delta at entry time, not fixed strikes set the day
                    before.
                  </p>
                </div>
                <div className="border border-[#dad5cc] bg-white p-5 pl-8 relative">
                  <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-[#0c0c0c]" />
                  <strong className="block text-[#0c0c0c] mb-1">
                    Multi-leg order management
                  </strong>
                  <p className="text-[14px] text-[#3a3a3a] m-0">
                    Entry and exit of both legs as a single strategy action, not
                    two separate orders placed manually.
                  </p>
                </div>
                <div className="border border-[#dad5cc] bg-white p-5 pl-8 relative">
                  <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-[#0c0c0c]" />
                  <strong className="block text-[#0c0c0c] mb-1">
                    Condition-based adjustment triggers
                  </strong>
                  <p className="text-[14px] text-[#3a3a3a] m-0">
                    Position delta monitoring with rule-based roll and hedge
                    logic firing automatically when thresholds are crossed.
                  </p>
                </div>
                <div className="border border-[#dad5cc] bg-white p-5 pl-8 relative">
                  <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-[#0c0c0c]" />
                  <strong className="block text-[#0c0c0c] mb-1">
                    Expiry calendar awareness
                  </strong>
                  <p className="text-[14px] text-[#3a3a3a] m-0">
                    Different rules for expiry day automatically, without manual
                    intervention.
                  </p>
                </div>
              </div>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                What the Numbers Look Like
              </h2>

              <p className="mb-6">
                Karan has been running the fully automated version for four
                months. Honest comparison:
              </p>

              <div className="overflow-x-auto my-8 border border-[#dad5cc] bg-white">
                <table className="w-full text-left text-[14px] min-w-[600px] border-collapse">
                  <thead>
                    <tr>
                      <th className="font-syne text-[11px] tracking-[0.08em] uppercase py-3 px-4 border-b border-[#dad5cc] bg-[#edeae2] font-bold text-[#0c0c0c]">
                        Metric
                      </th>
                      <th className="font-syne text-[11px] tracking-[0.08em] uppercase py-3 px-4 border-b border-[#dad5cc] bg-[#edeae2] font-bold text-[#0c0c0c]">
                        Manual
                      </th>
                      <th className="font-syne text-[11px] tracking-[0.08em] uppercase py-3 px-4 border-b border-[#dad5cc] bg-[#0c0c0c] font-bold text-white">
                        Automated
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#dad5cc]">
                    <tr className="hover:bg-[#fafaf7]">
                      <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                        Weekly trades executed
                      </td>
                      <td className="py-3 px-4 text-[#686868]">
                        1 (missed 3–4 weeks due to schedule)
                      </td>
                      <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                        Every qualifying week
                      </td>
                    </tr>
                    <tr className="hover:bg-[#fafaf7]">
                      <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                        Adjustment timing
                      </td>
                      <td className="py-3 px-4 text-[#686868]">
                        When noticed / available
                      </td>
                      <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                        Within 90 seconds of threshold
                      </td>
                    </tr>
                    <tr className="hover:bg-[#fafaf7]">
                      <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                        Time at screen per week
                      </td>
                      <td className="py-3 px-4 text-[#686868]">4–6 hours</td>
                      <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                        Under 30 minutes (review only)
                      </td>
                    </tr>
                    <tr className="hover:bg-[#fafaf7]">
                      <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                        Emotional decision overrides
                      </td>
                      <td className="py-3 px-4 text-[#686868]">
                        Several per month
                      </td>
                      <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                        Zero
                      </td>
                    </tr>
                    <tr className="hover:bg-[#fafaf7]">
                      <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                        P&L consistency
                      </td>
                      <td className="py-3 px-4 text-[#686868]">Variable</td>
                      <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                        More consistent
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-6">
                The most significant change wasn't efficiency. It was removing
                emotional overrides.
              </p>

              <p className="mb-6">
                Manual options selling has a specific psychological trap:
                positions that are losing look worse than they are, and you
                close them too early. Positions that are recovering look better
                than they are, and you hold them too long. Karan knew this about
                himself. He just couldn't stop doing it.
              </p>

              <p className="mb-6 font-bold text-[#0c0c0c]">
                The automation doesn't know what the P&L was an hour ago. It
                knows the current delta and the rules. That's it.
              </p>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                What to Know Before You Automate Options
              </h2>

              <p className="mb-6">Honest list — no sugarcoating:</p>

              <ol className="list-decimal pl-5 space-y-4 mb-8 text-[16px]">
                <li>
                  <strong>Define every scenario before you build.</strong> If
                  you can't write it as a rule, you can't automate it. Options
                  strategies with vague adjustment logic will fail in
                  automation.
                </li>
                <li>
                  <strong>
                    Start with a fully systematic strategy, not a hybrid.
                  </strong>{" "}
                  Half-manual, half-automated is usually worse than either
                  extreme.
                </li>
                <li>
                  <strong>
                    Backtest on real options data — strikes, premiums, IV
                    history.
                  </strong>{" "}
                  Backtesting options on equity price data alone misses
                  everything that matters.
                </li>
                <li>
                  <strong>Understand margin dynamics.</strong> Automated
                  strategies can hit margin limits fast in volatile sessions.
                  Build margin buffers into your position sizing.
                </li>
                <li>
                  <strong>
                    Your first automated month will be uncomfortable.
                  </strong>{" "}
                  Watching the system make decisions you'd override manually
                  takes adjustment. Trust the rules you wrote or change them —
                  don't override live.
                </li>
              </ol>

              {/* Footer CTA */}
              <div className="mt-14 pt-8 border-t-2 border-[#0c0c0c] text-[14px]">
                <p className="mb-4 text-[#3a3a3a] italic">
                  TradeMade supports options strategy automation including
                  dynamic strike selection, multi-leg order management, and
                  condition-based adjustment logic. Built for Indian markets —
                  Nifty and BankNifty weekly and monthly expiries.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Link
                    href="/services"
                    className="inline-flex justify-center items-center gap-2 bg-[#0c0c0c] text-white px-5 py-3 font-syne text-[13px] font-bold tracking-[0.04em] uppercase hover:bg-[#3a3a3a] transition-colors"
                  >
                    Explore options automation <ArrowRight weight="bold" />
                  </Link>
                </div>
                <p className="mt-6 text-[#686868] text-[13px]">
                  Already have an options strategy you're trying to systematize?{" "}
                  <Link
                    href="/contact"
                    className="underline hover:text-[#0c0c0c]"
                  >
                    Talk to our team
                  </Link>{" "}
                  — we can help you identify what needs to be defined before you
                  build.
                </p>
              </div>
            </div>
          </article>{" "}
          {/* Closes main content article */}
          <aside className="hidden lg:block relative h-full">
            <div className="sticky top-24 pt-8 border-t-2 border-[#0c0c0c] lg:border-t-0 lg:pt-0">
              <RecentPostsSidebar currentSlug="/blog/options-trading-automation-in-india" />
            </div>
          </aside>
          {/* Mobile sidebar */}
          <aside className="block lg:hidden mt-20 pt-10 border-t-2 border-[#0c0c0c]">
            <RecentPostsSidebar currentSlug="/blog/options-trading-automation-in-india" />
          </aside>
        </div>{" "}
        {/* Closes grid container */}
      </div>{" "}
      {/* Closes max-w container */}
    </main>
  );
}
