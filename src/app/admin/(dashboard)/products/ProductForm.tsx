"use client";

import Image from "next/image";
import { useActionState, useState } from "react";
import { PRODUCT_ICON_OPTIONS } from "@/lib/icons";
import type { ProductFormState } from "./actions";

const inputClasses =
  "w-full border-b border-maroon-900/20 bg-transparent py-3 text-sm text-maroon-950 placeholder:text-maroon-900/40 focus:border-maroon-800 focus:outline-none transition-colors";

type ProductFormValues = {
  name: string;
  tagline: string;
  icon: string;
  imageUrl: string | null;
  specs: string[];
  featured: boolean;
  order: number;
};

type ProductFormProps = {
  action: (state: ProductFormState, formData: FormData) => Promise<ProductFormState>;
  initialValues?: ProductFormValues;
  submitLabel: string;
};

const defaults: ProductFormValues = {
  name: "",
  tagline: "",
  icon: PRODUCT_ICON_OPTIONS[0],
  imageUrl: null,
  specs: [],
  featured: false,
  order: 0,
};

export default function ProductForm({ action, initialValues, submitLabel }: ProductFormProps) {
  const values = initialValues ?? defaults;
  const [state, formAction, pending] = useActionState(action, {});
  const [preview, setPreview] = useState<string | null>(values.imageUrl);
  const [removeImage, setRemoveImage] = useState(false);

  return (
    <form action={formAction} className="flex flex-col gap-8 border border-maroon-900/10 bg-ivory-50 p-9 max-w-2xl">
      <div className="grid sm:grid-cols-2 gap-8">
        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.2em] text-maroon-700/70">Name</span>
          <input required name="name" defaultValue={values.name} className={inputClasses} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.2em] text-maroon-700/70">Icon</span>
          <select required name="icon" defaultValue={values.icon} className={inputClasses}>
            {PRODUCT_ICON_OPTIONS.map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-maroon-700/70">Tagline</span>
        <input required name="tagline" defaultValue={values.tagline} className={inputClasses} />
      </label>

      <div className="flex flex-col gap-3">
        <span className="text-xs uppercase tracking-[0.2em] text-maroon-700/70">Photo</span>
        {preview && !removeImage && (
          <div className="relative h-32 w-32 overflow-hidden border border-maroon-900/10">
            <Image src={preview} alt="" fill className="object-cover" unoptimized />
          </div>
        )}
        <input
          type="file"
          name="image"
          accept="image/jpeg,image/png,image/webp,image/gif"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setPreview(URL.createObjectURL(file));
              setRemoveImage(false);
            }
          }}
          className="text-sm text-maroon-900/80 file:mr-4 file:px-4 file:py-2 file:border-0 file:bg-maroon-50 file:text-maroon-800 file:text-xs file:uppercase file:tracking-[0.15em]"
        />
        {values.imageUrl && (
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              name="removeImage"
              checked={removeImage}
              onChange={(e) => {
                setRemoveImage(e.target.checked);
                if (e.target.checked) setPreview(null);
                else setPreview(values.imageUrl);
              }}
              className="h-4 w-4 accent-maroon-800"
            />
            <span className="text-sm text-maroon-900/80">Remove current photo</span>
          </label>
        )}
        <p className="text-xs text-maroon-900/50">
          JPEG, PNG, WebP, or GIF, up to 5MB. Falls back to the icon above if no photo is set.
        </p>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-[0.2em] text-maroon-700/70">
          Specs (one per line)
        </span>
        <textarea
          required
          name="specs"
          rows={4}
          defaultValue={values.specs.join("\n")}
          className={`${inputClasses} resize-none`}
        />
      </label>

      <div className="grid sm:grid-cols-2 gap-8 items-end">
        <label className="flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.2em] text-maroon-700/70">
            Display Order
          </span>
          <input
            type="number"
            name="order"
            defaultValue={values.order}
            className={inputClasses}
          />
        </label>
        <label className="flex items-center gap-3 pb-3">
          <input
            type="checkbox"
            name="featured"
            defaultChecked={values.featured}
            className="h-4 w-4 accent-maroon-800"
          />
          <span className="text-sm text-maroon-900/80">Show on homepage (featured)</span>
        </label>
      </div>

      {state.error && <p className="text-sm text-red-600">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="self-start px-8 py-3.5 text-[0.8rem] uppercase tracking-[0.18em] font-medium bg-maroon-800 text-ivory-50 hover:bg-maroon-950 transition-all duration-500 disabled:opacity-60"
      >
        {pending ? "Saving..." : submitLabel}
      </button>
    </form>
  );
}
