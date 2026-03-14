import { motion } from "framer-motion";
import { Users, Handshake, Calendar, BookOpen, Rocket } from "lucide-react";

const pillars = [
  { label: "Startups", icon: Rocket, count: "50+", desc: "Teams building across sectors" },
  { label: "Mentors", icon: Users, count: "300+", desc: "Industry practitioners and founders" },
  { label: "Partners", icon: Handshake, count: "75+", desc: "Tools, credits, and infrastructure" },
  { label: "Programs", icon: BookOpen, count: "5", desc: "Structured incubation tracks" },
  { label: "Events", icon: Calendar, count: "20+", desc: "Workshops, hackathons, and meetups" },
];

const EcosystemNetwork = () => {
  return (
    <section className="section-padding relative overflow-hidden section-light-alt">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label">
            The Ecosystem
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7 }} className="section-title">
            Everything a Founder Needs
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group text-center rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                <p.icon className="h-5 w-5 text-accent" />
              </div>
              <p className="text-2xl font-extrabold text-foreground">{p.count}</p>
              <p className="text-sm font-bold text-foreground mt-1">{p.label}</p>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemNetwork;
