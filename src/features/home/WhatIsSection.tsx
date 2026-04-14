import { motion } from "framer-motion";

const WhatIsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden section-light-alt">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-[20%] right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.05] blur-[120px]" />

      <div className="container">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">The Compass</span>
            <h2 className="section-title">
              <span className="text-primary font-extrabold">Axis</span>{" "}
              <span className="text-muted-foreground font-normal text-2xl md:text-3xl">(Direction)</span>{" "}
              <span className="text-accent font-extrabold">+</span>{" "}
              <span className="text-foreground">Incubator</span>{" "}
              <span className="text-muted-foreground font-normal text-2xl md:text-3xl">(Nurture)</span>
            </h2>
            <p className="section-desc">
              Axibator provides the structure, mentorship, and ecosystem founders need 
              to navigate from idea to market. We don't teach entrepreneurship — we build alongside you.
            </p>

            <div className="mt-14 space-y-6">
              {[
                { bold: "No hierarchy.", rest: "Just squads." },
                { bold: "No waiting.", rest: "Just building." },
                { bold: "No pitch decks needed.", rest: "Just progress." },
                { bold: "No startup surname.", rest: "Just hustle." },
              ].map((item, i) => (
                <motion.div
                  key={item.bold}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.2 * i + 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-8 py-2 before:absolute before:left-0 before:top-0 before:h-full before:w-2 before:rounded-full before:bg-gradient-to-b before:from-accent before:to-primary/40"
                >
                  <p className="text-xl md:text-2xl">
                    <span className="font-bold text-foreground">{item.bold}</span>{" "}
                    <span className="text-muted-foreground">{item.rest}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/10 via-transparent to-primary/10" />
              <div className="absolute inset-[2px] rounded-full border-2 border-primary/20" />
              <div className="absolute inset-[15%] rounded-full border-2 border-accent/15" />
              <div className="absolute inset-[30%] rounded-full border border-primary/20" />

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="h-28 w-28 rounded-full border-2 border-accent/25 flex items-center justify-center"
                >
                  <div className="h-20 w-20 rounded-full bg-secondary/80 flex items-center justify-center shadow-xl shadow-accent/15 border border-accent/20">
                    <img src="/axibator-black-logo.png" alt="Axibator" className="h-14 w-14 object-contain" />
                  </div>
                </motion.div>
              </div>

              {[
                { label: "Direction", angle: 30, radius: 42 },
                { label: "Nurture", angle: 150, radius: 42 },
                { label: "Execute", angle: 270, radius: 42 },
              ].map((item, i) => (
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
                  transition={{ delay: 0.6 + i * 0.15, type: "spring", stiffness: 200 }}
                >
                  <div className="rounded-full bg-card border border-primary/25 px-5 py-2.5 text-xs font-bold text-primary tracking-wide shadow-lg shadow-primary/10">
                    {item.label}
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-8"
              >
                {[
                  { n: "50+", l: "Founders" },
                  { n: "6", l: "Programs" },
                  { n: "4", l: "Cities" },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <p className="text-2xl font-extrabold text-primary">{s.n}</p>
                    <p className="text-[10px] text-muted-foreground font-semibold tracking-wider uppercase">{s.l}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default WhatIsSection;
