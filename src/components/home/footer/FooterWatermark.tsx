export default function FooterWatermark() {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none z-0 leading-none flex items-end">
      <svg
        className="w-full h-auto text-white/[0.04] fill-current translate-y-[20%]"
        viewBox="0 0 1000 250"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="0"
          y="200"
          textLength="1000"
          lengthAdjust="spacingAndGlyphs"
          className="uppercase font-sans"
          style={{
            fontSize: "180px",
            fontWeight: 900,
            fontFamily: "Inter",
          }}
        >
          SEABRAND
        </text>
      </svg>
    </div>
  );
}