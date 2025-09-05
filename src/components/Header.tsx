'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const lastPos = useRef(0);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || 0;
      setHidden(y > lastPos.current && y > 80);
      setScrolled(y > 8);
      lastPos.current = y;
      const doc = document.documentElement;
      const total = Math.max(doc.scrollHeight - doc.clientHeight, 1);
      setProgress(Math.min(Math.max(y / total, 0), 1));
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['experience-section', 'techstack-section', 'certs-contact-section', 'contactme-section'];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        // Aparece como activo cuando ~35% del bloque está visible
        root: null,
        rootMargin: '0px 0px -55% 0px',
        threshold: [0.35, 0.5, 0.75],
      }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    // Keep hash-only so it works with GitHub Pages basePath
    window.history.pushState({}, '', `#${id}`);
  };

  const linkClass = (id: string) =>
    `rounded-md px-1 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 ` +
    (active === id ? 'text-teal-300 underline underline-offset-4 decoration-2' : 'hover:text-teal-300');

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] transition-transform duration-300 ease-out ${
        scrolled
          ? 'bg-gradient-to-r from-black/60 via-black/40 to-transparent backdrop-blur-lg shadow-sm border-b border-white/10'
          : 'bg-transparent'
      }`}
      style={{ transform: hidden ? 'translateY(-200px)' : 'translateY(0)' }}
    >
      <div className="w-full flex items-center py-3 sm:py-4 pl-4 pr-10 sm:pl-6 sm:pr-14 lg:pl-8 lg:pr-20">
        {/* Left cluster: hamburger (mobile) */}
        <div className="flex items-center gap-3">
          {/* Mobile menu button (left-aligned) */}
          <button
            aria-label="Open menu"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-white/5 hover:bg-white/10"
            onClick={() => setIsOpen((v) => !v)}
          >
            {/* SVG hamburger for mejor legibilidad */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Right cluster: nav + CTA (desktop). Empujado completamente a la derecha */}
        <div className="ml-auto flex items-center justify-end gap-3">
          <nav aria-label="sections" className="hidden md:block">
            <div className="flex items-center gap-6 md:gap-8 font-medium md:font-semibold text-base md:text-lg pr-4">
              <Link
                href="#experience-section"
                onClick={(e) => onNavClick(e as React.MouseEvent<HTMLAnchorElement>, 'experience-section')}
                className={linkClass('experience-section')}
              >
                Experience
              </Link>
              <Link
                href="#techstack-section"
                onClick={(e) => onNavClick(e as React.MouseEvent<HTMLAnchorElement>, 'techstack-section')}
                className={linkClass('techstack-section')}
              >
                Tech Stack
              </Link>
              <Link
                href="#certs-contact-section"
                onClick={(e) => onNavClick(e as React.MouseEvent<HTMLAnchorElement>, 'certs-contact-section')}
                className={linkClass('certs-contact-section')}
              >
                Certs & Contact
              </Link>
              <Link
                href="#contactme-section"
                onClick={(e) => onNavClick(e as React.MouseEvent<HTMLAnchorElement>, 'contactme-section')}
                className="ml-2 inline-flex items-center rounded-lg bg-teal-400 px-4 py-2 font-semibold text-black hover:bg-teal-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>

        {/* Mobile dropdown - posicionado a la izquierda */}
        {isOpen && (
          <div className="absolute left-4 top-12 z-[1100] w-56 rounded-xl border border-white/10 bg-black/85 p-3 shadow-xl backdrop-blur-lg md:hidden">
            <div className="flex flex-col items-stretch text-sm font-medium">
              <Link
                href="#experience-section"
                onClick={(e) => { onNavClick(e as React.MouseEvent<HTMLAnchorElement>, 'experience-section'); setIsOpen(false); }}
                className={`rounded-md px-2 py-2 ${linkClass('experience-section')}`}
              >
                Experience
              </Link>
              <Link
                href="#techstack-section"
                onClick={(e) => { onNavClick(e as React.MouseEvent<HTMLAnchorElement>, 'techstack-section'); setIsOpen(false); }}
                className={`rounded-md px-2 py-2 ${linkClass('techstack-section')}`}
              >
                Tech Stack
              </Link>
              <Link
                href="#certs-contact-section"
                onClick={(e) => { onNavClick(e as React.MouseEvent<HTMLAnchorElement>, 'certs-contact-section'); setIsOpen(false); }}
                className={`rounded-md px-2 py-2 ${linkClass('certs-contact-section')}`}
              >
                Certs & Contact
              </Link>
              <Link
                href="#contactme-section"
                onClick={(e) => { onNavClick(e as React.MouseEvent<HTMLAnchorElement>, 'contactme-section'); setIsOpen(false); }}
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-teal-400 px-3 py-2 font-semibold text-black hover:bg-teal-300"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Scroll progress bar */}
      <div className={`h-[3px] w-full ${scrolled ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}> 
        <div
          className="h-full w-full origin-left bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 rounded-full filter blur-[0.5px] shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </header>
  );
}
