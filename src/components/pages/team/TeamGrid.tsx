"use client";

import { motion } from "framer-motion";
import { team } from "@/src/data/team.data";
import TeamMemberCard from "./TeamMemberCard";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function TeamGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
    >
      {team.map((member, i) => (
        <TeamMemberCard key={`team-${i}`} member={member} />
      ))}
    </motion.div>
  );
}
