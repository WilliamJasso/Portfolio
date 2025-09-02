'use client';

import { Box, Container, HStack, VStack, Heading, Text, TagRoot, TagLabel, Button, Image, Flex } from '@chakra-ui/react';

const greeting = 'Hi, I’m William 👋';
const bio1 = 'Full‑stack dev crafting efficient SAP/Salesforce integrations & polished UIs.';
const bio2 = 'I love React, data‑driven dashboards, and building tools that scale.';

export default function LandingSection() {
  return (
    <Box as="section" id="landing-section" minH="100dvh" display="grid" placeItems="center">
      <Container maxW="6xl">
        <Flex gap={20} align="center" justify="space-between" direction={{ base: 'column', md: 'row' }}>
          <Box position="relative" flex="1" minW={0}>
            <Box
              aria-hidden
              position="absolute"
              left={{ base: '-40px', md: '-20px' }}
              top={{ base: '-30px', md: '-10px' }}
              w={{ base: '240px', md: '320px' }}
              h={{ base: '240px', md: '320px' }}
              borderRadius="full"
              bg="rgba(48, 84, 176, 0.22)"
              filter="blur(80px)"
              pointerEvents="none"
            />
            <VStack position="relative" align="flex-start" gap={4} maxW={{ base: 'full', md: 'lg' }}>
            
              <Heading as="h1" size="2xl">{greeting}</Heading>
              <Text fontSize="lg" opacity={0.9}>{bio1}</Text>
              <Text fontSize="lg" opacity={0.9}>{bio2}</Text>
              <HStack pt={2} gap={3}>
                <Button colorPalette="teal" onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}>See projects</Button>
                <Button variant="outline" onClick={() => document.getElementById('contactme-section')?.scrollIntoView({ behavior: 'smooth' })}>Contact me</Button>
              </HStack>
            </VStack>
          </Box>
          <Image src="/iconWilliam.png" alt="Avatar" borderRadius="full" boxSize={{ base: '180px', md: '260px' }} shadow="lg" />
        </Flex>
      </Container>
    </Box>
  );
}
