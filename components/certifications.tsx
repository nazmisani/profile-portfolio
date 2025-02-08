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
    <section id="certifications" className="py-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 -top-48 -right-48 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute w-96 h-96 -bottom-48 -left-48 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
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
            <Trophy className="w-full h-full text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Certifications & Achievements
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            A collection of professional certifications and technical achievements
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative"
        >
          {certificationsData.map((cert, index) => (
            <motion.div
              key={`${cert.title}-${cert.organization}`}
              variants={certVariants}
              className="group relative"
            >
              {/* Card background with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative h-full p-6 bg-white dark:bg-gray-800/90 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-transparent dark:hover:border-transparent transition-colors duration-300">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
                  <div className="absolute inset-0" style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                  }} />
                </div>

                <div className="relative">
                  {/* Trophy icon with gradient background */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-2.5 shadow-md mb-4 group-hover:scale-110 transition-transform duration-300">
                    <cert.icon className="w-full h-full text-white" />
                  </div>

                  {/* Certificate content */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        {cert.organization}
                      </span>
                      <span className="px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-sm">
                        {cert.issueDate}
                      </span>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 to-purple-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -mt-2 -mr-2">
                  <div className="w-4 h-4 bg-blue-500/10 rounded-full animate-ping" />
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
