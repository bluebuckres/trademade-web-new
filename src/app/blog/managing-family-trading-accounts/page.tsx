import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Table } from "@phosphor-icons/react/dist/ssr";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { RecentPostsSidebar } from "@/components/blog/RecentPostsSidebar";

export const metadata: Metadata = {
  title: "Managing Family Trading Accounts | TradeMade",
  description:
    "The real operational challenges of running a friends-and-family fund in India — and a setup that actually scales without daily headaches.",
  keywords: [
    "family fund",
    "friends and family trading",
    "copy trading India",
    "multi-account trading",
    "algo trading scale",
  ],
  openGraph: {
    title:
      "How to Manage Family and Friends' Trading Accounts Without Losing Your Mind",
    description:
      "The real operational challenges of running a friends-and-family fund in India — and a setup that actually scales.",
    url: "https://trademade.in/blog/managing-family-trading-accounts",
    type: "article",
  },
  alternates: {
    canonical: "https://trademade.in/blog/managing-family-trading-accounts",
  },
};

export default function FamilyFundCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "How to Manage Family and Friends' Trading Accounts Without Losing Your Mind",
    datePublished: "2024-08-12T00:00:00+00:00",
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
                  12 Aug 2024
                </span>
              </div>

              <h1 className="font-playfair text-4xl md:text-[48px] font-extrabold text-[#0c0c0c] leading-[1.08] tracking-[-0.02em] mb-5">
                How to Manage Family and Friends' Trading Accounts{" "}
                <em className="italic text-[#686868] font-light">
                  Without Losing Your Mind (or Their Trust)
                </em>
              </h1>

              <p className="text-[18px] font-light text-[#3a3a3a] leading-[1.6] mb-5 font-playfair italic">
                The real operational challenges of running a friends-and-family
                fund in India — and a setup that actually scales without daily
                headaches.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-5">
                <div className="text-[13px] text-[#686868] font-light">
                  6 min read &nbsp;·&nbsp; TradeMade Research
                </div>
                <ShareButtons title="How to Manage Family and Friends' Trading Accounts Without Losing Your Mind | TradeMade" />
              </div>
            </header>

            {/* Article Content */}
            <div className="text-[17px] leading-[1.8] font-light text-[#0c0c0c]">
              <p className="mb-6">
                Managing your own trading account is one job. Managing money for
                23 family members is a completely different job that happens to
                use some of the same vocabulary.
              </p>

              <p className="mb-6">
                This is how <strong>Arvind</strong> — a former software engineer
                turned quant trader from Mumbai — went from spending his
                mornings frantically copy-pasting orders across browser tabs to
                running a clean, automated multi-account operation before market
                open.
              </p>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                The Strategy Worked. The Operations Didn't.
              </h2>

              <p className="mb-6">
                Arvind spent four years building and refining his system before
                he touched a single rupee of family capital. Eighteen months of
                live results on his own account first. He knew what he was
                doing.
              </p>

              <p className="mb-6">
                What he didn't account for was what actually managing money for
                real people — people who call you when markets are red, people
                who forward you WhatsApp articles about "algo trading scams,"
                people who trusted you with their savings — actually requires
                operationally.
              </p>

              <div className="bg-[#0c0c0c] text-white p-6 my-8 font-syne text-[18px] font-bold tracking-[-0.01em] border-l-4 border-[#686868]">
                The trading wasn't the problem. The execution across 23 accounts
                was.
              </div>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                What "Manual Copy Trading" Actually Looks Like
              </h2>

              <p className="mb-6">
                Before automating, Arvind's morning looked like this: Market
                opens at 9:15am. Strategy signals fire. He places the trade in
                his own account first. Then — account by account — he replicates
                it. Copy order details. Switch browser tab. Log in. Place order.
                Confirm. Repeat across 23 accounts.
              </p>

              <div className="border border-[#dad5cc] bg-white p-6 my-8">
                <h3 className="font-syne text-[14px] font-bold tracking-[0.08em] uppercase text-[#0c0c0c] mb-4">
                  The Problems He Faced:
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-[15px]">
                  <li>
                    Angel One has a different order confirmation flow than
                    Zerodha
                  </li>
                  <li>Upstox logs you out after a few minutes of inactivity</li>
                  <li>
                    His mother's account was on ICICI Direct, which has its own
                    particular way of making simple things take longer
                  </li>
                  <li>
                    By the time he finished,{" "}
                    <strong>4–6 minutes had passed</strong> from his first
                    execution
                  </li>
                </ul>
              </div>

              <p className="mb-6">
                In intraday momentum trading, 4–6 minutes is enormous. Some
                accounts got good fills. Others were chasing a price that had
                moved. Every account had a slightly different P&L for the same
                strategy — which creates exactly the kind of trust-destroying
                questions you don't want to answer.
              </p>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                The Things He Tried Before This
              </h2>

              <div className="flex flex-col gap-6 my-8">
                <div className="bg-[#edeae2] p-6 border-l-2 border-[#0c0c0c]">
                  <h4 className="font-syne font-bold text-[16px] text-[#0c0c0c] mb-2">
                    Attempt 1: Third-party copy trading tool
                  </h4>
                  <p className="text-[15px] leading-[1.6] m-0">
                    Worked sometimes. Failed silently the other times. He'd only
                    discover a missed trade during his end-of-week account audit
                    — three accounts had skipped four trades, for no visible
                    reason.
                  </p>
                </div>

                <div className="bg-[#edeae2] p-6 border-l-2 border-[#0c0c0c]">
                  <h4 className="font-syne font-bold text-[16px] text-[#0c0c0c] mb-2">
                    Attempt 2: Standardize everyone on Zerodha
                  </h4>
                  <p className="text-[15px] leading-[1.6] m-0">
                    He had that conversation once. Eight family members would
                    have needed to switch brokers, transfer holdings, and go
                    through KYC again. He quietly dropped the idea.
                  </p>
                </div>
              </div>

              <div className="py-6 my-10 border-y border-[#dad5cc]">
                <p className="font-playfair text-[20px] font-semibold italic leading-[1.5] text-[#3a3a3a] m-0">
                  "The strategy had a real edge. But I was delivering a
                  different P&L to every account for reasons that had nothing to
                  do with the strategy. That's not a business. That's chaos with
                  good intentions."
                </p>
              </div>

              {/* CTA Banner */}
              <div className="bg-[#0c0c0c] text-white p-8 my-12 relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 text-[180px] text-white/[0.03] transition-transform group-hover:scale-110 duration-700 pointer-events-none">
                  <Table weight="fill" />
                </div>
                <h3 className="font-syne text-[20px] font-bold mb-3 relative z-10">
                  💡 Managing multiple accounts manually right now?
                </h3>
                <p className="text-white/80 text-[15px] mb-6 relative z-10 max-w-[90%]">
                  Even small execution delays compound across accounts and erode
                  your performance — and your credibility.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-white text-[#0c0c0c] px-5 py-2.5 font-syne text-[13px] font-bold tracking-[0.04em] uppercase hover:bg-[#f0f0f0] transition-colors relative z-10"
                >
                  See how TradeMade handles it <ArrowRight weight="bold" />
                </Link>
              </div>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                The Setup That Actually Scales
              </h2>

              <p className="mb-6">
                The framing that changed things for Arvind: think of it not as
                "copy trading" but as{" "}
                <strong>one strategy, many execution endpoints.</strong>
              </p>

              <p className="mb-6">
                His logic lives in one place. Risk parameters, position sizing
                rules, exit conditions — defined once. When a signal fires,
                every account executes within the same second. He places one
                order. The infrastructure handles the rest across every broker
                simultaneously.
              </p>

              <h3 className="font-syne text-[18px] font-bold mt-10 mb-4 text-[#0c0c0c]">
                What That Unlocks
              </h3>

              <ul className="space-y-6 my-8">
                <li className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0c0c0c] mt-2.5 shrink-0" />
                  <div>
                    <strong className="block text-[#0c0c0c] mb-1">
                      Consistent fills across accounts
                    </strong>
                    Every family member's account gets the same entry. The P&L
                    difference between accounts is now only the strategy's
                    performance — not Arvind's typing speed.
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0c0c0c] mt-2.5 shrink-0" />
                  <div>
                    <strong className="block text-[#0c0c0c] mb-1">
                      Per-account position sizing
                    </strong>
                    His family members have very different capital bases.
                    TradeMade lets him set sizing rules per account — so the
                    same signal doesn't put the same absolute rupee amount into
                    a conservative small account as a large one. He'd been doing
                    that math manually. Getting it wrong occasionally. Now it's
                    automatic.
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0c0c0c] mt-2.5 shrink-0" />
                  <div>
                    <strong className="block text-[#0c0c0c] mb-1">
                      Broker flexibility
                    </strong>
                    His family runs across Zerodha, Upstox, Angel One, and ICICI
                    Direct. All of them execute from the same strategy
                    deployment. No one needs to switch brokers.
                  </div>
                </li>
              </ul>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                Seven Months In
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
                        Time spent on order placement per day
                      </td>
                      <td className="py-3 px-4 text-[#686868]">30–45 mins</td>
                      <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                        Under 5 mins
                      </td>
                    </tr>
                    <tr className="hover:bg-[#fafaf7]">
                      <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                        Execution consistency across accounts
                      </td>
                      <td className="py-3 px-4 text-[#686868]">Variable</td>
                      <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                        Same-second execution
                      </td>
                    </tr>
                    <tr className="hover:bg-[#fafaf7]">
                      <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                        Weekly "why is my P&L different" questions
                      </td>
                      <td className="py-3 px-4 text-[#686868]">Frequent</td>
                      <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                        Rare
                      </td>
                    </tr>
                    <tr className="hover:bg-[#fafaf7]">
                      <td className="py-3 px-4 text-[#3a3a3a] font-medium">
                        Accounts missed due to manual error
                      </td>
                      <td className="py-3 px-4 text-[#686868]">
                        Several per month
                      </td>
                      <td className="py-3 px-4 font-bold text-[#0c0c0c]">
                        Near zero
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-6">
                The 7pm calls from family still happen. But they're about
                strategy questions now — genuine curiosity about how the system
                works — not "what happened, why did my account miss that trade."
              </p>

              <p className="mb-6 font-bold text-[#0c0c0c]">
                That is a conversation Arvind can have. The other one was
                quietly destroying trust.
              </p>

              <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
                If You're Managing Family or Friends' Capital
              </h2>

              <p className="mb-6">
                Honestly, the operational checklist before you scale this kind
                of setup:
              </p>

              <ol className="list-decimal pl-5 space-y-4 mb-8 text-[16px]">
                <li>
                  <strong>Don't start manually</strong> — it feels manageable at
                  3 accounts and becomes unmanageable at 8.
                </li>
                <li>
                  <strong>Assume different brokers</strong> — standardizing
                  accounts is a harder conversation than you think.
                </li>
                <li>
                  <strong>Build per-account sizing in from day one</strong> —
                  applying uniform lot sizes across different capital bases is a
                  risk management problem.
                </li>
                <li>
                  <strong>Log everything</strong> — when a trade goes wrong, you
                  need to show exactly what happened in every account.
                </li>
              </ol>

              <p className="mb-6">
                The emotional weight of managing other people's money doesn't go
                away with better tooling. But the operational chaos can be
                eliminated — and that's the part that was actually threatening
                Arvind's relationships.
              </p>

              {/* Footer CTA */}
              <div className="mt-14 pt-8 border-t-2 border-[#0c0c0c] text-[14px]">
                <p className="mb-4 text-[#3a3a3a] italic">
                  TradeMade supports multi-broker, multi-account deployment with
                  per-account position sizing and real-time execution sync. Used
                  by traders managing family capital, prop desks, and portfolio
                  managers across India.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex justify-center items-center gap-2 bg-[#0c0c0c] text-white px-5 py-3 font-syne text-[13px] font-bold tracking-[0.04em] uppercase hover:bg-[#3a3a3a] transition-colors"
                  >
                    Book a free demo <ArrowRight weight="bold" />
                  </Link>
                </div>
                <p className="mt-6 text-[#686868] text-[13px]">
                  Managing a friends-and-family fund and navigating the
                  operational side?{" "}
                  <Link
                    href="/contact"
                    className="underline hover:text-[#0c0c0c]"
                  >
                    We're happy to talk through your setup
                  </Link>{" "}
                  — no sales pitch.
                </p>
              </div>
            </div>
          </article>

          <aside className="hidden lg:block relative h-full">
            <div className="sticky top-24 pt-8 border-t-2 border-[#0c0c0c] lg:border-t-0 lg:pt-0">
              <RecentPostsSidebar currentSlug="/blog/managing-family-trading-accounts" />
            </div>
          </aside>

          {/* Mobile sidebar */}
          <aside className="block lg:hidden mt-20 pt-10 border-t-2 border-[#0c0c0c]">
            <RecentPostsSidebar currentSlug="/blog/managing-family-trading-accounts" />
          </aside>
        </div>
      </div>
    </main>
  );
}
