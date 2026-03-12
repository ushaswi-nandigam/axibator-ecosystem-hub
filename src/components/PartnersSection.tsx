import { motion, useInView } from "framer-motion";
import { Anchor, Globe, Building, GraduationCap, Handshake, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const categories = [
  { name: "Corporate", icon: Building },
  { name: "Universities", icon: GraduationCap },
  { name: "Incubators", icon: Anchor },
  { name: "Startup Programs", icon: Globe },
  { name: "Government", icon: Landmark },
];

const PartnersSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden" style={{
      background: 'linear-gradient(160deg, hsl(0 0% 99%) 0%, hsl(220 20% 95%) 50%, hsl(210 25% 96%) 100%)'
    }}>
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      <div className="absolute top-[40%] right-0 w-[350px] h-[350px] rounded-full bg-secondary/[0.05] blur-[80px]" />

      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Text + category cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-label">Allied Ports</span>
              <h2 className="section-title">Ecosystem Partners</h2>
              <p className="section-desc">Destinations and collaboration points across the journey.</p>
            </motion.div>

            <div className="mt-10 space-y-3">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-4 rounded-xl border-2 border-border bg-card p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <cat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-bold text-foreground">{cat.name}</span>
                  <Handshake className="h-4 w-4 text-primary/30 ml-auto" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Animated network visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm mx-auto aspect-square">
              {/* Rotating outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/15"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              {/* Counter-rotating middle ring */}
              <motion.div
                className="absolute inset-[15%] rounded-full border border-dashed border-accent/12"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              />
              {/* Pulsing inner ring */}
              <motion.div
                className="absolute inset-[30%] rounded-full border border-primary/10"
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Pulse waves from center */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
                <motion.circle
                  cx="150" cy="150" r="30"
                  fill="none" stroke="hsl(var(--primary))" strokeWidth="1"
                  animate={isInView ? { opacity: [0, 0.4, 0], r: [30, 70, 110] } : {}}
                  transition={{ delay: 1, duration: 3, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.circle
                  cx="150" cy="150" r="30"
                  fill="none" stroke="hsl(var(--accent))" strokeWidth="0.5"
                  animate={isInView ? { opacity: [0, 0.25, 0], r: [30, 80, 130] } : {}}
                  transition={{ delay: 2, duration: 3, repeat: Infinity, ease: "easeOut" }}
                />
                {/* Animated connection lines */}
                {categories.map((_, i) => {
                  const angle = ((i * 360) / categories.length - 90) * Math.PI / 180;
                  const r = 126;
                  return (
                    <motion.line
                      key={i}
                      x1="150" y1="150"
                      x2={150 + r * Math.cos(angle)}
                      y2={150 + r * Math.sin(angle)}
                      stroke="hsl(var(--primary))"
                      strokeWidth="1.5"
                      strokeDasharray="4 6"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { pathLength: 1, opacity: 0.35 } : {}}
                      transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }}
                    />
                  );
                })}
              </svg>

              {/* Partner nodes with bounce */}
              {categories.map((cat, i) => {
                const angle = (i * 360) / categories.length - 90;
                const r = 42;
                const CatIcon = cat.icon;
                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      top: `${50 - r * Math.cos((angle * Math.PI) / 180)}%`,
                      left: `${50 + r * Math.sin((angle * Math.PI) / 180)}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.12, type: "spring", stiffness: 200 }}
                  >
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                      className="h-14 w-14 rounded-full bg-card border-2 border-border flex items-center justify-center shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/15"
                    >
                      <CatIcon className="h-6 w-6 text-primary/70" />
                    </motion.div>
                  </motion.div>
                );
              })}

              {/* Center hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="absolute h-20 w-20 rounded-full bg-primary/8"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="relative h-16 w-16 rounded-full bg-primary/15 border-2 border-primary/30 flex items-center justify-center shadow-lg shadow-primary/15"
                >
                  <Globe className="h-7 w-7 text-primary" />
                </motion.div>
              </div>

              {/* Orbiting particles */}
              <motion.div
                className="absolute inset-[5%]"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute top-0 left-1/2 h-2 w-2 rounded-full bg-primary/50 shadow shadow-primary/30" />
              </motion.div>
              <motion.div
                className="absolute inset-[12%]"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute bottom-0 right-1/3 h-1.5 w-1.5 rounded-full bg-accent/60" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a href="mailto:connect@axibator.com">
            <Button variant="outline" className="rounded-full px-8 font-semibold border-2 transition-all duration-300 hover:border-primary/30">
              Become a Partner
            </Button>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default PartnersSection;
