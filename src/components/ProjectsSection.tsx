'use client';

import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Preventa Mobile',
    description: 'App MAUI/Xamarin integrada con SAP & Salesforce para pedidos offline.',
    imageSrc:
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80&auto=format&fit=crop',
    tags: ['.NET MAUI', 'SQLite', 'Salesforce'],
    link: '#',
  },
  {
    id: 2,
    title: 'Gestión Vehicular',
    description: 'Rediseño con microservicios y paneles de telemetría & mantenimiento.',
    imageSrc:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80&auto=format&fit=crop',
    tags: ['React', 'Node', 'PostgreSQL'],
    link: '#',
  },
  {
    id: 3,
    title: 'Sales KPIs Dashboard',
    description: 'Dashboard de ventas con gráficos y alertas usando Power BI embebido.',
    imageSrc:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
    tags: ['Power BI', 'Embed', 'Auth'],
    link: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects-section" className="min-h-[100dvh] grid items-center bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col items-start gap-6">
          <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
          <p className="text-gray-600">Some things I’ve shipped recently.</p>
          <div className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
