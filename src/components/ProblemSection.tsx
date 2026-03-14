import { motion, useInView } from "framer-motion";
import { AlertTriangle, Users, Target, HelpCircle } from "lucide-react";
import { useRef } from "react";

const challenges = [
  { icon: Target, label: "No direction", desc: "No clear path from idea to product" },
  { icon: Users, label: "No mentors", desc: "Building alone without guidance" },
  { icon: AlertTriangle, label: "No structure", desc: "No milestones or accountability" },
  { icon: HelpCircle, label: "No funding path", desc: "Unable to access startup credits" },
];

const ProblemSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding section-grey">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-label"
          >
            The Problem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="section-title"
          >
            Founders Without <span className="text-primary">Direction</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="section-desc mx-auto text-center"
          >
            Many founders have ideas but lack structure, mentorship, and the right path to build.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {challenges.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              className="rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                <c.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-bold text-foreground">{c.label}</p>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
