import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Navigation } from "lucide-react";

const upcomingEvents = [
  { name: "Founder Playbook", date: "Coming Soon", location: "Virtual", desc: "Master the fundamentals of building from zero." },
  { name: "Ignite Cohort Kickoff", date: "Coming Soon", location: "Hyderabad", desc: "Launch of the next Ignite cohort." },
  { name: "Synergy Night", date: "Coming Soon", location: "Hyderabad", desc: "Networking evening for founders and mentors." },
  { name: "Build Weekend", date: "Coming Soon", location: "Multiple Cities", desc: "48-hour sprint to build and ship MVPs." },
];

const EventsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden" style={{
      background: 'linear-gradient(160deg, hsl(30 25% 97%) 0%, hsl(24 30% 95%) 50%, hsl(30 20% 97%) 100%)'
    }}>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

      <div className="container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">Voyages</span>
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-desc">Join our community voyages across India.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Link to="/events">
              <Button variant="outline" className="rounded-full gap-2 font-semibold border-border text-foreground hover:bg-muted">
                See All Events
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {upcomingEvents.map((event, i) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl border border-border/60 bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2 hover:shadow-primary/10"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{event.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{event.desc}</p>
                </div>
                <Navigation className="h-5 w-5 text-primary/40 shrink-0 mt-1 transition-all duration-300 group-hover:text-primary/80 group-hover:rotate-45" />
              </div>
              <div className="mt-5 flex items-center gap-4 text-xs font-semibold text-muted-foreground">
                <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-primary">{event.date}</span>
                <span>{event.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default EventsSection;
