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

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ClientsHeader() {
  return (
    <section className="mb-20 md:mb-28">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="max-w-4xl"
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-sm font-semibold text-zinc-600 mb-8"
        >
          {/* <span className="w-2 h-2 rounded-full bg-[#6748FE] animate-pulse" /> */}
          Our Partners
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black leading-[0.95] mb-8"
        >
          Brands we <br className="hidden md:block" />
          <span className="text-[#A899FF]">partner with.</span>
        </motion.h1>

        {/* <motion.p variants={fadeUp} className="text-xl text-zinc-500 max-w-2xl leading-relaxed">
          From ambitious startups to global enterprises, we collaborate with visionary teams to build digital experiences that matter.
        </motion.p> */}
      </motion.div>
    </section>
  );
}
