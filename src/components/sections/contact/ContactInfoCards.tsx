"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { schoolContact } from "@/data/nav";
import { slowTransition } from "@/lib/motion";

export default function ContactInfoCards() {
  const shouldReduceMotion = useReducedMotion();

  const cards = [
    {
      title: "Visit Us",
      value: schoolContact.fullAddress,
      subtext: "Heart of Shanthinagar • Open Maps ↗",
      color: "bg-[#DCE8D4] border-[#c2d4b6]",
      icon: MapPin,
      href: schoolContact.googleMapsUrl,
      external: true,
    },
    {
      title: "Call Us",
      value: schoolContact.phone,
      subtext: "Direct Admissions Helpline",
      color: "bg-[#D9E6EE] border-[#bdd3e1]",
      icon: Phone,
      href: schoolContact.phoneHref,
    },
    {
      title: "Email Us",
      value: schoolContact.email,
      subtext: "Expect a reply within 24h",
      color: "bg-[#EBDDA0] border-[#d8c67c]",
      icon: Mail,
      href: schoolContact.emailHref,
    },
    {
      title: "School Hours",
      value: schoolContact.hours,
      subtext: "Day Care till late afternoon",
      color: "bg-[#E3B0A0] border-[#d49987]",
      icon: Clock,
      href: undefined,
    },
  ];

  return (
    <section className="relative -mt-10 sm:-mt-14 z-20 pb-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;

            const cardContent = (
              <motion.div
                key={card.title}
                initial={
                  shouldReduceMotion
                    ? {}
                    : { opacity: 0, y: 25 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: idx * 0.1,
                  ...slowTransition,
                }}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -6,
                        boxShadow:
                          "0 20px 40px -12px rgba(78, 39, 23, 0.14), 0 6px 12px -2px rgba(78, 39, 23, 0.06)",
                      }
                }
                className={`rounded-[28px] p-6 sm:p-7 shadow-soft border ${card.color} flex flex-col items-start transition-all duration-300 h-full group`}
              >
                <div className="w-12 h-12 rounded-full bg-brown-900 text-cream flex items-center justify-center mb-5 shadow-xs group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5 text-butter" />
                </div>

                <span className="font-heading font-bold text-xs uppercase tracking-wider text-brown-900/70 mb-1">
                  {card.title}
                </span>

                <h3 className="font-heading font-bold text-lg text-brown-900 mb-1 leading-snug">
                  {card.value}
                </h3>

                <p className="font-body text-xs text-brown-900/65 font-medium mt-auto pt-2">
                  {card.subtext}
                </p>
              </motion.div>
            );

            if (card.href) {
              return (
                <a
                  key={card.title}
                  href={card.href}
                  target={"external" in card && card.external ? "_blank" : undefined}
                  rel={"external" in card && card.external ? "noopener noreferrer" : undefined}
                  className="block h-full focus-visible:outline-caramel rounded-[28px]"
                >
                  {cardContent}
                </a>
              );
            }

            return cardContent;
          })}
        </div>
      </div>
    </section>
  );
}

