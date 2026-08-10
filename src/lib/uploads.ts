import { mkdir, unlink, writeFile } from "fs/promises";
import path from "path";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "products");
const MAX_SIZE_BYTES = 5 * 1024 * 1024;

const EXTENSION_BY_MIME: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
};

export async function saveProductImage(file: File): Promise<string> {
  const extension = EXTENSION_BY_MIME[file.type];
  if (!extension) {
    throw new Error("Image must be a JPEG, PNG, WebP, or GIF file.");
  }
  if (file.size > MAX_SIZE_BYTES) {
    throw new Error("Image must be 5MB or smaller.");
  }

  await mkdir(UPLOAD_DIR, { recursive: true });

  const filename = `${crypto.randomUUID()}.${extension}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(UPLOAD_DIR, filename), buffer);

  return `/uploads/products/${filename}`;
}

export async function deleteProductImage(imageUrl: string | null | undefined) {
  if (!imageUrl || !imageUrl.startsWith("/uploads/products/")) return;
  const filename = path.basename(imageUrl);
  try {
    await unlink(path.join(UPLOAD_DIR, filename));
  } catch {
    // File already gone — nothing to do.
  }
}
