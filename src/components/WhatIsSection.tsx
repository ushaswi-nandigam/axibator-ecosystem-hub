import { motion } from "framer-motion";
import { Zap, Users } from "lucide-react";

const WhatIsSection = () => {
  return (
    <section className="section-padding bg-ecosystem-bg">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">What is Axibator?</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Axis <span className="text-muted-foreground">(Direction)</span> + Incubator <span className="text-muted-foreground">(Nurture)</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              An execution-first launchpad to help India's next generation of founders launch and grow from day one.
            </p>
          </motion.div>

          {/* Right — Principles as cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {[
              { icon: Users, title: "No hierarchy.", desc: "Just squads." },
              { icon: Zap, title: "No waiting.", desc: "Just building." },
              { icon: Zap, title: "No pitch decks needed.", desc: "Just progress." },
              { icon: Users, title: "No startup surname.", desc: "Just hustle." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i + 0.15 }}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-4 w-4 text-primary" />
                </div>
                <p className="mt-3 text-sm font-bold text-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
