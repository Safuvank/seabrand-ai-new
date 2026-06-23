"use client";

import { useState, useMemo } from "react";
import { projects,type Category } from "@/src/data/projects.data"; // Adjust path if needed
import WorksHeader from "@/src/components/pages/works/WorksHeader";
import WorksFilter from "@/src/components/pages/works/WorksFilter";
import WorksGrid from "@/src/components/pages/works/WorksGrid";
import WorksCTA from "@/src/components/pages/works/WorksCTA";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) =>
      activeCategory === "All"
        ? true
        : project.categories.includes(activeCategory)
    );
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-zinc-900 pt-32 pb-24 selection:bg-[#6748FE] selection:text-white overflow-hidden relative">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-150 h-100 bg-[#6748FE] opacity-[0.04] blur-[150px] rounded-xl pointer-events-none" />

      {/* ✅ Applied Universal Container */}
      <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        <WorksHeader />

        <WorksFilter 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        <WorksGrid filteredProjects={filteredProjects} />

        <WorksCTA />

      </section>
    </main>
  );
}

