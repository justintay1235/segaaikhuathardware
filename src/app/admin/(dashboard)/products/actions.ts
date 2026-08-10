"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { PRODUCT_ICON_OPTIONS } from "@/lib/icons";
import { deleteProductImage, saveProductImage } from "@/lib/uploads";

function parseSpecs(raw: string): string[] {
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function revalidatePublicPages() {
  revalidatePath("/");
  revalidatePath("/products");
}

export type ProductFormState = { error?: string };

export async function createProduct(
  _prevState: ProductFormState,
  formData: FormData
): Promise<ProductFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const tagline = String(formData.get("tagline") ?? "").trim();
  const icon = String(formData.get("icon") ?? "").trim();
  const specs = parseSpecs(String(formData.get("specs") ?? ""));
  const featured = formData.get("featured") === "on";
  const order = Number(formData.get("order") ?? 0);
  const imageFile = formData.get("image");

  if (!name || !tagline || !specs.length) {
    return { error: "Name, tagline, and at least one spec are required." };
  }
  if (!PRODUCT_ICON_OPTIONS.includes(icon)) {
    return { error: "Choose a valid icon." };
  }

  let imageUrl: string | null = null;
  if (imageFile instanceof File && imageFile.size > 0) {
    try {
      imageUrl = await saveProductImage(imageFile);
    } catch (err) {
      return { error: err instanceof Error ? err.message : "Could not save image." };
    }
  }

  await prisma.product.create({
    data: { name, tagline, icon, imageUrl, specsJson: JSON.stringify(specs), featured, order },
  });

  revalidatePublicPages();
  redirect("/admin/products");
}

export async function updateProduct(
  id: number,
  _prevState: ProductFormState,
  formData: FormData
): Promise<ProductFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const tagline = String(formData.get("tagline") ?? "").trim();
  const icon = String(formData.get("icon") ?? "").trim();
  const specs = parseSpecs(String(formData.get("specs") ?? ""));
  const featured = formData.get("featured") === "on";
  const order = Number(formData.get("order") ?? 0);
  const removeImage = formData.get("removeImage") === "on";
  const imageFile = formData.get("image");

  if (!name || !tagline || !specs.length) {
    return { error: "Name, tagline, and at least one spec are required." };
  }
  if (!PRODUCT_ICON_OPTIONS.includes(icon)) {
    return { error: "Choose a valid icon." };
  }

  const existing = await prisma.product.findUnique({ where: { id }, select: { imageUrl: true } });
  let imageUrl = existing?.imageUrl ?? null;

  if (imageFile instanceof File && imageFile.size > 0) {
    try {
      const newImageUrl = await saveProductImage(imageFile);
      await deleteProductImage(imageUrl);
      imageUrl = newImageUrl;
    } catch (err) {
      return { error: err instanceof Error ? err.message : "Could not save image." };
    }
  } else if (removeImage) {
    await deleteProductImage(imageUrl);
    imageUrl = null;
  }

  await prisma.product.update({
    where: { id },
    data: { name, tagline, icon, imageUrl, specsJson: JSON.stringify(specs), featured, order },
  });

  revalidatePublicPages();
  redirect("/admin/products");
}

export async function deleteProduct(formData: FormData) {
  const id = Number(formData.get("id"));
  const product = await prisma.product.findUnique({ where: { id }, select: { imageUrl: true } });
  await prisma.product.delete({ where: { id } });
  await deleteProductImage(product?.imageUrl);
  revalidatePublicPages();
  revalidatePath("/admin/products");
}
