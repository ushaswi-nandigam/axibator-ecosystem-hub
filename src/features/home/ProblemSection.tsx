import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Target, Users, Zap } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "The 'Idea' Trap",
    desc: "Most founders spend months perfecting pitch decks instead of building products.",
  },
  {
    icon: Target,
    title: "Lack of Direction",
    desc: "Without a clear roadmap, student founders often get lost in the noise of 'startup culture'.",
  },
  {
    icon: Users,
    title: "Isolated Building",
    desc: "Building alone is hard. Finding the right co-founders and mentors is even harder.",
  },
  {
    icon: Zap,
    title: "Execution Gap",
    desc: "The distance between a great idea and a working MVP is where most startups die.",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            className="section-label"
          >
            The Reality
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ delay: 0.1 }}
            className="section-title"
          >
            Why Most Startups Fail
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ delay: 0.2 }}
            className="section-desc mx-auto"
          >
            The journey from a college dorm room to a market-ready product is filled with invisible barriers.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <p.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
