import type { Variants, Transition } from "motion/react";

export const EASING = [0.22, 1, 0.36, 1] as const;

export const DURATIONS = {
  fast: 0.4,
  base: 0.6,
  slow: 0.8,
  deliberate: 1.0,
} as const;

export const standardTransition: Transition = {
  duration: DURATIONS.base,
  ease: EASING,
};

export const slowTransition: Transition = {
  duration: DURATIONS.slow,
  ease: EASING,
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 18,
  mass: 1,
};

export const gentleSpring: Transition = {
  type: "spring",
  stiffness: 80,
  damping: 20,
};

export const fadeUpVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: slowTransition,
  },
};

export const fadeInVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: slowTransition,
  },
};

export const scaleInVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATIONS.slow,
      ease: EASING,
    },
  },
};

export const slideLeftVariant: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: slowTransition,
  },
};

export const slideRightVariant: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: slowTransition,
  },
};

export const staggerContainer = (
  staggerChildren = 0.12,
  delayChildren = 0
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const wordMaskContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const wordMaskItem: Variants = {
  hidden: {
    y: "120%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: DURATIONS.slow,
      ease: EASING,
    },
  },
};

