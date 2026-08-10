import {
  Headphones,
  Package,
  RefreshCw,
  Settings,
  GraduationCap,
  Wrench,
} from "lucide-react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Services | Sega Pumps",
  description:
    "Installation, maintenance, custom engineering, and 24/7 support for every Sega pump we deliver.",
};

const SERVICES = [
  {
    icon: Wrench,
    title: "Installation",
    text: "Certified technicians handle site prep, mounting, and commissioning to spec.",
  },
  {
    icon: RefreshCw,
    title: "Maintenance & AMC",
    text: "Scheduled servicing plans that catch wear before it becomes downtime.",
  },
  {
    icon: Settings,
    title: "Custom Engineering",
    text: "Bespoke manifolds, control panels, and hybrid systems for unique sites.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    text: "A direct line to our engineers, day or night, for critical installations.",
  },
  {
    icon: Package,
    title: "Genuine Spare Parts",
    text: "Original components, stocked regionally, for rapid turnaround.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    text: "On-site operator training so your team runs equipment with confidence.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Consultation",
    text: "We learn your flow requirements, site conditions, and long-term goals.",
  },
  {
    step: "02",
    title: "Site Assessment",
    text: "Engineers survey the site to confirm head, flow, and power constraints.",
  },
  {
    step: "03",
    title: "Design & Proposal",
    text: "A tailored system is specified, priced, and reviewed with you line by line.",
  },
  {
    step: "04",
    title: "Installation",
    text: "Certified crews install and commission — tested before we call it done.",
  },
  {
    step: "05",
    title: "Ongoing Support",
    text: "AMC plans and 24/7 support keep your system running for its full lifespan.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Support that runs as long as"
        italicWord="the pump does."
        description="A Sega pump is only half the promise — the other half is the team standing behind it, from first survey to tenth service call."
      />

      {/* Services grid */}
      <section className="py-28 sm:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col gap-16">
          <SectionHeading
            eyebrow="What We Offer"
            title="End-to-end care,"
            italicWord="every time."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.06}>
                <div className="group h-full flex flex-col gap-5 border border-maroon-900/10 bg-ivory-50 p-9 transition-shadow duration-500 hover:shadow-[0_24px_60px_-24px_rgba(75,15,26,0.35)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-maroon-50 text-maroon-800 transition-colors duration-500 group-hover:bg-maroon-800 group-hover:text-ivory-50">
                    <service.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl text-maroon-950">{service.title}</h3>
                  <p className="text-sm text-maroon-900/60 leading-relaxed">{service.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 sm:py-36 bg-maroon-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col gap-16">
          <SectionHeading
            light
            eyebrow="How We Work"
            title="A process built on"
            italicWord="no surprises."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {PROCESS.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.08}>
                <div className="flex flex-col gap-4">
                  <span className="font-display italic text-4xl text-gold-400">{item.step}</span>
                  <h4 className="font-display text-xl text-ivory-50">{item.title}</h4>
                  <p className="text-sm text-ivory-300 leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 flex flex-col items-center text-center gap-8">
          <SectionHeading
            eyebrow="Talk to Us"
            title="Let's plan your service"
            italicWord="schedule."
          />
          <Reveal delay={0.1}>
            <Button href="/contact">Book a Consultation</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
