"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { programsData, type ProgramItem } from "@/data/programs";
import { slowTransition } from "@/lib/motion";

export default function ProgramsGrid() {
  const shouldReduceMotion = useReducedMotion();
  const { programsList } = programsData;

  const row1 = programsList.slice(0, 3); // Day Care, Pre-School, Nursery
  const row2 = programsList.slice(3, 5); // LKG, UKG

  const colorStyles = {
    blush: "bg-[#E3B0A0] border-[#d49987]",
    sage: "bg-[#DCE8D4] border-[#c2d4b6]",
    sky: "bg-[#D9E6EE] border-[#bdd3e1]",
    butter: "bg-[#EBDDA0] border-[#d8c67c]",
    white: "bg-white border-2 border-brown-900/15",
  };

  const renderCard = (card: ProgramItem, idx: number, isWider = false) => {
    return (
      <motion.div
        key={card.id}
        id={`program-${card.id}`}
        initial={
          shouldReduceMotion
            ? {}
            : {
                opacity: 0,
                y: 35,
                rotate: idx % 2 === 0 ? -1.5 : 1.5,
              }
        }
        whileInView={{
          opacity: 1,
          y: 0,
          rotate: 0,
        }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          delay: 0.1 + (idx % 3) * 0.1,
          ...slowTransition,
        }}
        whileHover={
          shouldReduceMotion
            ? {}
            : {
                y: -8,
                boxShadow:
                  "0 24px 48px -12px rgba(78, 39, 23, 0.16), 0 8px 16px -4px rgba(78, 39, 23, 0.08)",
              }
        }
        className={`rounded-[32px] p-7 sm:p-9 shadow-soft border ${
          colorStyles[card.color]
        } relative overflow-hidden flex flex-col justify-between transition-all duration-300 group ${
          isWider ? "lg:col-span-1" : ""
        }`}
      >
        {/* Top-Right Big Faded Number */}
        <span className="absolute top-4 right-6 font-heading font-bold text-7xl text-brown-900/12 pointer-events-none select-none">
          {card.number}
        </span>

        {/* Top Header: Circular Illustration + Title & Age Pill */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : { y: [-4, 4, -4] }
              }
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
              className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white/80 shadow-soft flex-shrink-0 bg-white"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="80px"
                className="object-cover"
              />
            </motion.div>

            <div className="flex flex-col">
              <span className="inline-block px-3 py-1 rounded-full bg-white/70 border border-brown-900/10 font-body text-xs font-bold text-brown-900 mb-1.5 w-fit">
                {card.age}
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-brown-900 leading-tight">
                {card.title}
              </h3>
            </div>
          </div>

          {/* Bold Tagline & Description */}
          <h4 className="font-heading font-bold text-base sm:text-lg text-brown-900/90 mb-3">
            {card.tagline}
          </h4>
          <p className="font-body text-sm sm:text-base text-brown-900/80 leading-relaxed mb-6">
            {card.description}
          </p>

          {/* 5 Bullets with checkmarks */}
          <ul className="space-y-2.5 mb-8">
            {card.bullets.map((bullet, bIdx) => (
              <li
                key={bIdx}
                className="flex items-center gap-2.5 font-body text-xs sm:text-sm text-brown-900/85 font-semibold"
              >
                <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-caramel flex-shrink-0 shadow-xs border border-brown-900/10">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Dark-brown Pill Button */}
        <div className="pt-4 border-t border-brown-900/10">
          <Link
            href={`/contact?program=${encodeURIComponent(card.title)}`}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brown-900 hover:bg-brown-700 text-white font-body font-bold text-sm shadow-soft hover:shadow-soft-lg transition-all group-hover:scale-[1.02]"
          >
            <span>Enquire for Admission</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="programs" className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <Reveal variant="fade-up">
          <SectionHeading
            label="OUR PROGRAMS"
            title="Five Warm Worlds to Grow In"
            subtitle="Explore each stage of the Adam Kids Montessori journey from gentle toddlerhood to school readiness."
            align="center"
            className="mb-16 md:mb-20"
          />
        </Reveal>

        {/* Row 1: 3 cards (Day Care, Pre-School, Nursery) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mb-8">
          {row1.map((card, idx) => renderCard(card, idx))}
        </div>

        {/* Row 2: 2 wider cards (LKG, UKG) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 max-w-5xl mx-auto">
          {row2.map((card, idx) => renderCard(card, idx + 3, true))}
        </div>
      </div>
    </section>
  );
}
