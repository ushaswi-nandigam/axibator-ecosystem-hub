import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const industries = ["All", "AgriTech", "EdTech", "HealthTech", "CleanTech", "FinTech", "Logistics", "E-Commerce"];
const stages = ["All", "Idea", "Early", "Growth", "Scale"];

const Startups = () => {
  const [filterIndustry, setFilterIndustry] = useState("All");
  const [filterStage, setFilterStage] = useState("All");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="hero-dark relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-[30%] left-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-accent/[0.04] blur-[100px]" />

        <div className="container relative text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label-light">Discoveries</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-extrabold text-secondary-foreground leading-[1.05] mt-4">
            Startup <span className="text-primary">Ecosystem</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-secondary-foreground/60 leading-relaxed">
            Explore ventures building the future across industries.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding section-light">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Filter size={18} className="text-primary" />
              </div>
              <span className="text-base font-bold text-foreground">Filters</span>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-primary/70">Industry</span>
                <div className="flex flex-wrap gap-2">
                  {industries.map((ind) => (
                    <button key={ind} onClick={() => setFilterIndustry(ind)}
                      className={`rounded-full px-5 py-2.5 text-xs font-bold tracking-wide transition-all duration-300 ${
                        filterIndustry === ind ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                      }`}>{ind}</button>
                  ))}
                </div>
              </div>
              <div>
                <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-primary/70">Stage</span>
                <div className="flex flex-wrap gap-2">
                  {stages.map((st) => (
                    <button key={st} onClick={() => setFilterStage(st)}
                      className={`rounded-full px-5 py-2.5 text-xs font-bold tracking-wide transition-all duration-300 ${
                        filterStage === st ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                      }`}>{st}</button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center py-20">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6">
              <Rocket className="h-8 w-8 text-primary/60" />
            </div>
            <h3 className="text-xl font-bold text-foreground">No startups listed yet</h3>
            <p className="mt-3 text-muted-foreground max-w-md mx-auto">Startups from our incubation programs will appear here as they join the ecosystem.</p>
            <Link to="/apply">
              <Button size="lg" className="mt-8 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-lg shadow-primary/25">Apply as a Startup</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Startups;
