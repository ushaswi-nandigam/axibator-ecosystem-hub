import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const events = [
  { title: "Founder's Playbook", desc: "Weekly online execution sessions", date: "Every Thursday" },
  { title: "Ignite Cohort Kickoff", desc: "New cohort orientation and team formation", date: "March 30th" },
  { title: "Synergy Night", desc: "Hyderabad founder mixer", date: "April 12th" },
  { title: "Build Weekend", desc: "Vizag startup build sprint", date: "April 20-21" },
];

const EventsSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex items-end justify-between">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold md:text-4xl"
            >
              Events
            </motion.h2>
            <p className="mt-3 text-muted-foreground">Connect, learn, and build together.</p>
          </div>
          <Link to="/events">
            <Button variant="ecosystem" size="sm">See Full Calendar</Button>
          </Link>
        </div>

        <div className="horizontal-scroll mt-10">
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="panel w-80 rounded-lg p-6"
            >
              <div className="flex items-center gap-2 text-xs text-accent">
                <Calendar size={12} />
                <span>{e.date}</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-foreground">{e.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
