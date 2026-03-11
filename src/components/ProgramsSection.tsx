import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  { name: "Axibator Ignite", duration: "8 Weeks", desc: "Idea validation bootcamp for first-time founders. No pitch decks, just progress.", features: ["Idea validation sprint", "Customer interview training", "MVP wireframing"] },
  { name: "Core Incubation", duration: "12 Weeks", desc: "Our flagship build journey. Action-first, no-jargon learning for grassroots founders.", features: ["Weekly build sprints", "Mentor squad access", "Launch preparation"] },
  { name: "Village Innovation Labs", duration: "4-8 Weeks", desc: "On-ground rural residencies for founders solving real problems in Tier 2/3 cities.", features: ["Rural immersion", "Community partnership", "Real impact measurement"] },
  { name: "TechXcelerate", duration: "12 Weeks", desc: "AI, robotics, EV, and emerging technology ventures pushing boundaries.", features: ["Deep tech mentors", "Lab access", "Demo day"] },
  { name: "HerPreneur", duration: "10 Weeks", desc: "Empowering women founders with tailored mentorship and funding access.", features: ["Women-led networks", "Funding access", "Community support"] },
  { name: "GrowthTrack", duration: "8 Weeks", desc: "Revenue growth, scaling operations, and preparing for Series A.", features: ["Revenue strategy", "Investor readiness", "Scale operations"] },
];

const ProgramsSection = () => {
  return (
    <section className="section-padding bg-ecosystem-bg">
      <div className="container">
        <div className="section-header">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Expeditions</p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-3 text-3xl font-bold md:text-4xl"
          >
            Key Offerings
          </motion.h2>
          <p className="mt-3 text-muted-foreground">Action-first programs designed for grassroots founders at every stage.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">{p.duration}</span>
              </div>

              <h3 className="mt-4 text-lg font-bold text-foreground">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

              <ul className="mt-4 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/programs"
                className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors hover:text-primary"
              >
                Learn More
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
