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
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my latest works showcasing innovative solutions and creative designs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <Laptop className="w-4 h-4" />
                    <span>Key Features:</span>
                  </div>
                  <ul className="space-y-1 ml-6 text-sm text-gray-600 dark:text-gray-300">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="list-disc">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between mt-6">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
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
