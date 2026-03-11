import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";

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
    <div className="relative min-h-screen">
      <NetworkBackground />
      <Navbar />
      <main className="relative z-10 pt-24">
        <div className="container pb-24">
          <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-4xl font-bold md:text-5xl">
            Ecosystem <span className="text-primary">Partners</span>
          </motion.h1>
          <p className="mt-4 text-muted-foreground">Organizations powering the Axibator ecosystem.</p>

          <div className="mt-12 flex flex-col gap-12">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: ci * 0.1 }}
              >
                <h3 className="font-display text-lg font-semibold text-accent">{cat.label}</h3>
                <div className="horizontal-scroll mt-4">
                  {cat.partners.map((p) => (
                    <div key={p} className="panel flex w-48 flex-col items-center rounded-lg p-6 text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-muted/50">
                        <span className="font-display text-lg font-bold text-accent">{p[0]}</span>
                      </div>
                      <span className="mt-3 text-sm font-medium text-foreground">{p}</span>
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
