import { useState } from "react";
import { motion } from "framer-motion";
import { Search, FileText, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          <div className="section-header">
            <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold md:text-4xl">
              Founder <span className="text-primary">Resources</span>
            </motion.h1>
            <p className="mt-2 text-muted-foreground">Templates, guides, and tools for every stage.</p>
          </div>

          {/* Search & filters */}
          <div className="mb-8 flex flex-col gap-4 rounded-xl border border-border bg-card p-5 shadow-sm sm:flex-row sm:items-center">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search resources..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-10 w-full rounded-lg border border-border bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none sm:w-64"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                    category === c
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex items-center gap-2">
                  <FileText size={16} className="text-accent" />
                  <span className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">{r.category}</span>
                </div>
                <h3 className="mt-3 font-display text-base font-bold text-foreground">{r.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                <button className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent transition-colors hover:text-primary">
                  Download <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </motion.div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="mt-12 text-center text-muted-foreground">No resources found.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
