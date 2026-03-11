import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-10 text-center shadow-sm md:p-14"
        >
          <h2 className="text-2xl font-bold md:text-4xl">
            Ready to Build <span className="text-primary">Without Waiting?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Join founders who are turning ideas into working startups.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/apply">
              <Button size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90">
                Apply to Cohort
              </Button>
            </Link>
            <a href="mailto:connect@axibator.com">
              <Button variant="outline" size="lg">Join Community</Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
