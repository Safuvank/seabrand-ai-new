"use client";

import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialTrack from "./TestimonialTrack";

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-15 bg-[#FAFAFA] overflow-hidden relative">
      
      {/* 1. Left-Aligned Header */}
      <TestimonialsHeader />

      {/* 2. Auto-Moving Marquee Section */}
      <TestimonialTrack />
      
    </section>
  );
}