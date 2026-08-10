import Reveal from "./Reveal";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  delay?: number;
};

export default function TestimonialCard({ quote, name, role, delay = 0 }: TestimonialCardProps) {
  return (
    <Reveal delay={delay}>
      <figure className="flex flex-col gap-6 border border-maroon-900/10 bg-ivory-50 p-9 h-full">
        <span className="font-display italic text-5xl text-maroon-300 leading-none">&ldquo;</span>
        <blockquote className="text-[0.95rem] leading-relaxed text-maroon-900/80 -mt-4">
          {quote}
        </blockquote>
        <figcaption className="mt-auto pt-4 border-t border-maroon-900/10 flex flex-col">
          <span className="font-display text-lg text-maroon-950">{name}</span>
          <span className="text-xs uppercase tracking-[0.2em] text-maroon-700/60">{role}</span>
        </figcaption>
      </figure>
    </Reveal>
  );
}
