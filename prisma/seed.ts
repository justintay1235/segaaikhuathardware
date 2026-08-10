import bcrypt from "bcryptjs";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSql({
  url: process.env.DATABASE_URL ?? "file:./prisma/dev.db",
});
const prisma = new PrismaClient({ adapter });

const PRODUCTS = [
  {
    name: "Centrifugal Series",
    icon: "droplets",
    tagline: "High-flow pumps engineered for consistent industrial output.",
    specs: ["Up to 500 m³/h", "IE3 premium motors", "Cast-iron / SS body", "Max head 90m"],
    featured: true,
    order: 0,
  },
  {
    name: "Submersible Series",
    icon: "waves",
    tagline: "Borewell and drainage pumps built to endure the depths.",
    specs: ["Up to 200m head", "Stainless steel shaft", "Sand-resistant seals", "4\"-8\" bore fit"],
    featured: true,
    order: 1,
  },
  {
    name: "Solar Series",
    icon: "sun",
    tagline: "Off-grid pumping for agriculture, powered by the sun.",
    specs: ["MPPT controller", "DC brushless motor", "Zero fuel cost", "Remote monitoring"],
    featured: true,
    order: 2,
  },
  {
    name: "Industrial Booster Systems",
    icon: "gauge",
    tagline: "Pressure-stable multi-pump skids for demanding facilities.",
    specs: ["Variable frequency drive", "Redundant pump sets", "PLC control panel", "24/7 duty rated"],
    featured: false,
    order: 3,
  },
  {
    name: "Agricultural Series",
    icon: "tractor",
    tagline: "Irrigation-ready pumps for fields, farms, and estates.",
    specs: ["Diesel & electric options", "High debris tolerance", "Portable skid mounts", "Long-throw discharge"],
    featured: false,
    order: 4,
  },
  {
    name: "Residential Series",
    icon: "home",
    tagline: "Quiet, compact pumps for homes and light commercial use.",
    specs: ["Whisper-quiet operation", "Compact footprint", "Auto pressure control", "5-year warranty"],
    featured: false,
    order: 5,
  },
];

async function main() {
  const existing = await prisma.product.count();
  if (existing === 0) {
    for (const product of PRODUCTS) {
      await prisma.product.create({
        data: {
          name: product.name,
          icon: product.icon,
          tagline: product.tagline,
          specsJson: JSON.stringify(product.specs),
          featured: product.featured,
          order: product.order,
        },
      });
    }
    console.log(`Seeded ${PRODUCTS.length} products.`);
  } else {
    console.log("Products already exist, skipping product seed.");
  }

  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminEmail || !adminPassword) {
    console.log("ADMIN_EMAIL / ADMIN_PASSWORD not set, skipping admin seed.");
    return;
  }

  const existingAdmin = await prisma.admin.findUnique({ where: { email: adminEmail } });
  if (existingAdmin) {
    console.log(`Admin ${adminEmail} already exists, skipping.`);
    return;
  }

  const passwordHash = await bcrypt.hash(adminPassword, 12);
  await prisma.admin.create({ data: { email: adminEmail, passwordHash } });
  console.log(`Seeded admin account: ${adminEmail}`);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
