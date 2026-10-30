"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Sparkles, Sun, Heart, Smile } from "lucide-react";

interface KidsFloatingElementsProps {
  className?: string;
  variant?: "hero" | "subtle" | "colorful";
}

export default function KidsFloatingElements({
  className = "",
  variant = "subtle",
}: KidsFloatingElementsProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* 1. Playful Sun / Sparkle - Top Left */}
      <motion.div
        animate={{
          y: [-8, 8, -8],
          rotate: [0, 15, -10, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-12 left-[8%] sm:left-[12%] text-caramel/70"
      >
        <div className="w-10 h-10 rounded-2xl bg-butter/60 border border-caramel/20 shadow-xs flex items-center justify-center backdrop-blur-xs">
          <Sun className="w-5 h-5 text-caramel animate-spin-slow" />
        </div>
      </motion.div>

      {/* 2. Pastel Montessori Cube - Top Right */}
      <motion.div
        animate={{
          y: [10, -10, 10],
          rotate: [-12, 12, -12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
        className="absolute top-20 right-[10%] sm:right-[15%]"
      >
        <div className="w-8 h-8 rounded-xl bg-sage border border-brown-900/10 shadow-soft flex items-center justify-center">
          <span className="font-heading font-bold text-xs text-brown-900">A</span>
        </div>
      </motion.div>

      {/* 3. Twinkling Sparkle - Mid Left */}
      <motion.div
        animate={{
          scale: [0.8, 1.2, 0.8],
          rotate: [0, 45, 0],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
        className="absolute top-1/2 left-[5%] text-caramel"
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>

      {/* 4. Pastel Floating Circle / Wooden Block B - Mid Right */}
      <motion.div
        animate={{
          y: [-12, 12, -12],
          rotate: [8, -8, 8],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.6,
        }}
        className="absolute top-2/3 right-[6%]"
      >
        <div className="w-9 h-9 rounded-2xl bg-blush border border-brown-900/10 shadow-soft flex items-center justify-center">
          <Smile className="w-5 h-5 text-brown-900" />
        </div>
      </motion.div>

      {/* 5. Floating Heart / Crayon Dot - Bottom Left */}
      {variant !== "subtle" && (
        <motion.div
          animate={{
            y: [6, -8, 6],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-16 left-[18%] text-blush/80"
        >
          <div className="w-7 h-7 rounded-full bg-cream border border-caramel/30 shadow-xs flex items-center justify-center">
            <Heart className="w-4 h-4 text-caramel fill-caramel/40" />
          </div>
        </motion.div>
      )}

      {/* 6. Soft Playful Rainbow / Pastel Floating Pill */}
      <motion.div
        animate={{
          x: [-6, 6, -6],
          y: [4, -4, 4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
        className="absolute bottom-12 right-[20%]"
      >
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-brown-900/10 shadow-xs backdrop-blur-xs">
          <span className="w-2 h-2 rounded-full bg-sage" />
          <span className="w-2 h-2 rounded-full bg-butter" />
          <span className="w-2 h-2 rounded-full bg-sky" />
          <span className="w-2 h-2 rounded-full bg-blush" />
        </div>
      </motion.div>
    </div>
  );
}

