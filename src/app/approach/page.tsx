import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import MontessoriWay from "@/components/ui/MontessoriWay";
import DailyScheduleSection from "@/components/sections/approach/DailyScheduleSection";
import CTABanner from "@/components/ui/CTABanner";
import { approachData } from "@/data/faq";
import { homeContent } from "@/data/content";

export const metadata: Metadata = {
  title: "Our Approach | The Montessori Method",
  description:
    "Discover how Adam Kids follows the Montessori methodology in Shanthinagar, Bangalore. Explore our child-directed work cycles, daily rhythm, and prepared environments.",
};

export default function ApproachPage() {
  const { hero } = approachData;
  const { montessoriWay, ctaBanner } = homeContent;

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* 1. Approach Hero */}
        <PageHero
          chipText={hero.chip}
          chipIcon="sparkles"
          headlinePart1={hero.headlinePart1}
          headlineHighlight={hero.headlineHighlight}
          paragraph={hero.paragraph}
          imageSrc="/images/everyday-learn.png"
          imageAlt="Montessori learner engaged in hands-on sensorial activity"
          withWaveBottom
          waveFill="#FFF8E7"
        />

        {/* 2. Core Montessori Principles */}
        <MontessoriWay
          eyebrow={montessoriWay.eyebrow}
          heading={montessoriWay.heading}
          paragraph={montessoriWay.paragraph}
          cards={montessoriWay.cards}
          withDividers
        />

        {/* 3. A Day at Adam Kids Vertical Timeline */}
        <DailyScheduleSection />

        {/* 4. CTA Banner */}
        <CTABanner
          variant="centered"
          heading={ctaBanner.heading}
          paragraph={ctaBanner.paragraph}
          primaryButtonText="Enquire for Admission"
          primaryButtonHref="/contact"
          secondaryButtonText="Explore Programs"
          secondaryButtonHref="/programs"
        />
      </main>
      <Footer variant="full" />
    </>
  );
}

