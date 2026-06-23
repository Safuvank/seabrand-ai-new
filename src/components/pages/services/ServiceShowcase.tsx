"use client";
import { motion } from "framer-motion";
import { servicesData } from "@/src/data/services.data";
import Link from "next/link";

export default function ServicesShowcase() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-32 space-y-12">
      {servicesData.services.map((service, i) => (
        <motion.div 
          key={service.id}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="grid md:grid-cols-12 gap-8 border-t border-zinc-200 py-16 items-center group"
        >
          <div className="md:col-span-2 text-6xl font-thin text-zinc-300 group-hover:text-[#6748FE] transition-colors">
            {service.number}
          </div>
          <div className="md:col-span-5">
            <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
            <p className="text-zinc-600 leading-relaxed">{service.description}</p>
          </div>
          <div className="md:col-span-5 text-right">
             <Link href='services/${service.id}' className="border border-zinc-300 px-8 py-3 rounded-xl hover:bg-black hover:text-white transition-all cursor-pointer">
               Explore Details
             </Link>
          </div>
        </motion.div>
      ))}
    </section>
  );
}