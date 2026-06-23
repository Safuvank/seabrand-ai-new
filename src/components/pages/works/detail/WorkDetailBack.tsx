"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1]as const},
  },
};

export default function WorkDetailBack() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12">
      <Link 
        href="/works" 
        className="group inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-black transition-colors duration-300"
      >
        <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
        Back to Works
      </Link>
    </motion.div>
  );
}