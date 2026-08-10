"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function toggleRead(formData: FormData) {
  const id = Number(formData.get("id"));
  const read = formData.get("read") === "true";
  await prisma.contactSubmission.update({ where: { id }, data: { read: !read } });
  revalidatePath("/admin/inquiries");
  revalidatePath("/admin");
}

export async function deleteInquiry(formData: FormData) {
  const id = Number(formData.get("id"));
  await prisma.contactSubmission.delete({ where: { id } });
  revalidatePath("/admin/inquiries");
  revalidatePath("/admin");
}
