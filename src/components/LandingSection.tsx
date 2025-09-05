'use client';

import React from 'react';
import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';

const greeting = 'Hi, I’m William 👋';
const bio2 = 'I design and build apps, automations, solutions, integrations, and dashboards, delivering impact with strategy and purpose.';
const bio1 = 'IT Engineer full stack and tech enthusiast with a passion for development..';

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 }
  }
};

const itemUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' }
  }
};

export default function LandingSection() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const { scrollY } = useScroll();
  const glowY = useTransform(scrollY, [0, 600], [0, -40]);
  return (
    <section id="landing-section" className="min-h-[100dvh] grid place-items-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-10">
          <div className="relative flex-1 min-w-0">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute rounded-full blur-[80px] animate-pulse"
              style={{
                left: '-40px',
                top: '-30px',
                width: '240px',
                height: '240px',
                background: 'rgba(48, 84, 176, 0.54)',
                animationDuration: '4.5s',
                // opcional: otro ritmo
                animationDelay: '0.8s',
                y: glowY
              }}
            />
            <motion.div
              className="relative flex flex-col items-center md:items-start gap-4 max-w-full md:max-w-lg text-center md:text-left"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.h1 className="text-4xl md:text-5xl font-bold text-white" variants={itemUp}>{greeting}</motion.h1>
              <motion.p className="text-lg text-white/80" variants={itemUp}>{bio1}</motion.p>
              <motion.p className="text-lg text-white/80" variants={itemUp}>{bio2}</motion.p>
              <div className="flex items-center gap-4 pt-2 justify-center md:justify-start">
                <motion.a
                  whileHover={{ y: -3, scale: 1.06 }}
                  whileFocus={{ y: -3, scale: 1.06 }}
                  href="https://github.com/WilliamJasso"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                  className="text-white/80 hover:text-white"
                >
                  <FaGithub size={22} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, scale: 1.06 }}
                  whileFocus={{ y: -3, scale: 1.06 }}
                  href="https://www.linkedin.com/in/william-jasso-ortiz-4208a7261/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="text-white/80 hover:text-white"
                >
                  <FaLinkedin size={22} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, scale: 1.06 }}
                  whileFocus={{ y: -3, scale: 1.06 }}
                  href="mailto:willijasso1@gmail.com"
                  aria-label="Email"
                  title="Email"
                  className="text-white/80 hover:text-white"
                >
                  <FaEnvelope size={22} />
                </motion.a>
              </div>
            </motion.div>
          </div>
          <motion.img
            src={`${basePath}/iconWilliam.png`}
            alt="Avatar"
            className="h-[180px] w-[180px] rounded-full shadow-lg object-cover md:h-[260px] md:w-[260px]"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            whileHover={{ rotate: 1, scale: 1.02 }}
          />
        </div>
      </div>

    </section>
  );
}
