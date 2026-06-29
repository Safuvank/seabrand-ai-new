// "use client";

// import { motion } from "framer-motion";

// const headlineAnimation = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   transition: {
//     duration: 0.8,
//     delay: 0.1,
//     ease: [0.25, 1, 0.5, 1] as const,
//   },
// };

// export default function HeroHeadline() {
//   return (
//     <motion.h1
//       {...headlineAnimation}
//       className="text-[16vw] sm:text-[12vw] md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-black leading-[0.95] tracking-tighter text-center text-black mb-8 relative z-10 w-full flex flex-col gap-1 md:gap-0 md:block"
//     >
//       {/* Mobile View */}
//       <span className="md:hidden">Kerala&apos;s</span>
//       <span className="md:hidden">First AI</span>
//       <span className="md:hidden">Strategic</span>
//       <span className="md:hidden text-[#6748FE]">Branding</span>
//       <span className="md:hidden text-[#6748FE]">Curator.</span>

//       {/* Desktop View */}
//       <span className="hidden md:inline">Kerala&apos;s First AI</span>
//       <br className="hidden md:block" />

//       <span className="hidden md:inline">
//         Strategic <span className="text-[#6748FE]">Branding</span>
//       </span>

//       <br className="hidden md:block" />

//       <span className="hidden md:inline text-[#6748FE]">
//         Curator.
//       </span>
//     </motion.h1>
//   );
// }


// "use client";

// import { motion } from "framer-motion";

// const headlineAnimation = {
//   initial: { opacity: 0, y: 40 },
//   animate: { opacity: 1, y: 0 },
//   transition: {
//     duration: 1,
//     delay: 0.3,
//     ease: [0.21, 0.47, 0.32, 0.98], // Custom sleek easing
//   },
// };

// export default function HeroHeadline() {
//   return (
//     <motion.h1
//       {...headlineAnimation}
//       className="text-[15vw] sm:text-[11vw] md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-black leading-[0.9] tracking-tighter text-center text-neutral-900 relative z-10 w-full flex flex-col gap-1 md:gap-0 md:block"
//     >
//       {/* Mobile View */}
//       <span className="md:hidden">Kerala&apos;s</span>
//       <span className="md:hidden">First AI</span>
//       <span className="md:hidden">Strategic</span>
//       <span className="md:hidden text-transparent bg-clip-text bg-gradient-to-r from-[#6748FE] to-[#9b85ff]">Branding</span>
//       <span className="md:hidden text-transparent bg-clip-text bg-gradient-to-r from-[#6748FE] to-[#9b85ff]">Curator.</span>

//       {/* Desktop View */}
//       <span className="hidden md:inline">Kerala&apos;s First AI</span>
//       <br className="hidden md:block" />

//       <span className="hidden md:inline">
//         Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6748FE] to-[#9b85ff]">Branding</span>
//       </span>

//       <br className="hidden md:block" />

//       <span className="hidden md:inline text-transparent bg-clip-text bg-gradient-to-r from-[#6748FE] to-[#9b85ff] pb-2">
//         Curator.
//       </span>
//     </motion.h1>
//   );
// }


"use client";

import { motion } from "framer-motion";

const headlineAnimation = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 1,
    delay: 0.3,
    ease: [0.21, 0.47, 0.32, 0.98] as const, // <-- ADD 'as const' HERE
  },
};

export default function HeroHeadline() {
  return (
    <motion.h1
      {...headlineAnimation}
      className="text-[15vw] sm:text-[11vw] md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-black leading-[0.9] tracking-tighter text-center text-neutral-900 relative z-10 w-full flex flex-col gap-1 md:gap-0 md:block"
    >
      {/* Mobile View */}
      <span className="md:hidden">Kerala&apos;s</span>
      <span className="md:hidden">First AI</span>
      <span className="md:hidden">Strategic</span>
      <span className="md:hidden text-transparent bg-clip-text bg-gradient-to-r from-[#6748FE] to-[#9b85ff]">Branding</span>
      <span className="md:hidden text-transparent bg-clip-text bg-gradient-to-r from-[#6748FE] to-[#9b85ff]">Curator.</span>

      {/* Desktop View */}
      <span className="hidden md:inline">Kerala&apos;s First AI</span>
      <br className="hidden md:block" />

      <span className="hidden md:inline">
        Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6748FE] to-[#9b85ff]">Branding</span>
      </span>

      <br className="hidden md:block" />

      <span className="hidden md:inline text-transparent bg-clip-text bg-gradient-to-r from-[#6748FE] to-[#9b85ff] pb-2">
        Curator.
      </span>
    </motion.h1>
  );
}