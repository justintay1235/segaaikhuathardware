"use client";

import { motion } from "framer-motion";

export default function PumpEmblem({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-full border border-maroon-800/15"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="absolute inset-[8%] rounded-full border border-gold-500/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-gold-500/60"
            style={{
              transform: `rotate(${i * 30}deg) translate(0, -49%)`,
              transformOrigin: "center",
            }}
          />
        ))}
      </motion.div>
      <motion.div
        className="absolute inset-[18%] rounded-full bg-gradient-to-br from-maroon-700 via-maroon-800 to-maroon-950 shadow-[0_30px_80px_-20px_rgba(75,15,26,0.55)] flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg viewBox="0 0 100 100" className="w-[46%] h-[46%] text-ivory-50">
          <path
            fill="currentColor"
            d="M50 4C50 4 22 40 22 62a28 28 0 0 0 56 0C78 40 50 4 50 4Z"
            opacity="0.95"
          />
        </svg>
      </motion.div>
      <motion.div
        className="absolute inset-[18%] rounded-full"
        style={{
          background:
            "conic-gradient(from 90deg, transparent 0%, rgba(201,162,77,0.35) 8%, transparent 16%)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
