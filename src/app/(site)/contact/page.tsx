import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Sega Pumps",
  description:
    "Get in touch with Sega's engineering team for quotes, custom projects, or support.",
};

const INFO = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Plot 14, Industrial Estate Road", "Lagos, Nigeria"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+234 800 000 0000", "Mon – Sat, 8am – 6pm"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["enquiry@aikhuathardware.com"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon – Fri: 8:00 – 18:00", "Sat: 9:00 – 14:00"],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's talk about your"
        italicWord="water challenge."
        description="Whether it's a single residential pump or a multi-site industrial rollout, our engineers respond within one business day."
      />

      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col gap-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {INFO.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="flex flex-col gap-4 border border-maroon-900/10 bg-ivory-50 p-8 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-maroon-50 text-maroon-800">
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl text-maroon-950">{item.title}</h3>
                  <div className="flex flex-col text-sm text-maroon-900/60">
                    {item.lines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-start">
            <Reveal direction="left">
              <ContactForm />
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <div className="flex flex-col gap-6">
                <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-maroon-900 via-maroon-950 to-black">
                  <div className="absolute inset-0 bg-noise opacity-20" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-8">
                    <span className="font-display italic text-3xl text-ivory-50">
                      Sega Pumps
                    </span>
                    <span className="text-xs uppercase tracking-[0.3em] text-gold-400">
                      Head Office &middot; Lagos, Nigeria
                    </span>
                  </div>
                </div>
                <p className="text-sm text-maroon-900/60 leading-relaxed">
                  Prefer to speak directly? Call our engineering desk or
                  stop by our showroom — our team is glad to walk through
                  specifications in person.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
