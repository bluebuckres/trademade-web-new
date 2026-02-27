"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TerminalTypewriterProps extends React.HTMLAttributes<HTMLDivElement> {
    lines: string[];
    typingSpeed?: number;
    delayBetweenLines?: number;
}

export function TerminalTypewriter({
    lines,
    typingSpeed = 30,
    delayBetweenLines = 400,
    className,
    ...props
}: TerminalTypewriterProps) {
    const [displayedLines, setDisplayedLines] = useState<string[]>([]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);

    useEffect(() => {
        if (currentLineIndex >= lines.length) return;

        const currentFullLine = lines[currentLineIndex];

        if (currentCharIndex < currentFullLine.length) {
            const timeout = setTimeout(() => {
                setDisplayedLines((prev) => {
                    const newLines = [...prev];
                    if (newLines[currentLineIndex] === undefined) {
                        newLines[currentLineIndex] = "";
                    }
                    newLines[currentLineIndex] += currentFullLine[currentCharIndex];
                    return newLines;
                });
                setCurrentCharIndex((prev) => prev + 1);
            }, typingSpeed);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setCurrentLineIndex((prev) => prev + 1);
                setCurrentCharIndex(0);
            }, delayBetweenLines);
            return () => clearTimeout(timeout);
        }
    }, [currentLineIndex, currentCharIndex, lines, typingSpeed, delayBetweenLines]);

    return (
        <div
            className={cn(
                "font-mono text-sm leading-tight text-primary p-4 rounded-xl bg-surface/50 border border-white/5",
                "shadow-inner overflow-hidden",
                className
            )}
            {...props}
        >
            <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="space-y-1 opacity-90">
                {displayedLines.map((line, i) => (
                    <div key={i} className="flex">
                        <span className="text-white/30 mr-4 select-none">{String(i + 1).padStart(2, "0")}</span>
                        <span className={cn("text-slate-300", line.startsWith(">") ? "text-primary" : "")}>{line}</span>
                    </div>
                ))}
                {currentLineIndex < lines.length && (
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-2 h-4 bg-primary ml-1 align-middle"
                    />
                )}
            </div>
        </div>
    );
}
