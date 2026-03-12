import { motion } from "framer-motion";
import { ArrowRight, Compass, Hammer, Rocket, Cpu, Heart, Sprout } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  { name: "Ignite", duration: "8 Weeks", desc: "Idea validation bootcamp for first-time founders.", icon: Compass },
  { name: "LaunchPad", duration: "12 Weeks", desc: "Action-first build journey for grassroots founders.", icon: Hammer },
  { name: "BuildLab", duration: "10 Weeks", desc: "Product-market fit with customer discovery.", icon: Rocket },
  { name: "TechXcelerate", duration: "12 Weeks", desc: "AI, robotics, and emerging tech ventures.", icon: Cpu },
  { name: "HerPreneur", duration: "10 Weeks", desc: "Empowering women founders with mentorship.", icon: Heart },
  { name: "Rural Innovators", duration: "4-8 Weeks", desc: "On-ground residencies solving Tier 2/3 problems.", icon: Sprout },
];

const ProgramsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden" style={{
      background: 'linear-gradient(160deg, hsl(213 25% 96%) 0%, hsl(210 35% 94%) 50%, hsl(220 20% 96%) 100%)'
    }}>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            The Builder Zone
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="section-title"
          >
            Where Ideas Become Startups
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-desc mx-auto text-center"
          >
            Action-first programs designed for grassroots founders at every stage of the journey.
          </motion.p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl bg-card border border-border/60 p-8 md:p-10 transition-all duration-500 hover:border-primary/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/10">
                  <p.icon className="h-6 w-6 text-primary/80 transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                </div>
                <span className="text-[10px] font-semibold text-muted-foreground tracking-[0.2em] uppercase">{p.duration}</span>
              </div>

              <h3 className="mt-7 text-2xl font-bold text-foreground">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

              <Link
                to="/programs"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default ProgramsSection;
