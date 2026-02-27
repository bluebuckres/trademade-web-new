import { MagneticButton } from "@/components/ui/MagneticButton";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Algorithmic Trading Insights & Research",
  description:
    "Expert insights on backtesting, quantitative strategy development, and multi-broker automated trading.",
  keywords: [
    "algo trading blog",
    "backtesting insights",
    "quant trading India",
    "algorithmic strategy research",
    "trading education",
  ],
  openGraph: {
    title: "TradeMade Blog | Algorithmic Trading Insights & Research",
    description:
      "Expert insights on backtesting, quantitative strategy development, and multi-broker automated trading.",
    url: "https://trademade.in/blog",
  },
  alternates: { canonical: "https://trademade.in/blog" },
};

const blogPosts = [
  {
    title: "Why 90% of Backtests Lie — And How to Fix Yours",
    excerpt:
      "The most common mistakes traders make when testing strategies, and the slippage model that changes everything.",
    slug: "/blog/why-90-percent-of-backtests-lie-and-how-to-fix-yours",
    date: "Dec 12, 2023",
    category: "Backtesting",
    readTime: "5 min read",
  },
  {
    title: "Why Backtesting with 1-Minute Data is Dangerous",
    excerpt:
      "Your backtest shows a 180% CAGR. Sharpe 3.4. Near-zero drawdown. You deploy ₹5L. In three weeks, the strategy is down 28%. Here's why.",
    slug: "/blog/why-backtesting-with-1-minute-data-is-dangerous",
    date: "Mar 15, 2024",
    category: "Quant Research",
    readTime: "7 min read",
    featured: true,
    image: "/1-min-data-banner.png",
  },
  {
    title: "Building a Python Execution Engine from Scratch",
    excerpt:
      "Most quants write strategies. Far fewer build the thing that actually runs them in production. This is what we learned.",
    slug: "/blog/building-a-python-execution-engine-from-scratch",
    date: "Mar 10, 2024",
    category: "Engineering",
    readTime: "8 min read",
  },
  {
    title: "How AI Sentiment Analysis Saved Us During the RBI Policy",
    excerpt:
      "What happened when the market priced in a consensus RBI hold, and the Governor slashed GDP instead? How our AI parsed the panic faster than human traders.",
    slug: "/blog/how-ai-sentiment-analysis-saved-us-during-the-rbi-policy",
    date: "Mar 02, 2024",
    category: "Case Study",
    readTime: "6 min read",
  },
  {
    title:
      "What Is Algorithmic Trading — And Why Should Every Indian Trader Backtest First?",
    excerpt:
      "Learn what algorithmic trading is, how it works in Indian markets, and why backtesting with realistic slippage is the single most important step before going live.",
    slug: "/blog/what-is-algorithmic-trading",
    date: "Mar 10, 2024",
    category: "Educational",
    readTime: "8 min read",
    featured: true,
    image: "/algo-trading-banner.png",
  },
];

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary w-fit mb-6">
            TradeMade Research
          </div>
          <h1 className="font-satoshi text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Insights for the Modern{" "}
            <span className="text-primary text-glow">Quant.</span>
          </h1>
          <p className="text-lg text-slate-400">
            Deep dives into market structure, algorithmic strategy design,
            realistic backtesting, and the engineering behind TradeMade.
          </p>
        </div>

        {/* Featured Post (The new Page 7) */}
        {blogPosts
          .filter((p) => p.featured)
          .map((post) => (
            <Link
              href={post.slug}
              key={post.slug}
              className="group block mb-16 md:mb-24"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0d1117] p-1 shadow-2xl transition-all duration-500 hover:border-primary/30">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 h-full bg-[#0a0d14] rounded-[22px] overflow-hidden">
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center h-full relative z-10">
                    <div className="flex items-center gap-3 text-sm text-slate-400 font-mono mb-6">
                      <span className="text-primary">{post.category}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 font-satoshi leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-slate-400 text-base md:text-lg mb-8 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-3 text-primary font-medium hover:text-white transition-colors">
                      Read Full Article <ArrowRight weight="bold" />
                    </div>
                  </div>

                  {/* Featured Image Placeholder / Art */}
                  <div className="relative min-h-[300px] lg:min-h-full bg-gradient-to-br from-slate-800 to-background border-l border-white/5 overflow-hidden">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <>
                        <div
                          className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage:
                              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                            backgroundSize: "24px 24px",
                          }}
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-[100px] rounded-full" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="font-mono text-xs text-slate-500/50 uppercase tracking-widest text-center">
                            Algo Logic Simulation
                            <br />
                            Visual Data Required
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}

        {/* Grid of other posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts
            .filter((p) => !p.featured)
            .map((post, i) => (
              <Link
                href={post.slug}
                key={i}
                className="group flex flex-col h-full bg-[#0d1117] border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/[0.02] hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-4">
                  <span className="text-primary">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm mb-8 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-sm font-mono text-slate-500">
                    {post.date}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-[#000000] transition-colors">
                    <ArrowRight size={14} weight="bold" />
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </main>
  );
}
