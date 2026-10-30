"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { MapPin } from "lucide-react";
import AnimatedHeadline from "@/components/ui/AnimatedHeadline";
import Button from "@/components/ui/Button";
import WaveDivider from "@/components/ui/WaveDivider";
import Reveal from "@/components/ui/Reveal";
import KidsFloatingElements from "@/components/ui/KidsFloatingElements";
import { homeContent } from "@/data/content";

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { hero } = homeContent;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) / 30;
    const y = (clientY - (top + height / 2)) / 30;
    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-cream overflow-hidden"
    >
      {/* Drifting blurred soft pastel blobs */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10">
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-sage/40 blur-3xl"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, -35, 0],
                  y: [0, 25, 0],
                }
          }
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-28 w-[420px] h-[420px] rounded-full bg-blush/35 blur-3xl"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 20, 0],
                  y: [0, 20, 0],
                }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-16 left-1/3 w-80 h-80 rounded-full bg-butter/45 blur-3xl"
        />
      </div>

      {/* Playful Floating Kids Doodles & Elements */}
      <KidsFloatingElements variant="hero" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Location Chip */}
            <Reveal variant="fade-up" delay={0.05}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-butter/70 border border-caramel/25 text-brown-900 text-xs sm:text-sm font-semibold shadow-xs mb-6">
                <MapPin className="w-3.5 h-3.5 text-caramel flex-shrink-0" />
                <span>{hero.chip}</span>
              </div>
            </Reveal>

            {/* H1 with masked reveal */}
            <div className="mb-6">
              <AnimatedHeadline
                part1={hero.headlinePart1}
                highlight={hero.headlineHighlight}
                part2={hero.headlinePart2}
                as="h1"
                className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl xl:text-[4rem] text-brown-900 leading-[1.1] tracking-tight"
                highlightClassName="text-caramel"
              />
            </div>

            {/* Paragraph */}
            <Reveal variant="fade-up" delay={0.25}>
              <p className="text-base sm:text-lg md:text-xl text-brown-900/80 max-w-xl font-body leading-relaxed mb-8">
                {hero.paragraph}
              </p>
            </Reveal>

            {/* Action Buttons */}
            <Reveal variant="fade-up" delay={0.35}>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  href={hero.primaryCta.href}
                  variant="filled"
                  size="lg"
                  withArrow
                >
                  {hero.primaryCta.label}
                </Button>
                <Button
                  href={hero.secondaryCta.href}
                  variant="outline"
                  size="lg"
                >
                  {hero.secondaryCta.label}
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Kids with Wooden Blocks & Pink Tower in Butter Blob */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              initial={shouldReduceMotion ? {} : { scale: 0.8, opacity: 0 }}
              animate={shouldReduceMotion ? {} : { scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 85,
                damping: 18,
                delay: 0.2,
              }}
              style={
                shouldReduceMotion
                  ? {}
                  : {
                      x: mousePos.x,
                      y: mousePos.y,
                    }
              }
              className="relative w-full max-w-[440px] aspect-square flex items-center justify-center"
            >
              {/* Organic Butter Blob */}
              <div className="absolute inset-2 bg-butter rounded-[48%_52%_68%_32%_/_42%_44%_56%_58%] shadow-soft-xl transform -rotate-3 transition-transform" />

              {/* Decorative pastel accents around blob */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-sage border-2 border-white/70 shadow-xs" />
              <div className="absolute -bottom-5 -left-5 w-14 h-14 rounded-full bg-blush border-2 border-white/70 shadow-xs" />

              {/* Gently floating illustration (6s cycle) */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: [-10, 10, -10],
                      }
                }
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="relative z-10 w-[86%] h-[86%] rounded-[36px] overflow-hidden"
              >
                <Image
                  src="/images/hero-kids.png"
                  alt={hero.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 440px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>

              {/* Playful Floating Badge 1: Top-Left */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: [-6, 6, -6],
                        rotate: [-2, 2, -2],
                      }
                }
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="absolute -top-3 -left-2 sm:-left-6 z-20 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-brown-900/10 shadow-soft text-xs font-bold text-brown-900 flex items-center gap-2 pointer-events-none"
              >
                <span className="w-2 h-2 rounded-full bg-caramel animate-ping" />
                <span>Authentic Montessori</span>
              </motion.div>

              {/* Playful Floating Badge 2: Bottom-Right */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: [6, -6, 6],
                        rotate: [2, -2, 2],
                      }
                }
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-4 -right-2 sm:-right-4 z-20 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-xs border border-brown-900/10 shadow-soft text-left flex items-center gap-2.5 pointer-events-none"
              >
                <div className="w-7 h-7 rounded-full bg-butter flex items-center justify-center text-brown-900 text-xs shadow-xs">
                  ✨
                </div>
                <div>
                  <span className="block text-[10px] font-semibold text-brown-900/60 uppercase tracking-wider">
                    Ages 1.5 – 6 yrs
                  </span>
                  <span className="text-xs font-bold text-brown-900">
                    Child-Led Discovery
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Curved wave divider into About section */}
      <div className="absolute bottom-0 left-0 right-0">
        <WaveDivider fill="#FFF8E7" />
      </div>
    </section>
  );
}

