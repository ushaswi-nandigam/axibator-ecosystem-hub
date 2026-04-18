import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Rocket,
  Building2,
  Scale,
  PieChart,
  Wallet,
  Users,
  TrendingUp,
  Compass,
  ArrowRight,
  BookOpen,
  Sparkles,
  PlayCircle,
  Wrench,
  LayoutGrid,
  FileText,
  Megaphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ---------- Top-level Resource Segments ----------
const segments = [
  {
    id: "playbook",
    icon: BookOpen,
    label: "Startup Playbook",
    desc: "Step-by-step guides from idea to scale, built for Indian founders.",
    status: "Available",
    accent: "primary",
    href: "#playbook",
  },
  {
    id: "videos",
    icon: PlayCircle,
    label: "Knowledge Videos",
    desc: "Short, high-signal lessons from operators, mentors, and investors.",
    status: "Coming soon",
    accent: "accent",
    href: "#",
  },
  {
    id: "tools",
    icon: Wrench,
    label: "Tools & Templates",
    desc: "Cap tables, pitch decks, financial models, and legal templates.",
    status: "Coming soon",
    accent: "primary",
    href: "#",
  },
  {
    id: "frameworks",
    icon: LayoutGrid,
    label: "Frameworks",
    desc: "Mental models for product, GTM, hiring, and fundraising decisions.",
    status: "Coming soon",
    accent: "accent",
    href: "#",
  },
  {
    id: "reports",
    icon: FileText,
    label: "Reports & Insights",
    desc: "Sector deep-dives and ecosystem reports curated by Axibator.",
    status: "Coming soon",
    accent: "primary",
    href: "#",
  },
  {
    id: "community",
    icon: Megaphone,
    label: "Founder Stories",
    desc: "Real journeys, hard lessons, and tactical breakdowns from the field.",
    status: "Coming soon",
    accent: "accent",
    href: "#",
  },
];

// ---------- Startup Playbook content ----------
const learningPath = [
  { num: "01", title: "Start Here", desc: "Founder fundamentals", icon: Compass },
  { num: "02", title: "Company Setup", desc: "Incorporate & structure", icon: Building2 },
  { num: "03", title: "Legal & Compliance", desc: "Contracts & IP", icon: Scale },
  { num: "04", title: "Finance & Cap Table", desc: "Equity & ownership", icon: PieChart },
  { num: "05", title: "Fundraising", desc: "Investors & term sheets", icon: Wallet },
  { num: "06", title: "Hiring & ESOPs", desc: "Team & equity", icon: Users },
  { num: "07", title: "Growth & Scaling", desc: "Expand & operate", icon: TrendingUp },
];

const categories = [
  { icon: Rocket, emoji: "🚀", title: "Start Here", desc: "Basics for first-time founders — mindset, validation, and getting started." },
  { icon: Building2, emoji: "🏗️", title: "Company Setup", desc: "Business structure, registration, and co-founder agreements." },
  { icon: Scale, emoji: "⚖️", title: "Legal & Compliance", desc: "IP protection, contracts, and Indian startup laws." },
  { icon: PieChart, emoji: "📊", title: "Finance & Cap Table", desc: "Equity structure, dilution, and ownership management." },
  { icon: Wallet, emoji: "💰", title: "Fundraising", desc: "Valuation methods, term sheets, and investor outreach." },
  { icon: Users, emoji: "👥", title: "Hiring & ESOPs", desc: "Building your team and structuring employee equity." },
];

