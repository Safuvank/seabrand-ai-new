"use client";

import { stats } from "@/src/data/revolution.data";
import RevolutionStatCard from "./RevolutionStatCard";

export default function RevolutionStatsGrid() {
  return (
    <div className="w-full lg:w-7/12">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {stats.map((stat, index) => (
          <RevolutionStatCard key={stat.label} stat={stat} index={index} />
        ))}
      </div>
    </div>
  );
}