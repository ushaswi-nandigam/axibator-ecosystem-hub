import { motion } from "framer-motion";
import { Users, Handshake, Calendar, BookOpen, Rocket } from "lucide-react";

const nodes = [
  { label: "Startups", icon: Rocket, desc: "50+ teams building across sectors" },
  { label: "Mentors", icon: Users, desc: "300+ industry experts and founders" },
  { label: "Partners", icon: Handshake, desc: "75+ global tool & cloud partners" },
  { label: "Programs", icon: BookOpen, desc: "6 structured programs for every stage" },
  { label: "Events", icon: Calendar, desc: "Weekly sessions, hackathons, and mixers" },
];

const EcosystemNetwork = () => {
  return (
    <section className="section-padding section-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label">
            The Ecosystem
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="section-title">
            Connected by Purpose
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="section-desc mx-auto text-center">
            A network of founders, mentors, partners, and programs — all connected through Axibator.
          </motion.p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
          {nodes.map((node, i) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              className="group rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                <node.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">{node.label}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{node.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemNetwork;
