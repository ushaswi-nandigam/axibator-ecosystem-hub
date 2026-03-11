import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users } from "lucide-react";

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

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-dashed border-border bg-card/50 p-12 text-center"
        >
          <Calendar className="mx-auto h-8 w-8 text-muted-foreground/50" />
          <p className="mt-3 text-muted-foreground">Events will be listed here once scheduled.</p>
          <p className="mt-1 text-sm text-muted-foreground/70">Stay tuned for build sprints, networking nights, and cohort kickoffs.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
