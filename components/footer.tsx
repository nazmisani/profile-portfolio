import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">&copy; 2025 Nouval Nazmi Sani. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:nouval@example.com"
              className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

