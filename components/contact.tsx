"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-20">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Contact Me
      </motion.h2>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <motion.h3 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-semibold mb-4"
            >
              Get in Touch
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 dark:text-gray-300 mb-4"
            >
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </motion.p>
            <motion.div variants={containerVariants} className="space-y-4">
              <motion.div 
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <Mail className="w-6 h-6 mr-2 text-blue-600" />
                <motion.a
                  whileHover={{ color: "#2563EB" }}
                  href="mailto:nouval@example.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  nouval@example.com
                </motion.a>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <Phone className="w-6 h-6 mr-2 text-blue-600" />
                <motion.a
                  whileHover={{ color: "#2563EB" }}
                  href="tel:+1234567890"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  +1 (234) 567-890
                </motion.a>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-center"
              >
                <MapPin className="w-6 h-6 mr-2 text-blue-600" />
                <motion.span 
                  whileHover={{ color: "#2563EB" }}
                  className="text-gray-600 dark:text-gray-300"
                >
                  Jakarta, Indonesia
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div variants={formVariants}>
            <motion.form>
              <motion.div 
                variants={itemVariants}
                className="mb-4"
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="mb-4"
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="mb-4"
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                ></motion.textarea>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
