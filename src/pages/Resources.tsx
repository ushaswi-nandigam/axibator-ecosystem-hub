import { useEffect, useMemo, useState } from "react";
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
  Download,
  ExternalLink,
  Clock,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

// ---------- Top-level Resource Segments ----------
const segments = [
  {
    id: "playbook",
    icon: BookOpen,
    label: "Startup Playbook",
    desc: "Step-by-step guides from idea to scale, built for Indian founders.",
    accent: "primary" as const,
  },
  {
    id: "videos",
    icon: PlayCircle,
    label: "Knowledge Videos",
    desc: "Short, high-signal lessons from operators, mentors, and investors.",
    accent: "accent" as const,
  },
  {
    id: "tools",
    icon: Wrench,
    label: "Tools & Templates",
    desc: "Cap tables, pitch decks, financial models, and legal templates.",
    accent: "primary" as const,
  },
  {
    id: "frameworks",
    icon: LayoutGrid,
    label: "Frameworks",
    desc: "Mental models for product, GTM, hiring, and fundraising decisions.",
    accent: "accent" as const,
  },
  {
    id: "reports",
    icon: FileText,
    label: "Reports & Insights",
    desc: "Sector deep-dives and ecosystem reports curated by Axibator.",
    accent: "primary" as const,
  },
  {
    id: "community",
    icon: Megaphone,
    label: "Founder Stories",
    desc: "Real journeys, hard lessons, and tactical breakdowns from the field.",
    accent: "accent" as const,
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
  { icon: Rocket, title: "Start Here", desc: "Basics for first-time founders — mindset, validation, and getting started.", count: 12 },
  { icon: Building2, title: "Company Setup", desc: "Business structure, registration, and co-founder agreements.", count: 9 },
  { icon: Scale, title: "Legal & Compliance", desc: "IP protection, contracts, and Indian startup laws.", count: 11 },
  { icon: PieChart, title: "Finance & Cap Table", desc: "Equity structure, dilution, and ownership management.", count: 8 },
  { icon: Wallet, title: "Fundraising", desc: "Valuation methods, term sheets, and investor outreach.", count: 14 },
  { icon: Users, title: "Hiring & ESOPs", desc: "Building your team and structuring employee equity.", count: 7 },
];

type Guide = {
  title: string;
  desc: string;
  tag: string;
  readTime: string;
  body: string[];
};

const featuredGuides: Guide[] = [
  {
    title: "Choosing the Right Business Structure",
    desc: "LLP vs Pvt Ltd vs OPC — which entity fits your Indian startup best?",
    tag: "Setup",
    readTime: "6 min read",
    body: [
      "Private Limited Company (Pvt Ltd) is the default choice for venture-backed startups in India. It allows equity issuance, ESOPs, and is recognised by every institutional investor.",
      "LLP (Limited Liability Partnership) suits service businesses and bootstrapped teams who want lower compliance, but it cannot raise external equity easily.",
      "OPC (One Person Company) works for solo founders who want limited liability with minimal overhead, but converts to Pvt Ltd once you cross ₹2 Cr turnover or ₹50 L paid-up capital.",
      "Rule of thumb: if you plan to raise from VCs or issue ESOPs within 24 months, incorporate as Pvt Ltd from day one. Conversion later is expensive and slow.",
    ],
  },
  {
    title: "How Startup Valuation Works",
    desc: "Understand pre-money, post-money, and the methods investors actually use.",
    tag: "Fundraising",
    readTime: "8 min read",
    body: [
      "Pre-money valuation = company value before new investment. Post-money = pre-money + new capital raised. Your dilution = round size ÷ post-money.",
      "Early stage (pre-revenue) uses comparables, team strength, and market size. Seed in India typically prices between ₹15-60 Cr post-money.",
      "Series A onward shifts to revenue multiples (5-15x ARR for SaaS, 1-3x GMV for marketplaces) blended with growth rate and gross margin.",
      "Avoid optimising only for valuation. A clean ₹40 Cr round with a great investor beats a messy ₹80 Cr round with a misaligned one — every single time.",
    ],
  },
  {
    title: "What is a Cap Table?",
    desc: "A founder's guide to ownership, dilution, and managing your equity stack.",
    tag: "Finance",
    readTime: "5 min read",
    body: [
      "A cap table lists every shareholder, their share count, share class, and percentage ownership — fully diluted (assuming all options and convertibles convert).",
      "Track three numbers obsessively: founder ownership, ESOP pool size, and investor ownership. Healthy seed-stage founders retain 60-75% combined.",
      "Update the cap table after every grant, exit, or round. Use a single source of truth (spreadsheet or a tool like Qapita / Carta) — never trust memory.",
      "Investors will diligence your cap table. Errors here delay closes and erode trust. Get it right early, keep it clean always.",
    ],
  },
  {
    title: "Understanding Term Sheets",
    desc: "Decode liquidation preferences, anti-dilution, and the clauses that matter.",
    tag: "Fundraising",
    readTime: "10 min read",
    body: [
      "Liquidation preference: investors get their money back first on exit. 1x non-participating is standard and founder-friendly. Avoid participating preferences.",
      "Anti-dilution: protects investors if you raise a down round. Broad-based weighted average is fair; full ratchet is hostile — push back hard.",
      "Board composition: at seed, keep founder control (2 founders + 1 investor). Losing the board early limits every future decision.",
      "Pro-rata rights, drag-along, ROFR, and information rights are normal. Vesting acceleration on change of control is reasonable to ask for.",
    ],
  },
  {
    title: "ESOP Pool Design 101",
    desc: "How to size, allocate, and communicate ESOPs to attract top talent.",
    tag: "Hiring",
    readTime: "7 min read",
    body: [
      "Standard pool sizes: 8-10% at seed, 10-15% at Series A, refreshed each round. Pool is created pre-money, so it dilutes founders, not new investors.",
      "Allocation guideline: 0.5-2% for senior leaders, 0.1-0.5% for early engineers, 0.05-0.2% for mid-level hires. Calibrate to stage and market.",
      "Vesting: 4 years with a 1-year cliff is the global default. Indian founders should also document exercise window (ideally 5-10 years post-exit).",
      "Communicate ESOPs in rupee value, not just percentage. A clear story (\"this could be worth ₹X if we hit Y\") drives acceptance far better than jargon.",
    ],
  },
  {
    title: "Founder Vesting Explained",
    desc: "Why every co-founder agreement needs vesting — and how to structure it.",
    tag: "Legal",
    readTime: "5 min read",
    body: [
      "Founder vesting protects the company if a co-founder leaves early. Without it, a departing founder keeps their full equity — devastating for the rest.",
      "Standard structure: 4-year vesting with a 1-year cliff. Some founders give themselves credit for time already worked (e.g., 25% vested at signing).",
      "Use a Founder Restricted Stock Agreement. The company has the right to repurchase unvested shares at nominal value if the founder departs.",
      "Single-trigger acceleration on acquisition is common. Double-trigger (acquisition + termination) is more investor-friendly and increasingly standard.",
    ],
  },
];

// ---------- Knowledge Videos ----------
type Video = { title: string; speaker: string; duration: string; tag: string; url: string };
const videos: Video[] = [
  { title: "How to Pitch to Indian VCs", speaker: "Rajan Anandan, Peak XV", duration: "14 min", tag: "Fundraising", url: "https://www.youtube.com/results?search_query=how+to+pitch+indian+vc" },
  { title: "Building for Bharat: Lessons from Meesho", speaker: "Vidit Aatrey", duration: "22 min", tag: "Product", url: "https://www.youtube.com/results?search_query=meesho+vidit+aatrey" },
  { title: "From Zero to PMF in 12 Months", speaker: "Kunal Shah, CRED", duration: "18 min", tag: "Product", url: "https://www.youtube.com/results?search_query=kunal+shah+pmf" },
  { title: "Hiring Your First 10 Engineers", speaker: "Girish Mathrubootham", duration: "16 min", tag: "Hiring", url: "https://www.youtube.com/results?search_query=girish+mathrubootham+hiring" },
  { title: "GTM for Indian SaaS", speaker: "Suresh Sambandam, Kissflow", duration: "20 min", tag: "GTM", url: "https://www.youtube.com/results?search_query=indian+saas+gtm" },
  { title: "Surviving the Funding Winter", speaker: "Anand Daniel, Accel", duration: "12 min", tag: "Fundraising", url: "https://www.youtube.com/results?search_query=funding+winter+india+startups" },
];

// ---------- Tools & Templates ----------
type Tool = { title: string; desc: string; format: string; url: string };
const tools: Tool[] = [
  { title: "Cap Table Template", desc: "Track founder, ESOP, and investor equity through every round.", format: "Google Sheets", url: "https://docs.google.com/spreadsheets/d/1cN6tGqV2Z8M0nh-0YHc_6QnFc5rJfP0o/copy" },
  { title: "Pitch Deck Template (Seed)", desc: "12-slide deck used by 50+ funded Indian startups.", format: "Google Slides", url: "https://docs.google.com/presentation/d/1FYFb7NEv6cT4r_T3J6jLqJlQpL2X_jw5/copy" },
  { title: "SaaS Financial Model", desc: "3-year MRR, ARR, churn, and burn projections.", format: "Excel", url: "https://www.bessemervp.com/atlas/saas-financial-model" },
  { title: "Co-founder Agreement", desc: "Vesting, IP assignment, and equity-split template.", format: "PDF", url: "https://www.indiafilings.com/learn/co-founders-agreement-template/" },
  { title: "ESOP Policy Template", desc: "Plan document, grant letter, and exercise mechanics.", format: "Word", url: "https://www.qapita.com/blog/esop-policy-template" },
  { title: "Term Sheet Generator", desc: "Generate a founder-friendly seed term sheet in minutes.", format: "Web tool", url: "https://www.ycombinator.com/documents" },
];

// ---------- Frameworks ----------
type Framework = { title: string; desc: string; tag: string; body: string[] };
const frameworks: Framework[] = [
  {
    title: "Sean Ellis PMF Test",
    desc: "Survey users — if 40%+ would be \"very disappointed\" without you, you have PMF.",
    tag: "Product",
    body: [
      "Send a 4-question survey to active users: How disappointed would you be if you could no longer use this product? (Very / Somewhat / Not / N/A)",
      "Threshold: 40% answering \"Very disappointed\" indicates strong product-market fit.",
      "Below 40%: focus on the segment that loves you most and double down on their use case.",
      "Run this every quarter. PMF is not permanent — markets shift, and so does the answer.",
    ],
  },
  {
    title: "Jobs-To-Be-Done (JTBD)",
    desc: "Customers don't buy products — they hire them to do a job.",
    tag: "Product",
    body: [
      "Frame every feature decision around: \"When [situation], I want to [motivation], so I can [outcome].\"",
      "Interview 10 recent customers. Map the job, the existing alternatives, and the moment of switch.",
      "Build for the job, not the persona. The same person hires different products for different jobs.",
    ],
  },
  {
    title: "Bullseye Framework (Traction)",
    desc: "19 channels — pick 3, test, double down on the one that works.",
    tag: "GTM",
    body: [
      "List all 19 channels (SEO, paid, content, partnerships, sales, etc.). Brainstorm a cheap test for each.",
      "Pick the 3 most promising. Run small experiments with a clear success metric.",
      "Double down on the winner. Most startups grow on one dominant channel — find yours fast.",
    ],
  },
  {
    title: "AARRR (Pirate Metrics)",
    desc: "Acquisition, Activation, Retention, Referral, Revenue — measure the funnel.",
    tag: "Growth",
    body: [
      "Acquisition: how do users find you? Activation: do they have a great first experience?",
      "Retention: do they come back? Referral: do they tell others? Revenue: do they pay?",
      "Fix bottom-up. Retention before acquisition. A leaky bucket grows nothing.",
    ],
  },
  {
    title: "RICE Prioritisation",
    desc: "Score features by Reach × Impact × Confidence ÷ Effort.",
    tag: "Product",
    body: [
      "Reach: users affected per quarter. Impact: 0.25 / 0.5 / 1 / 2 / 3 scale. Confidence: 50% / 80% / 100%.",
      "Effort: person-months. Score = (R × I × C) / E. Sort the backlog by score.",
      "Use it to defend prioritisation in roadmap meetings. Removes politics, adds data.",
    ],
  },
  {
    title: "North Star Metric",
    desc: "One number that captures the core value you deliver to users.",
    tag: "Growth",
    body: [
      "Pick the metric most predictive of long-term revenue: nights booked (Airbnb), messages sent (WhatsApp), GMV (marketplaces).",
      "Should be a leading indicator, customer-centric, and measurable weekly.",
      "Align every team around moving it. Avoid vanity metrics — pageviews and signups don't pay bills.",
    ],
  },
];

// ---------- Reports ----------
type Report = { title: string; desc: string; publisher: string; year: string; url: string };
const reports: Report[] = [
  { title: "India Venture Capital Report 2024", desc: "Bain & Company's annual deep dive on the Indian VC landscape.", publisher: "Bain & Company", year: "2024", url: "https://www.bain.com/insights/india-venture-capital-report-2024/" },
  { title: "Indian SaaS Report", desc: "State of Indian SaaS — ARR distribution, funding, and benchmarks.", publisher: "SaaSBOOMi", year: "2024", url: "https://saasboomi.com/" },
  { title: "Startup India Annual Report", desc: "Government data on DPIIT-recognised startups and ecosystem trends.", publisher: "Startup India", year: "2024", url: "https://www.startupindia.gov.in/content/sih/en/reports.html" },
  { title: "Inc42 State of Indian Startup Ecosystem", desc: "Funding, sector breakdowns, and unicorn tracking across India.", publisher: "Inc42", year: "2024", url: "https://inc42.com/reports/" },
  { title: "Tracxn Geo Annual Report — India", desc: "Comprehensive funding data, exits, and sector heatmaps.", publisher: "Tracxn", year: "2024", url: "https://tracxn.com/explore/Indian-Tech-Startups" },
  { title: "NASSCOM Tech Startup Report", desc: "Deep-tech, AI, and emerging tech trends in Indian startups.", publisher: "NASSCOM", year: "2024", url: "https://nasscom.in/knowledge-center" },
];

// ---------- Founder Stories ----------
type Story = { founder: string; company: string; quote: string; lesson: string; tag: string };
const stories: Story[] = [
  { founder: "Kunal Shah", company: "CRED", quote: "I built FreeCharge thinking I knew payments. CRED taught me I knew nothing about trust.", lesson: "Distribution beats product. Trust beats distribution.", tag: "Fintech" },
  { founder: "Falguni Nayar", company: "Nykaa", quote: "Profitability isn't a feature — it's the foundation. We were profitable before we were big.", lesson: "Build a real business, not a fundraising machine.", tag: "Commerce" },
  { founder: "Bhavish Aggarwal", company: "Ola", quote: "We hired too fast in 2015. The cleanup took 3 years. Hire when it hurts not to.", lesson: "Stay lean longer than feels comfortable.", tag: "Mobility" },
  { founder: "Nithin Kamath", company: "Zerodha", quote: "We never raised a rupee. Constraints forced us to build only what mattered.", lesson: "Bootstrapping is a strategy, not a fallback.", tag: "Fintech" },
  { founder: "Vidit Aatrey", company: "Meesho", quote: "Bharat doesn't browse — it discovers through people it trusts. Build for that reality.", lesson: "Design for your real user, not the user you imagined.", tag: "Commerce" },
  { founder: "Aman Gupta", company: "boAt", quote: "We outsourced manufacturing, owned the brand. Capital efficiency built the empire.", lesson: "Asset-light wins in consumer until scale demands otherwise.", tag: "D2C" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const navItems = [
  { id: "segments", label: "Overview" },
  { id: "playbook", label: "Playbook" },
  { id: "videos", label: "Videos" },
  { id: "tools", label: "Tools" },
  { id: "frameworks", label: "Frameworks" },
  { id: "reports", label: "Reports" },
  { id: "community", label: "Stories" },
];

const Resources = () => {
  const [activeId, setActiveId] = useState("segments");
  const [reader, setReader] = useState<{ open: boolean; type: "guide" | "framework" | null; index: number }>({
    open: false,
    type: null,
    index: 0,
  });

  const openGuide = (i: number) => setReader({ open: true, type: "guide", index: i });
  const openFramework = (i: number) => setReader({ open: true, type: "framework", index: i });

  const readerContent = useMemo(() => {
    if (!reader.type) return null;
    if (reader.type === "guide") {
      const g = featuredGuides[reader.index];
      return { title: g.title, subtitle: `${g.tag} · ${g.readTime}`, body: g.body };
    }
    const f = frameworks[reader.index];
    return { title: f.title, subtitle: `${f.tag} framework`, body: f.body };
  }, [reader]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleJump = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const scrollToSegment = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top, behavior: "smooth" });
  };

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
            <Button variant="hero" size="xl" onClick={(e) => handleJump(e as unknown as React.MouseEvent<HTMLAnchorElement>, "segments")}>
              Explore Resources <ArrowRight />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Sticky in-page nav */}
      <div className="sticky top-16 z-30 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="container">
          <nav aria-label="Resource segments" className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleJump(e, item.id)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold tracking-wide uppercase transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Segments overview */}
      <section id="segments" className="section-padding section-light">
        <div className="container">
          <div className="section-header text-center max-w-2xl mx-auto">
            <span className="section-label">What's inside</span>
            <h2 className="section-title text-foreground">Resource Segments</h2>
            <p className="section-desc mx-auto">
              Six pillars of founder knowledge — explore each section below.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {segments.map((seg, i) => {
              const Icon = seg.icon;
              return (
                <motion.button
                  key={seg.id}
                  type="button"
                  onClick={() => scrollToSegment(seg.id)}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/[0.04] group-hover:bg-primary/[0.08] transition-colors" />
                  <div className="relative">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${seg.accent === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-foreground group-hover:text-primary transition-colors">{seg.label}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{seg.desc}</p>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold tracking-wide text-primary">
                      EXPLORE <ArrowRight size={14} />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Playbook intro */}
      <section id="playbook" className="section-padding section-light-alt">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl">
            <span className="section-label inline-flex items-center gap-2">
              <BookOpen size={14} /> Segment 01
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
            <p className="mt-3 text-muted-foreground">Seven progressive stages — follow them in order or jump to what you need now.</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-[7%] right-[7%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 lg:gap-3">
              {learningPath.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.num}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    custom={i}
                    className="group relative flex flex-col items-center text-center p-4 rounded-2xl"
                  >
                    <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl bg-background border border-border">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <span className="mt-4 text-[10px] font-bold tracking-[0.2em] text-primary/70">STEP {step.num}</span>
                    <h4 className="mt-1 text-sm font-bold text-foreground">{step.title}</h4>
                    <p className="mt-1 text-xs text-muted-foreground leading-snug">{step.desc}</p>
                  </motion.div>
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
            <p className="section-desc mx-auto">Curated collections covering every dimension of building a company.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30"
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/[0.04] group-hover:bg-primary/[0.08] transition-colors" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                        {cat.count} guides
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-foreground">{cat.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{cat.desc}</p>
                  </div>
                </motion.div>
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGuides.map((guide, i) => (
              <motion.button
                key={guide.title}
                type="button"
                onClick={() => openGuide(i)}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="group flex flex-col text-left rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30"
              >
                <div className="relative h-40 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, hsl(var(--primary)/0.2), transparent 60%)" }} />
                  <BookOpen className="h-10 w-10 text-primary/50 group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-primary px-2.5 py-1 rounded-full bg-primary/10">{guide.tag}</span>
                    <span className="text-xs text-muted-foreground inline-flex items-center gap-1"><Clock size={12} /> {guide.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">{guide.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{guide.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-2.5 transition-all">
                    Read guide <ArrowRight size={14} />
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Videos */}
      <section id="videos" className="section-padding section-light">
        <div className="container">
          <div className="section-header text-center max-w-2xl mx-auto">
            <span className="section-label inline-flex items-center gap-2"><PlayCircle size={14} /> Segment 02</span>
            <h2 className="section-title text-foreground">Knowledge Videos</h2>
            <p className="section-desc mx-auto">Short, high-signal lessons from operators, mentors, and investors who've built in India.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v, i) => (
              <motion.a
                key={v.title}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="group flex flex-col rounded-2xl bg-card border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30"
              >
                <div className="relative aspect-video bg-gradient-to-br from-primary/15 via-accent/10 to-primary/5 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground group-hover:scale-110 transition-transform shadow-lg shadow-primary/30">
                    <PlayCircle className="h-8 w-8" />
                  </div>
                  <span className="absolute bottom-3 right-3 text-[10px] font-bold tracking-wide bg-background/90 text-foreground px-2 py-1 rounded">
                    {v.duration}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-primary">{v.tag}</span>
                  <h3 className="mt-2 text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.speaker}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Templates */}
      <section id="tools" className="section-padding section-light-alt">
        <div className="container">
          <div className="section-header text-center max-w-2xl mx-auto">
            <span className="section-label inline-flex items-center gap-2"><Wrench size={14} /> Segment 03</span>
            <h2 className="section-title text-foreground">Tools & Templates</h2>
            <p className="section-desc mx-auto">Battle-tested templates and tools founders actually use to ship faster.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((t, i) => (
              <motion.a
                key={t.title}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="group flex flex-col rounded-2xl bg-card border border-border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Download className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full bg-muted text-muted-foreground">{t.format}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground group-hover:text-primary transition-colors">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{t.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold tracking-wide text-primary group-hover:gap-2.5 transition-all">
                  GET TEMPLATE <ExternalLink size={12} />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section id="frameworks" className="section-padding section-light">
        <div className="container">
          <div className="section-header text-center max-w-2xl mx-auto">
            <span className="section-label inline-flex items-center gap-2"><LayoutGrid size={14} /> Segment 04</span>
            <h2 className="section-title text-foreground">Frameworks</h2>
            <p className="section-desc mx-auto">Mental models for product, GTM, and decision-making — from operators who've shipped at scale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frameworks.map((f, i) => (
              <motion.button
                key={f.title}
                type="button"
                onClick={() => openFramework(i)}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="group text-left flex flex-col rounded-2xl bg-card border border-border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <LayoutGrid className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary">{f.tag}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground group-hover:text-primary transition-colors">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{f.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold tracking-wide text-primary group-hover:gap-2.5 transition-all">
                  LEARN FRAMEWORK <ArrowRight size={14} />
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Reports */}
      <section id="reports" className="section-padding section-light-alt">
        <div className="container">
          <div className="section-header text-center max-w-2xl mx-auto">
            <span className="section-label inline-flex items-center gap-2"><FileText size={14} /> Segment 05</span>
            <h2 className="section-title text-foreground">Reports & Insights</h2>
            <p className="section-desc mx-auto">Curated industry reports — funding data, sector deep-dives, and ecosystem trends.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reports.map((r, i) => (
              <motion.a
                key={r.title}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="group flex items-start gap-5 rounded-2xl bg-card border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30"
              >
                <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FileText className="h-7 w-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-[11px] font-bold tracking-wide text-muted-foreground uppercase">
                    <span>{r.publisher}</span>
                    <span className="text-border">·</span>
                    <span>{r.year}</span>
                  </div>
                  <h3 className="mt-1 text-lg font-bold text-foreground group-hover:text-primary transition-colors">{r.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold tracking-wide text-primary group-hover:gap-2.5 transition-all">
                    READ REPORT <ExternalLink size={12} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Stories */}
      <section id="community" className="section-padding section-light">
        <div className="container">
          <div className="section-header text-center max-w-2xl mx-auto">
            <span className="section-label inline-flex items-center gap-2"><Megaphone size={14} /> Segment 06</span>
            <h2 className="section-title text-foreground">Founder Stories</h2>
            <p className="section-desc mx-auto">Hard-won lessons from founders who've built India's most loved companies.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((s, i) => (
              <motion.div
                key={s.founder}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="group flex flex-col rounded-2xl bg-card border border-border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30"
              >
                <Quote className="h-7 w-7 text-primary/40" />
                <p className="mt-4 text-base text-foreground leading-relaxed font-medium">"{s.quote}"</p>
                <div className="mt-6 pt-5 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-foreground">{s.founder}</div>
                      <div className="text-xs text-muted-foreground">{s.company}</div>
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary">{s.tag}</span>
                  </div>
                  <p className="mt-4 text-xs text-muted-foreground italic">Lesson: {s.lesson}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-light-alt">
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

      {/* Reader Dialog */}
      <Dialog open={reader.open} onOpenChange={(open) => setReader((r) => ({ ...r, open }))}>
        <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-y-auto">
          {readerContent && (
            <>
              <DialogHeader>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">{readerContent.subtitle}</span>
                <DialogTitle className="text-2xl md:text-3xl leading-tight">{readerContent.title}</DialogTitle>
                <DialogDescription className="sr-only">Full content for {readerContent.title}</DialogDescription>
              </DialogHeader>
              <div className="space-y-4 pt-2">
                {readerContent.body.map((p, idx) => (
                  <p key={idx} className="text-[15px] leading-relaxed text-foreground/85">{p}</p>
                ))}
              </div>
              <div className="pt-4 mt-4 border-t border-border flex flex-col sm:flex-row gap-3">
                <Button
                  variant="hero"
                  className="flex-1"
                  onClick={() => {
                    toast.success("Saved to your reading list.");
                    setReader((r) => ({ ...r, open: false }));
                  }}
                >
                  Save to reading list
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <Link to="/apply">Talk to a mentor</Link>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Resources;
