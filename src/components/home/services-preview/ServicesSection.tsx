

"use client";

import { useState, useEffect } from "react";
import { servicesData } from "@/src/data/services.data";
import ServicesTitle from "./ServicesTitle";
import ServicesDisplay from "./ServicesDisplay";

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-cycle through the services every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % servicesData.services.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentService = servicesData.services[currentIndex];

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] text-white overflow-hidden w-full">
      {/* ✅ FIXED: Applied the Universal Container classes here */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-stretch">
          
          {/* Left Component */}
          <ServicesTitle dynamicTitle={currentService.dynamicTitle} />

          {/* Right Component */}
          <ServicesDisplay service={currentService} />
          
        </div>
        
      </div>
    </section>
  );
}




// "use client";

// import { useState, useEffect, useRef } from "react";
// import { servicesData } from "@/src/data/services.data";
// import ServicesSidebar from "./ServiceSidebar";
// import ServicesDisplay from "./ServicesDisplay";

// export default function ServicesSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const timerRef = useRef<NodeJS.Timeout | null>(null);

//   // Auto-cycle through the services every 5 seconds (slightly slower for readability)
//   useEffect(() => {
//     if (isAutoPlaying) {
//       timerRef.current = setInterval(() => {
//         setCurrentIndex((prev) => (prev + 1) % servicesData.services.length);
//       }, 5000);
//     }
//     return () => {
//       if (timerRef.current) clearInterval(timerRef.current);
//     };
//   }, [isAutoPlaying]);

//   // When a user clicks, we stop the auto-play so they can read in peace
//   const handleManualSelect = (index: number) => {
//     setCurrentIndex(index);
//     setIsAutoPlaying(false);
//   };

//   const currentService = servicesData.services[currentIndex];

//   return (
//     <section className="py-24 md:py-32 bg-[#0a0a0a] text-white overflow-hidden w-full selection:bg-[#6748FE]/30">
//       <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
//         {/* Main Grid Layout: Changed to a 40/60 split for better visual weight */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
//           {/* Left Navigation (Takes up 5 columns on desktop) */}
//           <div className="lg:col-span-5 relative z-20">
//             <ServicesSidebar 
//               services={servicesData.services} 
//               currentIndex={currentIndex} 
//               onSelect={handleManualSelect} 
//             />
//           </div>

//           {/* Right Display Area (Takes up 7 columns on desktop) */}
//           <div className="lg:col-span-7 relative">
//             <ServicesDisplay service={currentService} />
//           </div>
          
//         </div>
//       </div>
//     </section>
//   );
// }