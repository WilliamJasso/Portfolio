'use client';

import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiPhp,
  SiFlutter,
  SiMongodb,
  SiMicrosoftsqlserver,
  SiNodedotjs,
  SiPython,
  SiR,
  SiSap,
  SiSalesforce,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiGit,
  SiGithub,
  SiJira,
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import { motion, type Variants } from 'framer-motion';
import type { IconType } from 'react-icons';

type Item = { name: string; Icon?: IconType; imageSrc?: string; note?: string };

const groups: { title: string; items: Item[] }[] = [
  {
    title: 'Web Development',
    items: [
      { name: 'React', Icon: SiReact },
      { name: 'Next.js', Icon: SiNextdotjs },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'TypeScript', Icon: SiTypescript },
    ],
  },
  {
    title: 'Mobile Development',
    items: [
      { name: 'React Native', Icon: SiReact },
      { name: 'Xamarin', imageSrc: '/Xamarin.png' },
      { name: 'Flutter', Icon: SiFlutter },
      { name: 'FlutterFlow', imageSrc: '/flutterflow.svg' },
    ],
  },
 
  
  {
    title: 'Data & Analytics',
    items: [
      { name: 'Python', Icon: SiPython },
      { name: 'R', Icon: SiR },
      { name: 'Power BI', imageSrc: '/powerbi.png' },
    ],
  },
  {
    title: 'Backend & Databases',
    items: [
      { name: 'PHP', Icon: SiPhp },
      { name: 'SQL', Icon: FaDatabase },
      //{ name: 'SQL Server', Icon: SiMicrosoftsqlserver },
      { name: 'NoSQL (JSON)', Icon: SiMongodb },
      { name: 'Node.js', Icon: SiNodedotjs },
    ],
  },
  {
    title: 'ERP & CRM',
    items: [
      { name: 'SAP', Icon: SiSap },
      { name: 'ABAP', imageSrc: '/abap.png' },
      { name: 'Salesforce', Icon: SiSalesforce },
      { name: 'Apex', imageSrc: '/apex.png' }
    ],
  },
  {
    title: 'Design',
    items: [
      { name: 'UI/UX', Icon: MdDesignServices },
      { name: 'Figma', Icon: SiFigma },
      { name: 'Photoshop', Icon: SiAdobephotoshop },
      { name: 'Illustrator', Icon: SiAdobeillustrator },
    ],
  },
  {
    title: 'Collaboration & Versioning',
    items: [
      { name: 'Git', Icon: SiGit },
      { name: 'GitHub', Icon: SiGithub },
      { name: 'Jira', Icon: SiJira },
    ],
  },
   {
    title: 'Styling & UI',
    items: [
      { name: 'Tailwind CSS', Icon: SiTailwindcss },
      { name: 'Bootstrap', Icon: SiBootstrap },
    ],
  },
];




const iconColors: Record<string, string> = {
  'React': '#61DAFB',
  'React Native': '#61DAFB',
  'Next.js': '#ffffff', // white on dark background
  'JavaScript': '#F7DF1E',
  'TypeScript': '#3178C6',
  'Tailwind CSS': '#38BDF8',
  'Bootstrap': '#7952B3',
  'PHP': '#777BB4',
  'Flutter': '#02569B',
  'Xamarin': '#3498DB',
  'Python': '#3776AB',
  'R': '#276DC3',
  'Power BI': '#F2C811',
  'SQL': '#2E74C0',
  'SQL Server': '#CC2927',
  'NoSQL (JSON)': '#10B981',
  'Node.js': '#339933',
  'FlutterFlow': '#7B61FF',
  'SAP': '#0FAAFF',
  'ABAP': '#9CA3AF', // neutral gray (no official color)
  'Salesforce': '#00A1E0',
  'Apex': '#00A1E0',
  'UI/UX': '#A855F7',
  'Figma': '#F24E1E',
  'Photoshop': '#31A8FF',
  'Illustrator': '#FF9A00',
  'Git': '#F05032',
  'GitHub': '#ffffff', // white mark works on dark
  'Jira': '#2684FF',
};

