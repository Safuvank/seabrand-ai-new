"use client";

import { motion } from "framer-motion";

export default function ExpertiseBackground() {
  return (
    <>
      {/* Animated Glowing Orbs for Glassmorphism Highlights */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1], // Subtle opacity
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 -left-[10%] w-[600px] h-[600px] bg-[#6748FE] rounded-xl mix-blend-screen filter blur-[150px] opacity-15 pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.05, 0.15, 0.05], // Subtle opacity
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 -right-[10%] w-[700px] h-[700px] bg-blue-600 rounded-xl mix-blend-screen filter blur-[180px] opacity-10 pointer-events-none"
      />

      {/* Abstract Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none z-0" />
      
      {/* Fade Gradients top and bottom */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-0" />
    </>
  );
}