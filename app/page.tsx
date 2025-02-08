import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Certifications from "@/components/certifications"
import WhatsAppButton from "@/components/whatsapp-button"


export default function Home() {
  return (
    <main className="relative min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="relative">
        <Hero />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Skills />
          <Projects />
          <Education />
          <Certifications />
        </div>
      </div>
      <WhatsAppButton />
    </main>
  )
}
