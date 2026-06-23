// "use client";

// import ExpertiseBackground from "./ExpertiseBackground";
// import ExpertiseHeader from "./ExpertiseHeader";
// import ExpertiseGrid from "./ExpertiseGrid";

// export default function ExpertiseSection() {
//   return (
//     <section className="pt-20 bg-[#050505] relative overflow-hidden">
      
//       {/* 1. Background Elements */}
//       <ExpertiseBackground />

//       {/* 2. Main Content Container */}
//       <div className="container-custom mx-auto px-6 relative z-10 pb-32">
        
//         <ExpertiseHeader />
        
//         <ExpertiseGrid />

//       </div>
//     </section>
//   );
// }


"use client";

import ExpertiseBackground from "./ExpertiseBackground";
import ExpertiseHeader from "./ExpertiseHeader";
import ExpertiseGrid from "./ExpertiseGrid";

export default function ExpertiseSection() {
  return (
    <section className="pt-20 bg-[#050505] relative overflow-hidden w-full">
      
      {/* 1. Background Elements */}
      <ExpertiseBackground />

      {/* ✅ FIXED: Universal Container applied (kept the pb-32 for bottom spacing) */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 pb-32">
        
        <ExpertiseHeader />
        
        <ExpertiseGrid />

      </div>
    </section>
  );
}