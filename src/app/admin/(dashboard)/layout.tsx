import Link from "next/link";
import type { ReactNode } from "react";
import { LayoutDashboard, LogOut, MessageSquare, Package } from "lucide-react";
import { getSession } from "@/lib/auth";
import { logoutAction } from "../login/actions";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/inquiries", label: "Inquiries", icon: MessageSquare },
];

export default async function AdminDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getSession();

  return (
    <div className="min-h-screen flex bg-ivory-100">
      <aside className="hidden sm:flex w-60 flex-col justify-between bg-brand text-ivory-100 px-6 py-8">
        <div className="flex flex-col gap-10">
          <Link href="/" className="font-display italic text-2xl text-ivory-50">
            Sega.
          </Link>
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 text-sm text-ivory-200 hover:bg-ivory-50/10 hover:text-ivory-50 transition-colors"
              >
                <item.icon size={18} strokeWidth={1.5} />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          {session && (
            <p className="text-xs text-ivory-300/70 truncate">{session.email}</p>
          )}
          <form action={logoutAction}>
            <button
              type="submit"
              className="flex items-center gap-3 px-3 py-2.5 text-sm text-ivory-200 hover:bg-ivory-50/10 hover:text-ivory-50 transition-colors w-full"
            >
              <LogOut size={18} strokeWidth={1.5} />
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      <main className="flex-1 px-6 sm:px-10 py-10">{children}</main>
    </div>
  );
}
