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
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative overflow-hidden" ref={ref} style={{
      background: 'linear-gradient(180deg, hsl(210 35% 95%) 0%, hsl(213 40% 91%) 50%, hsl(220 30% 94%) 100%)'
    }}>
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute top-[30%] left-0 w-[400px] h-[400px] rounded-full bg-accent/[0.08] blur-[100px]" />

      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            The Ecosystem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-title"
          >
            Connected Navigation Points
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-desc mx-auto text-center"
          >
            A network of founders, mentors, partners, and programs — all connected through Axibator.
          </motion.p>
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
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.5 } : {}}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.8 }}
                />
              );
            })}
            <motion.circle
              cx="200" cy="200" r="160"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray="6 6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 0.35 } : {}}
              transition={{ delay: 0.8, duration: 1.5 }}
            />
          </svg>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="relative z-10 h-24 w-24 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center shadow-xl shadow-primary/20"
          >
            <span className="text-sm font-extrabold text-primary tracking-wider">AXI</span>
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
                transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 200 }}
              >
                <div className="h-16 w-16 rounded-full bg-card border-2 border-border flex items-center justify-center transition-all duration-300 hover:border-primary/50 hover:bg-primary/15 hover:shadow-xl hover:shadow-primary/15 shadow-lg">
                  <node.icon className={`h-6 w-6 ${node.color}`} />
                </div>
                <span className="text-[11px] font-bold text-foreground tracking-wider uppercase">{node.label}</span>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-4 md:hidden">
          {nodes.map((node, i) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex items-center gap-3 rounded-xl border-2 border-border bg-card p-4 shadow-md"
            >
              <node.icon className={`h-5 w-5 ${node.color}`} />
              <span className="text-sm font-bold text-foreground">{node.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default EcosystemNetwork;
