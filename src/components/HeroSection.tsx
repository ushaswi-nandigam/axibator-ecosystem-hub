import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/axibator-hero-custom.png";

const metrics = [
  { value: "50+", label: "Startup Teams" },
  { value: "300+", label: "Mentors Network" },
  { value: "75+", label: "Global Partners" },
  { value: "$500K+", label: "Credits Available" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/40 via-background to-background" />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="container relative">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-5 py-2 text-xs font-semibold tracking-wide text-primary"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              EXECUTION-FIRST INCUBATOR
            </motion.div>

            <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block"
              >
                Where Founders
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="block"
              >
                Find <span className="text-primary">Direction</span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="block text-muted-foreground/60 text-3xl md:text-4xl lg:text-5xl mt-2"
              >
                — and the Grit to Build Bold.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground"
            >
              Axibator is an execution-first incubator and growth accelerator helping student and grassroots founders move from idea to MVP to market-ready startups.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link to="/apply">
                <Button size="lg" className="group h-14 rounded-full bg-primary px-10 text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300">
                  Apply to Cohort
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/programs">
                <Button variant="outline" size="lg" className="h-14 rounded-full px-10 text-base font-medium border-border/60 hover:bg-muted transition-all duration-300">
                  Explore Programs
                </Button>
              </Link>
            </motion.div>

            {/* Metrics strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4 border-t border-border/50 pt-8"
            >
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + i * 0.1 }}
                >
                  <p className="text-2xl font-bold text-foreground md:text-3xl">{m.value}</p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground tracking-wide">{m.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-12 rounded-full bg-primary/5 blur-3xl" />
              <div className="absolute -inset-20 rounded-full bg-accent/3 blur-[100px]" />
              <img
                src={heroImg}
                alt="Axibator - Grassroots founder journey from small towns to thriving startups"
                className="relative w-full max-w-xl drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
