import Link from "next/link";
import { Pencil, Plus, Star, Trash2 } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { getProductIcon } from "@/lib/icons";
import { deleteProduct } from "./actions";

export const dynamic = "force-dynamic";

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({ orderBy: { order: "asc" } });

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-maroon-500">Back Office</p>
          <h1 className="font-display text-3xl text-maroon-950">Products</h1>
        </div>
        <Link
          href="/admin/products/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-medium bg-maroon-800 text-ivory-50 hover:bg-maroon-950 transition-colors"
        >
          <Plus size={16} /> New Product
        </Link>
      </div>

      <div className="flex flex-col divide-y divide-maroon-900/10 border border-maroon-900/10 bg-ivory-50">
        {products.length === 0 && (
          <p className="p-6 text-sm text-maroon-900/60">No products yet.</p>
        )}
        {products.map((product) => {
          const Icon = getProductIcon(product.icon);
          const specs: string[] = JSON.parse(product.specsJson);
          return (
            <div key={product.id} className="flex items-center gap-5 p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-maroon-50 text-maroon-800">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-lg text-maroon-950 truncate">{product.name}</h3>
                  {product.featured && (
                    <span className="inline-flex items-center gap-1 text-[0.65rem] uppercase tracking-[0.15em] text-gold-500">
                      <Star size={12} className="fill-current" /> Featured
                    </span>
                  )}
                </div>
                <p className="text-sm text-maroon-900/60 truncate">{product.tagline}</p>
                <p className="text-xs text-maroon-900/40 truncate">{specs.join(" · ")}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Link
                  href={`/admin/products/${product.id}/edit`}
                  className="p-2 text-maroon-700 hover:text-maroon-950 hover:bg-maroon-50 transition-colors"
                  aria-label={`Edit ${product.name}`}
                >
                  <Pencil size={16} />
                </Link>
                <form action={deleteProduct}>
                  <input type="hidden" name="id" value={product.id} />
                  <button
                    type="submit"
                    className="p-2 text-maroon-700 hover:text-red-700 hover:bg-maroon-50 transition-colors"
                    aria-label={`Delete ${product.name}`}
                  >
                    <Trash2 size={16} />
                  </button>
                </form>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
