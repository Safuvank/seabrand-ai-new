"use client";

import { motion, MotionValue } from "framer-motion";
import { projects } from "@/src/data/projects.data";
import PortfolioCard from "./PortfolioCard";
import PortfolioViewAllCard from "./PortfolioViewAllCard";

interface PortfolioTrackProps {
  x: MotionValue<string>;
}

export default function PortfolioTrack({ x }: PortfolioTrackProps) {
  // Grab only the first 3 projects
  const displayedProjects = projects.slice(0, 3);

  return (
    <motion.div style={{ x }} className="flex gap-6 px-4 md:px-12 w-max">
      {/* Mapped Project Cards */}
      {displayedProjects.map((project, index) => (
        <PortfolioCard key={project.id} project={project as any} index={index} />
      ))}

      {/* The Final "View All Projects" Slide */}
      <PortfolioViewAllCard delayCount={displayedProjects.length} />
    </motion.div>
  );
}