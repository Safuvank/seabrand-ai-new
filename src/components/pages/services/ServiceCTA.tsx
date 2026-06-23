"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  onOpenModal: () => void;
}

export default function ServicesCTA({ onOpenModal }: CTAProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-zinc-950 rounded-xl p-12 md:p-20 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10"
      >
        {/* Ambient Light Effect */}
        <div className="absolute top-0 right-0 w-125 h-125 bg-[#6748FE]/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl">
          {/* Label Added Here */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-zinc-800 border border-zinc-700 text-sm font-semibold text-zinc-300 mb-8 uppercase tracking-widest">
            Let's Collaborate
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.1] mb-6">
            Ready to evolve <br />
            <span className="text-[#6748FE]">your brand?</span>
          </h2>
          <p className="text-lg text-zinc-400">
            Let’s discuss your vision and see how our AI-powered curation can
            scale your business.
          </p>
        </div>

        <button
          onClick={onOpenModal}
          className="relative z-10 group bg-white text-black px-10 py-6 rounded-xl text-lg font-bold flex items-center gap-3 cursor-pointer"
        >
          Start Project
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
}
