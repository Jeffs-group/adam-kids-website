"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { homeContent } from "@/data/content";
import { slowTransition } from "@/lib/motion";

export default function GalleryPreviewSection() {
  const shouldReduceMotion = useReducedMotion();
  const { galleryPreview } = homeContent;

  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <Reveal variant="fade-up">
            <SectionHeading
              label={galleryPreview.eyebrow}
              title={galleryPreview.heading}
              subtitle={galleryPreview.subtitle}
              align="left"
            />
          </Reveal>

          <Reveal variant="fade-up" delay={0.2}>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-brown-900/15 text-brown-900 font-heading font-bold text-sm shadow-soft hover:shadow-soft-lg hover:border-caramel transition-all group"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-caramel" />
            </Link>
          </Reveal>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Left: Large Tall Photo */}
          <div className="md:col-span-7">
            <motion.div
              initial={
                shouldReduceMotion
                  ? {}
                  : { clipPath: "inset(10% 0 10% 0 round 28px)", opacity: 0 }
              }
              whileInView={{ clipPath: "inset(0% 0 0% 0 round 28px)", opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={slowTransition}
              className="relative w-full h-[380px] sm:h-[480px] md:h-[540px] rounded-[28px] overflow-hidden shadow-soft-lg group bg-sage/30"
            >
              <Image
                src="/images/gallery-1.jpg"
                alt="Young child focusing intently with the Montessori Pink Tower"
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 sm:p-8">
                <span className="text-white font-heading font-bold text-lg">
                  Montessori Sensorial Concentration
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: Two Stacked Bento Items */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Painting Activity Photo */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? {}
                  : { clipPath: "inset(10% 0 10% 0 round 28px)", opacity: 0 }
              }
              whileInView={{ clipPath: "inset(0% 0 0% 0 round 28px)", opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.15, ...slowTransition }}
              className="relative w-full h-[220px] sm:h-[254px] rounded-[28px] overflow-hidden shadow-soft group bg-blush/20"
            >
              <Image
                src="/images/gallery-2.jpg"
                alt="Creative painting and color experimentation atelier"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-heading font-bold text-base">
                  Joyful Art & Color Expression
                </span>
              </div>
            </motion.div>

            {/* Blocks Illustration on Sage Tile */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? {}
                  : { opacity: 0, scale: 0.95 }
              }
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.25, ...slowTransition }}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : { y: -4 }
              }
              className="relative w-full h-[220px] sm:h-[254px] rounded-[28px] p-6 sm:p-8 bg-[#DCE8D4] border border-[#c5d8ba] shadow-soft flex flex-col justify-between overflow-hidden group select-none"
            >
              {/* Subtle background floating circle */}
              <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-white/30 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-caramel shadow-xs mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-brown-900 mb-2">
                  Every Day a Discovery
                </h3>
                <p className="font-body text-xs sm:text-sm text-brown-900/75 max-w-xs leading-relaxed">
                  From mathematical beads to botanic puzzles, learning is a hands-on adventure.
                </p>
              </div>

              <div className="relative z-10 pt-2">
                <Link
                  href="/approach"
                  className="inline-flex items-center gap-1.5 font-heading font-bold text-xs uppercase tracking-wider text-brown-900 group-hover:text-caramel transition-colors"
                >
                  <span>Explore Our Philosophy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
