"use client";

import { testimonials } from "@/src/data/testimonials.data";// Ensure this path matches your setup
import TestimonialCard from "./TestimonialCard";

// Split into two rows (if you want to add a second reverse track later, row2 is ready!)
const row1 = testimonials.slice(0, 4);
const row2 = testimonials.slice(4, 8);

const marqueeCSS = `
  /* Infinite Marquee Animations */
  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  @keyframes marquee-reverse {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0%); }
  }
  
  .animate-marquee {
    animation: marquee 35s linear infinite;
  }
  .animate-marquee-reverse {
    animation: marquee-reverse 35s linear infinite;
  }
  
  /* Pause animation on hover for better readability */
  .hover\\:pause:hover {
    animation-play-state: paused;
  }

  /* Beautiful gradient masks to fade out cards at the edges of the screen */
  .fade-edges {
    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  }
`;

export default function TestimonialTrack() {
  return (
    <>
      <div className="relative w-full flex flex-col gap-6 fade-edges">
        {/* Track 1: Moving Left */}
        <div className="flex w-max animate-marquee hover:pause">
          {/* Render the array twice to create a seamless infinite loop */}
          {[...row1, ...row1].map((testimonial, i) => (
            <div key={i} className="w-[300px] md:w-[350px] mx-3 shrink-0">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Required Custom CSS for Animations & Fade Masks */}
      <style dangerouslySetInnerHTML={{ __html: marqueeCSS }} />
    </>
  );
}