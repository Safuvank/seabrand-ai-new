// "use client";

// import { motion } from "framer-motion";
// import { aboutData } from "@/src/data/about.data";

// const stagger = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1]as const } },
// };

// export default function AboutImageGrid() {
//   return (
//     <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 mb-20">
//       <motion.div 
//         initial="hidden" 
//         whileInView="visible" 
//         viewport={{ once: true, margin: "-100px" }} 
//         variants={stagger}
//         className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6"
//       >
//         {aboutData.gridImages.map((img) => (
//           <motion.div 
//             key={img.id} 
//             variants={fadeUp}
//             // Appended group, overflow-hidden, and rounded corners to your existing classes
//             className={`${img.classes} overflow-hidden rounded-2xl md:rounded-3xl relative group bg-zinc-100`}
//           >
//             <img
//               src={img.src}
//               alt={img.alt}
//               sizes={img.sizes}
//               className="object-cover w-full h-full absolute inset-0 transition-transform duration-700 ease-[0.25,1,0.5,1] group-hover:scale-105"
//             />
//             {/* Subtle dark overlay on hover to make it feel tactile */}
//             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/src/data/about.data";

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1]as const } },
};

export default function AboutImageGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-20">
      
      <div className="border-t border-zinc-200 pt-16 mb-12 flex justify-between items-end">
        <h2 className="text-3xl font-bold tracking-tight">Behind the Scenes</h2>
      </div>

      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={stagger}
        // Ultra-tight gap (gap-2) creates a premium "moodboard" look
        className="grid grid-cols-2 md:grid-cols-12 gap-2"
      >
        {aboutData.gridImages.map((img) => (
          <motion.div 
            key={img.id} 
            variants={fadeUp}
            // Minimalist rounded-lg for sharp, tailored edges
            className={`${img.classes} overflow-hidden rounded-lg relative group bg-zinc-200`}
          >
            <img
              src={img.src}
              alt={img.alt}
              sizes={img.sizes}
              // Grayscale by default, fading into color on hover for a dramatic effect
              className="object-cover w-full h-full absolute inset-0 transition-all duration-700 ease-[0.25,1,0.5,1] grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}