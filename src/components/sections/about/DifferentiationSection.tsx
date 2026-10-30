"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Blocks, Sparkles, GraduationCap, Home } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { aboutData } from "@/data/about";
import { slowTransition } from "@/lib/motion";

const iconMap = {
  Blocks,
  Sparkles,
  GraduationCap,
  Home,
};

export default function DifferentiationSection() {
  const shouldReduceMotion = useReducedMotion();
  const { differentiation } = aboutData;

  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Photo */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Reveal variant="fade-up">
              <SectionLabel className="mb-3">
                {differentiation.eyebrow}
              </SectionLabel>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-brown-900 leading-[1.15] mb-8">
                {differentiation.heading}
              </h2>
            </Reveal>

            <motion.div
              initial={
                shouldReduceMotion
                  ? {}
                  : { clipPath: "inset(10% 0 10% 0 round 32px)", opacity: 0 }
              }
              whileInView={{ clipPath: "inset(0% 0 0% 0 round 32px)", opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={slowTransition}
              className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-soft-lg bg-butter/30 group"
            >
              <Image
                src={differentiation.image}
                alt="Children joyfully painting at Adam Kids"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </motion.div>
          </div>

          {/* Right Column: 2x2 White Cards with Soft Shadows */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentiation.cards.map((card, idx) => {
              const IconComp = iconMap[card.icon as keyof typeof iconMap] || Sparkles;

              return (
                <motion.div
                  key={card.title}
                  initial={
                    shouldReduceMotion
                      ? {}
                      : { opacity: 0, y: 30 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: 0.15 + idx * 0.1,
                    ...slowTransition,
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: -6,
                          boxShadow:
                            "0 20px 40px -10px rgba(78, 39, 23, 0.12), 0 6px 12px -2px rgba(78, 39, 23, 0.06)",
                        }
                  }
                  className="rounded-[28px] p-6 sm:p-7 bg-white border border-brown-900/10 shadow-soft transition-all duration-300 flex flex-col items-start group"
                >
                  {/* Caramel Circular Icon with hover scale & rotate */}
                  <div className="w-12 h-12 rounded-full bg-butter/50 border border-caramel/30 flex items-center justify-center text-brown-900 mb-5 group-hover:bg-caramel group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xs">
                    <IconComp className="w-6 h-6 text-caramel group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="font-heading font-bold text-xl text-brown-900 mb-2 group-hover:text-caramel transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-brown-900/75 font-body leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
