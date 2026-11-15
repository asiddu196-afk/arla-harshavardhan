import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar({ onOpenResume }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#050816]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6">
        {/* Zone 1: Single-line Wordmark */}
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-[#F8FAFC] whitespace-nowrap shrink-0 transition-colors hover:text-[#00F5FF]"
        >
          A. Harshvardhan
        </a>

        {/* Zone 2: 4 Single-line Navigation Links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-7 text-sm font-medium text-[#94A3B8]">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-[#F8FAFC] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[#00C8FF] after:transition-transform after:duration-200 hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center justify-center rounded-lg border border-[#00C8FF]/45 bg-[#00C8FF]/10 px-4 py-2 text-xs font-semibold text-[#F8FAFC] whitespace-nowrap shrink-0 transition-all duration-200 hover:border-[#00F5FF] hover:bg-[#00C8FF]/20"
          >
            Resume
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-[#F8FAFC] transition-colors hover:border-[#00C8FF]/50 md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Compact Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-slate-800/80 bg-[#050816]/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-3">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-sm font-medium text-[#94A3B8] transition-colors hover:text-[#F8FAFC]"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenResume();
              }}
              className="mt-1 inline-flex w-full items-center justify-center rounded-lg border border-[#00C8FF]/50 bg-[#00C8FF]/15 px-4 py-2.5 text-sm font-semibold text-[#F8FAFC]"
            >
              View & Download Resume
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
