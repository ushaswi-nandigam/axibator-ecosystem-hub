import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { useRef } from "react";

const upcomingEvents = [
  { name: "Founder Playbook", date: "Coming Soon", location: "Virtual", desc: "Master the fundamentals of building from zero." },
  { name: "Ignite Cohort Kickoff", date: "Coming Soon", location: "Hyderabad", desc: "Launch of the next Ignite cohort." },
  { name: "Synergy Night", date: "Coming Soon", location: "Hyderabad", desc: "Networking evening for founders and mentors." },
  { name: "Build Weekend", date: "Coming Soon", location: "Multiple Cities", desc: "48-hour sprint to build and ship MVPs." },
];

const EventsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden section-light">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-[20%] right-0 w-[400px] h-[400px] rounded-full bg-accent/[0.05] blur-[100px]" />

      <div className="container">
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
              <span className="section-label">Voyages</span>
              <h2 className="section-title">Upcoming Events</h2>
              <p className="section-desc">Join our community voyages across India.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.7 }} className="mt-10 hidden lg:block">
              <div className="relative rounded-2xl border border-border bg-card/50 p-8 overflow-hidden">
                <svg className="w-full h-32" viewBox="0 0 300 100">
                  <motion.path d="M 20 80 Q 80 20, 150 50 Q 220 80, 280 20" fill="none" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="6 4"
                    initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ delay: 0.5, duration: 2 }} />
                  {[{ cx: 20, cy: 80 }, { cx: 100, cy: 35 }, { cx: 200, cy: 65 }, { cx: 280, cy: 20 }].map((pos, i) => (
                    <motion.circle key={i} cx={pos.cx} cy={pos.cy} r="5" fill="hsl(var(--accent))"
                      initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ delay: 0.8 + i * 0.2, type: "spring" }} />
                  ))}
                </svg>
                <div className="flex justify-between text-[9px] font-bold text-accent/60 tracking-wider uppercase px-2">
                  <span>Playbook</span><span>Kickoff</span><span>Synergy</span><span>Build</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }} className="mt-6">
              <Link to="/events">
                <Button variant="outline" className="rounded-full gap-2 font-bold border text-foreground hover:bg-muted hover:border-accent/30">
                  See All Events <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {upcomingEvents.map((event, i) => (
              <motion.div key={event.name} initial={{ opacity: 0, y: 50, scale: 0.95 }} animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 transition-all duration-500 hover:-translate-y-1"
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="h-4 w-4 text-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full">{event.date}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">{event.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{event.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                  <MapPin className="h-3 w-3 text-accent/50" /> {event.location}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default EventsSection;
