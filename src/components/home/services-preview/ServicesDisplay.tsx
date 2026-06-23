"use client";

import { motion, AnimatePresence } from "framer-motion";

// Define the shape of your service data based on your usage
interface ServiceItem {
  number: string | number;
  rightTitle: string;
  rightDesc: string;
  dynamicTitle?: string;
}

export default function ServicesDisplay({ service }: { service: ServiceItem }) {
  return (
    <div className="flex flex-col relative border-t border-b border-zinc-800 py-16 lg:py-0 min-h-87.5 lg:min-h-112.5">
      {/* "AI Integrated" Badge */}
      <div className="absolute top-6 right-0 lg:top-5 text-white text-xs md:text-sm font-bold tracking-widest uppercase z-20 flex items-center gap-2 bg-[#0a0a0a]/50 backdrop-blur-sm py-1.5 px-3 rounded-full border border-zinc-800/80">
        ✨ AI Integrated
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={service.number}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex flex-col-reverse lg:flex-row items-start lg:items-end justify-between relative lg:pb-12"
        >
          {/* Small Title & Description (Bottom Left on Desktop) */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative z-10">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-3">
              {service.rightTitle}
            </h4>
            <p className="text-zinc-400 text-base leading-relaxed max-w-sm">
              {service.rightDesc}
            </p>
          </div>

          {/* Massive Number (Top Right / Center Right) */}
          {/* Massive Number (Top Right / Center Right) */}
          <div className="absolute right-0 top-0 lg:top-1/2 lg:-translate-y-1/2 text-[10rem] md:text-[14rem] lg:text-[20rem] font-light leading-none text-white tracking-tighter select-none z-0 opacity-90">
            {service.number}{" "}
            {/* <-- Change service.id to service.number here */}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
