import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ProductForm from "../../ProductForm";
import { updateProduct } from "../../actions";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await prisma.product.findUnique({ where: { id: Number(id) } });

  if (!product) notFound();

  const boundUpdate = updateProduct.bind(null, product.id);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-maroon-500">Back Office</p>
        <h1 className="font-display text-3xl text-maroon-950">Edit Product</h1>
      </div>
      <ProductForm
        action={boundUpdate}
        submitLabel="Save Changes"
        initialValues={{
          name: product.name,
          tagline: product.tagline,
          icon: product.icon,
          imageUrl: product.imageUrl,
          specs: JSON.parse(product.specsJson),
          featured: product.featured,
          order: product.order,
        }}
      />
    </div>
  );
}
