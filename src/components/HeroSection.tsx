import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Download } from "lucide-react";
import heroImg from "@/assets/axibator-hero-custom.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-background" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="text-sm font-medium text-muted-foreground"
            >
              More than a program.
            </motion.p>

            <h1 className="mt-4 text-4xl font-bold leading-[1.1] md:text-5xl lg:text-[3.25rem]">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="block"
              >
                Where Founders
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="block"
              >
                Find <span className="text-primary">Direction</span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="block text-muted-foreground"
              >
                — and the Grit to Build Bold.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              A launchpad for grassroots and student founders. Axibator supports first-time founders from small towns, campuses, and communities with clarity, systems, and support.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link to="/apply">
                <Button size="lg" className="group rounded-full bg-primary px-7 text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/20">
                  Apply to Cohort
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="https://chat.whatsapp.com/axibator" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="rounded-full border-border px-7 text-foreground hover:bg-muted transition-all duration-200">
                  Join Community
                </Button>
              </a>
            </motion.div>

            {/* Download deck link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.4 }}
              className="mt-4"
            >
              <Link to="/resources" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                <Download className="h-3.5 w-3.5" />
                Download Program Deck
              </Link>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.4 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {["Grassroots Focused", "Student Founders", "Community Driven"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.05 + i * 0.08, duration: 0.3 }}
                  className="tag"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Hero SVG illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex items-center justify-center"
          >
            <img
              src={heroSvg}
              alt="Axibator - Startup Incubator Journey"
              className="w-full max-w-md xl:max-w-lg dark:brightness-90 dark:contrast-110"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
