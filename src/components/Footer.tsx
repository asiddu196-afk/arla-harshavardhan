import { PROFILE } from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-[#050816]/90 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-sm font-semibold text-[#F8FAFC]">{PROFILE.name}</p>
          <p className="mt-1 text-xs text-[#94A3B8]">
            {PROFILE.education} · Aspiring AI Engineer
          </p>
        </div>

        <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-6 text-xs text-[#94A3B8]">
          <a href="#about" className="transition-colors hover:text-[#00F5FF]">
            About
          </a>
          <a href="#skills" className="transition-colors hover:text-[#00F5FF]">
            Skills
          </a>
          <a href="#projects" className="transition-colors hover:text-[#00F5FF]">
            Projects
          </a>
          <a href="#contact" className="transition-colors hover:text-[#00F5FF]">
            Contact
          </a>
        </nav>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
      </div>
    </footer>
  );
}
