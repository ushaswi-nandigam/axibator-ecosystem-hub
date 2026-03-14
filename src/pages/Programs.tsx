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
      { name: "Ignite", subtitle: "Campus Pre-Incubation", desc: "From Idea to MVP & First Customers in 60 Days.", icon: Compass, duration: "8 Weeks" },
      { name: "LaunchPad", subtitle: "Student Startup Incubator", desc: "Structured incubation helping campus ventures move from MVP to early market entry.", icon: GraduationCap, duration: "12 Weeks" },
    ],
  },
  {
    label: "Core Incubation",
    programs: [
      { name: "IdeaForge", subtitle: "Early Founder Pre-Incubation", desc: "Validation-focused program for first-time founders.", icon: Lightbulb, duration: "6 Weeks" },
      { name: "BuildLab", subtitle: "Core Startup Incubation", desc: "Focused on product-market fit and investor readiness.", icon: Rocket, duration: "12 Weeks" },
      { name: "GrowthTrack", subtitle: "Startup Acceleration", desc: "Revenue growth and preparing for Series A.", icon: TrendingUp, duration: "8 Weeks" },
      { name: "Axibator X", subtitle: "Venture Acceleration", desc: "High-growth ventures ready for institutional funding.", icon: TrendingUp, duration: "16 Weeks" },
    ],
  },
  {
    label: "Specialized Tracks",
    programs: [
      { name: "HerPreneur", subtitle: "Women Entrepreneurship", desc: "Empowering women founders with mentorship and funding.", icon: Heart, duration: "10 Weeks" },
      { name: "Rural Innovators", subtitle: "Grassroots Innovation", desc: "Agriculture and grassroots innovation from rural India.", icon: Leaf, duration: "8 Weeks" },
      { name: "Social Impact", subtitle: "Impact Ventures", desc: "Ventures solving social challenges sustainably.", icon: Users, duration: "12 Weeks" },
      { name: "TechXcelerate", subtitle: "Deep Tech Accelerator", desc: "AI, robotics, EV, and emerging tech ventures.", icon: Cpu, duration: "12 Weeks" },
      { name: "CreativeLab", subtitle: "Creative Industry", desc: "Design, media, gaming, and creative economy startups.", icon: Palette, duration: "10 Weeks" },
    ],
  },
  {
    label: "Enterprise & Global",
    programs: [
      { name: "Global Catalyst", subtitle: "International Expansion", desc: "Helping Indian startups expand to global markets.", icon: Globe, duration: "12 Weeks" },
      { name: "Corporate Innovation", subtitle: "Enterprise Innovation", desc: "Partnering corporates with startups for growth.", icon: Building2, duration: "8 Weeks" },
    ],
  },
  {
    label: "Fellowships",
    programs: [
      { name: "LaunchPilot Fellowship", subtitle: "Founder Fellowship", desc: "Fellowship for exceptional founders in underserved markets.", icon: Award, duration: "6 Months" },
      { name: "Founder Expeditions", subtitle: "Immersive Learning", desc: "Travel-based learning visiting global ecosystems.", icon: Plane, duration: "2 Weeks" },
      { name: "Innovation Trails", subtitle: "Ecosystem Tours", desc: "Curated visits to innovation hubs and labs.", icon: Map, duration: "1 Week" },
      { name: "Tri Impact Residency", subtitle: "Impact Residency", desc: "Three-month residency for social entrepreneurs.", icon: Home, duration: "3 Months" },
    ],
  },
  {
    label: "Services",
    programs: [
      { name: "Axibator Exchange", subtitle: "MSME Transformation", desc: "Helping MSMEs adopt digital tools.", icon: RefreshCw, duration: "Ongoing" },
      { name: "Insights Lab", subtitle: "Research & Insights", desc: "Data-driven insights on startup ecosystems.", icon: BarChart3, duration: "Ongoing" },
    ],
  },
];

const Programs = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="relative z-10">
        <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 hero-dark">
          <div className="container relative text-center max-w-3xl mx-auto">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label-light !text-primary">Programs</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="section-title text-white">
              All <span className="text-primary">Programs</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="section-desc mx-auto text-center !text-white/50">
              {programCategories.reduce((acc, cat) => acc + cat.programs.length, 0)} programs designed for every stage and type of founder.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/apply">
                <Button size="lg" className="h-14 rounded-full bg-primary px-10 text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/25">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="section-padding section-light">
          <div className="container">
            <div className="mb-12 flex flex-wrap justify-center gap-3">
              {programCategories.map((cat, i) => (
                <button key={cat.label} onClick={() => setActiveCategory(i)}
                  className={`rounded-full px-5 py-2.5 text-xs font-bold tracking-wide transition-all duration-300 ${
                    activeCategory === i
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                  }`}>
                  {cat.label}
                </button>
              ))}
            </div>

            <motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {programCategories[activeCategory].programs.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="group flex flex-col rounded-2xl bg-card border border-border p-8 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-[10px] font-bold text-primary tracking-[0.15em] uppercase bg-primary/10 px-3 py-1 rounded-full">{p.duration}</span>
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-foreground">{p.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-primary">{p.subtitle}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                    <Link to="/apply" className="mt-6">
                      <Button size="sm" className="w-full rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90">Apply Now</Button>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section className="section-padding section-grey">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-card p-10 text-center shadow-xl md:p-14">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Not sure which program fits?</h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">Talk to our team and we'll help you find the right path.</p>
              <Link to="/apply">
                <Button size="lg" className="mt-8 h-14 rounded-full bg-primary px-10 text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20">
                  Apply to Any Program <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
