"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { Switch } from "./ui/switch";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <motion.div
      className="flex items-center gap-1 sm:gap-2 p-1 rounded-full bg-gray-100 dark:bg-gray-800"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.button
        className="p-1.5 rounded-full"
        onClick={() => setTheme("light")}
        animate={{
          backgroundColor: !isDark ? "rgba(219, 234, 254, 1)" : "transparent",
          color: !isDark ? "rgba(37, 99, 235, 1)" : "rgba(156, 163, 175, 1)",
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        <Sun size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
      </motion.button>

      <motion.button
        className="p-1.5 rounded-full"
        onClick={() => setTheme("dark")}
        animate={{
          backgroundColor: isDark ? "rgba(30, 58, 138, 0.3)" : "transparent",
          color: isDark ? "rgba(96, 165, 250, 1)" : "rgba(156, 163, 175, 1)",
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        <Moon size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
      </motion.button>
    </motion.div>
  );
}
