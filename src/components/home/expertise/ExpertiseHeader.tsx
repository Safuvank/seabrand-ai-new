"use client";

import { motion } from "framer-motion";

export default function ExpertiseHeader() {
  return (
    <div className="text-center mb-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="leading-[1.15] text-5xl md:text-6xl lg:text-6xl font-bold text-white tracking-tight"
      >
        Your Vision{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6748FE] to-blue-500">
          Our Expertise.
        </span>
      </motion.h2>
    </div>
  );
}