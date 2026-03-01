import type { Metadata } from 'next';
import Link from 'next/link';
import { CustomDevHero } from "@/components/custom-development/CustomDevHero";
import { WhatWeBuild } from "@/components/custom-development/WhatWeBuild";
import { ProcessSteps } from "@/components/custom-development/ProcessSteps";
import { CustomDevPricing } from "@/components/custom-development/CustomDevPricing";
import { CustomDevWhy } from "@/components/custom-development/CustomDevWhy";
import { CustomDevFAQs } from "@/components/custom-development/CustomDevFAQs";
import { CrossLinks } from "@/components/custom-development/CrossLinks";

export const metadata: Metadata = {
    title: "Custom Algo Trading Development | Python, C++, Rust | TradeMade",
    description: "Professional algo trading software development for Indian markets. We build in Python, C++, and Rust. Telegram bots, AI/LLM integration, multi-broker, multi-account. 20+ broker APIs. 500+ algos delivered. SEBI RA compatible.",
    keywords: ["custom algo development India", "trading bot developer", "Python algo coding", "strategy coding service", "quant developer India", "algo deployment Zerodha"],
    openGraph: {
        title: "Custom Algo Trading Development | Python, C++, Rust | TradeMade",
        description: "Professional algo trading software development for Indian markets.",
        url: "https://trademade.in/custom-development",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Algo Trading Development | Python, C++, Rust | TradeMade",
        description: "Professional algo trading software development for Indian markets.",
    },
    alternates: { canonical: "https://trademade.in/custom-development" },
};

export default function CustomDevelopmentPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Custom Algorithm Development",
        "description": "Professional quant developers to build your trading bot from rough idea to live deployment on Indian brokers.",
        "provider": {
            "@type": "Organization",
            "name": "TradeMade",
            "url": "https://trademade.in"
        },
        "serviceType": "Software Development"
    };

    return (
        <div className="flex flex-col w-full overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <CustomDevHero />
            <WhatWeBuild />
            <ProcessSteps />
            <CustomDevPricing />
            <CustomDevWhy />
            <CustomDevFAQs />
            <CrossLinks />
        </div>
    );
}
