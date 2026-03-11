import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StartupsSection = () => {
  return (
    <section className="section-padding bg-ecosystem-bg">
      <div className="container">
        <div className="section-header flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Discoveries</p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-3 text-3xl font-bold md:text-4xl"
            >
              Featured Founders
            </motion.h2>
            <p className="mt-3 text-muted-foreground">Meet the grassroots founders building the future of India.</p>
          </div>
          <Link to="/startups">
            <Button variant="outline" size="sm" className="rounded-full">View All Founders</Button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-dashed border-border bg-card/50 p-12 text-center"
        >
          <p className="text-muted-foreground">Founder profiles will appear here as startups join the ecosystem.</p>
          <Link to="/apply">
            <Button size="sm" className="mt-4 rounded-full">Become a Featured Founder</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default StartupsSection;
