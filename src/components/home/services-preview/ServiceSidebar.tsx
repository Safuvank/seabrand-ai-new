"use client";

import { motion } from "framer-motion";

interface ServiceItem {
  dynamicTitle: string;
  // include other properties as needed
}

interface ServicesSidebarProps {
  services: ServiceItem[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

export default function ServicesSidebar({ services, currentIndex, onSelect }: ServicesSidebarProps) {
  return (
    <div className="flex flex-col justify-start pr-0 lg:pr-8 sticky top-32">
      {/* Main Heading */}
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-12">
        <span className="block text-transparent bg-clip-text bg-gradient-to-br from-[#9b85ff] to-[#6748FE]">
          AI Strategic
        </span>
        {/* <span className="block text-white">Capabilities.</span> */}
      </h2>

      {/* Interactive Vertical Menu */}
      <div className="flex flex-col gap-1 relative border-l border-zinc-800 ml-2 pl-6">
        {services.map((service, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className={`relative text-left py-4 px-4 transition-all duration-300 rounded-r-lg group ${
                isActive ? "text-white" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {/* Animated Active Indicator (The sliding left border) */}
              {isActive && (
                <motion.div
                  layoutId="activeServiceIndicator"
                  className="absolute left-[-25px] top-0 bottom-0 w-[2px] bg-[#6748FE] z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <h3 className={`text-xl md:text-2xl font-semibold tracking-tight transition-transform duration-300 ${isActive ? "translate-x-2" : "group-hover:translate-x-1"}`}>
                {service.dynamicTitle}
              </h3>
            </button>
          );
        })}
      </div>
    </div>
  );
}