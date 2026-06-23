"use client";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";
import FooterWatermark from "./FooterWatermark";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white relative overflow-hidden pt-24 md:pt-32 min-h-150 flex flex-col justify-between">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-[#6748FE] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="container-custom mx-auto px-6 md:px-12 relative z-10 w-full max-w-7xl">
        {/* Middle Section: Contact & Link Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          <FooterBrand />
          <FooterLinks />
        </div>

        {/* Bottom Section: Divider & Legal */}
        <FooterBottom />
      </div>

      {/* FIXED Edge-to-Edge Watermark */}
      <FooterWatermark />
    </footer>
  );
}
