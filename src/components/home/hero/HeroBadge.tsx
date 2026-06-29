// "use client";

// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";

// const badgeAnimation = {
//   initial: { opacity: 0, scale: 0.5, rotate: -45 },
//   animate: { opacity: 1, scale: 1, rotate: 0 },
//   transition: {
//     duration: 0.8,
//     delay: 0.5,
//     type: "spring" as const,
//   },
// };

// export default function HeroBadge() {
//   return (
//     <motion.div
//       {...badgeAnimation}
//       className="relative flex w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full items-center justify-center z-30 mb-2 bg-gradient-to-br from-white/80 to-white/30 backdrop-blur-xl border border-[#6748FE]/10 shadow-[0_8px_32px_rgba(103,72,254,0.1)]"
//     >
//       <svg
//         viewBox="0 0 100 100"
//         overflow="visible"
//         className="w-full h-full will-change-transform animate-[spin_10s_linear_infinite]"
//       >
//         <path
//           id="circlePath"
//           d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
//           fill="none"
//         />
//         <text className="text-[10px] lg:text-[10.5px] font-bold uppercase tracking-[0.2em] fill-black">
//           <textPath href="#circlePath" startOffset="0%">
//             need a branding curation ? •
//           </textPath>
//         </text>
//       </svg>

//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <ArrowUpRight className="w-6 h-6 lg:w-8 lg:h-8 text-[#6748FE]" />
//       </div>
//     </motion.div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const badgeAnimation = {
  initial: { opacity: 0, scale: 0.8, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: {
    duration: 0.8,
    delay: 0.2,
    type: "spring",
    stiffness: 100,
    damping: 15,
  },
};

export default function HeroBadge() {
  return (
    <motion.div
      {...badgeAnimation}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full items-center justify-center z-30 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(103,72,254,0.08)] cursor-pointer group"
    >
      <svg
        viewBox="0 0 100 100"
        overflow="visible"
        className="w-full h-full will-change-transform animate-[spin_12s_linear_infinite]"
      >
        <path
          id="circlePath"
          d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
          fill="none"
        />
        <text className="text-[10.5px] font-bold uppercase tracking-[0.2em] fill-neutral-800">
          <textPath href="#circlePath" startOffset="0%">
            need a branding curation ? •
          </textPath>
        </text>
      </svg>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-10 h-10 rounded-full bg-[#6748FE]/10 flex items-center justify-center group-hover:bg-[#6748FE] transition-colors duration-300">
          <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6 text-[#6748FE] group-hover:text-white transition-colors duration-300" />
        </div>
      </div>
    </motion.div>
  );
}