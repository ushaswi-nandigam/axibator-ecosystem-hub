import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-secondary px-10 py-24 text-center text-secondary-foreground md:px-20 md:py-32"
        >
          {/* Background accents */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-primary blur-[120px]" />
            <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-accent blur-[120px]" />
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.3, type: "spring" }}
            className="relative mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20"
          >
            <Compass className="h-7 w-7 text-primary" />
          </motion.div>

          <h2 className="relative text-4xl font-bold md:text-5xl lg:text-6xl leading-[1.1]">
            Ready to Set<br/>Your Course?
          </h2>
          <p className="relative mx-auto mt-6 max-w-lg text-secondary-foreground/60 text-lg md:text-xl">
            Join founders who are building the future with Axibator. Your journey from idea to impact starts here.
          </p>
          <div className="relative mt-12 flex flex-wrap justify-center gap-4">
            <Link to="/apply">
              <Button size="lg" className="group h-14 rounded-full bg-primary px-10 text-base text-primary-foreground font-bold hover:bg-primary/90 shadow-xl shadow-primary/25 transition-all duration-300">
                Apply to Cohort
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="mailto:connect@axibator.com">
              <Button size="lg" variant="outline" className="h-14 rounded-full border-secondary-foreground/20 px-10 text-base text-secondary-foreground hover:bg-secondary-foreground/10 transition-all duration-300">
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
