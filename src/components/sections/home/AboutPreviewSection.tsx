"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import KidsFloatingElements from "@/components/ui/KidsFloatingElements";
import { homeContent } from "@/data/content";

export default function AboutPreviewSection() {
  const shouldReduceMotion = useReducedMotion();
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const { aboutPreview } = homeContent;

  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section className="relative py-20 md:py-28 bg-cream overflow-hidden">
      <KidsFloatingElements variant="subtle" />
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Rounded Photo with Clip-Path Reveal + Wiggling Badge */}
          <div className="lg:col-span-6 relative" ref={imageContainerRef}>
            <motion.div
              initial={
                shouldReduceMotion
                  ? {}
                  : { clipPath: "inset(12% 12% 12% 12% round 32px)", opacity: 0 }
              }
              whileInView={{ clipPath: "inset(0% 0% 0% 0% round 32px)", opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-soft-lg bg-sage/20"
            >
              <motion.div
                style={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: imageY,
                        scale: imageScale,
                      }
                }
                className="relative w-full h-full"
              >
                <Image
                  src="/images/about.png"
                  alt="Teacher guiding toddlers with wooden Montessori materials in a sunlit classroom"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Floating sage pill badge "Nothing, but first." overlapping bottom right */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? {}
                  : { scale: 0, opacity: 0, rotate: -10 }
              }
              whileInView={{ scale: 1, opacity: 1, rotate: 2 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
                delay: 0.35,
              }}
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, -6, 0],
                      rotate: [1, 3, 1],
                      transition: {
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }
              }
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: 1.05,
                      rotate: [-2, 4, -2],
                      transition: { repeat: Infinity, duration: 1.5 },
                    }
              }
              className="absolute -bottom-6 -right-2 sm:right-6 px-6 py-3 rounded-full bg-sage text-brown-900 border-2 border-brown-900/15 shadow-soft font-heading font-bold text-sm sm:text-base tracking-wide z-10 select-none cursor-default transition-transform"
            >
              {aboutPreview.badge}
            </motion.div>
          </div>

          {/* Right Column: Copy and Story */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <Reveal variant="fade-up" delay={0.1}>
              <SectionLabel className="mb-3">
                {aboutPreview.eyebrow}
              </SectionLabel>
            </Reveal>

            <Reveal variant="fade-up" delay={0.2}>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-brown-900 leading-[1.16] tracking-tight mb-6">
                {aboutPreview.heading}
              </h2>
            </Reveal>

            <Reveal variant="fade-up" delay={0.3}>
              <p className="text-base sm:text-lg text-brown-900/80 font-body leading-relaxed mb-4">
                {aboutPreview.paragraph1}
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.4}>
              <p className="text-base sm:text-lg text-brown-900/80 font-body leading-relaxed mb-8">
                {aboutPreview.paragraph2}
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.5}>
              <Button href={aboutPreview.cta.href} variant="outline" size="md" withArrow>
                {aboutPreview.cta.label}
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