const iconNotes: Record<string, string> = {
  'React': 'UI library for building components',
  'React Native': 'Native apps with React',
  'Next.js': 'SSR/SSG framework for React',
  'JavaScript': 'The language of the web',
  'TypeScript': 'Typed superset of JavaScript',
  'Tailwind CSS': 'Utility-first CSS framework',
  'Bootstrap': 'CSS components & grid system',
  'PHP': 'Server-side scripting language',
  'Flutter': 'UI toolkit for natively compiled apps',
  'Python': 'Scripting, data & automation',
  'R': 'Statistical computing & plots',
  'Power BI': 'Business intelligence dashboards',
  'SQL': 'Queries, joins, and relational design',
  'SQL Server': 'Microsoft relational database',
  'NoSQL (JSON)': 'Document stores and key–value',
  'Node.js': 'JS runtime for backend & tools',
  'FlutterFlow': 'No-code builder on Flutter',
  'SAP': 'ERP platform',
  'ABAP': 'SAP programming language',
  'Salesforce': 'CRM & platform',
  'UI/UX': 'Design & prototyping mindset',
  'Figma': 'Collaborative design tool',
  'Photoshop': 'Raster graphics & edits',
  'Illustrator': 'Vector graphics & logos',
  'Git': 'Version control',
  'GitHub': 'Code hosting & collaboration',
  'Jira': 'Project tracking',
  'Xamarin': 'Cross-platform apps with .NET',
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } }
};

export default function TechStackSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <section id="techstack-section" className="relative py-28 text-white grid place-items-center min-h-[100dvh]">
      {/* Background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 rounded-full blur-[120px] animate-pulse"
        style={{
          left: '-150px',
          top: '0px',
          width: '360px',
          height: '360px',
          background: 'rgba(48, 84, 176, 0.36)',
          animationDuration: '4.6s',
          animationDelay: '0.6s',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 rounded-full blur-[120px] animate-pulse"
        style={{
          right: '-120px',
          top: '48%',
          transform: 'translateY(-50%)',
          width: '360px',
          height: '360px',
          background: 'rgba(48, 84, 176, 0.32)',
          animationDuration: '4.8s',
          animationDelay: '0.9s',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 rounded-full blur-[120px] animate-pulse"
        style={{
          left: '-150px',
          bottom: '16px',
          width: '360px',
          height: '360px',
          background: 'rgba(48, 84, 176, 0.28)',
          animationDuration: '4.7s',
          animationDelay: '1.1s',
        }}
      />
      <div className="w-full max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight py-8 md:py-10 border-y-8 border-transparent">My Tech Stack</h2>
     
        <motion.div
          className="w-full mx-auto max-w-7xl flex flex-wrap items-start justify-center gap-12 pt-10 md:pt-12 border-t-8 border-transparent"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {groups.map((group) => (
            <div key={group.title} className="flex flex-col items-center text-center mx-0 w-full max-w-md">
              <motion.h3
                className="pt-6 pb-4 md:pt-12 md:pb-6 border-t-12 border-b-20 border-transparent text-sm font-semibold uppercase tracking-wider text-white/70 text-center"
                variants={itemVariants}
              >
                {group.title}
              </motion.h3>
              <motion.ul
                className="w-full grid grid-cols-2 place-items-center gap-6 sm:gap-8 md:gap-10 pt-4 md:pt-6"
                variants={containerVariants}
              >
                {group.items.map((it) => (
                  <motion.li
                    key={it.name}
                    className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl w-36 h-36 sm:w-40 sm:h-40 shadow-md backdrop-blur-md overflow-hidden ring-1 ring-transparent transition hover:shadow-lg bg-white/5"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    whileTap={{ scale: 0.98 }}
                    onMouseEnter={(e) => {
                      const color = iconColors[it.name];
                      if (color) {
                        e.currentTarget.style.boxShadow = `0 0 0 2px ${color}40, 0 0 18px ${color}66`;
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '';
                    }}
                  >
                    <span className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      {iconNotes[it.name] ?? it.name}
                    </span>
                    {it.Icon ? (
                      <it.Icon
                        size={50}
                        className="transition-transform group-hover:scale-105"
                        style={{ color: iconColors[it.name] ?? undefined }}
                      />
                    ) : it.imageSrc ? (
                      <img
                        src={`${basePath}${it.imageSrc}`}
                        alt={`${it.name} logo`}
                        className="h-[50px] w-[50px] sm:h-[56px] sm:w-[56px] object-contain transition-transform group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <span className="inline-block h-6 w-6 rounded-md bg-white/70" />
                    )}
                    <span className="text-sm text-white/90 min-h-[20px] flex items-center">{it.name}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
