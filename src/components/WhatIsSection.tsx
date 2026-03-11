import { motion } from "framer-motion";
import { Zap, Users, Target, Flame } from "lucide-react";

const principles = [
  { icon: Users, title: "No hierarchy.", desc: "Just squads." },
  { icon: Zap, title: "No waiting.", desc: "Just building." },
  { icon: Target, title: "No pitch decks needed.", desc: "Just progress." },
  { icon: Flame, title: "No startup surname.", desc: "Just hustle." },
];

const WhatIsSection = () => {
  return (
    <section className="section-padding bg-ecosystem-bg">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">What is Axibator?</p>
            <h2 className="section-title">
              Axis <span className="text-muted-foreground font-normal">(Direction)</span>{" "}
              <span className="text-primary">+</span>{" "}
              Incubator <span className="text-muted-foreground font-normal">(Nurture)</span>
            </h2>
            <p className="section-desc">
              An execution-first launchpad to help India's next generation of founders
              launch and grow from day one. We don't teach entrepreneurship — we build alongside you.
            </p>

            {/* Principles as premium highlight blocks */}
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {principles.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i + 0.2 }}
                  className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-sm"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm">
                    <span className="font-bold text-foreground">{item.title}</span>{" "}
                    <span className="text-muted-foreground">{item.desc}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Abstract ecosystem graphic */}
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary to-accent p-1">
                <div className="h-full w-full rounded-[1.25rem] bg-card p-8 flex flex-col items-center justify-center text-center gap-6">
                  {/* Central node */}
                  <div className="relative">
                    <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                        <Target className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    {/* Orbit dots */}
                    {[0, 60, 120, 180, 240, 300].map((deg) => (
                      <motion.div
                        key={deg}
                        className="absolute h-2.5 w-2.5 rounded-full bg-accent"
                        style={{
                          top: `${50 - 45 * Math.cos((deg * Math.PI) / 180)}%`,
                          left: `${50 + 45 * Math.sin((deg * Math.PI) / 180)}%`,
                          transform: 'translate(-50%, -50%)',
                        }}
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, delay: deg / 360, repeat: Infinity }}
                      />
                    ))}
                  </div>

                  <div>
                    <p className="text-lg font-bold text-foreground">Direction + Nurture</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Building India's grassroots startup ecosystem
                    </p>
                  </div>

                  {/* Stats row */}
                  <div className="flex gap-6 text-center">
                    {[
                      { n: "50+", l: "Founders" },
                      { n: "6", l: "Programs" },
                      { n: "4", l: "Cities" },
                    ].map((s) => (
                      <div key={s.l}>
                        <p className="text-xl font-bold text-primary">{s.n}</p>
                        <p className="text-xs text-muted-foreground">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
