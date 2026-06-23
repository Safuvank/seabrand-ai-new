// "use client";

// import { motion } from "framer-motion";
// import { type Project } from "@/src/data/projects.data";

// export default function WorkDetailHero({ project }: { project: Project }) {
//   if (!project.heroImage) return null;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40, scale: 0.98 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
//       className="w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-zinc-100 mb-20 md:mb-32 shadow-2xl shadow-black/5"
//     >
//       <img 
//         src={project.heroImage} 
//         alt={`${project.title} Hero`} 
//         className="w-full h-full object-cover" 
//       />
//     </motion.div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { type Project } from "@/src/data/projects.data";

export default function WorkDetailHero({ project }: { project: Project }) {
  return (
    <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
      <motion.img 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        src={project.heroImage || project.image} 
        alt={project.title} 
        className="w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute bottom-12 left-6 md:left-12 lg:left-16 text-white">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4">{project.title}</h1>
      </div>
    </div>
  );
}