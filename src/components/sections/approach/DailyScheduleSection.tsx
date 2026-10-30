"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Sun, Blocks, Utensils, Compass, BookOpen, Heart } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { approachData } from "@/data/faq";
import { slowTransition } from "@/lib/motion";

const iconMap = {
  Sun,
  Blocks,
  Utensils,
  Compass,
  BookOpen,
  Heart,
};

export default function DailyScheduleSection() {
  const shouldReduceMotion = useReducedMotion();
  const { dailySchedule } = approachData;

  return (
    <section className="py-20 md:py-32 bg-[#FFFDF5]">
      <div className="max-w-5xl mx-auto px-5 md:px-8 lg:px-10">
        <Reveal variant="fade-up">
          <SectionHeading
            label="A DAY AT ADAM KIDS"
            title="The Daily Rhythm of Discovery"
            subtitle="A thoughtfully balanced flow of concentration, joyful socialization, healthy nourishment, and creative play."
            align="center"
            className="mb-16 md:mb-20"
          />
        </Reveal>

        {/* Vertical Animated Timeline */}
        <div className="relative pl-6 sm:pl-10">
          {/* Caramel vertical connecting line */}
          <div className="absolute top-6 bottom-6 left-2.5 sm:left-4 w-1 bg-caramel/25 rounded-full overflow-hidden">
            <motion.div
              initial={shouldReduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full bg-caramel origin-top"
            />
          </div>

          <div className="space-y-10 sm:space-y-12">
            {dailySchedule.map((item, idx) => {
              const IconComp = iconMap[item.icon as keyof typeof iconMap] || Sun;

              return (
                <motion.div
                  key={item.title}
                  initial={
                    shouldReduceMotion
                      ? {}
                      : { opacity: 0, x: 25 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: idx * 0.1,
                    ...slowTransition,
                  }}
                  className="relative flex items-start gap-4 sm:gap-6 group"
                >
                  {/* Timeline Node Dot on line */}
                  <div className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-cream border-4 border-brown-900 shadow-xs flex-shrink-0 group-hover:scale-125 transition-transform" />

                  {/* Content Card with hover elevation */}
                  <div className="w-full rounded-[28px] p-6 sm:p-8 bg-white border border-brown-900/10 shadow-soft hover:shadow-soft-lg group-hover:border-caramel/40 group-hover:-translate-y-1 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-butter/60 border border-caramel/25 font-heading font-bold text-xs text-brown-900">
                        <IconComp className="w-3.5 h-3.5 text-caramel" />
                        <span>{item.time}</span>
                      </span>
                      <span className="font-heading font-bold text-xs text-caramel tracking-wider uppercase">
                        Part 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-brown-900 mb-2">
                      {item.title}
                    </h3>

                    <p className="font-body text-sm sm:text-base text-brown-900/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

