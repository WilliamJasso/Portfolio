"use client";

import Header from "@/components/Header";
import LandingSection from "@/components/LandingSection";
import ExperienceSection from "@/components/ExperienceSection";
import TechStackSection from "@/components/TechStackSection";
import CertsContactSection from "@/components/CertsContactSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
     
      <div className="pt-16">
        <LandingSection />
        <ExperienceSection />
        <div aria-hidden className="h-32 md:h-48 lg:h-40" />
        <TechStackSection />
         <div aria-hidden className="h-32 md:h-48 lg:h-40" />
        <CertsContactSection />
   <div aria-hidden className="h-32 md:h-48 lg:h-40" />
        <Footer />
      </div>
    </>
  );
}
