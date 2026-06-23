"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Top Left Floating Orb */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full bg-[#6748FE]/10 blur-[120px]"
      />

      {/* Bottom Right Floating Orb */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[40%] -right-[10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-[#9b85ff]/15 blur-[120px]"
      />
    </div>
  );
}