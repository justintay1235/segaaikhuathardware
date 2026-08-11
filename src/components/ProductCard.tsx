import Image from "next/image";
import type { LucideIcon } from "lucide-react";

export type Product = {
  icon: LucideIcon;
  name: string;
  tagline: string;
  specs: string[];
  imageUrl?: string | null;
};

export default function ProductCard({ icon: Icon, name, tagline, specs, imageUrl }: Product) {
  return (
    <div className="group relative overflow-hidden border border-maroon-900/10 bg-ivory-50 flex flex-col gap-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-24px_rgba(92,0,0,0.35)]">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-maroon-700 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-10" />

      {imageUrl ? (
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-maroon-50">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      ) : null}

      <div className="flex flex-col gap-6 p-9">
        {!imageUrl && (
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-maroon-50 text-maroon-800 transition-colors duration-500 group-hover:bg-maroon-800 group-hover:text-ivory-50">
            <Icon size={24} strokeWidth={1.5} />
          </div>
        )}

        <div className="flex flex-col gap-2">
          <h3 className="font-display text-2xl text-maroon-950">{name}</h3>
          <p className="text-sm text-maroon-900/60 leading-relaxed">{tagline}</p>
        </div>

        <ul className="flex flex-col gap-2 pt-2 border-t border-maroon-900/10">
          {specs.map((spec) => (
            <li
              key={spec}
              className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-maroon-800/70"
            >
              <span className="h-1 w-1 rounded-full bg-gold-500" />
              {spec}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
