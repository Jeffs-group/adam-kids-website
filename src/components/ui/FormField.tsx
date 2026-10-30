import React from "react";

interface FormFieldProps {
  label: string;
  name: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function FormField({
  label,
  name,
  error,
  required = false,
  children,
  className = "",
}: FormFieldProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label
        htmlFor={name}
        className="font-heading font-semibold text-sm text-brown-900 flex items-center justify-between"
      >
        <span>
          {label} {required && <span className="text-caramel">*</span>}
        </span>
      </label>
      <div className="relative">{children}</div>
      {error && (
        <p className="text-xs font-semibold text-red-600 mt-1 font-body">
          {error}
        </p>
      )}
    </div>
  );
}

export const inputBaseClasses =
  "w-full px-4 py-3.5 rounded-2xl bg-cream/50 border border-brown-900/15 text-brown-900 placeholder:text-brown-900/40 text-base focus:outline-none focus:ring-2 focus:ring-caramel focus:border-caramel focus:bg-white transition-all min-h-[48px]";

