"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { aboutData } from "@/data/about";
import { slowTransition } from "@/lib/motion";

export default function StorySection() {
  const shouldReduceMotion = useReducedMotion();
  const { ourStory } = aboutData;

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 3 Paragraphs */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <Reveal variant="fade-up">
              <SectionLabel className="mb-3">{ourStory.eyebrow}</SectionLabel>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-brown-900 leading-[1.16] tracking-tight mb-6">
                {ourStory.heading}
              </h2>
            </Reveal>

            <Reveal variant="fade-up" delay={0.15}>
              <p className="text-base sm:text-lg text-brown-900/80 font-body leading-relaxed mb-4">
                {ourStory.paragraph1}
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.25}>
              <p className="text-base sm:text-lg text-brown-900/80 font-body leading-relaxed mb-4">
                {ourStory.paragraph2}
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.35}>
              <p className="text-base sm:text-lg text-brown-900/80 font-body leading-relaxed">
                {ourStory.paragraph3}
              </p>
            </Reveal>
          </div>

          {/* Right Column: Large 32px Photo */}
          <div className="lg:col-span-6">
            <motion.div
              initial={
                shouldReduceMotion
                  ? {}
                  : { clipPath: "inset(10% 0 10% 0 round 32px)", opacity: 0 }
              }
              whileInView={{ clipPath: "inset(0% 0 0% 0 round 32px)", opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={slowTransition}
              className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-soft-lg bg-sky/30 group"
            >
              <Image
                src={ourStory.image}
                alt="Teacher interacting with children at Montessori shelf"
                fill
                sizes="(max-width: 1024px) 100vw, 580px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Story badge */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: [-5, 5, -5],
                      }
                }
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="absolute bottom-5 left-5 z-10 px-4 py-2 rounded-full bg-white/95 backdrop-blur-xs border border-brown-900/10 shadow-soft text-xs font-bold text-brown-900 flex items-center gap-2 pointer-events-none"
              >
                <span className="w-2 h-2 rounded-full bg-caramel" />
                <span>Founded with Love & Purpose</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

