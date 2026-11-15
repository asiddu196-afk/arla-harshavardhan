import { useState } from 'react';
import {
  Braces,
  BrainCircuit,
  Code2,
  Cpu,
  GitBranch,
  Globe,
  MessageSquareCode,
  Palette,
  Terminal,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { SKILLS_DATA, type SkillCategory, type SkillItem } from '../data/portfolioData';

const ICON_MAP: Record<SkillItem['iconName'], LucideIcon> = {
  Terminal,
  Code2,
  Palette,
  Braces,
  BrainCircuit,
  MessageSquareCode,
  Cpu,
  Workflow,
  Globe,
  GitBranch,
};

const CATEGORIES: ('All' | SkillCategory)[] = [
  'All',
  'Programming',
  'AI & Emerging Tech',
  'Development',
];

export function SkillsDashboard() {
  const [activeCategory, setActiveCategory] = useState<'All' | SkillCategory>('All');
  const [selectedSkillId, setSelectedSkillId] = useState<string>(SKILLS_DATA[0].id);

  const filteredSkills =
    activeCategory === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === activeCategory);

  const selectedSkill =
    filteredSkills.find((s) => s.id === selectedSkillId) ?? filteredSkills[0] ?? SKILLS_DATA[0];

  const SelectedIcon = ICON_MAP[selectedSkill.iconName];

  return (
    <section id="skills" className="relative z-10 border-b border-slate-800/70 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header & Segmented Filter Controls */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium tracking-wider text-[#00C8FF]">Technical Skills</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl">
              Interactive Capability Matrix
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#94A3B8] sm:text-base">
              Select a domain filter or click any capability card to inspect current focus areas and hands-on practice.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter technical skills by category"
            className="flex flex-wrap items-center gap-1.5 rounded-xl border border-slate-800 bg-[#0B1020] p-1.5"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCategory(category);
                    const firstMatch =
                      category === 'All'
                        ? SKILLS_DATA[0]
                        : SKILLS_DATA.find((s) => s.category === category);
                    if (firstMatch) setSelectedSkillId(firstMatch.id);
                  }}
                  className={`rounded-lg px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#00C8FF]/20 to-[#8B5CF6]/20 text-[#00F5FF] ring-1 ring-[#00C8FF]/45'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dashboard Layout: Skill Cards Grid + Active Inspector Panel */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
          {/* Interactive Cards Grid */}
          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:col-span-8">
            {filteredSkills.map((skill) => {
              const Icon = ICON_MAP[skill.iconName];
              const isSelected = selectedSkill.id === skill.id;
              const isLearning = skill.stage === 'Learning';

              return (
                <button
                  key={skill.id}
                  type="button"
                  onClick={() => setSelectedSkillId(skill.id)}
                  className={`group flex flex-col items-start rounded-xl border p-5 text-left transition-all duration-200 ${
                    isSelected
                      ? 'border-[#00C8FF]/65 bg-[#0B1020] shadow-[0_0_28px_-10px_rgba(0,200,255,0.38)]'
                      : 'border-slate-800/90 bg-[#0B1020]/65 hover:border-[#00C8FF]/35 hover:bg-[#0B1020]'
                  }`}
                >
                  <div className="flex w-full items-start justify-between gap-3">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border transition-colors ${
                        isSelected
                          ? 'border-[#00C8FF]/50 bg-[#00C8FF]/15 text-[#00F5FF]'
                          : 'border-slate-800 bg-[#050816] text-[#94A3B8] group-hover:border-[#00C8FF]/35 group-hover:text-[#00C8FF]'
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>

                    <span
                      className={`text-xs font-medium ${
                        isLearning ? 'text-[#8B5CF6]' : 'text-[#94A3B8]'
                      }`}
                    >
                      {skill.stage}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-semibold text-[#F8FAFC]">
                    {skill.name}
                    {isLearning ? (
                      <span className="ml-2 text-xs font-normal text-[#94A3B8]">(Learning)</span>
                    ) : null}
                  </h3>

                  <div className="mt-1.5 flex items-center gap-2 text-xs text-[#94A3B8]">
                    <span>{skill.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#00C8FF]">Inspect focus</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Detail Inspector Panel */}
          <aside
            aria-live="polite"
            className="gradient-border-frame rounded-2xl lg:sticky lg:top-24 lg:col-span-4"
          >
            <div className="rounded-[15px] bg-[#0B1020] p-6">
              <div className="flex items-center gap-3.5">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#00C8FF]/40 bg-[#00C8FF]/10 text-[#00F5FF]">
                  <SelectedIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-medium text-[#00C8FF]">{selectedSkill.category}</p>
                  <h3 className="font-display text-xl font-bold text-[#F8FAFC]">
                    {selectedSkill.name}
                  </h3>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-[#94A3B8]">
                <span>Stage:</span>
                <span className="font-semibold text-[#F8FAFC]">{selectedSkill.stage}</span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#94A3B8]">
                {selectedSkill.summary}
              </p>

              <div className="mt-6 border-t border-slate-800/80 pt-5">
                <p className="text-xs font-semibold text-[#F8FAFC]">Active Focus Areas</p>
                <ul className="mt-3 space-y-2.5">
                  {selectedSkill.focusAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-start gap-2.5 text-sm text-[#94A3B8]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-3 shrink-0 rounded-full bg-gradient-to-r from-[#00C8FF] to-[#8B5CF6]"
                      />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
