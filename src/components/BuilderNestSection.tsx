import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Home, Users, Wrench, Coffee } from "lucide-react";

const features = [
  { icon: Home, title: "Founder-First Spaces", desc: "Physical co-living and co-working in Tier 2/3 cities." },
  { icon: Users, title: "Builder Community", desc: "Ship MVPs with fellow founders." },
  { icon: Wrench, title: "Build Jams", desc: "Weekend sprints that turn ideas into products." },
  { icon: Coffee, title: "Daily Rituals", desc: "Structured routines that keep founders accountable." },
];

const BuilderNestSection = () => {
  return (
    <section className="section-padding relative overflow-hidden section-light">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label">
            Builder Nest
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7 }} className="section-title">
            Where Builders Live & Ship
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="section-desc mx-auto text-center">
            Not a WeWork. Not an incubator office. A home for founders to build bold things — together.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-md hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 mb-4 transition-colors group-hover:bg-accent/20">
                <f.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-sm font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link to="/builder-nest">
            <Button className="rounded-full bg-accent text-accent-foreground font-bold px-8 shadow-lg shadow-accent/15 hover:bg-accent/90 transition-all duration-300 group">
              Explore the Nest <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/apply">
            <Button variant="outline" className="rounded-full px-8 font-medium border hover:bg-muted transition-all duration-300">
              Apply to Host
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BuilderNestSection;
