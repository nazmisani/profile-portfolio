"use client"

import { Trophy } from "lucide-react"
import { motion } from "framer-motion"

const certificationsData = [
  {
    title: "Problem Solving (Basic)",
    organization: "HackerRank",
    issueDate: "February 2025",
    icon: Trophy,
  },
  {
    title: "JavaScript (Basic)",
    organization: "HackerRank",
    issueDate: "February 2025",
    icon: Trophy,
  },
  {
    title: "CSS (Basic)",
    organization: "HackerRank",
    issueDate: "February 2025",
    icon: Trophy,
  },
  {
    title: "SQL (Basic)",
    organization: "HackerRank",
    issueDate: "February 2025",
    icon: Trophy,
  },
  {
    title: "React (Basic)",
    organization: "HackerRank",
    issueDate: "February 2025",
    icon: Trophy,
  },
  {
    title: "AJAX and Web API Course Certificate",
    organization: "CODEPOLITAN",
    issueDate: "August 2024",
    icon: Trophy,
  },
  {
    title: "Bootstrap CSS Framework Course Certificate",
    organization: "CODEPOLITAN",
    issueDate: "July 2024",
    icon: Trophy,
  },
  {
    title: "Basic JavaScript Programming",
    organization: "CODEPOLITAN",
    issueDate: "December 2023",
    icon: Trophy,
  },
  {
    title: "Basic JavaScript Programming",
    organization: "Dicoding Indonesia",
    issueDate: "December 2023",
    icon: Trophy,
  },
  {
    title: "Basic Web Programming",
    organization: "Dicoding Indonesia",
    issueDate: "October 2023",
    icon: Trophy,
  },
]

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const certVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section id="certifications" className="py-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Certifications & Achievements
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Professional certifications from HackerRank demonstrating technical proficiency
        </p>
      </motion.div>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
      >
        {certificationsData.map((cert, index) => {
          const IconComponent = cert.icon
          return (
            <motion.div
              key={index}
              variants={certVariants}
              whileHover={{ 
                scale: 1.03,
                y: -5
              }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg"
                >
                  <IconComponent className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    {cert.organization}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Issued on {cert.issueDate}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

export default Certifications
