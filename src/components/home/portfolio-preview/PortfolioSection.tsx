"use client";

import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioTrack from "./PortfolioTrack";

export default function PortfolioSection() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["calc(0% + 0vw)", "calc(-100% + 100vw)"]
  );

  return (
    <section
      ref={targetRef}
      className="relative h-[200vh] bg-black mb-20 lg:mb-20"
      id="works"
    >
      {/* ✅ FIXED: Changed h-screen to h-[100dvh] for mobile safety */}
      <div className="sticky top-0 h-[100dvh] flex flex-col justify-center overflow-hidden">
        
        {/* Subtle ambient lighting */}
        <div className="absolute top-0 right-0 w-150 h-150 bg-[#6748FE] opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />

        {/* Modular Header */}
        <PortfolioHeader />

        {/* Modular Scrolling Track */}
        <PortfolioTrack x={x} />
        
      </div>
    </section>
  );
}