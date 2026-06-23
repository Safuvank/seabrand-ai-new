"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { servicesData } from "@/src/data/services.data"; // Import your data

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ServicesModal({ isOpen, onClose }: ModalProps) {
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Removes any non-digit character
    e.target.value = value;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white w-full max-w-xl p-8 md:p-10 rounded-[2.5rem] shadow-2xl overflow-y-auto max-h-[90vh] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] "
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 p-2 rounded-full hover:bg-zinc-100 transition-colors"
            >
              <X className="w-6 h-6 text-zinc-500" />
            </button>

            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                Let's build something.
              </h2>
              <p className="text-zinc-500">
                Fill in the details below, and we'll be in touch shortly.
              </p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-900 uppercase ml-1">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="w-full p-4 rounded-2xl bg-zinc-50 border border-zinc-200 outline-none focus:border-[#6748FE] focus:ring-1 focus:ring-[#6748FE] transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-900 uppercase ml-1">
                    Phone
                  </label>
                  <input
                    required
                    type="tel"
                    pattern="[0-9]*"
                    placeholder="+91 00000 00000"
                    onChange={handlePhoneChange}
                    className="w-full p-4 rounded-2xl bg-zinc-50 border border-zinc-200 outline-none focus:border-[#6748FE] focus:ring-1 focus:ring-[#6748FE] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-900 uppercase ml-1">
                  Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="email@example.com"
                  className="w-full p-4 rounded-2xl bg-zinc-50 border border-zinc-200 outline-none focus:border-[#6748FE] focus:ring-1 focus:ring-[#6748FE] transition-all"
                />
              </div>

              <div className="space-y-1.5 relative">
                <label className="text-xs font-bold text-zinc-900 uppercase ml-1">
                  Service Required
                </label>
                <select
                  required
                  className="w-full p-4 appearance-none rounded-2xl bg-zinc-50 border border-zinc-200 outline-none focus:border-[#6748FE] focus:ring-1 focus:ring-[#6748FE] transition-all text-zinc-800 pr-10 cursor-pointer"
                >
                  <option value="">Select a service</option>
                  {servicesData.services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                </select>

                {/* Custom Arrow Icon */}
                <div className="absolute right-4 top-[42px] pointer-events-none text-zinc-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-900 uppercase ml-1">
                  Project Details
                </label>
                <textarea
                  required
                  placeholder="Tell us about your project..."
                  className="w-full p-4 rounded-2xl bg-zinc-50 border border-zinc-200 outline-none focus:border-[#6748FE] focus:ring-1 focus:ring-[#6748FE] h-32 transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-5 rounded-2xl font-bold hover:bg-[#6748FE] transition-all duration-300 shadow-lg hover:shadow-[#6748FE]/20"
              >
                Send Request
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
