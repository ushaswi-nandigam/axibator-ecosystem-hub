import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const StartupsSection = () => {
  return (
    <section className="section-padding bg-ecosystem-bg">
      <div className="container">
        <div className="section-header flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">Portfolio</p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Featured Founders
            </motion.h2>
            <p className="section-desc">Meet the grassroots founders building the future of India.</p>
          </div>
          <Link to="/startups">
            <Button variant="outline" size="sm" className="rounded-full gap-2">
              View All Founders
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-card p-16 text-center shadow-sm"
        >
          <p className="text-lg font-medium text-muted-foreground">
            Founder profiles will appear here as startups join the ecosystem.
          </p>
          <Link to="/apply">
            <Button size="sm" className="mt-6 rounded-full bg-primary text-primary-foreground gap-2">
              Become a Featured Founder
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default StartupsSection;
