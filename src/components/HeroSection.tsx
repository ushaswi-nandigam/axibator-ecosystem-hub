import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Rocket, Users, Lightbulb, TrendingUp } from "lucide-react";

const tags = [
  "Student Founders",
  "Early-Stage Builders",
  "Tier 2 & Tier 3 Ecosystems",
  "Execution First",
  "Community Driven",
];

const HeroSection = () => {
  return (
    <section className="flex min-h-[85vh] items-center pt-20 md:pt-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-3xl font-bold leading-[1.1] md:text-5xl lg:text-6xl">
              Where Founders Find Direction
              <br />
              <span className="text-primary">— and the Grit to Build Bold.</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              More than a program. A launchpad for grassroots and student founders. Axibator supports first-time founders from small towns, campuses, and communities with clarity, systems, and execution support.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/apply">
                <Button size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90">
                  Apply to Cohort
                </Button>
              </Link>
              <Link to="/startups">
                <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-muted">
                  Explore Ecosystem
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative mx-auto w-full max-w-md">
              {/* Abstract ecosystem visual */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Rocket className="h-5 w-5 text-primary" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-foreground">50+ Startups</p>
                  <p className="mt-1 text-xs text-muted-foreground">Building across India</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-foreground">300+ Mentors</p>
                  <p className="mt-1 text-xs text-muted-foreground">Global network</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
                    <Lightbulb className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-foreground">6 Programs</p>
                  <p className="mt-1 text-xs text-muted-foreground">Idea to scale</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                  className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-foreground">$500K+</p>
                  <p className="mt-1 text-xs text-muted-foreground">Credits available</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
