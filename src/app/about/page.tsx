import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import StorySection from "@/components/sections/about/StorySection";
import MissionVisionSection from "@/components/sections/about/MissionVisionSection";
import JourneySection from "@/components/sections/about/JourneySection";
import FounderSection from "@/components/sections/about/FounderSection";
import ValuesSection from "@/components/sections/about/ValuesSection";
import DifferentiationSection from "@/components/sections/about/DifferentiationSection";
import ImpactSection from "@/components/sections/about/ImpactSection";
import CultureSection from "@/components/sections/about/CultureSection";
import CTABanner from "@/components/ui/CTABanner";
import { aboutData } from "@/data/about";

export const metadata: Metadata = {
  title: "About Us | Our Story & Philosophy",
  description:
    "Learn about Adam Kids International Montessori School in Shanthinagar, Bangalore. Discover our story, mission, founder Agnes Caroline, and our commitment to nurturing young explorers.",
};

export default function AboutPage() {
  const { hero, ctaBanner } = aboutData;

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* 1. About Hero */}
        <PageHero
          chipText={hero.chip}
          chipIcon="sparkles"
          headlinePart1={hero.headlinePart1}
          headlineHighlight={hero.headlineHighlight}
          paragraph={hero.paragraph}
          imageSrc={hero.image}
          imageAlt="Montessori classroom materials and learning"
          withWaveBottom
          waveFill="#FFFFFF"
        />

        {/* 2. Our Story */}
        <StorySection />

        {/* 3. Mission & Vision */}
        <MissionVisionSection />

        {/* 4. Our Journey Timeline */}
        <JourneySection />

        {/* 5. Founder & Leadership */}
        <FounderSection />

        {/* 6. Values */}
        <ValuesSection />

        {/* 7. What Makes Us Different */}
        <DifferentiationSection />

        {/* 8. Impact Numbers */}
        <ImpactSection />

        {/* 9. Culture Collage */}
        <CultureSection />

        {/* 10. CTA Banner */}
        <CTABanner
          variant="centered"
          heading={ctaBanner.heading}
          paragraph={ctaBanner.paragraph}
          primaryButtonText={ctaBanner.primaryCta.label}
          primaryButtonHref={ctaBanner.primaryCta.href}
          secondaryButtonText={ctaBanner.secondaryCta.label}
          secondaryButtonHref={ctaBanner.secondaryCta.href}
        />
      </main>
      <Footer variant="full" />
    </>
  );
}

