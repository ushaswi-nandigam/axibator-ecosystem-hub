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
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
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

// ---------- Rich content block type ----------
type Block =
  | { kind: "p"; text: string }
  | { kind: "h"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "steps"; items: string[] }
  | { kind: "tip"; text: string }
  | { kind: "warn"; text: string }
  | { kind: "example"; title: string; text: string };

// ---------- Top-level Resource Segments ----------
const segments = [
  {
    id: "playbook",
    icon: BookOpen,
    label: "Startup Playbook",
    desc: "Step-by-step guides that walk you from idea validation to a funded, scaling company — written specifically for first-time Indian founders.",
    accent: "primary" as const,
  },
  {
    id: "videos",
    icon: PlayCircle,
    label: "Knowledge Videos",
    desc: "Curated talks and breakdowns from Indian operators, mentors, and investors — short, dense, and packed with real lessons.",
    accent: "accent" as const,
  },
  {
    id: "tools",
    icon: Wrench,
    label: "Tools & Templates",
    desc: "Battle-tested cap tables, pitch decks, financial models, legal templates, and ESOP plans you can copy and adapt today.",
    accent: "primary" as const,
  },
  {
    id: "frameworks",
    icon: LayoutGrid,
    label: "Frameworks",
    desc: "Mental models for product, GTM, hiring, and fundraising — the same frameworks used at YC, Sequoia, and India's best startups.",
    accent: "accent" as const,
  },
  {
    id: "reports",
    icon: FileText,
    label: "Reports & Insights",
    desc: "Sector deep-dives, funding trackers, and ecosystem reports — the data you need to size markets and brief investors.",
    accent: "primary" as const,
  },
  {
    id: "community",
    icon: Megaphone,
    label: "Founder Stories",
    desc: "Unfiltered journeys from founders who built India's most loved companies — the wins, the cleanups, and the lessons that shaped them.",
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

type CategoryGuide = { title: string; readTime: string; summary: string };
type Category = {
  icon: typeof Rocket;
  title: string;
  desc: string;
  guides: CategoryGuide[];
  // Optional index into featuredGuides — if set, that guide opens the full long-form reader
  featuredIndex?: number;
};

const categories: Category[] = [
  {
    icon: Rocket,
    title: "Start Here",
    desc: "Mindset, idea validation, and the first 90 days. How to test whether your idea deserves your next 5 years.",
    guides: [
      { title: "The Founder Mindset", readTime: "6 min", summary: "Why building a startup is closer to a 7-year marathon than a sprint — and how to mentally prepare for the first 18 months." },
      { title: "Picking an Idea Worth 5 Years", readTime: "8 min", summary: "The four-question filter (market, founder fit, urgency, defensibility) every idea must pass before you commit." },
      { title: "How to Validate an Idea in 30 Days", readTime: "10 min", summary: "Customer discovery interviews, problem-solution fit tests, and the smallest valid experiment to run before writing code." },
      { title: "Finding Your First 10 Customers", readTime: "9 min", summary: "Manual outreach, founder-led sales, and turning early users into product believers." },
      { title: "Solo Founder vs Co-founder", readTime: "7 min", summary: "When to go solo, how to find a co-founder, and the dangers of forced partnerships." },
      { title: "Co-founder Equity Splits", readTime: "8 min", summary: "Why 50/50 isn't always fair, the slicing-pie method, and frameworks for splitting equity without resentment." },
      { title: "Naming Your Startup", readTime: "5 min", summary: "Domain availability, trademark conflicts, MCA name approval, and what makes a name actually memorable." },
      { title: "Your First 90 Days", readTime: "9 min", summary: "A week-by-week operating plan for the first quarter — what to build, who to talk to, what to ignore." },
      { title: "Killing Ideas Without Regret", readTime: "6 min", summary: "How to recognise when an idea isn't working, and the structured kill-criteria to set before you start." },
      { title: "Pre-incorporation Checklist", readTime: "5 min", summary: "The 12 things to do before you spend a rupee on registration." },
      { title: "Building in Public vs Stealth", readTime: "6 min", summary: "When transparency accelerates traction and when it leaks moat — a practical guide." },
      { title: "Avoiding First-Time Founder Mistakes", readTime: "8 min", summary: "The 10 mistakes 80% of first-time founders make in year one — and how to sidestep each." },
    ],
  },
  {
    icon: Building2,
    title: "Company Setup",
    desc: "Choosing an entity, registering with MCA, opening a current account, and structuring co-founder equity correctly.",
    featuredIndex: 0,
    guides: [
      { title: "Choosing the Right Business Structure", readTime: "12 min", summary: "LLP vs Pvt Ltd vs OPC — the entity you pick on day one shapes every fundraise that follows. Read the full guide." },
      { title: "Step-by-Step Pvt Ltd Incorporation", readTime: "10 min", summary: "DSC, DIN, name approval, SPICe+, AOA, MOA — every form, every fee, every timeline explained." },
      { title: "Opening a Startup Bank Account", readTime: "6 min", summary: "Comparing ICICI iStartup, HDFC SmartUp, Kotak 811, Axis Easy Access — features, fees, and KYC reality." },
      { title: "Founder Restricted Stock Agreement", readTime: "9 min", summary: "How to structure founder vesting at incorporation and what every clause actually means." },
      { title: "DPIIT Recognition & Startup India Benefits", readTime: "7 min", summary: "Tax holidays, IP fast-track, government tenders — the real benefits and how to apply." },
      { title: "Registered Office Setup", readTime: "5 min", summary: "Virtual offices, co-working spaces, home address — what's compliant and what triggers ROC notices." },
      { title: "GST Registration for Startups", readTime: "8 min", summary: "When to register, voluntary vs mandatory, composition scheme, and the input tax credit playbook." },
      { title: "PAN, TAN, and PF/ESIC Registration", readTime: "6 min", summary: "The post-incorporation registration sequence and which ones to delay until you actually need them." },
      { title: "Co-founder Agreement Essentials", readTime: "9 min", summary: "Vesting, IP assignment, exit clauses, dispute resolution — the 8 sections every agreement must cover." },
    ],
  },
  {
    icon: Scale,
    title: "Legal & Compliance",
    desc: "IP assignment, NDAs, vendor contracts, GST, ROC filings, and the compliance calendar every Indian startup needs.",
    guides: [
      { title: "IP Assignment for Founders & Employees", readTime: "8 min", summary: "Why every contributor must assign IP to the company — and the clause that prevents future ownership disputes." },
      { title: "NDAs That Actually Protect You", readTime: "6 min", summary: "Mutual vs one-way NDAs, enforceability in Indian courts, and when an NDA scares away the wrong investors." },
      { title: "Trademark Registration in India", readTime: "9 min", summary: "Class selection, search, filing, opposition handling, and the 18-month timeline most founders underestimate." },
      { title: "Patent Basics for Startups", readTime: "10 min", summary: "Patentable vs non-patentable, provisional applications, PCT route, and when patents actually create defensibility." },
      { title: "Vendor & Customer Contract Templates", readTime: "7 min", summary: "Master Service Agreements, Statements of Work, payment terms, and indemnity clauses that survive disputes." },
      { title: "Privacy Policy & Terms of Use", readTime: "6 min", summary: "DPDP Act 2023 compliance, what to include, and the legal exposure of using a generic template." },
      { title: "Annual ROC Compliance Calendar", readTime: "5 min", summary: "MGT-7, AOC-4, DIR-3 KYC, DPT-3 — every annual filing, due date, and penalty for missing it." },
      { title: "Statutory Audit & Tax Filings", readTime: "7 min", summary: "When audit is mandatory, choosing an auditor, ITR-6, Form 3CD — the annual finance compliance loop." },
      { title: "Employment Contracts & Offer Letters", readTime: "8 min", summary: "Probation, notice periods, non-compete, confidentiality — the clauses that hold up in Indian labour courts." },
      { title: "Handling Investor Due Diligence", readTime: "9 min", summary: "The 80-document checklist VCs request and how to prepare a clean data room in under a week." },
      { title: "FEMA & Foreign Investment Compliance", readTime: "10 min", summary: "FCGPR filings, automatic vs approval route, and the rules for accepting cheques from foreign investors." },
    ],
  },
  {
    icon: PieChart,
    title: "Finance & Cap Table",
    desc: "Modelling burn, building a cap table that survives 5 rounds, and understanding dilution math before investors do.",
    featuredIndex: 2,
    guides: [
      { title: "What is a Cap Table?", readTime: "11 min", summary: "Complete guide to ownership, dilution, ESOPs, convertibles, and keeping your equity stack clean. Read the full guide." },
      { title: "Modelling Your Burn & Runway", readTime: "8 min", summary: "Monthly burn, runway months, the 18-month rule, and the spreadsheet structure investors expect to see." },
      { title: "Reading a P&L, Balance Sheet, and Cash Flow", readTime: "10 min", summary: "Founder-friendly walkthrough of the three statements and what each one tells you about company health." },
      { title: "SaaS Unit Economics: CAC, LTV, Payback", readTime: "9 min", summary: "How to calculate CAC properly, why LTV is often inflated, and the payback ratios that signal a sustainable business." },
      { title: "Pricing Models for Indian SaaS", readTime: "8 min", summary: "Per-seat, usage-based, tiered, and freemium — when each works and the pricing pages that convert best." },
      { title: "Setting up Accounting from Day One", readTime: "6 min", summary: "Zoho Books vs QuickBooks vs Tally, chart of accounts, and the bookkeeping discipline that prevents audit pain." },
      { title: "Founder Salary & Tax Optimisation", readTime: "7 min", summary: "How much to pay yourself, salary vs dividend, and structuring compensation tax-efficiently." },
      { title: "Convertible Notes vs SAFEs vs CCDs", readTime: "9 min", summary: "Indian-law constraints on SAFEs, CCD as the workaround, and the math behind valuation caps and discounts." },
    ],
  },
  {
    icon: Wallet,
    title: "Fundraising",
    desc: "From angel cheques to Series A — valuations, SAFEs, term sheets, due diligence, and closing without surprises.",
    featuredIndex: 1,
    guides: [
      { title: "How Startup Valuation Actually Works", readTime: "14 min", summary: "Pre-money, post-money, dilution math, and the methods investors use at every stage. Read the full guide." },
      { title: "Decoding Term Sheets", readTime: "15 min", summary: "Liquidation preferences, anti-dilution, board control — what's standard, what's hostile. Read the full guide." },
      { title: "Building Your Pitch Deck", readTime: "10 min", summary: "The 12-slide structure that works, what each slide must answer, and the slides every Indian VC actually reads first." },
      { title: "Mastering the 3-Minute Pitch", readTime: "7 min", summary: "Hook, problem, solution, traction, ask — the structure for cold meetings and demo days." },
      { title: "Building Your Investor List", readTime: "8 min", summary: "How to research, qualify, and warm-intro your way to 50 relevant investors without wasting six months." },
      { title: "Running a Tight Fundraise Process", readTime: "9 min", summary: "Parallel meetings, momentum management, and creating the competitive tension that closes rounds in 6 weeks." },
      { title: "What Indian Angels Actually Want", readTime: "8 min", summary: "Cheque size, follow-on behaviour, value-add expectations, and the syndicate landscape from AngelList to LetsVenture." },
      { title: "Pre-seed vs Seed vs Series A in India", readTime: "9 min", summary: "Stage definitions, milestone expectations, typical round sizes, and the active investor list at each stage." },
      { title: "Handling Investor Rejection", readTime: "5 min", summary: "Why most rejections aren't about you, what to learn from each one, and how to keep the no's productive." },
      { title: "Bridge Rounds and Down Rounds", readTime: "8 min", summary: "When to take a bridge, structuring it cleanly, and surviving a down round without destroying the cap table." },
      { title: "Government Grants & Schemes", readTime: "7 min", summary: "SISFS, SIDBI Fund of Funds, BIRAC, MeitY grants — non-dilutive capital sources most founders miss." },
      { title: "Closing Mechanics: From Term Sheet to Money", readTime: "10 min", summary: "Definitive agreements, conditions precedent, share allotment, FCGPR — the post-term-sheet workflow that delays closes." },
      { title: "Investor Updates That Build Trust", readTime: "6 min", summary: "Monthly format, what to share, what to hide, and turning updates into your follow-on funding pipeline." },
      { title: "Saying No to the Wrong Money", readTime: "7 min", summary: "Red flags in investor behaviour, why a bad investor is worse than no investor, and walk-away criteria." },
    ],
  },
  {
    icon: Users,
    title: "Hiring & ESOPs",
    desc: "Designing your ESOP pool, writing offer letters, vesting structures, and hiring playbooks for your first 25 employees.",
    featuredIndex: 4,
    guides: [
      { title: "ESOP Pool Design 101", readTime: "13 min", summary: "Sizing, allocation benchmarks, vesting, exercise windows, and communication. Read the full guide." },
      { title: "Founder Vesting Explained", readTime: "9 min", summary: "Why every co-founder needs vesting and how to structure it correctly. Read the full guide." },
      { title: "Writing Job Descriptions That Attract A-Players", readTime: "6 min", summary: "Outcomes vs responsibilities, the 'must-have' filter, and JD structures that convert applicants 3x better." },
      { title: "Sourcing Your First 10 Engineers", readTime: "9 min", summary: "Cuvette, CutShort, AngelList, LinkedIn outbound — the channels that work when you have no employer brand." },
      { title: "Structured Interviewing & Hiring Scorecards", readTime: "8 min", summary: "The Topgrading method adapted for startups — scorecards, reference calls, and reducing hiring mistakes by 70%." },
      { title: "Compensation Benchmarks (India, 2024)", readTime: "7 min", summary: "Cash and equity ranges by role, stage, and city — based on actual offers from 200+ funded Indian startups." },
      { title: "Building Your First Sales Team", readTime: "10 min", summary: "When to hire your first AE, founder-led sales handoff, comp plans, and the 90-day ramp." },
    ],
  },
];

type Guide = {
  title: string;
  desc: string;
  tag: string;
  readTime: string;
  body: Block[];
};

const featuredGuides: Guide[] = [
  {
    title: "Choosing the Right Business Structure in India",
    desc: "LLP vs Pvt Ltd vs OPC — the entity you pick on day one will shape every fundraise, hire, and exit that follows.",
    tag: "Setup",
    readTime: "12 min read",
    body: [
      { kind: "p", text: "The legal structure you choose for your startup is one of the first irreversible decisions you'll make. It dictates how you raise capital, issue ESOPs, file taxes, distribute profits, and eventually exit. Most first-time founders treat it as a paperwork formality — and pay for that mistake later when an investor asks them to convert mid-fundraise, costing months and lakhs in fees." },
      { kind: "p", text: "In India, you have four practical options: a Sole Proprietorship, a Limited Liability Partnership (LLP), a One Person Company (OPC), or a Private Limited Company (Pvt Ltd). Each has a specific shape, cost, and ceiling. Here is how to pick the right one without regret." },

      { kind: "h", text: "Private Limited Company (Pvt Ltd) — the venture default" },
      { kind: "p", text: "If you intend to raise external equity from angels or VCs, issue ESOPs to employees, or eventually exit through acquisition or IPO, a Pvt Ltd is the only structure that works smoothly. Every term sheet, due-diligence checklist, and ROC form in the Indian VC ecosystem assumes you are a Pvt Ltd. Investors will not write a cheque to an LLP, full stop." },
      { kind: "list", items: [
        "Minimum 2 shareholders, minimum 2 directors (one must be an Indian resident).",
        "Allows multiple share classes (equity, preference, CCPS) — required for SAFEs and priced rounds.",
        "Compliance load: annual ROC filing, statutory audit, board meetings every quarter.",
        "Setup cost: ₹8,000 – ₹15,000. Recurring compliance: ₹25,000 – ₹60,000 per year.",
      ]},

      { kind: "h", text: "Limited Liability Partnership (LLP)" },
      { kind: "p", text: "An LLP gives you limited liability and pass-through taxation with much lower compliance than a Pvt Ltd. It works beautifully for service businesses, consulting practices, and bootstrapped product companies that will never raise institutional capital. The catch: you cannot issue shares, ESOPs, or convertible instruments. Converting an LLP to a Pvt Ltd later is legally possible but operationally painful — you re-do contracts, bank accounts, GST registration, and investor diligence from scratch." },

      { kind: "h", text: "One Person Company (OPC)" },
      { kind: "p", text: "An OPC is a Pvt Ltd with a single shareholder. It suits solo founders who want limited liability while they validate the idea. The day you cross ₹2 Cr in turnover or ₹50 L in paid-up capital, you must convert to a Pvt Ltd. If you already know you'll bring in a co-founder within 12 months, skip OPC and start with a Pvt Ltd — the conversion overhead isn't worth it." },

      { kind: "h", text: "Sole Proprietorship" },
      { kind: "p", text: "Cheapest and fastest to start, but legally you and the business are the same person. Unlimited personal liability, no equity story, no investor will take you seriously. Use it only for freelance work or a side project that may never become a real company." },

      { kind: "tip", text: "If there is even a 30% chance you'll raise venture capital within the next 24 months, incorporate as a Pvt Ltd from day one. The ₹40,000 you save by starting as an LLP will cost you ₹4–6 lakhs and three months of investor delay later." },

      { kind: "h", text: "The 60-second decision tree" },
      { kind: "steps", items: [
        "Will you raise from VCs or issue ESOPs? → Pvt Ltd.",
        "Service business, no fundraising plans, want low compliance? → LLP.",
        "Solo founder, validating the idea, plan to bring co-founders later? → Pvt Ltd directly (skip OPC).",
        "Freelance / side project / hobby? → Sole Proprietorship is fine.",
      ]},

      { kind: "warn", text: "Common mistake: registering with founders holding equal 50/50 splits and no vesting agreement. If one co-founder leaves in month 6, they walk away with half the company. Always document vesting (4 years, 1-year cliff) at incorporation." },
    ],
  },
  {
    title: "How Startup Valuation Actually Works",
    desc: "Pre-money, post-money, dilution math, and the methods investors use at every stage — explained without the jargon.",
    tag: "Fundraising",
    readTime: "14 min read",
    body: [
      { kind: "p", text: "Valuation is the single most misunderstood word in early-stage fundraising. Founders chase it like a vanity score; investors negotiate it like a multi-year insurance policy. Both are right, and that tension is exactly what makes it confusing. This guide explains what the numbers actually mean, how investors arrive at them, and how to talk about your own valuation without sounding naive." },

      { kind: "h", text: "Pre-money, post-money, and your dilution" },
      { kind: "p", text: "Pre-money valuation is what your company is worth right before new money comes in. Post-money is pre-money plus the cheque size. Your dilution — the percentage of the company you give up — is simply: investment ÷ post-money valuation." },
      { kind: "example", title: "Worked example", text: "You raise ₹5 Cr at a ₹20 Cr pre-money valuation. Post-money = ₹25 Cr. Investor ownership = 5/25 = 20%. Founders + ESOP pool now hold 80%. If your ESOP pool was created pre-money (the standard ask), founders get diluted; the investor does not." },

      { kind: "h", text: "How investors price early-stage rounds" },
      { kind: "p", text: "At pre-revenue and seed stage, valuation is more art than science. Investors triangulate from four signals: the founding team's track record, the size of the market, the quality of the product or prototype, and recent comparable deals. Indian seed rounds in 2024 typically priced between ₹15 Cr and ₹60 Cr post-money, with outliers in AI and deep-tech going higher." },
      { kind: "list", items: [
        "Idea-stage (no product): ₹8–25 Cr post-money, usually via SAFE or CCD.",
        "Pre-seed (prototype, early users): ₹15–40 Cr post-money.",
        "Seed (early revenue or strong engagement): ₹30–80 Cr post-money.",
        "Series A (₹3–10 Cr ARR for SaaS, strong unit economics): ₹100–400 Cr post-money.",
      ]},

      { kind: "h", text: "How investors price growth-stage rounds" },
      { kind: "p", text: "From Series A onward, investors switch from gut to math. SaaS companies are valued at 5–15x ARR depending on growth rate, gross margin, and net revenue retention. Marketplaces are valued at 1–3x annualised GMV blended with take-rate quality. Consumer brands trade at 3–8x revenue with profitability premiums." },

      { kind: "h", text: "The valuation–dilution trade-off" },
      { kind: "p", text: "Founders fixate on maximising valuation, but the round structure matters more. A ₹10 Cr round at ₹40 Cr post-money (25% dilution) with a great investor and clean terms beats a ₹10 Cr round at ₹80 Cr post-money (12.5% dilution) with a participating preference and 3x liquidation overhang. The second deal looks better on paper and destroys you at exit." },

      { kind: "tip", text: "Optimise for: (1) the right investor, (2) clean terms, (3) sufficient runway. Valuation is the fourth priority, not the first." },

      { kind: "h", text: "What to actually say when an investor asks 'what's your valuation?'" },
      { kind: "p", text: "Never quote a number first. Anchor in the round: 'We're raising ₹X to hit milestones A, B, C in 18 months. We're open to a fair market valuation for that round size.' Let the investor propose. Their first number is almost always negotiable upward by 15–25% if you have competitive interest." },

      { kind: "warn", text: "Don't accept the first term sheet without running a parallel process. Two interested investors create the leverage that turns a ₹30 Cr offer into a ₹45 Cr offer with better terms — and that takes maybe 3 extra weeks of work." },
    ],
  },
  {
    title: "What is a Cap Table and How to Manage It",
    desc: "A founder's complete guide to ownership, dilution, ESOPs, convertibles, and keeping your equity stack clean across every round.",
    tag: "Finance",
    readTime: "11 min read",
    body: [
      { kind: "p", text: "A cap table — short for capitalisation table — is the master document that lists every shareholder of your company, how many shares they own, what class of shares those are, and what percentage of the company they represent. It is the single source of truth for who owns what. Investors will read it before they read your pitch deck, and they will refuse to fund you if it is messy." },

      { kind: "h", text: "What lives on a cap table" },
      { kind: "list", items: [
        "Founder shares (usually equity, often subject to vesting).",
        "ESOP pool (granted and ungranted options, plus exercised shares).",
        "Investor shares (preference shares — CCPS, CCD, or SAFE conversions).",
        "Convertible instruments not yet converted (SAFEs, notes, warrants).",
        "Each row shows: holder name, share class, share count, %, fully diluted %, investment amount.",
      ]},

      { kind: "h", text: "Two views every founder must understand" },
      { kind: "p", text: "Issued ownership counts only the shares actually issued today. Fully diluted ownership assumes every option in the ESOP pool is granted and exercised, and every convertible converts. Investors always negotiate based on fully diluted numbers. If you only show issued, you are accidentally hiding 8–15% of the company — and investors will catch it instantly." },

      { kind: "h", text: "How dilution actually works across rounds" },
      { kind: "example", title: "From founding to Series A", text: "Founders start with 100%. Seed round adds 20% investor + 10% ESOP pool → founders now hold 70%. Series A adds another 20% investor + 5% ESOP top-up → founders now hold roughly 52%. After two more rounds, founders typically hold 25–35% — and that is healthy if the company is worth 100x more." },

      { kind: "h", text: "Three numbers to track every single month" },
      { kind: "list", items: [
        "Founder ownership (combined): early warning sign if it drops below 50% before Series A.",
        "ESOP pool unallocated: too small means painful top-ups; too large means avoidable dilution.",
        "Investor ownership: should not exceed 25–30% per round at seed and Series A.",
      ]},

      { kind: "h", text: "Tools and operational hygiene" },
      { kind: "p", text: "Spreadsheets work until your second round, then they break. Move to a dedicated platform — Qapita and Trica are the two strong India-focused options; Carta is the global standard. Whatever you use, every grant letter, board resolution, and share allotment must be reflected within 7 days. Cap-table errors caught during diligence delay closes by weeks." },

      { kind: "tip", text: "Keep an 'investor-ready' version of your cap table updated quarterly. When a warm intro lands, you should be able to share it within 24 hours, not 2 weeks." },

      { kind: "warn", text: "Never give a co-founder or early hire shares without a written, signed agreement specifying vesting, share class, and exit clauses. Verbal promises become litigation." },
    ],
  },
  {
    title: "Decoding Term Sheets: The Clauses That Actually Matter",
    desc: "Liquidation preferences, anti-dilution, board control, ROFR, drag-along — what's standard, what's hostile, and what to push back on.",
    tag: "Fundraising",
    readTime: "15 min read",
    body: [
      { kind: "p", text: "A term sheet is a 4–8 page document that summarises the economic and control terms of an investment. It is non-binding (except for confidentiality and exclusivity clauses), but in practice 90% of what you sign in the term sheet ends up in the final SHA. Misreading a term sheet at seed can cost you control of your company at Series C. This guide walks through every clause that matters." },

      { kind: "h", text: "Liquidation preference — the most important clause" },
      { kind: "p", text: "Liquidation preference determines who gets paid first if the company is sold. The standard is '1x non-participating' — the investor gets their money back first, then the rest is split pro-rata with founders. Anything more aggressive (2x, 3x, or 'participating') means investors double-dip: they get their money back AND their share of the remaining proceeds." },
      { kind: "example", title: "Why this matters", text: "You sell the company for ₹100 Cr. Investors put in ₹20 Cr at 20% ownership. Under 1x non-participating, investors get max(₹20 Cr, 20% of ₹100 Cr) = ₹20 Cr. Founders/employees get ₹80 Cr. Under 2x participating, investors get ₹40 Cr + 20% of remaining ₹60 Cr = ₹52 Cr. Founders/employees get ₹48 Cr. Same exit, ₹32 Cr difference." },
      { kind: "warn", text: "If a term sheet has anything other than 1x non-participating, push back hard. It is a red flag about how the investor will behave at exit." },

      { kind: "h", text: "Anti-dilution protection" },
      { kind: "p", text: "Protects investors if you raise a future round at a lower valuation (a 'down round'). Two flavours: broad-based weighted average (founder-friendly, standard) and full ratchet (investor-friendly, aggressive). Always insist on broad-based weighted average. Full ratchet can wipe out founders if you ever take a down round." },

      { kind: "h", text: "Board composition and control" },
      { kind: "p", text: "Your board makes every major decision — hiring the CEO, approving the next round, approving an acquisition. At seed, a 3-person board with 2 founders + 1 investor keeps founders in control. At Series A, expect to add an independent director, making it 2 + 1 + 1. Losing founder majority on the board before Series B is the single biggest reason founders get fired from their own companies." },

      { kind: "h", text: "Pro-rata rights" },
      { kind: "p", text: "Gives existing investors the right (not obligation) to participate in future rounds to maintain their ownership %. Standard and reasonable — agree to it, but cap it at the lead investor and a couple of others. Don't grant pro-rata to every angel who wrote a ₹10 L cheque, or your next round's allocation gets fragmented." },

      { kind: "h", text: "Drag-along and tag-along" },
      { kind: "p", text: "Drag-along lets a majority of shareholders force the rest to sell in an acquisition. Tag-along lets minority shareholders join a sale on the same terms. Both are standard. Make sure drag-along requires approval from at least 2/3 of preference shareholders AND a majority of common shareholders — never just one investor's signature." },

      { kind: "h", text: "Information rights and reporting" },
      { kind: "p", text: "Investors will ask for monthly financials, quarterly board updates, and an annual budget. Standard. Push back on quarterly investor calls with every angel — that is a meeting black hole. A monthly written update to all investors is enough." },

      { kind: "h", text: "Founder vesting and acceleration" },
      { kind: "p", text: "Investors will require founder shares to vest (typically 4 years, 1-year cliff) even if you've already been working on the company. Negotiate credit for time served (e.g., 25% vested at signing if you've been on it 12+ months). Always ask for double-trigger acceleration: full vesting if the company is acquired AND you are terminated. Single-trigger (vesting on acquisition alone) is hard to get but worth asking." },

      { kind: "tip", text: "Hire a startup-specialised lawyer (not a generalist) for your first term sheet. ₹1.5–3 lakhs of legal fees prevents ₹5–50 Cr of future pain. Avoid friends-of-friends; use AZB, Trilegal, IndusLaw, or Khaitan boutiques." },
    ],
  },
  {
    title: "ESOP Pool Design: Sizing, Allocating, and Communicating Equity",
    desc: "How to design an ESOP pool that attracts top talent without over-diluting founders — with allocation benchmarks for every role.",
    tag: "Hiring",
    readTime: "13 min read",
    body: [
      { kind: "p", text: "ESOPs (Employee Stock Option Plans) are the single most powerful hiring tool a startup has. Done well, they let you hire senior talent at 60–70% of market cash by promising upside in equity. Done badly, they create resentment, legal disputes, and unhappy employees who feel cheated when the company exits. This is the complete playbook." },

      { kind: "h", text: "How big should the pool be?" },
      { kind: "list", items: [
        "Pre-seed / Seed: 8–12% pool — enough to hire your first 15–20 employees.",
        "Series A: top up to 12–15% pool — enough for the next 30–50 hires.",
        "Series B+: top up to 15–20% cumulatively across all rounds.",
      ]},
      { kind: "p", text: "Investors will require the pool to be created (or topped up) pre-money — meaning founders absorb the dilution, not the new investor. This is non-negotiable in 95% of term sheets. Plan for it." },

      { kind: "h", text: "Allocation benchmarks by role (Series A stage)" },
      { kind: "list", items: [
        "Co-founder / CXO joining post-incorporation: 2–8% (heavily dependent on stage and contribution).",
        "VP / Head of function: 0.5–2%.",
        "Senior IC (staff engineer, senior PM): 0.2–0.6%.",
        "Mid-level IC (senior engineer, PM): 0.05–0.2%.",
        "Junior hire (associate engineer, ops): 0.01–0.05%.",
      ]},
      { kind: "p", text: "Calibrate down for later-stage hires (the equity is worth more) and up for earlier-stage hires (it's worth less and riskier). Always anchor the conversation in rupee value at a target valuation, not just percentages — a junior engineer hearing '0.05%' has no idea what that means; '₹15 lakhs at our next round valuation' is concrete." },

      { kind: "h", text: "Vesting structure" },
      { kind: "p", text: "The global standard is 4 years with a 1-year cliff: nothing vests for the first 12 months, then 25% vests on the cliff date, then the remaining 75% vests monthly over 36 months. This protects the company from quick departures and aligns long-term incentives. Don't deviate without a strong reason." },

      { kind: "h", text: "The exercise window — India's hidden trap" },
      { kind: "p", text: "When an employee leaves, they typically have 90 days to 'exercise' (buy) their vested options or lose them. This is a disaster in India: vested options are taxed as salary income at exercise (up to 39%), and the shares can't be sold until an exit, which may be 5+ years away. Result: most employees walk away from their equity." },
      { kind: "tip", text: "Best-in-class Indian startups now offer a 5–10 year post-termination exercise window. This costs you nothing and is the single highest-impact ESOP improvement you can make." },

      { kind: "h", text: "Communication: turn paperwork into motivation" },
      { kind: "p", text: "Most employees have no idea what their ESOPs are worth or how they work. Send every grantee a one-page explainer with: (a) total grant in shares, (b) vesting schedule with dates, (c) exercise price, (d) current share value, (e) potential value at three target exit valuations, (f) tax implications. Repeat at every grant and every round." },

      { kind: "warn", text: "Never grant ESOPs verbally or via email. Every grant requires a board resolution, a grant letter signed by both parties, and an entry in the ESOP register. Skipping these creates legally unenforceable grants and SEBI/MCA compliance risk." },
    ],
  },
  {
    title: "Founder Vesting Explained — Why Every Co-founder Needs It",
    desc: "If a co-founder leaves in month 6, they keep their full equity unless you've documented vesting. Here's how to do it right.",
    tag: "Legal",
    readTime: "9 min read",
    body: [
      { kind: "p", text: "Founder vesting is the safety net that protects a startup if a co-founder leaves early. Without it, a co-founder who walks away in month 6 with 40% equity keeps that 40% forever. The remaining founders are stuck with a 'dead-equity' shareholder on every cap table for the rest of the company's life — and every future investor will demand it be fixed before they fund." },

      { kind: "h", text: "How vesting works" },
      { kind: "p", text: "At incorporation, all founder shares are technically issued, but the company retains the right to repurchase any unvested portion at face value (₹10 per share) if the founder leaves. The standard structure is 4-year vesting with a 1-year cliff: nothing vests for 12 months, 25% vests at the 12-month mark, the remaining 75% vests monthly over the next 36 months." },

      { kind: "example", title: "Worked example", text: "Two co-founders each hold 50% (50,000 shares each) of a company. They sign a 4-year, 1-year cliff agreement. Co-founder B leaves after 18 months. By then, B has vested: 25% at month 12 + (6 months × 2.08% per month) = 37.5% of their shares = 18,750 shares. The remaining 31,250 shares are bought back by the company at face value. B walks away with 18.75% of the company instead of 50%." },

      { kind: "h", text: "Document it correctly" },
      { kind: "list", items: [
        "Founder Restricted Stock Agreement (FRSA) signed at incorporation — not later.",
        "Board resolution authorising the share repurchase right.",
        "Updated cap table showing vested vs unvested shares.",
        "If you forgot at incorporation, do a 'reverse vesting' agreement now — investors will require it at the first round anyway.",
      ]},

      { kind: "h", text: "Acceleration clauses" },
      { kind: "p", text: "Acceleration speeds up vesting in specific events. Two flavours: single-trigger (vesting accelerates on acquisition alone) and double-trigger (vesting accelerates only if there's an acquisition AND the founder is terminated within X months after). Double-trigger is the global standard; single-trigger is rare and usually limited to founders only." },

      { kind: "h", text: "Common scenarios and how to handle them" },
      { kind: "list", items: [
        "Co-founder gets a credit for past work: cap it at 6–12 months pre-vested, never more.",
        "Co-founder leaves voluntarily: only vested shares are kept; rest are repurchased.",
        "Co-founder is terminated for cause: typically loses unvested shares and may have a buyback clause on vested ones too.",
        "Co-founder dies or is permanently disabled: full acceleration is humane and standard.",
      ]},

      { kind: "warn", text: "Never skip vesting because 'we trust each other'. The two most common reasons co-founders leave — health and family changes — have nothing to do with trust. Vesting is a no-fault safety net for everyone, including the co-founder who stays." },
    ],
  },
];

// ---------- Knowledge Videos ----------
type Video = { title: string; speaker: string; duration: string; tag: string; url: string; desc: string };
const videos: Video[] = [
  { title: "How to Pitch to Indian VCs", speaker: "Rajan Anandan, Peak XV", duration: "14 min", tag: "Fundraising", desc: "What Indian VCs look for in the first 3 minutes of a pitch — and the 5 mistakes that kill rounds.", url: "https://www.youtube.com/results?search_query=how+to+pitch+indian+vc+rajan+anandan" },
  { title: "Building for Bharat: Lessons from Meesho", speaker: "Vidit Aatrey", duration: "22 min", tag: "Product", desc: "Designing for the next 500M users — language, trust, payments, and the social fabric of Indian commerce.", url: "https://www.youtube.com/results?search_query=meesho+vidit+aatrey+bharat" },
  { title: "From Zero to PMF in 12 Months", speaker: "Kunal Shah, CRED", duration: "18 min", tag: "Product", desc: "The Sean Ellis test, the disappointment metric, and how CRED found a niche inside a saturated market.", url: "https://www.youtube.com/results?search_query=kunal+shah+product+market+fit" },
  { title: "Hiring Your First 10 Engineers", speaker: "Girish Mathrubootham, Freshworks", duration: "16 min", tag: "Hiring", desc: "How to source, interview, and close engineers when you have no brand and a tiny budget.", url: "https://www.youtube.com/results?search_query=girish+mathrubootham+hiring+engineers" },
  { title: "GTM for Indian SaaS Selling Globally", speaker: "Suresh Sambandam, Kissflow", duration: "20 min", tag: "GTM", desc: "How Indian SaaS founders win US enterprise deals — outbound playbook, pricing, and the time-zone reality.", url: "https://www.youtube.com/results?search_query=indian+saas+gtm+kissflow" },
  { title: "Surviving the Funding Winter", speaker: "Anand Daniel, Accel", duration: "12 min", tag: "Fundraising", desc: "How to extend runway, restructure burn, and raise in a market where rounds take 4× longer to close.", url: "https://www.youtube.com/results?search_query=funding+winter+india+startups+anand+daniel" },
  { title: "Designing ESOPs Employees Actually Care About", speaker: "Vivek Khare, Qapita", duration: "15 min", tag: "Hiring", desc: "Why most Indian ESOPs fail employees — and the structural changes top startups have made.", url: "https://www.youtube.com/results?search_query=esop+india+qapita" },
  { title: "How to Build a Pricing Page That Sells", speaker: "Patrick Campbell, ProfitWell", duration: "19 min", tag: "GTM", desc: "Pricing psychology, packaging, and the data behind why most SaaS pricing leaves 30% on the table.", url: "https://www.youtube.com/results?search_query=saas+pricing+patrick+campbell" },
  { title: "Cohort Analysis for Founders", speaker: "Brian Balfour, Reforge", duration: "17 min", tag: "Growth", desc: "How to read retention curves, spot leaky funnels, and identify which cohort is your real PMF signal.", url: "https://www.youtube.com/results?search_query=cohort+analysis+brian+balfour" },
];

// ---------- Tools & Templates ----------
type Tool = { title: string; desc: string; format: string; url: string };
const tools: Tool[] = [
  { title: "Cap Table Template (India)", desc: "Track founder, ESOP, and investor equity across 5 rounds. Pre-built dilution math and SAFE conversion logic.", format: "Google Sheets", url: "https://docs.google.com/spreadsheets/d/1cN6tGqV2Z8M0nh-0YHc_6QnFc5rJfP0o/copy" },
  { title: "Pitch Deck Template (Seed)", desc: "12-slide deck framework used by 50+ funded Indian startups. Includes guidance notes per slide.", format: "Google Slides", url: "https://docs.google.com/presentation/d/1FYFb7NEv6cT4r_T3J6jLqJlQpL2X_jw5/copy" },
  { title: "SaaS Financial Model", desc: "3-year MRR, ARR, churn, CAC, payback, and burn projections. Bessemer-grade investor model.", format: "Excel", url: "https://www.bessemervp.com/atlas/saas-financial-model" },
  { title: "Co-founder Agreement Template", desc: "Vesting, IP assignment, equity-split, exit clauses, and dispute resolution — drafted for Indian Pvt Ltd.", format: "PDF", url: "https://www.indiafilings.com/learn/co-founders-agreement-template/" },
  { title: "ESOP Policy + Grant Letter Pack", desc: "Plan document, board resolution, grant letter, and exercise mechanics. India-specific tax notes included.", format: "Word", url: "https://www.qapita.com/blog/esop-policy-template" },
  { title: "Y Combinator SAFE & Term Sheet Library", desc: "Standard SAFE, post-money SAFE, and seed term sheet templates used globally — adapt for India.", format: "Web tool", url: "https://www.ycombinator.com/documents" },
  { title: "Investor Update Template (Monthly)", desc: "5-section monthly update format that keeps investors informed without burning your time.", format: "Google Doc", url: "https://www.firstround.com/review/the-monthly-investor-update-tactical-tips-and-templates/" },
  { title: "Hiring Scorecard Template", desc: "Role outcomes, must-have competencies, and structured-interview rubric. Used by Topgrading-trained hiring managers.", format: "Google Sheets", url: "https://www.notion.so/templates/hiring-scorecard" },
  { title: "Customer Discovery Interview Guide", desc: "30-question framework for early-stage user interviews. Validates problem before product.", format: "PDF", url: "https://www.strategyzer.com/library/the-customer-development-interview-guide" },
];

// ---------- Frameworks ----------
type Framework = { title: string; desc: string; tag: string; body: Block[] };
const frameworks: Framework[] = [
  {
    title: "The Sean Ellis PMF Test",
    desc: "The 40% benchmark — survey your active users to find out if you actually have product-market fit.",
    tag: "Product",
    body: [
      { kind: "p", text: "Sean Ellis ran growth at Dropbox, LogMeIn, and Eventbrite before any of them were household names. He noticed that growth marketing only worked when the product had genuine product-market fit — and he developed a single survey question that reliably predicted it. The PMF test is now the industry-standard early-stage diagnostic." },
      { kind: "h", text: "The survey" },
      { kind: "p", text: "Send a 4-question survey to users who have used your product at least twice in the last two weeks. The first question is the only one that matters; the others give you context for the answer." },
      { kind: "list", items: [
        "How would you feel if you could no longer use [product]? (Very disappointed / Somewhat disappointed / Not disappointed / N/A)",
        "What type of people do you think would most benefit from [product]?",
        "What is the main benefit you receive from [product]?",
        "How can we improve [product] for you?",
      ]},
      { kind: "h", text: "Reading the result" },
      { kind: "p", text: "If 40% or more of respondents answer 'Very disappointed', you have strong product-market fit and should aggressively invest in growth. Below 40%, you should keep iterating on the core product before pouring fuel on the fire. Companies that scale before passing the 40% threshold almost always burn capital and fail to retain the users they acquire." },
      { kind: "tip", text: "Segment the responses. Often a sub-segment (say, 'designers in agencies') is at 60% while the overall average is 25%. That sub-segment is your beachhead — go all in on them before broadening." },
      { kind: "warn", text: "Don't run this test on users who signed up yesterday. Minimum criteria: used the product at least twice, in the last two weeks, with a sample size of 100+." },
    ],
  },
  {
    title: "Jobs-To-Be-Done (JTBD)",
    desc: "Customers don't buy products — they hire them to do a job. Reframe your product around the job, not the persona.",
    tag: "Product",
    body: [
      { kind: "p", text: "Jobs-To-Be-Done is a framework popularised by Clay Christensen at Harvard. The insight: people don't buy products because of their demographics or features — they 'hire' a product to make progress on a specific job in a specific situation. The same person hires Netflix on a Friday night and a textbook on Sunday morning. Demographics don't predict that; the job does." },
      { kind: "h", text: "The JTBD statement" },
      { kind: "p", text: "Frame every product decision around this template: 'When [situation], I want to [motivation], so I can [expected outcome].' Example for a budgeting app: 'When my salary lands and I feel anxious about spending, I want to see how much I can safely spend this week, so I can buy things without guilt.'" },
      { kind: "h", text: "How to discover the real job" },
      { kind: "steps", items: [
        "Interview 10–15 customers who recently switched to your product.",
        "Map the timeline: trigger event → consideration → switch → first use → habit.",
        "Identify the existing alternative they fired (often surprising — could be a spreadsheet, a friend, or 'doing nothing').",
        "Find the moment of switch: what specifically made today different from last month?",
        "Cluster jobs across interviews. The dominant cluster is your real product.",
      ]},
      { kind: "tip", text: "Build for the job, not the persona. A 23-year-old freelancer and a 45-year-old executive might be hiring you for the same job — design for that job, not for either age group." },
    ],
  },
  {
    title: "The Bullseye Framework (Traction)",
    desc: "19 channels — pick 3, test cheaply, double down on the one that works. Stop spreading thin across every channel.",
    tag: "GTM",
    body: [
      { kind: "p", text: "From the book Traction by Gabriel Weinberg (founder of DuckDuckGo). Most early-stage startups fail at growth not because they pick the wrong channel, but because they spread effort thinly across five channels and master none. Bullseye gives you a structured way to find your one dominant channel without wasting 18 months." },
      { kind: "h", text: "The 19 channels" },
      { kind: "list", items: [
        "Targeting blogs, Publicity, Unconventional PR, Search engine marketing (SEM), Social and display ads, Offline ads, SEO, Content marketing, Email marketing, Engineering as marketing, Viral marketing, Business development, Sales, Affiliate programs, Existing platforms, Trade shows, Offline events, Speaking engagements, Community building.",
      ]},
      { kind: "h", text: "The three rings" },
      { kind: "steps", items: [
        "Outer ring (brainstorm): for every channel, write the cheapest possible test you could run in 2 weeks. Don't filter — just imagine.",
        "Middle ring (promising): pick the 3 channels with the best cost-to-signal ratio. Run real, time-boxed experiments.",
        "Inner ring (core channel): the one channel that meaningfully outperforms the others. Move 80% of your growth budget here.",
      ]},
      { kind: "tip", text: "Most successful startups grow on one channel for the first 2 years. Airbnb on Craigslist, Dropbox on referrals, Notion on community. Find yours fast — don't romanticise diversification too early." },
    ],
  },
  {
    title: "AARRR — The Pirate Metrics Funnel",
    desc: "Acquisition, Activation, Retention, Referral, Revenue. The 5-stage funnel every founder should measure weekly.",
    tag: "Growth",
    body: [
      { kind: "p", text: "Created by Dave McClure (500 Startups), AARRR is the simplest complete model of how a user moves through your product. It's called Pirate Metrics because the acronym sounds like 'Aarrr!'. The framework forces you to measure every stage of the user journey, not just the vanity metric at the top." },
      { kind: "h", text: "The five stages" },
      { kind: "list", items: [
        "Acquisition: how do users find you? (channels, CAC, source attribution)",
        "Activation: do they have a great first experience? (% who reach the 'aha moment' within first session)",
        "Retention: do they come back? (D1, D7, D30 retention curves; ideally flatten, not decay to zero)",
        "Referral: do they tell others? (viral coefficient, NPS, organic word-of-mouth %)",
        "Revenue: do they pay? (conversion to paid, ARPU, LTV)",
      ]},
      { kind: "h", text: "Fix the funnel from the bottom up" },
      { kind: "p", text: "The biggest mistake founders make is pouring acquisition budget into a leaky bucket. If your D30 retention is 5%, no amount of paid acquisition will save you — every rupee of CAC drains out within a month. Fix activation and retention first. Only then does it make sense to scale acquisition." },
      { kind: "warn", text: "Vanity metrics — pageviews, signups, downloads — sit at the top of the funnel and feel good. They don't pay bills. Always pair them with a retention or revenue metric in the same dashboard." },
    ],
  },
  {
    title: "RICE Prioritisation",
    desc: "Score every feature by Reach × Impact × Confidence ÷ Effort. Replace politics with data in roadmap decisions.",
    tag: "Product",
    body: [
      { kind: "p", text: "Developed by Intercom, RICE is a quantitative framework for prioritising features when everyone in the room has a strong opinion. It forces every stakeholder to estimate four numbers — and the math sorts the chaos." },
      { kind: "h", text: "The formula" },
      { kind: "p", text: "RICE Score = (Reach × Impact × Confidence) ÷ Effort." },
      { kind: "list", items: [
        "Reach: number of users affected per quarter (concrete number, e.g., 5,000).",
        "Impact: 0.25 (minimal) / 0.5 (low) / 1 (medium) / 2 (high) / 3 (massive). Force the discrete scale.",
        "Confidence: 100% (have data) / 80% (have evidence) / 50% (gut feel). Penalises hand-wavy ideas.",
        "Effort: total person-months. Includes design, eng, QA, launch.",
      ]},
      { kind: "example", title: "Worked example", text: "Feature A: Reach 5000, Impact 1, Confidence 80%, Effort 2 → RICE = (5000 × 1 × 0.8) / 2 = 2000. Feature B: Reach 1000, Impact 3, Confidence 50%, Effort 1 → RICE = 1500. Feature A wins despite sounding less exciting." },
      { kind: "tip", text: "Re-score every feature each quarter with the latest data. RICE is a discipline, not a one-time exercise." },
    ],
  },
  {
    title: "The North Star Metric",
    desc: "One number that captures the core value you deliver. Align every team around moving it.",
    tag: "Growth",
    body: [
      { kind: "p", text: "A North Star Metric (NSM) is the single metric that best predicts your company's long-term success. It is customer-centric (not revenue-centric), measurable weekly, and clearly tied to the value users get from your product. Famous examples: Airbnb's nights booked, WhatsApp's messages sent, Spotify's time spent listening." },
      { kind: "h", text: "Picking your NSM — three tests" },
      { kind: "list", items: [
        "Does it capture the moment a user gets real value? (Not signup; not pageview.)",
        "Does it predict revenue with a 1–3 month lag? (If not, it's a vanity metric.)",
        "Can every team — product, eng, sales, marketing — directly influence it?",
      ]},
      { kind: "h", text: "The input metrics" },
      { kind: "p", text: "Your NSM is influenced by 3–5 input metrics. For Airbnb's 'nights booked', inputs might be: search-to-booking conversion, host supply, return-guest rate, average nights per booking. Each team owns one input metric, all rolling up to the same NSM." },
      { kind: "warn", text: "Don't pick revenue as your NSM. Revenue is the outcome — your NSM is what drives it. Confusing the two leads to short-term tactics that hurt long-term value (discounting, upselling, chasing one-time buyers)." },
    ],
  },
];

// ---------- Reports ----------
type Report = { title: string; desc: string; publisher: string; year: string; url: string };
const reports: Report[] = [
  { title: "India Venture Capital Report 2024", desc: "Bain & Company's annual deep-dive on the Indian VC landscape — funding trends, sector heatmaps, exit activity, and 2024 outlook.", publisher: "Bain & Company", year: "2024", url: "https://www.bain.com/insights/india-venture-capital-report-2024/" },
  { title: "Indian SaaS Report", desc: "State of Indian SaaS — ARR distribution, funding by stage, GTM benchmarks, and the path from $1M to $100M ARR.", publisher: "SaaSBOOMi", year: "2024", url: "https://saasboomi.com/" },
  { title: "Startup India Annual Report", desc: "Government data on DPIIT-recognised startups — sectors, geographies, jobs created, and policy updates founders should know.", publisher: "Startup India", year: "2024", url: "https://www.startupindia.gov.in/content/sih/en/reports.html" },
  { title: "Inc42 State of Indian Startup Ecosystem", desc: "Funding rounds, sector breakdowns, unicorn tracking, and exit data across India's tech ecosystem — quarterly updates.", publisher: "Inc42", year: "2024", url: "https://inc42.com/reports/" },
  { title: "Tracxn India Tech Report", desc: "Comprehensive funding data, exits, and sector heatmaps with company-level granularity. The data investors actually use.", publisher: "Tracxn", year: "2024", url: "https://tracxn.com/explore/Indian-Tech-Startups" },
  { title: "NASSCOM Tech Startup Report", desc: "Deep-tech, AI, and emerging tech trends in Indian startups. Strong on B2B, enterprise, and emerging hubs beyond Bengaluru.", publisher: "NASSCOM", year: "2024", url: "https://nasscom.in/knowledge-center" },
  { title: "Redseer Consumer Internet Report", desc: "Consumer internet trends — quick commerce, food delivery, e-grocery, fintech adoption, and Bharat user behaviour.", publisher: "Redseer", year: "2024", url: "https://redseer.com/reports/" },
  { title: "Lightspeed India Founder Survey", desc: "Annual survey of 200+ Indian founders on hiring, fundraising sentiment, runway, and the operating realities of building today.", publisher: "Lightspeed India", year: "2024", url: "https://lsip.com/insights/" },
];

// ---------- Founder Stories ----------
type Story = { founder: string; company: string; quote: string; lesson: string; tag: string; story: string };
const stories: Story[] = [
  {
    founder: "Kunal Shah",
    company: "CRED",
    quote: "I built FreeCharge thinking I knew payments. CRED taught me I knew nothing about trust.",
    lesson: "Distribution beats product. Trust beats distribution.",
    tag: "Fintech",
    story: "After exiting FreeCharge to Snapdeal, Kunal spent two years studying behavioural economics before starting CRED. His insight: India's most creditworthy users had no premium product built for them. CRED started by paying users to pay their credit card bills — economically irrational, behaviourally genius. The community of trusted users became the moat.",
  },
  {
    founder: "Falguni Nayar",
    company: "Nykaa",
    quote: "Profitability isn't a feature — it's the foundation. We were profitable before we were big.",
    lesson: "Build a real business, not a fundraising machine.",
    tag: "Commerce",
    story: "Falguni left a 20-year career at Kotak to start Nykaa at 50. She refused to subsidise growth like every other Indian e-commerce company at the time. Nykaa was profitable by year four, IPO'd in 2021, and remains one of the few Indian consumer companies that didn't burn billions to scale.",
  },
  {
    founder: "Bhavish Aggarwal",
    company: "Ola",
    quote: "We hired too fast in 2015. The cleanup took 3 years. Hire when it hurts not to.",
    lesson: "Stay lean longer than feels comfortable.",
    tag: "Mobility",
    story: "Ola scaled from 200 to 5,000 employees in 18 months during the 2015 funding boom. By 2018, Bhavish had to lay off 1,500 people across multiple rounds. The lesson he repeats publicly: every hire is a multi-year commitment, and the cost of firing is 5x the cost of not hiring.",
  },
  {
    founder: "Nithin Kamath",
    company: "Zerodha",
    quote: "We never raised a rupee. Constraints forced us to build only what mattered.",
    lesson: "Bootstrapping is a strategy, not a fallback.",
    tag: "Fintech",
    story: "Zerodha launched in 2010 with ₹40 lakhs of personal capital and has never raised external funding. Today it serves 1.5 Cr+ active investors and is profitable at over ₹2,000 Cr in annual profit. Nithin's discipline: every product decision optimised for unit economics, not user acquisition.",
  },
  {
    founder: "Vidit Aatrey",
    company: "Meesho",
    quote: "Bharat doesn't browse — it discovers through people it trusts. Build for that reality.",
    lesson: "Design for your real user, not the user you imagined.",
    tag: "Commerce",
    story: "Meesho started as a B2B reseller marketplace targeting urban resellers. After 18 months of mediocre traction, Vidit pivoted to enabling tier-2/3 women resellers selling via WhatsApp groups. The product, language, and pricing were rebuilt from scratch for Bharat. The pivot took Meesho from struggling to a $5B valuation.",
  },
  {
    founder: "Aman Gupta",
    company: "boAt",
    quote: "We outsourced manufacturing, owned the brand. Capital efficiency built the empire.",
    lesson: "Asset-light wins in consumer until scale demands otherwise.",
    tag: "D2C",
    story: "boAt launched in 2016 as a pure brand play — design and marketing in India, manufacturing in China. While competitors burned capital on factories, boAt invested in distribution and brand. By 2022, boAt was India's #1 audio brand and #5 wearable brand globally, all on a fraction of the capital its competitors raised.",
  },
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

// ---------- Reader block renderer ----------
const RenderBlock = ({ block }: { block: Block }) => {
  switch (block.kind) {
    case "p":
      return <p className="text-[15px] leading-relaxed text-foreground/85">{block.text}</p>;
    case "h":
      return <h3 className="text-lg font-bold text-foreground mt-2">{block.text}</h3>;
    case "list":
      return (
        <ul className="space-y-2">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-foreground/85">
              <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-primary" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className="space-y-2.5">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-foreground/85">
              <span className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">{i + 1}</span>
              <span>{it}</span>
            </li>
          ))}
        </ol>
      );
    case "tip":
      return (
        <div className="flex gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
          <Lightbulb size={18} className="shrink-0 mt-0.5 text-primary" />
          <p className="text-sm leading-relaxed text-foreground/90"><span className="font-bold text-primary">Tip · </span>{block.text}</p>
        </div>
      );
    case "warn":
      return (
        <div className="flex gap-3 rounded-xl border border-destructive/20 bg-destructive/5 p-4">
          <AlertTriangle size={18} className="shrink-0 mt-0.5 text-destructive" />
          <p className="text-sm leading-relaxed text-foreground/90"><span className="font-bold text-destructive">Watch out · </span>{block.text}</p>
        </div>
      );
    case "example":
      return (
        <div className="rounded-xl border border-border bg-muted/40 p-4">
          <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-1">{block.title}</div>
          <p className="text-sm leading-relaxed text-foreground/90">{block.text}</p>
        </div>
      );
  }
};

