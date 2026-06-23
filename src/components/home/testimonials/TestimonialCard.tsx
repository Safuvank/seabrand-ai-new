"use client";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  initials,
}: TestimonialCardProps) {
  return (
    <div className="pt-10 flex flex-col h-full bg-white border border-zinc-200 p-6 md:p-8 hover:border-[#6748FE]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group cursor-default rounded-2xl">
      <p className="text-zinc-700 text-base md:text-lg font-medium leading-relaxed mb-8 grow">
        &quot;{quote}&quot;
      </p>
      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-zinc-100">
        <div className="w-11 h-11 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 font-bold text-sm group-hover:bg-[#6748FE] group-hover:text-white transition-colors duration-300 shrink-0">
          {initials}
        </div>
        <div>
          <h4 className="text-black font-bold text-base">{name}</h4>
          <p className="text-zinc-500 text-sm font-medium">{role}</p>
        </div>
      </div>
    </div>
  );
}