const featuredGuides = [
  { title: "Choosing the Right Business Structure", desc: "LLP vs Pvt Ltd vs OPC — which entity fits your Indian startup best?", tag: "Setup", readTime: "6 min read" },
  { title: "How Startup Valuation Works", desc: "Understand pre-money, post-money, and the methods investors actually use.", tag: "Fundraising", readTime: "8 min read" },
  { title: "What is a Cap Table?", desc: "A founder's guide to ownership, dilution, and managing your equity stack.", tag: "Finance", readTime: "5 min read" },
  { title: "Understanding Term Sheets", desc: "Decode liquidation preferences, anti-dilution, and the clauses that matter.", tag: "Fundraising", readTime: "10 min read" },
  { title: "ESOP Pool Design 101", desc: "How to size, allocate, and communicate ESOPs to attract top talent.", tag: "Hiring", readTime: "7 min read" },
  { title: "Founder Vesting Explained", desc: "Why every co-founder agreement needs vesting — and how to structure it.", tag: "Legal", readTime: "5 min read" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="hero-dark relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <div className="absolute top-[20%] left-[10%] w-[420px] h-[420px] rounded-full bg-primary/[0.08] blur-[120px]" />
        <div className="absolute bottom-[15%] right-[10%] w-[340px] h-[340px] rounded-full bg-accent/[0.06] blur-[100px]" />

        <div className="container relative text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label-light inline-flex items-center gap-2">
            <Sparkles size={14} /> Founder Resources
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-extrabold text-secondary-foreground leading-[1.05] mt-4"
          >
            The Founder's <span className="text-primary">Resource Hub</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-secondary-foreground/70 leading-relaxed"
          >
            Playbooks, videos, tools, and frameworks — everything Indian founders need, in one place.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="mt-10">
            <Button asChild variant="hero" size="xl">
              <a href="#segments">Explore Resources <ArrowRight /></a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Segments */}
      <section id="segments" className="section-padding section-light">
        <div className="container">
          <div className="section-header text-center max-w-2xl mx-auto">
            <span className="section-label">What's inside</span>
            <h2 className="section-title text-foreground">Resource Segments</h2>
            <p className="section-desc mx-auto">
              Six pillars of founder knowledge. We're rolling them out one by one — Startup Playbook is live now.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {segments.map((seg, i) => {
              const Icon = seg.icon;
              const isLive = seg.status === "Available";
              return (
                <motion.a
                  key={seg.id}
                  href={seg.href}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className={`group relative overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                    isLive
                      ? "bg-card border-primary/30 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10"
                      : "bg-card/60 border-border hover:border-border/80"
                  }`}
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/[0.04] group-hover:bg-primary/[0.08] transition-colors" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${seg.accent === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className={`text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full ${
                        isLive ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                      }`}>
                        {seg.status}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {seg.label}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{seg.desc}</p>
                    {isLive && (
                      <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold tracking-wide text-primary">
                        OPEN SEGMENT <ArrowRight size={14} />
                      </div>
                    )}
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Playbook intro */}
      <section id="playbook" className="section-padding section-light-alt">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <span className="section-label inline-flex items-center gap-2">
              <BookOpen size={14} /> Segment 01 · Live
            </span>
            <h2 className="section-title text-foreground">Axibator Startup Playbook</h2>
            <p className="section-desc">
              Everything you need to go from idea to funding — simplified for Indian founders. Step-by-step guides on company setup, legal, fundraising, and scaling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Learning Path */}
      <section id="learning-path" className="pb-28 md:pb-36 section-light-alt">
        <div className="container">
          <div className="mb-16 max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">The Learning Path</h3>
            <p className="mt-3 text-muted-foreground">
              Seven progressive stages — follow them in order or jump to what you need now.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-[7%] right-[7%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 lg:gap-3">
              {learningPath.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.button
                    key={step.num}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    custom={i}
                    className="group relative flex flex-col items-center text-center p-4 rounded-2xl hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl bg-background border border-border group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                      <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="mt-4 text-[10px] font-bold tracking-[0.2em] text-primary/70">STEP {step.num}</span>
                    <h4 className="mt-1 text-sm font-bold text-foreground">{step.title}</h4>
                    <p className="mt-1 text-xs text-muted-foreground leading-snug">{step.desc}</p>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding section-light">
        <div className="container">
          <div className="section-header text-center max-w-2xl mx-auto">
            <span className="section-label">Explore by topic</span>
            <h2 className="section-title text-foreground">Playbook Categories</h2>
            <p className="section-desc mx-auto">
              Curated collections covering every dimension of building a company.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.a
                  key={cat.title}
                  href="#"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30"
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/[0.04] group-hover:bg-primary/[0.08] transition-colors" />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">{cat.emoji}</div>
                      <Icon className="h-5 w-5 text-primary/40 group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-foreground group-hover:text-primary transition-colors">{cat.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{cat.desc}</p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold tracking-wide text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      EXPLORE <ArrowRight size={14} />
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="section-padding section-light-alt">
        <div className="container">
          <div className="section-header flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-xl">
              <span className="section-label">Editor's picks</span>
              <h2 className="section-title text-foreground">Featured Guides</h2>
              <p className="section-desc">Hand-picked deep dives written specifically for Indian founders.</p>
            </div>
            <Button variant="outline" size="lg" className="self-start md:self-end">
              <BookOpen /> View all guides
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGuides.map((guide, i) => (
              <motion.article
                key={guide.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="group flex flex-col rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30"
              >
                <div className="relative h-40 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, hsl(var(--primary)/0.2), transparent 60%)" }} />
                  <BookOpen className="h-10 w-10 text-primary/50 group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-primary px-2.5 py-1 rounded-full bg-primary/10">{guide.tag}</span>
                    <span className="text-xs text-muted-foreground">{guide.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">{guide.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{guide.desc}</p>
                  <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-2.5 transition-all">
                    Read more <ArrowRight size={14} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-secondary text-secondary-foreground px-8 py-16 md:px-16 md:py-20 text-center"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[140px]" />
            <div className="relative">
              <span className="section-label-light">Need a hand?</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-3">
                Building a startup?<br />
                <span className="text-primary">Don't do it alone.</span>
              </h2>
              <p className="mt-5 max-w-xl mx-auto text-secondary-foreground/70 text-lg">
                Get 1:1 guidance from mentors who've built and funded startups in India.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero" size="xl">
                  <Link to="/apply">Book a Consultation <ArrowRight /></Link>
                </Button>
                <Button asChild variant="hero-outline" size="xl">
                  <Link to="/programs">Explore Programs</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
