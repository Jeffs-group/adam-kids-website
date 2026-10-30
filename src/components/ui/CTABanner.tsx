"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import Button from "./Button";
import Reveal from "./Reveal";

interface CTABannerProps {
  variant?: "centered" | "split";
  heading: string;
  paragraph: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  showMapPin?: boolean;
  phoneDisplay?: string;
  phoneHref?: string;
  whatsappHref?: string;
  imageSrc?: string;
  className?: string;
}

export default function CTABanner({
  variant = "centered",
  heading,
  paragraph,
  primaryButtonText = "Enquire for Admission",
  primaryButtonHref = "/contact",
  secondaryButtonText,
  secondaryButtonHref,
  showMapPin = false,
  phoneDisplay,
  phoneHref,
  whatsappHref,
  imageSrc = "/images/cta-teacher.png",
  className = "",
}: CTABannerProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <Reveal variant="scale-in">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-brown-700 via-brown-900 to-[#35180D] p-8 sm:p-12 md:p-16 text-white shadow-soft-xl">
            {/* Decorative floating background circles */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, -12, 0],
                      rotate: [0, 180, 360],
                    }
              }
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-caramel/25 pointer-events-none select-none"
            />
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, 16, 0],
                      rotate: [360, 180, 0],
                    }
              }
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-caramel/20 pointer-events-none select-none"
            />

            {variant === "centered" ? (
              /* Centered Variant */
              <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
                <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-cream leading-tight mb-5">
                  {heading}
                </h2>
                <p className="text-base sm:text-lg text-cream/80 font-body leading-relaxed max-w-2xl mb-8">
                  {paragraph}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <div className="relative group">
                    {/* Soft pulsing ring */}
                    <div className="absolute -inset-1 rounded-full bg-caramel/40 blur-xs group-hover:bg-caramel/60 animate-pulse pointer-events-none" />
                    <Button
                      href={primaryButtonHref}
                      variant="white"
                      size="lg"
                      withArrow={!showMapPin}
                      arrowIcon={showMapPin ? <MapPin className="w-4 h-4 ml-2 text-caramel" /> : undefined}
                      className="relative z-10 font-bold"
                    >
                      {primaryButtonText}
                    </Button>
                  </div>

                  {secondaryButtonText && secondaryButtonHref && (
                    <Button
                      href={secondaryButtonHref}
                      variant="outline"
                      size="lg"
                      className="border-cream text-cream hover:bg-cream/10"
                    >
                      {secondaryButtonText}
                    </Button>
                  )}

                  {whatsappHref && (
                    <Button
                      href={whatsappHref}
                      variant="outline"
                      size="lg"
                      className="border-cream text-cream hover:bg-cream/10"
                      arrowIcon={<MessageCircle className="w-4 h-4 ml-2 text-green-400" />}
                      withArrow
                    >
                      Chat on WhatsApp
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              /* Split Variant */
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col items-start text-left">
                  <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-cream leading-tight mb-5">
                    {heading}
                  </h2>
                  <p className="text-base sm:text-lg text-cream/80 font-body leading-relaxed max-w-xl mb-8">
                    {paragraph}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <Button
                      href={primaryButtonHref}
                      variant="white"
                      size="lg"
                      withArrow
                      className="font-bold"
                    >
                      {primaryButtonText}
                    </Button>

                    {secondaryButtonText && secondaryButtonHref && (
                      <Button
                        href={secondaryButtonHref}
                        variant="outline"
                        size="lg"
                        className="border-cream text-cream hover:bg-cream/10"
                      >
                        {secondaryButtonText}
                      </Button>
                    )}
                  </div>

                  {phoneDisplay && phoneHref && (
                    <a
                      href={phoneHref}
                      className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-cream text-sm font-semibold transition-colors"
                    >
                      <Phone className="w-4 h-4 text-caramel" />
                      <span>Direct: {phoneDisplay}</span>
                    </a>
                  )}
                </div>

                {/* Right Column: Circular Teacher Illustration with gentle float */}
                <div className="lg:col-span-5 flex justify-center items-center">
                  <motion.div
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            y: [-6, 6, -6],
                            rotate: [-1, 1, -1],
                          }
                    }
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut",
                    }}
                    className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-2 bg-gradient-to-tr from-caramel to-butter shadow-soft-lg"
                  >
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-cream">
                      <Image
                        src={imageSrc}
                        alt="Montessori teacher with children"
                        fill
                        sizes="256px"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

