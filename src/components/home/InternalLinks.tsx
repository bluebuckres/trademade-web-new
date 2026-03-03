import Link from "next/link";
import {
    ChartLineUp,
    Code,
    CurrencyCircleDollar,
    Robot,
    Folder,
    BookOpenText,
} from "@phosphor-icons/react/dist/ssr";

const links = [
    {
        title: "High-Precision Backtesting",
        description:
            "Test any strategy on tick-level data spanning 10+ years with slippage, brokerage, and real-world costs built in.",
        href: "/backtesting",
        icon: ChartLineUp,
        accent: "group-hover:text-primary",
    },
    {
        title: "Custom Algo Development",
        description:
            "Describe your strategy — we code it in Python, C++, or Rust, test it, and deploy it to your Indian broker.",
        href: "/custom-development",
        icon: Code,
        accent: "group-hover:text-blue-400",
    },
    {
        title: "AI Multi-Broker (Beta)",
        description:
            "Deploy one strategy across Zerodha, Upstox, Angel One simultaneously with AI sentiment risk management.",
        href: "/multi-broker-beta",
        icon: Robot,
        accent: "group-hover:text-purple-400",
    },
    {
        title: "Pricing & Plans",
        description:
            "Transparent pricing for backtesting, custom development, and enterprise quant solutions.",
        href: "/pricing",
        icon: CurrencyCircleDollar,
        accent: "group-hover:text-emerald-400",
    },
    {
        title: "All Services Overview",
        description:
            "Compare our backtesting, development, and multi-broker offerings side by side.",
        href: "/services",
        icon: Folder,
        accent: "group-hover:text-amber-400",
    },
    {
        title: "Blog & Quant Research",
        description:
            "Deep dives into market structure, algorithmic strategy design, realistic backtesting, and engineering.",
        href: "/blog",
        icon: BookOpenText,
        accent: "group-hover:text-rose-400",
    },
];

export function InternalLinks() {
    return (
        <section className="py-24 relative">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="mb-14">
                    <div className="text-primary text-xs uppercase tracking-widest font-semibold mb-3">
                        Explore TradeMade
                    </div>
                    <h2 className="font-satoshi text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-tight text-white m-0">
                        Discover What We Offer
                    </h2>
                    <p className="text-slate-400 mt-3 max-w-xl">
                        From backtesting your first idea to deploying a full algorithmic trading
                        operation — everything is under one roof.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {links.map((link) => {
                        const Icon = link.icon;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="group flex flex-col gap-3 p-6 rounded-2xl border border-white/5 bg-surface/50 hover:border-white/15 hover:bg-white/[0.02] transition-all duration-300"
                            >
                                <Icon
                                    size={28}
                                    weight="duotone"
                                    className={`text-slate-500 transition-colors duration-300 ${link.accent}`}
                                />
                                <h3 className="text-white font-bold text-base tracking-tight">
                                    {link.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed m-0">
                                    {link.description}
                                </p>
                                <span className="text-primary text-sm font-medium mt-auto pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Learn more →
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
