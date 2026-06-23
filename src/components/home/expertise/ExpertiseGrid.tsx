"use client";

import { motion } from "framer-motion";
import { steps } from "@/src/data/expertize.data"; // Make sure this path is correct

export default function ExpertiseGrid() {
  return (
    <div className="relative max-w-7xl mx-auto">
      
      {/* Connecting Animated Line (Desktop Only) */}
      <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 z-0">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          className="h-full bg-gradient-to-r from-[#6748FE] to-blue-500 origin-left shadow-[0_0_15px_#6748FE]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
              delay: index * 0.2, // Stagger effect
              ease: [0.25, 1, 0.5, 1],
            }}
            /* Static Glassmorphism Classes */
            className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
          >
            {/* Massive Watermark Number */}
            <div className="absolute -right-4 -bottom-4 text-9xl font-black text-white/[0.02] pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:text-white/[0.05]">
              {step.number}
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Icon Wrapper */}
              <div className="w-14 h-14 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center mb-8 transition-colors duration-500 group-hover:border-[#6748FE]/50 group-hover:bg-[#6748FE]/20 text-[#6748FE] group-hover:text-white">
                {step.icon}
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 tracking-tight">
                {step.title}
              </h3>

              <p className="text-zinc-400 text-base lg:text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}