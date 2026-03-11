import { motion } from "framer-motion";

const partners = [
  { name: "Google for Startups", type: "Startup Programs" },
  { name: "Microsoft Founders Hub", type: "Startup Programs" },
  { name: "AWS Activate", type: "Corporate Partners" },
  { name: "NASSCOM", type: "Corporate Partners" },
  { name: "IIT Hyderabad", type: "Universities" },
  { name: "T-Hub", type: "Incubators" },
  { name: "IIIT Vizag", type: "Universities" },
  { name: "Startup India", type: "Government" },
];

const PartnersSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold md:text-4xl"
        >
          Partners Ecosystem
        </motion.h2>
        <p className="mt-3 text-muted-foreground">Collaborating with the best to support founders.</p>

        <div className="horizontal-scroll mt-10">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="panel flex w-56 flex-col items-center rounded-lg p-6 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-muted/50">
                <span className="font-display text-lg font-bold text-accent">{p.name[0]}</span>
              </div>
              <h3 className="mt-4 font-display text-sm font-semibold text-foreground">{p.name}</h3>
              <span className="mt-1 text-xs text-muted-foreground">{p.type}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
