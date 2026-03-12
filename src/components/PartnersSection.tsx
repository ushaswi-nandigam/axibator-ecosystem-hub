import { motion } from "framer-motion";
import { Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["Corporate", "Universities", "Incubators", "Startup Programs", "Government"];

const PartnersSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="section-label">Allied Ports</span>
          <h2 className="section-title">Ecosystem Partners</h2>
          <p className="section-desc">Destinations and collaboration points across the journey.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {categories.map((cat, i) => (
            <motion.span
              key={cat}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08, type: "spring" }}
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
            >
              {cat}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl border border-border/50 bg-muted/30 p-16 md:p-20 text-center shadow-lg"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <Anchor className="h-7 w-7 text-muted-foreground/60" />
          </div>
          <p className="text-lg font-medium text-muted-foreground">Partner logos and details will appear here as partnerships are finalized.</p>
          <a href="mailto:connect@axibator.com">
            <Button variant="outline" className="mt-8 rounded-full px-8 font-semibold transition-all duration-300 hover:border-primary/30">Become a Partner</Button>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default PartnersSection;
