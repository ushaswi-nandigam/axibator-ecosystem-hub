import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Rocket } from "lucide-react";
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
    <div className="relative min-h-screen">
      <Navbar />
      <main className="relative z-10">
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28" style={{
          background: 'linear-gradient(160deg, hsl(220 30% 96%) 0%, hsl(210 40% 92%) 40%, hsl(24 30% 94%) 100%)'
        }}>
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
          <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.08] blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/[0.08] blur-[100px]" />

          <div className="container relative text-center max-w-3xl mx-auto">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label">
              Discoveries
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="section-title">
              Startup <span className="text-primary">Ecosystem</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="section-desc mx-auto text-center">
              Explore ventures building the future across industries.
            </motion.p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Content */}
        <section className="section-padding relative overflow-hidden" style={{
          background: 'linear-gradient(160deg, hsl(213 30% 94%) 0%, hsl(210 40% 90%) 50%, hsl(220 25% 93%) 100%)'
        }}>
          <div className="absolute top-[30%] left-0 w-[450px] h-[450px] rounded-full bg-primary/[0.06] blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />

          <div className="container relative">
            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-14 rounded-2xl border-2 border-border bg-card p-8 shadow-xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15">
                  <Filter size={18} className="text-primary" />
                </div>
                <span className="text-base font-bold text-foreground">Filters</span>
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-primary/70">Industry</span>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((ind) => (
                      <button
                        key={ind}
                        onClick={() => setFilterIndustry(ind)}
                        className={`rounded-full px-5 py-2.5 text-xs font-bold tracking-wide transition-all duration-300 ${
                          filterIndustry === ind
                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                            : "bg-muted text-muted-foreground hover:text-foreground hover:bg-primary/10"
                        }`}
                      >
                        {ind}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-primary/70">Stage</span>
                  <div className="flex flex-wrap gap-2">
                    {stages.map((st) => (
                      <button
                        key={st}
                        onClick={() => setFilterStage(st)}
                        className={`rounded-full px-5 py-2.5 text-xs font-bold tracking-wide transition-all duration-300 ${
                          filterStage === st
                            ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                            : "bg-muted text-muted-foreground hover:text-foreground hover:bg-primary/10"
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Empty state */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border-2 border-dashed border-border bg-card/50 p-20 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <Rocket className="h-8 w-8 text-primary/60" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">No startups listed yet</h3>
              <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                Startups from our incubation programs will appear here as they join the ecosystem.
              </p>
              <Link to="/apply">
                <Button size="lg" className="mt-8 rounded-full bg-primary px-10 text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/35">
                  Apply as a Startup
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Startups;
