import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProjectsSection } from "./components/ProjectsSection";
import { XRSection } from "./components/XRSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ContactSection } from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <ProjectsSection />
        <XRSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}
