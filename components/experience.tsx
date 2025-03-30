"use client";

import { Briefcase, Building2, Users, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const experienceData = [
  {
    type: "Fullstack Developer",
    company: "Samakita",
    location: "Remote",
    period: "February 2025 - Present",
    responsibilities: [
      "Worked as a freelancer on a client project.",
      "Developed the backend for the Expense Management feature, including API creation for expense tracking and reporting.",
      "Designed and styled the user interface using React and Tailwind CSS.",
      "Implemented translation features to enhance accessibility for international users.",
      "Collaborated with the team in designing system architecture and ensuring seamless backend and frontend integration.",
    ],
    icon: Briefcase,
  },
  {
    type: "Teacher",
    company: "MAS Al-Amanah Al-Gontory",
    location: "Tangerang, Indonesia",
    period: "May 2023 – June 2024",
    responsibilities: [
      "Taught and mentored over 30 students, implementing interactive teaching methods that improved student engagement and comprehension by 80% (based on student evaluations).",
      "Guided and mentored students in dormitory settings, providing academic and personal support.",
    ],
    icon: Users,
  },
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

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
  };

  return (
    <section
      id="experience"
      className="py-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20"
    >
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
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
              delay: 0.2,
            }}
            className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-3 shadow-lg"
          >
            <Building2 className="w-full h-full text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Work Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            My professional journey and contributions in various roles
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experienceData.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="h-full p-6 bg-white dark:bg-gray-800/90 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 dark:border-blue-400 overflow-hidden relative"
                >
                  {/* Header with icon and title */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-full h-full text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.type}
                      </h3>
                      <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  {/* Info badges */}
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-full">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="relative">
                    <h4 className="text-md font-semibold text-gray-800 dark:text-gray-200 mb-3">
                      Responsibilities:
                    </h4>
                    <ul className="space-y-2.5 list-none text-gray-600 dark:text-gray-400">
                      {item.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 -mt-2 -mr-2">
                    <div className="w-4 h-4 bg-blue-500/10 rounded-full animate-ping" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-full -mb-10 -mr-10 z-0"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
