"use client";

import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { programsData } from "@/data/programs";

interface StagesStepperProps {
  activeId?: string;
}

export default function StagesStepper({ activeId: propActiveId }: StagesStepperProps) {
  const { stepper } = programsData;
  const [currentActiveId, setCurrentActiveId] = useState<string>(
    propActiveId || stepper.stages[0].id
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const programId = entry.target.id.replace("program-", "");
            setCurrentActiveId(programId);
          }
        });
      },
      {
        rootMargin: "-20% 0px -40% 0px",
        threshold: 0.2,
      }
    );

    stepper.stages.forEach((stage) => {
      const el = document.getElementById(`program-${stage.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [stepper.stages]);

  const scrollToStage = (id: string) => {
    const el = document.getElementById(`program-${id}`);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <Reveal variant="fade-up">
          <SectionHeading
            label={stepper.eyebrow}
            title={stepper.heading}
            subtitle={stepper.subtitle}
            align="center"
            className="mb-12"
          />
        </Reveal>

        {/* 5 Cards Row joined by chevrons (horizontal snap-scroll on mobile) */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 pt-2 px-2 scrollbar-none snap-x snap-mandatory justify-start lg:justify-center">
          {stepper.stages.map((stage, idx) => {
            const isActive = currentActiveId === stage.id;
            const isLast = idx === stepper.stages.length - 1;

            return (
              <React.Fragment key={stage.id}>
                <button
                  type="button"
                  onClick={() => scrollToStage(stage.id)}
                  className={`snap-center flex-shrink-0 text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer min-w-[160px] sm:min-w-[190px] shadow-soft ${
                    isActive
                      ? "bg-brown-900 text-cream border-brown-900 shadow-soft-lg scale-105"
                      : "bg-white text-brown-900 border-brown-900/10 hover:border-caramel hover:bg-cream/40"
                  }`}
                >
                  <span
                    className={`block font-heading font-bold text-xs uppercase tracking-wider mb-1 ${
                      isActive ? "text-butter" : "text-caramel"
                    }`}
                  >
                    Stage {stage.number}
                  </span>
                  <h4
                    className={`font-heading font-bold text-base sm:text-lg leading-tight mb-1 ${
                      isActive ? "text-white" : "text-brown-900"
                    }`}
                  >
                    {stage.name}
                  </h4>
                  <span
                    className={`block font-body text-xs ${
                      isActive ? "text-cream/75" : "text-brown-900/60"
                    }`}
                  >
                    {stage.age}
                  </span>
                </button>

                {!isLast && (
                  <ChevronRight className="flex-shrink-0 w-5 h-5 text-caramel/50 hidden sm:block" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}

