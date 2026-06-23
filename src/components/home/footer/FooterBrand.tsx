import Link from "next/link";
import Image from "next/image";

export default function FooterBrand() {
  return (
    <div className="lg:col-span-5 flex flex-col gap-10 text-zinc-400 text-[15px] leading-relaxed lg:pr-8">
      {/* Logo Section */}
      <div className="flex flex-col gap-5">
        <Link href="/" className="inline-block w-fit">
          <Image
            src="/images/seabrand-logo-fullwhite.png"
            alt="SeaBrand Logo"
            width={200}
            height={100}
            className="object-contain brightness-0 invert"
            priority
          />
        </Link>
      </div>

      {/* Headquarters & Contact Grid */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-white font-semibold mb-2 tracking-wide uppercase text-xs">
            Headquarters
          </p>
          <p>
            Kerala, India
            <br />
            676503
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-white font-semibold mb-1 tracking-wide uppercase text-xs">
            Contact
          </p>
          <a
            href="mailto:info@seabrand.com"
            className="hover:text-white transition-colors w-fit"
          >
            curator@seabrand.in
          </a>
          <a
            href="tel:+918081301190"
            className="hover:text-white transition-colors w-fit"
          >
            (+91) 811 392 5507
          </a>
        </div>
      </div>
    </div>
  );
}