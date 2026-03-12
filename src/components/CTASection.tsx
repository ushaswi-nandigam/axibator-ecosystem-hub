import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Compass, Navigation } from "lucide-react";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-background">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-secondary px-10 py-24 text-center text-secondary-foreground md:px-20 md:py-32"
        >
          {/* Background effects */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-10 left-10 h-64 w-64 rounded-full bg-primary blur-[120px]" />
            <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-accent blur-[100px]" />
          </div>

          {/* Animated compass lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 800 500" preserveAspectRatio="none">
            <motion.path
              d="M 0 250 Q 200 100, 400 250 Q 600 400, 800 250"
              fill="none" stroke="white" strokeWidth="2" strokeDasharray="8 6"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ delay: 0.5, duration: 2 }}
            />
            <motion.path
              d="M 0 300 Q 200 150, 400 300 Q 600 450, 800 300"
              fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="4 8"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ delay: 0.8, duration: 2.5 }}
            />
          </svg>

          {/* Floating directional markers */}
          {[
            { x: '10%', y: '20%', delay: 1 },
            { x: '85%', y: '15%', delay: 1.2 },
            { x: '15%', y: '75%', delay: 1.4 },
            { x: '80%', y: '80%', delay: 1.6 },
          ].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: pos.x, top: pos.y }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 0.15, scale: 1 } : {}}
              transition={{ delay: pos.delay, type: "spring" }}
            >
              <Navigation className="h-6 w-6 text-primary-foreground" />
            </motion.div>
          ))}

          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
            className="relative mx-auto mb-8"
          >
            <motion.div
              className="absolute -inset-4 rounded-full bg-primary/20"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary/30 shadow-xl shadow-primary/25 mx-auto">
              <Compass className="h-9 w-9 text-primary" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative text-4xl font-bold md:text-5xl lg:text-6xl leading-[1.1]"
          >
            Ready to Set<br/>Your Course?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="relative mx-auto mt-6 max-w-lg text-secondary-foreground/70 text-lg md:text-xl"
          >
            Join founders who are building the future with Axibator. Your journey from idea to impact starts here.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="relative mt-12 flex flex-wrap justify-center gap-4"
          >
            <Link to="/apply">
              <Button size="lg" className="group h-14 rounded-full bg-primary px-10 text-base text-primary-foreground font-bold hover:bg-primary/90 shadow-xl shadow-primary/30 transition-all duration-300">
                Apply to Cohort
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="mailto:connect@axibator.com">
              <Button size="lg" variant="outline" className="h-14 rounded-full border-secondary-foreground/25 px-10 text-base text-secondary-foreground hover:bg-secondary-foreground/10 transition-all duration-300">
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
