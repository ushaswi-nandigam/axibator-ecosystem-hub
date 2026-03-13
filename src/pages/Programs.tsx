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
    <div className="relative min-h-screen">
      <Navbar />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28" style={{
          background: 'linear-gradient(160deg, hsl(220 30% 96%) 0%, hsl(210 40% 92%) 40%, hsl(24 30% 94%) 100%)'
        }}>
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
          <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.08] blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/[0.08] blur-[100px]" />

          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="section-label"
              >
                Expeditions
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="section-title"
              >
                All <span className="text-primary">Programs</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="section-desc mx-auto text-center"
              >
                {programCategories.reduce((acc, cat) => acc + cat.programs.length, 0)} programs designed for every stage and type of founder. Find your expedition.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex flex-wrap justify-center gap-4"
              >
                <Link to="/apply">
                  <Button size="lg" className="group h-14 rounded-full bg-primary px-10 text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/35 transition-all duration-300">
                    Apply Now <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline" size="lg" className="h-14 rounded-full px-10 text-base font-semibold border-2 border-border text-foreground hover:bg-muted hover:border-primary/30 transition-all duration-300">
                    Register as Founder
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Programs Content */}
        <section className="section-padding relative overflow-hidden" style={{
          background: 'linear-gradient(160deg, hsl(213 30% 94%) 0%, hsl(210 40% 90%) 50%, hsl(220 25% 93%) 100%)'
        }}>
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-accent/45 to-transparent" />
          <div className="absolute top-[30%] right-0 w-[450px] h-[450px] rounded-full bg-secondary/[0.06] blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />

          <div className="container relative">
            {/* Category tabs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14 flex flex-wrap justify-center gap-3"
            >
              {programCategories.map((cat, i) => (
                <button
                  key={cat.label}
                  onClick={() => setActiveCategory(i)}
                  className={`rounded-full px-5 py-2.5 text-xs font-bold tracking-wide transition-all duration-300 ${
                    activeCategory === i
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "bg-card border-2 border-border text-muted-foreground hover:text-foreground hover:border-primary/40 hover:-translate-y-0.5"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </motion.div>

            {/* Programs grid */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {programCategories[activeCategory].programs.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.name}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex flex-col rounded-2xl bg-card border-2 border-border p-8 md:p-10 transition-all duration-500 hover:border-primary/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/15"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 transition-all duration-300 group-hover:bg-primary/25 group-hover:shadow-lg group-hover:shadow-primary/15">
                        <Icon className="h-6 w-6 text-primary transition-all duration-300 group-hover:scale-110" />
                      </div>
                      <span className="text-[11px] font-bold text-primary/70 tracking-[0.2em] uppercase bg-primary/10 px-3 py-1 rounded-full">{p.duration}</span>
                    </div>

                    <h3 className="mt-7 text-2xl font-bold text-foreground">{p.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-primary">{p.subtitle}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

                    <div className="mt-8 flex items-center gap-3">
                      <Link to="/apply" className="flex-1">
                        <Button size="sm" className="w-full rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-md shadow-primary/20">
                          Apply Now
                        </Button>
                      </Link>
                      <Link to="/signup" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full rounded-full border-2 border-border font-semibold hover:border-primary/30">
                          Register
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Bottom CTA */}
        <section className="section-padding relative overflow-hidden" style={{
          background: 'linear-gradient(160deg, hsl(24 30% 95%) 0%, hsl(30 35% 93%) 50%, hsl(220 25% 94%) 100%)'
        }}>
          <div className="absolute top-[20%] left-0 w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[100px]" />
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-3xl rounded-2xl border-2 border-primary/20 bg-card p-10 text-center shadow-2xl shadow-primary/10 md:p-14"
            >
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Not sure which program fits?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground leading-relaxed">
                Talk to our team and we'll help you find the right expedition for your stage and goals.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/apply">
                  <Button size="lg" className="group h-14 rounded-full bg-primary px-10 text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/35">
                    Apply to Any Program <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline" size="lg" className="h-14 rounded-full px-10 text-base font-semibold border-2 border-border hover:border-primary/30">
                    Create Founder Account
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
