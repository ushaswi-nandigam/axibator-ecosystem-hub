import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["Corporate", "Universities", "Incubators", "Startup Programs", "Government"];

const PartnersSection = () => {
  return (
    <section className="section-padding bg-ecosystem-bg">
      <div className="container">
        <div className="mb-16">
          <span className="section-label">Ecosystem</span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Ecosystem Partners
          </motion.h2>
          <p className="section-desc">Organizations powering the Axibator ecosystem.</p>
        </div>

        {/* Category tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <span key={cat} className="rounded-full border border-border bg-card px-5 py-2 text-sm font-medium text-muted-foreground">
              {cat}
            </span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-muted/30 p-16 md:p-20 text-center"
        >
          <Handshake className="mx-auto h-12 w-12 text-muted-foreground/20" />
          <p className="mt-6 text-lg text-muted-foreground">Partner logos and details will appear here as partnerships are finalized.</p>
          <a href="mailto:connect@axibator.com">
            <Button variant="outline" className="mt-8 rounded-full px-8 font-semibold">Become a Partner</Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
