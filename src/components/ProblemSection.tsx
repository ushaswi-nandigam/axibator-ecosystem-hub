import { motion } from "framer-motion";
import { HelpCircle, Map } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="section-padding relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, hsl(210 30% 97%) 0%, hsl(220 25% 94%) 50%, hsl(213 35% 95%) 100%)'
    }}>
      {/* Decorative accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L35 30 L30 50 L25 30Z' fill='%23FF6700'/%3E%3C/svg%3E")`,
        backgroundSize: '120px 120px'
      }} />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mb-12 flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/20 bg-primary/10 shadow-lg shadow-primary/10"
          >
            <Map className="h-10 w-10 text-primary" />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-label"
          >
            The Problem
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="section-title"
          >
            Founders Without<br />
            <span className="text-primary">Direction</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl"
          >
            Many founders have ideas but lack structure, mentorship, and the right path to build. 
            They navigate uncertainty alone — without a compass, without a crew.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative mt-20 flex flex-wrap justify-center gap-4 md:gap-6"
          >
            {["No mentors", "No structure", "No funding path", "No community"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30, rotate: (i - 1.5) * 6 }}
                whileInView={{ opacity: 1, y: 0, rotate: (i - 1.5) * 3 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.6 + i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-xl border border-primary/15 bg-card px-6 py-3.5 text-sm font-medium text-foreground shadow-md shadow-primary/5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
              >
                <HelpCircle className="mr-2 inline h-4 w-4 text-primary/60" />
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default ProblemSection;
