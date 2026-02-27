import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Backtest. Build. Deploy. Trade Smarter | TradeMade",
    template: "%s | TradeMade",
  },
  description:
    "India's most precise backtesting engine meets professional custom algorithm development. From raw idea to live deployment on Zerodha, Upstox, Angel One & more.",
  keywords: [
    "algorithmic trading India",
    "backtesting engine",
    "algo trading platform",
    "custom algorithm development",
    "trading bot India",
    "Zerodha algo trading",
    "Upstox API trading",
    "Angel One algo",
    "backtesting NSE",
    "backtesting BSE",
    "multi-broker trading",
    "TradeMade",
    "quant trading India",
    "strategy backtest",
    "live algo deployment",
  ],
  authors: [{ name: "TradeMade", url: SITE_URL }],
  creator: "TradeMade",
  publisher: "TradeMade",

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "TradeMade",
    title: "Backtest. Build. Deploy. Trade Smarter | TradeMade",
    description:
      "India's most precise backtesting engine meets professional custom algorithm development. From raw idea to live deployment.",
    url: SITE_URL,
    images: [
      {
        url: "/custom_logo.png",
        width: 192,
        height: 192,
        alt: "TradeMade Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Backtest. Build. Deploy. Trade Smarter | TradeMade",
    description:
      "India's most precise backtesting engine meets professional custom algorithm development.",
    images: ["/custom_logo.png"],
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
  },

  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#07090d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "TradeMade",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/custom_logo.png`,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: "hello@trademade.in",
          contactType: "customer support",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      ],
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "TradeMade",
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
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-300 min-h-[100dvh] flex flex-col bg-background`}
      >
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
