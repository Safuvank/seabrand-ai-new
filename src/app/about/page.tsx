// import AboutHero from "@/src/components/pages/about/AboutHero";
// import MissionVisionValues from "@/src/components/pages/about/MissionVisionValues";
// import AboutImageGrid from "@/src/components/pages/about/AboutImageGrid";

// export default function AboutPage() {
//   return (
//     <main className="min-h-screen bg-[#FAFAFA] text-zinc-900 pt-32 pb-24 overflow-hidden w-full">
//       <AboutHero />
//       <MissionVisionValues />
//       <AboutImageGrid />
//     </main>
//   );
// }


import AboutHero from "@/src/components/pages/about/AboutHero";
import MissionVisionValues from "@/src/components/pages/about/MissionVisionValues";
import AboutImageGrid from "@/src/components/pages/about/AboutImageGrid";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-zinc-900 pt-32 pb-24 selection:bg-[#6748FE] selection:text-white w-full">
      <AboutHero />
      <MissionVisionValues />
      <AboutImageGrid />
    </main>
  );
}