"use client"

import { School, Code, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

const educationData = [
  {
    type: "High School",
    name: "Al-Amanah Al-Gontory",
    year: "2020 - 2023",
    description: "Social Sciences and Religion",
    icon: School,
  },
  {
    type: "Bootcamp",
    name: "Hacktiv8",
    year: "2025",
    description: "Full Stack JavaScript Development",
    icon: Code,
  },
]

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <section id="education" className="py-20 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
            className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-3 shadow-lg"
          >
            <GraduationCap className="w-full h-full text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Education Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            My academic and professional learning path that has shaped my skills and knowledge
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex items-center justify-between sm:justify-normal group mb-8 last:mb-0"
            >
              {/* Timeline dot */}
              <motion.div 
                className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-500 transform -translate-x-2 sm:-translate-x-2"
                whileHover={{ scale: 1.5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />

              {/* Content */}
              <div className={`relative flex-1 ${index % 2 === 0 ? 'sm:mr-auto sm:pr-8' : 'sm:ml-auto sm:pl-8'} ${index % 2 === 0 ? 'ml-12 sm:ml-0' : 'ml-12 sm:ml-0'}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white dark:bg-gray-800/90 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-2.5 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-full h-full text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.type}
                      </h3>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        {item.name}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-sm">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 -mt-2 -mr-2">
                    <div className="w-4 h-4 bg-blue-500/10 rounded-full animate-ping" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education
