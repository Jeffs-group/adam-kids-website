"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Sparkles, Calendar, Award } from "lucide-react";
import { useReducedMotion } from "motion/react";

interface ChildrensDayBannerSlideProps {
  isActive?: boolean;
}

// Transparent SVG Balloon Component with glossy highlight & string
function SvgBalloon({
  color,
  highlightColor,
  stringColor = "#9C6D3F",
  size = 52,
}: {
  color: string;
  highlightColor: string;
  stringColor?: string;
  size?: number;
}) {
  const gradientId = `balloon-grad-${color.replace("#", "")}`;
  return (
    <svg
      width={size}
      height={size * 2.2}
      viewBox="0 0 60 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-sm select-none pointer-events-none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={gradientId} cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor={highlightColor} stopOpacity="0.95" />
          <stop offset="60%" stopColor={color} stopOpacity="0.9" />
          <stop offset="100%" stopColor={color} stopOpacity="0.82" />
        </radialGradient>
      </defs>
      {/* Balloon Oval */}
      <path
        d="M 30,10 C 15,10 6,24 6,42 C 6,62 20,76 28,82 L 27,85 L 33,85 L 32,82 C 40,76 54,62 54,42 C 54,24 45,10 30,10 Z"
        fill={`url(#${gradientId})`}
      />
      {/* Glossy Reflection Highlight */}
      <ellipse
        cx="20"
        cy="26"
        rx="5"
        ry="10"
        transform="rotate(-25 20 26)"
        fill="#FFFFFF"
        fillOpacity="0.55"
      />
      {/* Balloon Knot */}
      <polygon points="27,85 33,85 34,88 26,88" fill={color} fillOpacity="0.95" />
      {/* Dangling String */}
      <path
        d="M 30,88 Q 36,98 27,110 Q 22,122 32,134 Q 35,142 28,150"
        stroke={stringColor}
        strokeWidth="1.2"
        strokeOpacity="0.55"
        fill="none"
      />
    </svg>
  );
}

// Bunting Garland with subtle ±2° swing
function BuntingGarland() {
  return (
    <svg
      width="180"
      height="75"
      viewBox="0 0 180 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="select-none pointer-events-none"
      aria-hidden="true"
    >
      {/* Garland String */}
      <path
        d="M 0,10 Q 90,38 180,10"
        stroke="#8B572A"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Pennant Flags */}
      <polygon points="12,13 36,20 22,54" fill="#E74C3C" />
      <polygon points="40,21 64,27 50,61" fill="#F39C12" />
      <polygon points="68,28 92,30 78,64" fill="#3498DB" />
      <polygon points="96,30 120,27 106,61" fill="#9B59B6" />
      <polygon points="124,25 148,18 134,52" fill="#2ECC71" />
      <polygon points="152,17 174,11 162,42" fill="#E84393" />
    </svg>
  );
}

