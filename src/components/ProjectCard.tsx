'use client';

import {
  CardRoot,
  CardBody,
  CardFooter,
  Image,
  VStack,
  Heading,
  Text,
  HStack,
  TagRoot,
  TagLabel,
  Button,
  Link as ChakraLink,
  IconButton,
  chakra,
} from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags?: string[];
  link: string;
}

export default function ProjectCard({ title, description, imageSrc, tags, link }: ProjectCardProps) {
  return (
    <CardRoot
      h="100%"
      overflow="hidden"
      borderRadius="2xl"
      shadow="md"
      _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
      transition="all .2s ease"
    >
      <Image src={imageSrc} alt={title} objectFit="cover" w="100%" h="180px" />
      <CardBody>
        <VStack align="flex-start" gap={2}>
          <Heading as="h3" size="md">
            {title}
          </Heading>
          <Text fontSize="sm" color="gray.600">
            {description}
          </Text>
          <HStack pt={1} wrap="wrap">
            {tags?.map((t) => (
              <TagRoot key={t} colorPalette="teal" variant="subtle">
                <TagLabel>{t}</TagLabel>
              </TagRoot>
            ))}
          </HStack>
        </VStack>
      </CardBody>
      <CardFooter>
        <HStack w="full" justify="space-between">
          <ChakraLink href={link} target="_blank" rel="noopener noreferrer">
            <Button colorPalette="teal" variant="ghost">
              View
              <chakra.span ml="2" display="inline-flex">
                <FaArrowRight />
              </chakra.span>
            </Button>
          </ChakraLink>
          <ChakraLink href={link} target="_blank" rel="noopener noreferrer">
            <IconButton aria-label="open" variant="ghost">
              <FaArrowRight />
            </IconButton>
          </ChakraLink>
        </HStack>
      </CardFooter>
    </CardRoot>
  );
}
