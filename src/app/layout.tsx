import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartInAIChatWidget } from "@/components/CartInAIChatWidget";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { mainNavLinks, SITE_URL as NAV_SITE_URL } from "@/lib/navigation";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://trademade.in";
// Replace with your GA4 Measurement ID once you have it
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Backtest. Build. Deploy. Trade Smarter | TradeMade",
    template: "%s | TradeMade",
  },
  description:
    "India's most precise backtesting engine meets professional custom algorithm development. From raw idea to live deployment on Zerodha, Upstox, Angel One & more. Low-latency trading systems, C++, Rust, Python.",
  keywords: [
    // Core product
    "algorithmic trading India",
    "backtesting engine India",
    "algo trading platform India",
    "custom algorithm development India",
    "trading bot India",
    // Broker-specific
    "Zerodha algo trading",
    "Upstox API trading",
    "Angel One algo",
    "backtesting NSE",
    "backtesting BSE",
    "multi-broker trading",
    // Brand
    "TradeMade",
    "quant trading India",
    "strategy backtest",
    "live algo deployment",
    // Low-latency & system design (key differentiators)
    "low latency trading system India",
    "HFT software development India",
    "high frequency trading infrastructure",
    "trading system design India",
    "C++ trading engine development",
    "Rust trading system builder",
    "colocation trading India NSE",
    // Competitor-targeting (high intent)
    "Streak alternative India",
    "Tradetron alternative",
    "AlgoTest competitor",
    "best algo trading platform India 2026",
    "algo trading platform comparison India",
    // High-intent commercial
    "hire algo developer India",
    "algo trading consultant India",
    "custom trading bot development India",
    "SEBI compliant algo trading",
    "automated trading system NSE",
    "trading automation developer India",
    // Indian market long-tail
    "algo trading for SEBI registered advisors",
    "multi account trading automation India",
    "options algo trading NSE",
    "Nifty options backtesting",
    "Bank Nifty algo strategy",
    "prop trading desk India technology",
    "quant developer India",
    "Python algo coding service",
  ],
  authors: [{ name: "TradeMade", url: SITE_URL }],
  creator: "TradeMade",
  publisher: "TradeMade",

  // Google Search Console verification
  verification: {
    google: "googleee9294db75f0fd38",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "TradeMade",
    title: "Backtest. Build. Deploy. Trade Smarter | TradeMade",
    description:
      "India's most precise backtesting engine meets professional custom algorithm development. Low-latency systems in C++, Rust, Python. From raw idea to live deployment.",
    url: SITE_URL,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TradeMade — India's Algorithmic Trading Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Backtest. Build. Deploy. Trade Smarter | TradeMade",
    description:
      "India's most precise backtesting engine meets professional custom algorithm development. Low-latency systems, 500+ algos delivered.",
    images: ["/og-image.png"],
    site: "@trademade_in",
    creator: "@trademade_in",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  manifest: "/manifest.webmanifest",

  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
      "en": SITE_URL,
    },
  },

  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#07090d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Enhanced JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: "TradeMade",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
      },
      image: `${SITE_URL}/og-image.png`,
      description:
        "India's leading algorithmic trading infrastructure platform specializing in low-latency trading system design, custom algo development in Python, C++, and Rust, high-precision backtesting with tick-level data for NSE/BSE, and multi-broker execution for SEBI RAs and prop desks.",
      telephone: "+917908158639",
      email: "connect@trademade.in",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        postalCode: "700001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "22.5726",
        longitude: "88.3639",
      },
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "City", name: "Mumbai" },
        { "@type": "City", name: "Delhi" },
        { "@type": "City", name: "Bangalore" },
        { "@type": "City", name: "Hyderabad" },
        { "@type": "City", name: "Kolkata" },
      ],
      knowsAbout: [
        "Algorithmic Trading",
        "Low Latency Trading Systems",
        "High Frequency Trading",
        "Backtesting",
        "Trading System Design",
        "Custom Algorithm Development",
        "Quantitative Finance",
        "SEBI Compliance",
        "NSE API Trading",
        "BSE Trading",
        "Multi-Broker Execution",
        "Python Trading Bots",
        "C++ Trading Systems",
        "Rust Trading Engines",
        "Options Trading Automation",
        "Futures Trading Automation",
        "Market Microstructure",
        "Order Execution",
        "Risk Management Systems",
        "Telegram Trading Bots",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Algorithmic Trading Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "High-Precision Backtesting Engine",
              url: `${SITE_URL}/backtesting`,
              description: "Test trading strategies on 10+ years of tick-level NSE/BSE data with real slippage modeling.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Algo Development",
              url: `${SITE_URL}/custom-development`,
              description: "Professional custom trading algorithm development in Python, C++, and Rust for Indian brokers.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Multi-Broker Execution Platform",
              url: `${SITE_URL}/multi-broker-beta`,
              description: "Deploy one trading strategy across Zerodha, Upstox, Angel One and 20+ Indian brokers simultaneously.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Low-Latency Trading System Design",
              url: `${SITE_URL}/low-latency-trading`,
              description: "High-performance trading infrastructure in C++ and Rust for HFT and latency-sensitive strategies.",
            },
          },
        ],
      },
      priceRange: "₹₹",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+917908158639",
          contactType: "customer support",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
          contactOption: "TollFree",
        },
      ],
      sameAs: [
        "https://x.com/trademade_in",
        "https://linkedin.com/company/trademade",
        "https://instagram.com/trademade.in",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "TradeMade",
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "SiteNavigationElement",
      "@id": `${SITE_URL}/#site-navigation`,
      name: mainNavLinks.map((link) => link.name),
      url: mainNavLinks.map((link) => `${SITE_URL}${link.href}`),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect to Google for faster GA4 loading */}
        {GA_MEASUREMENT_ID && (
          <>
            <link rel="preconnect" href="https://www.googletagmanager.com" />
            <link rel="preconnect" href="https://www.google-analytics.com" />
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-300 min-h-[100dvh] flex flex-col bg-background`}
      >
        {/* Google Analytics 4 */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: true
                });`}
            </Script>
          </>
        )}
        <Script
          id="neetocal-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.neetoCal=window.neetoCal||{embed:function(){(window.neetoCal.q=window.neetoCal.q||[]).push(arguments)}};
             window.neetoCal.embed({
                type: "elementClick",
                id: "6f2bfcb1-b1de-4959-a78e-993d3194d7a1",
                organization: "trademade",
                elementSelector: "#open-popup-button",
                isSidebarAndCoverImgHidden: "false",
                shouldForwardQueryParams: "false"
             });`,
          }}
        />
        <Script src="https://cdn.neetocal.com/javascript/embed.js" strategy="afterInteractive" />
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <StickyCTA />
        <CartInAIChatWidget />
      </body>
    </html>
  );
}
