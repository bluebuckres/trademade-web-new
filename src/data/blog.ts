export interface BlogPostMeta {
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    category: string;
    readTime: string;
    featured?: boolean;
    image?: string;
}

export const blogPosts: BlogPostMeta[] = [
    {
        title: "How to Build a Trading Algorithm Without Writing a Single Line of Code",
        excerpt: "A non-technical trader's honest account of going from manual trading to a fully automated algo — no Python, no developer, no coding bootcamp.",
        slug: "/blog/how-to-build-a-trading-algorithm-without-coding",
        date: "Oct 15, 2024",
        category: "Case Study",
        readTime: "6 min read",
    },
    {
        title: "Options Trading Automation in India: What Works, What Doesn't",
        excerpt: "An honest guide to automating options strategies on Indian markets — the real complexity, the real risks, and how traders are actually doing it.",
        slug: "/blog/options-trading-automation-in-india",
        date: "Nov 03, 2024",
        category: "Case Study",
        readTime: "7 min read",
    },
    {
        title: "How a Prop Trading Desk Scaled to 50+ Accounts Without Adding Headcount",
        excerpt: "The operational reality of running a prop desk in India — and the infrastructure that made consistent multi-account execution actually possible.",
        slug: "/blog/how-a-prop-trading-desk-scaled-to-50-accounts",
        date: "Nov 18, 2024",
        category: "Case Study",
        readTime: "6 min read",
    },
    {
        title: "I Lost ₹2.3 Lakhs Following Trading Signals. Then I Built My Own Algo.",
        excerpt: "What paid signal services don't tell you — and how one trader stopped paying for someone else's edge and built his own.",
        slug: "/blog/lost-money-following-trading-signals",
        date: "Dec 04, 2024",
        category: "Case Study",
        readTime: "6 min read",
    },
    {
        title: "How to Manage Family and Friends' Trading Accounts Without Losing Your Mind",
        excerpt: "The real operational challenges of running a friends-and-family fund in India — and a setup that actually scales without daily headaches.",
        slug: "/blog/managing-family-trading-accounts",
        date: "Aug 12, 2024",
        category: "Case Study",
        readTime: "6 min read",
    },
    {
        title: "How to Sell Your Trading Strategy Online in India",
        excerpt: "A SEBI-compliant way to monetize your algo — and why most Indian traders trying to do this keep hitting the same three walls.",
        slug: "/blog/how-to-sell-your-trading-strategy-online",
        date: "Sep 05, 2024",
        category: "Case Study",
        readTime: "5 min read",
    },
    {
        title: "Why Your Algo Backtest Looks Profitable But Your Live Trades Aren't",
        excerpt: "The slippage problem that costs Indian intraday traders ₹15,000–₹20,000 every month — and how to fix it with tick-level data.",
        slug: "/blog/algo-backtest-vs-live-trades",
        date: "Sep 22, 2024",
        category: "Case Study",
        readTime: "5 min read",
    },
    {
        title: "SEBI's New Algo Rules Are Here. Here's Exactly What Changes for You.",
        excerpt: "The NSE circular on API operating procedures is the most significant regulatory shift for algo traders since DMA. We break down every requirement.",
        slug: "/blog/sebis-new-algo-rules",
        date: "Jul 25, 2024",
        category: "Regulation",
        readTime: "8 min read",
    },
    {
        title: "Why 90% of Backtests Lie — And How to Fix Yours",
        excerpt: "The most common mistakes traders make when testing strategies, and the slippage model that changes everything.",
        slug: "/blog/why-90-percent-of-backtests-lie-and-how-to-fix-yours",
        date: "Dec 12, 2023",
        category: "Backtesting",
        readTime: "5 min read",
    },
    {
        title: "Why Backtesting with 1-Minute Data is Dangerous",
        excerpt: "Your backtest shows a 180% CAGR. Sharpe 3.4. Near-zero drawdown. You deploy ₹5L. In three weeks, the strategy is down 28%. Here's why.",
        slug: "/blog/why-backtesting-with-1-minute-data-is-dangerous",
        date: "Mar 15, 2024",
        category: "Quant Research",
        readTime: "7 min read",
        featured: true,
        image: "/1-min-data-banner.png",
    },
    {
        title: "Building a Python Execution Engine from Scratch",
        excerpt: "Most quants write strategies. Far fewer build the thing that actually runs them in production. This is what we learned.",
        slug: "/blog/building-a-python-execution-engine-from-scratch",
        date: "Mar 10, 2024",
        category: "Engineering",
        readTime: "8 min read",
    },
    {
        title: "How AI Sentiment Analysis Saved Us During the RBI Policy",
        excerpt: "What happened when the market priced in a consensus RBI hold, and the Governor slashed GDP instead? How our AI parsed the panic faster than human traders.",
        slug: "/blog/how-ai-sentiment-analysis-saved-us-during-the-rbi-policy",
        date: "Mar 02, 2024",
        category: "Case Study",
        readTime: "6 min read",
    },
    {
        title: "What Is Algorithmic Trading — And Why Should Every Indian Trader Backtest First?",
        excerpt: "Learn what algorithmic trading is, how it works in Indian markets, and why backtesting with realistic slippage is the single most important step before going live.",
        slug: "/blog/what-is-algorithmic-trading",
        date: "Mar 10, 2024",
        category: "Educational",
        readTime: "8 min read",
        featured: true,
        image: "/algo-trading-banner.png",
    },
];
