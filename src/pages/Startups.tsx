import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Filter, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const industries = ["All", "AgriTech", "EdTech", "HealthTech", "CleanTech", "FinTech", "Logistics", "E-Commerce"];
const stages = ["All", "Idea", "Early", "Growth", "Scale"];

const Startups = () => {
  const [filterIndustry, setFilterIndustry] = useState("All");
  const [filterStage, setFilterStage] = useState("All");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          <div className="section-header text-center">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-semibold uppercase tracking-widest text-primary">
              Discoveries
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mt-3 text-3xl font-bold md:text-5xl">
              Startup <span className="text-primary">Ecosystem</span>
            </motion.h1>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">Explore ventures building the future across industries.</p>
          </div>

          {/* Filters card */}
          <div className="mb-10 rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Filter size={16} className="text-primary" />
              <span className="text-sm font-semibold text-foreground">Filters</span>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Industry</span>
                <div className="flex flex-wrap gap-2">
                  {industries.map((ind) => (
                    <button
                      key={ind}
                      onClick={() => setFilterIndustry(ind)}
                      className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 ${
                        filterIndustry === ind
                          ? "bg-primary text-primary-foreground shadow-sm"
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
                      className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 ${
                        filterStage === st
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "bg-muted text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Empty state */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-dashed border-border bg-card/50 p-16 text-center"
          >
            <Rocket className="mx-auto h-10 w-10 text-muted-foreground/40" />
            <h3 className="mt-4 text-lg font-semibold text-foreground">No startups listed yet</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Startups from our incubation programs will appear here as they join the ecosystem.
            </p>
            <Link to="/apply">
              <Button size="sm" className="mt-5 rounded-full">Apply as a Startup</Button>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Startups;
