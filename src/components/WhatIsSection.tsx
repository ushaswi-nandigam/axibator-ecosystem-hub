import { motion } from "framer-motion";

const WhatIsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden section-light-alt">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">What is Axibator</span>
            <h2 className="section-title">
              <span className="text-primary">Axis</span> + Incubator
            </h2>
            <p className="section-desc">
              Axibator provides the structure, mentorship, and ecosystem founders need to navigate from idea to market. We don't teach entrepreneurship — we build alongside you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5"
          >
            {[
              { bold: "No hierarchy.", rest: "Just squads." },
              { bold: "No waiting.", rest: "Just building." },
              { bold: "No pitch decks needed.", rest: "Just progress." },
              { bold: "No startup surname.", rest: "Just hustle." },
            ].map((item, i) => (
              <motion.div
                key={item.bold}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.2, duration: 0.5 }}
                className="border-l-4 border-accent pl-6 py-3"
              >
                <p className="text-xl md:text-2xl">
                  <span className="font-bold text-foreground">{item.bold}</span>{" "}
                  <span className="text-muted-foreground">{item.rest}</span>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
