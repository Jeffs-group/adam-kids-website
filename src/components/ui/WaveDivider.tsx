"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface WaveDividerProps {
  fill?: string;
  fillClassName?: string;
  position?: "top" | "bottom";
  flip?: boolean;
  className?: string;
  height?: number;
}

export default function WaveDivider({
  fill = "#FFF8E7",
  fillClassName = "",
  position = "bottom",
  flip = false,
  className = "",
  height = 54,
}: WaveDividerProps) {
  const shouldReduceMotion = useReducedMotion();

  // Wave path variants for gentle looping wave motion
  const path1 =
    "M0,28 C150,55 350,5 500,28 C650,52 850,5 1000,28 C1150,52 1350,5 1440,28 L1440,64 L0,64 Z";
  const path2 =
    "M0,32 C150,10 350,52 500,30 C650,8 850,50 1000,26 C1150,6 1350,50 1440,32 L1440,64 L0,64 Z";

  const transformStyle = `${position === "top" ? "rotate-180" : ""} ${
    flip ? "scale-x-[-1]" : ""
  }`;

  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${transformStyle} ${className}`}
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className="w-full h-full block"
      >
        {shouldReduceMotion ? (
          <path
            d={path1}
            fill={fill}
            className={fillClassName}
          />
        ) : (
          <motion.path
            d={path1}
            animate={{
              d: [path1, path2, path1],
            }}
            transition={{
              repeat: Infinity,
              duration: 9,
              ease: "easeInOut",
            }}
            fill={fill}
            className={fillClassName}
          />
        )}
      </svg>
    </div>
  );
}

