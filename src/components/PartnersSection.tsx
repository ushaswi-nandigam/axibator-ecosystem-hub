import { motion } from "framer-motion";
import { Handshake, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["Corporate", "Universities", "Incubators", "Startup Programs", "Government"];

const PartnersSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="mb-16">
          <span className="section-label">Allied Ports</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Ecosystem Partners
          </motion.h2>
          <p className="section-desc">Destinations and collaboration points across the journey.</p>
        </div>

        {/* Category tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <span key={cat} className="rounded-full border border-border bg-muted/50 px-5 py-2 text-sm font-medium text-muted-foreground">
              {cat}
            </span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-border/50 bg-muted/30 p-16 md:p-20 text-center"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <Anchor className="h-7 w-7 text-muted-foreground/40" />
          </div>
          <p className="text-lg text-muted-foreground">Partner logos and details will appear here as partnerships are finalized.</p>
          <a href="mailto:connect@axibator.com">
            <Button variant="outline" className="mt-8 rounded-full px-8 font-semibold">Become a Partner</Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
