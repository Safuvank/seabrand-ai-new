"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const },
  },
};

export default function TestimonialsHeader() {
  return (
    <div className="container-custom mx-auto px-6 md:px-12 max-w-7xl mb-16 md:mb-24">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 rounded-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="w-full lg:w-2/3"
        >
          <h2 className="mb-10 text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight text-[#6748FE] leading-[1.05]">
            Reviews.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="w-full lg:w-1/3"
        />
      </div>
    </div>
  );
}