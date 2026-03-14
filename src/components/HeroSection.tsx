import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-24 hero-dark">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-brand-blue/30" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-primary/40 bg-primary/15 px-5 py-2 text-xs font-bold tracking-wide text-primary"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            EXECUTION-FIRST INCUBATOR
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-8 text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Where Founders Find{" "}
            <span className="text-primary">Direction</span>
            <span className="block text-white/50 text-2xl md:text-3xl lg:text-4xl mt-3 font-medium">
              — and the Grit to Build Bold.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-white/50"
          >
            More than a program. A launchpad for grassroots and student founders
            moving from idea to MVP to market.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link to="/apply">
              <Button size="lg" className="group h-14 rounded-full bg-primary px-10 text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/25 transition-all duration-300">
                Apply to Cohort
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="mailto:connect@axibator.com">
              <Button variant="outline" size="lg" className="h-14 rounded-full px-10 text-base font-semibold border border-white/20 text-white hover:bg-white/10 transition-all duration-300">
                <Users className="mr-2 h-5 w-5" />
                Join Community
              </Button>
            </a>
            <a href="#programs">
              <Button variant="ghost" size="lg" className="h-14 rounded-full px-8 text-base font-medium text-white/60 hover:text-white hover:bg-white/5">
                <Download className="mr-2 h-5 w-5" />
                Download Program Deck
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
