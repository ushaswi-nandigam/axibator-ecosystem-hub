import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Compass, GraduationCap, Rocket, TrendingUp, Users, Globe, Lightbulb, Leaf, Heart, Cpu, Palette, Building2, Award, Plane, Map, Home, RefreshCw, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const programCategories = [
  {
    label: "Student & Campus",
    programs: [
      { name: "SparkLab", subtitle: "School Innovation Bootcamp", desc: "Introducing innovation thinking to high school students through hands-on bootcamps.", icon: Lightbulb, duration: "4 Weeks" },
      { name: "Ignite", subtitle: "Campus Pre-Incubation", desc: "From Idea to MVP & First Customers in 60 Days. Perfect for student founders just getting started.", icon: Compass, duration: "8 Weeks" },
      { name: "LaunchPad", subtitle: "Student Startup Incubator", desc: "Structured incubation helping campus ventures move from MVP to early market entry.", icon: GraduationCap, duration: "12 Weeks" },
    ],
  },
  {
    label: "Core Incubation & Acceleration",
    programs: [
      { name: "IdeaForge", subtitle: "Early Founder Pre-Incubation", desc: "Validation-focused program for first-time founders exploring startup ideas.", icon: Lightbulb, duration: "6 Weeks" },
      { name: "BuildLab", subtitle: "Core Startup Incubation", desc: "Focused on product-market fit, customer pilots, and investor readiness.", icon: Rocket, duration: "12 Weeks" },
      { name: "GrowthTrack", subtitle: "Startup Acceleration", desc: "Revenue growth, scaling operations, and preparing for Series A funding.", icon: TrendingUp, duration: "8 Weeks" },
      { name: "Axibator X", subtitle: "Venture Acceleration", desc: "High-growth ventures ready for institutional funding and rapid market expansion.", icon: TrendingUp, duration: "16 Weeks" },
    ],
  },
  {
    label: "Specialized Tracks",
    programs: [
      { name: "HerPreneur", subtitle: "Women Entrepreneurship Accelerator", desc: "Empowering women founders with tailored mentorship, funding access, and community.", icon: Heart, duration: "10 Weeks" },
      { name: "Rural Innovators", subtitle: "Grassroots Innovation", desc: "Agriculture entrepreneurship and grassroots innovation from rural India.", icon: Leaf, duration: "8 Weeks" },
      { name: "Social Impact Accelerator", subtitle: "Impact Ventures", desc: "Ventures solving social challenges with sustainable business models.", icon: Users, duration: "12 Weeks" },
      { name: "TechXcelerate", subtitle: "Deep Tech Accelerator", desc: "AI, robotics, EV, and emerging technology ventures pushing boundaries.", icon: Cpu, duration: "12 Weeks" },
      { name: "CreativeLab", subtitle: "Creative Industry Incubator", desc: "Design, media, gaming, and creative economy startups.", icon: Palette, duration: "10 Weeks" },
    ],
  },
  {
    label: "Enterprise & Global",
    programs: [
      { name: "Global Catalyst", subtitle: "International Expansion", desc: "Helping Indian startups expand to global markets with cross-border support.", icon: Globe, duration: "12 Weeks" },
      { name: "Corporate Innovation Catalyst", subtitle: "Enterprise Innovation", desc: "Partnering corporates with startups for mutual innovation and growth.", icon: Building2, duration: "8 Weeks" },
    ],
  },
  {
    label: "Fellowships & Immersives",
    programs: [
      { name: "LaunchPilot Fellowship", subtitle: "Founder Fellowship", desc: "A fellowship for exceptional founders building in underserved markets.", icon: Award, duration: "6 Months" },
      { name: "Founder Expeditions", subtitle: "Immersive Learning", desc: "Travel-based learning experiences visiting global startup ecosystems.", icon: Plane, duration: "2 Weeks" },
      { name: "Innovation Trails", subtitle: "Ecosystem Tours", desc: "Curated visits to innovation hubs, labs, and startup communities.", icon: Map, duration: "1 Week" },
      { name: "Tri Impact Residency", subtitle: "Impact Residency", desc: "Three-month residency program for social entrepreneurs.", icon: Home, duration: "3 Months" },
    ],
  },
  {
    label: "Ecosystem Services",
    programs: [
      { name: "Axibator Exchange", subtitle: "MSME Digital Transformation", desc: "Helping MSMEs adopt digital tools and modern business practices.", icon: RefreshCw, duration: "Ongoing" },
      { name: "Axibator Insights Lab", subtitle: "Research & Insights", desc: "Data-driven insights on startup ecosystems, trends, and founder needs.", icon: BarChart3, duration: "Ongoing" },
    ],
  },
];

const Programs = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          {/* Hero header */}
          <div className="section-header text-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs font-semibold uppercase tracking-widest text-primary"
            >
              Expeditions
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 text-3xl font-bold md:text-5xl"
            >
              All <span className="text-primary">Programs</span>
            </motion.h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {programCategories.reduce((acc, cat) => acc + cat.programs.length, 0)} programs designed for every stage and type of founder. Find your expedition.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/apply">Apply Now <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/signup">Register as Founder</Link>
              </Button>
            </div>
          </div>

          {/* Category tabs */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {programCategories.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(i)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 ${
                  activeCategory === i
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Programs grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {programCategories[activeCategory].programs.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                      {p.duration}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-lg font-bold text-foreground">{p.name}</h3>
                  <p className="mt-0.5 text-sm font-medium text-primary">{p.subtitle}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

                  <div className="mt-5 flex items-center gap-3">
                    <Button asChild size="sm" className="flex-1">
                      <Link to="/apply">Apply Now</Link>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <Link to="/signup">Register</Link>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 rounded-2xl border border-border bg-card p-8 text-center shadow-sm md:p-12"
          >
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Not sure which program fits?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Talk to our team and we'll help you find the right expedition for your stage and goals.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild variant="hero" size="lg">
                <Link to="/apply">Apply to Any Program <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/signup">Create Founder Account</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
