'use client';

import React from 'react';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>;
}
