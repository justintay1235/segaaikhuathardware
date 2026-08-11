import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";
import { prisma } from "@/lib/prisma";
import { ADDRESS, MAPS_HREF } from "@/lib/contact";

const EXPLORE_LINKS = [
  { href: "/about", label: "About Sega" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default async function Footer() {
  const products = await prisma.product.findMany({
    orderBy: { order: "asc" },
    take: 4,
    select: { id: true, name: true },
  });

  return (
    <footer className="bg-brand text-ivory-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-14 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
        <div className="flex flex-col gap-5">
          <Logo light />
          <p className="text-sm leading-relaxed text-ivory-300 max-w-xs">
            Precision water pumps engineered for industry, agriculture, and
            home — built in the spirit of quiet, enduring craftsmanship.
          </p>
          <div className="flex items-center gap-4 pt-2 text-ivory-200">
            <Link href="#" aria-label="Facebook" className="hover:text-gold-400 transition-colors">
              <FacebookIcon size={18} />
            </Link>
            <Link href="#" aria-label="Instagram" className="hover:text-gold-400 transition-colors">
              <InstagramIcon size={18} />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-gold-400 transition-colors">
              <LinkedinIcon size={18} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-400">Explore</p>
          <ul className="flex flex-col gap-3">
            {EXPLORE_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-ivory-300 hover:text-ivory-50 transition-colors underline-grow"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-400">Products</p>
          <ul className="flex flex-col gap-3">
            {products.map((product) => (
              <li key={product.id}>
                <Link
                  href={`/products/${product.id}`}
                  className="text-sm text-ivory-300 hover:text-ivory-50 transition-colors underline-grow"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-400">Reach Us</p>
          <div className="flex flex-col gap-3 text-sm text-ivory-300">
            <a
              href={MAPS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 hover:text-ivory-50 transition-colors"
            >
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
              {ADDRESS}
            </a>
            <span className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-gold-400" />
              +60 12-345 6789
            </span>
            <span className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-gold-400" />
              enquiry@aikhuathardware.com
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory-50/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory-300/70">
          <p>&copy; {new Date().getFullYear()} Sega Pumps. All rights reserved.</p>
          <p className="italic font-display text-ivory-300/90">
            Engineered for legacy.
          </p>
        </div>
      </div>
    </footer>
  );
}
