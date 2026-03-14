import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-secondary px-10 py-24 text-center text-secondary-foreground md:px-20 md:py-32"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative text-4xl font-bold md:text-5xl lg:text-6xl leading-[1.1]"
          >
            Ready to Build?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative mx-auto mt-6 max-w-lg text-secondary-foreground/50 text-lg md:text-xl"
          >
            Join founders who are building the future with Axibator. Your journey from idea to impact starts here.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative mt-12 flex flex-wrap justify-center gap-4"
          >
            <Link to="/apply">
              <Button size="lg" className="group h-14 rounded-full bg-accent px-10 text-base text-accent-foreground font-bold hover:bg-accent/90 shadow-xl shadow-accent/20 transition-all duration-300">
                Apply to Cohort <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="mailto:connect@axibator.com">
              <Button size="lg" variant="outline" className="h-14 rounded-full border-white/15 px-10 text-base text-secondary-foreground hover:bg-white/10 transition-all duration-300">
                Join Community
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
