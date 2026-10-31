"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";

export default function KidsRunningNavbar() {
  const shouldReduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.offsetWidth);
      }
    };
    updateWidth();

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && trackRef.current) {
      ro = new ResizeObserver(() => updateWidth());
      ro.observe(trackRef.current);
    }

    window.addEventListener("resize", updateWidth);
    window.addEventListener("orientationchange", updateWidth);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener("resize", updateWidth);
      window.removeEventListener("orientationchange", updateWidth);
    };
  }, []);

  if (shouldReduceMotion) return null;

  // Total running distance spanning from right at the logo across to the finish line
  const runDistance = trackWidth > 0 ? Math.max(100, trackWidth - 55) : 320;
  // Natural, playful running pace (~80px/sec, lively on mobile, gentle on desktop)
  const runDuration = Math.max(3.6, Math.min(10.5, runDistance / 80));

  return (
    <div
      ref={trackRef}
      aria-hidden="true"
      className="absolute left-[96px] sm:left-[122px] md:left-[140px] right-1 sm:right-4 bottom-0 h-12 sm:h-14 pointer-events-none select-none overflow-hidden z-10 block"
    >
      {/* Playground Track Line running along the bottom from Logo across the Navbar */}
      <div className="absolute bottom-[2px] sm:bottom-[3px] inset-x-1 sm:inset-x-2 h-[1px] border-b border-dashed border-caramel/25" />

      {/* Little Finish Flag at the end */}
      <div className="absolute right-0.5 sm:right-1 bottom-0.5 sm:bottom-1 flex items-center gap-0.5 text-[10px] sm:text-[11px] select-none text-caramel/80">
        <span title="Finish Line">🏁</span>
      </div>

      {/* Group of Kids Running across the entire navbar */}
      <motion.div
        key={`run-${trackWidth}`}
        initial={{ x: 0, opacity: 0 }}
        animate={{
          x: [0, runDistance],
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{
          x: {
            duration: runDuration,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: 0.4,
          },
          opacity: {
            duration: runDuration,
            repeat: Infinity,
            times: [0, 0.05, 0.9, 0.97, 1],
            ease: "easeInOut",
            repeatDelay: 0.4,
          },
        }}
        className="absolute bottom-0.5 sm:bottom-1 left-0 flex items-end gap-2 sm:gap-3.5 h-11 sm:h-12 z-10 scale-[0.72] sm:scale-85 md:scale-100 origin-bottom-left"
      >
        {/* -------------------------------------------------------------
            CHILD 1: GIRL WITH BALLOON
            ------------------------------------------------------------- */}
        <div className="relative flex flex-col items-center">
          {/* Floating Swaying Balloon */}
          <motion.div
            animate={{
              y: [-2, 2, -2],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center -mb-1"
          >
            <svg width="20" height="24" viewBox="0 0 24 28" fill="none">
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 16.5 5 20.2 9.5 21.6L12 24L14.5 21.6C19 20.2 22 16.5 22 12C22 6.48 17.52 2 12 2Z"
                fill="#B8814F"
              />
              <circle cx="8" cy="8" r="2.5" fill="#FFFFFF" fillOpacity="0.5" />
              <path
                d="M12 24C12 25 11 27 12 29"
                stroke="#6B3418"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          {/* Child 1 Body */}
          <div className="relative w-7 h-9">
            {/* Head & Pigtails */}
            <motion.div
              animate={{ y: [-1.2, 1.2, -1.2] }}
              transition={{
                duration: 0.32,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex justify-center"
            >
              {/* Left Pigtail */}
              <motion.span
                animate={{ rotate: [-18, 18, -18] }}
                transition={{
                  duration: 0.32,
                  repeat: Infinity,
                }}
                className="absolute -left-1 top-0.5 w-1.5 h-2 rounded-full bg-[#6B3418]"
              />
              {/* Right Pigtail */}
              <motion.span
                animate={{ rotate: [18, -18, 18] }}
                transition={{
                  duration: 0.32,
                  repeat: Infinity,
                }}
                className="absolute -right-1 top-0.5 w-1.5 h-2 rounded-full bg-[#6B3418]"
              />

              {/* Head */}
              <div className="w-4.5 h-4.5 rounded-full bg-[#FCE5D8] border border-[#B8814F]/40 flex items-center justify-center relative shadow-2xs overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-[#6B3418] rounded-t-full" />
                {/* Cheerful Smile */}
                <span className="text-[6px] text-[#4E2717] font-bold mt-1">^‿^</span>
              </div>
            </motion.div>

            {/* Torso & Dress */}
            <div className="w-4.5 h-3.5 mx-auto rounded-t-md bg-[#E3B0A0] border border-[#d49987] relative flex justify-center items-center -mt-0.5">
              <span className="w-0.5 h-0.5 rounded-full bg-[#FFF8E7]" />
            </div>

            {/* Legs (Running cycle) */}
            <div className="flex justify-center gap-1 -mt-0.5">
              <motion.div
                animate={{ rotate: [32, -32, 32] }}
                transition={{
                  duration: 0.32,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-1.5 h-2.5 bg-[#6B3418] rounded-full origin-top"
              />
              <motion.div
                animate={{ rotate: [-32, 32, -32] }}
                transition={{
                  duration: 0.32,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-1.5 h-2.5 bg-[#B8814F] rounded-full origin-top"
              />
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------
            CHILD 2: BOY WITH CAP
            ------------------------------------------------------------- */}
        <div className="relative flex flex-col items-center">
          {/* Child 2 Body */}
          <div className="relative w-7 h-9 mt-2.5">
            {/* Head with Cap */}
            <motion.div
              animate={{ y: [1.2, -1.2, 1.2] }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex justify-center"
            >
              {/* Cap Visor */}
              <span className="absolute -top-0.5 -right-0.5 w-3 h-1.2 rounded-full bg-[#B8814F]" />
              <div className="w-4.5 h-4.5 rounded-full bg-[#FCE5D8] border border-[#B8814F]/40 flex items-center justify-center relative shadow-2xs overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1.5 bg-[#B8814F] rounded-t-full" />
                {/* Happy Playful Face */}
                <span className="text-[6px] text-[#4E2717] font-bold mt-1">^o^</span>
              </div>
            </motion.div>

            {/* Torso & T-Shirt */}
            <div className="w-4.5 h-3.5 mx-auto rounded-t-md bg-[#DCE8D4] border border-[#c2d4b6] relative flex justify-center items-center -mt-0.5">
              {/* Arm pumping */}
              <motion.span
                animate={{ rotate: [-35, 35, -35] }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -left-1 top-0.5 w-1 h-2.5 bg-[#4E2717] rounded-full origin-top"
              />
            </div>

            {/* Legs (Running cycle) */}
            <div className="flex justify-center gap-1 -mt-0.5">
              <motion.div
                animate={{ rotate: [-32, 32, -32] }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-1.5 h-2.5 bg-[#4E2717] rounded-full origin-top"
              />
              <motion.div
                animate={{ rotate: [32, -32, 32] }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="w-1.5 h-2.5 bg-[#6B3418] rounded-full origin-top"
              />
            </div>
          </div>
        </div>

        {/* Rolling Montessori Play Ball Ahead of them */}
        <motion.div
          animate={{
            rotate: [0, 360],
            y: [0, -2.5, 0],
          }}
          transition={{
            rotate: {
              duration: 0.65,
              repeat: Infinity,
              ease: "linear",
            },
            y: {
              duration: 0.32,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="w-3 h-3 rounded-full bg-gradient-to-tr from-[#EBDDA0] to-[#B8814F] border border-brown-900/20 shadow-2xs mb-0.5"
        />

        {/* Playful Floating Stardust Trail behind them */}
        <div className="flex items-center gap-1 mb-1 -ml-0.5">
          <motion.span
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 0.75, repeat: Infinity }}
            className="text-caramel text-[8px]"
          >
            ✦
          </motion.span>
          <motion.span
            animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.9, 1.3, 0.9] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: 0.15 }}
            className="text-sage text-[7px]"
          >
            ★
          </motion.span>
          <motion.span
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 0.85, repeat: Infinity, delay: 0.3 }}
            className="text-butter text-[8px]"
          >
            •
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
}
