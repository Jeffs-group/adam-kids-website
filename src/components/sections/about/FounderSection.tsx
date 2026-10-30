"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Quote } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { aboutData } from "@/data/about";
import { slowTransition } from "@/lib/motion";

export default function FounderSection() {
  const shouldReduceMotion = useReducedMotion();
  const { founder } = aboutData;

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait with Blush Backing Shape (Photo first on mobile) */}
          <div className="lg:col-span-5 order-1 flex justify-center items-center">
            <div className="relative w-full max-w-[380px] aspect-[4/5]">
              {/* Blush backing shape rotated -4deg */}
              <div className="absolute inset-0 rounded-[36px] bg-blush transform -rotate-4 shadow-soft" />

              {/* Portrait frame with clip-path reveal */}
              <motion.div
                initial={
                  shouldReduceMotion
                    ? {}
                    : { clipPath: "inset(12% 0 12% 0 round 36px)", opacity: 0 }
                }
                whileInView={{ clipPath: "inset(0% 0 0% 0 round 36px)", opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={slowTransition}
                className="relative z-10 w-full h-full rounded-[36px] overflow-hidden shadow-soft-lg bg-butter/30"
              >
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>

              {/* Floating directress badge */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: [-4, 4, -4],
                      }
                }
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -right-2 sm:-right-4 z-20 px-4 py-2 rounded-full bg-cream border border-brown-900/10 shadow-soft text-xs font-heading font-bold text-brown-900 flex items-center gap-2 pointer-events-none"
              >
                <span className="w-2 h-2 rounded-full bg-caramel" />
                <span>Founder & Directress</span>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Copy & Quote */}
          <div className="lg:col-span-7 order-2 flex flex-col items-start">
            <Reveal variant="fade-up">
              <SectionLabel className="mb-3">{founder.eyebrow}</SectionLabel>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-brown-900 leading-[1.15] mb-2">
                {founder.name}
              </h2>
              <p className="text-caramel font-heading font-semibold text-base sm:text-lg mb-6">
                {founder.title}
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.15}>
              <p className="text-base sm:text-lg text-brown-900/80 font-body leading-relaxed mb-4">
                {founder.paragraph1}
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.25}>
              <p className="text-base sm:text-lg text-brown-900/80 font-body leading-relaxed mb-8">
                {founder.paragraph2}
              </p>
            </Reveal>

            {/* Butter Quote Card with quote icon */}
            <Reveal variant="fade-up" delay={0.35}>
              <div className="rounded-[24px] p-6 sm:p-7 bg-[#EBDDA0] border border-[#d8c67c] shadow-soft flex items-start gap-4">
                <Quote className="w-8 h-8 text-brown-900/40 flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <p className="font-heading font-bold text-base sm:text-lg text-brown-900 leading-snug mb-2">
                    &ldquo;{founder.quote}&rdquo;
                  </p>
                  <span className="font-body text-xs sm:text-sm font-semibold text-brown-900/70">
                    — {founder.name}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

