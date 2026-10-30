import React from "react";
import { MapPin, Navigation } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { schoolContact } from "@/data/nav";

export default function CampusMapSection() {
  // Safe responsive Google Maps embed URL
  const mapSrc =
    "https://maps.google.com/maps?q=Shanthinagar,+Bangalore,+Karnataka,+India&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="map" className="py-20 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <Reveal variant="fade-up">
          <SectionHeading
            label="FIND US"
            title="Visit our campus in Shanthinagar"
            subtitle="Conveniently situated in central Bangalore with safe drop-off zones and secure premises."
            align="left"
            className="mb-12"
          />
        </Reveal>

        {/* 32px Rounded Google Maps Container */}
        <div className="relative w-full rounded-[32px] overflow-hidden shadow-soft-lg border-2 border-brown-900/10 h-[320px] md:h-[460px] bg-sage/20">
          <iframe
            title="Adam Kids International Montessori School Location Map"
            src={mapSrc}
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0 grayscale-[20%] contrast-[105%]"
          />

          {/* Overlay Address Card */}
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:bottom-6 sm:max-w-sm rounded-[24px] p-5 sm:p-6 bg-white/95 backdrop-blur-md border border-brown-900/10 shadow-soft-lg">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-caramel/20 flex items-center justify-center text-caramel flex-shrink-0">
                <MapPin className="w-5 h-5 text-caramel" />
              </div>
              <div className="flex flex-col">
                <h4 className="font-heading font-bold text-base text-brown-900">
                  Adam Kids Montessori
                </h4>
                <p className="font-body text-xs text-brown-900/75 mt-0.5 leading-relaxed">
                  {schoolContact.fullAddress}
                </p>
                <a
                  href={schoolContact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-xs font-bold text-caramel hover:text-brown-900 font-heading tracking-wide uppercase transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

