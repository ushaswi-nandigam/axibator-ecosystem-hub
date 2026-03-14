import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useRef } from "react";

const locations = [
  { city: "Vizag", status: "Active", color: "bg-primary text-primary-foreground" },
  { city: "Amaravati", status: "Active", color: "bg-primary text-primary-foreground" },
  { city: "Vijayawada", status: "Scouting", color: "bg-secondary text-secondary-foreground" },
  { city: "Warangal", status: "Upcoming", color: "bg-muted text-muted-foreground" },
];

const features = [
  { title: "Founder-First Spaces", desc: "Cozy, gritty houses — not corporate offices" },
  { title: "Builder Community", desc: "Ship MVPs with fellow founders over chai" },
  { title: "Build Jams & Hackathons", desc: "Weekend sprints that turn ideas into products" },
];

const BuilderNestSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="builder-nest" className="section-padding section-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="section-label">
            Builder Nest
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-title">
            Where Builders Live & Ship
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="section-desc mx-auto text-center">
            Physical, founder-first spaces in Tier 2/3 cities where startups get built — not pitched.
          </motion.p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 mb-12">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="text-base font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Regional hubs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">Regional Hubs</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.city}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="rounded-xl border border-border bg-card p-5 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <MapPin className="mx-auto h-5 w-5 text-muted-foreground mb-2" />
                <h4 className="text-base font-bold text-foreground">{loc.city}</h4>
                <span className={`mt-2 inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${loc.color}`}>
                  {loc.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <Link to="/builder-nest">
            <Button className="rounded-full bg-primary px-8 text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg shadow-primary/20">
              Explore the Nest <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/apply">
            <Button variant="outline" className="rounded-full px-8 font-medium border">
              Apply to Host
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BuilderNestSection;
