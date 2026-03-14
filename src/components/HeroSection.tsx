import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const metrics = [
  { value: "50+", label: "Startup Teams" },
  { value: "300+", label: "Mentors" },
  { value: "75+", label: "Partners" },
  { value: "$500K+", label: "Credits" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-32 hero-dark overflow-hidden">
      <div className="container relative">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-xs font-bold tracking-[0.2em] text-accent uppercase"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            Execution-First Incubator
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-10 text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl xl:text-8xl"
          >
            From Idea to
            <br />
            <span className="text-accent">Startup.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-white/50 md:text-xl"
          >
            Axibator is a structured incubation system that takes founders through five stages — from discovery to global scale. No fluff. Just execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <Link to="/apply">
              <Button size="xl" className="rounded-full bg-accent text-accent-foreground font-bold shadow-xl shadow-accent/20 hover:bg-accent/90 transition-all duration-300 group">
                Apply to Cohort
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/programs">
              <Button size="xl" variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/5 transition-all duration-300">
                View Programs
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-20 flex flex-wrap gap-12 border-t border-white/10 pt-10"
          >
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
              >
                <p className="text-3xl font-extrabold text-white md:text-4xl">{m.value}</p>
                <p className="mt-1 text-xs font-semibold text-white/35 tracking-wide uppercase">{m.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
