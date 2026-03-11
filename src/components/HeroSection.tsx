import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Anchor, Map } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Direction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold text-secondary-foreground">
              <Compass className="h-3.5 w-3.5" />
              Hybrid Incubator & Growth Accelerator
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] md:text-5xl lg:text-[3.5rem]">
              Where Founders
              <br />
              Find <span className="text-primary">Direction</span>
              <br />
              <span className="text-muted-foreground">— and the Grit to Build Bold.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              A launchpad for grassroots and student founders. From small towns, campuses, and communities — with clarity, systems, and execution support.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/apply">
                <Button size="lg" className="rounded-full bg-primary px-8 text-primary-foreground font-semibold hover:bg-primary/90">
                  Apply to Cohort
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/startups">
                <Button variant="outline" size="lg" className="rounded-full border-border px-8 text-foreground hover:bg-muted">
                  Explore Ecosystem
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Grassroots Focused", "Student Founders", "Community Driven"].map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Right — Journey visual cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Your Journey Starts Here</p>
                <div className="mt-6 space-y-4">
                  {[
                    { step: "01", label: "Discover", desc: "Validate your idea", icon: Compass, active: true },
                    { step: "02", label: "Build", desc: "Ship your MVP", icon: Anchor, active: false },
                    { step: "03", label: "Launch", desc: "Find your market", icon: Map, active: false },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className={`flex items-center gap-4 rounded-xl border p-4 transition-colors ${
                        item.active
                          ? "border-primary/30 bg-primary/5"
                          : "border-border bg-background"
                      }`}
                    >
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                        item.active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}>
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                      <span className="ml-auto font-display text-xs font-bold text-muted-foreground">{item.step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating stat */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 rounded-xl border border-border bg-card px-5 py-3 shadow-md"
              >
                <p className="text-2xl font-bold text-primary">25+</p>
                <p className="text-xs text-muted-foreground">MVPs Launching</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
