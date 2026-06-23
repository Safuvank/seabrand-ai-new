"use client";

import { motion } from "framer-motion";
import { Calendar, User, Layout, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { type Project } from "@/src/data/projects.data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1]as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function WorkDetailHeader({ project }: { project: Project }) {
  return (
    <motion.header variants={staggerContainer} initial="hidden" animate="visible" className="mb-16 md:mb-20">
      
      {/* Categories */}
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {project.categories?.map((cat, i) => (
          <motion.span
            key={i}
            variants={fadeUp}
            className="text-xs font-semibold px-3 py-1.5 rounded-xl border border-zinc-200 bg-zinc-100/50 text-zinc-600"
          >
            {cat}
          </motion.span>
        ))}
      </div>

      {/* Main Title */}
      <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black mb-8 leading-[1.1]">
        {project.title}
      </motion.h1>

      {/* Meta Grid */}
      <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-zinc-200 mt-12">
        <div>
          <div className="flex items-center gap-2 text-zinc-400 mb-2">
            <User className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Client</span>
          </div>
          <p className="font-semibold text-zinc-900">{project.client}</p>
        </div>
        
        {project.role && (
          <div>
            <div className="flex items-center gap-2 text-zinc-400 mb-2">
              <Layout className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Role</span>
            </div>
            <p className="font-semibold text-zinc-900">{project.role}</p>
          </div>
        )}
        
        {project.year && (
          <div>
            <div className="flex items-center gap-2 text-zinc-400 mb-2">
              <Calendar className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Year</span>
            </div>
            <p className="font-semibold text-zinc-900">{project.year}</p>
          </div>
        )}
        
        <div>
          <div className="flex items-center gap-2 text-zinc-400 mb-2">
            <ArrowUpRight className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Live Site</span>
          </div>
          <Link href="#" className="font-semibold text-[#6748FE] hover:underline underline-offset-4">
            View Live
          </Link>
        </div>
      </motion.div>
    </motion.header>
  );
}

