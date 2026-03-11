import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-secondary px-8 py-20 text-center text-secondary-foreground md:px-16 md:py-24"
        >
          {/* Background accents */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 h-48 w-48 rounded-full bg-primary blur-[100px]" />
            <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-accent blur-[100px]" />
          </div>

          <h2 className="relative text-3xl font-bold md:text-4xl lg:text-5xl">
            Ready to Build Without Waiting?
          </h2>
          <p className="relative mx-auto mt-5 max-w-lg text-secondary-foreground/70 text-lg">
            Join grassroots founders turning ideas into reality. Your journey from idea to impact starts here.
          </p>
          <div className="relative mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/apply">
              <Button size="lg" className="group rounded-full bg-primary px-8 text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300">
                Apply to Cohort
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="mailto:connect@axibator.com">
              <Button size="lg" variant="outline" className="rounded-full border-secondary-foreground/20 px-8 text-secondary-foreground hover:bg-secondary-foreground/10 transition-all duration-300">
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
