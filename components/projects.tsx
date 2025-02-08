"use client"

import Image from "next/image"
import { Github, ExternalLink, Laptop, Server, Database } from "lucide-react"
import { motion } from "framer-motion"

const projectsData = [
  {
    title: "EzGigs",
    description: "A comprehensive online ticketing platform designed for event organizers and buyers with AI-powered analytics and robust CMS.",
    image: "/EzGigs.png",
    technologies: ["TypeScript", "Next.js", "MongoDB", "Stripe", "Gemini AI", "Google Vision"],
    features: [
      "AI-powered analytics",
      "Content Management System",
      "Marketplace integration",
      "Real-time camera integration"
    ],
    github: "https://github.com/BSD-22/EzGigs",
    live: "https://ez-gigs-bsd-22.vercel.app/",
    category: "Full Stack"
  },
  {
    title: "Instagram Clone",
    description: "A mobile app replicating Instagram's core features for photo sharing and social connectivity.",
    image: "/instagram.jpg",
    technologies: ["React Native", "GraphQL", "Apollo", "MongoDB"],
    features: [
      "Photo sharing & filters",
      "Social networking features",
      "Content discovery",
      "Real-time notifications"
    ],
    github: "https://github.com/nazmisani/gc01-nazmisani",
    live: " https://expo.dev/preview/update?message=d&updateRuntimeVersion=1.0.0&createdAt=2025-01-19T11%3A11%3A40.274Z&slug=exp&projectId=2f710716-7a27-4b53-b56b-bcbd83fc807e&group=3d10cc95-58d7-4837-ba4b-b27f0ce2d651",
    category: "Mobile App"
  },
  {
    title: "Tokopedia Clone",
    description: "A feature-rich e-commerce platform inspired by Tokopedia with modern UI/UX.",
    image: "/tokopaedi.png",
    technologies: ["TypeScript", "Next.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Product management",
      "Shopping cart system",
      "User authentication",
      "Search & filtering"
    ],
    github: "https://github.com/nazmisani/gc02-nazmisani",
    live: "https://tokopaedii.vercel.app/",
    category: "Full Stack"
  },
  {
    title: "Guessionary",
    description: "Real-time multiplayer game using Socket.io for picture guessing challenges.",
    image: "/guessionary.png",
    technologies: ["React", "TypeScript", "Prisma", "Socket.io", "Tailwind CSS"],
    features: [
      "Real-time multiplayer",
      "Picture guessing system",
      "Live scoring",
      "Chat functionality"
    ],
    github: "https://github.com/BenZeta/Guessionary",
    // live: "https://guessionary.example.com",
    category: "Web App"
  },
  {
    title: "Activity Suggestion",
    description: "A smart activity generator integrated with Gemini AI for personalized recommendations.",
    image: "/activity-suggestion.png",
    technologies: ["JavaScript", "Gemini AI", "Socket.io", "Tailwind CSS", "PostgreSQL"],
    features: [
      "AI-powered suggestions",
      "Real-time updates",
      "Personalization engine",
      "User preference tracking"
    ],
    github: "https://github.com/nazmisani/activity-suggestion",
    live: "https://activity-suggestion-27uh.vercel.app/login",
    category: "Web App"
  },
  {
    title: "MovieFlix",
    description: "A sleek movie browsing platform showcasing films with detailed information.",
    image: "/movie.png",
    technologies: ["React", "Express.js", "Node.js", "PostgreSQL", "Sequelize"],
    features: [
      "Movie catalog",
      "Search functionality",
      "Detailed movie info",
      "User reviews"
    ],
    github: "https://github.com/nazmisani/movieFlix",
    live: "https://movie-flix-beta-three.vercel.app/",
    category: "Full Stack"
  }
]

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Full Stack":
        return <Server className="w-5 h-5" />
      case "Web App":
        return <Laptop className="w-5 h-5" />
      case "Backend":
        return <Database className="w-5 h-5" />
      default:
        return <Laptop className="w-5 h-5" />
    }
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 bg-blue-600/20 backdrop-blur-sm rounded-lg">
                      {getCategoryIcon(project.category)}
                    </div>
                    <span className="text-sm font-medium">{project.category}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </motion.a>
                  {project.title !== "Guessionary" && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
