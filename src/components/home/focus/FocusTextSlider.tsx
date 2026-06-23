"use client";

import { motion, AnimatePresence } from "framer-motion";
import { focusAreas } from "@/src/data/focus.data";

interface FocusTextSliderProps {
  currentPage: number;
  direction: number;
  onNext: () => void;
  onPrev: () => void;
  onDotClick: (index: number) => void;
}

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 50 : -50,
    opacity: 0,
    filter: "blur(4px)"
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)"
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -50 : 50,
    opacity: 0,
    filter: "blur(4px)"
  })
};

export default function FocusTextSlider({
  currentPage,
  direction,
  onNext,
  onPrev,
  onDotClick
}: FocusTextSliderProps) {
  return (
    <div className="flex flex-col">
      
      {/* Fixed Main Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        className="text-5xl md:text-6xl font-bold text-black leading-[1.15] tracking-tight mb-12"
      >
        We&apos;re Passionate About 
        <span className="text-[#6748FE]"> AI Strategic </span>
        <span className="text-[#6748FE]">Curation.</span>
      </motion.h2>

      {/* Sliding Text Container */}
      <div className="relative min-h-[220px] w-full overflow-hidden border-t border-b border-zinc-200 py-8">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col gap-4 absolute inset-0 justify-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
              {focusAreas[currentPage].title}
            </h3>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-lg mt-2">
              {focusAreas[currentPage].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between mt-8">
        
        {/* Progress Dots */}
        <div className="flex items-center gap-3">
          {focusAreas.map((_, index) => (
            <button
              key={index}
              onClick={() => onDotClick(index)}
              className={`h-2 rounded-xl transition-all duration-500 ease-in-out ${
                currentPage === index 
                  ? "w-10 bg-[#6748FE]" 
                  : "w-2 bg-zinc-300 hover:bg-zinc-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next Arrows */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onPrev}
            className="p-3 rounded-xl border border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:text-[#6748FE] hover:border-[#6748FE] transition-colors cursor-pointer"
            aria-label="Previous Page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button 
            onClick={onNext}
            className="p-3 rounded-xl border border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:text-[#6748FE] hover:border-[#6748FE] transition-colors cursor-pointer"
            aria-label="Next Page"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}