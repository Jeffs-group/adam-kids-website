import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export default function SectionLabel({
  children,
  className = "",
  light = false,
}: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-[12px] font-bold uppercase tracking-[0.2em] font-body ${
        light ? "text-butter" : "text-caramel"
      } ${className}`}
    >
      {children}
    </span>
  );
}

