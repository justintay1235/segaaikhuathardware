import Reveal from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  italicWord?: string;
  description?: string;
};

export default function PageHero({ eyebrow, title, italicWord, description }: PageHeroProps) {
  return (
    <section className="relative bg-brand pt-40 pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.15]" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-maroon-800/40 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 flex flex-col items-center text-center gap-5">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-gold-400">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-balance text-5xl sm:text-6xl leading-[1.05] text-ivory-50">
            {title}
            {italicWord && <span className="italic"> {italicWord}</span>}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.2}>
            <p className="max-w-xl text-ivory-200/80 leading-relaxed">{description}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
