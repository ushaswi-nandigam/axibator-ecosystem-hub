import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-border bg-accent px-8 py-16 text-center text-accent-foreground shadow-lg md:px-16 md:py-20"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-primary blur-3xl" />
            <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-accent-foreground blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20"
          >
            <Sparkles className="h-7 w-7 text-primary" />
          </motion.div>

          <h2 className="text-3xl font-bold md:text-4xl relative z-10">
            Ready to Build Without Waiting?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-accent-foreground/80 relative z-10">
            Join hundreds of grassroots founders who are turning ideas into reality. Your journey from idea to impact starts here.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 relative z-10">
            <Link to="/apply">
              <Button size="lg" className="group rounded-full bg-primary px-8 text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]">
                Apply to Cohort
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="mailto:connect@axibator.com">
              <Button size="lg" variant="outline" className="rounded-full border-accent-foreground/30 px-8 text-accent-foreground hover:bg-accent-foreground/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
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
