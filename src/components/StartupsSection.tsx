import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Rocket } from "lucide-react";

const StartupsSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-16">
          <div>
            <span className="section-label">Portfolio</span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Featured Founders
            </motion.h2>
            <p className="section-desc">Meet the grassroots founders building the future of India.</p>
          </div>
          <Link to="/startups">
            <Button variant="outline" className="rounded-full gap-2 font-semibold">
              View All Startups
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-muted/50 p-16 md:p-20 text-center"
        >
          <Rocket className="mx-auto h-12 w-12 text-muted-foreground/20" />
          <p className="mt-6 text-xl font-semibold text-muted-foreground">
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
