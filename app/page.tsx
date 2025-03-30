import dynamic from "next/dynamic";
import Hero from "@/components/hero";
import WhatsAppButton from "@/components/whatsapp-button";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import ScrollReveal from "@/components/scroll-reveal";

// Lazy load less critical components
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
        <Skills />
        <Projects />
        <ScrollReveal direction="right" delay={0.1}>
          <Experience />
        </ScrollReveal>
        <ScrollReveal direction="left" delay={0.1}>
          <Education />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <Certifications />
        </ScrollReveal>
      </div>
      <WhatsAppButton />
    </main>
  );
}
