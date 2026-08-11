"use client";

import { motion } from "framer-motion";
import { ChatBubbleIcon } from "./SocialIcons";

const PHONE = "60123456789";
const MESSAGE = "Hi Sega, I'd like to ask about your water pumps.";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sega on WhatsApp"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(0,0,0,0.4)]"
    >
      <ChatBubbleIcon size={26} className="stroke-[1.8]" />
    </motion.a>
  );
}
