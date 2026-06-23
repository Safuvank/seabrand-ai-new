// "use client";

// import { motion } from "framer-motion";
// import { servicesData } from "@/src/data/services.data";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
//   },
// };

// export default function ServicesHeader({
//   onOpenModal,
// }: {
//   onOpenModal: () => void;
// }) {
//   return (
//     <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">
//       {/* Left Text */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={fadeUp}
//         className="flex flex-col max-w-3xl"
//       >
//         <div className="inline-block px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-sm font-semibold text-zinc-600 w-fit mb-8 uppercase tracking-wider">
//           {servicesData.header.badge}
//         </div>
//         <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-[1.05] whitespace-pre-line">
//           AI Strategic
//           <br />
//           <span className="text-[#6748FE]">Powered Branding</span>
//         </h1>
//         <button
//           onClick={onOpenModal}
//           className="mt-5 group relative inline-flex items-center justify-center px-8 py-4 bg-black text-white font-bold rounded-xl overflow-hidden w-fit transition-transform hover:scale-105 duration-300"
//         >
//           <span className="relative z-10">Start a Project</span>

//           {/* 👇 Changed from w-0 to h-0, and pinned to bottom-0 left-0 */}
//           <div className="absolute bottom-0 left-0 w-full h-0 bg-[#6748FE] transition-all duration-300 ease-out group-hover:h-full z-0"></div>

//           <span className="absolute z-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             Start a Project
//           </span>
//         </button>
//       </motion.div>
//     </div>
//   );
// }


"use client";
import { motion } from "framer-motion";

export default function ServicesHeader() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-32">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
        <span className="text-[#6748FE] font-bold tracking-widest uppercase text-sm mb-6 block">Our Expertise</span>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.95] mb-10">
          We curate <br/> <span className="text-[#A899FF]">digital futures.</span>
        </h1>
        {/* <p className="text-2xl text-zinc-600 max-w-2xl leading-relaxed">
          From AI-driven branding to high-impact web experiences, we build the foundations for your brand’s long-term dominance.
        </p> */}
      </motion.div>
    </section>
  );
}



// "use client";

// import { motion } from "framer-motion";

// interface HeaderProps {
//   onOpenModal: () => void;
// }

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// };

// export default function ServicesHeader({onOpenModal}: HeaderProps) {
//   return (
//     <motion.section
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={staggerContainer}
//       className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-20 md:mb-32 pt-10"
//     >
//       <motion.div variants={fadeUp} className="max-w-4xl">
//         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-50 border border-zinc-200 text-sm font-semibold text-zinc-600 mb-8 tracking-wider">
//           Services
//         </div>
        
//         <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black leading-[0.95] mb-8">
//           AI Strategic <br className="hidden md:block" />
//           <span className="text-[#A899FF]">Powered Branding.</span>
//         </h1>
        
//         {/* Uncomment the paragraph if you want to include the description */}
//         {/* <motion.p variants={fadeUp} className="text-xl text-zinc-500 max-w-2xl leading-relaxed">
//           From AI-driven branding to high-impact web experiences, we build the foundations for your brand’s long-term dominance.
//         </motion.p> */}
//       </motion.div>
//     </motion.section>
//   );
// }





