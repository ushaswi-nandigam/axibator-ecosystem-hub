import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const StartupsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden section-light-alt">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label">
            Portfolio
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7 }} className="section-title">
            Featured Founders
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="section-desc mx-auto text-center">
            Startups launched from the Axibator ecosystem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 rounded-2xl border border-border bg-card p-12"
          >
            <p className="text-lg text-muted-foreground">
              Founder profiles will appear here as startups join the ecosystem.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/apply">
                <Button className="rounded-full bg-accent text-accent-foreground gap-2 px-8 font-semibold shadow-lg shadow-accent/15">
                  Become a Founder <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/startups">
                <Button variant="outline" className="rounded-full gap-2 font-semibold border">
                  View All <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StartupsSection;
