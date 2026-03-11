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
    <section className="section-padding">
      <div className="container">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold md:text-4xl"
          >
            Partners Ecosystem
          </motion.h2>
          <p className="mt-2 text-muted-foreground">Collaborating with the best to support founders.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex flex-col items-center rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-lg font-bold text-accent">
                {p.name[0]}
              </div>
              <h3 className="mt-3 text-sm font-semibold text-foreground">{p.name}</h3>
              <span className="mt-1 text-xs text-muted-foreground">{p.type}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
