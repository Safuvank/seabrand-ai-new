"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 80, damping: 20 } 
  },
};

export default function HeroContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center max-w-4xl mx-auto space-y-8"
    >
      {/* Hover.dev style animated Eyebrow */}
      <motion.div variants={itemVariants} className="relative group cursor-default">
        <div className="absolute inset-0 rounded-full bg-[#6748FE]/30 blur-md group-hover:bg-[#6748FE]/50 transition-colors duration-500"></div>
        <div className="relative flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-[#9b85ff]" />
          <span className="text-sm font-medium text-neutral-300">
            Kerala&apos;s First AI Strategic Branding Curator
          </span>
        </div>
      </motion.div>

      {/* Main Headline */}
      <motion.h1 
        variants={itemVariants} 
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1]"
      >
        Precision of <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#9b85ff] to-[#6748FE]">AI.</span>
        <br className="hidden md:block" />
        <span className="font-serif italic font-light text-neutral-400"> Soul </span> 
        of Human Creativity.
      </motion.h1>

      {/* Sub-headline */}
      <motion.p 
        variants={itemVariants} 
        className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed"
      >
        We architect personal and business brands that connect, inspire, and grow. 
        Stop guessing. Start making data-backed, mathematically optimized branding decisions.
      </motion.p>

      {/* CTAs */}
      <motion.div 
        variants={itemVariants} 
        className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto"
      >
        <button className="group relative w-full sm:w-auto px-8 py-3.5 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
          <div className="absolute inset-0 bg-gradient-to-r from-[#6748FE] to-[#9b85ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Curate My Brand
          </span>
        </button>
        
        <button className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-white font-medium rounded-full border border-white/10 hover:bg-white/5 transition-all active:scale-95">
          View Our Curation
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </motion.div>
  );
}