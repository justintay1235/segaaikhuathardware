"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
};

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  direction = "up",
}: RevealProps) {
  const initial =
    direction === "left"
      ? { opacity: 0, x: -32, y: 0 }
      : direction === "right"
      ? { opacity: 0, x: 32, y: 0 }
      : direction === "none"
      ? { opacity: 0, x: 0, y: 0 }
      : { opacity: 0, x: 0, y };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
