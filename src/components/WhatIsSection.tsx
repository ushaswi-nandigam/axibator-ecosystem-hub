import { motion } from "framer-motion";

const WhatIsSection = () => {
  return (
    <section className="relative py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl font-bold md:text-5xl">
            <span className="text-primary">Axibator</span> = Axis (Direction) + Incubator (Nurture)
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            An execution-first hybrid incubator and growth accelerator helping founders move from idea to MVP to market.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col gap-4"
        >
          {["No hierarchy. Just squads.", "No waiting. Just building."].map((line) => (
            <div key={line} className="panel inline-flex w-fit rounded-lg px-8 py-4">
              <span className="font-display text-xl font-semibold md:text-2xl">{line}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsSection;
