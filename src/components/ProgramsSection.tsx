import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  { name: "Ignite", subtitle: "Campus Pre-Incubation", duration: "8 Weeks", desc: "Idea validation bootcamp for first-time founders on campus." },
  { name: "LaunchPad", subtitle: "Student Startup Incubator", duration: "12 Weeks", desc: "Action-first build journey for student and grassroots founders." },
  { name: "BuildLab", subtitle: "Core Startup Incubation", duration: "10 Weeks", desc: "Find product-market fit through structured customer discovery." },
  { name: "GrowthTrack", subtitle: "Startup Acceleration", duration: "12 Weeks", desc: "Revenue growth, funding readiness, and scaling operations." },
  { name: "Global Catalyst", subtitle: "International Expansion", duration: "Ongoing", desc: "Take your startup from India to international markets." },
];

const ProgramsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden section-light">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-label">
            Programs
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7 }} className="section-title">
            Structured Offerings
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="section-desc mx-auto text-center">
            Five programs. Each designed for a specific stage of the founder journey.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">{p.name}</h3>
                <span className="text-[10px] font-bold text-accent tracking-[0.15em] uppercase bg-accent/10 px-3 py-1 rounded-full">{p.duration}</span>
              </div>
              <p className="text-sm font-semibold text-primary/70 mb-3">{p.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

              <Link
                to="/programs"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent transition-all duration-300 hover:gap-3"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
