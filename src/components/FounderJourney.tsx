import { motion } from "framer-motion";

const stages = [
  { number: "01", stage: "Discover", program: "Ignite", desc: "Validate your idea in 8 weeks. Campus pre-incubation for first-time founders." },
  { number: "02", stage: "Build", program: "LaunchPad", desc: "12-week action-first build journey. Student startup incubator." },
  { number: "03", stage: "Launch", program: "BuildLab", desc: "Core startup incubation. Find product-market fit with customer discovery." },
  { number: "04", stage: "Scale", program: "GrowthTrack", desc: "Revenue growth and funding readiness. Startup acceleration." },
  { number: "05", stage: "Go Global", program: "Global Catalyst", desc: "International expansion. Take your startup to global markets." },
];

const FounderJourney = () => {
  return (
    <section className="section-padding relative overflow-hidden hero-dark">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4 block"
          >
            The Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl font-bold md:text-5xl lg:text-6xl leading-[1.1] text-white"
          >
            Five Stages. One System.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-2xl text-lg text-white/40 md:text-xl leading-relaxed mx-auto"
          >
            Every founder moves through a structured progression — from first idea to global scale.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-0">
          {stages.map((s, i) => (
            <motion.div
              key={s.stage}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group relative grid grid-cols-[60px_1fr] md:grid-cols-[80px_200px_1fr] gap-6 items-start py-10 border-b border-white/8 last:border-b-0 transition-all duration-300 hover:bg-white/[0.02] px-4 -mx-4 rounded-xl"
            >
              <span className="text-3xl md:text-4xl font-extrabold text-accent/30 group-hover:text-accent/60 transition-colors duration-300 tabular-nums">
                {s.number}
              </span>
              <div className="hidden md:block">
                <p className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">{s.stage}</p>
                <p className="text-sm font-semibold text-accent/60 mt-1">{s.program}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white md:hidden group-hover:text-accent transition-colors duration-300">{s.stage}</p>
                <p className="text-sm font-semibold text-accent/60 mt-1 md:hidden">{s.program}</p>
                <p className="text-base text-white/40 leading-relaxed mt-2 md:mt-1">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderJourney;
