"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { MapPin, Sparkles } from "lucide-react";
import AnimatedHeadline from "./AnimatedHeadline";
import Button from "./Button";
import WaveDivider from "./WaveDivider";
import Reveal from "./Reveal";
import KidsFloatingElements from "./KidsFloatingElements";

interface PageHeroProps {
  chipText: string;
  chipIcon?: "map" | "sparkles";
  headlinePart1: string;
  headlineHighlight: string;
  headlinePart2?: string;
  paragraph: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  imageSrc?: string;
  imageAlt?: string;
  withWaveBottom?: boolean;
  waveFill?: string;
  compactImage?: boolean;
}

export default function PageHero({
  chipText,
  chipIcon = "map",
  headlinePart1,
  headlineHighlight,
  headlinePart2 = "",
  paragraph,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt = "Montessori classroom learners",
  withWaveBottom = true,
  waveFill = "#FFF8E7",
  compactImage = false,
}: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) / 35;
    const y = (clientY - (top + height / 2)) / 35;
    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-cream"
    >
      {/* Background drifting soft pastel blurred blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10">
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 20, 0],
                  y: [0, -15, 0],
                }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-sage/40 blur-3xl"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, -25, 0],
                  y: [0, 20, 0],
                }
          }
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-blush/30 blur-3xl"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 15, 0],
                  y: [0, 15, 0],
                }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 left-1/4 w-80 h-80 rounded-full bg-butter/40 blur-3xl"
        />
      </div>

      {/* Playful Floating Kids Elements */}
      <KidsFloatingElements variant="colorful" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Location or Category Chip */}
            <Reveal variant="fade-up" delay={0.05}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-butter/60 border border-caramel/20 text-brown-900 text-xs sm:text-sm font-semibold shadow-xs mb-6">
                {chipIcon === "map" ? (
                  <MapPin className="w-3.5 h-3.5 text-caramel" />
                ) : (
                  <Sparkles className="w-3.5 h-3.5 text-caramel" />
                )}
                <span>{chipText}</span>
              </div>
            </Reveal>

            {/* H1 with masked word rise animation */}
            <div className="mb-6">
              <AnimatedHeadline
                part1={headlinePart1}
                highlight={headlineHighlight}
                part2={headlinePart2}
                as="h1"
                className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-brown-900 leading-[1.12] tracking-tight"
                highlightClassName="text-caramel"
              />
            </div>

            {/* Paragraph */}
            <Reveal variant="fade-up" delay={0.25}>
              <p className="text-base sm:text-lg md:text-xl text-brown-900/85 max-w-xl font-body leading-relaxed mb-8">
                {paragraph}
              </p>
            </Reveal>

            {/* CTA Buttons */}
            {(primaryCta || secondaryCta) && (
              <Reveal variant="fade-up" delay={0.35}>
                <div className="flex flex-wrap items-center gap-4">
                  {primaryCta && (
                    <Button
                      href={primaryCta.href}
                      variant="filled"
                      size="lg"
                      withArrow
                    >
                      {primaryCta.label}
                    </Button>
                  )}
                  {secondaryCta && (
                    <Button
                      href={secondaryCta.href}
                      variant="outline"
                      size="lg"
                    >
                      {secondaryCta.label}
                    </Button>
                  )}
                </div>
              </Reveal>
            )}
          </div>

          {/* Right Column: Illustration in organic Butter Blob */}
          {imageSrc && (
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <motion.div
                initial={shouldReduceMotion ? {} : { scale: 0.85, opacity: 0 }}
                animate={shouldReduceMotion ? {} : { scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 90,
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
                className="relative w-full max-w-[420px] aspect-square flex items-center justify-center"
              >
                {/* Organic Butter Blob background */}
                <div className="absolute inset-2 bg-butter rounded-[48%_52%_68%_32%_/_42%_44%_56%_58%] shadow-soft-lg transform -rotate-2" />

                {/* Floating playful circles around blob */}
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-sage border-2 border-white/60 shadow-xs" />
                <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-blush border-2 border-white/60 shadow-xs" />

                {/* Main illustration with gentle 6s floating cycle */}
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: [-8, 8, -8],
                        }
                  }
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                  }}
                  className={`relative z-10 w-[84%] h-[84%] rounded-[36px] overflow-hidden ${
                    compactImage ? "max-h-[300px]" : ""
                  }`}
                >
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </motion.div>

                {/* Playful Floating Badge: Top-Left */}
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: [-6, 6, -6],
                          rotate: [-3, 3, -3],
                        }
                  }
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-3 -left-3 sm:-left-6 z-20 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-xs border border-brown-900/10 shadow-soft text-xs font-bold text-brown-900 flex items-center gap-1.5 pointer-events-none"
                >
                  <span className="text-caramel">⭐</span>
                  <span>Montessori Wonder</span>
                </motion.div>

                {/* Playful Floating Badge: Bottom-Right */}
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: [6, -6, 6],
                          rotate: [3, -3, 3],
                        }
                  }
                  transition={{
                    repeat: Infinity,
                    duration: 5.5,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -bottom-4 -right-2 sm:-right-4 z-20 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-xs border border-brown-900/10 shadow-soft text-xs font-bold text-brown-900 flex items-center gap-2 pointer-events-none"
                >
                  <div className="w-6 h-6 rounded-full bg-butter flex items-center justify-center text-xs shadow-2xs">
                    🎨
                  </div>
                  <span>Joyful Learning</span>
                </motion.div>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Wave Divider into next section */}
      {withWaveBottom && (
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider fill={waveFill} />
        </div>
      )}
    </section>
  );
}

