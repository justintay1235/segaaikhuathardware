import { Droplets, Gauge, Home, Sun, Tractor, Waves } from "lucide-react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Products | Sega Pumps",
  description:
    "Explore Sega's full range of water pumps — centrifugal, submersible, solar, industrial, agricultural, and residential.",
};

const PRODUCTS = [
  {
    icon: Droplets,
    name: "Centrifugal Series",
    tagline: "High-flow pumps engineered for consistent industrial output.",
    specs: ["Up to 500 m³/h", "IE3 premium motors", "Cast-iron / SS body", "Max head 90m"],
  },
  {
    icon: Waves,
    name: "Submersible Series",
    tagline: "Borewell and drainage pumps built to endure the depths.",
    specs: ["Up to 200m head", "Stainless steel shaft", "Sand-resistant seals", "4\"-8\" bore fit"],
  },
  {
    icon: Sun,
    name: "Solar Series",
    tagline: "Off-grid pumping for agriculture, powered by the sun.",
    specs: ["MPPT controller", "DC brushless motor", "Zero fuel cost", "Remote monitoring"],
  },
  {
    icon: Gauge,
    name: "Industrial Booster Systems",
    tagline: "Pressure-stable multi-pump skids for demanding facilities.",
    specs: ["Variable frequency drive", "Redundant pump sets", "PLC control panel", "24/7 duty rated"],
  },
  {
    icon: Tractor,
    name: "Agricultural Series",
    tagline: "Irrigation-ready pumps for fields, farms, and estates.",
    specs: ["Diesel & electric options", "High debris tolerance", "Portable skid mounts", "Long-throw discharge"],
  },
  {
    icon: Home,
    name: "Residential Series",
    tagline: "Quiet, compact pumps for homes and light commercial use.",
    specs: ["Whisper-quiet operation", "Compact footprint", "Auto pressure control", "5-year warranty"],
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Range"
        title="Six series, one"
        italicWord="standard of excellence."
        description="Every Sega pump — regardless of scale — is held to the same tolerances, the same materials, and the same obsessive testing."
      />

      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col gap-16">
          <SectionHeading
            eyebrow="Browse the Collection"
            title="Find the pump built for"
            italicWord="your challenge."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, i) => (
              <Reveal key={product.name} delay={(i % 3) * 0.08}>
                <ProductCard {...product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom engineering CTA */}
      <section className="py-28 sm:py-36 bg-maroon-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-[0.15]" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div className="flex flex-col gap-6">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.35em] text-gold-400">
                Beyond the Catalogue
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-balance text-4xl sm:text-5xl leading-[1.1] text-ivory-50">
                Need something <span className="italic">bespoke?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-ivory-200/80 leading-relaxed max-w-lg">
                Our engineering team designs custom manifolds, control
                systems, and hybrid installations for projects that fall
                outside the standard spec sheet — from municipal water
                works to private estates.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Button href="/contact" className="w-fit">
                Discuss a Custom Build
              </Button>
            </Reveal>
          </div>

          <Reveal direction="right" delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {["Site Survey", "Custom Design", "Fabrication", "Install & Commission"].map(
                (step, i) => (
                  <div
                    key={step}
                    className="flex flex-col gap-2 border border-ivory-50/15 p-5"
                  >
                    <span className="font-display italic text-2xl text-gold-400">
                      0{i + 1}
                    </span>
                    <span className="text-sm text-ivory-200">{step}</span>
                  </div>
                )
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
