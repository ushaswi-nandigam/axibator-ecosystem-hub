import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Users, Wrench, Coffee, ArrowRight, MapPin, Anchor } from "lucide-react";

const features = [
  { icon: Home, title: "Founder-First Spaces", desc: "Cozy, gritty houses — not corporate offices" },
  { icon: Users, title: "Builder Community", desc: "Ship MVPs with fellow founders over chai" },
  { icon: Wrench, title: "Build Jams & Hackathons", desc: "Weekend sprints that turn ideas into products" },
  { icon: Coffee, title: "Chai-Fueled Chaos", desc: "Where chai breaks become co-founder meetings" },
];

const locations = [
  { city: "Amaravati", status: "Active" },
  { city: "Vizag", status: "Active" },
  { city: "Warangal", status: "Upcoming" },
  { city: "Vijayawada", status: "Scouting" },
];

const BuilderNestSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="builder-nest" className="section-padding relative overflow-hidden bg-ecosystem-bg">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="section-label">The Shipyard</span>
          <h2 className="section-title">Builder Nest</h2>
          <p className="section-desc mx-auto text-center">
            Not a WeWork. Not an incubator. A home for founders to build bold things — together.
            Physical, founder-first spaces in Tier 2/3 cities.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group rounded-2xl bg-card border border-border/50 p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted transition-all duration-300 group-hover:bg-primary/10">
                <f.icon className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex flex-col items-center gap-10 lg:flex-row lg:justify-between"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((loc) => (
              <div
                key={loc.city}
                className="flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-2.5 text-sm"
              >
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span className="font-medium text-foreground">{loc.city}</span>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${
                  loc.status === "Active" ? "text-primary" : "text-muted-foreground"
                }`}>
                  {loc.status}
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <Link to="/builder-nest">
              <Button className="group rounded-full bg-primary px-8 text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all duration-300">
                Explore the Nest
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/apply">
              <Button variant="outline" className="rounded-full px-8 font-medium hover:bg-muted transition-all duration-300">
                Apply to Host
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuilderNestSection;
