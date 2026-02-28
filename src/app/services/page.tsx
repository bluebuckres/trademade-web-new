import type { Metadata } from 'next';
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServiceCards } from "@/components/services/ServiceCards";
import { ServiceComparison } from "@/components/services/ServiceComparison";

export const metadata: Metadata = {
    title: "Everything You Need to Trade Algorithmically — Under One Roof",
    description: "From high-precision backtesting to custom algorithm development and AI multi-broker alignment. Find the right solution for your stage.",
    keywords: ["algo trading services India", "backtesting service", "custom algorithm service", "trading automation India"],
    openGraph: {
        title: "Everything You Need to Trade Algorithmically | TradeMade",
        description: "From high-precision backtesting to custom algorithm development and AI multi-broker alignment.",
        url: "https://trademade.in/services",
    },
    alternates: { canonical: "https://trademade.in/services" },
};

export default function ServicesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "TradeMade Algorithmic Trading Services",
        "description": "High-precision backtesting, custom algorithm development, and AI multi-broker alignment.",
        "provider": {
            "@type": "Organization",
            "name": "TradeMade",
            "url": "https://trademade.in"
        },
        "serviceType": "Algorithmic Trading Software and Development"
    };

    return (
        <div className="flex flex-col w-full overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ServicesHero />
            <ServiceCards />
            <ServiceComparison />
        </div>
    );
}
