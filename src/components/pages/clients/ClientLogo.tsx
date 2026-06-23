// "use client";

// import { motion } from "framer-motion";

// interface ClientProps {
//   client: {
//     id: string | number;
//     name: string;
//     svg: React.ReactNode;
//   };
// }

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const },
//   },
// };

// export default function ClientLogo({ client }: ClientProps) {
//   return (
//     <motion.div
//       variants={fadeUp}
//       className="group flex flex-col items-center justify-center p-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
//     >
//       <div className="flex flex-col items-center gap-4 text-black group-hover:text-[#6748FE] transition-colors duration-500">
//         <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 24 24">
//           {client.svg}
//         </svg>
//         <span className="text-xs md:text-sm font-bold tracking-widest uppercase">
//           {client.name}
//         </span>
//       </div>
//     </motion.div>
//   );
// }





"use client";

import { motion } from "framer-motion";

interface ClientProps {
  client: {
    id: string | number;
    name: string;
    svg: React.ReactNode;
  };
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] as const } },
};

export default function ClientLogo({ client }: ClientProps) {
  return (
    <motion.div
      variants={fadeUp}
      // bg-white ensures the 1px grid gap trick works perfectly
      className="group flex flex-col items-center justify-center p-8 md:p-12 bg-white hover:bg-zinc-50 transition-colors duration-500 w-full h-full aspect-square md:aspect-[4/3] cursor-default"
    >
      <div className="flex flex-col items-center gap-4 text-zinc-300 group-hover:text-black transition-colors duration-500">
        <svg 
          className="w-14 h-14 md:w-16 md:h-16 transform group-hover:scale-110 transition-transform duration-500 ease-out" 
          viewBox="0 0 24 24"
        >
          {client.svg}
        </svg>
        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
          {client.name}
        </span>
      </div>
    </motion.div>
  );
}