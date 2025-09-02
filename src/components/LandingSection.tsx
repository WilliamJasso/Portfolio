'use client';

import { Box, Container, HStack, VStack, Heading, Text, TagRoot, TagLabel, Button, Image, Flex } from '@chakra-ui/react';

const greeting = 'Hi, I’m William 👋';
const bio1 = 'Full‑stack dev crafting efficient SAP/Salesforce integrations & polished UIs.';
const bio2 = 'I love React, data‑driven dashboards, and building tools that scale.';

export default function LandingSection() {
  return (
    <Box as="section" id="landing-section" minH="100dvh" display="grid" placeItems="center">
      <Container maxW="6xl">
        <Flex gap={10} align="center" justify="space-between" direction={{ base: 'column', md: 'row' }}>
          <VStack align="flex-start" gap={4} maxW={{ base: 'full', md: 'lg' }}>
            <TagRoot colorPalette="teal" size="lg"><TagLabel>Available for hire</TagLabel></TagRoot>
            <Heading as="h1" size="2xl">{greeting}</Heading>
            <Text fontSize="lg" opacity={0.9}>{bio1}</Text>
            <Text fontSize="lg" opacity={0.9}>{bio2}</Text>
            <HStack pt={2} gap={3}>
              <Button colorPalette="teal" onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}>See projects</Button>
              <Button variant="outline" onClick={() => document.getElementById('contactme-section')?.scrollIntoView({ behavior: 'smooth' })}>Contact me</Button>
            </HStack>
          </VStack>
        <Image src="/iconWilliam.png" alt="Avatar" borderRadius="full" boxSize={{ base: '180px', md: '260px' }} shadow="lg" />
        </Flex>
      </Container>
    </Box>
  );
}
