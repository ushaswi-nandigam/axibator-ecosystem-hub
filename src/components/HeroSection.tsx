import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const tags = [
  "Student Founders",
  "Early-Stage Builders",
  "Tier 2 & Tier 3 Ecosystems",
  "Execution First",
  "Community Driven",
];

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center pt-16">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-bold leading-[1.1] md:text-6xl lg:text-7xl">
            Where Founders Find Direction
            <br />
            <span className="text-primary">— and the Grit to Build Bold.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            More than a program. A launchpad for grassroots and student founders. Axibator supports first-time founders from small towns, campuses, and communities with clarity, systems, and execution support.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/apply">
              <Button variant="hero" size="xl">Apply to Cohort</Button>
            </Link>
            <Link to="/startups">
              <Button variant="hero-outline" size="xl">Explore Ecosystem</Button>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
