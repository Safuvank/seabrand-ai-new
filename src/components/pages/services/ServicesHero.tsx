"use client";

import { motion } from "framer-motion";

export default function ServiceHero({ service }: { service: any }) {
  return (
    <section className="pt-32 pb-20 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
          <div className="text-[#6748FE] font-bold text-sm tracking-widest uppercase mb-6">{service.number} // Service</div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">{service.title}</h1>
          <p className="text-xl text-zinc-600 leading-relaxed">{service.description}</p>
        </motion.div>
        
        <div className="bg-zinc-900 text-white p-10 rounded-[2rem] min-h-[300px] flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4 text-[#6748FE]">Why this works</h3>
          <p className="text-zinc-300">Modern brands need more than just design. Our AI-powered approach ensures every visual choice is backed by data, market trends, and long-term brand equity.</p>
        </div>
      </div>
    </section>
  );
}