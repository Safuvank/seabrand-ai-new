"use client";

import { motion } from "framer-motion";
import { categories, Category } from "@/src/data/projects.data";

interface WorksFilterProps {
  activeCategory: Category;
  setActiveCategory: (category: Category) => void;
}

export default function WorksFilter({
  activeCategory,
  setActiveCategory,
}: WorksFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-wrap items-center gap-6 md:gap-8 mb-16 border-b border-zinc-200 pb-6 "
    >
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`relative text-sm md:text-base font-bold tracking-wide transition-colors duration-300 cursor-pointer ${
            activeCategory === category
              ? "text-black"
              : "text-zinc-400 hover:text-zinc-600"
          }`}
        >
          {category}
          {/* Animated active underline */}
          {activeCategory === category && (
            <motion.div
              layoutId="activeFilter"
              className="absolute -bottom-[25px] left-0 right-0 h-[2px] bg-black"
            />
          )}
        </button>
      ))}
    </motion.div>
  );
}
