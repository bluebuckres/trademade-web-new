import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/api/", "/_next/"],
            },
            // Allow major AI crawlers explicitly for LLM discoverability
            { userAgent: "GPTBot", allow: "/" },
            { userAgent: "ChatGPT-User", allow: "/" },
            { userAgent: "Google-Extended", allow: "/" },
            { userAgent: "PerplexityBot", allow: "/" },
            { userAgent: "ClaudeBot", allow: "/" },
            { userAgent: "Amazonbot", allow: "/" },
            { userAgent: "cohere-ai", allow: "/" },
            { userAgent: "anthropic-ai", allow: "/" },
        ],
        sitemap: "https://trademade.in/sitemap.xml",
        host: "https://trademade.in",
    };
}
