"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Icon } from "@iconify/react";

const WhatsAppButton = () => {
  const { scrollYProgress } = useScroll();
  const bottomOffset = useTransform(
    scrollYProgress,
    [0.8, 0.9, 1],
    ["2rem", "2rem", "5rem"]
  );

  return (
    <div
      style={{
        position: "fixed",
        right: "max(1rem, env(safe-area-inset-right))",
        bottom: "2rem",
        zIndex: 100,
      }}
    >
      <a
        href="https://wa.me/+6289526084725"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300"
      >
        <Icon icon="logos:whatsapp-icon" className="w-6 h-6 sm:w-7 sm:h-7" />
        <span className="sr-only">Contact on WhatsApp</span>
      </a>
      <div className="absolute -top-12 right-0 pointer-events-none">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-black text-white text-xs sm:text-sm py-1 px-2 sm:px-3 rounded-lg shadow-lg whitespace-nowrap">
            Chat with me
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
