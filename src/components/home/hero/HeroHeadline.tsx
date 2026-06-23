"use client";

import { motion } from "framer-motion";

const headlineAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    delay: 0.1,
    ease: [0.25, 1, 0.5, 1] as const,
  },
};

export default function HeroHeadline() {
  return (
    <motion.h1
      {...headlineAnimation}
      className="text-[16vw] sm:text-[12vw] md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-black leading-[0.95] tracking-tighter text-center text-black mb-8 relative z-10 w-full flex flex-col gap-1 md:gap-0 md:block"
    >
      {/* Mobile View */}
      <span className="md:hidden">Kerala&apos;s</span>
      <span className="md:hidden">First AI</span>
      <span className="md:hidden">Strategic</span>
      <span className="md:hidden text-[#6748FE]">Branding</span>
      <span className="md:hidden text-[#6748FE]">Curator.</span>

      {/* Desktop View */}
      <span className="hidden md:inline">Kerala&apos;s First AI</span>
      <br className="hidden md:block" />

      <span className="hidden md:inline">
        Strategic <span className="text-[#6748FE]">Branding</span>
      </span>

      <br className="hidden md:block" />

      <span className="hidden md:inline text-[#6748FE]">
        Curator.
      </span>
    </motion.h1>
  );
}



// "use client";
// import { motion, Variants } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const itemVariants:Variants = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
// };

// export default function HeroHeadline() {
//   return (
//     <motion.div
//       variants={containerVariants}
//       initial="hidden"
//       animate="show"
//       className="flex flex-col items-start text-left space-y-6 lg:space-y-8"
//     >
//       {/* Eyebrow */}
//       <motion.div variants={itemVariants} className="relative px-4 py-2 rounded-full bg-gradient-to-r from-[#6748FE]/20 to-transparent shadow-lg border border-[#6748FE]/30 backdrop-blur-sm">
//         <span className="text-white text-sm font-medium tracking-wide relative z-10">
//           ✨ Kerala's First AI Strategic Branding Curator
//         </span>
//         <span className="absolute inset-0 rounded-full blur-md bg-[#6748FE]/40 animate-pulse"></span>
//       </motion.div>

//       {/* Main Headline */}
//       <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
//         Precision of <span className="relative inline-block">
//           <span className="relative z-10">AI</span>
//           <span className="absolute inset-0 blur-sm bg-[#6748FE]/70 animate-pulse"></span>
//         </span>. <span className="font-serif italic font-normal text-gray-300">Soul</span> of Human Creativity.
//       </motion.h1>

//       {/* Sub-headline */}
//       <motion.p variants={itemVariants} className="text-base sm:text-lg text-gray-400 max-w-lg">
//         We architect personal and business brands that connect, inspire, and grow. Stop guessing. Start making data-backed, mathematically optimized branding decisions.
//       </motion.p>

//       {/* CTAs */}
//       <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
//         <button className="px-8 py-3 bg-[#6748FE] text-white font-semibold rounded-lg shadow-lg hover:bg-[#5a3ce0] transition-colors duration-300">
//           Curate My Brand
//         </button>
//         <a href="#" className="flex items-center text-[#6748FE] font-semibold hover:text-[#5a3ce0] transition-colors duration-300">
//           View Our Curation <ArrowUpRight className="ml-2 w-5 h-5" />
//         </a>
//       </motion.div>
//     </motion.div>
//   );
// }