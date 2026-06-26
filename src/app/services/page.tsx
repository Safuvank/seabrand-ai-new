
"use client";

import { useState } from "react";
import ServicesHeader from "@/src/components/pages/services/ServicesHeader";
import ServicesShowcase from "@/src/components/pages/services/ServiceShowcase";

import ServicesCTA from "@/src/components/pages/services/ServiceCTA";
import ServicesModal from "@/src/components/pages/services/ServicesModal";

export default function ServicesPage() {
  // 1. DEFINE THE STATE
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 2. DEFINE THE FUNCTION HERE
  const handleModalOpen = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevents background scroll
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset"; // Restores background scroll
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900 pt-20 selection:bg-[#6748FE] selection:text-white">
      {/* Pass the function as a prop to components that need it */}
      <ServicesHeader onOpenModal={handleModalOpen} />

      <ServicesShowcase />

      {/* Pass the same function to the CTA */}
      <ServicesCTA onOpenModal={handleModalOpen} />

      {/* The Modal */}
      <ServicesModal isOpen={isModalOpen} onClose={handleModalClose} />
    </main>
  );
}
