import { motion } from "framer-motion";
import { Target } from "lucide-react";

const WhatIsSection = () => {
  return (
    <section className="section-padding bg-ecosystem-bg">
      <div className="container">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">What is Axibator?</span>
            <h2 className="section-title">
              <span className="text-primary">Axis</span>{" "}
              <span className="text-muted-foreground font-normal text-3xl md:text-4xl">(Direction)</span>{" "}
              <span className="text-primary">+</span>{" "}
              <span>Incubator</span>{" "}
              <span className="text-muted-foreground font-normal text-3xl md:text-4xl">(Nurture)</span>
            </h2>
            <p className="section-desc">
              An execution-first launchpad helping India's next generation of founders
              launch and grow from day one. We don't teach entrepreneurship — we build alongside you.
            </p>

            {/* Premium emphasis blocks */}
            <div className="mt-12 space-y-4">
              {[
                { bold: "No hierarchy.", rest: "Just squads." },
                { bold: "No waiting.", rest: "Just building." },
                { bold: "No pitch decks needed.", rest: "Just progress." },
                { bold: "No startup surname.", rest: "Just hustle." },
              ].map((item, i) => (
                <motion.div
                  key={item.bold}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 * i + 0.3 }}
                  className="flex items-center gap-4 border-l-2 border-primary/30 pl-6 py-2 hover:border-primary transition-colors duration-300"
                >
                  <p className="text-lg">
                    <span className="font-bold text-foreground">{item.bold}</span>{" "}
                    <span className="text-muted-foreground">{item.rest}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary via-secondary to-accent overflow-hidden p-px">
                <div className="h-full w-full rounded-[1.4rem] bg-card flex flex-col items-center justify-center text-center gap-8 p-10">
                  {/* Central node */}
                  <div className="relative">
                    <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/30">
                        <Target className="h-7 w-7 text-primary-foreground" />
                      </div>
                    </div>
                    {[0, 72, 144, 216, 288].map((deg) => (
                      <motion.div
                        key={deg}
                        className="absolute h-3 w-3 rounded-full bg-accent/60"
                        style={{
                          top: `${50 - 55 * Math.cos((deg * Math.PI) / 180)}%`,
                          left: `${50 + 55 * Math.sin((deg * Math.PI) / 180)}%`,
                          transform: 'translate(-50%, -50%)',
                        }}
                        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 3, delay: deg / 400, repeat: Infinity }}
                      />
                    ))}
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-foreground">Direction + Nurture</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Building India's grassroots<br/>startup ecosystem
                    </p>
                  </div>

                  <div className="flex gap-8 text-center">
                    {[
                      { n: "50+", l: "Founders" },
                      { n: "6", l: "Programs" },
                      { n: "4", l: "Cities" },
                    ].map((s) => (
                      <div key={s.l}>
                        <p className="text-2xl font-bold text-primary">{s.n}</p>
                        <p className="text-xs text-muted-foreground font-medium">{s.l}</p>
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
