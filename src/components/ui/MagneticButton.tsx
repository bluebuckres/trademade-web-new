"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useMotionValue, useSpring, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends Omit<HTMLMotionProps<"button">, "ref" | "onClick"> {
    children: React.ReactNode;
    className?: string;
    href?: string;
    target?: string;
    activeOnClick?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function MagneticButton({
    children,
    className,
    activeOnClick = true,
    href,
    onClick,
    ...props
}: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const router = useRouter();

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        // Max movement is 20% of bounding box
        x.set(middleX * 0.2);
        y.set(middleY * 0.2);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const handlePress = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) onClick(e);
        if (href) {
            if (href.startsWith('http') || href.startsWith('mailto:')) {
                window.open(href, '_blank', 'noopener,noreferrer');
            } else if (href.startsWith('#')) {
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
            } else {
                router.push(href);
            }
        }
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onFocus={() => { }}
            onBlur={handleMouseLeave}
            onClick={handlePress}
            style={{ x: springX, y: springY }}
            whileHover={{ scale: 1.02 }}
            whileTap={activeOnClick ? { scale: 0.96 } : undefined}
            className={cn(
                "relative rounded-full px-8 py-3 font-satoshi font-medium tracking-tight overflow-hidden",
                "transition-colors duration-300",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                "hover:shadow-[0_0_20px_rgba(0,212,170,0.3)] flex items-center justify-center",
                className
            )}
            {...props}
        >
            {/* Glare effect inside button */}
            <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
            {children}
        </motion.button>
    );
}
