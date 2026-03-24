import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Navigation } from "lucide-react";
import { useRef } from "react";
import axibatorIcon from "@/assets/axibator-icon.png";

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
          className="relative overflow-hidden rounded-3xl px-10 py-24 text-center md:px-20 md:py-32 border border-border/60"
          style={{ background: 'linear-gradient(135deg, hsl(220 25% 96%), hsl(225 30% 93%), hsl(220 20% 96%))' }}
        >
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 800 500" preserveAspectRatio="none">
            <motion.path d="M 0 250 Q 200 100, 400 250 Q 600 400, 800 250" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 6"
              initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ delay: 0.5, duration: 2 }} />
            <motion.path d="M 0 300 Q 200 150, 400 300 Q 600 450, 800 300" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 8"
              initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ delay: 0.8, duration: 2.5 }} />
          </svg>

          {[
            { x: '10%', y: '20%', delay: 1 },
            { x: '85%', y: '15%', delay: 1.2 },
            { x: '15%', y: '75%', delay: 1.4 },
            { x: '80%', y: '80%', delay: 1.6 },
          ].map((pos, i) => (
            <motion.div key={i} className="absolute" style={{ left: pos.x, top: pos.y }}
              initial={{ opacity: 0, scale: 0 }} animate={isInView ? { opacity: 0.1, scale: 1 } : {}} transition={{ delay: pos.delay, type: "spring" }}>
              <Navigation className="h-6 w-6 text-foreground/40" />
            </motion.div>
          ))}

          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
            className="relative mx-auto mb-8"
          >
            <motion.div className="absolute -inset-5 rounded-full bg-accent/10" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-muted border border-border shadow-lg mx-auto overflow-hidden">
              <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                <img src={axibatorIcon} alt="Axibator" className="h-14 w-14 object-contain" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4, duration: 0.7 }}
            className="relative text-4xl font-bold md:text-5xl lg:text-6xl leading-[1.1] text-foreground">
            Ready to Set<br/>Your Course?
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.55, duration: 0.6 }}
            className="relative mx-auto mt-6 max-w-lg text-muted-foreground text-lg md:text-xl">
            Join founders who are building the future with Axibator. Your journey from idea to impact starts here.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7, duration: 0.6 }}
            className="relative mt-12 flex flex-wrap justify-center gap-4">
            <Link to="/apply">
              <Button size="lg" className="group h-14 rounded-full bg-accent px-10 text-base text-accent-foreground font-bold hover:bg-accent/90 shadow-xl shadow-accent/20 transition-all duration-300">
                Apply to Cohort <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a href="mailto:connect@axibator.com">
              <Button size="lg" variant="outline" className="h-14 rounded-full border-border px-10 text-base text-foreground hover:bg-muted transition-all duration-300">
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