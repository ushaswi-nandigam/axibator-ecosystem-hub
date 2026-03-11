import Navbar from "@/components/Navbar";
import InnovationBackground from "@/components/InnovationBackground";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import FounderJourney from "@/components/FounderJourney";
import ProgramsSection from "@/components/ProgramsSection";
import EcosystemStats from "@/components/EcosystemStats";
import StartupsSection from "@/components/StartupsSection";
import PartnersSection from "@/components/PartnersSection";
import EventsSection from "@/components/EventsSection";
import CTASection from "@/components/CTASection";
import BuilderNestSection from "@/components/BuilderNestSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <InnovationBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <WhatIsSection />
        <FounderJourney />
        <EcosystemStats />
        <ProgramsSection />
        <BuilderNestSection />
        <StartupsSection />
        <PartnersSection />
        <EventsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
