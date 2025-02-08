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
    <section id="education" className="py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-3 text-blue-600" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Education Journey
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic and professional learning path that has shaped my skills and knowledge
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-4 sm:space-y-6"
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-6 p-4 sm:p-6 rounded-xl bg-white dark:bg-gray-800/50 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="flex-grow w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-1 sm:mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                      {item.type}
                    </h3>
                    <span className="inline-block px-2.5 py-0.5 text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    {item.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Education
