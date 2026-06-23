"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { mobileNavLinks } from "@/src/data/navbar.data";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const menuVariants = {
  closed: {
    opacity: 0,
    clipPath: "circle(0% at right top)",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const },
  },
  open: {
    opacity: 1,
    clipPath: "circle(150% at right top)",
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const },
  },
};

const linkVariants = {
  closed: { y: 50, opacity: 0 },
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1 * i + 0.2,
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1] as const,
    },
  }),
};

export default function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-40 bg-white/70 backdrop-blur-2xl flex flex-col justify-center items-center md:hidden overflow-y-auto"
        >
          <nav className="w-full px-8 py-20">
            <ul className="flex flex-col gap-3 items-center w-full">
              {mobileNavLinks.map((link, i) => (
                <div key={link.name} className="overflow-visible">
                  <motion.li
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group relative inline-block text-4xl font-bold text-black tracking-tight py-2"
                    >
                      {/* Mobile Rolling Text */}
                      <div className="relative overflow-hidden inline-flex">
                        <span className="block transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:translate-y-full">
                          {link.name}
                        </span>
                        <span className="absolute inset-0 block transition-transform duration-500 ease-[0.76,0,0.24,1] -translate-y-full group-hover:translate-y-0 text-[#6748FE]">
                          {link.name}
                        </span>
                      </div>

                      <ArrowUpRight className="absolute -right-10 top-2 w-8 h-8 opacity-0 -translate-x-2 translate-y-2 transition-all duration-500 ease-[0.76,0,0.24,1] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[#6748FE]" />
                    </Link>
                  </motion.li>
                </div>
              ))}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}