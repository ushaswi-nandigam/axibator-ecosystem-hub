import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users } from "lucide-react";

const events = [
  { title: "Build Weekend Vizag", type: "Build Sprint", desc: "48-hour build marathon for Andhra Founders", date: "Aug 14", time: "09:00", location: "Innovation Hub, Visakhapatnam", attendees: 100 },
  { title: "Synergy Night Hyderabad", type: "Networking", desc: "Connect with fellow founders and mentors", date: "Aug 21", time: "18:30", location: "T-Hub, Hyderabad", attendees: 150 },
  { title: "Ignite Cohort Kickoff", type: "Program Launch", desc: "First cohort of our validation bootcamp", date: "Aug 31", time: "10:00", location: "Virtual + Regional Hubs", attendees: 75 },
  { title: "Rural Discovery Sprint", type: "Field Work", desc: "On-ground problem discovery in villages", date: "Sep 14", time: "08:00", location: "Rural Andhra Pradesh", attendees: 25 },
];

const EventsSection = () => {
  return (
    <section className="section-padding bg-ecosystem-bg">
      <div className="container">
        <div className="section-header flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Voyages</p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-3 text-3xl font-bold md:text-4xl"
            >
              Upcoming Events
            </motion.h2>
            <p className="mt-3 text-muted-foreground">Join our community events across India.</p>
          </div>
          <Link to="/events">
            <Button variant="outline" size="sm" className="rounded-full">See Full Calendar</Button>
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">{e.type}</span>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Users className="h-3 w-3" /> {e.attendees} attendees
                </span>
              </div>

              <h3 className="mt-4 text-lg font-bold text-foreground">{e.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{e.desc}</p>

              <div className="mt-auto pt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3 text-primary" /> {e.date} · {e.time}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-primary" /> {e.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
