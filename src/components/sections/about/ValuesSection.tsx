"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Compass, UserCheck, Palette, Heart } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { aboutData } from "@/data/about";
import { standardTransition, slowTransition } from "@/lib/motion";

const iconMap = {
  Compass,
  UserCheck,
  Palette,
  Heart,
};

export default function ValuesSection() {
  const shouldReduceMotion = useReducedMotion();
  const { values } = aboutData;

  const colorStyles = {
    sage: "bg-[#DCE8D4] border-[#c2d4b6]",
    sky: "bg-[#D9E6EE] border-[#bdd3e1]",
    butter: "bg-[#EBDDA0] border-[#d8c67c]",
    blush: "bg-[#E3B0A0] border-[#d49987]",
  };

  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <Reveal variant="fade-up">
          <SectionHeading
            label={values.eyebrow}
            title={values.heading}
            align="center"
            className="mb-16"
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {values.items.map((item, idx) => {
            const IconComp = iconMap[item.icon as keyof typeof iconMap] || Heart;

            return (
              <motion.div
                key={item.title}
                initial={
                  shouldReduceMotion
                    ? {}
                    : { opacity: 0, y: 30 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: 0.1 + idx * 0.1,
                  ...slowTransition,
                }}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -8,
                        boxShadow:
                          "0 20px 40px -12px rgba(78, 39, 23, 0.15), 0 6px 12px -3px rgba(78, 39, 23, 0.08)",
                      }
                }
                className={`rounded-[28px] p-7 sm:p-8 flex flex-col items-start shadow-soft border ${
                  colorStyles[item.color]
                } transition-all duration-300 group`}
              >
                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : { rotate: [0, -10, 10, -5, 0] }
                  }
                  transition={standardTransition}
                  className="w-13 h-13 rounded-2xl bg-white flex items-center justify-center text-brown-900 border border-brown-900/10 shadow-xs mb-6 group-hover:scale-105 transition-transform"
                >
                  <IconComp className="w-6 h-6 text-caramel" />
                </motion.div>

                <h3 className="font-heading font-bold text-2xl text-brown-900 mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-sm sm:text-base text-brown-900/80 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

