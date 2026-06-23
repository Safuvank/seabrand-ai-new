// "use client";

// import { motion } from "framer-motion";

// export default function HeroVisualizer() {
//   return (
//     <div className="relative w-full h-full rounded-[2.5rem] bg-gradient-to-br from-[#6748FE]/5 to-transparent border border-[#6748FE]/10 flex items-center justify-center overflow-hidden">
      
//       {/* TODO: Mount your <Canvas> (React Three Fiber) or <Spline> scene here.
//         Ensure your 3D canvas has absolute positioning or w-full h-full to fill this container.
//       */}

//       {/* Placeholder Interactive Element (Remove when 3D is added) */}
//       <div className="absolute inset-0 flex items-center justify-center group cursor-crosshair">
        
//         {/* Simulating the "Data Points" (AI) to "Fluid Wave" (Human) concept */}
//         <motion.div
//           initial={{ borderRadius: "20%" }}
//           whileHover={{ 
//             borderRadius: "50%",
//             scale: 1.1,
//             rotate: 90,
//             backgroundColor: "rgba(103, 72, 254, 0.2)"
//           }}
//           transition={{ duration: 0.8, type: "spring" }}
//           className="w-48 h-48 md:w-64 md:h-64 border-[0.5px] border-[#6748FE]/30 bg-[#6748FE]/5 backdrop-blur-md flex items-center justify-center transition-all duration-700 ease-in-out relative"
//         >
//           {/* Inner Core */}
//           <div className="w-16 h-16 rounded-full bg-[#6748FE] animate-pulse shadow-[0_0_40px_rgba(103,72,254,0.6)]" />
          
//           {/* Decorative Grid/Data points */}
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiM2NzQ4RkUiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-50 transition-opacity group-hover:opacity-0" />
//         </motion.div>

//         <p className="absolute bottom-6 text-[#6748FE]/60 text-sm font-mono tracking-widest uppercase text-center w-full pointer-events-none transition-opacity group-hover:opacity-0">
//           [ 3D Canvas Mount Point ]
//         </p>

//       </div>
//     </div>
//   );
// }




// "use client";
// import { motion } from "framer-motion";

// export default function HeroVisualizer() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
//       className="relative w-full h-full min-h-[300px] bg-gradient-to-br from-[#6748FE]/20 to-transparent rounded-lg flex items-center justify-center overflow-hidden p-4"
//     >
//       <div className="absolute inset-0 rounded-lg border-2 border-[#6748FE]/50 animate-pulse"></div>
//       <div className="text-white text-center text-lg font-semibold z-10">
//         Interactive 3D Visualizer Placeholder
//         <p className="text-sm text-gray-300 mt-2">Hook into Spline/Three Fiber here</p>
//         <div className="w-24 h-24 rounded-full bg-[#6748FE]/50 blur-xl absolute top-1/4 left-1/4 animate-blob"></div>
//         <div className="w-32 h-32 rounded-full bg-[#9b85ff]/40 blur-xl absolute bottom-1/4 right-1/4 animate-blob animation-delay-2000"></div>
//       </div>
//     </motion.div>
//   );
// }