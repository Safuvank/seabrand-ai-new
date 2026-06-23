


"use client";

import { useState } from "react";
import FocusImage from "./FocusImage";
import FocusTextSlider from "./FocusTextSlider";
import { focusAreas } from "@/src/data/focus.data";

export default function FocusSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % focusAreas.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + focusAreas.length) % focusAreas.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentPage ? 1 : -1);
    setCurrentPage(index);
  };

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden w-full">
      {/* ✅ FIXED: Universal Container applied */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* 1. Left Side: Static Image */}
          <FocusImage />

          {/* 2. Right Side: Interactive Text Slider */}
          <FocusTextSlider 
            currentPage={currentPage}
            direction={direction}
            onNext={handleNext}
            onPrev={handlePrev}
            onDotClick={handleDotClick}
          />
          
        </div>
      </div>
    </section>
  );
}