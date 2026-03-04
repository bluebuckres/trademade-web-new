import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Code } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Building a Trading Algo Without Coding | TradeMade",
  description:
    "A non-technical trader's honest account of going from manual trading to a fully automated algo — no Python, no developer, no coding bootcamp.",
  keywords: [
    "no code algo trading",
    "algo trading without coding",
    "automated trading India",
    "TradeMade no code builder",
  ],
  openGraph: {
    title:
      "How to Build a Trading Algorithm Without Writing a Single Line of Code",
    description:
      "A non-technical trader's honest account of going from manual trading to a fully automated algo.",
    url: "https://trademade.in/blog/how-to-build-a-trading-algorithm-without-coding",
    type: "article",
  },
  alternates: {
    canonical:
      "https://trademade.in/blog/how-to-build-a-trading-algorithm-without-coding",
  },
};

export default function NoCodeCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "How to Build a Trading Algorithm Without Writing a Single Line of Code",
    datePublished: "2024-10-15T00:00:00+00:00",
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
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-[#0c0c0c] transition-colors mb-10 font-medium text-sm"
        >
          <ArrowLeft weight="bold" /> Back to Research
        </Link>

        <header className="mb-10 border-b-2 border-[#0c0c0c] pb-8">
          <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.14em] text-[#0c0c0c] uppercase mb-4 flex-wrap">
            <span className="bg-[#0c0c0c] text-white px-2 py-0.5">
              Case Study
            </span>
            <span className="text-[#0c0c0c]/40 mx-1">·</span>
            <span className="text-[#686868] normal-case tracking-normal">
              15 Oct 2024
            </span>
          </div>

          <h1 className="font-playfair text-4xl md:text-[48px] font-extrabold text-[#0c0c0c] leading-[1.08] tracking-[-0.02em] mb-5">
            How to Build a Trading Algorithm{" "}
            <em className="italic text-[#686868] font-light">
              Without Writing a Single Line of Code
            </em>
          </h1>

          <p className="text-[18px] font-light text-[#3a3a3a] leading-[1.6] mb-5 font-playfair italic">
            A non-technical trader's honest account of going from manual trading
            to a fully automated algo — no Python, no developer, no coding
            bootcamp.
          </p>

          <div className="text-[13px] text-[#686868] font-light">
            6 min read &nbsp;·&nbsp; TradeMade Research
          </div>
        </header>

        <div className="text-[17px] leading-[1.8] font-light text-[#0c0c0c]">
          <p className="mb-6">
            Most content about algo trading in India is written for people who
            already know what a for-loop is. This isn't that.
          </p>

          <p className="mb-6">
            This is for the trader who has a clear strategy in their head, has
            been executing it manually for years, and keeps wondering — why am I
            still sitting here watching screens when this should be running
            itself?
          </p>

          <p className="mb-6">
            <strong>Priya</strong> had been asking that question for two years
            before she did anything about it.
          </p>

          <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
            She Had the Strategy. She Just Didn't Have the Code.
          </h2>

          <p className="mb-6">
            Priya is a schoolteacher from Nagpur. She started trading in 2019,
            lost money the first year the way most retail traders do, and spent
            the next two years actually learning — reading, paper trading,
            studying price action on Bank Nifty.
          </p>

          <p className="mb-6">
            By 2022 she had a rule-based strategy. Not vague rules like "buy
            when it looks strong." Actual rules:
          </p>

          <ul className="list-disc pl-5 space-y-2 mb-6 text-[16px] text-[#3a3a3a]">
            <li>
              Entry condition based on a specific EMA crossover with volume
              confirmation
            </li>
            <li>Stop loss at a fixed percentage below entry</li>
            <li>Exit at a target or at 2:45pm, whichever came first</li>
          </ul>

          <p className="mb-6">
            She could explain every decision in plain English. What she couldn't
            do was turn it into code.
          </p>

          <p className="mb-6">
            She tried. She watched YouTube tutorials on Python for traders. She
            got through the basics, hit the part about connecting to broker
            APIs, and stopped. It wasn't that she couldn't learn it — it's that
            she had a full-time job and a strategy that already worked. She
            didn't need to become a software engineer. She needed her rules to
            run automatically.
          </p>

          <div className="bg-[#0c0c0c] text-white p-6 my-8 font-syne text-[18px] font-bold tracking-[-0.01em] border-l-4 border-[#686868]">
            The strategy was done. The tool to run it wasn't.
          </div>

          <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
            What She Tried First
          </h2>

          <div className="flex flex-col gap-6 my-8">
            <div className="border border-[#dad5cc] p-6 bg-white">
              <h3 className="font-syne font-bold text-[16px] text-[#0c0c0c] uppercase tracking-widest mb-2">
                Hiring a developer
              </h3>
              <p className="text-[#3a3a3a] m-0">
                She posted on a freelance platform. Got three quotes ranging
                from ₹15,000 to ₹45,000. The cheapest one built something that
                worked for two weeks, then broke when Zerodha updated their API.
                She paid ₹8,000 more to get it fixed. It broke again.
              </p>
            </div>

            <div className="border border-[#dad5cc] p-6 bg-white">
              <h3 className="font-syne font-bold text-[16px] text-[#0c0c0c] uppercase tracking-widest mb-2">
                Pre-built signal services
              </h3>
              <p className="text-[#3a3a3a] m-0">
                She subscribed to two different Telegram signal services for a
                combined ₹4,000/month. One had good calls, the other was
                inconsistent. Both required her to be at her phone at the exact
                moment the signal came in to place the trade manually — which
                defeated the entire purpose.
              </p>
            </div>

            <div className="border border-[#dad5cc] p-6 bg-white">
              <h3 className="font-syne font-bold text-[16px] text-[#0c0c0c] uppercase tracking-widest mb-2">
                Visual Builders
              </h3>
              <p className="text-[#3a3a3a] m-0">
                She tried popular visual strategy builders. The interface made
                sense but the backtesting felt limited. She couldn't test on
                tick data, so she had no real confidence the results would hold
                live.
              </p>
            </div>
          </div>

          <div className="py-6 my-10 border-y border-[#dad5cc]">
            <p className="font-playfair text-[20px] font-semibold italic leading-[1.5] text-[#3a3a3a] m-0">
              "I kept being told algo trading was the future. What nobody told
              me was that the 'future' assumed you had a computer science
              degree."
            </p>
          </div>

          <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
            What No-Code Actually Means on TradeMade
          </h2>

          <p className="mb-6">
            When Priya found TradeMade's no-code builder, her first reaction was
            scepticism. She'd seen "no-code" promised before. What made this
            different: the builder worked in conditions, not in code.
          </p>

          <p className="mb-6">
            She defined her strategy in plain logic blocks:
          </p>

          <div className="bg-[#0c0c0c] text-white p-6 my-8 font-mono text-[14px] leading-loose">
            <span className="text-[#ffcc44]">IF</span> EMA(9) crosses above
            EMA(21) <span className="text-[#ffcc44]">AND</span> volume {">"}{" "}
            20-day average
            <br />
            <span className="text-[#ffcc44]">THEN</span> buy at market
            <br />
            <span className="text-[#ffcc44]">SET</span> stop loss at 1.2% below
            entry
            <br />
            <span className="text-[#ffcc44]">EXIT</span> at 2.5% target{" "}
            <span className="text-[#ffcc44]">OR</span> at 2:45pm
          </div>

          <p className="mb-6">
            That's it. No syntax. No brackets. No debugging.
          </p>

          <p className="mb-6">
            She then backtested it on TradeMade's tick-level historical data —
            three years of Bank Nifty data, every tick — before deploying a
            single rupee.
          </p>

          <p className="mb-6">
            The backtest results told her two things: the strategy had a real
            edge, and her original target was slightly too aggressive for the
            actual volatility profile. She adjusted it to 2.1%. That came from
            the data, not guesswork.
          </p>

          {/* CTA Banner */}
          <div className="bg-[#0c0c0c] text-white p-8 my-12 relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 text-[180px] text-white/[0.03] transition-transform group-hover:scale-110 duration-700 pointer-events-none">
              <Code weight="fill" />
            </div>
            <h3 className="font-syne text-[20px] font-bold mb-3 relative z-10">
              💡 Have a rule-based strategy you've been executing manually?
            </h3>
            <p className="text-white/80 text-[15px] mb-6 relative z-10 max-w-[90%]">
              If you can explain your entry and exit in plain English, you can
              build it on TradeMade — no code needed.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white text-[#0c0c0c] px-5 py-2.5 font-syne text-[13px] font-bold tracking-[0.04em] uppercase hover:bg-[#f0f0f0] transition-colors relative z-10"
            >
              Try the no-code strategy builder <ArrowRight weight="bold" />
            </Link>
          </div>

          <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
            Six Months of Running It Live
          </h2>

          <p className="mb-6">
            Priya deployed her strategy in January. By June she had six months
            of live data to compare against her backtest.
          </p>

          <div className="overflow-x-auto my-8 border border-[#dad5cc] bg-white">
            <table className="w-full text-left text-[14px] min-w-[500px] border-collapse">
              <thead>
                <tr>
                  <th className="font-syne text-[11px] tracking-[0.08em] uppercase py-3 px-4 border-b border-[#dad5cc] bg-[#edeae2] font-bold text-[#0c0c0c]">
                    Metric
                  </th>
                  <th className="font-syne text-[11px] tracking-[0.08em] uppercase py-3 px-4 border-b border-[#dad5cc] bg-[#edeae2] font-bold text-[#0c0c0c]">
                    Backtest (3 years)
                  </th>
                  <th className="font-syne text-[11px] tracking-[0.08em] uppercase py-3 px-4 border-b border-[#dad5cc] bg-[#0c0c0c] font-bold text-white">
                    Live (6 months)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dad5cc]">
                <tr className="hover:bg-[#fafaf7]">
                  <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                    Win rate
                  </td>
                  <td className="py-3 px-4 text-[#686868]">54%</td>
                  <td className="py-3 px-4 font-bold text-[#0c0c0c]">51%</td>
                </tr>
                <tr className="hover:bg-[#fafaf7]">
                  <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                    Average winner
                  </td>
                  <td className="py-3 px-4 text-[#686868]">2.1%</td>
                  <td className="py-3 px-4 font-bold text-[#0c0c0c]">1.95%</td>
                </tr>
                <tr className="hover:bg-[#fafaf7]">
                  <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                    Average loser
                  </td>
                  <td className="py-3 px-4 text-[#686868]">1.2%</td>
                  <td className="py-3 px-4 font-bold text-[#0c0c0c]">1.28%</td>
                </tr>
                <tr className="hover:bg-[#fafaf7]">
                  <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                    Monthly consistency
                  </td>
                  <td className="py-3 px-4 text-[#686868]">—</td>
                  <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                    5 of 6 months profitable
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-6">
            Not identical — live trading never exactly matches backtests. But
            close enough to confirm the edge was real and the data was honest.
          </p>

          <p className="mb-6 font-bold text-[#0c0c0c]">
            More importantly: she stopped watching screens. The strategy runs
            from 9:15am. She checks results in the evening. She still teaches
            school.
          </p>

          <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
            What Non-Technical Traders Actually Need to Know
          </h2>

          <p className="mb-6">
            Before you try to build your first algo, honest checklist:
          </p>

          <ol className="list-decimal pl-5 space-y-4 mb-8 text-[16px]">
            <li>
              <strong>Can you explain your strategy in IF/THEN rules?</strong>{" "}
              If yes, you can probably build it no-code. If your strategy relies
              on "feel" or discretion, automate later — systematize it manually
              first.
            </li>
            <li>
              <strong>
                Do you have at least 6 months of manual trade logs?
              </strong>{" "}
              Your backtest results are only meaningful if you can verify they
              match how you actually traded the strategy.
            </li>
            <li>
              <strong>Will you backtest on real data before going live?</strong>{" "}
              This is non-negotiable. A backtest on 1-minute candles and a
              backtest on tick data can give you very different confidence
              levels.
            </li>
            <li>
              <strong>Are you prepared for the first drawdown?</strong>{" "}
              Automated strategies have drawdowns just like manual ones. The
              difference is you can't intervene. Know your max drawdown
              threshold before you deploy.
            </li>
          </ol>

          <p className="mb-6">
            The technology barrier to algo trading is genuinely lower than it
            was three years ago. The strategy barrier — having a real edge,
            tested honestly — is exactly what it's always been.
          </p>

          {/* Footer CTA */}
          <div className="mt-14 pt-8 border-t-2 border-[#0c0c0c] text-[14px]">
            <p className="mb-4 text-[#3a3a3a] italic">
              TradeMade's no-code strategy builder lets retail traders automate
              rule-based strategies without coding. Includes tick-level
              backtesting and multi-broker deployment across major Indian
              brokers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link
                href="/services"
                className="inline-flex justify-center items-center gap-2 bg-[#0c0c0c] text-white px-5 py-3 font-syne text-[13px] font-bold tracking-[0.04em] uppercase hover:bg-[#3a3a3a] transition-colors"
              >
                Build your first algo in an afternoon{" "}
                <ArrowRight weight="bold" />
              </Link>
            </div>
            <p className="mt-6 text-[#686868] text-[13px]">
              Not sure if your strategy is systematizable?{" "}
              <Link href="/contact" className="underline hover:text-[#0c0c0c]">
                Drop us a message
              </Link>{" "}
              — we'll give you an honest answer.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
