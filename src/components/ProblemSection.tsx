import { motion } from "framer-motion";
import { HelpCircle, Map } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="section-padding story-section-alt relative overflow-hidden">
      {/* Subtle scattered direction markers */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L35 30 L30 50 L25 30Z' fill='%23FF6700'/%3E%3C/svg%3E")`,
        backgroundSize: '120px 120px'
      }} />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-12 flex h-24 w-24 items-center justify-center rounded-full border border-primary/10 bg-primary/5"
          >
            <Map className="h-10 w-10 text-primary/60" />
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label text-dark-section-foreground/40"
          >
            The Problem
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-title text-dark-section-foreground"
          >
            Founders Without<br />
            <span className="text-primary/70">Direction</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-dark-section-foreground/50 md:text-2xl"
          >
            Many founders have ideas but lack structure, mentorship, and the right path to build. 
            They navigate uncertainty alone — without a compass, without a crew.
          </motion.p>

          {/* Visual scattered elements representing confusion */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className="relative mt-20 flex justify-center gap-8"
          >
            {["No mentors", "No structure", "No funding path", "No community"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20, rotate: (i - 1.5) * 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: (i - 1.5) * 3 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="rounded-xl border border-dark-section-foreground/10 bg-dark-section-foreground/5 px-5 py-3 text-sm text-dark-section-foreground/40"
              >
                <HelpCircle className="mr-2 inline h-3.5 w-3.5 text-primary/40" />
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
