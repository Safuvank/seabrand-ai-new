"use client";

import { motion, AnimatePresence } from "framer-motion";
import WorkCard from "./WorkCard";
import { type Project } from "@/src/data/projects.data";

interface WorksGridProps {
  filteredProjects: Project[];
}

export default function WorksGrid({ filteredProjects }: WorksGridProps) {
  return (
    <>
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <WorkCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full py-32 text-center text-zinc-500 font-medium text-xl"
        >
          No projects found for this selection.
        </motion.div>
      )}
    </>
  );
}
