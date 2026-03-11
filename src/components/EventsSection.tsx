import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";

const events = [
  { title: "Founder's Playbook", desc: "Weekly online execution sessions", date: "Every Thursday", location: "Online" },
  { title: "Ignite Cohort Kickoff", desc: "New cohort orientation and team formation", date: "March 30", location: "Hyderabad" },
  { title: "Synergy Night", desc: "Hyderabad founder mixer", date: "April 12", location: "Hyderabad" },
  { title: "Build Weekend", desc: "Vizag startup build sprint", date: "April 20–21", location: "Vizag" },
];

const EventsSection = () => {
  return (
    <section className="section-padding border-t border-border bg-ecosystem-bg">
      <div className="container">
        <div className="section-header flex items-end justify-between">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold md:text-4xl"
            >
              Events
            </motion.h2>
            <p className="mt-2 text-muted-foreground">Connect, learn, and build together.</p>
          </div>
          <Link to="/events">
            <Button variant="outline" size="sm">See All Events</Button>
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {e.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {e.location}
                </span>
              </div>
              <h3 className="mt-3 font-display text-base font-bold text-foreground">{e.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
