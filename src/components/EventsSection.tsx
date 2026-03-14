import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { useRef } from "react";

const upcomingEvents = [
  { name: "Founder's Playbook", date: "Weekly", location: "Virtual", desc: "Master the fundamentals of building from zero." },
  { name: "Ignite Cohort Kickoff", date: "Coming Soon", location: "Hyderabad", desc: "Launch of the next Ignite cohort." },
  { name: "Synergy Night", date: "Coming Soon", location: "Hyderabad", desc: "Networking evening for founders and mentors." },
  { name: "Build Weekend", date: "Coming Soon", location: "Multiple Cities", desc: "48-hour sprint to build and ship MVPs." },
];

const EventsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding section-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="section-label">
            Events
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-title">
            Upcoming Events
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="section-desc mx-auto text-center">
            Connect, learn, and build together at our community events.
          </motion.p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {upcomingEvents.map((event, i) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">{event.date}</span>
              </div>
              <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{event.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{event.desc}</p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <MapPin className="h-3 w-3" /> {event.location}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <Link to="/events">
            <Button variant="outline" className="rounded-full gap-2 font-bold border">
              See Full Calendar <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
