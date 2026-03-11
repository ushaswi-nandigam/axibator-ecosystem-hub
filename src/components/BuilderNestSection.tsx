import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Users, Wrench, Coffee, ArrowRight, MapPin } from "lucide-react";

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
    <section ref={ref} id="builder-nest" className="section-padding relative overflow-hidden">
      {/* Accent background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03]" />

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            🛖 The Shipyard
          </span>
          <h2 className="section-header">Builder Nest</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Not a WeWork. Not an incubator. A home for founders to build bold things — together. Physical, founder-first spaces in Tier 2/3 cities.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-bold text-foreground">{f.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Locations + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex flex-col items-center gap-8 lg:flex-row lg:justify-between"
        >
          {/* Locations */}
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((loc) => (
              <div
                key={loc.city}
                className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2"
              >
                <MapPin className="h-3.5 w-3.5 text-primary" />
                <span className="text-sm font-medium text-foreground">{loc.city}</span>
                <span className={`text-[10px] font-semibold uppercase tracking-wider ${
                  loc.status === "Active" ? "text-primary" : "text-muted-foreground"
                }`}>
                  {loc.status}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-3">
            <Link to="/builder-nest">
              <Button className="group rounded-full bg-primary px-6 text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25">
                Explore the Nest
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/apply">
              <Button variant="outline" className="rounded-full border-border px-6 hover:bg-muted">
                Apply to Host
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Builder Ethos strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
        >
          {["Action > Pitch", "Help > Hype", "Progress > Perfection", "No Gatekeeping"].map((v) => (
            <span key={v} className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
              {v}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BuilderNestSection;
