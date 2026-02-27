"use client";

import {
  AnimatedBentoGrid,
  AnimatedBentoItem,
} from "@/components/ui/AnimatedBentoGrid";
import Link from "next/link";
import { ArrowUpRight, ChartPolar, Code, Brain } from "@phosphor-icons/react";

const posts = [
  {
    title: "Why Backtesting with 1-Minute Data is Dangerous",
    category: "Quant Research",
    date: "March 15, 2024",
    color: "primary",
    icon: ChartPolar,
    slug: "/blog/why-backtesting-with-1-minute-data-is-dangerous",
  },
  {
    title: "Building a Python Execution Engine from Scratch",
    category: "Engineering",
    date: "March 10, 2024",
    color: "accent",
    icon: Code,
    slug: "/blog/building-a-python-execution-engine-from-scratch",
  },
  {
    title: "How AI Sentiment Analysis Saved Us During the RBI Policy",
    category: "Case Study",
    date: "March 02, 2024",
    color: "purple-500",
    icon: Brain,
    slug: "/blog/how-ai-sentiment-analysis-saved-us-during-the-rbi-policy",
  },
];

export function BlogTease() {
  return (
    <section className="py-24 relative border-t border-white/5 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="font-satoshi text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            From the Quant Desk
          </h2>
          <p className="text-slate-400 max-w-xl text-lg">
            Research, engineering deep-dives, and algorithm case studies. No
            fluff.
          </p>
        </div>
        <Link
          href="/blog"
          className="text-primary hover:text-white transition-colors font-medium inline-flex items-center gap-2 pb-2 border-b border-primary/30 hover:border-white"
        >
          View All Articles <ArrowUpRight />
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <AnimatedBentoGrid className="grid-cols-1 md:grid-cols-3 auto-rows-auto">
          {posts.map((post, idx) => {
            const Icon = post.icon;
            return (
              <AnimatedBentoItem key={idx}>
                <Link
                  href={post.slug}
                  className="flex flex-col group h-full cursor-pointer"
                >
                  <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-white/5 bg-[#0a0a0a] flex items-center justify-center">
                    {/* CSS Abstract Background instead of generic image */}
                    <div
                      className={`absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--${post.color}-rgb),0.2)_0%,transparent_70%)] opacity-50 group-hover:scale-110 transition-transform duration-700`}
                    />
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-${post.color}/20 blur-3xl`}
                    />

                    <Icon
                      size={64}
                      className={`text-${post.color} opacity-80 group-hover:scale-110 transition-transform duration-500`}
                      weight="duotone"
                    />
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-500 mb-3 font-mono">
                    <span className={`text-${post.color}`}>
                      {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-satoshi text-xl font-bold text-white leading-snug group-hover:text-primary transition-colors mb-4 line-clamp-2">
                    {post.title}
                  </h3>

                  <div className="mt-auto pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                      Read More{" "}
                      <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </AnimatedBentoItem>
            );
          })}
        </AnimatedBentoGrid>
      </div>
    </section>
  );
}
