"use client";

import { motion } from "framer-motion";

// Animations
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
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function AboutHero() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 mb-20 md:mb-32">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24"
      >
        {/* Left Content */}
        <motion.div variants={fadeUp} className="max-w-3xl lg:w-1/2">
          <div className="inline-block px-4 py-1.5 rounded-xl bg-zinc-200/50 border border-zinc-200 text-sm font-semibold text-zinc-600 mb-6">
            About Us
          </div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black leading-[0.95] mb-8"
          >
            Curating the <br className="hidden md:block" />
            <span className="text-[#A899FF]">future of brands.</span>
          </motion.h1>
        </motion.div>

        {/* Right Content */}
        <motion.div variants={fadeUp} className="w-full lg:w-1/2 lg:pt-6">
          <svg
            className="w-10 h-10 text-[#A899FF] mb-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed">
            <strong className="text-black font-bold">
              SeaBrand AI is an AI-powered strategic branding and digital
              marketing company dedicated to helping businesses, startups,
              entrepreneurs, and entertainment brands build powerful market
              identities.
            </strong>{" "}
            <br />
            <br />
            {/* As a subsidiary of Procoder, SeaBrand AI combines branding expertise, artificial intelligence, creativity, and data-driven strategies to create impactful brands that drive growth, engagement, and long-term success. */}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
