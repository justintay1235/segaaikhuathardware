import { Mail, MailOpen, Trash2 } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { deleteInquiry, toggleRead } from "./actions";

export const dynamic = "force-dynamic";

export default async function AdminInquiriesPage() {
  const inquiries = await prisma.contactSubmission.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-maroon-500">Back Office</p>
        <h1 className="font-display text-3xl text-maroon-950">Inquiries</h1>
      </div>

      <div className="flex flex-col divide-y divide-maroon-900/10 border border-maroon-900/10 bg-ivory-50">
        {inquiries.length === 0 && (
          <p className="p-6 text-sm text-maroon-900/60">No inquiries yet.</p>
        )}
        {inquiries.map((inquiry) => (
          <div key={inquiry.id} className={`flex items-start gap-5 p-5 ${inquiry.read ? "" : "bg-maroon-50/40"}`}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon-50 text-maroon-800">
              {inquiry.read ? <MailOpen size={18} /> : <Mail size={18} />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-display text-lg text-maroon-950">{inquiry.name}</h3>
                <span className="text-xs text-maroon-900/50">{inquiry.email}</span>
                {inquiry.phone && <span className="text-xs text-maroon-900/50">· {inquiry.phone}</span>}
                {inquiry.interest && (
                  <span className="text-xs uppercase tracking-[0.15em] text-maroon-500">
                    {inquiry.interest}
                  </span>
                )}
              </div>
              <p className="text-sm text-maroon-900/70 mt-1">{inquiry.message}</p>
              <p className="text-xs text-maroon-900/40 mt-1">
                {inquiry.createdAt.toLocaleString()}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <form action={toggleRead}>
                <input type="hidden" name="id" value={inquiry.id} />
                <input type="hidden" name="read" value={String(inquiry.read)} />
                <button
                  type="submit"
                  className="p-2 text-maroon-700 hover:text-maroon-950 hover:bg-maroon-50 transition-colors"
                  aria-label={inquiry.read ? "Mark as unread" : "Mark as read"}
                >
                  {inquiry.read ? <Mail size={16} /> : <MailOpen size={16} />}
                </button>
              </form>
              <form action={deleteInquiry}>
                <input type="hidden" name="id" value={inquiry.id} />
                <button
                  type="submit"
                  className="p-2 text-maroon-700 hover:text-red-700 hover:bg-maroon-50 transition-colors"
                  aria-label="Delete inquiry"
                >
                  <Trash2 size={16} />
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
