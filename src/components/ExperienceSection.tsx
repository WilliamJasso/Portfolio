'use client';

import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    range: '2023 — 2024',
    company: 'Henkel',
    role: 'Web Content Intern',
    details:
      'Provided support in web content updates, design, optimization, and code, while collaborating with marketing, product, sub-brand, and development teams. Also engaged in data analytics to drive strategic improvements and optimize digital performance.',
    logoSrc: 'logohenkel.png', 
  },
  {
    range: '2024 — 2025',
    company: 'Grupo Rica Coca‑Cola',
    role: 'Development Specialist',
    details:
      'Responsible for building internal solutions, optimizing processes, and automating critical workflows. Led a team of junior developers while delivering mobile and web platforms, Salesforce enhancements, and SAP integrations. Supervised production servers and databases to maintain reliable, secure, and scalable enterprise systems.',
    logoSrc: 'logococacola.png', 
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0 }
};

const titleVariants = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0 }
};

export default function ExperienceSection() {
  return (
    <section id="experience-section" className="relative py-20 min-h-[100dvh] flex items-center justify-center">
  
<div
  aria-hidden
  className="pointer-events-none absolute -z-10 rounded-full blur-[120px] animate-pulse"
  style={{
    left: '-100px',
    top: '40px',
    width: '360px',
    height: '360px',
    background: 'rgba(243, 21, 5, 0.34)',
   animationDuration: '4.5s',   // opcional: otro ritmo
    animationDelay: '0.8s'       // opcional: desfase
  }}
/>
<div
  aria-hidden
  className="pointer-events-none absolute -z-10 rounded-full blur-[120px] animate-pulse"
  style={{
    right: '-100px',
    top: '300px',
    width: '360px',
    height: '360px',
    background: 'rgba(243, 21, 5, 0.32)',
    animationDuration: '4.5s',   // opcional: otro ritmo
    animationDelay: '0.8s'       // opcional: desfase
  }}
/>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.h2
          className="text-center text-3xl md:text-4xl font-bold text-white"
          variants={titleVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          My Work Experience
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-[1fr]">
          <div className="relative mx-auto w-full max-w-3xl text-white flex flex-col items-center text-center">
            <motion.ul
              className="w-full flex flex-col items-center space-y-12 sm:space-y-14 md:space-y-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {items.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="relative flex flex-col items-center text-center"
                  variants={itemVariants}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* fecha centrada */}
                  {/* Removed date block */}

                  {/* contenido centrado + logo */}
                  <div className="flex flex-col items-center text-center">
                    {item.logoSrc && (
                      <motion.img
                        src={item.logoSrc}
                        alt={`${item.company} logo`}
                        className="mb-5 h-20 w-auto opacity-100 md:h-24 lg:h-28"
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      />
                    )}
                    <motion.h3
                      className="text-lg font-semibold"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                    >
                      {item.role} • <span className="font-normal text-white/80">{item.company}</span>
                    </motion.h3>
                    <motion.p
                className="mt-2 max-w-prose md:max-w-2xl text-sm md:text-base leading-relaxed tracking-tight text-white/80"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.35, ease: 'easeOut', delay: 0.05 }}
                    >
                      {item.details}
                    </motion.p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
