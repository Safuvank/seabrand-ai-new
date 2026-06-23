import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="relative w-full pt-8 pb-16 md:pb-24 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 z-10">
      <p className="text-zinc-500 text-sm">
        ©2026 - {new Date().getFullYear()} SeaBrand. All rights reserved.
      </p>

      <div className="flex flex-wrap items-center gap-6 text-xs font-semibold tracking-widest uppercase text-zinc-500">
        <Link href="#" className="hover:text-white transition-colors">
          Terms
        </Link>
        <Link href="#" className="hover:text-white transition-colors">
          Privacy
        </Link>
        <Link href="#" className="hover:text-white transition-colors">
          Cookies
        </Link>
      </div>
    </div>
  );
}