import Link from "next/link";

export interface BreadcrumbItem {
    name: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

/**
 * Renders visual breadcrumbs + BreadcrumbList JSON-LD.
 * Usage: <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Backtesting", href: "/backtesting" }]} />
 * The LAST item is the current page (rendered as text, not a link).
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: index < items.length - 1 ? `https://trademade.in${item.href}` : undefined,
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <nav
                aria-label="Breadcrumb"
                className="w-full max-w-7xl mx-auto px-6 pt-28 pb-0"
            >
                <ol className="flex items-center gap-1.5 text-sm text-slate-500 list-none p-0 m-0 flex-wrap">
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;
                        return (
                            <li key={item.href} className="flex items-center gap-1.5">
                                {index > 0 && (
                                    <span className="text-slate-600" aria-hidden="true">/</span>
                                )}
                                {isLast ? (
                                    <span className="text-slate-300 font-medium" aria-current="page">
                                        {item.name}
                                    </span>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="hover:text-primary transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
}
