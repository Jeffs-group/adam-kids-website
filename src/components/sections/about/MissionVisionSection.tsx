"use client";

import React from "react";
import { Target, Eye } from "lucide-react";
import PastelCard from "@/components/ui/PastelCard";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { aboutData } from "@/data/about";

export default function MissionVisionSection() {
  const { missionVision } = aboutData;

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card (Sage) */}
          <Reveal variant="fade-up" delay={0.1}>
            <PastelCard color="sage" className="h-full flex flex-col items-start p-8 sm:p-10">
              <div className="w-14 h-14 rounded-full bg-brown-900 text-cream flex items-center justify-center mb-6 shadow-soft">
                <Target className="w-7 h-7 text-butter" />
              </div>
              <SectionLabel className="mb-2">
                {missionVision.mission.eyebrow}
              </SectionLabel>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-brown-900 mb-4">
                {missionVision.mission.title}
              </h3>
              <p className="text-base sm:text-lg text-brown-900/80 font-body leading-relaxed">
                {missionVision.mission.description}
              </p>
            </PastelCard>
          </Reveal>

          {/* Vision Card (Sky) */}
          <Reveal variant="fade-up" delay={0.25}>
            <PastelCard color="sky" className="h-full flex flex-col items-start p-8 sm:p-10">
              <div className="w-14 h-14 rounded-full bg-brown-900 text-cream flex items-center justify-center mb-6 shadow-soft">
                <Eye className="w-7 h-7 text-sky" />
              </div>
              <SectionLabel className="mb-2">
                {missionVision.vision.eyebrow}
              </SectionLabel>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-brown-900 mb-4">
                {missionVision.vision.title}
              </h3>
              <p className="text-base sm:text-lg text-brown-900/80 font-body leading-relaxed">
                {missionVision.vision.description}
              </p>
            </PastelCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

