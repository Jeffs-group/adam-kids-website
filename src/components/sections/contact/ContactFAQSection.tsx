import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import Reveal from "@/components/ui/Reveal";
import { faqItems } from "@/data/faq";

export default function ContactFAQSection() {
  return (
    <section className="py-20 md:py-32 bg-[#FFFDF5]">
      <div className="max-w-4xl mx-auto px-5 md:px-8 lg:px-10">
        <Reveal variant="fade-up">
          <SectionHeading
            label="GOOD TO KNOW"
            title="Questions parents often ask"
            subtitle="Find clear answers about admissions, our educational approach, and daily routines."
            align="center"
            className="mb-14"
          />
        </Reveal>

        <Reveal variant="fade-up" delay={0.15}>
          <Accordion items={faqItems} defaultOpenId="admission-process" />
        </Reveal>
      </div>
    </section>
  );
}

