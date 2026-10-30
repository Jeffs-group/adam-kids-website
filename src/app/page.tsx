import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/home/HeroSection";
import AboutPreviewSection from "@/components/sections/home/AboutPreviewSection";
import ProgramsPreviewSection from "@/components/sections/home/ProgramsPreviewSection";
import GalleryPreviewSection from "@/components/sections/home/GalleryPreviewSection";
import MontessoriWay from "@/components/ui/MontessoriWay";
import CTABanner from "@/components/ui/CTABanner";
import { homeContent } from "@/data/content";

export default function HomePage() {
  const { montessoriWay, ctaBanner } = homeContent;

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. About Preview */}
        <AboutPreviewSection />

        {/* 3. Programs Preview */}
        <ProgramsPreviewSection />

        {/* 4. The Montessori Way */}
        <MontessoriWay
          eyebrow={montessoriWay.eyebrow}
          heading={montessoriWay.heading}
          paragraph={montessoriWay.paragraph}
          cards={montessoriWay.cards}
          withDividers
        />

        {/* 5. Gallery Bento Preview */}
        <GalleryPreviewSection />

        {/* 6. CTA Banner */}
        <CTABanner
          variant="centered"
          heading={ctaBanner.heading}
          paragraph={ctaBanner.paragraph}
          primaryButtonText={ctaBanner.buttonLabel}
          primaryButtonHref={ctaBanner.buttonHref}
          showMapPin
        />
      </main>
      <Footer />
    </>
  );
}
