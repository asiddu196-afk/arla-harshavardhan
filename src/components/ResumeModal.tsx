import { useEffect } from 'react';
import { Download, Printer, X } from 'lucide-react';
import { ABOUT_DATA, PROFILE, PROJECTS_DATA, SKILLS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadTextResume = () => {
    const resumeText = [
      'A. HARSHVARDHAN',
      PROFILE.roleLine,
      `${PROFILE.education} | Status: ${PROFILE.status}`,
      `Email: ${PROFILE.email}`,
      `GitHub: ${PROFILE.githubUrl}`,
      `LinkedIn: ${PROFILE.linkedinUrl}`,
      '',
      'PROFILE',
      ABOUT_DATA.description,
      '',
      'CORE HIGHLIGHTS',
      ...ABOUT_DATA.highlights.map((h) => `- ${h.title}: ${h.detail}`),
      '',
      'TECHNICAL SKILLS',
      ...SKILLS_DATA.map(
        (s) => `- ${s.name}${s.stage === 'Learning' ? ' (Learning)' : ''} [${s.category}]: ${s.summary}`
      ),
      '',
      'FEATURED PROJECTS',
      ...PROJECTS_DATA.flatMap((p) => [
        `* ${p.title} — ${p.subtitle} (${p.status})`,
        `  ${p.description}`,
        ...p.features.map((f) => `  - ${f}`),
        '',
      ]),
    ].join('\n');

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'A_Harshvardhan_AI_Engineer_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#050816]/85 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-700/80 bg-[#0B1020] p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <p className="text-xs font-medium text-[#00C8FF]">Curriculum Vitae</p>
            <h3 id="resume-modal-title" className="font-display text-2xl font-bold text-[#F8FAFC]">
              {PROFILE.name}
            </h3>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleDownloadTextResume}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#00C8FF] to-[#00F5FF] px-4 py-2 text-xs font-semibold text-[#050816] whitespace-nowrap shrink-0 transition-opacity hover:opacity-95"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>Download Resume</span>
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-[#050816] px-3.5 py-2 text-xs font-semibold text-[#F8FAFC] whitespace-nowrap shrink-0 transition-colors hover:border-[#00C8FF]"
            >
              <Printer className="h-4 w-4" aria-hidden="true" />
              <span>Print</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume modal"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-[#94A3B8] transition-colors hover:border-[#00C8FF] hover:text-[#F8FAFC]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="mt-6 space-y-6 text-sm">
          <div>
            <p className="font-medium text-[#F8FAFC]">{PROFILE.roleLine}</p>
            <p className="mt-1 text-xs text-[#94A3B8]">
              {PROFILE.education} · {PROFILE.email}
            </p>
          </div>

          <div className="border-t border-slate-800/80 pt-5">
            <h4 className="text-xs font-semibold tracking-wider text-[#00C8FF]">Summary</h4>
            <p className="mt-2 leading-relaxed text-[#94A3B8]">{ABOUT_DATA.description}</p>
          </div>

          <div className="border-t border-slate-800/80 pt-5">
            <h4 className="text-xs font-semibold tracking-wider text-[#00C8FF]">Technical Skills</h4>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {(['Programming', 'AI & Emerging Tech', 'Development'] as const).map((cat) => (
                <div key={cat} className="rounded-xl border border-slate-800 bg-[#050816]/70 p-4">
                  <p className="text-xs font-semibold text-[#F8FAFC]">{cat}</p>
                  <ul className="mt-2 space-y-1 text-xs text-[#94A3B8]">
                    {SKILLS_DATA.filter((s) => s.category === cat).map((s) => (
                      <li key={s.id}>
                        {s.name}
                        {s.stage === 'Learning' ? ' (Learning)' : ''}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800/80 pt-5">
            <h4 className="text-xs font-semibold tracking-wider text-[#00C8FF]">Flagship Vision & Builds</h4>
            <div className="mt-3 space-y-4">
              {PROJECTS_DATA.map((p) => (
                <div key={p.id}>
                  <p className="font-display text-base font-semibold text-[#F8FAFC]">
                    {p.title}{' '}
                    <span className="text-xs font-normal text-[#8B5CF6]">· {p.subtitle}</span>
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#94A3B8]">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
