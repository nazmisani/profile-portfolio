"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Nouval Nazmi Sani
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300">
                Full Stack Developer crafting beautiful & functional web
                experiences
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div className="flex items-center gap-4">
                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:shadow-lg transition-all duration-300"
                >
                  <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:shadow-lg transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </motion.a>
                <motion.a
                  href="mailto:your@email.com"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:shadow-lg transition-all duration-300"
                >
                  <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-30 dark:opacity-40"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <Image
                  src="/profile.jpeg"
                  alt="Nouval Nazmi Sani"
                  width={384}
                  height={384}
                  className="rounded-full shadow-2xl border-4 border-white dark:border-gray-800"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
