import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  {
    label: "Corporate Partners",
    partners: ["AWS Activate", "Google for Startups", "Microsoft Founders Hub", "NASSCOM"],
  },
  {
    label: "Universities",
    partners: ["IIT Hyderabad", "IIIT Vizag", "GITAM University", "Andhra University"],
  },
  {
    label: "Government",
    partners: ["Startup India", "MSME Ministry", "T-Hub", "TASK Telangana"],
  },
  {
    label: "VCs & Investors",
    partners: ["100X.VC", "Antler India", "Village Capital", "Kalaari Capital"],
  },
  {
    label: "Startup Programs",
    partners: ["Y Combinator Community", "Techstars", "Google Launchpad", "AWS EdStart"],
  },
  {
    label: "Incubators",
    partners: ["T-Hub", "IIIT-H CIE", "IKP Knowledge Park", "AIC-CCMB"],
  },
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          <div className="section-header">
            <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold md:text-4xl">
              Ecosystem <span className="text-primary">Partners</span>
            </motion.h1>
            <p className="mt-2 text-muted-foreground">Organizations powering the Axibator ecosystem.</p>
          </div>

          <div className="flex flex-col gap-10">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: ci * 0.08 }}
              >
                <h3 className="mb-4 font-display text-base font-semibold text-foreground">{cat.label}</h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                  {cat.partners.map((p) => (
                    <div
                      key={p}
                      className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-sm font-bold text-accent">
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
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
