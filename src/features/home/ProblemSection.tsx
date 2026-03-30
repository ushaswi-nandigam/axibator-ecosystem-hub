import { motion, useInView } from "framer-motion";
import { Compass, HelpCircle, AlertTriangle, Users, X } from "lucide-react";
import { useRef } from "react";

const challenges = [
  { icon: Compass, label: "No direction", desc: "No clear path from idea to product" },
  { icon: Users, label: "No mentors", desc: "Building alone without guidance" },
  { icon: AlertTriangle, label: "No structure", desc: "No milestones or accountability" },
  { icon: HelpCircle, label: "No funding path", desc: "Unable to access startup credits" },
];

const ProblemSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden section-light">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--muted-foreground)) 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }} />

      <div className="absolute top-20 left-[10%] w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[100px]" />
      <div className="absolute bottom-10 right-[10%] w-[350px] h-[350px] rounded-full bg-primary/[0.03] blur-[80px]" />

      <div className="container relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Broken compass visual */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[340px] mx-auto aspect-square">
              <div className="absolute inset-[-15%] rounded-full bg-primary/[0.06] blur-[60px]" />
              
              <motion.div
                className="absolute inset-0 rounded-full border-[2.5px] border-dashed border-primary/35"
                animate={{ rotate: -360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-[15%] rounded-full border-[2px] border-dashed border-destructive/25" />
              <div className="absolute inset-[30%] rounded-full border-[1.5px] border-primary/20" />

              <motion.div
                className="absolute inset-[25%] flex items-center justify-center"
                animate={{ rotate: [0, 120, -60, 200, -90, 150, 30] }}
                transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
              >
                <div className="relative h-full w-px">
                  <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-b-[28px] border-l-transparent border-r-transparent border-b-accent/60" />
                  <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[20px] border-l-transparent border-r-transparent border-t-destructive/40" />
                </div>
              </motion.div>

              {[
                { x: 10, y: 15, size: 16 },
                { x: 78, y: 12, size: 14 },
                { x: 85, y: 70, size: 18 },
                { x: 12, y: 75, size: 15 },
              ].map((mark, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{ left: `${mark.x}%`, top: `${mark.y}%` }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 0.35, scale: 1 } : {}}
                  transition={{ delay: 0.8 + i * 0.15, type: "spring" }}
                >
                  <X className="text-destructive/70" style={{ width: mark.size, height: mark.size }} />
                </motion.div>
              ))}

              {[
                { x: 25, y: 8, delay: 0.5 },
                { x: 70, y: 5, delay: 0.7 },
                { x: 88, y: 40, delay: 0.9 },
                { x: 8, y: 50, delay: 1.1 },
                { x: 40, y: 88, delay: 1.3 },
                { x: 65, y: 85, delay: 0.6 },
              ].map((q, i) => (
                <motion.span
                  key={i}
                  className="absolute text-primary/25 font-extrabold text-xl select-none"
                  style={{ left: `${q.x}%`, top: `${q.y}%` }}
                  animate={{ opacity: [0.15, 0.4, 0.15], y: [0, -4, 0] }}
                  transition={{ duration: 3.5, delay: q.delay, repeat: Infinity }}
                >
                  ?
                </motion.span>
              ))}

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="h-16 w-16 rounded-full bg-primary/15 border-2 border-primary/30 flex items-center justify-center shadow-lg shadow-primary/15"
                  animate={{ opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Compass className="h-7 w-7 text-primary/70" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text + challenge cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">The Problem</span>
            <h2 className="section-title">
              Founders Without<br />
              <span className="text-primary font-extrabold">Direction</span>
            </h2>
            <p className="section-desc">
              Many founders have ideas but lack structure, mentorship, and the right path to build. 
              They navigate uncertainty alone — without a compass, without a crew.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-4">
              {challenges.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                  className="p-5 transition-all duration-300"
                >
                  <c.icon className="h-5 w-5 text-primary/60 mb-3" />
                  <p className="text-sm font-bold text-foreground">{c.label}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default ProblemSection;
