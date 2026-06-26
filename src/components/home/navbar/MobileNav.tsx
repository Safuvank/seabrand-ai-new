// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { ArrowUpRight, ChevronDown } from "lucide-react";
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

// const submenuVariants = {
//   closed: {
//     height: 0,
//     opacity: 0,
//     transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] as const },
//   },
//   open: {
//     height: "auto",
//     opacity: 1,
//     transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] as const },
//   },
// };

// export default function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
//   // State to track which menu accordion is currently open
//   const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

//   const handleMenuClick = (
//     menuName: string,
//     hasSubLinks: boolean,
//     e: React.MouseEvent,
//   ) => {
//     if (hasSubLinks) {
//       // Prevent navigation and toggle accordion instead
//       e.preventDefault();
//       setExpandedMenu(expandedMenu === menuName ? null : menuName);
//     } else {
//       // If no sublinks, close the whole mobile menu
//       setIsOpen(false);
//     }
//   };

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
//           <nav className="w-full px-8 py-24">
//             <ul className="flex flex-col gap-4 items-center w-full">
//               {mobileNavLinks.map((link, i) => {
//                 // Check if this link has submenus (assumes your data structure mirrors navLinks)
//                 const hasSubLinks = !!link.subLinks && link.subLinks.length > 0;
//                 const isExpanded = expandedMenu === link.name;

//                 return (
//                   <div
//                     key={link.name}
//                     className="flex flex-col items-center w-full overflow-hidden"
//                   >
//                     <motion.li
//                       custom={i}
//                       variants={linkVariants}
//                       initial="closed"
//                       animate="open"
//                       exit="closed"
//                       className="w-full flex flex-col items-center"
//                     >
//                       <Link
//                         href={link.href}
//                         onClick={(e) =>
//                           handleMenuClick(link.name, hasSubLinks, e)
//                         }
//                         className="group relative flex items-center justify-center gap-2 text-4xl font-bold text-black tracking-tight py-2"
//                       >
//                         {/* Mobile Rolling Text */}
//                         <div className="relative overflow-hidden inline-flex">
//                           <span className="block transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:translate-y-full">
//                             {link.name}
//                           </span>
//                           <span className="absolute inset-0 block transition-transform duration-500 ease-[0.76,0,0.24,1] -translate-y-full group-hover:translate-y-0 text-[#6748FE]">
//                             {link.name}
//                           </span>
//                         </div>

//                         {/* Chevron for Submenus or Arrow for Direct Links */}
//                         {hasSubLinks ? (
//                           <ChevronDown
//                             className={`w-8 h-8 transition-transform duration-500 ease-[0.76,0,0.24,1] ${
//                               isExpanded
//                                 ? "rotate-180 text-[#6748FE]"
//                                 : "text-black group-hover:text-[#6748FE]"
//                             }`}
//                           />
//                         ) : (
//                           <ArrowUpRight className="absolute -right-10 top-2 w-8 h-8 opacity-0 -translate-x-2 translate-y-2 transition-all duration-500 ease-[0.76,0,0.24,1] group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[#6748FE]" />
//                         )}
//                       </Link>

//                       {/* Submenu Accordion */}
//                       {hasSubLinks && (
//                         <AnimatePresence>
//                           {isExpanded && (
//                             <motion.div
//                               variants={submenuVariants}
//                               initial="closed"
//                               animate="open"
//                               exit="closed"
//                               className="overflow-hidden w-full flex flex-col items-center mt-2"
//                             >
//                               <div className="flex flex-col items-center gap-3 py-4 border-t border-black/10 w-3/4">
//                                 {link.subLinks.map((subItem: any) => (
//                                   <Link
//                                     key={subItem.name}
//                                     href={subItem.href}
//                                     onClick={() => setIsOpen(false)}
//                                     className="text-xl font-medium text-gray-700 hover:text-[#6748FE] transition-colors py-1"
//                                   >
//                                     {subItem.name}
//                                   </Link>
//                                 ))}
//                               </div>
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       )}
//                     </motion.li>
//                   </div>
//                 );
//               })}
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
import { ChevronDown, X } from "lucide-react";
import { mobileNavLinks } from "@/src/data/navbar.data";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

// Deep blur background fade
const backdropVariants = {
  closed: { opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.3 } },
  open: { opacity: 1, backdropFilter: "blur(12px)", transition: { duration: 0.4 } },
};

// Center modal scale-up
const modalVariants = {
  closed: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  open: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

const submenuVariants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

export default function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const handleMenuClick = (
    menuName: string,
    hasSubLinks: boolean,
    e: React.MouseEvent,
  ) => {
    if (hasSubLinks) {
      e.preventDefault();
      setExpandedMenu(expandedMenu === menuName ? null : menuName);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        // Fixed container centering the modal
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Dark blurred overlay */}
          <motion.div
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-900/30"
          />

          {/* Floating Glassmorphism Modal */}
          <motion.div
            variants={modalVariants}
            initial="closed"
            animate="open"
            exit="closed"
            // High border radius, glass effect, and subtle border
            className="relative w-full max-w-sm bg-white/80 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-[2rem] overflow-hidden flex flex-col max-h-[85vh]"
          >
            {/* Header / Close Button */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200/50">
              <span className="text-sm font-bold text-gray-800 tracking-wide">
                Menu
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 bg-gray-200/50 rounded-full hover:bg-gray-200 text-gray-600 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links Area */}
            <nav className="flex-1 overflow-y-auto px-4 py-4">
              <ul className="flex flex-col gap-1">
                {mobileNavLinks.map((link) => {
                  const hasSubLinks = !!link.subLinks && link.subLinks.length > 0;
                  const isExpanded = expandedMenu === link.name;

                  return (
                    <li key={link.name} className="flex flex-col">
                      <Link
                        href={link.href}
                        onClick={(e) =>
                          handleMenuClick(link.name, hasSubLinks, e)
                        }
                        // Pill shape on hover/active
                        className={`group flex items-center justify-between w-full px-4 py-3.5 rounded-2xl text-base font-semibold transition-colors duration-200 ${
                          isExpanded
                            ? "bg-white shadow-sm text-gray-900"
                            : "text-gray-700 hover:bg-white/60"
                        }`}
                      >
                        <span>{link.name}</span>

                        {hasSubLinks && (
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                              isExpanded ? "rotate-180 text-[#6748FE]" : "text-gray-400"
                            }`}
                          />
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
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col gap-1 pt-1 pb-3 px-4">
                                {link.subLinks.map((subItem: any) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    onClick={() => setIsOpen(false)}
                                    // Indented slightly with soft hover state
                                    className="text-sm text-gray-600 font-medium hover:text-[#6748FE] py-2.5 px-4 rounded-xl hover:bg-white/50 transition-colors"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}