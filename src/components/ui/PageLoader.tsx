"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

interface PageLoaderProps {
  message?: string;
  submessage?: string;
}

export default function PageLoader({
  message = "Adam Kids Montessori",
  submessage = "Preparing a world of joyful discovery...",
}: PageLoaderProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream/95 backdrop-blur-md px-6 select-none overflow-hidden"
    >
      {/* Drifting soft background pastel blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 20, 0],
                  y: [0, -15, 0],
                  scale: [1, 1.08, 1],
                }
          }
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-butter/40 blur-3xl"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, -20, 0],
                  y: [0, 15, 0],
                  scale: [1, 1.1, 1],
                }
          }
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-sage/35 blur-3xl"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 15, 0],
                  y: [0, 20, 0],
                }
          }
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-blush/30 blur-3xl"
        />
      </div>

      {/* Main Center Card with Animated Logo */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col items-center max-w-sm w-full p-8 sm:p-10 rounded-[32px] bg-white/90 backdrop-blur-md border border-brown-900/10 shadow-soft-xl"
      >
        {/* Soft Golden Pulsing Ambient Halo */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }
          }
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-6 rounded-[28px] bg-butter/50 -z-10 blur-xl"
        />

        {/* Playful Floating Little Stars/Confetti */}
        <motion.span
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [-3, 3, -3],
                  rotate: [0, 25, 0],
                  scale: [0.9, 1.15, 0.9],
                }
          }
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-3.5 -right-2 text-caramel text-2xl select-none"
        >
          ★
        </motion.span>
        <motion.span
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [3, -3, 3],
                  rotate: [0, -20, 0],
                  scale: [1, 1.2, 1],
                }
          }
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute -bottom-2 -left-2 text-sage text-2xl select-none"
        >
          ✦
        </motion.span>

        {/* Animated Adam Kids Logo */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -12, 0, 4, 0],
                  rotate: [0, -1.5, 0, 1.5, 0],
                  scale: [1, 1.03, 1, 0.98, 1],
                }
          }
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-44 sm:w-52 h-16 flex items-center justify-center mb-6"
        >
          <Image
            src="/images/logo/Adam Kids logo enhanced.png"
            alt="Adam Kids International Montessori School"
            width={200}
            height={70}
            priority
            className="w-full h-auto object-contain drop-shadow-xs"
          />
        </motion.div>

        {/* School Name & Message */}
        <h3 className="font-heading font-bold text-lg sm:text-xl text-brown-900 text-center tracking-tight mb-1.5">
          {message}
        </h3>
        <p className="font-body text-xs sm:text-sm text-brown-900/70 text-center leading-relaxed mb-6 max-w-xs">
          {submessage}
        </p>

        {/* Playful Montessori Bouncing Beads */}
        <div className="flex items-center gap-2.5">
          {[
            { color: "bg-caramel", delay: 0 },
            { color: "bg-[#B8814F]", delay: 0.18 },
            { color: "bg-[#DCE8D4] border border-brown-900/20", delay: 0.36 },
            { color: "bg-[#EBDDA0] border border-brown-900/20", delay: 0.54 },
          ].map((bead, i) => (
            <motion.div
              key={i}
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, -10, 0],
                      scale: [1, 1.25, 1],
                    }
              }
              transition={{
                duration: 0.9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: bead.delay,
              }}
              className={`w-3 h-3 rounded-full ${bead.color} shadow-2xs`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

