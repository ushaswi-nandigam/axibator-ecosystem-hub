import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Compass, GraduationCap, Rocket, TrendingUp, Users, Globe, Lightbulb, Leaf, Heart, Cpu, Palette, Building2, Award, Plane, Map, Home, RefreshCw, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

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
      <section className="hero-dark relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-[30%] left-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-accent/[0.04] blur-[100px]" />

        <div className="container relative text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="section-label">Expeditions</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-extrabold text-foreground leading-[1.05] mt-4">
            All <span className="text-primary">Programs</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            {programCategories.reduce((acc, cat) => acc + cat.programs.length, 0)} programs designed for every stage and type of founder.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/apply">
              <Button size="lg" className="rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-lg shadow-primary/25">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="lg" variant="outline" className="rounded-full border-border text-foreground hover:bg-muted">
                Register as Founder
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16 flex flex-wrap justify-center gap-3">
            {programCategories.map((cat, i) => (
              <button key={cat.label} onClick={() => setActiveCategory(i)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold tracking-wide transition-all duration-300 ${
                  activeCategory === i
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                }`}>
                {cat.label}
              </button>
            ))}
          </motion.div>

          <motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="grid gap-y-10 gap-x-12 md:grid-cols-2 lg:grid-cols-3">
            {programCategories[activeCategory].programs.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.name} custom={i} variants={fadeUp} initial="hidden" animate="visible" className="group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-[11px] font-bold text-primary/70 tracking-[0.2em] uppercase">{p.duration}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{p.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-primary">{p.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <Link to="/apply">
                      <Button size="sm" className="rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90">Apply Now</Button>
                    </Link>
                    <Link to="/signup">
                      <Button variant="outline" size="sm" className="rounded-full border-border font-semibold hover:border-primary/30">Register</Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-warm py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Not sure which <span className="text-primary">program fits?</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-lg mx-auto">
              Talk to our team and we'll help you find the right expedition.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/apply">
                <Button size="lg" className="rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-lg shadow-primary/25">
                  Apply to Any Program <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="lg" variant="outline" className="rounded-full border-border text-foreground hover:bg-muted">
                  Create Founder Account
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Programs;