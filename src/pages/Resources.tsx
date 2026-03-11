import { useState } from "react";
import { motion } from "framer-motion";
import { Search, FileText, Download, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
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
          <div className="section-header text-center">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-semibold uppercase tracking-widest text-primary">
              Navigator's Kit
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mt-3 text-3xl font-bold md:text-5xl">
              Founder <span className="text-primary">Resources</span>
            </motion.h1>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">Templates, guides, and tools for every stage of your journey.</p>
          </div>

          {/* Search & filters card */}
          <div className="mb-10 rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="h-10 w-full rounded-xl border border-border bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 ${
                      category === c
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <BookOpen size={18} className="text-accent" />
                  </div>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">{r.category}</span>
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-foreground">{r.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                <Button variant="outline" size="sm" className="mt-5 w-full">
                  <Download size={14} className="mr-1.5" /> Download
                </Button>
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
