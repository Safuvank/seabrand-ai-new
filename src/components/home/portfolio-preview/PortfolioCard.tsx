"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Define the shape of your project data
interface Project {
  id: string | number;
  slug: string;
  image: string;
  title: string;
  categories: string;
  client: string;
}

interface PortfolioCardProps {
  project: Project;
  index: number;
}

export default function PortfolioCard({ project, index }: PortfolioCardProps) {
  return (
    <Link href={`/works/${project.slug}`} className="block shrink-0 py-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.7,
          delay: index * 0.1,
          ease: [0.25, 1, 0.5, 1],
        }}
    
        className="group relative overflow-hidden rounded-3xl border border-white/20 bg-[#0a0a0a] w-[85vw] md:w-[60vw] lg:w-[45vw] xl:w-[400px] h-[55vh] min-h-[350px] max-h-[500px] cursor-pointer block shadow-lg"
      >
        {/* Background Image */}
        <div className="absolute inset-0 transition-transform duration-700 ease-[0.25,1,0.5,1] group-hover:scale-105">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
          <div className="mb-6 flex">
            <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-white uppercase tracking-widest">
              {project.categories}
            </div>
          </div>

          <div className="flex items-end justify-between gap-6">
            <div className="transform transition-transform duration-500 ease-[0.25,1,0.5,1] group-hover:-translate-y-2">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-lg max-w-md opacity-0 -translate-y-4 transition-all duration-500 ease-[0.25,1,0.5,1] group-hover:opacity-100 group-hover:translate-y-0 hidden sm:block">
                {project.client}
              </p>
            </div>

            <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shrink-0 opacity-0 scale-50 transition-all duration-500 ease-[0.25,1,0.5,1] group-hover:opacity-100 group-hover:scale-100">
              <svg
                className="w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-[0.25,1,0.5,1] delay-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}