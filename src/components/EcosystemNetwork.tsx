import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Handshake, Calendar, BookOpen, Rocket, Navigation } from "lucide-react";
import axibatorCompass from "@/assets/axibator-compass.png";

const nodes = [
  { label: "Startups", icon: Rocket, angle: 0, color: "text-primary", bg: "bg-primary/15" },
  { label: "Mentors", icon: Users, angle: 72, color: "text-accent", bg: "bg-accent/15" },
  { label: "Partners", icon: Handshake, angle: 144, color: "text-primary", bg: "bg-primary/15" },
  { label: "Programs", icon: BookOpen, angle: 216, color: "text-accent", bg: "bg-accent/15" },
  { label: "Events", icon: Calendar, angle: 288, color: "text-primary", bg: "bg-primary/15" },
];

const EcosystemNetwork = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="section-padding relative overflow-hidden"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, hsl(210 35% 95%) 0%, hsl(213 40% 91%) 50%, hsl(220 30% 94%) 100%)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute top-[30%] left-0 w-[400px] h-[400px] rounded-full bg-accent/[0.08] blur-[100px]" />
      <div className="absolute bottom-[20%] right-0 w-[350px] h-[350px] rounded-full bg-primary/[0.06] blur-[80px]" />

      <div className="container relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.2fr]">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">The Ecosystem</span>
            <h2 className="section-title">Connected Navigation Points</h2>
            <p className="section-desc">
              A network of founders, mentors, partners, and programs — all connected through Axibator.
            </p>

            <div className="mt-10 space-y-4">
              {nodes.map((node, i) => (
                <motion.div
                  key={node.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-4 rounded-xl border border-border/60 bg-card p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                >
                  <div className={`h-10 w-10 rounded-lg ${node.bg} flex items-center justify-center`}>
                    <node.icon className={`h-5 w-5 ${node.color}`} />
                  </div>
                  <span className="text-sm font-bold text-foreground">{node.label}</span>
                  <Navigation className="h-3 w-3 text-primary/30 ml-auto" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Network visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto w-full max-w-lg aspect-square hidden md:flex items-center justify-center"
          >
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              {/* Outer ring */}
              <motion.circle
                cx="200"
                cy="200"
                r="170"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeDasharray="4 8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.2 } : {}}
                transition={{ delay: 0.5, duration: 2 }}
              />
              {/* Inner ring */}
              <motion.circle
                cx="200"
                cy="200"
                r="130"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="1"
                strokeDasharray="6 6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.15 } : {}}
                transition={{ delay: 0.8, duration: 1.5 }}
              />
              {/* Connection lines with animated dash */}
              {nodes.map((node, i) => {
                const radius = 160;
                const cx = 200 + radius * Math.sin((node.angle * Math.PI) / 180);
                const cy = 200 - radius * Math.cos((node.angle * Math.PI) / 180);
                return (
                  <g key={node.label}>
                    <motion.line
                      x1="200"
                      y1="200"
                      x2={cx}
                      y2={cy}
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isInView ? { pathLength: 1, opacity: 0.4 } : {}}
                      transition={{ delay: 0.3 + i * 0.15, duration: 0.8 }}
                    />
                  </g>
                );
              })}
              {/* Star cross connections */}
              {nodes.map((node, i) => {
                const nextNode = nodes[(i + 2) % nodes.length];
                const r = 160;
                const x1 = 200 + r * Math.sin((node.angle * Math.PI) / 180);
                const y1 = 200 - r * Math.cos((node.angle * Math.PI) / 180);
                const x2 = 200 + r * Math.sin((nextNode.angle * Math.PI) / 180);
                const y2 = 200 - r * Math.cos((nextNode.angle * Math.PI) / 180);
                return (
                  <motion.line
                    key={`cross-${i}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="hsl(var(--accent))"
                    strokeWidth="1"
                    strokeDasharray="3 6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 0.15 } : {}}
                    transition={{ delay: 1.2 + i * 0.1, duration: 0.8 }}
                  />
                );
              })}
              {/* Animated pulse rings at center */}
              <motion.circle
                cx="200"
                cy="200"
                r="40"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: [0, 0.3, 0], r: [40, 80, 120] } : {}}
                transition={{ delay: 1.5, duration: 3, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.circle
                cx="200"
                cy="200"
                r="40"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="0.5"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: [0, 0.2, 0], r: [40, 90, 140] } : {}}
                transition={{ delay: 2.5, duration: 3, repeat: Infinity, ease: "easeOut" }}
              />
            </svg>

            {/* Center hub */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="relative z-10"
            >
              <motion.div
                className="absolute -inset-4 rounded-full bg-primary/8"
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative h-14 w-16 rounded-xl bg-card border border-primary/30 flex items-center justify-center shadow-lg shadow-primary/10">
                <span className="text-[10px] font-bold text-primary tracking-wide">Axibator</span>
              </div>
            </motion.div>

            {/* Nodes */}
            {nodes.map((node, i) => {
              const radius = 40;
              const top = `${50 - radius * Math.cos((node.angle * Math.PI) / 180)}%`;
              const left = `${50 + radius * Math.sin((node.angle * Math.PI) / 180)}%`;
              return (
                <motion.div
                  key={node.label}
                  className="absolute flex flex-col items-center gap-2"
                  style={{ top, left, transform: "translate(-50%, -50%)" }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 200 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                    className="h-16 w-16 rounded-full bg-card border-2 border-border flex items-center justify-center transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/15 shadow-lg"
                  >
                    <node.icon className={`h-6 w-6 ${node.color}`} />
                  </motion.div>
                  <span className="text-[11px] font-bold text-foreground tracking-wider uppercase">{node.label}</span>
                </motion.div>
              );
            })}

            {/* Orbiting particles */}
            <motion.div
              className="absolute inset-[8%]"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-0 left-1/2 h-2 w-2 rounded-full bg-primary/50 shadow shadow-primary/30" />
            </motion.div>
            <motion.div
              className="absolute inset-[15%]"
              animate={{ rotate: -360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute bottom-0 right-1/4 h-1.5 w-1.5 rounded-full bg-accent/60" />
            </motion.div>
            <motion.div
              className="absolute inset-[3%]"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-1/4 left-0 h-1 w-1 rounded-full bg-primary/30" />
            </motion.div>
          </motion.div>

          {/* Mobile grid */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {nodes.map((node, i) => (
              <motion.div
                key={`mobile-${node.label}`}
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
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default EcosystemNetwork;
