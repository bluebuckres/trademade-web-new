import { ReactNode } from "react";

interface LegalLayoutProps {
    title: string;
    lastUpdated?: string;
    children: ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
    return (
        <main className="min-h-screen bg-background pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                <header className="mb-12 border-b border-white/10 pb-8">
                    <h1 className="font-satoshi text-4xl md:text-5xl font-bold text-white mb-4">
                        {title}
                    </h1>
                    {lastUpdated && (
                        <p className="text-slate-400 font-mono text-sm">
                            Last Updated: {lastUpdated}
                        </p>
                    )}
                </header>

                <div className="prose prose-invert prose-slate max-w-none 
                    prose-headings:font-satoshi prose-headings:font-bold prose-headings:text-white 
                    prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-white/5 prose-h2:pb-2
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                    prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
                    prose-ul:text-slate-300 prose-li:mb-2
                    prose-strong:text-white prose-strong:font-semibold
                    prose-a:text-primary hover:prose-a:text-primary-hover prose-a:transition-colors">
                    {children}
                </div>
            </div>
        </main>
    );
}
