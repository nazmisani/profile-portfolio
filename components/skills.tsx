"use client"

import { Icon } from "@iconify/react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    name: "Languages",
    icon: "carbon:software-resource",
    skills: [
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "SQL", icon: "vscode-icons:file-type-sql" },
    ],
  },
  {
    name: "Frameworks/Libraries",
    icon: "carbon:assembly-cluster",
    skills: [
      { name: "React", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Express.js", icon: "simple-icons:express" },
    ],
  },
  {
    name: "Databases",
    icon: "carbon:data-base",
    skills: [
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "Redis", icon: "logos:redis" },
    ],
  },
  {
    name: "ORMs",
    icon: "mdi:table-large",
    skills: [
      { name: "Prisma", icon: "vscode-icons:file-type-light-prisma" },
      { name: "Sequelize", icon: "logos:sequelize" },
    ],
  },
  {
    name: "Serverless",
    icon: "carbon:cloud",
    skills: [
      { name: "Vercel", icon: "logos:vercel-icon" },
      { name: "Supabase", icon: "logos:supabase-icon" },
      { name: "Cloudflare Workers", icon: "logos:cloudflare" },
    ],
  },
  {
    name: "Testing",
    icon: "carbon:test-tool",
    skills: [{ name: "Jest", icon: "vscode-icons:file-type-jest" }],
  },
  {
    name: "API Development",
    icon: "carbon:api",
    skills: [
      { name: "REST API", icon: "mdi:api" },
      { name: "GraphQL", icon: "logos:graphql" },
    ],
  },
  {
    name: "Cloud VPS",
    icon: "carbon:cloud-services",
    skills: [
      { name: "AWS", icon: "logos:aws" },
      { name: "GCP", icon: "logos:google-cloud" },
    ],
  },
]

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            My technical toolkit includes a wide range of modern technologies and frameworks
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4">
                <div className="p-1.5 sm:p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                  <Icon icon={category.icon} className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white truncate">
                  {category.name}
                </h3>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="flex items-center gap-2 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="p-1 sm:p-1.5 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-200 flex-shrink-0"
                    >
                      <Icon icon={skill.icon} className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.div>
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 truncate">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
