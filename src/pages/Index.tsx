import Navbar from "@/components/Navbar";
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
import Footer from "@/components/Footer";
import { ScrollProgressBar, ScrollScale } from "@/components/ScrollAnimations";
import Marquee from "@/components/Marquee";
import { Compass, Users, Handshake, Award, Rocket, Globe } from "lucide-react";

const marqueeItems = [
  { icon: Rocket, text: "50+ Startup Teams" },
  { icon: Users, text: "300+ Mentors Network" },
  { icon: Handshake, text: "75+ Global Partners" },
  { icon: Award, text: "$500K+ Credits Available" },
  { icon: Globe, text: "4 Cities Across India" },
  { icon: Compass, text: "6 Programs Running" },
];

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ScrollProgressBar />
      <InnovationBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />

        {/* Marquee ticker */}
        <div className="relative z-20 -mt-6">
          <div className="bg-secondary py-4 border-y border-secondary-foreground/10">
            <Marquee speed={25}>
              <div className="flex items-center gap-12">
                {marqueeItems.map((item) => (
                  <div key={item.text} className="flex items-center gap-3 whitespace-nowrap">
                    <item.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-bold text-secondary-foreground tracking-wide">{item.text}</span>
                    <span className="text-secondary-foreground/20 text-lg">•</span>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>

        <ScrollScale>
          <ProblemSection />
        </ScrollScale>
        <ScrollScale>
          <WhatIsSection />
        </ScrollScale>
        <ScrollScale>
          <FounderJourney />
        </ScrollScale>
        <ScrollScale>
          <ProgramsSection />
        </ScrollScale>
        <ScrollScale>
          <BuilderNestSection />
        </ScrollScale>
        <ScrollScale>
          <EcosystemNetwork />
        </ScrollScale>
        <ScrollScale>
          <EcosystemStats />
        </ScrollScale>
        <ScrollScale>
          <StartupsSection />
        </ScrollScale>
        <ScrollScale>
          <PartnersSection />
        </ScrollScale>
        <ScrollScale>
          <EventsSection />
        </ScrollScale>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
