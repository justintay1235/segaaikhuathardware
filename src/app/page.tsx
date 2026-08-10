import {
  Award,
  Clock,
  Droplets,
  Factory,
  ShieldCheck,
  Sun,
  Users,
  Wrench,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import StatCounter from "@/components/StatCounter";
import PumpEmblem from "@/components/PumpEmblem";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";

const FEATURED_PRODUCTS = [
  {
    icon: Droplets,
    name: "Centrifugal Series",
    tagline: "High-flow pumps engineered for consistent industrial output.",
    specs: ["Up to 500 m³/h", "IE3 motors", "Cast-iron body"],
  },
  {
    icon: Factory,
    name: "Submersible Series",
    tagline: "Borewell and drainage pumps built to endure the depths.",
    specs: ["Up to 200m head", "Stainless shaft", "Sand-resistant"],
  },
  {
    icon: Sun,
    name: "Solar Series",
    tagline: "Off-grid pumping for agriculture, powered by the sun.",
    specs: ["MPPT controller", "DC brushless", "Zero fuel cost"],
  },
];

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Uncompromising Durability",
    text: "Marine-grade alloys and precision tolerances built to outlast.",
  },
  {
    icon: Award,
    title: "Certified Excellence",
    text: "ISO 9001 manufacturing with rigorous quality benchmarks.",
  },
  {
    icon: Clock,
    title: "Rapid Deployment",
    text: "Nationwide logistics network for swift installation.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    text: "A concierge engineering team, from selection to service.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="absolute inset-0 bg-noise opacity-40" />
        <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 font-display italic text-[13rem] sm:text-[20rem] leading-none text-maroon-900/[0.04] whitespace-nowrap select-none">
          Sega
        </span>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          <div className="flex flex-col gap-8">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.35em] text-maroon-500 font-medium">
                Precision Water Pumps &middot; Est. Legacy
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-balance text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-maroon-950">
                Every drop, <span className="italic">engineered</span> to
                perfection.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="max-w-lg text-maroon-900/70 leading-relaxed text-[1.05rem]">
                Sega crafts water pumps that pair industrial power with
                understated elegance — trusted by industries, farms, and
                homes that expect nothing less than excellence.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-5">
                <Button href="/products">Explore Products</Button>
                <Button href="/contact" variant="outline">
                  Request a Quote
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex items-center gap-10 pt-6 border-t border-maroon-900/10 mt-4">
                <div className="flex flex-col">
                  <span className="font-display text-3xl text-maroon-900">25+</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-maroon-700/60">
                    Years Crafting
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-3xl text-maroon-900">40k+</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-maroon-700/60">
                    Pumps Delivered
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-3xl text-maroon-900">98%</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-maroon-700/60">
                    Client Satisfaction
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right" delay={0.15} className="hidden sm:block">
            <PumpEmblem className="max-w-md mx-auto" />
          </Reveal>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-maroon-950 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 sm:grid-cols-4 gap-10">
          <StatCounter value={25} suffix="+" label="Years of Craft" light />
          <StatCounter value={40} suffix="K+" label="Pumps Delivered" light />
          <StatCounter value={18} suffix="" label="Countries Served" light />
          <StatCounter value={98} suffix="%" label="Client Satisfaction" light />
        </div>
      </section>

      {/* About teaser */}
      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="left">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-maroon-100 via-ivory-200 to-maroon-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <PumpEmblem className="w-2/3" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-ivory-50/90 backdrop-blur px-6 py-4 flex items-center justify-between">
                <span className="font-display italic text-lg text-maroon-900">
                  Est. Craftsmanship
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-maroon-700/70">
                  Since 1999
                </span>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Built on precision,"
              italicWord="finished with grace."
            />
            <Reveal delay={0.1}>
              <p className="text-maroon-900/70 leading-relaxed max-w-lg">
                What began as a small engineering workshop has grown into a
                name trusted across industries — without losing the
                obsessive attention to detail that started it all. Every
                Sega pump is designed to move water quietly, efficiently,
                and for decades to come.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <Button href="/about" variant="outline" className="w-fit">
                Discover Our Story
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-28 sm:py-36 bg-maroon-50/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col gap-16">
          <SectionHeading
            eyebrow="Signature Range"
            title="Pumps for every"
            italicWord="ambition."
            description="From industrial mainlines to solar-powered fields, each series is engineered around one principle: relentless reliability."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PRODUCTS.map((product, i) => (
              <Reveal key={product.name} delay={i * 0.08}>
                <ProductCard {...product} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto">
            <Button href="/products" variant="outline">
              View All Products
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col gap-16">
          <SectionHeading
            eyebrow="Why Sega"
            title="The measure of a pump"
            italicWord="is its silence."
            description="Reliability isn't a feature — it's the standard we engineer around."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {FEATURES.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center gap-4 px-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold-500/40 text-maroon-800">
                    <feature.icon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl text-maroon-950">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-maroon-900/60 leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 sm:py-36 bg-maroon-50/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col gap-16">
          <SectionHeading
            eyebrow="Client Voices"
            title="Trusted where it"
            italicWord="matters most."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Sega's submersible units have run three seasons without a single failure. Unmatched reliability for our irrigation network."
              name="Adaeze Okonkwo"
              role="Farm Operations Director"
            />
            <TestimonialCard
              quote="The engineering team designed a custom manifold for our plant — on time, on spec, and quieter than anything we'd used before."
              name="Michael Osei"
              role="Plant Manager"
              delay={0.1}
            />
            <TestimonialCard
              quote="Elegant, efficient, and built to last. Our solar array pumps have cut operating costs by nearly half."
              name="Grace Adebayo"
              role="Estate Developer"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative overflow-hidden bg-maroon-950 py-24">
        <div className="absolute inset-0 bg-noise opacity-[0.15]" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-10 flex flex-col items-center text-center gap-8">
          <Reveal>
            <Wrench className="text-gold-400" size={32} strokeWidth={1.4} />
          </Reveal>
          <SectionHeading
            light
            eyebrow="Let's Build Together"
            title="Ready to move water,"
            italicWord="beautifully?"
          />
          <Reveal delay={0.15}>
            <Button href="/contact">Speak With an Engineer</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
