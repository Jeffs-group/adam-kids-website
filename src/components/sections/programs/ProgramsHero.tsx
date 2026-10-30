"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { MapPin } from "lucide-react";
import AnimatedHeadline from "@/components/ui/AnimatedHeadline";
import Button from "@/components/ui/Button";
import WaveDivider from "@/components/ui/WaveDivider";
import Reveal from "@/components/ui/Reveal";
import { programsData } from "@/data/programs";

export default function ProgramsHero() {
  const shouldReduceMotion = useReducedMotion();
  const { hero } = programsData;

  const scrollToPrograms = () => {
    const el = document.getElementById("programs");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-cream overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-sage/35 blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-butter/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Paragraph */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Reveal variant="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-butter/70 border border-caramel/25 text-brown-900 text-xs sm:text-sm font-semibold shadow-xs mb-6">
                <MapPin className="w-3.5 h-3.5 text-caramel flex-shrink-0" />
                <span>{hero.chip}</span>
              </div>
            </Reveal>

            <div className="mb-6">
              <AnimatedHeadline
                part1={hero.headlinePart1}
                highlight={hero.headlineHighlight}
                part2={hero.headlinePart2}
                as="h1"
                className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-brown-900 leading-[1.12] tracking-tight"
                highlightClassName="text-caramel"
              />
            </div>

            <Reveal variant="fade-up" delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-brown-900/80 max-w-xl font-body leading-relaxed mb-8">
                {hero.paragraph}
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.3}>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  href={hero.primaryCta.href}
                  variant="filled"
                  size="lg"
                  withArrow
                >
                  {hero.primaryCta.label}
                </Button>
                <button
                  type="button"
                  onClick={scrollToPrograms}
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 text-base font-semibold border-2 border-brown-900 text-brown-900 hover:bg-brown-900/5 transition-colors cursor-pointer"
                >
                  {hero.secondaryCta.label}
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Circular Illustration Frame with Sage/Blush circles */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">
              {/* Sage circle top-right */}
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-sage border-2 border-white/80 shadow-soft" />

              {/* Blush circle bottom-left */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-blush border-2 border-white/80 shadow-soft" />

              {/* Cream ring with butter inner circle */}
              <div className="w-full h-full rounded-full p-4 bg-cream border-4 border-butter shadow-soft-lg flex items-center justify-center">
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
                  className="relative w-full h-full rounded-full overflow-hidden bg-butter shadow-inner"
                >
                  <Image
                    src="/images/hero-kids.png"
                    alt="Children playing with Montessori blocks"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <WaveDivider fill="#FFF8E7" />
      </div>
    </section>
  );
}

