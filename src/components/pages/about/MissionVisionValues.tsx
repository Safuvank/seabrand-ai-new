// "use client";

// import { aboutData } from "@/src/data/about.data";

// export default function MissionVisionValues() {
//   return (
    
//     <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 mb-24 md:mb-32 flex flex-col gap-24 lg:gap-32 py-10">
      
//       {/* Mission: Text Left, Image Right */}
//       <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
//         <div className="w-full lg:w-1/2 flex flex-col lg:pr-8 order-2 lg:order-1">
//           <div className="w-12 h-[2px] bg-black mb-5"></div>
//           <h3 className="text-3xl md:text-4xl font-bold text-[#6748FE] mb-6">{aboutData.mission.title}</h3>
//           <p className="text-lg text-zinc-700 leading-relaxed ">{aboutData.mission.text}</p>
//         </div>
//         <div className="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-[450px] rounded-2xl overflow-hidden bg-zinc-200 order-1 lg:order-2">
//           <img src={aboutData.mission.image} alt={aboutData.mission.alt} className="object-cover w-full h-full absolute inset-0 " />
//         </div>
//       </div>

//       {/* Vision: Image Left, Text Right */}
//       <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
//         <div className="w-full lg:w-1/2 flex flex-col lg:pl-8 order-2 lg:order-1">
//           <div className="w-12 h-[2px] bg-black mb-5"></div>
//           <h3 className="text-3xl md:text-4xl font-bold text-[#6748FE] mb-6">{aboutData.vision.title}</h3>
//           <p className="text-lg text-zinc-700 leading-relaxed">{aboutData.vision.text}</p>
//         </div>
//         <div className="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-[450px] rounded-2xl overflow-hidden bg-zinc-200 order-1 lg:order-2">
//           <img src={aboutData.vision.image} alt={aboutData.vision.alt} className="object-cover w-full h-full absolute inset-0" />
//         </div>
//       </div>

//       {/* Values: Text Left, Image Right */}
//       {/* <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
//         <div className="w-full lg:w-1/2 flex flex-col lg:pr-8 order-2 lg:order-1">
//           <div className="w-12 h-[2px] bg-black mb-5"></div>
//           <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">{aboutData.values.title}</h3>
//           <ul className="text-lg text-zinc-700 leading-relaxed flex flex-col gap-4">
//             {aboutData.values.list.map((item, index) => (
//               <li key={index} className="flex items-start">
//                 <span className="text-black font-bold mr-2 mt-1">•</span>
//                 <span><strong className="text-black font-semibold">{item.name}:</strong> {item.desc}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-[450px] rounded-2xl overflow-hidden bg-zinc-200 order-1 lg:order-2">
//           <img src={aboutData.values.image} alt={aboutData.values.alt} className="object-cover w-full h-full absolute inset-0" />
//         </div>
//       </div> */}
//     </section>
//   );
// }









"use client";

import { motion } from "framer-motion";
import { aboutData } from "@/src/data/about.data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1]as const } },
};

export default function MissionVisionValues() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-24 md:mb-40">
      <div className="flex flex-col">
        
        {/* Mission: Architectural Row */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center border-t border-zinc-200 py-16"
        >
          {/* Text Left */}
          <div className="w-full lg:w-5/12 flex flex-col">
            <span className="text-[#6748FE] text-sm font-bold tracking-widest uppercase mb-4">Our Core Mission</span>
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-8 tracking-tight leading-tight">
              {aboutData.mission.title}
            </h3>
            <p className="text-xl text-zinc-600 leading-relaxed">
              {aboutData.mission.text}
            </p>
          </div>
          {/* Image Right (Sleek, minimal rounding) */}
          <div className="w-full lg:w-7/12 relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-200 group">
            <img 
              src={aboutData.mission.image} 
              alt={aboutData.mission.alt} 
              className="object-cover w-full h-full absolute inset-0 transition-transform duration-1000 group-hover:scale-105" 
            />
          </div>
        </motion.div>

        {/* Vision: Architectural Row */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-24 items-center border-t border-zinc-200 py-16"
        >
          {/* Text Right */}
          <div className="w-full lg:w-5/12 flex flex-col">
            <span className="text-[#6748FE] text-sm font-bold tracking-widest uppercase mb-4">The Vision</span>
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-8 tracking-tight leading-tight">
              {aboutData.vision.title}
            </h3>
            <p className="text-xl text-zinc-600 leading-relaxed">
              {aboutData.vision.text}
            </p>
          </div>
          {/* Image Left */}
          <div className="w-full lg:w-7/12 relative aspect-[4/3] rounded-xl overflow-hidden bg-zinc-200 group">
            <img 
              src={aboutData.vision.image} 
              alt={aboutData.vision.alt} 
              className="object-cover w-full h-full absolute inset-0 transition-transform duration-1000 group-hover:scale-105" 
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}