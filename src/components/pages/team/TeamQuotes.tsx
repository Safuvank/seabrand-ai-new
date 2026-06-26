// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { team } from "@/src/data/team.data";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
//   },
// };

// export default function TeamQuotes() {
//   const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

//   // Auto-cycle through the quotes every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentQuoteIndex((prev) => (prev + 1) % team.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const activeQuote = team[currentQuoteIndex];

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
//       {/* LEFT SIDE: Static Header */}
//       <div className="lg:col-span-5 flex flex-col">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//         >
//           <div className="inline-block px-4 py-1.5 rounded-full bg-zinc-200/50 border border-zinc-200 text-sm font-semibold text-zinc-600 mb-6 uppercase tracking-wider w-fit">
//             Insights
//           </div>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1]">
//             Words from <br /> the <span className="text-[#6748FE]">Team</span>
//           </h2>
//           <p className="text-zinc-500 mt-6 text-lg leading-relaxed max-w-sm">
//             Discover the vision, passion, and purpose behind the creators shaping your brand&apos;s future.
//           </p>

//           {/* Pagination Dots */}
//           <div className="flex gap-2 mt-10">
//             {team.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentQuoteIndex(index)}
//                 className={`h-2 rounded-full transition-all duration-500 ${
//                   currentQuoteIndex === index
//                     ? "w-8 bg-[#6748FE]"
//                     : "w-2 bg-zinc-300 hover:bg-zinc-400"
//                 }`}
//                 aria-label={`Go to quote ${index + 1}`}
//               />
//             ))}
//           </div>
//         </motion.div>
//       </div>

//       {/* RIGHT SIDE: Auto-Sliding Card */}
//       <div className="lg:col-span-7 relative min-h-[300px] md:min-h-[250px]">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeQuote.name}
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -50 }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//             className="bg-white border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-xl shadow-zinc-200/50 flex flex-col"
//           >
//             {/* Decorative Quote Mark */}
//             <div className="mb-6 ">
//               <svg
//                 className="w-12 h-12 text-[#6748FE]/20"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
//               </svg>
//             </div>

//             {/* Quote Text */}
//             <p className="text-zinc-700 text-lg md:text-xl leading-relaxed italic flex-grow">
//               &quot;{activeQuote.quote || "Proud to shape the future of branding and digital experiences here at SeaBrand. We build with purpose and execute with precision."}&quot;
//             </p>

//             {/* Author Divider & Info */}
//             <div className="pt-6 border-t border-zinc-100 flex items-center gap-5">
//               <div className="relative w-14 h-14 rounded-full overflow-hidden bg-zinc-200 shrink-0">
//                 <Image
//                   src={activeQuote.image}
//                   alt={activeQuote.name}
//                   fill
//                   sizes="56px"
//                   className="object-cover"
//                 />
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold text-black tracking-tight mb-0.5">
//                   {activeQuote.name}
//                 </h4>
//                 <p className="text-[#6748FE] text-xs font-bold uppercase tracking-wider">
//                   {activeQuote.role}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { team } from "@/src/data/team.data";

export default function TeamQuotes() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % team.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const activeQuote = team[currentQuoteIndex];

  return (
    <div className="w-full bg-[#050505] text-white rounded-xl py-24 md:py-32 px-6 md:px-16 overflow-hidden relative border border-white/10">
      {/* Ambient Dark Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6748FE]/10 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        
        <p className="text-zinc-500 font-bold uppercase tracking-widest text-sm mb-12">
          Inside SeaBrand
        </p>

        {/* Massive Typography Quote */}
        <div className="min-h-[200px] md:min-h-[250px] flex items-center justify-center w-full mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuote.name}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.2] tracking-tight">
                "{activeQuote.quote || "Proud to shape the future of branding and digital experiences here at SeaBrand. We build with purpose and execute with precision."}"
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Author Avatar & Info */}
        <div className="flex flex-col items-center gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuote.name + "avatar"}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="relative w-20 h-20 rounded-full overflow-hidden bg-zinc-800 border border-white/10"
            >
              <Image
                src={activeQuote.image}
                alt={activeQuote.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeQuote.name + "text"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center"
            >
              <h4 className="text-xl font-bold tracking-tight mb-1">{activeQuote.name}</h4>
              <p className="text-[#6748FE] text-sm font-bold uppercase tracking-wider">{activeQuote.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimalist Pagination */}
        <div className="flex gap-3 mt-16">
          {team.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuoteIndex(index)}
              className={`h-1.5 rounded-xl transition-all duration-500 ${
                currentQuoteIndex === index ? "w-12 bg-[#6748FE]" : "w-4 bg-zinc-800 hover:bg-zinc-600"
              }`}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}