"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { HeartHandshake, Smile, LayoutGrid, Users, Sparkles } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { aboutData } from "@/data/about";
import { slowTransition } from "@/lib/motion";

const iconMap = {
  HeartHandshake,
  Smile,
  LayoutGrid,
  Users,
};

export default function CultureSection() {
  const shouldReduceMotion = useReducedMotion();
  const { culture } = aboutData;

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Photo Collage */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Top Wide Photo */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? {}
                  : { clipPath: "inset(10% 0 10% 0 round 28px)", opacity: 0 }
              }
              whileInView={{ clipPath: "inset(0% 0 0% 0 round 28px)", opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={slowTransition}
              className="relative w-full h-[240px] sm:h-[280px] rounded-[28px] overflow-hidden shadow-soft bg-butter/30 group"
            >
              <Image
                src="/images/culture-1.jpg"
                alt="Montessori classroom communal activities"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </motion.div>

            {/* Bottom 2 Split Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Painting Photo */}
              <motion.div
                initial={
                  shouldReduceMotion
                    ? {}
                    : { clipPath: "inset(10% 0 10% 0 round 28px)", opacity: 0 }
                }
                whileInView={{ clipPath: "inset(0% 0 0% 0 round 28px)", opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.15, ...slowTransition }}
                className="relative w-full h-[200px] rounded-[28px] overflow-hidden shadow-soft bg-sky/30 group"
              >
                <Image
                  src="/images/culture-2.jpg"
                  alt="Child working with painting colors"
                  fill
                  sizes="(max-width: 640px) 100vw, 280px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </motion.div>

              {/* Sage Tile with Illustration/Text */}
              <motion.div
                initial={
                  shouldReduceMotion
                    ? {}
                    : { opacity: 0, scale: 0.95 }
                }
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.25, ...slowTransition }}
                className="relative w-full h-[200px] rounded-[28px] p-6 bg-[#DCE8D4] border border-[#c2d4b6] shadow-soft flex flex-col justify-between overflow-hidden"
              >
                <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-caramel shadow-xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-brown-900 mb-1">
                    Warm Community
                  </h4>
                  <p className="font-body text-xs text-brown-900/75 leading-relaxed">
                    Kindness, collaboration, and respect for every small step.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Culture Details & 2x2 Feature Grid */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <Reveal variant="fade-up">
              <SectionLabel className="mb-3">{culture.eyebrow}</SectionLabel>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-brown-900 leading-[1.15] mb-6">
                {culture.heading}
              </h2>
            </Reveal>

            <Reveal variant="fade-up" delay={0.15}>
              <p className="text-base sm:text-lg text-brown-900/80 font-body leading-relaxed mb-4">
                {culture.paragraph1}
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.25}>
              <p className="text-base sm:text-lg text-brown-900/80 font-body leading-relaxed mb-8">
                {culture.paragraph2}
              </p>
            </Reveal>

            {/* 2x2 Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              {culture.features.map((feat, idx) => {
                const IconComp = iconMap[feat.icon as keyof typeof iconMap] || Smile;

                return (
                  <Reveal key={feat.title} variant="fade-up" delay={0.3 + idx * 0.08}>
                    <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-cream/70 border border-brown-900/5">
                      <div className="w-10 h-10 rounded-xl bg-butter flex items-center justify-center flex-shrink-0 text-caramel border border-brown-900/10 shadow-xs">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-base text-brown-900 mb-1">
                          {feat.title}
                        </h4>
                        <p className="font-body text-xs text-brown-900/70 leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

