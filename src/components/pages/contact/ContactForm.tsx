"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { servicesData } from "@/src/data/services.data";

export default function ContactForm() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  return (
    <form className="flex flex-col gap-8 bg-white p-8 md:p-10 rounded-4xl border border-zinc-200 shadow-xl shadow-zinc-200/40">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <InputField
          label="First Name *"
          name="first_name"
          placeholder="Jane"
          required
        />
        <InputField label="Last Name" name="last_name" placeholder="Doe" />
      </div>

      <InputField
        label="Email Address *"
        type="email"
        name="email"
        placeholder="jane@example.com"
        required
      />
      <InputField
        label="Phone *"
        type="tel"
        name="phone"
        placeholder="+91 00000 00000"
        required
      />

      {/* Modern Dropdown */}
      <div className="flex flex-col gap-3 relative">
        <label className="text-sm font-bold text-zinc-500">
          Service Required *
        </label>

        {/* Hidden input to capture the value for form submission */}
        <input type="hidden" name="service" value={selectedService} required />

        <div
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full bg-transparent border-b border-zinc-300 pb-3 cursor-pointer flex justify-between items-center hover:border-zinc-400"
        >
          <span className={selectedService ? "text-black" : "text-zinc-400"}>
            {selectedService || "Select a service..."}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-zinc-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
          />
        </div>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.ul
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute top-full w-full bg-white border border-zinc-200 rounded-2xl shadow-xl mt-2 z-50 py-2"
            >
              {servicesData.services.map((service) => (
                <li
                  key={service.id}
                  onClick={() => {
                    setSelectedService(service.title);
                    setIsDropdownOpen(false);
                  }}
                  className="px-5 py-3 text-sm cursor-pointer hover:bg-zinc-50 flex justify-between items-center"
                >
                  {service.title}
                  {selectedService === service.title && (
                    <CheckCircle2 className="w-4 h-4 text-[#6748FE]" />
                  )}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-sm font-bold text-zinc-500">Message</label>
        <textarea
          name="message"
          rows={4}
          className="w-full bg-transparent border-b border-zinc-300 pb-3 focus:border-[#6748FE] outline-none resize-none"
          placeholder="How can we help?"
        />
      </div>

      <button
        type="submit"
        className="group relative overflow-hidden bg-black text-white py-5 rounded-xl font-bold text-lg w-full cursor-pointer"
      >
        <span className="relative z-10">Send Message</span>
        <div className="absolute bottom-0 left-0 w-full h-0 bg-[#6748FE] transition-all duration-300 group-hover:h-full z-0"></div>
      </button>
    </form>
  );
}

function InputField({ label, ...props }: any) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-bold text-zinc-500">{label}</label>
      <input
        {...props}
        className="w-full bg-transparent border-b border-zinc-300 pb-3 focus:border-[#6748FE] outline-none transition-colors placeholder:text-zinc-400"
      />
    </div>
  );
}
