"use client";

import React from "react";
import { Users, Calendar, Palette, Heart } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import StatCounter from "@/components/ui/StatCounter";
import Reveal from "@/components/ui/Reveal";
import { aboutData } from "@/data/about";

const iconMap = {
  Users,
  Calendar,
  Palette,
  Heart,
};

export default function ImpactSection() {
  const { impact } = aboutData;

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="rounded-[36px] bg-gradient-to-br from-brown-900 to-[#35180D] p-8 sm:p-12 md:p-16 text-cream shadow-soft-xl border border-brown-700/40 relative overflow-hidden">
          {/* Subtle decorative background circles */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-caramel/20 pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full border border-caramel/15 pointer-events-none" />

          <Reveal variant="fade-up">
            <SectionHeading
              label={impact.eyebrow}
              title={impact.heading}
              align="center"
              light
              className="mb-14 relative z-10"
            />
          </Reveal>

          {/* 4 Stat Tiles Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
            {impact.stats.map((stat, idx) => {
              const IconComp = iconMap[stat.icon as keyof typeof iconMap] || Heart;

              return (
                <Reveal key={stat.label} variant="scale-in" delay={idx * 0.1}>
                  <div className="rounded-[24px] p-6 sm:p-8 bg-white/5 border border-white/10 backdrop-blur-xs flex flex-col items-center text-center hover:border-caramel/60 hover:bg-white/8 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-caramel/20 flex items-center justify-center text-caramel mb-4">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <div className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-butter mb-2 tracking-tight">
                      <StatCounter value={stat.value} suffix={stat.suffix} />
                    </div>

                    <p className="font-body text-xs sm:text-sm text-cream/75 font-semibold">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

