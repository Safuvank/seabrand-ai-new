

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