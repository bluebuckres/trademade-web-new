import type { MetadataRoute } from "next";

const SITE_URL = "https://trademade.in";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SITE_URL,
            lastModified: "2026-03-03",
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/backtesting`,
            lastModified: "2026-03-01",
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/custom-development`,
            lastModified: "2026-03-01",
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/multi-broker-beta`,
            lastModified: "2026-02-28",
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/pricing`,
            lastModified: "2026-02-28",
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/services`,
            lastModified: "2026-03-01",
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/about`,
            lastModified: "2026-02-28",
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: "2026-03-01",
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/contact`,
            lastModified: "2026-02-27",
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/how-to-use`,
            lastModified: "2026-02-20",
            changeFrequency: "monthly",
            priority: 0.6,
        },
        // Blog posts
        {
            url: `${SITE_URL}/blog/what-is-algorithmic-trading`,
            lastModified: "2024-03-10",
            changeFrequency: "yearly",
            priority: 0.6,
        },
        {
            url: `${SITE_URL}/blog/why-backtesting-with-1-minute-data-is-dangerous`,
            lastModified: "2024-03-15",
            changeFrequency: "yearly",
            priority: 0.6,
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
            priority: 0.6,
        },
        {
            url: `${SITE_URL}/blog/why-90-percent-of-backtests-lie-and-how-to-fix-yours`,
            lastModified: "2023-12-12",
            changeFrequency: "yearly",
            priority: 0.6,
        },
        // Legal pages
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
