import { Compass, HeartHandshake, Sparkles, Target } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PumpEmblem from "@/components/PumpEmblem";
import StatCounter from "@/components/StatCounter";
import Button from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sega | Our Story & Craft",
  description:
    "Three decades of precision engineering — the story, values, and people behind Sega's water pumps.",
};

const VALUES = [
  {
    icon: Target,
    title: "Precision",
    text: "Every tolerance measured, every weld inspected — nothing leaves our floor by chance.",
  },
  {
    icon: HeartHandshake,
    title: "Integrity",
    text: "We say what a pump can do, and it does exactly that, for years.",
  },
  {
    icon: Sparkles,
    title: "Craft",
    text: "Function first, but never at the expense of form. Elegance is engineered in.",
  },
  {
    icon: Compass,
    title: "Foresight",
    text: "Designing for the water challenges of tomorrow, not just today's spec sheet.",
  },
];

const TIMELINE = [
  {
    year: "1999",
    title: "A Workshop Begins",
    text: "Sega opens as a small motor-rewinding workshop, repairing pumps for local farms.",
  },
  {
    year: "2007",
    title: "First Factory Line",
    text: "Our first centrifugal pump series rolls off a dedicated production line.",
  },
  {
    year: "2014",
    title: "Regional Expansion",
    text: "Sega pumps reach installations across Southeast Asia's industrial corridors.",
  },
  {
    year: "2020",
    title: "Solar Series Launch",
    text: "Off-grid solar pumping systems bring water to previously unreachable farmland.",
  },
  {
    year: "Today",
    title: "40,000+ Installations",
    text: "A trusted name across industry, agriculture, and residential estates.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Sega"
        title="Three decades of"
        italicWord="quiet precision."
        description="From a small motor workshop to a name trusted across industries — our story is written in every pump that keeps running, unnoticed, for decades."
      />

      {/* Story */}
      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <SectionHeading
              align="left"
              eyebrow="Our Beginning"
              title="Engineering, "
              italicWord="inherited."
            />
            <Reveal delay={0.1}>
              <p className="text-maroon-900/70 leading-relaxed max-w-lg">
                Sega was founded on a simple frustration: pumps that failed
                too soon, too often. Our founder, a motor engineer by
                training, began rebuilding failed units by hand — and
                noticed the same faults again and again. Sega was built to
                solve them permanently, not patch them temporarily.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-maroon-900/70 leading-relaxed max-w-lg">
                Today, that same obsession with root causes drives every
                casting, coil, and control board that leaves our facility —
                whether it&apos;s destined for a rice paddy or a refinery.
              </p>
            </Reveal>
          </div>

          <Reveal direction="right" className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-maroon-100 via-ivory-200 to-maroon-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <PumpEmblem className="w-2/3" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-28 sm:py-36 bg-maroon-50/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="h-full flex flex-col gap-4 border border-maroon-900/10 bg-ivory-50 p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-maroon-500">Our Mission</p>
              <h3 className="font-display text-3xl text-maroon-950">
                Move water, <span className="italic">reliably.</span>
              </h3>
              <p className="text-maroon-900/70 leading-relaxed">
                To engineer pumping systems so dependable that our clients
                stop thinking about water — and start focusing on what it
                makes possible.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full flex flex-col gap-4 border border-maroon-900/10 bg-ivory-50 p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-maroon-500">Our Vision</p>
              <h3 className="font-display text-3xl text-maroon-950">
                A legacy in <span className="italic">every valve.</span>
              </h3>
              <p className="text-maroon-900/70 leading-relaxed">
                To be the name industries and households reach for first —
                synonymous with pumps that quietly outlast their warranty,
                and their competitors.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 flex flex-col gap-16">
          <SectionHeading
            eyebrow="Our Journey"
            title="Milestones along the"
            italicWord="way."
          />
          <div className="flex flex-col">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.05}>
                <div className="grid grid-cols-[6rem_1fr] sm:grid-cols-[8rem_1fr] gap-6 py-8 border-t border-maroon-900/10">
                  <span className="font-display italic text-2xl sm:text-3xl text-maroon-500">
                    {item.year}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <h4 className="font-display text-xl text-maroon-950">{item.title}</h4>
                    <p className="text-sm text-maroon-900/60 leading-relaxed max-w-xl">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 sm:py-36 bg-maroon-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col gap-16">
          <SectionHeading
            light
            eyebrow="What We Stand For"
            title="The values behind"
            italicWord="every pump."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center gap-4 px-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold-400/40 text-gold-400">
                    <value.icon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl text-ivory-50">{value.title}</h3>
                  <p className="text-sm text-ivory-300 leading-relaxed">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 pt-10 border-t border-ivory-50/10">
            <StatCounter value={25} suffix="+" label="Years of Craft" light />
            <StatCounter value={40} suffix="K+" label="Pumps Delivered" light />
            <StatCounter value={120} suffix="+" label="Engineers & Staff" light />
            <StatCounter value={18} suffix="" label="Countries Served" light />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 flex flex-col items-center text-center gap-8">
          <SectionHeading
            eyebrow="Join Our Story"
            title="Let's engineer your next"
            italicWord="project together."
          />
          <Reveal delay={0.1}>
            <Button href="/contact">Get in Touch</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
