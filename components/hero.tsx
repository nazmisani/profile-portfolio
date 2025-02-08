"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 py-20 overflow-hidden relative"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10">
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
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 hover:scale-105 transition-transform cursor-default">
                  Nouval Nazmi Sani
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <span className="relative">
                  <span className="absolute -left-2 -top-2 w-1 h-1 bg-blue-500 rounded-full animate-ping" />
                  Full Stack Developer
                </span>{" "}
                crafting beautiful & functional web experiences
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex gap-4 mt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View Projects
                </motion.button>
                <motion.a
                  href="https://wa.me/+6289526084725"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.92 15.73C16.7 16.29 15.85 16.76 15.22 16.89C14.78 16.98 14.22 17.05 13.09 16.67C11.36 16.09 9.81 14.76 8.76 13.63C8.4 13.24 7.53 12.15 7.53 11.02C7.53 9.89 8.17 9.3 8.47 8.97C8.73 8.69 9.09 8.58 9.43 8.58C9.55 8.58 9.66 8.59 9.76 8.59C10.09 8.6 10.24 8.62 10.44 9.05C10.68 9.57 11.2 10.79 11.27 10.93C11.34 11.08 11.39 11.25 11.29 11.45C10.67 12.74 10.04 12.67 10.55 13.47C11.44 14.88 12.47 15.48 13.71 16.05C13.99 16.19 14.16 16.17 14.36 15.93C14.56 15.69 15.05 15.11 15.27 14.84C15.49 14.57 15.71 14.62 16 14.73C16.29 14.84 17.5 15.43 17.82 15.59C18.14 15.75 18.35 15.83 18.42 15.97C18.5 16.1 18.5 16.59 18.28 17.16L16.92 15.73Z"/>
                  </svg>
                  Contact Me
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div className="flex items-center gap-4">
                <motion.a
                  href="https://github.com/nazmisani"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-3 bg-white dark:bg-gray-800 rounded-full hover:shadow-lg transition-all duration-300 group"
                >
                  <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/nouvalnazmi2362/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="p-3 bg-white dark:bg-gray-800 rounded-full hover:shadow-lg transition-all duration-300 group"
                >
                  <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </motion.a>
                <motion.a
                  href="mailto:nazminouval@gmail.com"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-3 bg-white dark:bg-gray-800 rounded-full hover:shadow-lg transition-all duration-300 group"
                >
                  <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
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
            <motion.div
              className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-30 dark:opacity-40"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl opacity-30 dark:opacity-40"
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [180, 0, 180],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <Image
                  src="/profile.jpeg"
                  alt="Nouval Nazmi Sani"
                  width={384}
                  height={384}
                  className="rounded-full shadow-2xl border-4 border-white dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
