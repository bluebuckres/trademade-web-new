import type { MetadataRoute } from "next";

const SITE_URL = "https://trademade.in";
const TODAY = new Date().toISOString().split("T")[0]; // Dynamic current date

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        // ─── Core Pages ───────────────────────────────────────────────────────────
        {
            url: SITE_URL,
            lastModified: TODAY,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/backtesting`,
            lastModified: TODAY,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/custom-development`,
            lastModified: TODAY,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/low-latency-trading`,
            lastModified: TODAY,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/multi-broker-beta`,
            lastModified: TODAY,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/pricing`,
            lastModified: TODAY,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/services`,
            lastModified: TODAY,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/about`,
            lastModified: TODAY,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: TODAY,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/contact`,
            lastModified: TODAY,
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/how-to-use`,
            lastModified: TODAY,
            changeFrequency: "monthly",
            priority: 0.6,
        },
        // ─── Competitor Alternative Pages ─────────────────────────────────────────
        {
            url: `${SITE_URL}/alternatives/streak`,
            lastModified: TODAY,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/alternatives/tradetron`,
            lastModified: TODAY,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/alternatives/algotest`,
            lastModified: TODAY,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        // ─── Use Case Landing Pages ───────────────────────────────────────────────
        {
            url: `${SITE_URL}/use-cases/sebi-ra`,
            lastModified: TODAY,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/use-cases/prop-desk`,
            lastModified: TODAY,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/use-cases/retail-trader`,
            lastModified: TODAY,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        // ─── Blog Posts (ALL 13) ──────────────────────────────────────────────────
        {
            url: `${SITE_URL}/blog/what-is-algorithmic-trading`,
            lastModified: "2024-03-10",
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/blog/why-backtesting-with-1-minute-data-is-dangerous`,
            lastModified: "2024-03-15",
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/blog/building-a-python-execution-engine-from-scratch`,
            lastModified: "2024-03-10",
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${SITE_URL}/blog/how-ai-sentiment-analysis-saved-us-during-the-rbi-policy`,
            lastModified: "2024-03-02",
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${SITE_URL}/blog/sebis-new-algo-rules`,
            lastModified: "2024-07-25",
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/blog/why-90-percent-of-backtests-lie-and-how-to-fix-yours`,
            lastModified: "2023-12-12",
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${SITE_URL}/blog/how-to-build-a-trading-algorithm-without-coding`,
            lastModified: "2024-10-15",
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/blog/options-trading-automation-in-india`,
            lastModified: "2024-11-03",
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/blog/how-a-prop-trading-desk-scaled-to-50-accounts`,
            lastModified: "2024-11-18",
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/blog/lost-money-following-trading-signals`,
            lastModified: "2024-12-04",
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${SITE_URL}/blog/managing-family-trading-accounts`,
            lastModified: "2024-08-12",
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${SITE_URL}/blog/how-to-sell-your-trading-strategy-online`,
            lastModified: "2024-09-05",
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${SITE_URL}/blog/algo-backtest-vs-live-trades`,
            lastModified: "2024-09-22",
            changeFrequency: "yearly",
            priority: 0.6,
        },
        // ─── Legal Pages ──────────────────────────────────────────────────────────
        {
            url: `${SITE_URL}/privacy-policy`,
            lastModified: "2025-01-01",
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${SITE_URL}/refund-policy`,
            lastModified: "2025-01-01",
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${SITE_URL}/terms-and-conditions`,
            lastModified: "2025-01-01",
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${SITE_URL}/security`,
            lastModified: "2025-01-01",
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];
}
