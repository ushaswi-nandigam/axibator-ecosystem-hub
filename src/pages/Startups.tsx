import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          <div className="section-header">
            <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold md:text-4xl">
              Startup <span className="text-primary">Ecosystem</span>
            </motion.h1>
            <p className="mt-2 text-muted-foreground">Explore ventures building the future.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col gap-5 rounded-xl border border-border bg-card p-5 shadow-sm">
            <div>
              <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Industry</span>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind) => (
                  <button
                    key={ind}
                    onClick={() => setFilterIndustry(ind)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                      filterIndustry === ind
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Stage</span>
              <div className="flex flex-wrap gap-2">
                {stages.map((st) => (
                  <button
                    key={st}
                    onClick={() => setFilterStage(st)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                      filterStage === st
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Startup grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-base font-bold text-foreground">{s.name}</h3>
                  <ExternalLink size={14} className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">{s.founder}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="tag">{s.industry}</span>
                  <span className="tag">{s.program}</span>
                  <span className="tag">{s.stage}</span>
                </div>
              </motion.div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="mt-12 text-center text-muted-foreground">No startups match your filters.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Startups;
