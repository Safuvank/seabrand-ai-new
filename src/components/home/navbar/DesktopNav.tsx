"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { navLinks } from "@/src/data/navbar.data";

export default function DesktopNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
      {navLinks.map((link) => (
        <div
          key={link.name}
          className="relative group"
          onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
          onMouseLeave={() => link.subLinks && setActiveDropdown(null)}
        >
          <Link href={link.href} className="group flex items-center gap-1 py-2">
            {/* The Rolling Text Container */}
            <div className="relative overflow-hidden inline-flex">
              <span className="block transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:translate-y-full">
                {link.name}
              </span>
              <span className="absolute inset-0 block transition-transform duration-500 ease-[0.76,0,0.24,1] -translate-y-full group-hover:translate-y-0 text-[#6748FE]">
                {link.name}
              </span>
            </div>

            {link.subLinks && (
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === link.name ? "rotate-180 text-[#6748FE]" : "text-black group-hover:text-[#6748FE]"
                }`}
              />
            )}
          </Link>

          {/* Desktop Dropdown Menu (Glass Effect) */}
          {link.subLinks && (
            <AnimatePresence>
              {activeDropdown === link.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-48 z-50"
                >
                  <div className="bg-white/70 backdrop-blur-xl rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/40 overflow-hidden flex flex-col p-2">
                    <ul className="flex flex-col w-full">
                      {link.subLinks.map((subItem) => (
                        <li key={subItem.name} className="w-full">
                          <Link
                            href={subItem.href}
                            className="group/sub block w-full px-4 py-2.5 text-sm font-medium text-gray-800 hover:bg-white/50 rounded-lg transition-colors"
                          >
                            {/* Sub-link Rolling Text */}
                            <div className="relative overflow-hidden inline-flex">
                              <span className="block transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover/sub:translate-y-full">
                                {subItem.name}
                              </span>
                              <span className="absolute inset-0 block transition-transform duration-500 ease-[0.76,0,0.24,1] -translate-y-full group-hover/sub:translate-y-0 text-[#6748FE]">
                                {subItem.name}
                              </span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      ))}
    </nav>
  );
}