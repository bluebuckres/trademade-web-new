import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "How to Sell Your Trading Strategy Online in India | TradeMade",
  description:
    "A SEBI-compliant way to monetize your algo — and why most Indian traders trying to do this keep hitting the same three walls.",
  keywords: [
    "algo marketplace India",
    "sell trading strategy",
    "SEBI RA registered platform",
    "monetize algo",
    "protect strategy logic",
  ],
  openGraph: {
    title: "How to Sell Your Trading Strategy Online in India",
    description:
      "A SEBI-compliant way to monetize your algo — and why most Indian traders trying to do this keep hitting the same three walls.",
    url: "https://trademade.in/blog/how-to-sell-your-trading-strategy-online",
    type: "article",
  },
  alternates: {
    canonical:
      "https://trademade.in/blog/how-to-sell-your-trading-strategy-online",
  },
};

export default function MarketplaceCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "How to Sell Your Trading Strategy Online in India (Without Giving Away Your Code)",
    datePublished: "2024-09-05T00:00:00+00:00",
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

      <article className="max-w-[680px] mx-auto px-6 pt-8 md:pt-0">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0c0c0c] transition-colors mb-10 font-medium text-sm"
        >
          <ArrowLeft weight="bold" /> Back to Research
        </Link>

        {/* Header */}
        <header className="mb-10 border-b-2 border-[#0c0c0c] pb-8">
          <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.14em] text-[#0c0c0c] uppercase mb-4 flex-wrap">
            <span className="bg-[#0c0c0c] text-white px-2 py-0.5">
              Case Study
            </span>
            <span className="text-[#0c0c0c]/40 mx-1">·</span>
            <span className="text-[#686868] normal-case tracking-normal">
              05 Sep 2024
            </span>
          </div>

          <h1 className="font-playfair text-4xl md:text-[48px] font-extrabold text-[#0c0c0c] leading-[1.08] tracking-[-0.02em] mb-5">
            How to Sell Your Trading Strategy Online in India{" "}
            <em className="italic text-[#686868] font-light">
              (Without Giving Away Your Code)
            </em>
          </h1>

          <p className="text-[18px] font-light text-[#3a3a3a] leading-[1.6] mb-5 font-playfair italic">
            A SEBI-compliant way to monetize your algo — and why most Indian
            traders trying to do this keep hitting the same three walls.
          </p>

          <div className="text-[13px] text-[#686868] font-light">
            5 min read &nbsp;·&nbsp; TradeMade Research
          </div>
        </header>

        {/* Article Content */}
        <div className="text-[17px] leading-[1.8] font-light text-[#0c0c0c]">
          <p className="mb-6">
            If you've built a profitable trading strategy and thought about
            letting others run it, you've probably also discovered that actually
            doing it is surprisingly difficult.
          </p>

          <p className="mb-6">
            This is the story of <strong>Vikram</strong> — a quant trader from
            Pune who spent three years trying to list his algo on various
            platforms before finding something that actually worked.
          </p>

          <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
            The Strategy Was Proven. The Platform Problem Wasn't.
          </h2>

          <p className="mb-6">
            Vikram's mean-reversion strategy on Nifty 50 stocks had 18 months of
            live audited results. Not backtested — live. He wasn't selling hope.
            He had an edge, documented, with real trade logs.
          </p>

          <p className="mb-6">
            What he wanted was simple: let other traders run his strategy
            without him babysitting their accounts manually or handing over his
            source code.
          </p>

          <div className="bg-[#0c0c0c] text-white p-6 my-8 font-syne text-[18px] font-bold tracking-[-0.01em] border-l-4 border-[#686868]">
            What he found was that "simple" doesn't describe the Indian algo
            distribution problem at all.
          </div>

          <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
            Three Platforms. Three Different Reasons It Didn't Work.
          </h2>

          <div className="flex flex-col gap-8 my-10">
            {/* Reason 1 */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-syne text-[12px] font-bold text-[#fafaf7] bg-[#0c0c0c] px-2 py-0.5">
                  Platform 1
                </span>
                <h3 className="font-syne text-[18px] font-bold text-[#0c0c0c] m-0">
                  The Proprietary Language Trap
                </h3>
              </div>
              <p className="text-[#3a3a3a] leading-[1.6]">
                The first platform had decent traffic. But to list, he had to
                rebuild his strategy in their proprietary scripting language.
                Three weeks of migration work. When the backtesting results came
                out inconsistent — not dramatically wrong, but wrong in ways he
                couldn't explain — he asked support. He got a template reply
                about "market conditions." He never listed.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="pl-4 md:pl-6 border-l border-[#dad5cc]">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-syne text-[12px] font-bold text-[#fafaf7] bg-[#0c0c0c] px-2 py-0.5">
                  Platform 2
                </span>
                <h3 className="font-syne text-[18px] font-bold text-[#0c0c0c] m-0">
                  The SEBI Question
                </h3>
              </div>
              <p className="text-[#3a3a3a] leading-[1.6]">
                Platform 2 was technically better. But it wasn't SEBI RA
                registered. Every serious buyer Vikram spoke to asked the same
                question first: <em>"Is this SEBI-compliant?"</em> He couldn't
                answer yes. Conversations died there. Every time.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="pl-8 md:pl-12 border-l-2 border-[#dad5cc]">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-syne text-[12px] font-bold text-[#fafaf7] bg-[#0c0c0c] px-2 py-0.5">
                  Platform 3
                </span>
                <h3 className="font-syne text-[18px] font-bold text-[#0c0c0c] m-0">
                  The Single-Broker Problem
                </h3>
              </div>
              <p className="text-[#3a3a3a] leading-[1.6]">
                Platform 3 worked — but only for Zerodha. Around 40% of the
                people who expressed interest used Upstox, Angel One, or Fyers.
                Every time he told them it wouldn't work on their broker, he
                watched a potential subscriber walk away.
              </p>
            </div>
          </div>

          <div className="py-6 my-10 border-y border-[#dad5cc]">
            <p className="font-playfair text-[20px] font-semibold italic leading-[1.5] text-[#3a3a3a] m-0">
              "I wasn't trying to build a hobby project. I wanted to run a real
              algo business. The infrastructure kept treating me like I wasn't."
            </p>
          </div>

          <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
            What Actually Needed to Be True
          </h2>

          <p className="mb-6">
            Before signing up for anything new, Vikram made a non-negotiable
            list:
          </p>

          <ul className="list-none space-y-3 my-8 bg-[#edeae2] p-6 border border-[#dad5cc]">
            <li className="flex gap-3 items-start">
              <span className="text-[#0c0c0c] font-bold">✓</span>{" "}
              <span className="text-[#3a3a3a]">
                Deploy to multiple brokers from one strategy — no separate
                codebases
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#0c0c0c] font-bold">✓</span>{" "}
              <span className="text-[#3a3a3a]">
                Backtest on real tick data so published results hold up to
                scrutiny
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#0c0c0c] font-bold">✓</span>{" "}
              <span className="text-[#3a3a3a]">
                SEBI RA registered so he could answer that question honestly
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[#0c0c0c] font-bold">✓</span>{" "}
              <span className="text-[#3a3a3a]">
                No-code parameter adjustment for buyers — without exposing his
                logic
              </span>
            </li>
          </ul>

          {/* CTA Banner */}
          <div className="bg-[#0c0c0c] text-white p-8 my-12 relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 text-[180px] text-white/[0.03] transition-transform group-hover:scale-110 duration-700 pointer-events-none">
              <ShieldCheck weight="fill" />
            </div>
            <h3 className="font-syne text-[20px] font-bold mb-3 relative z-10">
              💡 Built a strategy worth sharing but stuck on the "how"?
            </h3>
            <p className="text-white/80 text-[15px] mb-6 relative z-10 max-w-[90%]">
              TradeMade is SEBI RA registered, supports multi-broker deployment,
              and protects your strategy logic completely.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white text-[#0c0c0c] px-5 py-2.5 font-syne text-[13px] font-bold tracking-[0.04em] uppercase hover:bg-[#f0f0f0] transition-colors relative z-10"
            >
              List your strategy on TradeMade <ArrowRight weight="bold" />
            </Link>
          </div>

          <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
            From Signup to Live in 11 Days
          </h2>

          <p className="mb-6">
            TradeMade cleared all four requirements. Vikram listed his first
            strategy 11 days after signing up — including the time he spent
            rebuilding the backtest from scratch on tick data to make sure the
            published numbers were honest.
          </p>
          <p className="mb-6">
            The multi-broker deployment meant it didn't matter which broker a
            subscriber used. The no-code interface meant buyers could adjust
            parameters themselves. His code stayed private.
          </p>

          <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
            What the Business Looks Like Now
          </h2>

          <div className="flex gap-4 md:gap-8 my-8 text-center border-y border-[#dad5cc] py-6">
            <div className="flex-1">
              <div className="font-playfair text-4xl font-extrabold text-[#0c0c0c]">
                34
              </div>
              <div className="text-[13px] font-syne uppercase tracking-widest text-[#686868] mt-2">
                Active Subscribers
              </div>
            </div>
            <div className="w-[1px] bg-[#dad5cc]"></div>
            <div className="flex-1">
              <div className="font-playfair text-4xl font-extrabold text-[#0c0c0c]">
                4
              </div>
              <div className="text-[13px] font-syne uppercase tracking-widest text-[#686868] mt-2">
                Different Brokers
              </div>
            </div>
          </div>

          <p className="mb-6">
            He touches the strategy code maybe once a month — usually a
            parameter tweak after a market regime change. The support load that
            used to eat his evenings (broker connection issues, order placement
            questions, settings problems) is handled by the platform
            infrastructure.
          </p>

          <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
            If You're Thinking About Monetizing Your Strategy
          </h2>

          <p className="mb-6">
            Here's the honest version of what you need before listing anywhere:
          </p>

          <div className="overflow-x-auto my-8 border border-[#dad5cc] bg-white">
            <table className="w-full text-left text-[14px] min-w-[500px] border-collapse">
              <thead>
                <tr>
                  <th className="font-syne text-[11px] tracking-[0.08em] uppercase py-3 px-4 border-b border-[#dad5cc] bg-[#0c0c0c] font-bold text-white w-2/5">
                    Requirement
                  </th>
                  <th className="font-syne text-[11px] tracking-[0.08em] uppercase py-3 px-4 border-b border-[#dad5cc] bg-[#edeae2] font-bold text-[#0c0c0c]">
                    Why It Matters
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dad5cc]">
                <tr className="hover:bg-[#fafaf7]">
                  <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                    Audited live results (not just backtest)
                  </td>
                  <td className="py-3 px-4 text-[#3a3a3a]">
                    Serious buyers will ask. Backtest-only credibility is thin.
                  </td>
                </tr>
                <tr className="hover:bg-[#fafaf7]">
                  <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                    SEBI RA compliance on the platform
                  </td>
                  <td className="py-3 px-4 text-[#3a3a3a]">
                    The first question every capital-serious buyer asks.
                  </td>
                </tr>
                <tr className="hover:bg-[#fafaf7]">
                  <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                    Multi-broker support
                  </td>
                  <td className="py-3 px-4 text-[#3a3a3a]">
                    You're cutting your addressable market by 40%+ if you're
                    Zerodha-only.
                  </td>
                </tr>
                <tr className="hover:bg-[#fafaf7]">
                  <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                    Strategy logic protection
                  </td>
                  <td className="py-3 px-4 text-[#3a3a3a]">
                    You shouldn't have to choose between distribution and IP.
                  </td>
                </tr>
                <tr className="hover:bg-[#fafaf7]">
                  <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                    No-code buyer interface
                  </td>
                  <td className="py-3 px-4 text-[#3a3a3a]">
                    Reduces your support load dramatically post-listing.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-6 font-bold text-[#0c0c0c]">
            A marketplace that checks all five exists now. That wasn't true
            three years ago.
          </p>

          {/* Footer CTA */}
          <div className="mt-14 pt-8 border-t-2 border-[#0c0c0c] text-[14px]">
            <p className="mb-4 text-[#3a3a3a] italic">
              TradeMade's algo marketplace is SEBI RA registered and supports
              multi-broker deployment across major Indian brokers including
              Zerodha, Upstox, Angel One, and Fyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link
                href="/services"
                className="inline-flex justify-center items-center gap-2 bg-[#0c0c0c] text-white px-5 py-3 font-syne text-[13px] font-bold tracking-[0.04em] uppercase hover:bg-[#3a3a3a] transition-colors"
              >
                Start listing your strategy <ArrowRight weight="bold" />
              </Link>
            </div>
            <p className="mt-6 text-[#686868] text-[13px]">
              Already tried other platforms and ran into similar problems?{" "}
              <Link href="/contact" className="underline hover:text-[#0c0c0c]">
                Tell us what happened
              </Link>{" "}
              — we read every message.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
