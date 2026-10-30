import React from "react";
import SectionLabel from "./SectionLabel";

interface SectionHeadingProps {
  label?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  light = false,
  className = "",
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {label && (
        <SectionLabel light={light} className="mb-3">
          {label}
        </SectionLabel>
      )}
      <h2
        className={`font-heading font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15] ${
          light ? "text-cream" : "text-brown-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg max-w-2xl font-body leading-relaxed ${
            light ? "text-cream/80" : "text-brown-900/80"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

