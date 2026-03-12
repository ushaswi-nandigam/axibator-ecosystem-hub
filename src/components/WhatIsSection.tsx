import { motion } from "framer-motion";
import { Navigation, Compass } from "lucide-react";

const WhatIsSection = () => {
  return (
    <section className="section-padding dark-section relative overflow-hidden">
      <div className="container">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">The Compass</span>
            <h2 className="section-title text-dark-section-foreground">
              <span className="text-primary">Axis</span>{" "}
              <span className="text-dark-section-foreground/40 font-normal text-2xl md:text-3xl">(Direction)</span>{" "}
              <span className="text-primary">+</span>{" "}
              <span className="text-dark-section-foreground">Incubator</span>{" "}
              <span className="text-dark-section-foreground/40 font-normal text-2xl md:text-3xl">(Nurture)</span>
            </h2>
            <p className="section-desc text-dark-section-foreground/50">
              Axibator provides the structure, mentorship, and ecosystem founders need 
              to navigate from idea to market. We don't teach entrepreneurship — we build alongside you.
            </p>

            {/* Premium emphasis blocks */}
            <div className="mt-14 space-y-6">
              {[
                { bold: "No hierarchy.", rest: "Just squads." },
                { bold: "No waiting.", rest: "Just building." },
                { bold: "No pitch decks needed.", rest: "Just progress." },
                { bold: "No startup surname.", rest: "Just hustle." },
              ].map((item, i) => (
                <motion.div
                  key={item.bold}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * i + 0.3 }}
                  className="relative pl-8 py-1 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-full before:bg-gradient-to-b before:from-primary before:to-primary/20"
                >
                  <p className="text-xl md:text-2xl">
                    <span className="font-bold text-dark-section-foreground">{item.bold}</span>{" "}
                    <span className="text-dark-section-foreground/40">{item.rest}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Compass reveal visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              {/* Glowing compass circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              <div className="absolute inset-[2px] rounded-full border border-dark-section-foreground/5" />
              <div className="absolute inset-[15%] rounded-full border border-primary/10" />
              <div className="absolute inset-[30%] rounded-full border border-accent/10" />

              {/* Center glowing hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="h-28 w-28 rounded-full border border-primary/20 flex items-center justify-center"
                >
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center backdrop-blur-sm">
                    <Compass className="h-9 w-9 text-primary" />
                  </div>
                </motion.div>
              </div>

              {/* Orbiting labels */}
              {[
                { label: "Direction", angle: 30, radius: 42 },
                { label: "Nurture", angle: 150, radius: 42 },
                { label: "Execute", angle: 270, radius: 42 },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  className="absolute"
                  style={{
                    top: `${50 - item.radius * Math.cos((item.angle * Math.PI) / 180)}%`,
                    left: `${50 + item.radius * Math.sin((item.angle * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, type: "spring" }}
                >
                  <div className="rounded-full bg-dark-section border border-primary/20 px-4 py-2 text-xs font-semibold text-primary tracking-wide">
                    {item.label}
                  </div>
                </motion.div>
              ))}

              {/* Stats at bottom of the visual */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-8"
              >
                {[
                  { n: "50+", l: "Founders" },
                  { n: "6", l: "Programs" },
                  { n: "4", l: "Cities" },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <p className="text-2xl font-bold text-primary">{s.n}</p>
                    <p className="text-[10px] text-dark-section-foreground/40 font-medium tracking-wider uppercase">{s.l}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
