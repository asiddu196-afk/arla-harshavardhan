import { useState, type FormEvent } from 'react';
import { Check, Copy, Github, Linkedin, Mail, Send } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in your name, email address, and message.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative z-10 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium tracking-wider text-[#00C8FF]">Connect</p>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-[#F8FAFC] sm:text-4xl">
              Let’s Build Intelligent Solutions Together.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#94A3B8] sm:text-base">
              Open to AI collaborations, student developer hackathons, Python mentorship, and conversations around LearnLoop and Generative AI.
            </p>

            <div className="mt-8 space-y-3">
              {/* Email Copy Card */}
              <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-800 bg-[#0B1020] p-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#00C8FF]/30 bg-[#00C8FF]/10 text-[#00F5FF]">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-[#94A3B8]">Direct Email</p>
                    <p className="truncate font-mono text-sm text-[#F8FAFC]">{PROFILE.email}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-[#050816] px-3 py-2 text-xs font-semibold text-[#F8FAFC] whitespace-nowrap shrink-0 transition-colors hover:border-[#00C8FF]/55 hover:text-[#00F5FF]"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#00F5FF]" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-border-card flex items-center gap-3 rounded-xl p-4"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-[#050816] text-[#F8FAFC]">
                    <Github className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#F8FAFC]">GitHub</p>
                    <p className="text-xs text-[#94A3B8]">Code & experiments</p>
                  </div>
                </a>

                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-border-card flex items-center gap-3 rounded-xl p-4"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-[#050816] text-[#00C8FF]">
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#F8FAFC]">LinkedIn</p>
                    <p className="text-xs text-[#94A3B8]">Academic & network</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-[#0B1020]/90 p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-start py-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#00C8FF]/40 bg-[#00C8FF]/15 text-[#00F5FF]">
                    <Check className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-[#F8FAFC]">
                    Message Prepared
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-[#94A3B8]">
                    Thank you, {name}. Your note has been captured cleanly in this session. You can also reach me directly at{' '}
                    <span className="font-mono text-[#00F5FF]">{PROFILE.email}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="mt-6 rounded-lg border border-slate-700 bg-[#050816] px-4 py-2.5 text-xs font-semibold text-[#F8FAFC] transition-colors hover:border-[#00C8FF]"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[#F8FAFC]">
                      Send a Message
                    </h3>
                    <p className="mt-1 text-xs text-[#94A3B8]">
                      Have an AI idea, learning resource, or project collaboration in mind?
                    </p>
                  </div>

                  {error ? (
                    <p
                      role="alert"
                      className="rounded-lg border border-rose-500/40 bg-rose-500/10 px-4 py-2.5 text-xs text-rose-200"
                    >
                      {error}
                    </p>
                  ) : null}

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-[#94A3B8]">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex Rivera"
                        className="mt-1.5 w-full rounded-lg border border-slate-800 bg-[#050816] px-4 py-2.5 text-sm text-[#F8FAFC] placeholder:text-slate-600 focus:border-[#00C8FF] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-[#94A3B8]">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex@example.com"
                        className="mt-1.5 w-full rounded-lg border border-slate-800 bg-[#050816] px-4 py-2.5 text-sm text-[#F8FAFC] placeholder:text-slate-600 focus:border-[#00C8FF] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-[#94A3B8]">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Let's connect about AI engineering, Python builds, or LearnLoop..."
                      className="mt-1.5 w-full resize-y rounded-lg border border-slate-800 bg-[#050816] px-4 py-2.5 text-sm text-[#F8FAFC] placeholder:text-slate-600 focus:border-[#00C8FF] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#00C8FF] to-[#00F5FF] px-5 py-3 text-sm font-semibold text-[#050816] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
