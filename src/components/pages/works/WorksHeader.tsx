"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function WorksHeader() {
  return (
    <section className="mb-16 md:mb-24 ">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="max-w-5xl"
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-sm font-semibold text-zinc-600 mb-8"
        >
          {/* <span className="w-2 h-2 rounded-full bg-[#6748FE] animate-pulse" /> */}
          Works
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black leading-[0.95] mb-8"
        >
          Our strategic <br className="hidden md:block" />
          <span className="text-[#A899FF]">curation.</span>
        </motion.h1>
      </motion.div>
    </section>
  );
}
