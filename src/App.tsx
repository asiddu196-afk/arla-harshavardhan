import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { ParticleField } from './components/ParticleField';
import { ProjectModal } from './components/ProjectModal';
import { ProjectsSection } from './components/ProjectsSection';
import { ResumeModal } from './components/ResumeModal';
import { SkillsDashboard } from './components/SkillsDashboard';
import type { ProjectItem } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050816] text-[#F8FAFC]">
      {/* Subtle Futuristic Grid & Ambient Gradient Mesh */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 bg-ai-grid" />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -top-40 left-1/4 z-0 h-[520px] w-[520px] rounded-full bg-[#00C8FF]/8 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-1/3 -right-24 z-0 h-[460px] w-[460px] rounded-full bg-[#8B5CF6]/10 blur-[130px]"
      />

      {/* Interactive Background Particle Network */}
      <ParticleField />

      {/* Top Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content */}
      <main>
        <HeroSection onOpenResume={() => setResumeOpen(true)} />
        <AboutSection />
        <SkillsDashboard />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <ContactSection />
      </main>

      <Footer />

      {/* Interactive Modals */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
