// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence, Variants } from "framer-motion";
// import Link from "next/link";
// import { ChevronDown, X } from "lucide-react";
// import { mobileNavLinks } from "@/src/data/navbar.data";

// interface MobileNavProps {
//   isOpen: boolean;
//   setIsOpen: (isOpen: boolean) => void;
// }

// // Menu slides down from the top of the screen
// const menuVariants: Variants = {
//   closed: {
//     y: "-100%",
//     transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
//   },
//   open: {
//     y: 0,
//     transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
//   },
// };

// const linkVariants: Variants = {
//   closed: { y: 20, opacity: 0 },
//   open: (i: number) => ({
//     y: 0,
//     opacity: 1,
//     transition: {
//       delay: 0.1 + i * 0.05,
//       duration: 0.4,
//       ease: "easeOut",
//     },
//   }),
// };

// const submenuVariants: Variants = {
//   closed: {
//     height: 0,
//     opacity: 0,
//     transition: { duration: 0.3, ease: "easeInOut" },
//   },
//   open: {
//     height: "auto",
//     opacity: 1,
//     transition: { duration: 0.3, ease: "easeInOut" },
//   },
// };

// export default function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
//   const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

//   const handleMenuClick = (
//     menuName: string,
//     hasSubLinks: boolean,
//     e: React.MouseEvent,
//   ) => {
//     if (hasSubLinks) {
//       e.preventDefault();
//       setExpandedMenu(expandedMenu === menuName ? null : menuName);
//     } else {
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
//           // Absolute full screen, solid white background
//           className="fixed inset-0 z-50 bg-white flex flex-col overflow-hidden"
//         >
//           {/* Mock Header area to match site header height & hold Close button */}
//           <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
//             <span className="text-lg font-bold text-gray-900">Menu</span>
//             <button
//               onClick={() => setIsOpen(false)}
//               className="p-2 -mr-2 text-gray-600 hover:text-black transition-colors rounded-full hover:bg-gray-50"
//               aria-label="Close menu"
//             >
//               <X className="w-6 h-6" />
//             </button>
//           </div>

//           {/* Scrollable List Area */}
//           <nav className="flex-1 overflow-y-auto px-6 py-6">
//             <ul className="flex flex-col w-full">
//               {mobileNavLinks.map((link, i) => {
//                 const hasSubLinks = !!link.subLinks && link.subLinks.length > 0;
//                 const isExpanded = expandedMenu === link.name;

//                 return (
//                   <motion.li
//                     key={link.name}
//                     custom={i}
//                     variants={linkVariants}
//                     initial="closed"
//                     animate="open"
//                     exit="closed"
//                     className="w-full border-b border-gray-100 last:border-none flex flex-col"
//                   >
//                     <Link
//                       href={link.href}
//                       onClick={(e) =>
//                         handleMenuClick(link.name, hasSubLinks, e)
//                       }
//                       className="group flex items-center justify-between w-full py-5 text-lg font-medium text-gray-900 hover:text-[#6748FE] transition-colors"
//                     >
//                       <span>{link.name}</span>

//                       {hasSubLinks && (
//                         <ChevronDown
//                           className={`w-5 h-5 transition-transform duration-300 ${
//                             isExpanded
//                               ? "rotate-180 text-[#6748FE]"
//                               : "text-gray-400 group-hover:text-[#6748FE]"
//                           }`}
//                         />
//                       )}
//                     </Link>

//                     {/* Submenu Accordion */}
//                     {hasSubLinks && (
//                       <AnimatePresence>
//                         {isExpanded && (
//                           <motion.div
//                             variants={submenuVariants}
//                             initial="closed"
//                             animate="open"
//                             exit="closed"
//                             className="w-full overflow-hidden"
//                           >
//                             <div className="flex flex-col gap-0 pb-5 pl-4 border-l-2 border-gray-100 ml-2 mt-1">
//                               {link.subLinks.map((subItem: any) => (
//                                 <Link
//                                   key={subItem.name}
//                                   href={subItem.href}
//                                   onClick={() => setIsOpen(false)}
//                                   className="text-base text-gray-600 hover:text-[#6748FE] py-3 px-4 rounded-md transition-colors"
//                                 >
//                                   {subItem.name}
//                                 </Link>
//                               ))}
//                             </div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     )}
//                   </motion.li>
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
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { mobileNavLinks } from "@/src/data/navbar.data";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const menuVariants: Variants = {
  closed: {
    y: "-100%",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  open: {
    y: 0,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

const linkVariants: Variants = {
  closed: { y: 20, opacity: 0 },
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1 + i * 0.05,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const submenuVariants: Variants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
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
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          // Starts below the navbar (adjust top-20 to your navbar's height, e.g., top-16)
          // z-40 ensures it sits underneath your main navbar if your navbar is z-50
          className="fixed top-20 left-5 right-5 bottom-0 z-40 bg-white flex flex-col overflow-hidden shadow-xl"
        >
          {/* Scrollable List Area */}
          <nav className="flex-1 overflow-y-auto px-6 py-6 border-t border-gray-800">
            <ul className="flex flex-col w-full">
              {mobileNavLinks.map((link, i) => {
                const hasSubLinks = !!link.subLinks && link.subLinks.length > 0;
                const isExpanded = expandedMenu === link.name;

                return (
                  <motion.li
                    key={link.name}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="w-full border-b border-gray-100 last:border-none flex flex-col"
                  >
                    <Link
                      href={link.href}
                      onClick={(e) =>
                        handleMenuClick(link.name, hasSubLinks, e)
                      }
                      className="group flex items-center justify-between w-full py-5 text-lg font-medium text-gray-900 hover:text-[#6748FE] transition-colors"
                    >
                      <span>{link.name}</span>

                      {hasSubLinks && (
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${
                            isExpanded
                              ? "rotate-180 text-[#6748FE]"
                              : "text-gray-400 group-hover:text-[#6748FE]"
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
                            className="w-full overflow-hidden"
                          >
                            <div className="flex flex-col gap-0 pb-5 pl-4 border-l-2 border-gray-100 ml-2 mt-1">
                              {link.subLinks.map((subItem: any) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  onClick={() => setIsOpen(false)}
                                  className="text-base text-gray-600 hover:text-[#6748FE] py-3 px-4 rounded-md transition-colors"
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
                );
              })}
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}