// High-Performance Celebration Canvas: Crackers/Fireworks Bursts + Confetti
function CelebrationCrackersCanvas({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!active || shouldReduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
      }
    };
    window.addEventListener("resize", handleResize);

    const celebrationPalettes = [
      ["#FFD700", "#FFA500", "#FF4500", "#FFF3A8", "#FF851B"], // Golden firecracker
      ["#FF1493", "#00F0FF", "#39FF14", "#FF007F", "#FFFF00"], // Neon party cracker
      ["#FF3366", "#20E2D7", "#F9D423", "#A55EEA", "#FF7675"], // Pastel sparkler
      ["#FF2E63", "#08D9D6", "#252A34", "#EAEAEA", "#FFD700"], // Spark starburst
    ];

    interface SparkParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      size: number;
      alpha: number;
      decay: number;
      isSparkle: boolean;
      twinkleSpeed: number;
    }

    interface ConfettiPiece {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      rotation: number;
      rotSpeed: number;
      isCircle: boolean;
      alpha: number;
    }

    const sparks: SparkParticle[] = [];
    const confetti: ConfettiPiece[] = [];

    // Trigger a vibrant Cracker / Fireworks burst at (cx, cy)
    const triggerCrackerBurst = (cx: number, cy: number, count = 35) => {
      const palette =
        celebrationPalettes[
          Math.floor(Math.random() * celebrationPalettes.length)
        ];
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5.5 + 2.5;
        sparks.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: palette[Math.floor(Math.random() * palette.length)],
          size: Math.random() * 4 + 2,
          alpha: 1,
          decay: Math.random() * 0.02 + 0.015,
          isSparkle: Math.random() > 0.35,
          twinkleSpeed: Math.random() * 0.2 + 0.1,
        });
      }
    };

    // Spawn initial confetti flutter
    for (let i = 0; i < 45; i++) {
      confetti.push({
        x: Math.random() * width,
        y: -Math.random() * height * 0.5,
        vx: (Math.random() - 0.5) * 2.5,
        vy: Math.random() * 2 + 1.2,
        size: Math.random() * 7 + 4,
        color: [
          "#FF5376",
          "#FFA502",
          "#1E90FF",
          "#2ED573",
          "#A55EEA",
          "#FFD166",
          "#B8814F",
        ][Math.floor(Math.random() * 7)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 8,
        isCircle: Math.random() > 0.5,
        alpha: 1,
      });
    }

    // Grand opening fanfare: 3 cracker bursts
    setTimeout(() => {
      triggerCrackerBurst(width * 0.25, height * 0.28, 42);
    }, 150);
    setTimeout(() => {
      triggerCrackerBurst(width * 0.75, height * 0.25, 42);
    }, 380);
    setTimeout(() => {
      triggerCrackerBurst(width * 0.5, height * 0.18, 50);
    }, 650);

    // Periodic celebratory cracker pops while active (every ~2 seconds)
    const crackerInterval = setInterval(() => {
      const rx = width * (0.15 + Math.random() * 0.7);
      const ry = height * (0.12 + Math.random() * 0.35);
      triggerCrackerBurst(rx, ry, 36);
    }, 2100);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw & Update Cracker Spark Particles
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.085; // Gravity
        s.vx *= 0.975; // Air drag
        s.alpha -= s.decay;

        if (s.alpha <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, s.alpha);
        ctx.fillStyle = s.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = s.color;

        if (s.isSparkle) {
          // 4-Point Star Sparkle
          const r = s.size;
          ctx.beginPath();
          ctx.moveTo(s.x, s.y - r);
          ctx.lineTo(s.x + r * 0.3, s.y - r * 0.3);
          ctx.lineTo(s.x + r, s.y);
          ctx.lineTo(s.x + r * 0.3, s.y + r * 0.3);
          ctx.lineTo(s.x, s.y + r);
          ctx.lineTo(s.x - r * 0.3, s.y + r * 0.3);
          ctx.lineTo(s.x - r, s.y);
          ctx.lineTo(s.x - r * 0.3, s.y - r * 0.3);
          ctx.closePath();
          ctx.fill();
        } else {
          // Circular ember
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      // 2. Draw & Update Drifting Confetti Pieces
      for (let i = 0; i < confetti.length; i++) {
        const c = confetti[i];
        c.y += c.vy;
        c.x += c.vx + Math.sin(c.y * 0.02) * 0.6;
        c.rotation += c.rotSpeed;

        if (c.y > height + 20) {
          c.y = -10;
          c.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate((c.rotation * Math.PI) / 180);
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = c.color;

        if (c.isCircle) {
          ctx.beginPath();
          ctx.arc(0, 0, c.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(-c.size / 2, -c.size / 4, c.size, c.size / 2);
        }
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(crackerInterval);
      window.removeEventListener("resize", handleResize);
      if (ctx) ctx.clearRect(0, 0, width, height);
    };
  }, [active, shouldReduceMotion]);

  if (shouldReduceMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-30"
      aria-hidden="true"
    />
  );
}

export default function ChildrensDayBannerSlide({
  isActive = true,
}: ChildrensDayBannerSlideProps) {
  return (
    <div
      data-expiry="2026-11-17"
      className="relative w-full overflow-hidden select-none"
    >
      {/* 4. Canvas Celebration Crackers & Fireworks Bursts */}
      <CelebrationCrackersCanvas active={isActive} />

      {/* 2. Abundant Floating Balloons: 7 on Left Edge, 7 on Right Edge */}
      {/* Left Edge Balloon Cluster */}
      <div className="absolute inset-y-0 left-0 w-28 sm:w-40 md:w-56 lg:w-64 pointer-events-none overflow-hidden z-25">
        {/* Pink Balloon */}
        <div className="absolute left-[4%] bottom-0 animate-balloon-left-1">
          <SvgBalloon color="#FF477E" highlightColor="#FFA3BA" size={54} />
        </div>
        {/* Tangerine Balloon */}
        <div className="absolute left-[28%] bottom-0 animate-balloon-left-2">
          <SvgBalloon color="#FF8500" highlightColor="#FFC371" size={46} />
        </div>
        {/* Cyan Balloon */}
        <div className="absolute left-[12%] bottom-0 animate-balloon-left-3 hidden sm:block">
          <SvgBalloon color="#00B4D8" highlightColor="#90E0EF" size={50} />
        </div>
        {/* Royal Purple Balloon */}
        <div className="absolute left-[44%] bottom-0 animate-balloon-left-4">
          <SvgBalloon color="#8338EC" highlightColor="#C77DFF" size={44} />
        </div>
        {/* Emerald Green Balloon */}
        <div className="absolute left-[20%] bottom-0 animate-balloon-left-5 hidden sm:block">
          <SvgBalloon color="#06D6A0" highlightColor="#A7F3D0" size={48} />
        </div>
        {/* Golden Butter Balloon */}
        <div className="absolute left-[36%] bottom-0 animate-balloon-left-6">
          <SvgBalloon color="#FFD166" highlightColor="#FFF0B3" size={52} />
        </div>
        {/* Berry Coral Balloon */}
        <div className="absolute left-[8%] bottom-0 animate-balloon-left-7 hidden md:block">
          <SvgBalloon color="#FF5D8F" highlightColor="#FFB3C6" size={42} />
        </div>
      </div>

      {/* Right Edge Balloon Cluster */}
      <div className="absolute inset-y-0 right-0 w-28 sm:w-40 md:w-56 lg:w-64 pointer-events-none overflow-hidden z-25">
        {/* Violet Balloon */}
        <div className="absolute right-[6%] bottom-0 animate-balloon-right-1">
          <SvgBalloon color="#9D4EDD" highlightColor="#E0AAFF" size={52} />
        </div>
        {/* Mint Green Balloon */}
        <div className="absolute right-[30%] bottom-0 animate-balloon-right-2">
          <SvgBalloon color="#10B981" highlightColor="#6EE7B7" size={46} />
        </div>
        {/* Sun Amber Balloon */}
        <div className="absolute right-[14%] bottom-0 animate-balloon-right-3 hidden sm:block">
          <SvgBalloon color="#F59E0B" highlightColor="#FDE68A" size={50} />
        </div>
        {/* Magenta Balloon */}
        <div className="absolute right-[46%] bottom-0 animate-balloon-right-4">
          <SvgBalloon color="#F72585" highlightColor="#FF85A1" size={44} />
        </div>
        {/* Royal Blue Balloon */}
        <div className="absolute right-[22%] bottom-0 animate-balloon-right-5 hidden sm:block">
          <SvgBalloon color="#3A86FF" highlightColor="#A0C4FF" size={54} />
        </div>
        {/* Bright Tangerine Balloon */}
        <div className="absolute right-[38%] bottom-0 animate-balloon-right-6">
          <SvgBalloon color="#FB5607" highlightColor="#FFAA80" size={42} />
        </div>
        {/* Orchid Lavender Balloon */}
        <div className="absolute right-[10%] bottom-0 animate-balloon-right-7 hidden md:block">
          <SvgBalloon color="#B5179E" highlightColor="#F08080" size={48} />
        </div>
      </div>

      {/* Main Slide Card Container */}
      <div className="relative w-full max-w-5xl mx-auto rounded-[28px] sm:rounded-[36px] overflow-hidden border border-brown-900/10 shadow-soft-xl bg-white/85 backdrop-blur-xs">
        {/* Blurred Color-Matched Desktop Backdrop */}
        <div
          className="absolute inset-0 hidden md:block overflow-hidden pointer-events-none -z-10"
          aria-hidden="true"
        >
          <Image
            src="/images/childrens-day-banner.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover blur-2xl scale-110 opacity-30 saturate-150"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/60 via-white/40 to-cream/80" />
        </div>

        {/* 3. Bunting Flags Garland on Top-Right */}
        <div className="absolute top-0 right-0 z-20 pointer-events-none hidden sm:block animate-bunting-swing">
          <BuntingGarland />
        </div>

        {/* Celebratory Corner Sparkler Badges */}
        <div className="absolute top-3 left-4 z-20 pointer-events-none hidden sm:flex items-center gap-1 animate-cracker-sparkle">
          <span className="text-xl">✨</span>
          <span className="text-base">🎆</span>
        </div>
        <div className="absolute top-3 right-20 z-20 pointer-events-none hidden sm:flex items-center gap-1 animate-cracker-sparkle" style={{ animationDelay: "1s" }}>
          <span className="text-base">💥</span>
          <span className="text-xl">✨</span>
        </div>

        {/* Top Floating Festive Header (Bounce-in live text) */}
        <div className="pt-4 sm:pt-6 pb-2 sm:pb-3 px-4 text-center relative z-20">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-butter/95 border border-caramel/30 shadow-xs text-brown-900 font-heading font-bold text-sm sm:text-base md:text-lg animate-bounce-in-text">
            <Sparkles className="w-4 h-4 text-caramel flex-shrink-0 animate-spin" style={{ animationDuration: "6s" }} />
            <span>🎉 Happy Children&apos;s Day Celebration! 🎆</span>
            <Sparkles className="w-4 h-4 text-caramel flex-shrink-0 animate-spin" style={{ animationDuration: "6s" }} />
          </div>
        </div>

        {/* 1. Banner Image with Ken Burns Entrance (scale 1.08 -> 1 over 1.2s) */}
        <div className="relative px-3 sm:px-6 md:px-10 pb-3 flex items-center justify-center">
          <div className="relative max-w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-soft">
            <picture>
              <source srcSet="/images/childrens-day-banner.webp" type="image/webp" />
              <img
                src="/images/childrens-day-banner.jpg"
                alt="Adam's School Children's Day celebration with Chief Guest Dr. Kiran Jeevan"
                loading="eager"
                fetchPriority="high"
                className="w-full h-auto object-contain max-h-[380px] sm:max-h-[440px] md:max-h-[500px] lg:max-h-[540px] mx-auto block animate-ken-burns"
              />
            </picture>
          </div>
        </div>

        {/* Interactive Overlay Bar: Chief Guest Soft-Pulse + Date Pill Shine Sweep (Book Visit Removed) */}
        <div className="pb-5 sm:pb-6 px-4 sm:px-8 relative z-20">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-center">
            {/* 5. Chief Guest Pill with Soft Pulse Animation */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white border border-caramel/35 shadow-xs text-brown-900 font-heading text-xs sm:text-sm animate-soft-pulse">
              <Award className="w-4 h-4 text-caramel flex-shrink-0" />
              <span>
                Chief Guest: <strong className="text-caramel font-bold">Dr. Kiran Jeevan</strong>, Principal, United Mission College
              </span>
            </div>

            {/* 6. Date Pill with Diagonal Shine Sweep */}
            <div className="relative overflow-hidden inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-brown-900 text-cream font-heading font-semibold text-xs sm:text-sm shadow-xs">
              <Calendar className="w-4 h-4 text-butter flex-shrink-0" />
              <span>16th November • Adam&apos;s School</span>
              {/* Shimmer sweep bar */}
              <div
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none animate-shine-sweep"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
