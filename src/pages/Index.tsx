import InnovationBackground from "@/features/home/InnovationBackground";
import HeroSection from "@/features/home/HeroSection";
import ProblemSection from "@/features/home/ProblemSection";
import WhatIsSection from "@/features/home/WhatIsSection";
import FounderJourney from "@/features/programs/FounderJourney";
import ProgramsSection from "@/features/programs/ProgramsSection";
import EcosystemNetwork from "@/features/ecosystem/EcosystemNetwork";
import EcosystemStats from "@/features/ecosystem/EcosystemStats";
import StartupsSection from "@/features/startups/StartupsSection";
import BuilderNestSection from "@/features/builder-nest/BuilderNestSection";
import PartnersSection from "@/features/partners/PartnersSection";
import EventsSection from "@/features/events/EventsSection";
import CTASection from "@/features/home/CTASection";

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
