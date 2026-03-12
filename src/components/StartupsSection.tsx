import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket, Navigation } from "lucide-react";

const StartupsSection = () => {
  return (
    <section className="section-padding dark-section">
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-16">
          <div>
            <span className="section-label">Startups Set Sail</span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title text-dark-section-foreground"
            >
              Featured Founders
            </motion.h2>
            <p className="section-desc text-dark-section-foreground/50">Startups launched from the Axibator ecosystem.</p>
          </div>
          <Link to="/startups">
            <Button variant="outline" className="rounded-full gap-2 font-semibold border-dark-section-foreground/20 text-dark-section-foreground hover:bg-dark-section-foreground/5">
              View All Startups
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-dark-section-foreground/[0.06] bg-dark-section-foreground/[0.03] p-16 md:p-20 text-center"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Navigation className="h-7 w-7 text-primary/60" />
          </div>
          <p className="text-xl font-semibold text-dark-section-foreground/60">
            Founder profiles will appear here as startups join the ecosystem.
          </p>
          <Link to="/apply">
            <Button className="mt-8 rounded-full bg-primary text-primary-foreground gap-2 px-8 font-semibold shadow-lg shadow-primary/20">
              Become a Featured Founder
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default StartupsSection;
