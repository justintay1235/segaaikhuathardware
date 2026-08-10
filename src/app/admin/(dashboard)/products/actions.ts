"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { PRODUCT_ICON_OPTIONS } from "@/lib/icons";

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

  if (!name || !tagline || !specs.length) {
    return { error: "Name, tagline, and at least one spec are required." };
  }
  if (!PRODUCT_ICON_OPTIONS.includes(icon)) {
    return { error: "Choose a valid icon." };
  }

  await prisma.product.create({
    data: { name, tagline, icon, specsJson: JSON.stringify(specs), featured, order },
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

  if (!name || !tagline || !specs.length) {
    return { error: "Name, tagline, and at least one spec are required." };
  }
  if (!PRODUCT_ICON_OPTIONS.includes(icon)) {
    return { error: "Choose a valid icon." };
  }

  await prisma.product.update({
    where: { id },
    data: { name, tagline, icon, specsJson: JSON.stringify(specs), featured, order },
  });

  revalidatePublicPages();
  redirect("/admin/products");
}

export async function deleteProduct(formData: FormData) {
  const id = Number(formData.get("id"));
  await prisma.product.delete({ where: { id } });
  revalidatePublicPages();
  revalidatePath("/admin/products");
}
