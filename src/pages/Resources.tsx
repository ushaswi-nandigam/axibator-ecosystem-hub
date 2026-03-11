import { useState } from "react";
import { motion } from "framer-motion";
import { Search, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";

const resources = [
  { title: "Startup Playbook", category: "Playbooks", desc: "Step-by-step guide from idea validation to first revenue." },
  { title: "Pitch Deck Template", category: "Pitch Decks", desc: "Investor-ready pitch deck structure used by top YC startups." },
  { title: "Funding Readiness Checklist", category: "Funding", desc: "Everything you need before approaching angel investors." },
  { title: "Co-Founder Agreement Template", category: "Legal", desc: "Legal template for equity splits, roles, and vesting." },
  { title: "Customer Discovery Toolkit", category: "Playbooks", desc: "Frameworks for identifying and validating your ideal customer." },
  { title: "Financial Model Template", category: "Funding", desc: "Excel/Sheets model for projections and unit economics." },
  { title: "Brand Identity Worksheet", category: "Toolkit", desc: "Define your startup's brand voice, values, and visual identity." },
  { title: "Market Research Template", category: "Playbooks", desc: "TAM SAM SOM analysis and competitive landscape mapping." },
  { title: "Term Sheet Guide", category: "Legal", desc: "Understanding term sheets and common investor terms." },
  { title: "Growth Metrics Dashboard", category: "Toolkit", desc: "Key metrics every early-stage startup should track." },
];

const categories = ["All", "Playbooks", "Pitch Decks", "Funding", "Legal", "Toolkit"];

const Resources = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = resources.filter(
    (r) =>
      (category === "All" || r.category === category) &&
      (search === "" || r.title.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="relative min-h-screen">
      <NetworkBackground />
      <Navbar />
      <main className="relative z-10 pt-24">
        <div className="container pb-24">
          <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-4xl font-bold md:text-5xl">
            Founder <span className="text-primary">Resources</span>
          </motion.h1>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search resources..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-10 w-full rounded-lg border border-border bg-card/50 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none sm:w-72"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button key={c} onClick={() => setCategory(c)} className={`tag ${category === c ? "border-primary text-primary" : ""}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="panel group cursor-pointer rounded-lg p-6"
              >
                <div className="flex items-center gap-3">
                  <FileText size={18} className="text-accent" />
                  <span className="tag">{r.category}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
