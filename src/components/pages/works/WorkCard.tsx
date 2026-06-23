"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { type Project } from "@/src/data/projects.data";

interface WorkCardProps {
  project: Project;
}

export default function WorkCard({ project }: WorkCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col "
    >
      <Link
        href={`/works/${project.slug}`}
        className="flex flex-col cursor-pointer"
      >
        {/* Edge-to-Edge Image Container */}
        <div className="relative w-full aspect-[4/3] md:aspect-[3/2] rounded-2xl overflow-hidden bg-zinc-100 mb-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-1000 ease-[0.25,1,0.5,1] group-hover:scale-105"
          />
          {/* Subtle tactile overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        </div>

        {/* Minimalist Meta Grid */}
        <div className="flex justify-between items-start pt-4 border-t border-zinc-200">
          <div className="flex flex-col">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 group-hover:text-[#6748FE] transition-colors duration-300 tracking-tight">
              {project.title}
            </h3>

            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-zinc-500">
              <span>{project.client}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-300" />
              <span className="text-zinc-400">
                {project.categories.join(", ")}
              </span>
            </div>
          </div>

          <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:bg-[#6748FE] group-hover:text-white group-hover:border-[#6748FE] transition-all duration-300 transform group-hover:rotate-45 shrink-0">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
