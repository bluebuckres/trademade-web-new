import type { Metadata } from 'next';
import { MagneticButton } from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
    title: "Pricing & Plans",
    description: "Clear, transparent pricing for TradeMade's high-precision backtesting engine and custom algorithmic development services for Indian traders.",
    alternates: { canonical: "https://trademade.in/pricing" },
    openGraph: {
        title: "Pricing | TradeMade Algorithmic Trading",
        description: "Transparent pricing for backtesting, custom algorithm development, and enterprise quant solutions.",
        url: "https://trademade.in/pricing",
    },
};

export default function PricingPage() {
    return (
        <div className="flex flex-col w-full min-h-[80vh] pt-32 pb-20 px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="font-satoshi text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                    Simple, <span className="text-primary">Transparent</span> Pricing.
                </h1>
                <p className="text-lg text-slate-400">
                    Whether you're testing your first strategy or deploying a multi-broker quant fund, we have a plan that fits.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Backtesting Tier */}
                <div className="bg-surface border border-white/5 rounded-3xl p-8 hover:border-primary/50 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-2">Backtesting Engine</h3>
                    <p className="text-slate-400 text-sm mb-6 h-10">High-precision tick data testing with real-world slippage.</p>
                    <div className="text-4xl font-black text-white mb-6">Free<span className="text-lg text-slate-500 font-normal"> / basic</span></div>
                    <ul className="space-y-4 mb-8 text-sm text-slate-300">
                        <li className="flex items-center gap-2">✓ 5 Years NSE/BSE Data</li>
                        <li className="flex items-center gap-2">✓ Basic Slippage Models</li>
                        <li className="flex items-center gap-2 text-slate-500">✗ Prop-desk API access</li>
                    </ul>
                    <MagneticButton href="/backtesting" className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 text-center py-3">
                        Start Testing
                    </MagneticButton>
                </div>

                {/* Custom Dev Tier */}
                <div className="bg-surface border border-accent/30 rounded-3xl p-8 relative shadow-[0_0_30px_rgba(30,107,255,0.1)] -translate-y-2">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                        MOST POPULAR
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Custom Algo Dev</h3>
                    <p className="text-slate-400 text-sm mb-6 h-10">Your idea, coded and deployed to your Indian broker.</p>
                    <div className="text-4xl font-black text-white mb-6">Custom Quote</div>
                    <ul className="space-y-4 mb-8 text-sm text-slate-300">
                        <li className="flex items-center gap-2">✓ Production-grade Python/Node.js</li>
                        <li className="flex items-center gap-2">✓ Zerodha, Upstox, Angel One API</li>
                        <li className="flex items-center gap-2">✓ 1-on-1 Code Handover</li>
                    </ul>
                    <MagneticButton href="/contact" className="w-full bg-accent hover:bg-accent/90 text-white text-center py-3">
                        Request Quote
                    </MagneticButton>
                </div>

                {/* Enterprise Tier */}
                <div className="bg-surface border border-white/5 rounded-3xl p-8 hover:border-purple-500/50 transition-colors">
                    <h3 className="text-2xl font-bold text-white mb-2">Enterprise / Prop</h3>
                    <p className="text-slate-400 text-sm mb-6 h-10">Dedicated infrastructure for SEBI RAs and quant desks.</p>
                    <div className="text-4xl font-black text-white mb-6">Retainer</div>
                    <ul className="space-y-4 mb-8 text-sm text-slate-300">
                        <li className="flex items-center gap-2">✓ Colocation Support</li>
                        <li className="flex items-center gap-2">✓ Multi-broker execution clusters</li>
                        <li className="flex items-center gap-2">✓ 24/7 Priority Support SLA</li>
                    </ul>
                    <MagneticButton href="mailto:connect@trademade.in" className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 text-center py-3">
                        Contact Sales
                    </MagneticButton>
                </div>
            </div>
        </div>
    );
}
