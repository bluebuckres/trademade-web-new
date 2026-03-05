import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Buildings,
} from "@phosphor-icons/react/dist/ssr";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { RecentPostsSidebar } from "@/components/blog/RecentPostsSidebar";

export const metadata: Metadata = {
  title: "How a Prop Trading Desk Scaled to 50+ Accounts | TradeMade",
  description:
    "The operational reality of running a prop desk in India — and the infrastructure that made consistent multi-account execution actually possible.",
  keywords: [
    "prop trading desk India",
    "multi-account execution",
    "scale prop firm",
    "algo trading operations",
    "same second execution",
  ],
  openGraph: {
    title:
      "How a Prop Trading Desk Scaled to 50+ Accounts Without Adding Headcount",
    description:
      "The operational reality of running a prop desk in India — and the infrastructure that made consistent multi-account execution actually possible.",
    url: "https://trademade.in/blog/how-a-prop-trading-desk-scaled-to-50-accounts",
    type: "article",
  },
  alternates: {
    canonical:
      "https://trademade.in/blog/how-a-prop-trading-desk-scaled-to-50-accounts",
  },
};

export default function PropDeskCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "How a Prop Trading Desk Scaled to 50+ Accounts Without Adding Headcount",
    datePublished: "2024-11-18T00:00:00+00:00",
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
                  18 Nov 2024
                </span>
              </div>

              <h1 className="font-playfair text-4xl md:text-[48px] font-extrabold text-[#0c0c0c] leading-[1.08] tracking-[-0.02em] mb-5">
                How a Prop Trading Desk Scaled to 50+ Accounts{" "}
                <em className="italic text-[#686868] font-light">
                  Without Adding Headcount
                </em>
              </h1>

              <p className="text-[18px] font-light text-[#3a3a3a] leading-[1.6] mb-5 font-playfair italic">
                The operational reality of running a prop desk in India — and
                the infrastructure that made consistent multi-account execution
                actually possible.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-5">
                <div className="text-[13px] text-[#686868] font-light">
                  6 min read &nbsp;·&nbsp; TradeMade Research
                </div>
                <ShareButtons title="How a Prop Trading Desk Scaled to 50+ Accounts Without Adding Headcount | TradeMade" />
              </div>
            </header>

            <div className="text-[17px] leading-[1.8] font-light text-[#0c0c0c]">
              <p className="mb-6">
                Scaling a prop trading desk sounds like a growth problem. More
                accounts, more capital, more profit.
              </p>

              <p className="mb-6">
                In practice it's mostly an operations problem. More accounts
                means more execution points, more broker relationships, more
                things that can go wrong at 9:15am on a volatile morning — and
                more people whose capital you're responsible for when they do.
              </p>

              <p className="mb-6">
                <strong>Sandeep</strong> runs a prop desk in Mumbai. When he was
                managing 12 accounts, the operation was manageable.
                Uncomfortable, but manageable. By the time he crossed 30, it had
                become a second full-time job — one that paid in stress rather
                than salary.
              </p>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                What Running 30+ Accounts Manually Actually Looks Like
              </h2>

              <p className="mb-6">
                Sandeep's desk ran three core strategies across accounts of
                varying sizes. Different traders, different brokers, different
                capital bases, same underlying logic. On paper: straightforward.
              </p>

              <div className="bg-[#edeae2] p-6 my-8 border border-[#dad5cc]">
                <h3 className="font-syne text-[14px] font-bold tracking-[0.08em] uppercase text-[#0c0c0c] mb-4">
                  In practice, every morning:
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-[15px] text-[#3a3a3a]">
                  <li>Check which accounts had margin issues overnight</li>
                  <li>
                    Verify broker connections hadn't dropped (they dropped.
                    Regularly.)
                  </li>
                  <li>
                    Place the opening signal across accounts before the first
                    candle closed
                  </li>
                  <li>
                    Reconcile which accounts executed correctly and which missed
                  </li>
                  <li>
                    Handle the calls from traders whose accounts showed
                    different fills
                  </li>
                </ul>
              </div>

              <p className="mb-6">
                <strong>The execution gap was the core problem.</strong> By the
                time a signal was manually replicated across 30+ accounts, the
                first accounts in had clean fills. The last accounts in were
                getting whatever was left at a price that had moved 8–15 ticks.
              </p>

              <p className="mb-6 font-bold text-[#0c0c0c]">
                Same strategy. Different P&L per account. Every single day.
              </p>

              <p className="mb-6">
                That inconsistency wasn't just an operational nuisance — it was
                a trust problem. When traders in the same desk with the same
                strategy see different returns, the assumption isn't "execution
                lag." The assumption is favouritism. Sandeep was spending more
                time managing those conversations than managing the strategies.
              </p>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                The Headcount Temptation
              </h2>

              <p className="mb-6">
                The obvious solution was to hire. Another execution person,
                maybe two, to handle account management in parallel. Sandeep
                almost did it. He interviewed three candidates.
              </p>

              <p className="mb-6">
                Then he did the math: ₹40,000–₹60,000/month per person, plus the
                training time, plus the human error they'd introduce, plus the
                fact that even two people placing orders manually would still
                have sequential execution — which meant the gap problem wouldn't
                disappear. It would just be distributed across more hands.
              </p>

              <div className="py-6 my-10 border-y border-[#dad5cc]">
                <p className="font-playfair text-[20px] font-semibold italic leading-[1.5] text-[#3a3a3a] m-0">
                  "At some point I realized I wasn't running a prop desk. I was
                  running a manual order placement operation that happened to
                  have a strategy attached to it."
                </p>
              </div>

              <p className="mb-6 font-bold text-[#0c0c0c]">
                Hiring more people to do a manual job faster isn't a solution.
                It's a more expensive version of the same problem.
              </p>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                What the Infrastructure Actually Needed to Do
              </h2>

              <p className="mb-6">
                Before evaluating anything, Sandeep listed what the operation
                actually required:
              </p>

              <ul className="space-y-6 my-8">
                <li className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0c0c0c] mt-2.5 shrink-0" />
                  <div>
                    <strong className="block text-[#0c0c0c] mb-1">
                      Same-second execution
                    </strong>
                    Across all accounts when a signal fires — not sequential,
                    parallel.
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0c0c0c] mt-2.5 shrink-0" />
                  <div>
                    <strong className="block text-[#0c0c0c] mb-1">
                      Per-account position sizing
                    </strong>
                    Based on each account's capital base and risk parameters.
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0c0c0c] mt-2.5 shrink-0" />
                  <div>
                    <strong className="block text-[#0c0c0c] mb-1">
                      Multi-broker support
                    </strong>
                    His desk ran across Zerodha, Upstox, Angel One, and Fyers.
                    Standardizing brokers wasn't an option.
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0c0c0c] mt-2.5 shrink-0" />
                  <div>
                    <strong className="block text-[#0c0c0c] mb-1">
                      Real-time monitoring
                    </strong>
                    Knowing immediately if an account missed an execution, not
                    discovering it in an EOD reconciliation.
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0c0c0c] mt-2.5 shrink-0" />
                  <div>
                    <strong className="block text-[#0c0c0c] mb-1">
                      No single point of failure
                    </strong>
                    If one broker's API went down, other accounts should
                    continue unaffected.
                  </div>
                </li>
              </ul>

              <p className="mb-6 font-bold text-[#0c0c0c]">
                Most solutions he evaluated cleared two or three of these.
                TradeMade cleared all five.
              </p>

              {/* CTA Banner */}
              <div className="bg-[#0c0c0c] text-white p-8 my-12 relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 text-[180px] text-white/[0.03] transition-transform group-hover:scale-110 duration-700 pointer-events-none">
                  <Buildings weight="fill" />
                </div>
                <h3 className="font-syne text-[20px] font-bold mb-3 relative z-10">
                  💡 Running a prop desk or managing multiple trader accounts?
                </h3>
                <p className="text-white/80 text-[15px] mb-6 relative z-10 max-w-[90%]">
                  Manual execution at scale isn't a discipline problem — it's an
                  infrastructure problem. Here's what same-second multi-account
                  execution looks like.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-white text-[#0c0c0c] px-5 py-2.5 font-syne text-[13px] font-bold tracking-[0.04em] uppercase hover:bg-[#f0f0f0] transition-colors relative z-10"
                >
                  Book a prop desk demo <ArrowRight weight="bold" />
                </Link>
              </div>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                The Migration
              </h2>

              <p className="mb-6">
                Sandeep migrated the desk over four weeks — one strategy at a
                time, running parallel execution between the old manual system
                and TradeMade to verify results matched before fully switching
                over.
              </p>

              <p className="mb-6">
                The migration itself was the validation. Running both systems
                side-by-side made the execution gap visible in real numbers for
                the first time. The manual accounts were averaging 6–11 tick
                slippage on entries versus the TradeMade-executed accounts. On a
                50-lot position, that difference per trade was material.
              </p>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                Six Months After Full Migration
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
                        Accounts managed
                      </td>
                      <td className="py-3 px-4 text-[#686868]">30</td>
                      <td className="py-3 px-4 font-bold text-[#0c0c0c]">54</td>
                    </tr>
                    <tr className="hover:bg-[#fafaf7]">
                      <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                        Execution staff needed
                      </td>
                      <td className="py-3 px-4 text-[#686868]">2 people</td>
                      <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                        0 additional
                      </td>
                    </tr>
                    <tr className="hover:bg-[#fafaf7]">
                      <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                        Average execution gap across accounts
                      </td>
                      <td className="py-3 px-4 text-[#686868]">6–11 ticks</td>
                      <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                        Under 1 tick
                      </td>
                    </tr>
                    <tr className="hover:bg-[#fafaf7]">
                      <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                        EOD reconciliation time
                      </td>
                      <td className="py-3 px-4 text-[#686868]">90 minutes</td>
                      <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                        15 minutes
                      </td>
                    </tr>
                    <tr className="hover:bg-[#fafaf7]">
                      <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                        "Why is my P&L different" conversations
                      </td>
                      <td className="py-3 px-4 text-[#686868]">Daily</td>
                      <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                        Rare
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-6">
                The desk scaled from 30 to 54 accounts without adding a single
                execution headcount. The two people who had been doing manual
                order placement moved to strategy research — which is what
                Sandeep had originally hired them to do.
              </p>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                What Prop Desks Get Wrong About Scaling
              </h2>

              <p className="mb-6">
                Most desks hit the same ceiling at different account counts —
                somewhere between 15 and 40, depending on how many strategies
                they run and how many brokers they support. The ceiling isn't
                capital. It isn't strategy quality. It's always operations.
              </p>

              <p className="mb-6">
                The desks that scale past it aren't the ones with better
                traders. They're the ones that stopped treating execution as a
                human job.
              </p>

              <p className="mb-6">
                <strong>A few honest realities:</strong>
              </p>

              <ol className="list-decimal pl-5 space-y-4 mb-8 text-[16px]">
                <li>
                  <strong>Consistent execution IS the product</strong> — if your
                  traders see different P&L for the same strategy, your edge
                  doesn't matter. The trust problem kills the desk first.
                </li>
                <li>
                  <strong>Broker diversity is non-negotiable at scale</strong> —
                  forcing all accounts onto one broker creates operational
                  fragility and limits who can participate.
                </li>
                <li>
                  <strong>
                    Per-account risk parameters need to be systematic
                  </strong>{" "}
                  — applying uniform lot sizes across different capital bases is
                  how you blow up a small account during a volatile session.
                </li>
                <li>
                  <strong>Monitoring needs to be real-time, not EOD</strong> —
                  discovering a missed execution at 5pm is discovering it 7
                  hours too late.
                </li>
              </ol>

              {/* Footer CTA */}
              <div className="mt-14 pt-8 border-t-2 border-[#0c0c0c] text-[14px]">
                <p className="mb-4 text-[#3a3a3a] italic">
                  TradeMade's multi-account deployment infrastructure supports
                  prop desks managing 50+ accounts across multiple brokers with
                  same-second execution, per-account position sizing, and
                  real-time monitoring.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex justify-center items-center gap-2 bg-[#0c0c0c] text-white px-5 py-3 font-syne text-[13px] font-bold tracking-[0.04em] uppercase hover:bg-[#3a3a3a] transition-colors"
                  >
                    Talk to us about your prop desk setup{" "}
                    <ArrowRight weight="bold" />
                  </Link>
                </div>
                <p className="mt-6 text-[#686868] text-[13px]">
                  Already running a desk and hitting the scaling ceiling?{" "}
                  <Link
                    href="/contact"
                    className="underline hover:text-[#0c0c0c]"
                  >
                    Let's have an honest conversation
                  </Link>{" "}
                  about what's blocking you.
                </p>
              </div>
            </div>
          </article>{" "}
          {/* Closes main content article */}
          <aside className="hidden lg:block relative h-full">
            <div className="sticky top-24 pt-8 border-t-2 border-[#0c0c0c] lg:border-t-0 lg:pt-0">
              <RecentPostsSidebar currentSlug="/blog/how-a-prop-trading-desk-scaled-to-50-accounts" />
            </div>
          </aside>
          {/* Mobile sidebar */}
          <aside className="block lg:hidden mt-20 pt-10 border-t-2 border-[#0c0c0c]">
            <RecentPostsSidebar currentSlug="/blog/how-a-prop-trading-desk-scaled-to-50-accounts" />
          </aside>
        </div>{" "}
        {/* Closes grid container */}
      </div>{" "}
      {/* Closes max-w container */}
    </main>
  );
}
