"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import KidsFloatingElements from "@/components/ui/KidsFloatingElements";
import { homeContent } from "@/data/content";
import { standardTransition, slowTransition } from "@/lib/motion";

export default function ProgramsPreviewSection() {
  const shouldReduceMotion = useReducedMotion();
  const { programsPreview } = homeContent;

  const colorStyles = {
    sage: "bg-[#DCE8D4] border-[#c2d4b6]",
    sky: "bg-[#D9E6EE] border-[#bdd3e1]",
    butter: "bg-[#EBDDA0] border-[#d8c67c]",
    blush: "bg-[#E3B0A0] border-[#d49987]",
  };

  return (
    <section className="relative py-20 md:py-32 bg-cream overflow-hidden">
      <KidsFloatingElements variant="colorful" />
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 relative z-10">
        {/* Header */}
        <Reveal variant="fade-up">
          <SectionHeading
            label={programsPreview.eyebrow}
            title={programsPreview.heading}
            subtitle={programsPreview.subtitle}
            align="center"
            className="mb-16 md:mb-20"
          />
        </Reveal>

        {/* 4 Pastel Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 items-start">
          {programsPreview.cards.map((card, idx) => {
            const isOffset = idx % 2 === 1;

            return (
              <motion.div
                key={card.number}
                initial={
                  shouldReduceMotion
                    ? {}
                    : {
                        opacity: 0,
                        y: 40,
                        rotate: idx % 2 === 0 ? -2 : 2,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: 0.1 + idx * 0.12,
                  ...slowTransition,
                }}
                className={`relative ${isOffset ? "lg:translate-y-8" : ""}`}
              >
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: -8,
                          boxShadow:
                            "0 24px 48px -12px rgba(78, 39, 23, 0.15), 0 8px 16px -4px rgba(78, 39, 23, 0.08)",
                        }
                  }
                  transition={standardTransition}
                  className={`rounded-[28px] p-7 sm:p-8 flex flex-col justify-between min-h-[320px] shadow-soft border ${
                    colorStyles[card.color]
                  } relative overflow-hidden group`}
                >
                  {/* Big faded number top-right with hover dynamics */}
                  <span className="absolute top-3 right-5 font-heading font-bold text-6xl text-brown-900/12 pointer-events-none select-none transition-all duration-300 group-hover:text-brown-900/25 group-hover:scale-110">
                    {card.number}
                  </span>

                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-white/60 font-body text-xs font-bold text-brown-900 mb-4 border border-brown-900/10">
                      Stage {card.number}
                    </span>
                    <h3 className="font-heading font-bold text-2xl text-brown-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-brown-900/80 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Enquire Arrow Link */}
                  <div className="pt-6 mt-6 border-t border-brown-900/10">
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-2 font-heading font-bold text-sm text-brown-900 group-hover:text-caramel transition-colors"
                    >
                      <span>Enquire</span>
                      <motion.span
                        className="inline-block"
                        whileHover={{ x: 4 }}
                        transition={standardTransition}
                      >
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </motion.span>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

