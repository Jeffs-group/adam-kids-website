import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProgramsHero from "@/components/sections/programs/ProgramsHero";
import StagesStepper from "@/components/sections/programs/StagesStepper";
import ProgramsGrid from "@/components/sections/programs/ProgramsGrid";
import EverydayExperiences from "@/components/sections/programs/EverydayExperiences";
import MontessoriWay from "@/components/ui/MontessoriWay";
import CTABanner from "@/components/ui/CTABanner";
import { programsData } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programs | Day Care to UKG",
  description:
    "Explore our authentic Montessori programs in Shanthinagar, Bangalore: Day Care (1.5-6 yrs), Pre-School (2-3 yrs), Nursery (3-4 yrs), LKG (4-5 yrs), and UKG (5-6 yrs).",
};

export default function ProgramsPage() {
  const { montessoriWay, ctaSplit } = programsData;

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* 1. Hero */}
        <ProgramsHero />

        {/* 2. Stages Stepper */}
        <StagesStepper />

        {/* 3. Programs Grid */}
        <ProgramsGrid />

        {/* 4. Everyday Experiences */}
        <EverydayExperiences />

        {/* 5. The Montessori Advantage */}
        <MontessoriWay
          eyebrow={montessoriWay.eyebrow}
          heading={montessoriWay.heading}
          paragraph={montessoriWay.paragraph}
          cards={montessoriWay.cards}
          withDividers
        />

        {/* 6. Split CTA Banner */}
        <CTABanner
          variant="split"
          heading={ctaSplit.heading}
          paragraph={ctaSplit.paragraph}
          primaryButtonText={ctaSplit.primaryCta.label}
          primaryButtonHref={ctaSplit.primaryCta.href}
          secondaryButtonText={ctaSplit.secondaryCta.label}
          secondaryButtonHref={ctaSplit.secondaryCta.href}
          phoneDisplay={ctaSplit.phoneDisplay}
          phoneHref={ctaSplit.phoneHref}
        />
      </main>
      <Footer />
    </>
  );
}

