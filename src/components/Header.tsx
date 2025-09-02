'use client';

import { Box, Container, HStack, Link as ChakraLink } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

const socials = [
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/tu-usuario' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/tu-usuario' },
  { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com/tu-usuario' },
];

export default function Header() {
  const lastPos = useRef(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY || 0;
      setHidden(y > lastPos.current && y > 80);
      lastPos.current = y;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState({}, '', `/#${id}`);
  };

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="black"
      color="white"
      zIndex={1000}
      style={{ transform: hidden ? 'translateY(-200px)' : 'translateY(0)' }}
      transition="transform .35s ease"
    >
      <Container maxW="6xl" py={3} display="flex" alignItems="center" justifyContent="space-between">
        <nav aria-label="socials">
          <HStack gap={4}>
            {socials.map((s) => (
              <ChakraLink
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                title={s.name}
                _hover={{ color: 'teal.300' }}
              >
                <s.icon size={22} />
              </ChakraLink>
            ))}
          </HStack>
        </nav>
        <nav aria-label="sections">
          <HStack gap={6} fontWeight="medium">
            <ChakraLink
              href="/#projects-section"
              onClick={(e) => onNavClick(e, 'projects-section')}
              _hover={{ color: 'teal.300' }}
            >
              Projects
            </ChakraLink>
            <ChakraLink
              href="/#contactme-section"
              onClick={(e) => onNavClick(e, 'contactme-section')}
              _hover={{ color: 'teal.300' }}
            >
              Contact Me
            </ChakraLink>
          </HStack>
        </nav>
      </Container>
    </Box>
  );
}
