"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { EASING } from "@/lib/motion";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window !== "undefined" && !window.location.hash) {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{
        duration: 0.5,
        ease: EASING,
      }}
      className="flex flex-col flex-1"
    >
      {children}
    </motion.div>
  );
}

