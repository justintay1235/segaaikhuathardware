export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`font-display italic tracking-[0.08em] text-2xl leading-none transition-colors duration-500 ${
        light ? "text-ivory-50" : "text-maroon-800"
      }`}
    >
      Sega
      <span className={`transition-colors duration-500 ${light ? "text-gold-400" : "text-maroon-500"}`}>.</span>
      <span className="block -mt-1 text-[0.55rem] not-italic tracking-[0.35em] font-sans font-medium uppercase text-center opacity-70">
        Pumps
      </span>
    </span>
  );
}
