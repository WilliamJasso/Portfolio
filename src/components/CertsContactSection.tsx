'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { FaExternalLinkAlt, FaLinkedin } from 'react-icons/fa';

type Cert = {
  title: string;
  issuer: string;
  year?: string;
  credUrl?: string;
  imageSrc?: string;
};

const certs: Cert[] = [
  {
    title: 'Meta Front-End Developer',
    issuer: 'Meta',
    year: '2025',
    credUrl: 'https://coursera.org/share/40a8e1c9cc15738214de879b58067753',
    imageSrc: '/metalogo.png',
  },
];

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item: Variants = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

const brandColors: Record<string, string> = {
  Meta: '#0866FF',
};

export default function CertsContactSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <section id="certs-contact-section" className="relative py-24 grid place-items-center">
      {/* Background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 rounded-full blur-[120px] animate-pulse"
        style={{ left: '-120px', top: '24px', width: '340px', height: '340px', background: 'rgba(56, 189, 248, 0.28)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 rounded-full blur-[120px] animate-pulse"
        style={{ right: '-120px', top: '50%', transform: 'translateY(-50%)', width: '340px', height: '340px', background: 'rgba(124, 58, 237, 0.24)' }}
      />

      <div className="w-full max-w-6xl mx-auto px-6 text-center text-white space-y-12 md:space-y-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold py-6 md:py-8 border-y-8 border-transparent"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          Certifications · Contact and More
        </motion.h2>

        {/* Certifications as cards (similar to Tech Stack) */}
        <motion.ul
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-6 md:pt-8 border-t-8 border-transparent"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {certs.map((c, i) => (
            <motion.li key={i} variants={item}>
              <a
                href={c.credUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center justify-center gap-2 sm:gap-3 rounded-2xl w-[300px] h-[150px] sm:w-[340px] sm:h-[160px] shadow-md backdrop-blur-md overflow-hidden ring-1 ring-transparent transition hover:shadow-lg bg-white/5"
                onMouseEnter={(e) => {
                  const color = brandColors[c.issuer] ?? '#38BDF8';
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 0 2px ${color}40, 0 0 18px ${color}66`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = '';
                }}
              >
                {c.imageSrc ? (
                  <img
                    src={`${basePath}${c.imageSrc}`}
                    alt={`${c.issuer} logo`}
                    className="h-[44px] w-[44px] sm:h-[50px] sm:w-[50px] object-contain transition-transform group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span className="inline-block h-6 w-6 rounded-md bg-white/70" />
                )}
                <div className="flex flex-col items-center text-center">
                  <span className="text-sm sm:text-base font-semibold text-white/90">{c.title}</span>
                  <span className="text-[11px] sm:text-xs text-white/60">{c.issuer}{c.year ? ` • ${c.year}` : ''}</span>
                </div>
                <span className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 text-white/80 transition-opacity">
                  <FaExternalLinkAlt size={12} />
                </span>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Contact (LinkedIn emphasized) */}
        {/* Spacer between cards and LinkedIn button */}
        <div aria-hidden className="h-8 md:h-12" />
        <div className="flex items-center justify-center pt-10 md:pt-10 mt-8 md:mt-12 border-t-8 border-transparent">
          <motion.a
            whileHover={{ y: -3, scale: 1.03 }}
            whileFocus={{ y: -3, scale: 1.03 }}
            href="https://www.linkedin.com/in/william-jasso-ortiz-4208a7261/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="group relative flex items-center justify-center gap-3 rounded-2xl w-[260px] h-[88px] sm:w-[300px] sm:h-[100px] shadow-md backdrop-blur-md overflow-hidden ring-1 ring-transparent transition hover:shadow-lg bg-white/5 px-6 sm:px-8"
            onMouseEnter={(e) => {
              const color = '#0A66C2';
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 0 2px ${color}40, 0 0 18px ${color}66`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '';
            }}
          >
            <FaLinkedin size={32} className="transition-transform group-hover:scale-105 flex-shrink-0" />
            <div className="flex flex-col text-center">
              <span className="text-sm font-semibold text-white/90">Conecta en LinkedIn</span>
            </div>
            <span className="absolute bottom-2 right-4 opacity-0 group-hover:opacity-100 text-white/80 transition-opacity">
              <FaExternalLinkAlt size={12} />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
