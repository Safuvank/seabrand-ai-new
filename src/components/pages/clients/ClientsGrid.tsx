"use client";

import { motion } from "framer-motion";
import { clients } from "@/src/data/clients.data";
import ClientLogo from "./ClientLogo";

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

export default function ClientsGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={stagger}
      // The gap-[1px] + bg-zinc-200 + child bg-white creates perfect inner borders!
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[1px] bg-zinc-200 border border-zinc-200 rounded-[2rem] overflow-hidden"
    >
      {clients.map((client) => (
        <ClientLogo key={client.id} client={client} />
      ))}
    </motion.div>
  );
}
