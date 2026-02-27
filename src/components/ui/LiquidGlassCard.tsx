"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform, HTMLMotionProps } from "framer-motion";

interface LiquidGlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
}

export function LiquidGlassCard({ children, className, ...props }: LiquidGlassCardProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative overflow-hidden rounded-[2.5rem]",
                "bg-surface/30 backdrop-blur-2xl",
                "border border-white/10",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_-15px_rgba(0,0,0,0.4)]",
                "transition-shadow duration-300 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_30px_60px_-15px_rgba(0,212,170,0.1)]",
                className
            )}
            {...props}
        >
            {/* Subtle top glare highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" style={{ transform: "translateZ(10px)" }} />
            {children}
        </motion.div>
    );
}
