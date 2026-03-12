import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Handshake, Calendar, BookOpen, Rocket } from "lucide-react";

const nodes = [
  { label: "Startups", icon: Rocket, angle: 0, color: "text-primary" },
  { label: "Mentors", icon: Users, angle: 72, color: "text-accent" },
  { label: "Partners", icon: Handshake, angle: 144, color: "text-primary" },
  { label: "Programs", icon: BookOpen, angle: 216, color: "text-accent" },
  { label: "Events", icon: Calendar, angle: 288, color: "text-primary" },
];

const EcosystemNetwork = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding section-cool relative overflow-hidden" ref={ref}>
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="section-label">The Ecosystem</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Connected Navigation Points
          </motion.h2>
          <p className="section-desc mx-auto text-center">
            A network of founders, mentors, partners, and programs — all connected through Axibator.
          </p>
        </div>

        <div className="relative mx-auto max-w-lg aspect-square hidden md:flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            {nodes.map((node, i) => {
              const radius = 160;
              const cx = 200 + radius * Math.sin((node.angle * Math.PI) / 180);
              const cy = 200 - radius * Math.cos((node.angle * Math.PI) / 180);
              return (
                <motion.line
                  key={node.label}
                  x1="200" y1="200"
                  x2={cx} y2={cy}
                  stroke="hsl(var(--primary))"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.2 } : {}}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.8 }}
                />
              );
            })}
            <motion.circle
              cx="200" cy="200" r="160"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              strokeDasharray="6 6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.15 } : {}}
              transition={{ delay: 0.8, duration: 1.5 }}
            />
          </svg>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="relative z-10 h-20 w-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center"
          >
            <span className="text-xs font-bold text-primary tracking-wider">AXI</span>
          </motion.div>

          {nodes.map((node, i) => {
            const radius = 40;
            const top = `${50 - radius * Math.cos((node.angle * Math.PI) / 180)}%`;
            const left = `${50 + radius * Math.sin((node.angle * Math.PI) / 180)}%`;
            return (
              <motion.div
                key={node.label}
                className="absolute flex flex-col items-center gap-2"
                style={{ top, left, transform: 'translate(-50%, -50%)' }}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.12, type: "spring" }}
              >
                <div className="h-14 w-14 rounded-full bg-card border border-border/60 flex items-center justify-center transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 shadow-sm">
                  <node.icon className={`h-5 w-5 ${node.color}/70`} />
                </div>
                <span className="text-[10px] font-semibold text-muted-foreground tracking-wider uppercase">{node.label}</span>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-4 md:hidden">
          {nodes.map((node, i) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 shadow-sm"
            >
              <node.icon className={`h-5 w-5 ${node.color}/70`} />
              <span className="text-sm font-medium text-foreground">{node.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemNetwork;
