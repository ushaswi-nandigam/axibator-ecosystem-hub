import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const EventsSection = () => {
  return (
    <section className="section-padding bg-ecosystem-bg">
      <div className="container">
        <div className="section-header flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-label">Events</p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Upcoming Events
            </motion.h2>
            <p className="section-desc">Join our community events across India.</p>
          </div>
          <Link to="/events">
            <Button variant="outline" size="sm" className="rounded-full gap-2">
              See Full Calendar
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-card p-16 text-center shadow-sm"
        >
          <Calendar className="mx-auto h-10 w-10 text-muted-foreground/30" />
          <p className="mt-4 text-lg font-medium text-muted-foreground">
            Events will be listed here once scheduled.
          </p>
          <p className="mt-2 text-sm text-muted-foreground/70">
            Stay tuned for build sprints, networking nights, and cohort kickoffs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
