"use client";

import React from "react";
import Link from "next/link";
import { motion, type HTMLMotionProps } from "motion/react";
import { ArrowRight } from "lucide-react";
import { standardTransition } from "@/lib/motion";

export type ButtonVariant = "filled" | "outline" | "white" | "caramel";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  withArrow?: boolean;
  arrowIcon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "filled",
  size = "md",
  href,
  withArrow = false,
  arrowIcon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const sizeStyles = {
    sm: "px-5 py-2 text-sm font-semibold gap-1.5",
    md: "px-7 py-3 text-base font-semibold gap-2",
    lg: "px-9 py-4 text-lg font-bold gap-2.5",
  }[size];

  const variantStyles = {
    filled:
      "bg-gradient-to-r from-brown-700 to-brown-900 text-white shadow-soft hover:shadow-soft-lg border border-brown-700/30",
    outline:
      "bg-transparent text-brown-900 border-2 border-brown-900 hover:bg-brown-900/5 shadow-sm",
    white:
      "bg-white text-brown-900 hover:bg-cream/90 shadow-soft hover:shadow-soft-lg border border-brown-900/10",
    caramel:
      "bg-caramel text-white hover:bg-[#a67243] shadow-soft hover:shadow-soft-lg",
  }[variant];

  const commonClasses = `inline-flex items-center justify-center rounded-full transition-colors cursor-pointer select-none group font-body ${sizeStyles} ${variantStyles} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <motion.span
          className="inline-flex items-center"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={standardTransition}
        >
          {arrowIcon || <ArrowRight className="w-4 h-4 ml-0.5 transition-transform group-hover:translate-x-1" />}
        </motion.span>
      )}
    </>
  );

  if (href) {
    return (
      <motion.div
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.97 }}
        transition={standardTransition}
        className="inline-block"
      >
        <Link href={href} className={commonClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      transition={standardTransition}
      className={commonClasses}
      {...props}
    >
      {content}
    </motion.button>
  );
}
