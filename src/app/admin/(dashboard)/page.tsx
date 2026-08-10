import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const [productCount, inquiryCount, unreadCount] = await Promise.all([
    prisma.product.count(),
    prisma.contactSubmission.count(),
    prisma.contactSubmission.count({ where: { read: false } }),
  ]);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-maroon-500">Back Office</p>
        <h1 className="font-display text-3xl text-maroon-950">Dashboard</h1>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        <div className="border border-maroon-900/10 bg-ivory-50 p-6 flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.2em] text-maroon-700/60">Products</span>
          <span className="font-display text-4xl text-maroon-950">{productCount}</span>
        </div>
        <div className="border border-maroon-900/10 bg-ivory-50 p-6 flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.2em] text-maroon-700/60">Total Inquiries</span>
          <span className="font-display text-4xl text-maroon-950">{inquiryCount}</span>
        </div>
        <div className="border border-maroon-900/10 bg-ivory-50 p-6 flex flex-col gap-2">
          <span className="text-xs uppercase tracking-[0.2em] text-maroon-700/60">Unread Inquiries</span>
          <span className="font-display text-4xl text-maroon-800">{unreadCount}</span>
        </div>
      </div>
    </div>
  );
}
