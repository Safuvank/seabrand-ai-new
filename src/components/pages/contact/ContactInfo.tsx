"use client";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/src/data/contact.data";
import { items } from "@/src/data/contact.data";

export default function ContactInfo() {
  

  return (
    <motion.div variants={stagger} className="flex flex-col gap-12 lg:pt-8">
      {items.map((item, i) => (
        <motion.div variants={fadeUp} key={i} className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <a href={item.href} className="flex items-center gap-3 text-zinc-500 hover:text-[#6748FE] transition-colors">
            <item.icon className="w-5 h-5" />
            <span className="font-semibold underline underline-offset-4">{item.content}</span>
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
}