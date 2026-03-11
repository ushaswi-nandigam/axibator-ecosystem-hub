import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/axibator-hero-custom.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-background" />
      
      {/* Minimal grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="container relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              More than a program.
            </motion.div>

            <h1 className="mt-7 text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-[3.5rem]">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="block"
              >
                Where Founders
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="block"
              >
                Find <span className="text-primary">Direction</span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="block text-muted-foreground/70"
              >
                — and the Grit to Build Bold.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              A launchpad for grassroots and student founders. From small towns, campuses, and communities — with clarity, systems, and support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link to="/apply">
                <Button size="lg" className="group rounded-full bg-primary px-8 text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                  Apply to Cohort
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/programs">
                <Button variant="outline" size="lg" className="rounded-full px-8 font-medium border-border hover:bg-muted transition-all duration-300">
                  Explore Ecosystem
                </Button>
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-10 flex items-center gap-6 text-sm text-muted-foreground"
            >
              {["Grassroots Focused", "Student Founders", "Community Driven"].map((tag, i) => (
                <span key={tag} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 -m-8 rounded-full bg-primary/5 blur-3xl" />
              <img
                src={heroImg}
                alt="Axibator - Grassroots founder journey from small towns to thriving startups"
                className="relative w-full max-w-lg xl:max-w-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
