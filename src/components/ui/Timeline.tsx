"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { standardTransition, slowTransition } from "@/lib/motion";

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function Timeline({ items, className = "" }: TimelineProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative ${className}`}>
      {/* Desktop Horizontal Timeline (md+) */}
      <div className="hidden md:block">
        <div className="relative pt-6 pb-4">
          {/* Caramel Connecting Line */}
          <div className="absolute top-[42px] left-12 right-12 h-1 bg-caramel/20 overflow-hidden">
            <motion.div
              initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full bg-caramel origin-left"
            />
          </div>

          {/* Grid of Nodes */}
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {items.map((item, index) => (
              <motion.div
                key={item.year}
                initial={
                  shouldReduceMotion
                    ? {}
                    : { opacity: 0, y: 20, scale: 0.9 }
                }
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: 0.2 + index * 0.15,
                  ...standardTransition,
                }}
                className="flex flex-col items-center text-center"
              >
                {/* Brown Pill Node */}
                <div className="px-4 py-1.5 rounded-full bg-brown-900 text-cream font-bold text-sm tracking-wider shadow-soft mb-6 border-2 border-caramel/60 hover:scale-105 transition-transform">
                  {item.year}
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-lg text-brown-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-brown-900/75 font-body leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Vertical Timeline (<md) */}
      <div className="md:hidden relative pl-8">
        {/* Caramel Vertical Line */}
        <div className="absolute top-4 bottom-4 left-3 w-1 bg-caramel/20 overflow-hidden">
          <motion.div
            initial={shouldReduceMotion ? { scaleY: 1 } : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full bg-caramel origin-top"
          />
        </div>

        <div className="space-y-8">
          {items.map((item, index) => (
            <motion.div
              key={item.year}
              initial={
                shouldReduceMotion ? {} : { opacity: 0, x: 20 }
              }
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.12,
                ...slowTransition,
              }}
              className="relative flex flex-col items-start"
            >
              {/* Dot marker on line */}
              <div className="absolute -left-[27px] top-1.5 w-4 h-4 rounded-full bg-brown-900 border-2 border-caramel" />

              <span className="inline-block px-3 py-1 rounded-full bg-brown-900 text-cream font-bold text-xs tracking-wider mb-2">
                {item.year}
              </span>
              <h3 className="font-heading font-bold text-lg text-brown-900 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-brown-900/80 font-body leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

