export const SITE_URL = "https://trademade.in";

export interface NavLink {
    name: string;
    href: string;
}

/**
 * Main navigation links used by Navbar, Footer, and SiteNavigationElement JSON-LD.
 * Keeping them in one place ensures all three stay in sync.
 */
export const mainNavLinks: NavLink[] = [
    { name: "Backtesting", href: "/backtesting" },
    { name: "Custom Algo Development", href: "/custom-development" },
    { name: "AI Multi-Broker (Beta)", href: "/multi-broker-beta" },
    { name: "Pricing", href: "/pricing" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
];

/** Links shown in the top navbar (excludes About/Contact which go as CTA) */
export const headerNavLinks: NavLink[] = [
    { name: "Backtesting", href: "/backtesting" },
    { name: "Custom Algo Development", href: "/custom-development" },
    { name: "AI Multi-Broker (Beta)", href: "/multi-broker-beta" },
    { name: "Pricing", href: "/pricing" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
];
