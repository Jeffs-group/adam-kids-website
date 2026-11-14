"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import WaveDivider from "@/components/ui/WaveDivider";
import KidsFloatingElements from "@/components/ui/KidsFloatingElements";
import ChildrensDayBannerSlide from "./ChildrensDayBannerSlide";
import MontessoriHeroSlide from "./MontessoriHeroSlide";

// Expiry date for the Children's Day Banner slide (YYYY-MM-DD)
// Slide auto-hides after 23:59:59 on this date.
export const CHILDRENS_DAY_EXPIRY = "2026-11-17";

function checkIsChildrensDayActive(): boolean {
  // Active until end of day (23:59:59) IST on 17 Nov 2026
  const expiry = new Date(`${CHILDRENS_DAY_EXPIRY}T23:59:59+05:30`);
  return Date.now() <= expiry.getTime();
}

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Compute expiry state directly (avoids cascading effect setState)
  const isChildrensDayActive = checkIsChildrensDayActive();

  // Build active slides list (Children's Day is Slide 0 when active)
  interface SlideConfig {
    id: string;
    label: string;
    badgeTitle: string;
  }

  const slides: SlideConfig[] = [];
  if (isChildrensDayActive) {
    slides.push({
      id: "childrens-day",
      label: "Children's Day Celebration",
      badgeTitle: "Children's Day Special",
    });
  }
  slides.push({
    id: "montessori-hero",
    label: "Welcome to Adam Kids",
    badgeTitle: "Montessori Discovery",
  });

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    if (totalSlides <= 1) return;
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    if (totalSlides <= 1) return;
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play timer: 5 seconds per slide, paused on hover or touch
  useEffect(() => {
    if (totalSlides <= 1 || isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [totalSlides, isPaused, nextSlide]);

  // Touch Swipe Handlers for Mobile
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX.current - touchEndX;
    const diffY = touchStartY.current - touchEndY;

    // Minimum swipe threshold of 40px, ensuring horizontal movement is dominant
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
    setIsPaused(false);
  };

  // Keyboard navigation for carousel
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (totalSlides <= 1) return;
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  };

  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="Home Page Hero Slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="relative pt-28 pb-20 sm:pt-32 md:pt-36 md:pb-28 bg-cream overflow-hidden focus:outline-none"
    >
      {/* Drifting blurred soft pastel blobs in background */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-10">
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-sage/40 blur-3xl"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, -35, 0],
                  y: [0, 25, 0],
                }
          }
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-28 w-[420px] h-[420px] rounded-full bg-blush/35 blur-3xl"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 20, 0],
                  y: [0, 20, 0],
                }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-16 left-1/3 w-80 h-80 rounded-full bg-butter/45 blur-3xl"
        />
      </div>

      {/* Playful Floating Kids Doodles & Elements */}
      <KidsFloatingElements variant="hero" />

      {/* Slider Viewport with AnimatePresence */}
      <div className="relative w-full z-10 px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {slides[currentSlide]?.id === "childrens-day" ? (
            <motion.div
              key="childrens-day"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
            >
              <ChildrensDayBannerSlide isActive={currentSlide === 0} />
            </motion.div>
          ) : (
            <motion.div
              key="montessori-hero"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
            >
              <MontessoriHeroSlide />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Carousel Navigation Bar: Arrows + Dots */}
        {totalSlides > 1 && (
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 relative z-20">
            {/* Prev Arrow Button */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white border border-brown-900/10 shadow-soft hover:shadow-soft-lg flex items-center justify-center text-brown-900 hover:text-caramel transition-all hover:scale-105 cursor-pointer focus-visible:outline-caramel"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-xs border border-brown-900/10 shadow-xs">
              {slides.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`Slide ${index + 1}: ${slide.label}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`transition-all duration-300 rounded-full cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? "w-8 sm:w-9 h-3 bg-brown-900 text-cream"
                        : "w-3 h-3 bg-brown-900/25 hover:bg-brown-900/50"
                    }`}
                  >
                    <span className="sr-only">{slide.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Next Arrow Button */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white border border-brown-900/10 shadow-soft hover:shadow-soft-lg flex items-center justify-center text-brown-900 hover:text-caramel transition-all hover:scale-105 cursor-pointer focus-visible:outline-caramel"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        )}
      </div>

      {/* Curved wave divider into About section */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <WaveDivider fill="#FFF8E7" />
      </div>
    </section>
  );
}
