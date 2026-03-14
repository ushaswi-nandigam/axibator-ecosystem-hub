import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const StartupsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding section-grey">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="section-label">
            Portfolio
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-title">
            Featured Founders
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="section-desc mx-auto text-center">
            Startups launched from the Axibator ecosystem.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="rounded-2xl border border-dashed border-border bg-card p-16 text-center"
        >
          <p className="text-lg font-semibold text-muted-foreground">
            Founder profiles will appear here as startups join the ecosystem.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/apply">
              <Button className="rounded-full bg-primary text-primary-foreground gap-2 px-8 font-semibold shadow-lg shadow-primary/20">
                Become a Featured Founder <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/startups">
              <Button variant="outline" className="rounded-full gap-2 font-semibold border">
                View All Startups <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StartupsSection;
