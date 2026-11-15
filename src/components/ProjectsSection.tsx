import { useState } from 'react';
import { ArrowUpRight, Layers, Sparkles } from 'lucide-react';
import { PROJECTS_DATA, type ProjectItem } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

function ProjectImage({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#0B1020] via-[#050816] to-[#121833] p-6 text-center">
        <Sparkles className="h-8 w-8 text-[#00C8FF]" aria-hidden="true" />
        <p className="mt-3 font-display text-lg font-semibold text-[#F8FAFC]">{title}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
    />
  );
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const flagship = PROJECTS_DATA.find((p) => p.isFlagship) ?? PROJECTS_DATA[0];
  const secondaryProjects = PROJECTS_DATA.filter((p) => p.id !== flagship.id);
  const [activeLoopIndex, setActiveLoopIndex] = useState(0);

  const loopSteps = flagship.loopSteps ?? [];
  const activeStep = loopSteps[activeLoopIndex];

  return (
    <section id="projects" className="relative z-10 border-b border-slate-800/70 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium tracking-wider text-[#00C8FF]">Featured Projects</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl">
              From Vision to Intelligent Systems
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#94A3B8]">
            Leading with my flagship ecosystem concept LEARNLOOP alongside focused Python and AI automation prototypes.
          </p>
        </div>

        {/* Flagship Project: LEARNLOOP */}
        <article className="gradient-border-frame mt-10 rounded-2xl">
          <div className="overflow-hidden rounded-[15px] bg-[#0B1020]">
            <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
              {/* Visual Column */}
              <div className="group relative min-h-[260px] overflow-hidden border-b border-slate-800/80 lg:col-span-6 lg:min-h-[420px] lg:border-r lg:border-b-0">
                <ProjectImage
                  src={flagship.imageUrl}
                  alt={flagship.imageAlt}
                  title={flagship.title}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816]/85 via-[#050816]/25 to-transparent"
                />
                <div className="absolute inset-x-6 bottom-5 z-10">
                  <p className="text-xs font-medium text-[#00F5FF]">
                    Flagship Project · {flagship.status}
                  </p>
                  <p className="mt-1 font-display text-sm font-medium text-[#F8FAFC]">
                    {flagship.tagline}
                  </p>
                </div>
              </div>

              {/* Content Column */}
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-6">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-[#8B5CF6]">Flagship Ecosystem</span>
                    <span className="text-xs text-[#94A3B8]">
                      {flagship.stack.join(' · ')}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#F8FAFC]">
                    {flagship.title}
                  </h3>
                  <p className="mt-1 text-base font-medium text-[#00C8FF]">
                    {flagship.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-[#94A3B8] sm:text-base">
                    {flagship.description}
                  </p>

                  {/* Planned Features */}
                  <div className="mt-6">
                    <p className="text-xs font-semibold text-[#F8FAFC]">Features Planned</p>
                    <ul className="mt-3 space-y-2">
                      {flagship.features.map((feat) => (
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

                  {/* Interactive 6-Stage Learning Loop */}
                  {loopSteps.length > 0 && (
                    <div className="mt-6 border-t border-slate-800/80 pt-5">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold text-[#F8FAFC]">
                          Interactive Learning Loop
                        </p>
                        <span className="font-mono text-xs text-[#00C8FF] tabular-nums">
                          0{activeLoopIndex + 1} / 0{loopSteps.length}
                        </span>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {loopSteps.map((item, idx) => {
                          const active = idx === activeLoopIndex;
                          return (
                            <button
                              key={item.step}
                              type="button"
                              onClick={() => setActiveLoopIndex(idx)}
                              className={`rounded-md px-3 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
                                active
                                  ? 'bg-[#00C8FF]/20 text-[#00F5FF] ring-1 ring-[#00C8FF]/50'
                                  : 'bg-[#050816] text-[#94A3B8] hover:text-[#F8FAFC]'
                              }`}
                            >
                              {item.step}
                            </button>
                          );
                        })}
                      </div>

                      {activeStep && (
                        <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
                          <span className="font-semibold text-[#F8FAFC]">{activeStep.step}: </span>
                          {activeStep.detail}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-slate-800/80 pt-5">
                  <button
                    type="button"
                    onClick={() => onSelectProject(flagship)}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#00C8FF]/15 px-4 py-2.5 text-xs font-semibold text-[#00F5FF] ring-1 ring-[#00C8FF]/45 whitespace-nowrap shrink-0 transition-colors hover:bg-[#00C8FF]/25"
                  >
                    <Layers className="h-4 w-4" aria-hidden="true" />
                    <span>Explore Full Blueprint</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Secondary Projects Grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {secondaryProjects.map((project) => (
            <article
              key={project.id}
              className="glow-border-card group flex flex-col overflow-hidden rounded-2xl"
            >
              <div className="relative h-56 overflow-hidden border-b border-slate-800/80">
                <ProjectImage
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  title={project.title}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#94A3B8]">
                    <span className="font-medium text-[#00C8FF]">{project.status}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.stack.join(' · ')}</span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-bold text-[#F8FAFC]">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#8B5CF6]">
                    {project.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4">
                  <span className="text-xs text-[#94A3B8]">
                    {project.features.length} core capabilities
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00F5FF] transition-colors hover:text-[#F8FAFC]"
                  >
                    <span>View Case Notes</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
