import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  italicWord?: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  italicWord,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-5 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <Reveal>
          <p
            className={`text-xs uppercase tracking-[0.35em] font-medium ${
              light ? "text-gold-400" : "text-maroon-500"
            }`}
          >
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={`font-display text-balance text-4xl sm:text-5xl leading-[1.1] ${
            light ? "text-ivory-50" : "text-maroon-950"
          }`}
        >
          {title}
          {italicWord && <span className="italic"> {italicWord}</span>}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={`text-[0.95rem] leading-relaxed ${
              light ? "text-ivory-200" : "text-maroon-900/70"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
