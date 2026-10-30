"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks, schoolContact } from "@/data/nav";
import { standardTransition, slowTransition } from "@/lib/motion";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 flex items-center justify-between">
          {/* School Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-caramel rounded-xl"
            aria-label="Adam Kids International Montessori School"
          >
            <div className="relative h-11 sm:h-12 w-auto flex items-center">
              <Image
                src="/images/logo.svg"
                alt="Adam Kids International Montessori School"
                width={140}
                height={50}
                priority
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-104 group-hover:-rotate-1"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
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
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-brown-700 to-brown-900 text-white font-body font-semibold text-sm shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 active:scale-95 transition-all border border-brown-700/30 group"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="lg:hidden w-11 h-11 rounded-full bg-cream border border-brown-900/15 flex items-center justify-center text-brown-900 focus-visible:outline-caramel hover:bg-brown-900/5 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-brown-900" />
              ) : (
                <Menu className="w-5 h-5 text-brown-900" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Animated Full-Screen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 lg:hidden bg-cream/98 backdrop-blur-xl flex flex-col pt-24 px-6 pb-8 overflow-y-auto"
          >
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
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-3.5 px-4 rounded-2xl font-heading text-2xl font-bold transition-colors ${
                        isActive
                          ? "bg-butter/60 text-caramel pl-6"
                          : "text-brown-900 hover:bg-cream"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Menu Footer Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, ...standardTransition }}
              className="mt-8 pt-6 border-t border-brown-900/10 flex flex-col gap-4"
            >
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 rounded-full bg-gradient-to-r from-brown-700 to-brown-900 text-white font-body font-bold text-center text-base shadow-soft flex items-center justify-center gap-2"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-center font-body text-xs text-brown-900/60">
                {schoolContact.fullAddress} • {schoolContact.phoneDisplay}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
