import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, CheckCircle2, type LucideIcon } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { getProductIcon } from "@/lib/icons";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";

export const dynamic = "force-dynamic";

function IconBadge({ icon: Icon, size = 48 }: { icon: LucideIcon; size?: number }) {
  return <Icon size={size} strokeWidth={1.3} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await prisma.product.findUnique({ where: { id: Number(id) } });
  if (!product) return {};
  return {
    title: `${product.name} | Sega Pumps`,
    description: product.tagline,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await prisma.product.findUnique({ where: { id: Number(id) } });

  if (!product) notFound();

  const specs: string[] = JSON.parse(product.specsJson);

  const related = await prisma.product.findMany({
    where: { id: { not: product.id } },
    orderBy: { order: "asc" },
    take: 3,
  });

  return (
    <>
      <section className="relative pt-36 pb-20 sm:pt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-maroon-700/70 hover:text-maroon-900 transition-colors"
            >
              <ArrowLeft size={14} /> All Products
            </Link>
          </Reveal>

          <div className="mt-10 grid lg:grid-cols-2 gap-14 items-start">
            <Reveal direction="left">
              {product.imageUrl ? (
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-maroon-50">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority
                  />
                </div>
              ) : (
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-maroon-100 via-ivory-200 to-maroon-200 flex items-center justify-center">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-maroon-800 text-ivory-50 shadow-[0_24px_60px_-16px_rgba(92,0,0,0.5)]">
                    <IconBadge icon={getProductIcon(product.icon)} />
                  </div>
                </div>
              )}
            </Reveal>

            <Reveal direction="right" delay={0.1} className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <p className="text-xs uppercase tracking-[0.3em] text-maroon-500">
                  Sega Product
                </p>
                <h1 className="font-display text-balance text-4xl sm:text-5xl leading-[1.1] text-maroon-950">
                  {product.name}
                </h1>
                <p className="text-maroon-900/70 leading-relaxed text-[1.05rem] max-w-lg">
                  {product.tagline}
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {specs.map((spec) => (
                  <li key={spec} className="flex items-start gap-3 text-sm text-maroon-900/80">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-maroon-600" />
                    {spec}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-5 pt-2">
                <Button href={`/contact?interest=${encodeURIComponent(product.name)}`}>
                  Request a Quote
                </Button>
                <Button href="/products" variant="outline">
                  Browse More
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-24 sm:py-32 bg-maroon-50/40">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col gap-14">
            <SectionHeading
              eyebrow="Explore More"
              title="Other pumps you might"
              italicWord="need."
              align="left"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((item, i) => (
                <Reveal key={item.id} delay={i * 0.08}>
                  <Link href={`/products/${item.id}`}>
                    <ProductCard
                      icon={getProductIcon(item.icon)}
                      name={item.name}
                      tagline={item.tagline}
                      specs={JSON.parse(item.specsJson)}
                      imageUrl={item.imageUrl}
                    />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
