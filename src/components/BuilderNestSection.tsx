import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Users, Wrench, Coffee, ArrowRight, MapPin, Flag } from "lucide-react";

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
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="builder-nest" className="section-padding relative overflow-hidden" style={{
      background: 'linear-gradient(160deg, hsl(30 30% 96%) 0%, hsl(24 40% 93%) 40%, hsl(30 25% 95%) 100%)'
    }}>
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
      <div className="absolute bottom-[20%] right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.07] blur-[100px]" />

      <div className="container relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Text + cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-label">The Shipyard</span>
              <h2 className="section-title">Builder Nest</h2>
              <p className="section-desc">
                Not a WeWork. Not an incubator. A home for founders to build bold things — together.
                Physical, founder-first spaces in Tier 2/3 cities.
              </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="group rounded-xl bg-card border-2 border-border p-5 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                    <f.icon className="h-5 w-5 text-primary/70 transition-colors group-hover:text-primary" />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-foreground">{f.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Location map visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm mx-auto aspect-square">
              {/* Map grid background */}
              <div className="absolute inset-0 rounded-2xl opacity-[0.04]" style={{
                backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }} />

              {/* Soft boundary */}
              <div className="absolute inset-[5%] rounded-2xl border border-primary/10" />
              <div className="absolute inset-[10%] rounded-2xl border border-dashed border-primary/8" />

              {/* Location cards */}
              {locations.map((loc, i) => {
                const positions = [
                  { top: '18%', left: '18%' },
                  { top: '22%', right: '18%' },
                  { bottom: '28%', left: '22%' },
                  { bottom: '18%', right: '22%' },
                ];
                const isActive = loc.status === 'Active';
                return (
                  <motion.div
                    key={loc.city}
                    className="absolute flex flex-col items-center"
                    style={positions[i]}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.6 + i * 0.15, type: "spring" }}
                  >
                    <motion.div
                      animate={isActive ? { y: [0, -3, 0] } : {}}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                      className={`h-10 w-10 rounded-lg flex items-center justify-center ${isActive ? 'bg-primary/15 border border-primary/30' : 'bg-muted/50 border border-muted-foreground/10'}`}
                    >
                      <MapPin className={`h-5 w-5 ${isActive ? 'text-primary' : 'text-muted-foreground/40'}`} />
                    </motion.div>
                    <span className="mt-1.5 text-[10px] font-bold tracking-wider text-foreground/70">{loc.city}</span>
                    <span className={`text-[8px] font-bold uppercase tracking-wider ${isActive ? 'text-primary' : 'text-muted-foreground/50'}`}>
                      {loc.status}
                    </span>
                  </motion.div>
                );
              })}

              {/* Center hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="relative"
                >
                  <motion.div
                    className="absolute -inset-3 rounded-xl bg-primary/8"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <div className="relative h-16 w-auto px-5 rounded-xl bg-card border-2 border-primary/25 flex items-center gap-2 shadow-lg">
                    <Flag className="h-4 w-4 text-primary" />
                    <span className="text-xs font-extrabold text-primary tracking-wider">AXIBATOR PORT</span>
                  </div>
                </motion.div>
              </div>

              {/* Connecting lines from center to pins */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
                {[
                  { x: 54, y: 54 },
                  { x: 240, y: 66 },
                  { x: 66, y: 216 },
                  { x: 228, y: 240 },
                ].map((pos, i) => (
                  <motion.path
                    key={i}
                    d={`M 150 150 Q ${150 + (pos.x - 150) * 0.3} ${pos.y} ${pos.x} ${pos.y}`}
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="1.5"
                    strokeDasharray="4 6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 0.25 } : {}}
                    transition={{ delay: 0.8 + i * 0.12, duration: 0.8 }}
                  />
                ))}
              </svg>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
        >
          <Link to="/builder-nest">
            <Button className="group rounded-full bg-primary px-8 text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300">
              Explore the Nest
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/apply">
            <Button variant="outline" className="rounded-full px-8 font-medium border-2 hover:bg-muted transition-all duration-300">
              Apply to Host
            </Button>
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default BuilderNestSection;
