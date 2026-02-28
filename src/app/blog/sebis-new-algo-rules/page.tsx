import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  Warning,
  ShieldWarning,
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "SEBI's New Algo Rules Are Here | TradeMade",
  description:
    "The NSE circular on API operating procedures is the most significant regulatory shift for algo traders since DMA. We break down every requirement.",
  keywords: [
    "SEBI",
    "algo trading rules",
    "static IP",
    "trading API",
    "NSE circular",
    "algo registration",
  ],
  openGraph: {
    title:
      "SEBI's New Algo Rules Are Here. Here's Exactly What Changes for You.",
    description:
      "The NSE circular on API operating procedures is the most significant regulatory shift for algo traders since DMA. We break down every requirement.",
    url: "https://trademade.in/blog/sebis-new-algo-rules",
    type: "article",
  },
  alternates: {
    canonical: "https://trademade.in/blog/sebis-new-algo-rules",
  },
};

export default function SebiAlgoRulesPost() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "SEBI's New Algo Rules Are Here. Here's Exactly What Changes for You.",
    datePublished: "2024-07-25T00:00:00+00:00",
    author: { "@type": "Organization", name: "TradeMade Compliance Desk" },
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
    <main className="min-h-screen bg-[#fafaf7] pt-32 pb-24 text-[#0c0c0c] selection:bg-[#c8391e]/20 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Banner specific to this post */}
      <div className="bg-[#1a3a5c] text-[#e8f0f8] text-center px-5 py-3 text-[13px] font-medium tracking-[0.02em] w-full absolute top-0 left-0 hover:bg-[#15304d] transition-colors cursor-pointer hidden md:block">
        📋 Running an algo? The April 1, 2026 SEBI deadline affects you.{" "}
        <strong className="text-[#ffcc44]">
          Talk to TradeMade — free compliance check →
        </strong>
      </div>

      <article className="max-w-[680px] mx-auto px-6 pt-8 md:pt-0">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-[#c8391e] transition-colors mb-10 font-medium text-sm"
        >
          <ArrowLeft weight="bold" /> Back to Research
        </Link>

        {/* Header */}
        <header className="mb-10 border-b-2 border-[#0c0c0c] pb-8">
          <div className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.14em] text-[#2c5f2e] uppercase mb-4 flex-wrap">
            <span>Regulation</span>
            <span className="text-[#0c0c0c]/40 mx-1">·</span>
            <span className="text-[#686868] normal-case tracking-normal">
              25 July 2024
            </span>
            <span className="text-[#0c0c0c]/40 mx-1">·</span>
            <span className="bg-[#c0392b]/10 text-[#c0392b] px-2.5 py-1 border border-[#c0392b]/20 tracking-[0.1em] animate-[pulse_2s_infinite]">
              Deadline: Apr 1 2026
            </span>
          </div>

          <h1 className="font-playfair text-4xl md:text-[48px] font-extrabold text-[#0c0c0c] leading-[1.08] tracking-[-0.02em] mb-5">
            SEBI's New Algo Rules Are Here.{" "}
            <em className="italic text-[#2c5f2e]">
              Here's Exactly What Changes for You.
            </em>
          </h1>

          <p className="text-[18px] font-light text-[#3a3a3a] leading-[1.6] mb-5 font-playfair italic">
            The NSE circular on API operating procedures is the most significant
            regulatory shift for algo traders since DMA. We break down every
            requirement — and what you actually need to do before April 1, 2026.
          </p>

          <div className="text-[13px] text-[#686868] font-light">
            8 min read &nbsp;·&nbsp; TradeMade Compliance Desk
          </div>
        </header>

        {/* Article Content */}
        <div className="text-[17px] leading-[1.8] font-light text-[#0c0c0c]">
          <p className="mb-6">
            If you run a Python script that places orders through a broker API —
            or even use a third-party tool like Stoxoo, AlgoBaba, or any scanner
            with auto-execute — SEBI's new framework touches you directly. This
            isn't a rule aimed at HFT firms. It's aimed at the retail algo
            trader. That's you.
          </p>

          <p className="mb-6">
            Here's everything that matters, stripped of the circular's
            bureaucratic language.
          </p>

          <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
            How We Got Here
          </h2>

          <div className="bg-[#edeae2] border border-[#dad5cc] p-6 my-9">
            <div className="font-syne text-[11px] font-bold tracking-[0.12em] uppercase text-[#686868] mb-4">
              Regulatory Timeline
            </div>

            <div className="flex gap-3.5 mb-3.5 items-start">
              <span className="font-syne text-[11px] font-bold text-white bg-[#1a3a5c] px-2.5 py-1 whitespace-nowrap mt-1 shrink-0">
                Feb 2025
              </span>
              <div className="text-[14px] font-light leading-[1.6]">
                SEBI releases circular on{" "}
                <strong>
                  "Safer Participation of Retail Investors in Algorithmic
                  Trading."
                </strong>{" "}
                Sets the broad framework. Go-live announced as August 1, 2025.
              </div>
            </div>

            <div className="flex gap-3.5 mb-3.5 items-start">
              <span className="font-syne text-[11px] font-bold text-white bg-[#1a3a5c] px-2.5 py-1 whitespace-nowrap mt-1 shrink-0">
                Jul 2025
              </span>
              <div className="text-[14px] font-light leading-[1.6]">
                NSE releases detailed operational modalities — the actual rules
                brokers must implement. Only 10 days before the August 1
                deadline. Brokers, understandably, ask for more time.
              </div>
            </div>

            <div className="flex gap-3.5 mb-3.5 items-start">
              <span className="font-syne text-[11px] font-bold text-white bg-[#1a3a5c] px-2.5 py-1 whitespace-nowrap mt-1 shrink-0">
                Jul 2025
              </span>
              <div className="text-[14px] font-light leading-[1.6]">
                Deadline extended to <strong>October 1, 2025.</strong> Still not
                enough time for vendors supplying order management systems to
                multiple brokers.
              </div>
            </div>

            <div className="flex gap-3.5 items-start">
              <span className="font-syne text-[11px] font-bold text-white bg-[#1a3a5c] px-2.5 py-1 whitespace-nowrap mt-1 shrink-0">
                Sep 2025
              </span>
              <div className="text-[14px] font-light leading-[1.6]">
                SEBI extends again.{" "}
                <strong>Final deadline: April 1, 2026.</strong> All stock
                brokers must comply from this date.
              </div>
            </div>
          </div>

          <p className="mb-6">
            Three deadline extensions tell you something important: this is
            genuinely complex to implement at the broker level. The static IP
            requirement alone required changes to order routing infrastructure
            that brokers share with a common vendor. Even large brokers like
            Zerodha confirmed they were waiting on those vendor-side changes.
          </p>

          <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
            The Three Rules That Change Everything
          </h2>

          <div className="flex flex-col gap-5 my-9">
            {/* Rule 1 */}
            <div className="border border-[#dad5cc] bg-white overflow-hidden">
              <div className="flex items-center gap-3.5 p-4 bg-[#edeae2] border-b border-[#dad5cc]">
                <span className="font-syne text-[13px] font-extrabold text-[#2c5f2e] shrink-0 min-w-[28px]">
                  01
                </span>
                <span className="font-syne text-[15px] font-bold flex-1">
                  Static IP Mandatory for All Order APIs
                </span>
                <span className="text-[11px] font-bold tracking-[0.06em] uppercase bg-[#c0392b]/10 text-[#c0392b] border border-[#c0392b]/20 px-2 py-0.5 shrink-0">
                  Mandatory
                </span>
              </div>
              <div className="p-4 md:p-5 text-[15px] font-light">
                <p className="mb-2.5">
                  Every API order request must originate from a pre-registered
                  static IP address. You'll register up to two IPs (one primary,
                  one backup) on your broker's developer console. Orders
                  arriving from any other IP will be rejected.
                </p>
                <p className="mb-2.5">
                  This applies to <em>all</em> API users — not just
                  high-frequency traders. Even if you send 2 orders a day, you
                  need a static IP. The check is only on order placement
                  endpoints; WebSocket data feeds and other read-only endpoints
                  are unaffected.
                </p>
                <div className="flex gap-2 bg-[#b8860b]/5 border-l-4 border-[#b8860b] p-3 pt-3.5 mt-3 text-[13px] text-[#5a4a00]">
                  <Warning
                    size={16}
                    weight="fill"
                    className="text-[#b8860b] shrink-0 mt-0.5"
                  />
                  <span>
                    Standard JioFiber, Airtel home broadband, and most consumer
                    ISPs do not provide static IPs by default. You'll need to
                    request one from your ISP — or route your API calls through
                    a cloud instance (AWS/GCP) with a reserved Elastic IP.
                  </span>
                </div>
              </div>
            </div>

            {/* Rule 2 */}
            <div className="border border-[#dad5cc] bg-white overflow-hidden">
              <div className="flex items-center gap-3.5 p-4 bg-[#edeae2] border-b border-[#dad5cc]">
                <span className="font-syne text-[13px] font-extrabold text-[#2c5f2e] shrink-0 min-w-[28px]">
                  02
                </span>
                <span className="font-syne text-[15px] font-bold flex-1">
                  10 Orders Per Second Limit
                </span>
                <span className="text-[11px] font-bold tracking-[0.06em] uppercase bg-[#c0392b]/10 text-[#c0392b] border border-[#c0392b]/20 px-2 py-0.5 shrink-0">
                  Mandatory
                </span>
              </div>
              <div className="p-4 md:p-5 text-[15px] font-light">
                <p className="mb-2.5">
                  The API rate limit for order placement is capped at 10 orders
                  per second, per client account. If you exceed this, the broker
                  will return a 429 (Too Many Requests) error and reject the
                  excess orders. This is enforced at the exchange level, not
                  just the broker's API.
                </p>
                <p className="mb-2.5">
                  Important clarification from Zerodha: the 10 OPS limit is per
                  client ID, not per app or API key. If you run multiple
                  strategies under one Zerodha login, they collectively share
                  the same 10 OPS budget. Iceberg orders count as a single order
                  toward the limit.
                </p>
                <div className="flex gap-2 bg-[#2c5f2e]/5 border-l-4 border-[#2c5f2e] p-3 mt-3 text-[13px] text-[#1a381b]">
                  <CheckCircle
                    size={16}
                    weight="fill"
                    className="text-[#2c5f2e] shrink-0 mt-[2px]"
                  />
                  <span>
                    Most retail strategies — including multi-leg options plays
                    and basket orders — operate well within 10 OPS. This rule
                    primarily targets HFT-style scalping setups.
                  </span>
                </div>
              </div>
            </div>

            {/* Rule 3 */}
            <div className="border border-[#dad5cc] bg-white overflow-hidden">
              <div className="flex items-center gap-3.5 p-4 bg-[#edeae2] border-b border-[#dad5cc]">
                <span className="font-syne text-[13px] font-extrabold text-[#2c5f2e] shrink-0 min-w-[28px]">
                  03
                </span>
                <span className="font-syne text-[15px] font-bold flex-1">
                  Algo Registration for &gt;10 OPS
                </span>
                <span className="text-[11px] font-bold tracking-[0.06em] uppercase bg-[#b8860b]/10 text-[#b8860b] border border-[#b8860b]/20 px-2 py-0.5 shrink-0">
                  If Applicable
                </span>
              </div>
              <div className="p-4 md:p-5 text-[15px] font-light">
                <p className="mb-2.5">
                  If your strategy genuinely needs to place more than 10 orders
                  per second, you must formally register it with your broker.
                  Registration requires a strategy writeup, an RMS (Risk
                  Management System) writeup, and an auditor certificate
                  (Annexure 7 under the NSE circular).
                </p>
                <p className="mb-2.5">
                  Broker community has pushed back on the auditor certificate
                  requirement — Zerodha, among others, has made representations
                  to the exchange to remove it. Pricing for exchange-level
                  registration will be passed on to the trader; exact fees
                  haven't been fixed yet.
                </p>
                <div className="flex gap-2 bg-slate-100 border-l-4 border-slate-400 p-3 mt-3 text-[13px] text-slate-700">
                  <ShieldWarning
                    size={16}
                    weight="fill"
                    className="text-slate-500 shrink-0 mt-[2px]"
                  />
                  <span>
                    The initial SOP requirement that all algos must be hosted on
                    the broker's cloud has been strongly contested by brokers
                    and is expected to be revised. As of now, self-hosted setups
                    are not being explicitly blocked.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
            The Market Order Restriction Nobody Noticed
          </h2>

          <p className="mb-6">
            Buried in the same set of changes: market orders via API will no
            longer be allowed in the commodity segment at all. For equity,
            index, and currency segments, market orders will continue — but with
            automatic market protection applied. This means your{" "}
            <code className="bg-[#edeae2] px-1.5 py-0.5 rounded-sm text-sm border border-[#dad5cc]">
              order_type=MARKET
            </code>{" "}
            call will be converted to a limit order with a price band around the
            last traded price before hitting the exchange. Zerodha confirmed
            this will be applied automatically without requiring any change to
            your code.
          </p>

          <p className="mb-6">
            What this means practically: if you run a strategy that fires market
            orders during highly illiquid moments (pre-open, circuit filters,
            thin options strikes), your fills may now behave differently. Test
            this explicitly before April 1.
          </p>

          <div className="py-6 my-11 border-y-2 border-[#0c0c0c]">
            <p className="font-playfair text-[22px] font-semibold italic leading-[1.4] text-[#0c0c0c] m-0">
              "The operational modalities were only published in July with an
              August go-live. Even brokers building this found it genuinely
              complex. Don't assume your setup is compliant just because orders
              went through last month."
            </p>
          </div>

          <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
            Impact by Trader Type
          </h2>

          <div className="overflow-x-auto my-9 pb-4 -mx-6 px-6 md:mx-0 md:px-0">
            <table className="w-full text-left text-[14px] min-w-[600px] border-collapse">
              <thead>
                <tr>
                  <th className="font-syne text-[11px] tracking-[0.08em] uppercase py-3 border-b-2 border-slate-800 font-bold bg-[#0c0c0c] text-white px-4">
                    You Are
                  </th>
                  <th className="font-syne text-[11px] tracking-[0.08em] uppercase py-3 border-b-2 border-slate-800 font-bold bg-[#0c0c0c] text-white px-4">
                    Static IP
                  </th>
                  <th className="font-syne text-[11px] tracking-[0.08em] uppercase py-3 border-b-2 border-slate-800 font-bold bg-[#0c0c0c] text-white px-4">
                    Registration
                  </th>
                  <th className="font-syne text-[11px] tracking-[0.08em] uppercase py-3 border-b-2 border-slate-800 font-bold bg-[#0c0c0c] text-white px-4">
                    Market Orders
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dad5cc] border-b border-[#dad5cc]">
                <tr className="bg-transparent hover:bg-black/[0.02]">
                  <td className="py-4 pr-4 px-4 align-top leading-[1.55]">
                    <strong>Retail API user, &lt;10 OPS</strong>
                    <div className="text-[13px] text-[#666] mt-1">
                      Python/AFL scripts, scanners with auto-execute
                    </div>
                  </td>
                  <td className="py-4 pr-4 px-4 align-top">
                    <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 tracking-[0.04em] bg-[#c0392b]/10 text-[#c0392b]">
                      Required
                    </span>
                  </td>
                  <td className="py-4 pr-4 px-4 align-top">
                    <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 tracking-[0.04em] bg-[#2c5f2e]/10 text-[#2c5f2e]">
                      Not needed
                    </span>
                  </td>
                  <td className="py-4 pr-4 px-4 align-top">
                    <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 tracking-[0.04em] bg-[#b8860b]/10 text-[#b8860b]">
                      Protected
                    </span>
                  </td>
                </tr>
                <tr className="bg-black/[0.02] hover:bg-black/[0.04]">
                  <td className="py-4 pr-4 px-4 align-top leading-[1.55]">
                    <strong>Third-party tool user</strong>
                    <div className="text-[13px] text-[#666] mt-1">
                      Stoxoo, AlgoBaba, etc. via your own API key
                    </div>
                  </td>
                  <td className="py-4 pr-4 px-4 align-top">
                    <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 tracking-[0.04em] bg-[#c0392b]/10 text-[#c0392b]">
                      Required
                    </span>
                  </td>
                  <td className="py-4 pr-4 px-4 align-top">
                    <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 tracking-[0.04em] bg-[#2c5f2e]/10 text-[#2c5f2e]">
                      Not needed
                    </span>
                  </td>
                  <td className="py-4 pr-4 px-4 align-top">
                    <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 tracking-[0.04em] bg-[#b8860b]/10 text-[#b8860b]">
                      Protected
                    </span>
                  </td>
                </tr>
                <tr className="bg-transparent hover:bg-black/[0.02]">
                  <td className="py-4 pr-4 px-4 align-top leading-[1.55]">
                    <strong>Data-only API user</strong>
                    <div className="text-[13px] text-[#666] mt-1">
                      WebSocket feeds, charting, no order placement
                    </div>
                  </td>
                  <td className="py-4 pr-4 px-4 align-top">
                    <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 tracking-[0.04em] bg-[#2c5f2e]/10 text-[#2c5f2e]">
                      Not needed
                    </span>
                  </td>
                  <td className="py-4 pr-4 px-4 align-top">
                    <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 tracking-[0.04em] bg-[#2c5f2e]/10 text-[#2c5f2e]">
                      Not needed
                    </span>
                  </td>
                  <td className="py-4 pr-4 px-4 align-top">
                    <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 tracking-[0.04em] bg-[#2c5f2e]/10 text-[#2c5f2e]">
                      No change
                    </span>
                  </td>
                </tr>
                <tr className="bg-black/[0.02] hover:bg-black/[0.04]">
                  <td className="py-4 pr-4 px-4 align-top leading-[1.55]">
                    <strong>High-frequency / &gt;10 OPS</strong>
                    <div className="text-[13px] text-[#666] mt-1">
                      Market making, scalping, multi-account mirrors
                    </div>
                  </td>
                  <td className="py-4 pr-4 px-4 align-top">
                    <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 tracking-[0.04em] bg-[#c0392b]/10 text-[#c0392b]">
                      Required
                    </span>
                  </td>
                  <td className="py-4 pr-4 px-4 align-top">
                    <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 tracking-[0.04em] bg-[#c0392b]/10 text-[#c0392b]">
                      Required
                    </span>
                  </td>
                  <td className="py-4 pr-4 px-4 align-top">
                    <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 tracking-[0.04em] bg-[#b8860b]/10 text-[#b8860b]">
                      Restricted
                    </span>
                  </td>
                </tr>
                <tr className="bg-transparent hover:bg-black/[0.02]">
                  <td className="py-4 pr-4 px-4 align-top leading-[1.55]">
                    <strong>Commodity segment traders</strong>
                    <div className="text-[13px] text-[#666] mt-1">
                      MCX strategies via API
                    </div>
                  </td>
                  <td className="py-4 pr-4 px-4 align-top">
                    <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 tracking-[0.04em] bg-[#c0392b]/10 text-[#c0392b]">
                      Required
                    </span>
                  </td>
                  <td className="py-4 pr-4 px-4 align-top">
                    <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 tracking-[0.04em] bg-[#2c5f2e]/10 text-[#2c5f2e]">
                      If &lt;10 OPS, no
                    </span>
                  </td>
                  <td className="py-4 pr-4 px-4 align-top">
                    <span className="inline-block text-[11px] font-bold px-2.5 py-0.5 tracking-[0.04em] bg-[#c0392b]/10 text-[#c0392b]">
                      Blocked
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-syne text-[21px] md:text-[24px] font-bold tracking-[-0.02em] mt-14 mb-6 text-[#0c0c0c]">
            What You Need to Do Before April 1
          </h2>

          <div className="bg-[#0c0c0c] text-white p-7 md:p-8 my-11 relative overflow-hidden">
            <div className="absolute right-4 -bottom-6 text-[140px] font-syne font-extrabold text-white/[0.04] leading-none pointer-events-none">
              →
            </div>

            <div className="font-syne text-[11px] font-bold tracking-[0.12em] uppercase text-[#ffcc44] mb-4">
              // Your Pre-April 1 Checklist
            </div>

            <ul className="list-none m-0 p-0 flex flex-col">
              <li className="flex gap-3 items-start py-3 border-b border-white/[0.08] text-[14px] font-light text-white/85 leading-[1.55]">
                <span className="text-[#7fffa8] font-bold shrink-0 mt-[1px]">
                  →
                </span>
                <span>
                  Get a static IP. Contact your ISP for a dedicated IP, or
                  deploy your algo on a cloud VM (AWS EC2, GCP, DigitalOcean)
                  and assign a reserved static IP to it. Budget
                  ₹500–₹2,000/month depending on approach.
                </span>
              </li>
              <li className="flex gap-3 items-start py-3 border-b border-white/[0.08] text-[14px] font-light text-white/85 leading-[1.55]">
                <span className="text-[#7fffa8] font-bold shrink-0 mt-[1px]">
                  →
                </span>
                <span>
                  Register the IP on your broker's developer console once the
                  feature goes live. Zerodha confirmed a March 2026 rollout. You
                  can register one primary and one backup IP.
                </span>
              </li>
              <li className="flex gap-3 items-start py-3 border-b border-white/[0.08] text-[14px] font-light text-white/85 leading-[1.55]">
                <span className="text-[#7fffa8] font-bold shrink-0 mt-[1px]">
                  →
                </span>
                <span>
                  Audit your OPS. Add logging to count orders placed per second
                  at peak. If you're breaching 10 OPS even briefly, restructure
                  your execution logic — batch orders where possible, add rate
                  limiting in code.
                </span>
              </li>
              <li className="flex gap-3 items-start py-3 border-b border-white/[0.08] text-[14px] font-light text-white/85 leading-[1.55]">
                <span className="text-[#7fffa8] font-bold shrink-0 mt-[1px]">
                  →
                </span>
                <span>
                  Test market order behaviour. After the update goes live, run
                  paper tests specifically on your market order fills to
                  understand how market protection affects your average fill
                  price.
                </span>
              </li>
              <li className="flex gap-3 items-start py-3 border-b border-white/[0.08] text-[14px] font-light text-white/85 leading-[1.55]">
                <span className="text-[#7fffa8] font-bold shrink-0 mt-[1px]">
                  →
                </span>
                <span>
                  If you're in commodities (MCX), replace all API market orders
                  with limit orders immediately. Don't wait for the deadline —
                  start testing now.
                </span>
              </li>
              <li className="flex gap-3 items-start py-3 text-[14px] font-light text-white/85 leading-[1.55]">
                <span className="text-[#7fffa8] font-bold shrink-0 mt-[1px]">
                  →
                </span>
                <span>
                  If you manage family accounts on a shared IP, confirm with
                  your broker that joint-family IP sharing is supported in their
                  implementation. The NSE circular permits this but
                  implementation varies by broker.
                </span>
              </li>
            </ul>
          </div>

          <p className="mb-6">
            The April 1 deadline is firm. SEBI has extended twice already and
            has made clear this is the final date. Brokers who miss compliance
            risk exchange penalties. Traders whose setups aren't ready will
            simply have their order API calls rejected from that date — not
            gracefully warned, just rejected.
          </p>

          <p className="mb-6 mt-10">
            SEBI's intent here is traceability, not restriction. A static IP
            creates a verifiable audit trail linking every order to a specific
            machine and account. The 10 OPS cap prevents retail API
            infrastructure from being used as a disguised HFT vehicle. These are
            reasonable goals. The compliance cost for the vast majority of
            retail algo traders — getting a static IP and staying under 10 OPS —
            is genuinely low. Don't let the complexity of the circular distract
            from how straightforward most of the actual requirements are.
          </p>
        </div>
      </article>
    </main>
  );
}
