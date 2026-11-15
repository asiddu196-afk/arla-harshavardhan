import { BrainCircuit, Compass, Lightbulb, Terminal } from 'lucide-react';
import { ABOUT_DATA, PROFILE } from '../data/portfolioData';

const HIGHLIGHT_ICONS = [BrainCircuit, Terminal, Lightbulb, Compass];

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 border-b border-slate-800/70 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* Left Narrative */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium tracking-wider text-[#00C8FF]">About Me</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl">
              {ABOUT_DATA.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#94A3B8]">
              {ABOUT_DATA.description}
            </p>

            <div className="mt-8 border-t border-slate-800/80 pt-6">
              <dl className="grid grid-cols-2 gap-6">
                <div>
                  <dt className="text-xs font-medium text-[#94A3B8]">Education</dt>
                  <dd className="mt-1 font-display text-sm font-semibold text-[#F8FAFC]">
                    {PROFILE.education}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-[#94A3B8]">Current Focus</dt>
                  <dd className="mt-1 font-display text-sm font-semibold text-[#F8FAFC]">
                    AI Systems & Python
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right 2x2 Architectural Highlight Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {ABOUT_DATA.highlights.map((item, idx) => {
              const Icon = HIGHLIGHT_ICONS[idx % HIGHLIGHT_ICONS.length];
              return (
                <article
                  key={item.title}
                  className="glow-border-card flex flex-col justify-between rounded-xl p-6"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#00C8FF]/25 bg-[#00C8FF]/10 text-[#00F5FF]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="font-mono text-xs text-slate-500 tabular-nums">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-[#F8FAFC]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
                      {item.detail}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
