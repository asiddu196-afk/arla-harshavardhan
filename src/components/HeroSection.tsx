import { ArrowDownRight, Download, Github, Linkedin, Terminal } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { NeuralSphereCanvas } from './NeuralSphereCanvas';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export function HeroSection({ onOpenResume }: HeroSectionProps) {
  return (
    <section id="top" className="relative z-10 border-b border-slate-800/70 pt-10 pb-14 md:pt-16 md:pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Identity, Headline & Actions */}
          <div className="flex flex-col justify-center lg:col-span-7">
            {/* Status Indicator (clean typographic frame, no pulsing dot) */}
            <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-medium text-[#94A3B8]">
              <span className="inline-flex items-center gap-2 rounded-md border border-[#00C8FF]/30 bg-[#0B1020] px-3 py-1.5 text-[#00F5FF]">
                <Terminal className="h-3.5 w-3.5 text-[#00C8FF]" aria-hidden="true" />
                <span>{PROFILE.status}</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{PROFILE.education}</span>
            </div>

            {/* Prominent Name */}
            <p className="font-display text-xl font-bold tracking-widest text-[#00C8FF] sm:text-2xl">
              {PROFILE.displayName}
            </p>
            <p className="mt-1.5 text-sm font-medium text-[#94A3B8] sm:text-base">
              {PROFILE.roleLine}
            </p>

            {/* Main Headline */}
            <h1 className="mt-6 max-w-2xl text-balance font-display text-4xl font-bold leading-[1.08] tracking-tight text-[#F8FAFC] sm:text-5xl lg:text-[3.6rem]">
              Building the{' '}
              <span className="bg-gradient-to-r from-[#00C8FF] via-[#00F5FF] to-[#8B5CF6] bg-clip-text text-transparent">
                Future with AI.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#94A3B8] sm:text-lg">
              {PROFILE.subtitle}
            </p>

            {/* Primary & Secondary Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#00C8FF] to-[#00F5FF] px-5 py-3 text-sm font-semibold text-[#050816] whitespace-nowrap shrink-0 shadow-[0_0_24px_-6px_rgba(0,200,255,0.65)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_32px_-4px_rgba(0,245,255,0.75)]"
              >
                <span>Explore My Projects</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700/80 bg-[#0B1020]/90 px-5 py-3 text-sm font-semibold text-[#F8FAFC] whitespace-nowrap shrink-0 transition-colors duration-200 hover:border-[#00C8FF]/60 hover:text-[#00F5FF]"
              >
                <Download className="h-4 w-4 text-[#00C8FF]" aria-hidden="true" />
                <span>Download Resume</span>
              </button>

              <div className="flex items-center gap-2.5">
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="A. Harshvardhan on GitHub"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-[#0B1020]/70 px-4 py-3 text-sm font-medium text-[#94A3B8] whitespace-nowrap shrink-0 transition-colors duration-200 hover:border-[#8B5CF6]/55 hover:text-[#F8FAFC]"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="A. Harshvardhan on LinkedIn"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-[#0B1020]/70 px-4 py-3 text-sm font-medium text-[#94A3B8] whitespace-nowrap shrink-0 transition-colors duration-200 hover:border-[#00C8FF]/55 hover:text-[#F8FAFC]"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Neural Sphere */}
          <div className="lg:col-span-5">
            <NeuralSphereCanvas />
          </div>
        </div>

        {/* Full-Width Key Focus Strip Below Hero Split */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-slate-800/80 bg-slate-800/60 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-[#0B1020]/90 px-5 py-4">
            <p className="text-xs font-medium text-[#94A3B8]">Academic Stage</p>
            <p className="mt-1 font-display text-base font-semibold text-[#F8FAFC]">B.Tech — First Year</p>
          </div>
          <div className="bg-[#0B1020]/90 px-5 py-4">
            <p className="text-xs font-medium text-[#94A3B8]">Core Foundation</p>
            <p className="mt-1 font-display text-base font-semibold text-[#F8FAFC]">Python & Generative AI</p>
          </div>
          <div className="bg-[#0B1020]/90 px-5 py-4">
            <p className="text-xs font-medium text-[#94A3B8]">Flagship Vision</p>
            <p className="mt-1 font-display text-base font-semibold text-[#00F5FF]">LEARNLOOP Platform</p>
          </div>
          <div className="bg-[#0B1020]/90 px-5 py-4">
            <p className="text-xs font-medium text-[#94A3B8]">Engineering Mindset</p>
            <p className="mt-1 font-display text-base font-semibold text-[#F8FAFC]">Curiosity Into Code</p>
          </div>
        </div>
      </div>
    </section>
  );
}
