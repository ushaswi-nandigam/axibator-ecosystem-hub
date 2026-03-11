import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="panel mx-auto max-w-3xl rounded-xl p-12 text-center md:p-16"
        >
          <h2 className="text-3xl font-bold md:text-5xl">
            Ready to Build <span className="text-primary">Without Waiting?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
            Join founders who are turning ideas into working startups.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/apply">
              <Button variant="hero" size="lg">Apply to Cohort</Button>
            </Link>
            <a href="mailto:connect@axibator.com">
              <Button variant="hero-outline" size="lg">Join Community</Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
