import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";

const startups = [
  { name: "AgriSense", founder: "Priya Sharma", industry: "AgriTech", program: "BuildLab", stage: "Growth", desc: "AI-powered crop monitoring for smallholder farmers." },
  { name: "EduFlow", founder: "Ravi Kumar", industry: "EdTech", program: "LaunchPad", stage: "Early", desc: "Personalized learning paths for tier-2 students." },
  { name: "MediTrack", founder: "Ananya Reddy", industry: "HealthTech", program: "TechXcelerate", stage: "Growth", desc: "Digital health records for rural clinics." },
  { name: "GreenGrid", founder: "Arjun Patel", industry: "CleanTech", program: "Ignite", stage: "Idea", desc: "Decentralized solar energy microgrids." },
  { name: "FinLite", founder: "Sneha Gupta", industry: "FinTech", program: "GrowthTrack", stage: "Scale", desc: "Financial literacy platform for young professionals." },
  { name: "LogiMove", founder: "Vikram Singh", industry: "Logistics", program: "BuildLab", stage: "Growth", desc: "Last-mile delivery optimization for e-commerce." },
  { name: "CraftBridge", founder: "Meera Joshi", industry: "E-Commerce", program: "HerPreneur", stage: "Early", desc: "Connecting artisans directly to global markets." },
  { name: "AquaPure", founder: "Suresh Nair", industry: "CleanTech", program: "Rural Innovators", stage: "Early", desc: "Affordable water purification for rural communities." },
];

const industries = ["All", "AgriTech", "EdTech", "HealthTech", "CleanTech", "FinTech", "Logistics", "E-Commerce"];
const stages = ["All", "Idea", "Early", "Growth", "Scale"];

const Startups = () => {
  const [filterIndustry, setFilterIndustry] = useState("All");
  const [filterStage, setFilterStage] = useState("All");

  const filtered = startups.filter(
    (s) =>
      (filterIndustry === "All" || s.industry === filterIndustry) &&
      (filterStage === "All" || s.stage === filterStage)
  );

  return (
    <div className="relative min-h-screen">
      <NetworkBackground />
      <Navbar />
      <main className="relative z-10 pt-24">
        <div className="container pb-24">
          <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-4xl font-bold md:text-5xl">
            Startup <span className="text-primary">Ecosystem</span>
          </motion.h1>
          <p className="mt-4 text-muted-foreground">Explore ventures building the future.</p>

          <div className="mt-8 flex flex-wrap gap-6">
            <div>
              <span className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Industry</span>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind) => (
                  <button key={ind} onClick={() => setFilterIndustry(ind)} className={`tag ${filterIndustry === ind ? "border-primary text-primary" : ""}`}>
                    {ind}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">Stage</span>
              <div className="flex flex-wrap gap-2">
                {stages.map((st) => (
                  <button key={st} onClick={() => setFilterStage(st)} className={`tag ${filterStage === st ? "border-primary text-primary" : ""}`}>
                    {st}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="horizontal-scroll mt-10">
            {filtered.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="panel group w-80 rounded-lg p-6"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-lg font-bold text-foreground">{s.name}</h3>
                  <ExternalLink size={14} className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{s.founder}</p>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="tag">{s.industry}</span>
                  <span className="tag">{s.program}</span>
                  <span className="tag">{s.stage}</span>
                </div>
              </motion.div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="mt-10 text-center text-muted-foreground">No startups match your filters.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Startups;
