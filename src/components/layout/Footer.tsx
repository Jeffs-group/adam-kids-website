import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Globe, ArrowRight, Heart } from "lucide-react";
import { navLinks, schoolContact } from "@/data/nav";

interface FooterProps {
  variant?: "full" | "minimal";
}

export default function Footer({ variant }: FooterProps = {}) {
  void variant;
  return (
    <footer className="w-full bg-[#F6ECD2] border-t border-brown-900/10 pt-16 pb-10 transition-colors">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-brown-900/10">
          {/* Column 1: School Identity & Admissions Badge */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link
              href="/"
              className="flex items-center gap-3 mb-5 group focus-visible:outline-caramel rounded-xl"
              aria-label="Adam Kids International Montessori School"
            >
              <Image
                src="/images/logo/Adam Kids logo enhanced.png"
                alt="Adam Kids International Montessori School"
                width={160}
                height={58}
                className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-102"
              />
            </Link>

            <p className="font-body text-sm sm:text-base text-brown-900/80 leading-relaxed max-w-sm mb-6">
              An inviting Montessori school in Shanthinagar, Bangalore. Where little hands make big discoveries at their own natural pace.
            </p>

            {/* Admissions Open Pill Badge */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-butter border border-brown-900/15 text-xs font-bold text-brown-900 shadow-xs hover:border-caramel hover:scale-102 transition-all group"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-caramel animate-ping" />
              <span>Admissions Open for 2026–27</span>
              <ArrowRight className="w-3.5 h-3.5 text-caramel transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h4 className="font-heading font-bold text-base text-brown-900 mb-4 tracking-tight uppercase tracking-[0.08em]">
              Explore
            </h4>
            <ul className="flex flex-col gap-3 font-body text-sm font-semibold text-brown-900/75">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-caramel hover:translate-x-1.5 transition-all inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-caramel/40 group-hover:bg-caramel transition-colors" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h4 className="font-heading font-bold text-base text-brown-900 mb-4 tracking-tight uppercase tracking-[0.08em]">
              Programs
            </h4>
            <ul className="flex flex-col gap-3 font-body text-sm font-semibold text-brown-900/75">
              {[
                { label: "Day Care (1.5 – 6 yrs)", href: "/programs#program-daycare" },
                { label: "Pre-School (2 – 3 yrs)", href: "/programs#program-preschool" },
                { label: "Nursery (3 – 4 yrs)", href: "/programs#program-nursery" },
                { label: "LKG (4 – 5 yrs)", href: "/programs#program-lkg" },
                { label: "UKG (5 – 6 yrs)", href: "/programs#program-ukg" },
              ].map((prog) => (
                <li key={prog.label}>
                  <Link
                    href={prog.href}
                    className="hover:text-caramel hover:translate-x-1.5 transition-all inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-caramel/40 group-hover:bg-caramel transition-colors" />
                    <span>{prog.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details & Hours */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h4 className="font-heading font-bold text-base text-brown-900 mb-4 tracking-tight uppercase tracking-[0.08em]">
              Visit & Contact
            </h4>
            <ul className="flex flex-col gap-3.5 font-body text-sm text-brown-900/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-caramel flex-shrink-0 mt-0.5" />
                <a
                  href={schoolContact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-caramel transition-colors leading-snug group"
                  title="Open Adam Kids School on Google Maps"
                >
                  <span>{schoolContact.fullAddress}</span>
                  <span className="block text-xs font-bold text-caramel/80 group-hover:text-caramel mt-0.5">
                    View on Google Maps ↗
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-caramel flex-shrink-0" />
                <a
                  href={schoolContact.phoneHref}
                  className="hover:text-caramel font-semibold transition-colors"
                >
                  {schoolContact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-caramel flex-shrink-0" />
                <a
                  href={schoolContact.emailHref}
                  className="hover:text-caramel font-semibold transition-colors"
                >
                  {schoolContact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-caramel flex-shrink-0" />
                <span>{schoolContact.hours}</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-caramel flex-shrink-0" />
                <a
                  href={`https://${schoolContact.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-caramel transition-colors font-medium"
                >
                  {schoolContact.website}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Quick metadata & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-xs text-brown-900/65">
          <p>
            © {schoolContact.year} {schoolContact.name}. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2 text-brown-900/75 text-center sm:text-right">
            <span className="inline-flex items-center gap-1.5">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-caramel fill-caramel inline" />
              <span>for little explorers in Shanthinagar, Bangalore.</span>
            </span>
            <span className="hidden sm:inline text-brown-900/30">|</span>
            <span>
              Developed by{" "}
              <span className="font-semibold text-brown-900">
                Bethlix Technologies Pvt Ltd
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
