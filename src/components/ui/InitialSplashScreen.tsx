"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

export default function InitialSplashScreen() {
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Check if the user has already visited in this session with safety try-catch for mobile private browsing
    if (typeof window !== "undefined") {
      try {
        const isMobile = window.innerWidth < 768;
        // On small mobile screens, keep splash snappy or skip to ensure immediate screen visibility
        const hasVisited = sessionStorage.getItem("adam_kids_splash_shown");
        if (!hasVisited) {
          sessionStorage.setItem("adam_kids_splash_shown", "true");
          const showTimer = setTimeout(() => {
            setVisible(true);
          }, 10);

          // Auto-dismiss splash
          const hideTimer = setTimeout(() => {
            setVisible(false);
          }, isMobile ? 950 : 1350);

          return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
          };
        }
      } catch {
        // Safe fallback if sessionStorage is blocked: initial visible state is already false
      }
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="initial-splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream select-none pointer-events-none"
        >
          {/* Subtle soft background blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-butter/45 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-sage/40 blur-3xl" />
          </div>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center p-8 sm:p-10 rounded-[36px] bg-white/95 backdrop-blur-md border border-brown-900/10 shadow-soft-xl max-w-sm sm:max-w-md w-full mx-4"
          >
            {/* Playful Floating Little Stars/Confetti */}
            <motion.span
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [-4, 4, -4],
                      rotate: [0, 25, 0],
                    }
              }
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3.5 -right-2 text-caramel text-2xl select-none"
            >
              ★
            </motion.span>
            <motion.span
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [4, -4, 4],
                      rotate: [0, -20, 0],
                    }
              }
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2.5 -left-2 text-sage text-2xl select-none"
            >
              ✦
            </motion.span>

            {/* Pulsing Glow behind Logo */}
            <div className="absolute inset-6 rounded-[28px] bg-butter/40 -z-10 blur-xl animate-pulse" />

            {/* Bouncing School Logo */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, -8, 0],
                      scale: [1, 1.03, 1],
                    }
              }
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-48 sm:w-56 h-16 flex items-center justify-center mb-5"
            >
              <Image
                src="/images/logo/Adam Kids logo enhanced.png"
                alt="Adam Kids International Montessori School"
                width={220}
                height={75}
                priority
                className="w-full h-auto object-contain"
              />
            </motion.div>

            {/* =========================================================
                KIDS PLAYING ANIMATION INSIDE THE LOADING SCREEN
                ========================================================= */}
            <div className="flex items-end justify-center gap-6 my-3 py-2 px-4 rounded-2xl bg-cream/60 border border-brown-900/10 w-full">
              {/* Kid 1: Stacking Montessori Building Blocks */}
              <div className="flex flex-col items-center">
                {/* 3 Stacking Montessori Blocks */}
                <div className="flex flex-col items-center mb-0.5">
                  <motion.div
                    animate={shouldReduceMotion ? {} : { rotate: [-4, 4, -4], y: [-1, 1, -1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                    className="w-3.5 h-3.5 rounded-sm bg-[#B8814F] border border-brown-900/20 shadow-2xs"
                  />
                  <div className="w-5 h-4 rounded-sm bg-[#EBDDA0] border border-brown-900/20" />
                  <div className="w-7 h-4.5 rounded-sm bg-[#DCE8D4] border border-brown-900/20" />
                </div>
                {/* Child Stacking */}
                <div className="flex flex-col items-center">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#FCE5D8] border border-[#B8814F]/40 flex items-center justify-center">
                    <span className="text-[6px] text-brown-900 font-bold">^‿^</span>
                  </div>
                  <div className="w-4 h-3 bg-[#E3B0A0] rounded-t-sm" />
                </div>
              </div>

              {/* Kid 2: Bouncing a Colorful Ball */}
              <div className="flex flex-col items-center">
                {/* Bouncing ball */}
                <motion.div
                  animate={shouldReduceMotion ? {} : { y: [0, -18, 0], scale: [1.1, 0.9, 1.1] }}
                  transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#B8814F] to-[#EBDDA0] border border-brown-900/20 shadow-2xs mb-1"
                />
                {/* Child looking up at ball */}
                <div className="w-4.5 h-4.5 rounded-full bg-[#FCE5D8] border border-[#B8814F]/40 flex items-center justify-center">
                  <span className="text-[6px] text-brown-900 font-bold">^o^</span>
                </div>
                <div className="w-4 h-3 bg-[#DCE8D4] rounded-t-sm" />
              </div>

              {/* Kid 3: Waving Cheerful Hands with Balloon */}
              <div className="flex flex-col items-center">
                {/* Swaying little balloon */}
                <motion.div
                  animate={shouldReduceMotion ? {} : { rotate: [-8, 8, -8], y: [-2, 2, -2] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-3.5 h-4.5 rounded-full bg-[#E3B0A0] border border-brown-900/15 mb-0.5"
                />
                <div className="w-4.5 h-4.5 rounded-full bg-[#FCE5D8] border border-[#B8814F]/40 flex items-center justify-center">
                  <span className="text-[6px] text-brown-900 font-bold">^‿^</span>
                </div>
                <div className="w-4 h-3 bg-[#B8814F] rounded-t-sm" />
              </div>
            </div>

            <h3 className="font-heading font-bold text-lg text-brown-900 text-center tracking-tight mt-2 mb-0.5">
              Adam Kids Montessori
            </h3>
            <p className="font-body text-xs text-brown-900/70 text-center mb-4">
              Where little hands make big discoveries...
            </p>

            {/* Playful Montessori Bouncing Dots */}
            <div className="flex items-center gap-2">
              {[
                { color: "bg-caramel", delay: 0 },
                { color: "bg-[#B8814F]", delay: 0.12 },
                { color: "bg-[#DCE8D4] border border-brown-900/20", delay: 0.24 },
                { color: "bg-[#EBDDA0] border border-brown-900/20", delay: 0.36 },
              ].map((dot, i) => (
                <motion.div
                  key={i}
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: [0, -6, 0],
                        }
                  }
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: dot.delay,
                  }}
                  className={`w-2.5 h-2.5 rounded-full ${dot.color}`}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
