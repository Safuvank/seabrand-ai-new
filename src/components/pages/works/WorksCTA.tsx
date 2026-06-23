"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const },
  },
};

export default function WorksCTA() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="mt-16 border-zinc-200 pt-12 flex justify-center"
    >
      <a
        href="tel:+918113925507"
        className="group inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 w-full max-w-md"
      >
        <PhoneCall className="w-5 h-5 text-[#6748FE] transition-transform duration-300 group-hover:rotate-12" />
        Need to talk with our expert
      </a>
    </motion.div>
  );
}
