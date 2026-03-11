import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const PartnersSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Allied Ports</p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-3 text-3xl font-bold md:text-4xl"
          >
            Ecosystem Partners
          </motion.h2>
          <p className="mt-3 text-muted-foreground">Organizations powering the Axibator ecosystem.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-dashed border-border bg-card/50 p-12 text-center"
        >
          <Handshake className="mx-auto h-8 w-8 text-muted-foreground/50" />
          <p className="mt-3 text-muted-foreground">Partner logos and details will appear here as partnerships are finalized.</p>
          <a href="mailto:connect@axibator.com">
            <Button variant="outline" size="sm" className="mt-4 rounded-full">Become a Partner</Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
