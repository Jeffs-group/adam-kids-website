import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Timeline from "@/components/ui/Timeline";
import Reveal from "@/components/ui/Reveal";
import { aboutData } from "@/data/about";

export default function JourneySection() {
  const { journey } = aboutData;

  return (
    <section className="py-20 md:py-28 bg-[#FFFBF0]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <Reveal variant="fade-up">
          <SectionHeading
            label={journey.eyebrow}
            title={journey.heading}
            align="center"
            className="mb-16"
          />
        </Reveal>

        <Timeline items={journey.milestones} />
      </div>
    </section>
  );
}

