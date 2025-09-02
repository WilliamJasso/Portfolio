'use client';

import { Box, Container, VStack, Heading, Text, SimpleGrid } from '@chakra-ui/react';
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
    <Box as="section" id="projects-section" minH="100dvh" display="grid" alignItems="center" bg="white">
      <Container maxW="6xl" py={16}>
        <VStack align="flex-start" gap={6}>
          <Heading size="xl">Featured Projects</Heading>
          <Text color="gray.600">Some things I’ve shipped recently.</Text>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={6} pt={4}>
            {projects.map((p) => (
              // eslint-disable-next-line react/jsx-key
              <ProjectCard key={p.id} {...p} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
