import { motion } from "framer-motion";

const stages = [
  { stage: "Discover", program: "Ignite" },
  { stage: "Build", program: "LaunchPad" },
  { stage: "Launch", program: "BuildLab" },
  { stage: "Scale", program: "GrowthTrack" },
  { stage: "Global", program: "Global Catalyst" },
];

const FounderJourney = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold md:text-4xl"
          >
            Founder Journey
          </motion.h2>
          <p className="mt-2 text-muted-foreground">Your path from idea to global impact.</p>
        </div>

        {/* Horizontal roadmap */}
        <div className="relative flex flex-col gap-0 md:flex-row md:items-start md:justify-between">
          {/* Connecting line (desktop) */}
          <div className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-border md:block" />
          {/* Connecting line (mobile) */}
          <div className="absolute left-6 top-0 h-full w-px bg-border md:hidden" />

          {stages.map((s, i) => (
            <motion.div
              key={s.stage}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative z-10 flex items-start gap-4 py-3 md:flex-col md:items-center md:py-0 md:text-center"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-bold text-primary">
                {i + 1}
              </div>
              <div className="md:mt-4">
                <p className="text-base font-bold text-foreground">{s.stage}</p>
                <p className="mt-0.5 text-sm text-primary">{s.program}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderJourney;
