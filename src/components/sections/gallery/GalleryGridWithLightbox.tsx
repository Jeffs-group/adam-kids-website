"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { galleryData } from "@/data/faq";
import { standardTransition } from "@/lib/motion";

export default function GalleryGridWithLightbox() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = galleryData.items.filter((item) =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === null || prev === filteredItems.length - 1 ? 0 : prev + 1
      );
    }
  }, [lightboxIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev === null || prev === 0 ? filteredItems.length - 1 : prev - 1
      );
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, showNext, showPrev]);

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12 md:mb-16">
          {galleryData.categories.map((cat) => {
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full font-body font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer shadow-xs focus-visible:outline-caramel ${
                  isSelected
                    ? "bg-brown-900 text-cream shadow-soft scale-105"
                    : "bg-white text-brown-900 border border-brown-900/10 hover:border-caramel hover:bg-cream"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Responsive Grid with Layout Animations */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => {
              const heightClass =
                item.aspect === "tall"
                  ? "h-[360px] sm:h-[420px]"
                  : item.aspect === "wide"
                  ? "h-[260px] sm:h-[300px]"
                  : "h-[300px] sm:h-[340px]";

              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={standardTransition}
                  onClick={() => openLightbox(index)}
                  className={`relative rounded-[28px] overflow-hidden shadow-soft group cursor-pointer border border-brown-900/10 bg-sage/20 ${heightClass}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brown-900/80 via-brown-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                    <div className="self-end w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="inline-block px-2.5 py-1 rounded-full bg-butter font-heading font-bold text-[10px] uppercase tracking-wider text-brown-900 mb-2">
                        {item.category}
                      </span>
                      <h4 className="font-heading font-bold text-white text-base leading-tight mb-1">
                        {item.title}
                      </h4>
                      <p className="font-body text-xs text-white/80 line-clamp-2">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-brown-900/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label="Image Lightbox"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close Lightbox"
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-caramel z-20"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous Image"
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-caramel z-20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next Image"
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer focus-visible:outline-caramel z-20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Content */}
            <motion.div
              initial={
                shouldReduceMotion ? {} : { scale: 0.94, opacity: 0 }
              }
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={standardTransition}
              className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[4/3] max-h-[65vh] rounded-[28px] overflow-hidden shadow-2xl bg-black/40">
                <Image
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 896px"
                  className="object-contain"
                />
              </div>

              {/* Caption and Index */}
              <div className="w-full mt-4 text-center text-white px-4">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="font-heading font-bold text-sm text-butter">
                    {filteredItems[lightboxIndex].category}
                  </span>
                  <span className="text-white/40">•</span>
                  <span className="font-body text-xs text-white/60">
                    {lightboxIndex + 1} of {filteredItems.length}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-1">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-white/80 max-w-xl mx-auto">
                  {filteredItems[lightboxIndex].caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

