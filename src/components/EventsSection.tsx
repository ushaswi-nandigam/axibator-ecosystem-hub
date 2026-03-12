import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Navigation } from "lucide-react";

const upcomingEvents = [
  { name: "Founder Playbook", date: "Coming Soon", location: "Virtual", desc: "Master the fundamentals of building from zero." },
  { name: "Ignite Cohort Kickoff", date: "Coming Soon", location: "Hyderabad", desc: "Launch of the next Ignite cohort." },
  { name: "Synergy Night", date: "Coming Soon", location: "Hyderabad", desc: "Networking evening for founders and mentors." },
  { name: "Build Weekend", date: "Coming Soon", location: "Multiple Cities", desc: "48-hour sprint to build and ship MVPs." },
];

const EventsSection = () => {
  return (
    <section className="section-padding dark-section">
      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-16">
          <div>
            <span className="section-label">Voyages</span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title text-dark-section-foreground"
            >
              Upcoming Events
            </motion.h2>
            <p className="section-desc text-dark-section-foreground/50">Join our community voyages across India.</p>
          </div>
          <Link to="/events">
            <Button variant="outline" className="rounded-full gap-2 font-semibold border-dark-section-foreground/20 text-dark-section-foreground hover:bg-dark-section-foreground/5">
              See All Events
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {upcomingEvents.map((event, i) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-dark-section-foreground/[0.06] bg-dark-section-foreground/[0.03] p-8 transition-all duration-500 hover:border-primary/20 hover:bg-dark-section-foreground/[0.06] hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-dark-section-foreground group-hover:text-primary transition-colors duration-300">{event.name}</h3>
                  <p className="mt-2 text-sm text-dark-section-foreground/40 leading-relaxed">{event.desc}</p>
                </div>
                <Navigation className="h-5 w-5 text-primary/30 shrink-0 mt-1" />
              </div>
              <div className="mt-5 flex items-center gap-4 text-xs font-medium text-dark-section-foreground/30">
                <span className="rounded-full border border-dark-section-foreground/10 bg-dark-section-foreground/5 px-3 py-1">{event.date}</span>
                <span>{event.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
