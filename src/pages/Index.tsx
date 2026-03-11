import NetworkBackground from "@/components/NetworkBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import FounderJourney from "@/components/FounderJourney";
import ProgramsSection from "@/components/ProgramsSection";
import EcosystemStats from "@/components/EcosystemStats";
import StartupsSection from "@/components/StartupsSection";
import PartnersSection from "@/components/PartnersSection";
import EventsSection from "@/components/EventsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <NetworkBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <WhatIsSection />
        <FounderJourney />
        <ProgramsSection />
        <EcosystemStats />
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
