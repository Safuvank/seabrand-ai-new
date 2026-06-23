"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

// Bypassed React state for 60fps animation
function AnimatedNumber({
  value,
  suffix = "",
  duration = 2.5,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: duration,
        ease: [0.25, 1, 0.5, 1],
        onUpdate(val) {
          if (ref.current) {
            ref.current.textContent = Math.round(val) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [value, isInView, duration, suffix]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

interface StatProps {
  stat: {
    value: number;
    suffix: string;
    label: string;
    description: string;
  };
  index: number;
}

export default function RevolutionStatCard({ stat, index }: StatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 1, 0.5, 1],
      }}
      className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
    >
      <div className="relative z-10">
        {/* The Animated Number */}
        <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter flex items-baseline drop-shadow-md">
          <AnimatedNumber value={stat.value} suffix={stat.suffix} />
        </div>

        {/* Label */}
        <h3 className="text-xl font-bold text-[#6748FE] mb-3 tracking-tight">
          {stat.label}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-base leading-relaxed">
          {stat.description}
        </p>
      </div>
    </motion.div>
  );
}