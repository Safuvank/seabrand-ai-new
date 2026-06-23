"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ServicesTitleProps {
  dynamicTitle: string;
}

export default function ServicesTitle({ dynamicTitle }: ServicesTitleProps) {
  return (
    <div className="flex flex-col justify-start pr-0 lg:pr-12">
      {/* Main Heading */}
      <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.1] tracking-tight">
        <span className="block text-[#6748FE] mb-2">AI Strategic</span>

        {/* Dynamic Second Line */}
        <AnimatePresence mode="wait">
          <motion.div
            key={dynamicTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-white block min-h-[1.2em]"
          >
            {dynamicTitle}
          </motion.div>
        </AnimatePresence>
      </h2>
    </div>
  );
}