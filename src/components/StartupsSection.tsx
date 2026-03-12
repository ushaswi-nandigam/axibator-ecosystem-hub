import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Navigation } from "lucide-react";

const StartupsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, hsl(210 30% 97%) 0%, hsl(220 25% 95%) 50%, hsl(213 30% 96%) 100%)'
    }}>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">Startups Set Sail</span>
            <h2 className="section-title">Featured Founders</h2>
            <p className="section-desc">Startups launched from the Axibator ecosystem.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link to="/startups">
              <Button variant="outline" className="rounded-full gap-2 font-semibold border-border text-foreground hover:bg-muted">
                View All Startups
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-border/60 bg-card p-16 md:p-20 text-center shadow-lg"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15">
            <Navigation className="h-7 w-7 text-primary" />
          </div>
          <p className="text-xl font-semibold text-muted-foreground">
            Founder profiles will appear here as startups join the ecosystem.
          </p>
          <Link to="/apply">
            <Button className="mt-8 rounded-full bg-primary text-primary-foreground gap-2 px-8 font-semibold shadow-lg shadow-primary/25">
              Become a Featured Founder
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default StartupsSection;
