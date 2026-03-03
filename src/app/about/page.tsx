import type { Metadata } from 'next';
import { AsymmetricContainer } from "@/components/ui/AsymmetricContainer";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about TradeMade's mission to democratize institutional-grade algorithmic trading tools for Indian retail traders and SEBI RAs.",
    alternates: { canonical: "https://trademade.in/about" },
    openGraph: {
        title: "About TradeMade | Algorithmic Trading Experts",
        description: "Our mission is to bring professional algorithmic trading tools to the Indian market.",
        url: "https://trademade.in/about",
    },
};

export default function AboutPage() {
    return (
        <div className="flex flex-col w-full overflow-hidden pb-20">
            <Breadcrumbs items={[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
            ]} />
            <AsymmetricContainer ratio="60/40" className="mb-20">
                <div>
                    <h1 className="font-satoshi text-5xl md:text-6xl font-black text-white mb-6">
                        Democratizing <span className="text-primary">Algorithmic Trading</span> in India.
                    </h1>
                    <p className="text-lg text-slate-400 leading-relaxed mb-6">
                        TradeMade was born out of a simple frustration: retail traders and independent SEBI RAs in India lacked access to the same high-fidelity backtesting and execution tools that large quant desks take for granted.
                    </p>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        We are a team of quantitative developers, systems engineers, and market enthusiasts dedicated to building the infrastructure required for precise, data-driven trading across Indian brokers like Zerodha, Upstox, and Angel One.
                    </p>
                </div>
                <div className="bg-surface/50 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                    <h3 className="font-bold text-white text-xl mb-4">Our Core Values</h3>
                    <ul className="space-y-4 text-slate-400">
                        <li className="flex items-start gap-3">
                            <span className="text-primary mt-1">●</span>
                            <span><strong>No Black Boxes:</strong> We believe in transparent, verifiable backtesting that accounts for real-world slippage and brokerage.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary mt-1">●</span>
                            <span><strong>Engineering First:</strong> We write production-grade Python and Node.js code, not fragile script patches.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary mt-1">●</span>
                            <span><strong>Broker Agnostic:</strong> Your strategy should run wherever you get the best edge.</span>
                        </li>
                    </ul>
                </div>
            </AsymmetricContainer>

            <div className="text-center max-w-2xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to build your edge?</h2>
                <MagneticButton href="/contact" className="bg-primary hover:bg-primary-hover text-[#000000] font-bold px-8 py-3 w-fit mx-auto cursor-pointer">
                    Get in Touch with Our Team
                </MagneticButton>
            </div>
        </div>
    );
}
