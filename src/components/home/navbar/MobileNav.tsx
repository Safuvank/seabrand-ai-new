// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";
// import { mobileNavLinks } from "@/src/data/navbar.data";

// interface MobileNavProps {
//   isOpen: boolean;
//   setIsOpen: (isOpen: boolean) => void;
// }

// const menuVariants = {
//   closed: {
//     opacity: 0,
//     clipPath: "circle(0% at right top)",
//     transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const },
//   },
//   open: {
//     opacity: 1,
//     clipPath: "circle(150% at right top)",
//     transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as const },
//   },
// };

// const linkVariants = {
//   closed: { y: 50, opacity: 0 },
//   open: (i: number) => ({
//     y: 0,
//     opacity: 1,
//     transition: {
//       delay: 0.1 * i + 0.2,
//       duration: 0.6,
//       ease: [0.33, 1, 0.68, 1] as const,
//     },
//   }),
// };

// export default function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial="closed"
//           animate="open"
//           exit="closed"
//           variants={menuVariants}
//           className="fixed inset-0 z-40 bg-white/70 backdrop-blur-2xl flex flex-col justify-center items-center md:hidden overflow-y-auto"
//         >
//           <nav className="w-full px-8 py-20">
//             <ul className="flex flex-col gap-3 items-center w-full">
//               {mobileNavLinks.map((link, i) => (
//                 <div key={link.name} className="overflow-visible">
//                   <motion.li
//                     custom={i}
//                     variants={linkVariants}
//                     initial="closed"
//                     animate="open"
//                     exit="closed"
//                   >
//                     <Link
//                       href={link.href}
//                       onClick={() => setIsOpen(false)}
//                       className="group relative inline-block text-4xl font-bold text-black tracking-tight py-2"
//                     >
//                       {/* Mobile Rolling Text */}
//                       <div className="relative overflow-hidden inline-flex">
//                         <span className="block transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:translate-y-full">
//                           {link.name}
//                         </span>
//                         <span className="absolute inset-0 block transition-transform duration-500 ease-[0.76,0,0.24,1] -translate-y-full group-hover:translate-y-0 text-[#6748FE]">
//                           {link.name}
//                         </span>
//                       </div>

//                       <ArrowUpRight className="absolute -right-10 top-2 w-8 h-8 opacity-0 -translate-x-2 translate-y-2 transition-all duration-500 ease-[0.76,0,0.24,1] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[#6748FE]" />
//                     </Link>
//                   </motion.li>
//                 </div>
//               ))}
//             </ul>
//           </nav>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
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

const submenuVariants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1]as const },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1]as const },
  },
};

export default function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  // State to track which menu accordion is currently open
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const handleMenuClick = (
    menuName: string,
    hasSubLinks: boolean,
    e: React.MouseEvent,
  ) => {
    if (hasSubLinks) {
      // Prevent navigation and toggle accordion instead
      e.preventDefault();
      setExpandedMenu(expandedMenu === menuName ? null : menuName);
    } else {
      // If no sublinks, close the whole mobile menu
      setIsOpen(false);
    }
  };

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
          <nav className="w-full px-8 py-24">
            <ul className="flex flex-col gap-4 items-center w-full">
              {mobileNavLinks.map((link, i) => {
                // Check if this link has submenus (assumes your data structure mirrors navLinks)
                const hasSubLinks = !!link.subLinks && link.subLinks.length > 0;
                const isExpanded = expandedMenu === link.name;

                return (
                  <div
                    key={link.name}
                    className="flex flex-col items-center w-full overflow-hidden"
                  >
                    <motion.li
                      custom={i}
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="w-full flex flex-col items-center"
                    >
                      <Link
                        href={link.href}
                        onClick={(e) =>
                          handleMenuClick(link.name, hasSubLinks, e)
                        }
                        className="group relative flex items-center justify-center gap-2 text-4xl font-bold text-black tracking-tight py-2"
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

                        {/* Chevron for Submenus or Arrow for Direct Links */}
                        {hasSubLinks ? (
                          <ChevronDown
                            className={`w-8 h-8 transition-transform duration-500 ease-[0.76,0,0.24,1] ${
                              isExpanded
                                ? "rotate-180 text-[#6748FE]"
                                : "text-black group-hover:text-[#6748FE]"
                            }`}
                          />
                        ) : (
                          <ArrowUpRight className="absolute -right-10 top-2 w-8 h-8 opacity-0 -translate-x-2 translate-y-2 transition-all duration-500 ease-[0.76,0,0.24,1] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[#6748FE]" />
                        )}
                      </Link>

                      {/* Submenu Accordion */}
                      {hasSubLinks && (
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              variants={submenuVariants}
                              initial="closed"
                              animate="open"
                              exit="closed"
                              className="overflow-hidden w-full flex flex-col items-center mt-2"
                            >
                              <div className="flex flex-col items-center gap-3 py-4 border-t border-black/10 w-3/4">
                                {link.subLinks.map((subItem: any) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl font-medium text-gray-700 hover:text-[#6748FE] transition-colors py-1"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </motion.li>
                  </div>
                );
              })}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
