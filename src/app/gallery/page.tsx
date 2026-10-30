import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import GalleryGridWithLightbox from "@/components/sections/gallery/GalleryGridWithLightbox";
import CTABanner from "@/components/ui/CTABanner";
import { galleryData } from "@/data/faq";

export const metadata: Metadata = {
  title: "Gallery | Moments From Our Days",
  description:
    "Explore photos and visual moments from Adam Kids International Montessori School in Shanthinagar, Bangalore. Discover our classrooms, ateliers, and outdoor spaces.",
};

export default function GalleryPage() {
  const { hero } = galleryData;

  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* 1. Gallery Hero */}
        <PageHero
          chipText={hero.chip}
          chipIcon="sparkles"
          headlinePart1={hero.headlinePart1}
          headlineHighlight={hero.headlineHighlight}
          paragraph={hero.paragraph}
          imageSrc="/images/about-hero.png"
          imageAlt="Montessori students working with materials"
          withWaveBottom
          waveFill="#FFF8E7"
        />

        {/* 2. Interactive Masonry Grid with Filter & Lightbox */}
        <GalleryGridWithLightbox />

        {/* 3. Centered CTA Banner */}
        <CTABanner
          variant="centered"
          heading="Experience the Wonder in Person"
          paragraph="Photos capture moments, but seeing a child's eyes light up during self-directed discovery is truly magical. Schedule a campus visit today."
          primaryButtonText="Book a Campus Visit"
          primaryButtonHref="/contact"
          secondaryButtonText="Explore Our Programs"
          secondaryButtonHref="/programs"
        />
      </main>
      <Footer variant="full" />
    </>
  );
}

