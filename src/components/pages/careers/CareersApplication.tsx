"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { UploadCloud, CheckCircle2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CareersApplicationProps {
  filteredJobs: any[];
  selectedFormJob: string;
  setSelectedFormJob: (val: string) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
  isSubmitted: boolean;
  fileName: string | null;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function CareersApplication({
  filteredJobs,
  selectedFormJob,
  setSelectedFormJob,
  handleSubmit,
  isSubmitting,
  isSubmitted,
  fileName,
  handleFileChange,
}: CareersApplicationProps) {
  // ✨ FIXED: Moved the state declaration INSIDE the component body
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section
      id="apply"
      className="bg-zinc-50 text-zinc-900 py-24 md:py-32 w-full mt-20 rounded-t-[3rem] border-t border-zinc-200 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left: Contact Info */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
              Ready to join?
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed mb-12">
              Send us your portfolio. If there isn't a role that fits right now,
              we'll keep you in mind for future openings.
            </p>

            <div className="flex flex-col items-start">
              <p className="text-zinc-400 text-sm font-bold uppercase tracking-wider mb-3">
                Direct Contact
              </p>
              <a
                href="mailto:curator@seabrand.in"
                className="text-2xl font-bold text-black hover:text-[#6748FE] transition-colors mb-4"
              >
                curator@seabrand.in
              </a>
              <p className="text-zinc-600 font-medium leading-relaxed mb-8">
                +91 81139 25507 <br />
                Mon - Sat, 9am - 6pm IST
              </p>
              <div className="w-full pt-6 border-t border-zinc-200">
                <p className="text-zinc-500 font-medium leading-relaxed">
                  SeaBrand AI <br />
                  Kerala, India <br />
                  676503
                </p>
              </div>
            </div>
          </div>

          {/* Right: The Form */}
          <div className="w-full lg:w-2/3">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-bold text-zinc-500">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-zinc-300 pb-3 text-black focus:outline-none focus:border-[#6748FE] transition-colors placeholder:text-zinc-400 font-medium"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-bold text-zinc-500">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-zinc-300 pb-3 text-black focus:outline-none focus:border-[#6748FE] transition-colors placeholder:text-zinc-400 font-medium"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold text-zinc-500">
                  Position <span className="text-red-600">*</span>
                </label>

                <div className="relative">
                  {/* Hidden input ensures the form still submits the value correctly */}
                  <input
                    type="hidden"
                    name="position"
                    value={selectedFormJob}
                    required
                  />

                  {/* Custom Select Trigger */}
                  <div
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full bg-transparent border-b pb-3 transition-colors cursor-pointer flex justify-between items-center ${
                      isDropdownOpen
                        ? "border-[#6748FE]"
                        : "border-zinc-300 hover:border-zinc-400"
                    }`}
                  >
                    <span
                      className={`font-medium ${selectedFormJob ? "text-black" : "text-zinc-400"}`}
                    >
                      {selectedFormJob === "general"
                        ? "Open Application"
                        : filteredJobs.find((j) => j.id === selectedFormJob)
                            ?.title || "Select a role..."}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isDropdownOpen
                          ? "rotate-180 text-[#6748FE]"
                          : "text-zinc-400"
                      }`}
                    />
                  </div>

                  {/* Custom Dropdown Menu */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <>
                        {/* Invisible overlay to close dropdown when clicking outside */}
                        <div
                          className="fixed inset-0 z-40"
                          onClick={() => setIsDropdownOpen(false)}
                        />

                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 w-full mt-2 bg-white border border-zinc-200 rounded-2xl shadow-xl z-50 overflow-hidden"
                        >
                          <ul className="max-h-64 overflow-y-auto py-2 custom-scrollbar">
                            {filteredJobs.map((job) => (
                              <li
                                key={job.id}
                                onClick={() => {
                                  setSelectedFormJob(job.id);
                                  setIsDropdownOpen(false);
                                }}
                                className={`px-5 py-3 text-sm cursor-pointer transition-colors flex items-center justify-between ${
                                  selectedFormJob === job.id
                                    ? "bg-[#6748FE]/10 text-[#6748FE] font-bold"
                                    : "text-zinc-700 hover:bg-zinc-50 hover:text-[#6748FE] font-medium"
                                }`}
                              >
                                {job.title}
                                {selectedFormJob === job.id && (
                                  <CheckCircle2 className="w-4 h-4" />
                                )}
                              </li>
                            ))}

                            {/* Divider */}
                            {filteredJobs.length > 0 && (
                              <div className="h-px bg-zinc-100 my-1 mx-4" />
                            )}

                            <li
                              onClick={() => {
                                setSelectedFormJob("general");
                                setIsDropdownOpen(false);
                              }}
                              className={`px-5 py-3 text-sm cursor-pointer transition-colors flex items-center justify-between ${
                                selectedFormJob === "general"
                                  ? "bg-[#6748FE]/10 text-[#6748FE] font-bold"
                                  : "text-zinc-700 hover:bg-zinc-50 hover:text-[#6748FE] font-medium"
                              }`}
                            >
                              Open Application
                              {selectedFormJob === "general" && (
                                <CheckCircle2 className="w-4 h-4" />
                              )}
                            </li>
                          </ul>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold text-zinc-500">
                  Resume / CV <span className="text-red-600">*</span>
                </label>
                <label className="flex flex-col items-center justify-center w-full h-32 transition bg-white border border-zinc-300 border-dashed rounded-2xl cursor-pointer hover:border-[#6748FE] hover:bg-[#6748FE]/5 group ">
                  <UploadCloud className="w-6 h-6 text-zinc-400 group-hover:text-[#6748FE] mb-2 transition-colors" />
                  <span className="font-semibold text-zinc-500 group-hover:text-[#6748FE] transition-colors">
                    {fileName ? (
                      <span className="text-[#6748FE]">{fileName}</span>
                    ) : (
                      "Click to attach file"
                    )}
                  </span>
                  <input
                    type="file"
                    name="resume"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    required
                    onChange={handleFileChange}
                  />
                </label>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold text-zinc-500">
                  Cover Letter / Portfolio
                </label>
                <textarea
                  rows={3}
                  name="message"
                  className="w-full bg-transparent border-b border-zinc-300 pb-3 text-black focus:outline-none focus:border-[#6748FE] transition-colors resize-none placeholder:text-zinc-400 font-medium"
                  placeholder="Share your link or tell us why you're a fit..."
                ></textarea>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="group relative overflow-hidden bg-black text-white py-5 rounded-xl font-bold text-lg transition-all disabled:opacity-70 flex justify-center shadow-lg hover:shadow-xl w-full cursor-pointer"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? "Sending..." : "Submit Application"}
                  </span>
                  {!isSubmitting && !isSubmitted && (
                    <div className="absolute bottom-0 left-0 w-full h-0 bg-[#6748FE] transition-all duration-300 ease-out group-hover:h-full z-0"></div>
                  )}
                </button>

                {/* Green Success Message */}
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3 mt-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-bold text-green-800">
                            Application Sent Successfully!
                          </p>
                          <p className="text-sm text-green-700 mt-1">
                            Thank you for your interest. We will review your
                            profile and connect with you soon.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
