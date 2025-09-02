'use client';

import { Box, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box as="footer" py={8} textAlign="center" color="gray.500">
      <Text>© {new Date().getFullYear()} William J. All rights reserved.</Text>
    </Box>
  );
}

