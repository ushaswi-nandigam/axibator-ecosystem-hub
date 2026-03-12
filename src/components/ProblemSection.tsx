import { motion, useInView } from "framer-motion";
import { Map, HelpCircle, Compass, AlertTriangle, Users } from "lucide-react";
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
    <section ref={ref} className="section-padding relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, hsl(210 35% 95%) 0%, hsl(220 30% 91%) 50%, hsl(213 40% 93%) 100%)'
    }}>
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L35 30 L30 50 L25 30Z' fill='%23FF6700'/%3E%3C/svg%3E")`,
        backgroundSize: '120px 120px'
      }} />

      <div className="absolute top-20 left-[10%] w-[400px] h-[400px] rounded-full bg-accent/[0.08] blur-[100px]" />
      <div className="absolute bottom-10 right-[10%] w-[350px] h-[350px] rounded-full bg-primary/[0.06] blur-[80px]" />

      <div className="container relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Lost compass visual */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm mx-auto aspect-square">
              {/* Broken compass rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-muted-foreground/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-[12%] rounded-full border border-dashed border-muted-foreground/15"
                animate={{ rotate: -360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-[24%] rounded-full border border-muted-foreground/10" />

              {/* Dim spinning needle */}
              <motion.div
                className="absolute inset-[20%] flex items-center justify-center"
                animate={{ rotate: [0, 120, -90, 200, 45, -60, 150] }}
                transition={{ duration: 15, ease: "easeInOut", repeat: Infinity }}
              >
                <div className="relative h-full w-px">
                  <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-r-[5px] border-b-[30px] border-l-transparent border-r-transparent border-b-muted-foreground/25" />
                  <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[24px] border-l-transparent border-r-transparent border-t-muted-foreground/15" />
                </div>
              </motion.div>

              {/* Scattered question marks */}
              {[
                { x: 15, y: 20, delay: 0.5 },
                { x: 75, y: 15, delay: 0.8 },
                { x: 80, y: 75, delay: 1.1 },
                { x: 20, y: 80, delay: 1.4 },
                { x: 50, y: 5, delay: 0.3 },
                { x: 90, y: 45, delay: 0.9 },
              ].map((q, i) => (
                <motion.div
                  key={i}
                  className="absolute text-muted-foreground/20 font-bold text-2xl"
                  style={{ left: `${q.x}%`, top: `${q.y}%` }}
                  animate={{ opacity: [0.15, 0.4, 0.15], y: [0, -5, 0] }}
                  transition={{ duration: 3, delay: q.delay, repeat: Infinity }}
                >
                  ?
                </motion.div>
              ))}

              {/* Center lost icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-muted/60 border-2 border-muted-foreground/15 flex items-center justify-center">
                  <Map className="h-7 w-7 text-muted-foreground/40" />
                </div>
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
                  className="rounded-xl border-2 border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
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
