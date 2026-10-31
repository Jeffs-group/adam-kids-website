"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks, schoolContact } from "@/data/nav";
import { standardTransition, slowTransition } from "@/lib/motion";
import KidsRunningNavbar from "@/components/ui/KidsRunningNavbar";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={shouldReduceMotion ? { y: 0 } : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={slowTransition}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-md shadow-soft border-b border-brown-900/10 py-3"
            : "bg-cream/70 backdrop-blur-xs py-4 md:py-5"
        }`}
      >
        {/* Playful Floating Kids Bubbles along Navbar Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 opacity-75">
          {/* Bubble 1: Sage */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    x: [0, 14, 0],
                    y: [0, -6, 0],
                    scale: [1, 1.15, 1],
                  }
            }
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-2 left-1/4 w-3.5 h-3.5 rounded-full bg-sage/50 border border-sage/60"
          />
          {/* Bubble 2: Butter */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    x: [0, -12, 0],
                    y: [0, 8, 0],
                    scale: [0.9, 1.2, 0.9],
                  }
            }
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute top-3 left-1/2 w-4 h-4 rounded-full bg-butter/60 border border-butter"
          />
          {/* Bubble 3: Blush */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    x: [0, 10, 0],
                    y: [0, -8, 0],
                  }
            }
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-2 right-1/3 w-3 h-3 rounded-full bg-blush/40 border border-blush/60"
          />
          {/* Bubble 4: Sky */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    x: [0, -15, 0],
                    y: [0, 6, 0],
                  }
            }
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-2 right-1/6 w-3 h-3 rounded-full bg-sky/50 border border-sky/70"
          />
        </div>

        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 flex items-center justify-between relative">
          {/* School Logo with Normal Float Animation & Playful Hover Bounce */}
          <Link
            href="/"
            onMouseEnter={() => setLogoHovered(true)}
            onMouseLeave={() => setLogoHovered(false)}
            className="flex items-center gap-3 group focus-visible:outline-caramel rounded-xl relative py-1 z-20"
            aria-label="Adam Kids International Montessori School"
          >
            {/* Soft Ambient Golden Glow behind Logo */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: logoHovered ? [1, 1.2, 1.1] : [0.95, 1.05, 0.95],
                      opacity: logoHovered ? 0.75 : [0.25, 0.5, 0.25],
                    }
              }
              transition={{
                duration: logoHovered ? 0.4 : 3.8,
                repeat: logoHovered ? 0 : Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-2 rounded-2xl bg-butter/45 blur-md -z-10 pointer-events-none"
            />

            {/* Playful Floating Mini Sparkles on Hover */}
            <AnimatePresence>
              {logoHovered && !shouldReduceMotion && (
                <>
                  <motion.span
                    initial={{ opacity: 0, scale: 0, y: 0, x: -6 }}
                    animate={{ opacity: 1, scale: 1.2, y: -18, x: -10 }}
                    exit={{ opacity: 0, scale: 0, y: -24 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute -top-1 left-2 text-caramel text-xs select-none pointer-events-none"
                  >
                    ★
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0, y: 0, x: 6 }}
                    animate={{ opacity: 1, scale: 1.1, y: -20, x: 12 }}
                    exit={{ opacity: 0, scale: 0, y: -26 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 }}
                    className="absolute -top-1 right-2 text-caramel text-xs select-none pointer-events-none"
                  >
                    ✦
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0, y: 0 }}
                    animate={{ opacity: 1, scale: 1, y: 16 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut", delay: 0.12 }}
                    className="absolute -bottom-1 left-1/2 text-sage text-[10px] select-none pointer-events-none"
                  >
                    ●
                  </motion.span>
                </>
              )}
            </AnimatePresence>

            {/* Animated Logo Container: Gentle Idle Sway & Joyful Spring Hover */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : logoHovered
                  ? {
                      scale: 1.08,
                      rotate: [0, -3.5, 3.5, -2, 0],
                      y: -2.5,
                    }
                  : {
                      y: [0, -3, 0, 2, 0],
                      rotate: [0, -0.8, 0, 0.8, 0],
                    }
              }
              transition={
                logoHovered
                  ? {
                      scale: { type: "spring", stiffness: 350, damping: 14 },
                      y: { type: "spring", stiffness: 350, damping: 14 },
                      rotate: { duration: 0.42, ease: "easeInOut" },
                    }
                  : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
              }
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              className="relative h-11 sm:h-12 w-auto flex items-center cursor-pointer"
            >
              <Image
                src="/images/logo/Adam Kids logo enhanced.png"
                alt="Adam Kids International Montessori School"
                width={150}
                height={52}
                priority
                className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 drop-shadow-2xs"
              />
            </motion.div>
          </Link>

          {/* Playful Kids Running from Logo to Last Enquire Now */}
          <KidsRunningNavbar />

          {/* Desktop Navigation Links with Kids Play Interactive Hovers */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 relative z-20">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.scrollTo(0, 0);
                    }
                  }}
                  className={`relative px-4 py-2 rounded-full font-body font-semibold text-sm transition-colors focus-visible:outline-caramel ${
                    isActive
                      ? "text-brown-900 font-bold"
                      : "text-brown-900/75 hover:text-brown-900 hover:bg-brown-900/5"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      transition={standardTransition}
                      className="absolute bottom-1 left-4 right-4 h-0.5 bg-caramel rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Enquire Now CTA Pill & Mobile Toggle */}
          <div className="flex items-center gap-3 relative z-20">
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              className="relative hidden sm:inline-flex items-center group"
            >
              {/* Playful kids bouncing star next to CTA button */}
              <motion.span
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        rotate: [0, 25, -20, 0],
                        scale: [1, 1.25, 1],
                      }
                }
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -left-2 text-caramel text-base select-none pointer-events-none z-10 group-hover:text-butter transition-colors"
                title="Playful Sparkle"
              >
                ✦
              </motion.span>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-brown-700 to-brown-900 hover:from-brown-900 hover:to-brown-700 text-white font-body font-semibold text-sm shadow-soft hover:shadow-soft-lg active:scale-95 transition-all border border-brown-700/30"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Mobile Hamburger Button */}
            <motion.button
              whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden w-11 h-11 rounded-full bg-cream border border-brown-900/15 flex items-center justify-center text-brown-900 focus-visible:outline-caramel hover:bg-brown-900/5 transition-colors relative"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-brown-900" />
              ) : (
                <Menu className="w-5 h-5 text-brown-900" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Animated Full-Screen Overlay Menu with Playful Kids Bubbles */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 lg:hidden bg-cream/98 backdrop-blur-xl flex flex-col pt-24 px-6 pb-8 overflow-y-auto"
          >
            {/* Drifting playful pastel blobs in mobile menu */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
              <div className="absolute top-1/4 -left-12 w-48 h-48 rounded-full bg-sage/35 blur-2xl" />
              <div className="absolute bottom-1/3 -right-12 w-52 h-52 rounded-full bg-butter/40 blur-2xl" />
            </div>

            <div className="flex flex-col gap-2 my-auto">
              {navLinks.map((link, idx) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: idx * 0.06,
                      ...standardTransition,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        if (typeof window !== "undefined") {
                          window.scrollTo(0, 0);
                        }
                      }}
                      className={`block py-3.5 px-4 rounded-2xl font-heading text-2xl font-bold transition-all ${
                        isActive
                          ? "bg-butter/60 text-caramel pl-6 shadow-xs"
                          : "text-brown-900 hover:bg-cream hover:pl-5"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-caramel/50" />
                        <span>{link.label}</span>
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Menu Footer Action with Direct Map Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, ...standardTransition }}
              className="mt-8 pt-6 border-t border-brown-900/10 flex flex-col gap-4"
            >
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-full bg-gradient-to-r from-brown-700 to-brown-900 text-white font-body font-bold text-center text-base shadow-soft flex items-center justify-center gap-2 hover:shadow-soft-lg transition-all"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={schoolContact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center font-body text-xs text-brown-900/70 hover:text-caramel transition-colors"
              >
                📍 {schoolContact.fullAddress} • {schoolContact.phoneDisplay}
                <span className="block text-[11px] font-bold text-caramel mt-0.5">
                  Open on Google Maps ↗
                </span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
