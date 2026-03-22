import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Navigation, Sailboat } from "lucide-react";
import { useRef } from "react";

const StartupsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden section-light-alt">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-[20%] left-0 w-[350px] h-[350px] rounded-full bg-accent/[0.04] blur-[80px]" />

      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-sm mx-auto aspect-square">
              <motion.div className="absolute bottom-[20%] left-[10%] right-[10%] h-2 rounded-full bg-secondary/15"
                initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}} transition={{ delay: 0.3, duration: 0.8 }} />
              
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
                {["M 80 230 Q 60 180, 50 120 Q 45 80, 70 40", "M 150 230 Q 150 170, 150 110 Q 150 70, 150 30", "M 220 230 Q 240 180, 250 120 Q 255 80, 230 40"].map((path, i) => (
                  <motion.path key={i} d={path} fill="none" stroke="hsl(var(--accent))" strokeWidth="1.5" strokeDasharray="4 6"
                    initial={{ pathLength: 0, opacity: 0 }} animate={isInView ? { pathLength: 1, opacity: 0.3 } : {}} transition={{ delay: 0.5 + i * 0.2, duration: 1.2 }} />
                ))}
              </svg>

              {[{ x: 22, y: 12, delay: 1.2 }, { x: 48, y: 8, delay: 1.5 }, { x: 74, y: 12, delay: 1.8 }].map((ship, i) => (
                <motion.div key={i} className="absolute flex flex-col items-center" style={{ left: `${ship.x}%`, top: `${ship.y}%` }}
                  initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: ship.delay, duration: 0.6 }}>
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2 + i * 0.5, repeat: Infinity }}>
                    <Sailboat className="h-8 w-8 text-accent/60" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
              <span className="section-label">Startups Set Sail</span>
              <h2 className="section-title">Featured Founders</h2>
              <p className="section-desc">Startups launched from the Axibator ecosystem.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 p-12 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <Navigation className="h-6 w-6 text-accent" />
              </div>
              <p className="text-lg font-semibold text-muted-foreground">
                Founder profiles will appear here as startups join the ecosystem.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/apply">
                  <Button className="rounded-full bg-accent text-accent-foreground gap-2 px-8 font-semibold shadow-lg shadow-accent/20">
                    Become a Featured Founder <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/startups">
                  <Button variant="outline" className="rounded-full gap-2 font-semibold border">
                    View All Startups <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default StartupsSection;
