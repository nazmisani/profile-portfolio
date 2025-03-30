import dynamic from "next/dynamic";
import Hero from "@/components/hero";
import WhatsAppButton from "@/components/whatsapp-button";
import ScrollReveal from "@/components/scroll-reveal";

// Lazy load components for better performance
const Skills = dynamic(() => import("@/components/skills"), { ssr: true });
const Projects = dynamic(() => import("@/components/projects"), { ssr: true });
const Experience = dynamic(() => import("@/components/experience"), {
  ssr: true,
});
const Education = dynamic(() => import("@/components/education"), {
  ssr: true,
});
const Certifications = dynamic(() => import("@/components/certifications"), {
  ssr: true,
});

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gray-50 dark:bg-gray-900">
      <Hero />
      <div className="relative divide-y divide-gray-100 dark:divide-gray-800 mx-auto max-w-[2000px]">
        <ScrollReveal direction="up" delay={0.1}>
          <Skills />
        </ScrollReveal>
        <ScrollReveal direction="left" delay={0.2}>
          <Projects />
        </ScrollReveal>
        <ScrollReveal direction="right" delay={0.2}>
          <Experience />
        </ScrollReveal>
        <ScrollReveal direction="left" delay={0.3}>
          <Education />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.4}>
          <Certifications />
        </ScrollReveal>
      </div>
      <WhatsAppButton />
    </main>
  );
}
