"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { wordMaskContainer, wordMaskItem } from "@/lib/motion";

interface AnimatedHeadlineProps {
  part1?: string;
  highlight?: string;
  part2?: string;
  className?: string;
  highlightClassName?: string;
  as?: "h1" | "h2" | "h3";
}

export default function AnimatedHeadline({
  part1 = "",
  highlight = "",
  part2 = "",
  className = "",
  highlightClassName = "text-caramel",
  as: Component = "h1",
}: AnimatedHeadlineProps) {
  const shouldReduceMotion = useReducedMotion();

  // Combine words with tagging
  const words: { text: string; isHighlight: boolean }[] = [];

  if (part1) {
    part1
      .trim()
      .split(/\s+/)
      .forEach((w) => words.push({ text: w, isHighlight: false }));
  }

  if (highlight) {
    highlight
      .trim()
      .split(/\s+/)
      .forEach((w) => words.push({ text: w, isHighlight: true }));
  }

  if (part2) {
    part2
      .trim()
      .split(/\s+/)
      .forEach((w) => words.push({ text: w, isHighlight: false }));
  }

  if (shouldReduceMotion) {
    return (
      <Component className={className}>
        {words.map((item, idx) => (
          <span
            key={idx}
            className={`inline-block mr-[0.28em] ${
              item.isHighlight ? highlightClassName : ""
            }`}
          >
            {item.text}
          </span>
        ))}
      </Component>
    );
  }

  return (
    <Component className={className}>
      <motion.span
        variants={wordMaskContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="inline-block"
      >
        {words.map((item, idx) => (
          <span
            key={idx}
            className="inline-block overflow-hidden align-top mr-[0.28em] pb-[0.08em]"
          >
            <motion.span
              variants={wordMaskItem}
              className={`inline-block ${
                item.isHighlight ? highlightClassName : ""
              }`}
            >
              {item.text}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  );
}

