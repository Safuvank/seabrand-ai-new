"use client";

import HeroBackground from "./HeroBackground";
import HeroBadge from "./HeroBadge";
import HeroHeadline from "./HeroHeadline";

export default function Hero() {
  return (
    <section className="relative min-h-dvh w-full bg-white overflow-hidden flex items-center justify-center pt-28 pb-20">
      
      {/* Modular Background */}
      <HeroBackground />

      {/* ✅ FIXED: Replaced 'container-custom' with the Universal Container.
        The <section> takes up the full screen width (white background), 
        but this div constrains the content and perfectly aligns it with your other pages.
      */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col items-center justify-center h-full w-full">
          <div className="w-full relative z-20 flex flex-col items-center">
            <div className="relative w-full max-w-5xl flex flex-col items-center justify-center">
              
              {/* Modular Badge */}
              <HeroBadge />

              {/* Modular Headline */}
              <HeroHeadline />
              
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}