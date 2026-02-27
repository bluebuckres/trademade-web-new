"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 20 },
    },
};

export function AnimatedBentoGrid({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={cn(
                "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-7xl mx-auto auto-rows-[minmax(350px,_auto)]",
                className
            )}
        >
            {children}
        </motion.div>
    );
}

export function AnimatedBentoItem({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
}
