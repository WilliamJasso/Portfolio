"use client";

import { Box } from "@chakra-ui/react";
import Header from "@/components/Header";
import LandingSection from "@/components/LandingSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactMeSection from "@/components/ContactMeSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <Box pt={{ base: 16, md: 16 }}>
        <LandingSection />
        <ProjectsSection />
        <ContactMeSection />
        <Footer />
      </Box>
    </>
  );
}
