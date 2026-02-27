import type { Metadata } from 'next';
import { CustomDevHero } from "@/components/custom-development/CustomDevHero";
import { ProcessSteps } from "@/components/custom-development/ProcessSteps";
import { CustomDevPricing } from "@/components/custom-development/CustomDevPricing";
import { CustomDevWhy } from "@/components/custom-development/CustomDevWhy";
import { CustomDevFAQs } from "@/components/custom-development/CustomDevFAQs";

export const metadata: Metadata = {
    title: "Your Strategy, Coded and Deployed by Experts",
    description: "From a rough idea to a live algorithm on your broker in as little as 5 days. Professional quant developers. 100% confidentiality guaranteed.",
    keywords: ["custom algo development India", "trading bot developer", "Python algo coding", "strategy coding service", "quant developer India", "algo deployment Zerodha"],
    openGraph: {
        title: "Your Strategy, Coded and Deployed by Experts | TradeMade",
        description: "From a rough idea to a live algorithm on your broker in as little as 5 days.",
        url: "https://trademade.in/custom-development",
    },
    alternates: { canonical: "https://trademade.in/custom-development" },
};

export default function CustomDevelopmentPage() {
    return (
        <div className="flex flex-col w-full overflow-hidden">
            <CustomDevHero />
            <ProcessSteps />
            <CustomDevPricing />
            <CustomDevWhy />
            <CustomDevFAQs />
        </div>
    );
}
