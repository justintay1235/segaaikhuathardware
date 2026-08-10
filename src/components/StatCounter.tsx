"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

type StatCounterProps = {
  value: number;
  suffix?: string;
  label: string;
  light?: boolean;
};

export default function StatCounter({ value, suffix = "", label, light }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center gap-2 text-center"
    >
      <span
        className={`font-display text-4xl sm:text-5xl ${
          light ? "text-ivory-50" : "text-maroon-900"
        }`}
      >
        {count}
        {suffix}
      </span>
      <span
        className={`text-xs uppercase tracking-[0.25em] ${
          light ? "text-ivory-300" : "text-maroon-700/70"
        }`}
      >
        {label}
      </span>
    </motion.div>
  );
}
