import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Certifications from "@/components/certifications";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gray-50 dark:bg-gray-900">
      <Hero />
      <div className="relative divide-y divide-gray-100 dark:divide-gray-800 mx-auto max-w-[2000px]">
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
      </div>
      <WhatsAppButton />
    </main>
  );
}
