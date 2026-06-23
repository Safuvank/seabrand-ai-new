import Link from "next/link";
import { footerLinks,socialLinks } from "@/src/data/footer.data";

export default function FooterLinks() {
  return (
    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10 lg:pl-10">
      
      {/* Text Link Columns */}
      {footerLinks.map((column) => (
        <div key={column.title} className="flex flex-col gap-6">
          <h4 className="text-white font-semibold text-xs tracking-widest uppercase">
            {column.title}
          </h4>
          <ul className="flex flex-col gap-4">
            {column.links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-zinc-400 hover:text-white transition-colors text-[15px] group relative flex items-center w-fit"
                >
                  <span className="absolute left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-3" />
                  <span className="transition-transform duration-300 group-hover:translate-x-5">
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Social Icons Column */}
      <div className="flex flex-col gap-6">
        <h4 className="text-white font-semibold text-xs tracking-widest uppercase">
          Connect
        </h4>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              aria-label={link.name}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              {link.svg}
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}