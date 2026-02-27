"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AsymmetricContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    ratio?: "50/50" | "60/40" | "40/60" | "30/70" | "70/30";
    reverseOnMobile?: boolean;
}

export function AsymmetricContainer({
    children,
    ratio = "50/50",
    reverseOnMobile = false,
    className,
    ...props
}: AsymmetricContainerProps) {
    // Translate ratio to css grid cols for tailwind
    let gridCols = "md:grid-cols-2"; // fallback
    if (ratio === "60/40") gridCols = "md:grid-cols-[60%_40%]";
    if (ratio === "40/60") gridCols = "md:grid-cols-[40%_60%]";
    if (ratio === "70/30") gridCols = "md:grid-cols-[70%_30%]";
    if (ratio === "30/70") gridCols = "md:grid-cols-[30%_70%]";

    return (
        <div
            className={cn(
                "grid grid-cols-1 gap-8 md:gap-16 items-start md:items-center w-full max-w-7xl mx-auto px-6",
                gridCols,
                className
            )}
            {...props}
        >
            {React.Children.map(children, (child, index) => {
                // Apply responsive reflow ordering if reverseOnMobile is true
                if (!React.isValidElement(child)) return child;
                const orderClass = reverseOnMobile && index === 0 ? "order-2 md:order-1" :
                    reverseOnMobile && index === 1 ? "order-1 md:order-2" : "";
                return (
                    <div className={cn("w-full h-full", orderClass)}>
                        {child}
                    </div>
                );
            })}
        </div>
    );
}
