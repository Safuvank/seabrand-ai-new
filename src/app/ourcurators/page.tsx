// import TeamHeader from "@/src/components/pages/team/TeamHeader";
// import TeamGrid from "@/src/components/pages/team/TeamGrid";
// import TeamQuotes from "@/src/components/pages/team/TeamQuotes";

// export default function TeamPage() {
//   return (
//     <main className="min-h-screen bg-[#FAFAFA] text-zinc-900 pt-32 pb-32 selection:bg-[#6748FE] selection:text-white overflow-hidden w-full">
//       {/* SECTION 1: THE TEAM (PHOTOS) */}
//       <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
//         <TeamHeader />
//         <TeamGrid />
//       </section>

//       {/* SECTION 2: SPLIT-LAYOUT SLIDING QUOTES */}
//       <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 mt-32 md:mt-48 py-20">
//         <TeamQuotes />
//       </section>
//     </main>
//   );
// }


import TeamHeader from "@/src/components/pages/team/TeamHeader";
import TeamGrid from "@/src/components/pages/team/TeamGrid";
import TeamQuotes from "@/src/components/pages/team/TeamQuotes";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 pt-32 pb-32 selection:bg-[#6748FE] selection:text-white overflow-hidden w-full">
      
      {/* SECTION 1: THE TEAM (PHOTOS) */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 mb-20">
        <TeamHeader />
        <TeamGrid />
      </section>

      {/* SECTION 2: HIGH-CONTRAST QUOTES */}
      {/* Reduced horizontal padding so the dark block spans beautifully on desktop */}
      <section className="w-full max-w-[90rem] mx-auto px-4 md:px-8 lg:px-12 relative z-10 mt-32 md:mt-48">
        <TeamQuotes />
      </section>
      
    </main>
  );
}