"use client";

import { InstagramLogo, LinkedinLogo, Link as LinkIcon, WhatsappLogo, XLogo } from "@phosphor-icons/react/dist/ssr";
import { useState, useEffect } from "react";

interface ShareButtonsProps {
    title: string;
}

export function ShareButtons({ title }: ShareButtonsProps) {
    const [url, setUrl] = useState("");
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        setUrl(window.location.href);
    }, []);

    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex items-center gap-3">
            <span className="text-[14px] text-[#686868] font-syne uppercase tracking-wider mr-2">
                Share
            </span>
            <a
                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#dad5cc] flex items-center justify-center text-[#3a3a3a] hover:bg-[#0c0c0c] hover:text-white hover:border-[#0c0c0c] transition-colors"
                aria-label="Share on X (Twitter)"
            >
                <XLogo weight="fill" size={18} />
            </a>
            <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#dad5cc] flex items-center justify-center text-[#3a3a3a] hover:bg-[#0c0c0c] hover:text-white hover:border-[#0c0c0c] transition-colors"
                aria-label="Share on LinkedIn"
            >
                <LinkedinLogo weight="fill" size={18} />
            </a>
            <a
                href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[#dad5cc] flex items-center justify-center text-[#3a3a3a] hover:bg-[#0c0c0c] hover:text-white hover:border-[#0c0c0c] transition-colors"
                aria-label="Share on WhatsApp"
            >
                <WhatsappLogo weight="fill" size={18} />
            </a>
            <button
                onClick={handleCopyLink}
                className="w-10 h-10 rounded-full border border-[#dad5cc] flex items-center justify-center text-[#3a3a3a] hover:bg-[#0c0c0c] hover:text-white hover:border-[#0c0c0c] transition-colors relative"
                aria-label="Copy Link"
            >
                <LinkIcon weight="bold" size={18} />
                {copied && (
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#0c0c0c] text-white text-[11px] py-1 px-2 rounded whitespace-nowrap font-sans before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-[#0c0c0c]">
                        Copied!
                    </span>
                )}
            </button>
        </div>
    );
}
