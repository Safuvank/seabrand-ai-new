"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import ServiceHero from "./ServicesHero";
import ServicesCTA from "./ServiceCTA";
import ServicesModal from "./ServicesModal";
import { servicesData } from "@/src/data/services.data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ServiceDetailClient({
  serviceId,
}: {
  serviceId: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Find the service data on the client side
  const service = servicesData.services.find((s) => s.id === serviceId);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  // Failsafe in case it's undefined
  if (!service) return null;

  return (
    <div className="bg-white selection:bg-[#6748FE] selection:text-white">
      {/* 1. Existing Hero Component */}
      <ServiceHero service={service} />

      {/* 2. Detailed Overview Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 border-b border-zinc-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          <div>
            <h2 className="text-4xl font-bold tracking-tighter mb-6">
              The Overview
            </h2>
            <p className="text-xl text-zinc-600 leading-relaxed">
              {service.overview}
            </p>
          </div>

          <div className="bg-zinc-50 p-10 rounded-4xl border border-zinc-100">
            <h3 className="text-xl font-bold mb-6">Key Deliverables</h3>
            <ul className="space-y-4">
              {service.deliverables?.map((item: string, index: number) => (
                <li
                  key={index}
                  className="flex items-center gap-4 text-zinc-700 font-medium"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#6748FE] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* 3. The Process Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            How we execute.
          </h2>
          <p className="text-xl text-zinc-500">
            Our systematic approach to {service.title.toLowerCase()}.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {service.process?.map((proc: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-10 rounded-4xl bg-zinc-950 text-white group hover:bg-[#6748FE] transition-colors duration-500"
            >
              <div className="text-5xl font-thin text-zinc-800 group-hover:text-white/30 transition-colors mb-8">
                {proc.step}
              </div>
              <h3 className="text-2xl font-bold mb-4">{proc.name}</h3>
              <p className="text-zinc-400 group-hover:text-white/80 transition-colors leading-relaxed">
                {proc.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. CTA and Modal Integrations */}
      <ServicesCTA onOpenModal={handleModalOpen} />
      <ServicesModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
}
