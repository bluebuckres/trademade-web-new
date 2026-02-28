import type { Metadata } from 'next';
import { BetaHero } from "@/components/multi-broker-beta/BetaHero";
import { BetaFeatures } from "@/components/multi-broker-beta/BetaFeatures";
import { BetaSteps } from "@/components/multi-broker-beta/BetaSteps";
import { BetaBenefits } from "@/components/multi-broker-beta/BetaBenefits";
import { BetaWaitlistForm } from "@/components/multi-broker-beta/BetaWaitlistForm";

export const metadata: Metadata = {
    title: "One Strategy. Multiple Brokers. AI-Powered.",
    description: "Deploy your algo across Zerodha, Angel One, Upstox and more simultaneously. Let AI news sentiment do the risk management.",
    keywords: ["multi-broker algo trading", "AI trading India", "news sentiment trading", "Zerodha Upstox Angel One", "multi-account trading bot", "AI risk management trading"],
    openGraph: {
        title: "One Strategy. Multiple Brokers. AI-Powered. | TradeMade Beta",
        description: "Deploy your algo across Zerodha, Angel One, Upstox and more simultaneously.",
        url: "https://trademade.in/multi-broker-beta",
    },
    alternates: { canonical: "https://trademade.in/multi-broker-beta" },
};

export default function MultiBrokerBetaPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI-Powered Multi-Broker Alignment",
        "description": "Deploy your strategy across Zerodha, Angel One, Upstox simultaneously with AI sentiment risk management.",
        "provider": {
            "@type": "Organization",
            "name": "TradeMade",
            "url": "https://trademade.in"
        },
        "serviceType": "Algorithmic Trading Software"
    };

    return (
        <div className="flex flex-col w-full overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <BetaHero />
            <BetaFeatures />
            <BetaSteps />
            <BetaBenefits />
            <BetaWaitlistForm />
        </div>
    );
}
