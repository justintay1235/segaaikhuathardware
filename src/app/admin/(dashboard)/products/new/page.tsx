import ProductForm from "../ProductForm";
import { createProduct } from "../actions";

export default function NewProductPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-maroon-500">Back Office</p>
        <h1 className="font-display text-3xl text-maroon-950">New Product</h1>
      </div>
      <ProductForm action={createProduct} submitLabel="Create Product" />
    </div>
  );
}
