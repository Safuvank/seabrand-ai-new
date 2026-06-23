"use client";

import { motion } from "framer-motion";

export default function FocusImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      className="w-full"
    >
      <div className="relative aspect-4/5 rounded-[2.5rem] overflow-hidden bg-zinc-100 shadow-2xl shadow-zinc-200/50">
        <motion.img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
          alt="Focused collaboration on digital strategy at SeaBrand"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover origin-center"
        />
        <div className="absolute inset-0 bg-[#6748FE] opacity-5 mix-blend-screen pointer-events-none" />
      </div>
    </motion.div>
  );
}