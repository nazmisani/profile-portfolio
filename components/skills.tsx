"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    name: "Languages",
    icon: "carbon:software-resource",
    skills: [
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "SQL", icon: "vscode-icons:file-type-sql" },
      { name: "Golang", icon: "logos:go" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    icon: "carbon:assembly-cluster",
    skills: [
      { name: "React", icon: "logos:react" },
      { name: "Next.js", icon: "devicon:nextjs" },
      { name: "Express.js", icon: "devicon:express" },
      { name: "Gin Gonic", icon: "simple-icons:go" },
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
      { name: "Prisma", icon: "simple-icons:prisma" },
      { name: "Sequelize", icon: "logos:sequelize" },
      { name: "GORM", icon: "simple-icons:go" },
    ],
  },
  {
    name: "Serverless",
    icon: "carbon:cloud",
    skills: [
      { name: "Vercel", icon: "logos:vercel-icon" },
      { name: "Supabase", icon: "logos:supabase-icon" },
      { name: "Cloudflare", icon: "logos:cloudflare" },
    ],
  },
  {
    name: "Testing",
    icon: "carbon:test-tool",
    skills: [{ name: "Jest", icon: "logos:jest" }],
  },
  {
    name: "API Development",
    icon: "carbon:api",
    skills: [
      { name: "REST API", icon: "carbon:api-1" },
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
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20"
    >
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
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: 0.2,
            }}
            className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-2.5 sm:p-3 shadow-lg"
          >
            <Icon
              icon="carbon:skill-level"
              className="w-full h-full text-white"
            />
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Technical Skills
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work
            with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />

              <div className="relative h-full p-4 sm:p-5 bg-white dark:bg-gray-800/90 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    }}
                  />
                </div>

                <div className="relative">
                  {/* Category header */}
                  <div className="flex items-start gap-2 sm:gap-3 mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-1.5 sm:p-2 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Icon
                        icon={category.icon}
                        className="w-full h-full text-white"
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-gray-700/50 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-300"
                      >
                        <div className="w-4 h-4 sm:w-5 sm:h-5 relative flex items-center justify-center flex-shrink-0">
                          {skill.icon ? (
                            <Icon
                              icon={skill.icon}
                              className="w-full h-full"
                              onError={(e) => {
                                const target = e.target as HTMLElement;
                                target.style.backgroundColor = "currentColor";
                                target.style.borderRadius = "50%";
                              }}
                            />
                          ) : (
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                          )}
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 truncate min-w-0 flex-1">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
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
  );
};

export default Skills;
