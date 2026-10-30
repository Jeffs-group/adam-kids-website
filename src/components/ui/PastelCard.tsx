"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { standardTransition } from "@/lib/motion";

export type PastelColor = "sage" | "sky" | "butter" | "blush" | "white";

interface PastelCardProps {
  color?: PastelColor;
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  bordered?: boolean;
  onClick?: () => void;
}

export default function PastelCard({
  color = "white",
  children,
  className = "",
  hoverEffect = true,
  bordered = false,
  onClick,
}: PastelCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const colorStyles: Record<PastelColor, string> = {
    sage: "bg-[#DCE8D4] text-brown-900",
    sky: "bg-[#D9E6EE] text-brown-900",
    butter: "bg-[#EBDDA0] text-brown-900",
    blush: "bg-[#E3B0A0] text-brown-900",
    white: "bg-white text-brown-900",
  };

  const borderStyles = bordered
    ? "border-2 border-brown-900/10"
    : "border border-brown-900/5";

  if (shouldReduceMotion || !hoverEffect) {
    return (
      <div
        onClick={onClick}
        className={`rounded-[28px] p-6 sm:p-8 shadow-soft ${colorStyles[color]} ${borderStyles} ${className}`}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      onClick={onClick}
      whileHover={{
        y: -8,
        rotate: 0.5,
        boxShadow:
          "0 24px 48px -12px rgba(78, 39, 23, 0.14), 0 8px 16px -4px rgba(78, 39, 23, 0.08)",
      }}
      transition={standardTransition}
      className={`rounded-[28px] p-6 sm:p-8 shadow-soft transition-colors ${colorStyles[color]} ${borderStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
}

