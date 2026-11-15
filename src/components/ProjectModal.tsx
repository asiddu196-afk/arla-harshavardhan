import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { ProjectItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#050816]/85 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-700/80 bg-[#0B1020] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Image Banner */}
        <div className="relative h-56 w-full overflow-hidden border-b border-slate-800 sm:h-64">
          <img
            src={project.imageUrl}
            alt={project.imageAlt}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-[#0B1020]/30 to-transparent"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-[#050816]/85 text-[#F8FAFC] transition-colors hover:border-[#00C8FF] hover:text-[#00F5FF]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#94A3B8]">
            <span className="font-semibold text-[#00C8FF]">{project.status}</span>
            <span aria-hidden="true">·</span>
            <span>{project.stack.join(' · ')}</span>
          </div>

          <h3 id="project-modal-title" className="mt-3 font-display text-3xl font-bold text-[#F8FAFC]">
            {project.title}
          </h3>
          <p className="mt-1 text-base font-medium text-[#8B5CF6]">{project.subtitle}</p>
          {project.tagline ? (
            <p className="mt-2 font-mono text-xs text-[#00F5FF]">{project.tagline}</p>
          ) : null}

          <p className="mt-5 text-sm leading-relaxed text-[#94A3B8] sm:text-base">
            {project.longDescription}
          </p>

          <div className="mt-6 border-t border-slate-800/80 pt-5">
            <h4 className="text-xs font-semibold text-[#F8FAFC]">Planned & Built Capabilities</h4>
            <ul className="mt-3 space-y-2.5">
              {project.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2.5 text-sm text-[#94A3B8]">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00C8FF]"
                  />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-xl border border-slate-800 bg-[#050816]/75 p-4">
            <p className="text-xs font-semibold text-[#00C8FF]">Architecture Note</p>
            <p className="mt-1.5 text-sm leading-relaxed text-[#94A3B8]">
              {project.architectureNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
