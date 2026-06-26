// "use client";

// import RevolutionBackground from "./RevolutionBackground";
// import RevolutionHeader from "./RevolutionHeader";
// import RevolutionStatsGrid from "./RevolutionStatsGrid";

// export default function StrategicRevolution() {
//   return (
//     <section
//       className="py-24 md:py-40 bg-[#050505] relative overflow-hidden"
//       id="impact"
//     >
//       {/* 1. Background Elements */}
//       <RevolutionBackground />

//       {/* 2. Main Content Container */}
//       <div className="container-custom mx-auto px-4 sm:px-6 relative z-10">
//         <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
//           <RevolutionHeader />
          
//           <RevolutionStatsGrid />
          
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import RevolutionBackground from "./RevolutionBackground";
import RevolutionHeader from "./RevolutionHeader";
import RevolutionStatsGrid from "./RevolutionStatsGrid";

export default function StrategicRevolution() {
  return (
    <section
      className="py-24 md:py-20 bg-[#050505] relative overflow-hidden w-full"
      id="impact"
    >
      {/* 1. Background Elements */}
      <RevolutionBackground />

      {/* ✅ FIXED: Universal Container applied */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          <RevolutionHeader />
          
          <RevolutionStatsGrid />
          
        </div>
      </div>
    </section>
  );
}