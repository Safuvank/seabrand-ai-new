"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const filters = ["All", "Onsite", "Remote", "Hybrid"];

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

interface CareersJobListProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  filteredJobs: any[];
  expandedJobId: string | null;
  setExpandedJobId: (id: string | null) => void;
  handleApplyClick: (e: React.MouseEvent, jobId: string) => void;
}

export default function CareersJobList({
  activeFilter,
  setActiveFilter,
  filteredJobs,
  expandedJobId,
  setExpandedJobId,
  handleApplyClick,
}: CareersJobListProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-32">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
        
        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-zinc-200 pb-8 gap-6">
          <h2 className="text-4xl font-bold tracking-tight">Open Roles</h2>
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setExpandedJobId(null);
                }}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  activeFilter === filter
                    ? "bg-black text-white"
                    : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 hover:text-black"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Job List */}
        <div className="flex flex-col">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => {
              const isExpanded = expandedJobId === job.id;

              return (
                <div key={job.id} className="border-b border-zinc-100">
                  <div 
                    onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                    className="group flex flex-col md:flex-row md:items-center justify-between py-8 cursor-pointer hover:px-4 transition-all duration-300 rounded-xl hover:bg-[#FAFAFA] "
                  >
                    <div className="flex flex-col">
                      <h3 className="text-3xl font-bold text-black mb-2 group-hover:text-[#6748FE] transition-colors">{job.title}</h3>
                      <div className="flex items-center gap-4 text-zinc-500 font-medium">
                        <span>{job.type}</span>
                        <span className="w-1 h-1 rounded-full bg-zinc-300" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex w-12 h-12 rounded-xl border border-zinc-200 items-center justify-center group-hover:border-[#6748FE] group-hover:bg-[#6748FE] group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-45" : ""}`} />
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-12 md:px-4 max-w-3xl">
                          <h4 className="text-sm font-bold text-black mb-4 uppercase tracking-wider">The Role</h4>
                          <p className="text-zinc-600 leading-relaxed mb-8 text-lg">{job.description}</p>

                          <h4 className="text-sm font-bold text-black mb-4 uppercase tracking-wider">Requirements</h4>
                          <ul className="list-disc list-inside text-zinc-600 space-y-3 mb-10 text-lg">
                            {job.requirements.map((req: string, i: number) => (
                              <li key={i}>{req}</li>
                            ))}
                          </ul>

                          <button
                            onClick={(e) => handleApplyClick(e, job.id)}
                            className="group relative overflow-hidden bg-black text-white px-8 py-4 rounded-xl text-sm font-bold"
                          >
                            <span className="relative z-10 flex items-center gap-2">
                              Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute bottom-0 left-0 w-full h-0 bg-[#6748FE] transition-all duration-300 ease-out group-hover:h-full z-0"></div>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="py-20 text-center text-zinc-500 font-medium">
              No open positions found for this work style currently.
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}