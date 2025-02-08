"use client"

import { Trophy, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const certificationsData = [
  {
    title: "Problem Solving (Basic)",
    organization: "HackerRank",
    issueDate: "February 2025",
    icon: Trophy,
    url: "https://www.hackerrank.com/certificates/20ff9e7d243b",
  },
  {
    title: "JavaScript (Basic)",
    organization: "HackerRank",
    issueDate: "February 2025",
    icon: Trophy,
    url: "https://www.hackerrank.com/certificates/08b00b050341",
  },
  {
    title: "CSS (Basic)",
    organization: "HackerRank",
    issueDate: "February 2025",
    icon: Trophy,
    url: "https://www.hackerrank.com/certificates/3e0f44218466",
  },
  {
    title: "SQL (Basic)",
    organization: "HackerRank",
    issueDate: "February 2025",
    icon: Trophy,
    url: "https://www.hackerrank.com/certificates/cb84d6654a8f",
  },
  {
    title: "React (Basic)",
    organization: "HackerRank",
    issueDate: "February 2025",
    icon: Trophy,
    url: "https://www.hackerrank.com/certificates/07d523b54518",
  },
  {
    title: "AJAX and Web API Course Certificate",
    organization: "CODEPOLITAN",
    issueDate: "August 2024",
    icon: Trophy,
    url: "https://www.codepolitan.com/c/49DOLD1/",
  },
  {
    title: "Bootstrap CSS Framework Course Certificate",
    organization: "CODEPOLITAN",
    issueDate: "July 2024",
    icon: Trophy,
    url: "https://www.codepolitan.com/c/ZEF0YJV/",
  },
  {
    title: "Basic JavaScript Programming",
    organization: "Dicoding Indonesia",
    issueDate: "December 2023",
    icon: Trophy,
    url: "https://www.dicoding.com/certificates/L4PQQ82JQPO1",
  },
  {
    title: "Basic Web Programming",
    organization: "Dicoding Indonesia",
    issueDate: "October 2023",
    icon: Trophy,
    url: "https://www.dicoding.com/certificates/JLX1WED16P72",
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
    <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
            className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-3 shadow-lg"
          >
            <Trophy className="w-full h-full text-white" />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Certifications & Achievements
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of professional certifications and technical achievements
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {certificationsData.map((cert, index) => (
            <motion.div
              key={`${cert.title}-${cert.organization}`}
              variants={certVariants}
              className="group relative"
            >
              {/* Card background with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative h-full p-4 sm:p-5 bg-white dark:bg-gray-800/90 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-transparent dark:hover:border-transparent transition-colors duration-300">
                <div className="relative flex flex-col h-full">
                  {/* Trophy icon with gradient background */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-2 sm:p-2.5 shadow-md mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <cert.icon className="w-full h-full text-white" />
                  </div>

                  {/* Certificate content */}
                  <div className="flex-1 flex flex-col min-h-[160px] sm:min-h-[180px]">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-2 sm:mb-3">
                        {cert.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0 mb-4">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                          {cert.organization}
                        </span>
                        <span className="px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-sm w-fit">
                          {cert.issueDate}
                        </span>
                      </div>
                    </div>

                    {/* View Certificate Button - Always at bottom */}
                    <motion.a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 gap-2 group shadow-md hover:shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
