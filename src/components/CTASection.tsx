import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border bg-accent px-8 py-16 text-center text-accent-foreground shadow-lg md:px-16 md:py-20"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Build Without Waiting?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-accent-foreground/80">
            Join hundreds of grassroots founders who are turning ideas into reality. Your journey from idea to impact starts here.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/apply">
              <Button size="lg" className="rounded-full bg-primary px-8 text-primary-foreground font-semibold hover:bg-primary/90">
                Apply to Cohort
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <a href="mailto:connect@axibator.com">
              <Button size="lg" variant="outline" className="rounded-full border-accent-foreground/30 px-8 text-accent-foreground hover:bg-accent-foreground/10">
                Join Community
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
