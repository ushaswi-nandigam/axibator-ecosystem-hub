import { motion } from "framer-motion";

const categories = [
  {
    label: "Allied Ports — Corporate Partners",
    partners: ["Google for Startups", "Microsoft Founders Hub", "AWS Activate", "NASSCOM"],
  },
  {
    label: "Allied Ports — Universities",
    partners: ["IIT Hyderabad", "IIIT Vizag", "GITAM University", "Andhra University"],
  },
  {
    label: "Allied Ports — Government & Programs",
    partners: ["Startup India", "T-Hub", "TASK Telangana", "MSME Ministry"],
  },
];

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

        <div className="space-y-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.06 }}
            >
              <h3 className="mb-4 text-sm font-semibold text-foreground">{cat.label}</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {cat.partners.map((p) => (
                  <div
                    key={p}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted text-sm font-bold text-accent">
                      {p[0]}
                    </div>
                    <span className="text-sm font-medium text-foreground">{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
