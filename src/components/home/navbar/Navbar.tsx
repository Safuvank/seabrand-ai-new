"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown, X } from "lucide-react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 bg-white/20 backdrop-blur-lg border border-white shadow-[0_5px_30px_rgba(0,0,0,0.15)] text-black rounded-2xl">
        <div className="flex items-center justify-between py-4 px-6 md:px-8">
          {/* Logo */}
          <div className="flex items-center justify-between py-1">
            <Image
              src="/images/seabrand_logo.png"
              alt="Seabrand Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>

          {/* Desktop Navigation Component */}
          <DesktopNav />

          {/* Right Side (Language & Contact) */}
          <div className="hidden md:flex items-center gap-6">
            <button className="flex items-center gap-1 text-sm font-medium hover:text-[#6748FE] transition-colors">
              <Globe className="w-4 h-4" />
              <span>En</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            <Link
              href="/contact"
              className="group relative overflow-hidden bg-black px-6 py-2 text-sm font-medium rounded-xl shadow-lg"
            >
              <span className="absolute inset-0 bg-[#6748FE] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1] z-0" />
              <span className="relative z-10 text-white transition-colors duration-500">
                Contact Us
              </span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden group relative flex items-center justify-center w-10 h-10 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                >
                  <X className="w-8 h-8 text-black" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-1.5">
                    <span className="block w-6 h-0.5 bg-black"></span>
                    <span className="block w-6 h-0.5 bg-black"></span>
                    <span className="block w-6 h-0.5 bg-black"></span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Component */}
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
