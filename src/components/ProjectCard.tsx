'use client';

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags?: string[];
  link: string;
}

export default function ProjectCard({ title, description, imageSrc, tags, link }: ProjectCardProps) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const resolvedSrc = imageSrc.startsWith('/') ? `${basePath}${imageSrc}` : imageSrc;
  return (
    <article className="h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <img src={resolvedSrc} alt={title} className="h-[180px] w-full object-cover" />
      <div className="p-4">
        <div className="flex flex-col items-start gap-2">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {tags?.map((t) => (
              <span key={t} className="inline-flex items-center rounded-full bg-teal-100 px-2.5 py-1 text-xs font-medium text-teal-800">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 py-3">
        <div className="flex w-full items-center justify-between">
          <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-900">
            <span>View</span>
            <FaArrowRight />
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md p-2 hover:bg-gray-100" aria-label="open">
            <FaArrowRight />
          </a>
        </div>
      </div>
    </article>
  );
}
