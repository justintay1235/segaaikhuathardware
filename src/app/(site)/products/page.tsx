import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { prisma } from "@/lib/prisma";
import { getProductIcon } from "@/lib/icons";

export const metadata: Metadata = {
  title: "Products | Sega Pumps",
  description:
    "Explore Sega's full range of water pumps — centrifugal, submersible, solar, industrial, agricultural, and residential.",
};

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const products = await prisma.product.findMany({ orderBy: { order: "asc" } });

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
            {products.map((product, i) => (
              <Reveal key={product.id} delay={(i % 3) * 0.08}>
                <ProductCard
                  icon={getProductIcon(product.icon)}
                  name={product.name}
                  tagline={product.tagline}
                  specs={JSON.parse(product.specsJson)}
                />
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
