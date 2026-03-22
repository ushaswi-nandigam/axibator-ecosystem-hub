import InnovationBackground from "@/components/InnovationBackground";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import WhatIsSection from "@/components/WhatIsSection";
import FounderJourney from "@/components/FounderJourney";
import ProgramsSection from "@/components/ProgramsSection";
import EcosystemNetwork from "@/components/EcosystemNetwork";
import EcosystemStats from "@/components/EcosystemStats";
import StartupsSection from "@/components/StartupsSection";
import BuilderNestSection from "@/components/BuilderNestSection";
import PartnersSection from "@/components/PartnersSection";
import EventsSection from "@/components/EventsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <InnovationBackground />
      <main className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <WhatIsSection />
        <FounderJourney />
        <ProgramsSection />
        <BuilderNestSection />
        <EcosystemNetwork />
        <EcosystemStats />
        <StartupsSection />
        <PartnersSection />
        <EventsSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