const Resources = () => {
  const [activeId, setActiveId] = useState("segments");
  const [reader, setReader] = useState<{ open: boolean; type: "guide" | "framework" | null; index: number }>({
    open: false,
    type: null,
    index: 0,
  });
  const [categoryDialog, setCategoryDialog] = useState<{ open: boolean; index: number }>({ open: false, index: 0 });
  const activeCategory = categoryDialog.open ? categories[categoryDialog.index] : null;

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
            Deep-dive playbooks, video lessons, real templates, and frameworks — everything Indian founders need to go from idea to scale, in one place.
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
              Six pillars of founder knowledge. Each segment is a complete library you can read end-to-end or jump into when you need it.
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
              The complete operating manual for Indian founders. Seven progressive stages, six topic-based libraries, and deep-dive guides that take you from your first idea sketch to a Series A round — written for someone who has never done this before.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Learning Path */}
      <section id="learning-path" className="pb-28 md:pb-36 section-light-alt">
        <div className="container">
          <div className="mb-16 max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">The Learning Path</h3>
            <p className="mt-3 text-muted-foreground">Seven progressive stages of building a startup. Read them in order if you're new, or jump to the stage you're stuck on.</p>
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
            <p className="section-desc mx-auto">Six topic libraries covering every dimension of building a company in India.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.button
                  key={cat.title}
                  type="button"
                  onClick={() => setCategoryDialog({ open: true, index: i })}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30"
                >
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/[0.04] group-hover:bg-primary/[0.08] transition-colors" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-[10px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                        {cat.guides.length} guides
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-foreground group-hover:text-primary transition-colors">{cat.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{cat.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold tracking-wide text-primary group-hover:gap-2.5 transition-all">
                      VIEW GUIDES <ArrowRight size={14} />
                    </span>
                  </div>
                </motion.button>
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
              <p className="section-desc">Long-form, deep-dive guides written specifically for Indian founders. Each one is a complete walkthrough with examples, benchmarks, and warnings.</p>
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
                    Read full guide <ArrowRight size={14} />
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
            <p className="section-desc mx-auto">Curated talks from Indian operators, mentors, and investors. Each one is short enough to watch over lunch and dense enough to change how you think.</p>
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
                  <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{v.desc}</p>
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
            <p className="section-desc mx-auto">Battle-tested templates founders actually use to ship faster — cap tables, decks, financial models, legal docs, and more. All free to copy.</p>
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
            <p className="section-desc mx-auto">Mental models for product, GTM, and decision-making — the same frameworks used at YC, Sequoia, and India's best-run startups. Each one with worked examples.</p>
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
            <p className="section-desc mx-auto">Curated industry reports — funding data, sector deep-dives, and ecosystem trends. The same sources investors and senior operators read.</p>
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
            <p className="section-desc mx-auto">Hard-won lessons from founders who've built India's most loved companies. The decisions, the cleanups, and the convictions that shaped them.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <p className="mt-4 text-sm text-foreground/75 leading-relaxed">{s.story}</p>
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
        <DialogContent className="sm:max-w-3xl max-h-[88vh] overflow-y-auto">
          {readerContent && (
            <>
              <DialogHeader>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">{readerContent.subtitle}</span>
                <DialogTitle className="text-2xl md:text-3xl leading-tight">{readerContent.title}</DialogTitle>
                <DialogDescription className="sr-only">Full content for {readerContent.title}</DialogDescription>
              </DialogHeader>
              <div className="space-y-5 pt-2">
                {readerContent.body.map((block, idx) => (
                  <RenderBlock key={idx} block={block} />
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
