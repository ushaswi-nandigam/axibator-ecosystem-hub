import { motion } from "framer-motion";
import { useState } from "react";

const stages = [
  { stage: "Discover", program: "Ignite", color: "text-primary" },
  { stage: "Build", program: "LaunchPad", color: "text-accent" },
  { stage: "Launch", program: "BuildLab", color: "text-primary" },
  { stage: "Scale", program: "GrowthTrack", color: "text-accent" },
  { stage: "Global", program: "Global Catalyst", color: "text-primary" },
];

const FounderJourney = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold md:text-4xl"
        >
          Founder Journey
        </motion.h2>
        <p className="mt-3 text-muted-foreground">Your path from idea to global impact.</p>

        <div className="horizontal-scroll mt-12">
          {stages.map((s, i) => (
            <motion.div
              key={s.stage}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="panel group relative flex w-56 flex-col rounded-lg p-6 md:w-64"
            >
              <span className="font-display text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Stage {i + 1}
              </span>
              <span className={`mt-2 font-display text-2xl font-bold ${s.color}`}>
                {s.stage}
              </span>
              <div className={`mt-4 overflow-hidden transition-all duration-300 ${hoveredIdx === i ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}`}>
                <span className="text-sm text-muted-foreground">Program:</span>
                <span className="ml-2 font-display text-sm font-semibold text-foreground">{s.program}</span>
              </div>
              {i < stages.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden h-px w-8 bg-border md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderJourney;
