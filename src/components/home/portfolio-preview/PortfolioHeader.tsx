"use client";

import { motion } from "framer-motion";

export default function PortfolioHeader() {
  return (
    <div className="container-custom mx-auto px-4 md:px-12 relative z-10 mb-12 lg:mb-32 shrink-0 flex flex-col items-center justify-center text-center w-full">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        className="text-5xl md:text-6xl lg:text-6xl mb-15 font-bold text-white tracking-tight"
      >
        What We{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6748FE] to-[#9b85ff]">
          Curated.
        </span>
      </motion.h2>
    </div>
  );
}


// "use client";

// import { motion } from "framer-motion";

// export default function PortfolioHeader() {
//   return (
//     {/* ✅ FIXED: Changed lg:mb-32 to mb-12 so it stops pushing the cards down. Also applied the Universal Container classes! */}
//     <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 mb-12 shrink-0 flex flex-col items-start justify-center">
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
//         className="text-5xl md:text-6xl lg:text-6xl font-bold text-white tracking-tight"
//       >
//         What We{" "}
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6748FE] to-[#9b85ff]">
//           Curated.
//         </span>
//       </motion.h2>
//     </div>
//   );
// }