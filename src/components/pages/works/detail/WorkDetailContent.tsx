// "use client";

// import { motion } from "framer-motion";
// import { type Project } from "@/src/data/projects.data";

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1]as const},
//   },
// };

// export default function WorkDetailContent({ project }: { project: Project }) {
//   return (
//     <div className="max-w-3xl mx-auto space-y-20 md:space-y-32">
      
//       {/* Overview Section */}
//       {project.overview && (
//         <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
//           <h2 className="text-3xl font-bold text-black mb-6">Overview</h2>
//           <p className="text-lg text-zinc-600 leading-relaxed font-medium">
//             {project.overview}
//           </p>
//         </motion.section>
//       )}

//       {/* Challenge & Solution Grid */}
//       {(project.challenge || project.solution) && (
//         <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="grid md:grid-cols-2 gap-12 md:gap-20">
//           {project.challenge && (
//             <div>
//               <h2 className="text-2xl font-bold text-black mb-4">The Challenge</h2>
//               <p className="text-zinc-600 leading-relaxed">{project.challenge}</p>
//             </div>
//           )}
          
//           {project.solution && (
//             <div>
//               <h2 className="text-2xl font-bold text-black mb-4">The Solution</h2>
//               <p className="text-zinc-600 leading-relaxed">{project.solution}</p>
//             </div>
//           )}
//         </motion.section>
//       )}

//     </div>
//   );
// }



"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { type Project } from "@/src/data/projects.data";

export default function WorkDetailContent({ project }: { project: Project }) {
  return (
    <>
      {/* STICKY SIDEBAR */}
      <aside className="lg:col-span-3">
        <div className="sticky top-32 flex flex-col gap-10">
          <Link href="/works" className="flex items-center gap-2 text-zinc-500 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Works
          </Link>
          
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Client</p>
              <p className="text-lg font-semibold text-[#6748fe]">{project.client}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Role</p>
              <p className="text-lg font-semibold text-[#6748fe]">{project.role}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Year</p>
              <p className="text-lg font-semibold text-[#6748fe]">{project.year}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT COLUMN */}
      <article className="lg:col-span-9 space-y-20">
        
        <section>
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#6748FE] mb-6">Overview</h2>
          <p className="text-2xl  font-medium tracking-tight text-zinc-900 leading-snug">
            {project.overview}
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 bg-black p-8 md:p-12 rounded-3xl">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">The Challenge</h3>
            <p className="text-white leading-relaxed">{project.challenge}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">The Solution</h3>
            <p className="text-white leading-relaxed">{project.solution}</p>
          </div>
        </section>

        {/* You could add a photo gallery grid here if your Project type has extra images */}
      </article>
    </>
  );
}