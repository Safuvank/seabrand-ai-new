"use client";

import { motion, AnimatePresence } from "framer-motion";

// Define the shape of your service data based on your usage
interface ServiceItem {
  number: string | number;
  rightTitle: string;
  rightDesc: string;
  dynamicTitle?: string;
}

export default function ServicesDisplay({ service }: { service: ServiceItem }) {
  return (
    <div className="flex flex-col relative border-t border-b border-zinc-800 py-16 lg:py-0 min-h-87.5 lg:min-h-112.5">
      {/* "AI Integrated" Badge */}
      <div className="absolute top-6 right-0 lg:top-5 text-white text-xs md:text-sm font-bold tracking-widest uppercase z-20 flex items-center gap-2 bg-[#0a0a0a]/50 backdrop-blur-sm py-1.5 px-3 rounded-full border border-zinc-800/80">
        ✨ AI Integrated
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={service.number}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.5 }}
          className="w-full h-full flex flex-col-reverse lg:flex-row items-start lg:items-end justify-between relative lg:pb-12"
        >
          {/* Small Title & Description (Bottom Left on Desktop) */}
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 relative z-10">
            <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-3">
              {service.rightTitle}
            </h4>
            <p className="text-zinc-400 text-base leading-relaxed max-w-sm">
              {service.rightDesc}
            </p>
          </div>

          {/* Massive Number (Top Right / Center Right) */}
          {/* Massive Number (Top Right / Center Right) */}
          <div className="absolute right-0 top-0 lg:top-1/2 lg:-translate-y-1/2 text-[10rem] md:text-[14rem] lg:text-[20rem] font-light leading-none text-white tracking-tighter select-none z-0 opacity-90">
            {service.number}{" "}
            {/* <-- Change service.id to service.number here */}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}




// "use client";

// import { motion, AnimatePresence } from "framer-motion";

// interface ServiceItem {
//   number: string | number;
//   rightTitle: string;
//   rightDesc: string;
//   dynamicTitle?: string;
// }

// export default function ServicesDisplay({ service }: { service: ServiceItem }) {
//   return (
//     <div className="flex flex-col relative w-full h-[500px] lg:h-[600px] rounded-3xl border border-zinc-800/60 bg-[#111111]/50 backdrop-blur-xl overflow-hidden p-8 md:p-12">
      
//       {/* "AI Integrated" Badge */}
//       <div className="absolute top-8 right-8 text-[#9b85ff] text-xs font-bold tracking-widest uppercase z-20 flex items-center gap-2 bg-[#6748FE]/10 py-2 px-4 rounded-full border border-[#6748FE]/20 shadow-[0_0_15px_rgba(103,72,254,0.15)]">
//         {/* <span className="relative flex h-2 w-2">
//           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9b85ff] opacity-75"></span>
//           <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6748FE]"></span>
//         </span> */}
//         ✨ AI Integrated
//       </div>

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={service.number}
//           initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
//           animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//           exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           className="w-full h-full flex flex-col justify-end relative z-10"
//         >
//           {/* Detailed Content */}
//           <div className="max-w-md bg-black/40 p-6 md:p-8 rounded-2xl border border-white/5 backdrop-blur-md">
//             <h4 className="text-white text-lg md:text-xl font-bold uppercase tracking-widest mb-4 flex items-center gap-3">
//               <span className="text-[#6748FE]">/</span> {service.rightTitle}
//             </h4>
//             <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
//               {service.rightDesc}
//             </p>
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Massive Background Number with Outline/Stroke effect */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={`bg-${service.number}`}
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 1.1 }}
//           transition={{ duration: 0.7, ease: "easeInOut" }}
//           className="absolute right-[-5%] top-[-10%] lg:top-[10%] text-[15rem] md:text-[22rem] lg:text-[28rem] font-black leading-none select-none pointer-events-none z-0"
//           style={{ 
//             color: "transparent", 
//             WebkitTextStroke: "2px rgba(255, 255, 255, 0.04)" // This gives it that modern hollow architectural look
//           }}
//         >
//           {service.number}
//         </motion.div>
//       </AnimatePresence>
      
//     </div>
//   );
// }