"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { MessageSquareHeart } from "lucide-react";
import AnimatedHeadline from "@/components/ui/AnimatedHeadline";
import WaveDivider from "@/components/ui/WaveDivider";
import Reveal from "@/components/ui/Reveal";

export default function ContactHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-cream overflow-hidden">
      {/* Drifting blurred soft blobs */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-sage/40 blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-blush/35 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <Reveal variant="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-butter/70 border border-caramel/25 text-brown-900 text-xs sm:text-sm font-semibold shadow-xs mb-6">
                <MessageSquareHeart className="w-3.5 h-3.5 text-caramel flex-shrink-0" />
                <span>We&apos;d love to hear from you</span>
              </div>
            </Reveal>

            <div className="mb-6">
              <AnimatedHeadline
                part1="Let's Talk About Your"
                highlight="Little One"
                as="h1"
                className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-brown-900 leading-[1.12] tracking-tight"
                highlightClassName="text-caramel"
              />
            </div>

            <Reveal variant="fade-up" delay={0.2}>
              <p className="text-base sm:text-lg md:text-xl text-brown-900/80 max-w-xl font-body leading-relaxed">
                Whether you have questions about our Montessori philosophy, wish to schedule a walkthrough, or want to register your child for the upcoming academic year, we are here for you.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-44 h-44 sm:w-64 sm:h-64 lg:w-72 lg:h-72 aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-butter rounded-[48%_52%_68%_32%_/_42%_44%_56%_58%] shadow-soft transform -rotate-3" />
              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : { y: [-6, 6, -6] }
                }
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="relative z-10 w-[82%] h-[82%] rounded-[30px] overflow-hidden"
              >
                <Image
                  src="/images/hero-kids.png"
                  alt="Children smiling at Adam Kids"
                  fill
                  priority
                  sizes="(max-width: 768px) 176px, 288px"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <WaveDivider fill="#FFFBF0" />
      </div>
    </section>
  );
}

