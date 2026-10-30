"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Blocks,
  Compass,
  Palette,
  ShieldCheck,
  Clock,
  Smile,
  Sparkles,
  Heart,
  BookOpen,
} from "lucide-react";
import SectionLabel from "./SectionLabel";
import WaveDivider from "./WaveDivider";
import Reveal from "./Reveal";
import { slowTransition, standardTransition } from "@/lib/motion";

export interface MontessoriCardItem {
  title: string;
  description: string;
  icon: string;
}

interface MontessoriWayProps {
  eyebrow?: string;
  heading: string;
  paragraph: string;
  cards: MontessoriCardItem[];
  withDividers?: boolean;
  className?: string;
}

const iconMap: Record<string, React.ElementType> = {
  Blocks,
  Compass,
  Palette,
  ShieldHeart: ShieldCheck,
  ShieldCheck,
  Clock,
  Smile,
  Sparkles,
  Heart,
  BookOpen,
};

export default function MontessoriWay({
  eyebrow = "THE MONTESSORI WAY",
  heading = "Follow the child.",
  paragraph = "Children possess an innate desire to understand their world. We prepare an environment where self-directed discovery, curiosity, and gentle guidance inspire natural confidence.",
  cards,
  withDividers = true,
  className = "",
}: MontessoriWayProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={`relative bg-brown-900 text-cream overflow-hidden ${className}`}>
      {/* Top Wave Divider */}
      {withDividers && (
        <div className="absolute top-0 left-0 right-0 z-10">
          <WaveDivider fill="#FFF8E7" position="top" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Reveal variant="fade-up">
              <SectionLabel light className="mb-3">
                {eyebrow}
              </SectionLabel>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-cream leading-[1.15] mb-6">
                {heading}
              </h2>
              <p className="text-base sm:text-lg text-cream/80 font-body leading-relaxed max-w-md">
                {paragraph}
              </p>
            </Reveal>
          </div>

          {/* Right Column: 2x2 Translucent Outlined Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, idx) => {
              const IconComp = iconMap[card.icon] || Sparkles;

              return (
                <motion.div
                  key={card.title}
                  initial={
                    shouldReduceMotion
                      ? {}
                      : { opacity: 0, y: 30 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    delay: 0.15 + idx * 0.12,
                    ...slowTransition,
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: -6,
                          borderColor: "rgba(184, 129, 79, 0.8)",
                          boxShadow: "0 10px 30px -10px rgba(184, 129, 79, 0.3)",
                        }
                  }
                  className="rounded-[28px] p-6 sm:p-7 bg-white/5 backdrop-blur-xs border border-white/10 transition-all duration-300 flex flex-col items-start group"
                >
                  {/* Caramel Circular Icon with subtle bounce/pulse */}
                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : { scale: 1.15, rotate: 6 }
                    }
                    transition={standardTransition}
                    className="w-12 h-12 rounded-full bg-caramel/20 border border-caramel/40 flex items-center justify-center text-caramel mb-5 group-hover:bg-caramel group-hover:text-white group-hover:shadow-[0_0_24px_rgba(184,129,79,0.5)] transition-all duration-300"
                  >
                    <IconComp className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </motion.div>

                  <h3 className="font-heading font-bold text-xl text-cream mb-2 group-hover:text-butter transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-cream/75 font-body leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      {withDividers && (
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <WaveDivider fill="#FFF8E7" position="bottom" />
        </div>
      )}
    </section>
  );
}

