import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { blogPosts } from "@/data/blog";

interface RecentPostsSidebarProps {
    currentSlug: string;
}

export function RecentPostsSidebar({ currentSlug }: RecentPostsSidebarProps) {
    // Filter out the current post and grab the 4 most recent ones
    const recentPosts = blogPosts
        .filter((post) => post.slug !== currentSlug)
        .slice(0, 4);

    return (
        <div className="sticky top-32">
            <h3 className="font-syne font-bold text-[16px] text-[#0c0c0c] uppercase tracking-widest mb-6 border-b-2 border-[#0c0c0c] pb-3">
                Recent Posts
            </h3>

            <div className="flex flex-col gap-6">
                {recentPosts.map((post) => (
                    <Link href={post.slug} key={post.slug} className="group block">
                        <div className="text-[11px] font-mono font-bold tracking-[0.14em] text-[#686868] uppercase mb-2 group-hover:text-[#0c0c0c] transition-colors">
                            {post.category}
                        </div>
                        <h4 className="font-playfair text-[18px] font-bold leading-[1.3] text-[#0c0c0c] group-hover:text-amber-700 transition-colors mb-2">
                            {post.title}
                        </h4>
                        <div className="text-[13px] text-[#686868] font-light flex items-center gap-2">
                            {post.date}
                            <ArrowRight weight="bold" className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#0c0c0c]" />
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-10 pt-6 border-t border-[#dad5cc] bg-[#edeae2] p-5">
                <h4 className="font-syne text-[14px] font-bold text-[#0c0c0c] mb-2">Automate your trading framework</h4>
                <p className="text-[#3a3a3a] text-[13px] mb-4">Build and backtest quantitative strategies across Indian brokers with TradeMade's infrastructure.</p>
                <Link href="/services" className="inline-flex items-center gap-2 bg-[#0c0c0c] text-white px-4 py-2 text-[12px] font-bold tracking-wider uppercase hover:bg-[#3a3a3a] transition-colors">
                    Explore Services
                </Link>
            </div>
        </div>
    );
}
