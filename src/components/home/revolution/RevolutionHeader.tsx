"use client";

import { motion } from "framer-motion";

export default function RevolutionHeader() {
  return (
    <div className="w-full lg:w-5/12 lg:sticky lg:top-40">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
      >
        <h2 className="text-5xl md:text-6xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
          Our Strategic <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6748FE] to-blue-500">
            Revolution.
          </span>
        </h2>

        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-md">
          We combine strategy, artificial intelligence, human creativity,
          and thoughtful curation to build brands that connect, inspire,
          and grow. Every project is designed to create meaningful
          experiences and lasting impact in the digital world.
        </p>
      </motion.div>
    </div>
  );
}