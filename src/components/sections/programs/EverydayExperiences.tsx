"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Compass, Palette, Sparkles, HeartHandshake } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import KidsFloatingElements from "@/components/ui/KidsFloatingElements";
import { programsData } from "@/data/programs";
import { slowTransition } from "@/lib/motion";

const iconMap = {
  Compass,
  Palette,
  Sparkles,
  HeartHandshake,
};

export default function EverydayExperiences() {
  const shouldReduceMotion = useReducedMotion();
  const { everydayExperiences } = programsData;

  return (
    <section className="relative py-20 md:py-32 bg-[#FFFDF5] overflow-hidden">
      <KidsFloatingElements variant="subtle" />
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 relative z-10">
        <Reveal variant="fade-up">
          <SectionHeading
            label={everydayExperiences.eyebrow}
            title={everydayExperiences.heading}
            subtitle={everydayExperiences.subtitle}
            align="center"
            className="mb-16 md:mb-20"
          />
        </Reveal>

        <div className="space-y-8 max-w-5xl mx-auto">
          {everydayExperiences.items.map((item, idx) => {
            const IconComp = iconMap[item.icon as keyof typeof iconMap] || Sparkles;
            const isReversed = idx % 2 === 1;

            return (
              <motion.div
                key={item.title}
                initial={
                  shouldReduceMotion
                    ? {}
                    : { opacity: 0, y: 30 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: 0.1 + idx * 0.1,
                  ...slowTransition,
                }}
                className="rounded-[32px] p-6 sm:p-10 bg-white border border-brown-900/10 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${
                    isReversed ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Illustration Column */}
                  <div
                    className={`md:col-span-5 flex justify-center ${
                      isReversed ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-2.5 bg-cream border-2 border-brown-900/10 shadow-soft group">
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-butter">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="208px"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div
                    className={`md:col-span-7 flex flex-col items-start ${
                      isReversed ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-butter/60 border border-caramel/25 text-brown-900 text-xs font-bold mb-3 shadow-xs">
                      <IconComp className="w-3.5 h-3.5 text-caramel" />
                      <span>{item.subtitle}</span>
                    </div>

                    <h3 className="font-heading font-bold text-2xl sm:text-3xl text-brown-900 mb-3">
                      {item.title}
                    </h3>

                    <p className="font-body text-base sm:text-lg text-brown-900/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
