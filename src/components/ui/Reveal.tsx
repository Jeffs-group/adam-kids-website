"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  fadeUpVariant,
  fadeInVariant,
  scaleInVariant,
  slideLeftVariant,
  slideRightVariant,
  staggerContainer,
} from "@/lib/motion";

export type RevealVariant =
  | "fade-up"
  | "fade-in"
  | "scale-in"
  | "slide-left"
  | "slide-right"
  | "stagger";

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  margin?: string;
  once?: boolean;
}

export default function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
  margin = "-80px",
  once = true,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getVariant = () => {
    switch (variant) {
      case "fade-in":
        return fadeInVariant;
      case "scale-in":
        return scaleInVariant;
      case "slide-left":
        return slideLeftVariant;
      case "slide-right":
        return slideRightVariant;
      case "stagger":
        return staggerContainer(0.12, delay);
      case "fade-up":
      default:
        return fadeUpVariant;
    }
  };

  return (
    <motion.div
      variants={getVariant()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: margin as `${number}px` | `${number}%` }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
