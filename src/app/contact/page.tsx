import type { Metadata } from 'next';
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInquiries } from "@/components/contact/ContactInquiries";
import { ContactForm } from "@/components/contact/ContactForm";
import { Ticker } from "@/components/home/Ticker";
import { ContactTestimonials } from "@/components/contact/ContactTestimonials";

export const metadata: Metadata = {
    title: 'Contact Us',
    description: "Get in touch with TradeMade for custom algo quotes, backtesting support, or to join the beta.",
    keywords: ["contact TradeMade", "algo trading support India", "custom algo quote", "trading bot inquiry"],
    openGraph: {
        title: "Contact Us | TradeMade",
        description: "Get in touch with TradeMade for custom algo quotes, backtesting support, or to join the beta.",
        url: "https://trademade.in/contact",
    },
    alternates: { canonical: "https://trademade.in/contact" },
};

export default function ContactPage() {
    return (
        <div className="flex flex-col w-full overflow-hidden">
            <ContactHero />
            <ContactInquiries />
            <ContactForm />

            {/* Trust Elements below the Contact Form */}
            <div className="py-12 bg-surface mt-12 flex flex-col items-center border-t border-white/5">
                <p className="text-sm font-medium text-slate-400 mb-8 uppercase tracking-widest">
                    Trusted globally From Broker, to pro trader, and quant trader
                </p>
                <Ticker />
            </div>

            <ContactTestimonials />
        </div>
    );
}
