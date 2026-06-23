// "use client";

// import { use } from "react";
// import { notFound } from "next/navigation";
// import { projects } from "@/src/data/projects.data";

// // Import Modular Components
// import WorkDetailBack from "@/src/components/pages/works/detail/WorkDetailBack";
// import WorkDetailHeader from "@/src/components/pages/works/detail/WorkDetailHeader";
// import WorkDetailHero from "@/src/components/pages/works/detail/WorkDetailHero";
// import WorkDetailContent from "@/src/components/pages/works/detail/WorkDetailContent";

// export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  
//   // Unwrap the params Promise using React.use()
//   const resolvedParams = use(params);
  
//   // Find the specific project based on the unwrapped URL slug
//   const project = projects.find((p) => p.slug === resolvedParams.slug);

//   // If no project matches the slug, show a 404 page
//   if (!project) {
//     notFound();
//   }

//   return (
//     <main className="min-h-screen bg-[#FAFAFA] text-zinc-900 pt-32 pb-24 selection:bg-[#6748FE] selection:text-white overflow-hidden relative">
      
//       {/* Background ambient lighting */}
//       <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-[#6748FE] opacity-[0.03] blur-[150px] rounded-xl pointer-events-none" />

//       {/* ✅ Applied Universal Padding (px-6 md:px-12 lg:px-16) but keeping max-w-5xl for readability */}
//       <article className="w-full max-w-5xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
//         <WorkDetailBack />

//         <WorkDetailHeader project={project as any} />

//         <WorkDetailHero project={project as any} />

//         <WorkDetailContent project={project as any} />

//       </article>
      
//     </main>
//   );
// }


import { projects } from "@/src/data/projects.data";
import { notFound } from "next/navigation";
import WorkDetailHero from "@/src/components/pages/works/detail/WorkDetailHero";
import WorkDetailContent from "@/src/components/pages/works/detail/WorkDetailContent";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className="bg-white min-h-screen">
      {/* 1. Hero */}
      <WorkDetailHero project={project} />
      
      {/* 2. Content with Sticky Sidebar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <WorkDetailContent project={project} />
      </div>
    </main>
  );
}