import { motion } from "framer-motion";

// Partner logos via Clearbit Logo API (free, no auth needed)
const getLogoUrl = (domain: string) => `https://logo.clearbit.com/${domain}`;

const categories = [
  {
    label: "Allied Ports — Corporate Partners",
    partners: [
      { name: "Google for Startups", domain: "google.com" },
      { name: "Microsoft Founders Hub", domain: "microsoft.com" },
      { name: "AWS Activate", domain: "aws.amazon.com" },
      { name: "NASSCOM", domain: "nasscom.in" },
    ],
  },
  {
    label: "Allied Ports — Universities",
    partners: [
      { name: "IIT Hyderabad", domain: "iith.ac.in" },
      { name: "IIIT Vizag", domain: "iiitdm.ac.in" },
      { name: "GITAM University", domain: "gitam.edu" },
      { name: "Andhra University", domain: "andhrauniversity.edu.in" },
    ],
  },
  {
    label: "Allied Ports — Government & Programs",
    partners: [
      { name: "Startup India", domain: "startupindia.gov.in" },
      { name: "T-Hub", domain: "t-hub.co" },
      { name: "TASK Telangana", domain: "task.telangana.gov.in" },
      { name: "MSME Ministry", domain: "msme.gov.in" },
    ],
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
                  <motion.div
                    key={p.name}
                    whileHover={{ scale: 1.03, y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white overflow-hidden">
                      <img
                        src={getLogoUrl(p.domain)}
                        alt={p.name}
                        className="h-7 w-7 object-contain"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.classList.add('bg-muted', 'text-accent');
                            parent.classList.remove('bg-white');
                            parent.innerHTML = `<span class="text-sm font-bold">${p.name[0]}</span>`;
                          }
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground">{p.name}</span>
                  </motion.div>
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
