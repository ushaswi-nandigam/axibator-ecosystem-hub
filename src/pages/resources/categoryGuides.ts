// Long-form content bodies for every Playbook category guide.
// Block format mirrors the one in Resources.tsx.
export type Block =
  | { kind: "p"; text: string }
  | { kind: "h"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "steps"; items: string[] }
  | { kind: "tip"; text: string }
  | { kind: "warn"; text: string }
  | { kind: "example"; title: string; text: string };

// Helper for compactness
const p = (text: string): Block => ({ kind: "p", text });
const h = (text: string): Block => ({ kind: "h", text });
const li = (items: string[]): Block => ({ kind: "list", items });
const st = (items: string[]): Block => ({ kind: "steps", items });
const tip = (text: string): Block => ({ kind: "tip", text });
const warn = (text: string): Block => ({ kind: "warn", text });
const ex = (title: string, text: string): Block => ({ kind: "example", title, text });

export const guideBodies: Record<string, Block[]> = {
  // ---------- Start Here ----------
  "The Founder Mindset": [
    p("Most first-time founders underestimate one thing: how long this will take. The median time from incorporation to a meaningful exit in India is 7–9 years. The first 18 months feel like sprinting through fog — long hours, little validation, and no salary that matches what you turned down."),
    p("The founders who survive aren't the smartest or the best-funded. They're the ones who built a sustainable relationship with uncertainty. This guide is about building that relationship before the pressure hits."),
    h("Three mental shifts you need"),
    li([
      "From employee to operator: nobody hands you a roadmap. You write it, then rewrite it weekly.",
      "From outcomes to inputs: you cannot control whether a deal closes; you can control whether you sent the email today.",
      "From perfection to velocity: shipping bad code on Monday beats shipping perfect code in three weeks.",
    ]),
    h("Daily and weekly rituals that compound"),
    st([
      "One outcome per day. Write it down before you open Slack.",
      "One customer conversation per day. No exceptions, even on launch week.",
      "One Friday review per week: what worked, what didn't, what to kill.",
      "One investor or mentor update per month, even before you're raising.",
    ]),
    tip("Track 'energy' more than 'hours'. A founder doing 50 high-energy hours beats a founder doing 80 distracted hours every single time."),
    warn("Burnout doesn't announce itself. It shows up as cynicism, irritability, and avoidance of customer calls. If two of those creep in, take three days off — not three hours."),
  ],

  "Picking an Idea Worth 5 Years": [
    p("You will spend 5+ years on this idea. Most founders pick ideas based on excitement and end up trapped in markets that don't reward effort. Use this four-question filter before you commit."),
    h("The four questions"),
    st([
      "Is the market large and growing? (₹500 Cr+ TAM in India, growing 20%+ annually.)",
      "Do you have founder–market fit? (Why you, why now — answer in one sentence.)",
      "Is there urgency? (Why must this be solved in the next 24 months?)",
      "Is there a path to defensibility? (Network effects, data, switching costs, distribution.)",
    ]),
    p("If you can't honestly say yes to three of four, keep looking. Saying yes to two is how founders end up grinding for 5 years on a business that tops out at ₹10 Cr ARR."),
    ex("Worked example", "Idea: 'Slack for construction'. Market: large (₹2,000 Cr+ India). Founder fit: weak unless you've sold to construction before. Urgency: low — site managers are using WhatsApp and it's working. Defensibility: weak. Verdict: pass."),
    tip("Spend 3–4 weeks evaluating ideas in parallel. The best founders don't fall in love with the first idea — they choose."),
  ],

  "How to Validate an Idea in 30 Days": [
    p("Validation is not asking friends if your idea is good. It's running the smallest experiment that produces a real signal — usually money, time, or behaviour."),
    h("Week 1 — Customer discovery"),
    li([
      "Identify 30 prospective users matching your target persona.",
      "Run 15 unstructured 30-minute interviews focused on the problem (not your solution).",
      "Look for: emotional language, existing workarounds, money already spent.",
    ]),
    h("Week 2 — Problem definition"),
    li([
      "Cluster interview transcripts by job-to-be-done.",
      "Pick the cluster with the strongest emotional pull and clearest existing spend.",
      "Write a one-page problem statement and share it back with 5 interviewees for validation.",
    ]),
    h("Week 3 — Smallest valid experiment"),
    li([
      "Landing page with a clear value prop and a payment or waitlist CTA.",
      "Manual concierge service: deliver the outcome by hand for 3–5 users.",
      "Track: % who sign up, % who pay (or commit), % who refer someone.",
    ]),
    h("Week 4 — Decide"),
    p("Strong signal: 30%+ of qualified visitors take the action and several pay. Weak signal: lots of polite interest, nobody pays. Walk away from polite interest. It's the most expensive mistake you'll make."),
    warn("Don't build the product in week 4. Validate again with a slightly bigger experiment. Code is a commitment; landing pages and concierge tests are not."),
  ],

  "Finding Your First 10 Customers": [
    p("Your first 10 customers will not come from ads. They will come from you, sending personal, relevant messages to people who already have the problem. This is founder-led sales, and it's the highest-ROI work you'll do in year one."),
    h("Where to find them"),
    li([
      "LinkedIn search by job title + city + company size. Send 20 personalised connection notes per day.",
      "Communities where they already gather: Slack groups, WhatsApp circles, sub-reddits, niche Discords.",
      "Warm intros from your network. Be specific: 'I'm looking for HR heads at 50–200 person Indian SaaS companies.'",
    ]),
    h("The first-message template"),
    p("Three sentences: (1) why you're reaching out specifically to them, (2) the problem you've heard from people like them, (3) a small ask — 20 minutes, not a demo."),
    ex("Example", "Hi Priya, I noticed you've grown your engineering team from 5 to 25 in 18 months. I'm building tools to help fast-growing eng leaders track team health without weekly 1:1s eating their calendar. Would 20 minutes next week to share what's been hardest for you be useful?"),
    tip("Track conversion: messages sent → replies → calls booked → demos → closes. Improve the worst stage. At seed, 30 messages should produce 1 customer."),
  ],

  "Solo Founder vs Co-founder": [
    p("Investors say they prefer co-founders. The data says solo founders raise a bit slower but exit just as well. The right answer depends on you, not on what investors want."),
    h("Go solo if"),
    li([
      "You can sell, build, and operate (rare but real).",
      "You don't have anyone you'd trust with 30% of your company — don't force it.",
      "You can hire excellent senior operators in months 0–12.",
    ]),
    h("Find a co-founder if"),
    li([
      "You have one core skill (e.g., engineering) and need a complementary one (e.g., sales).",
      "The work pace is too much for one person — you need someone in the trenches at 2am.",
      "You've worked with the person before on something hard. Strangers don't co-found well.",
    ]),
    warn("Never co-found with someone you met at a hackathon last week. Spend 60–90 days on a real project together first. Compatibility under stress is the only thing that matters."),
  ],

  "Co-founder Equity Splits": [
    p("Equity splits set the emotional tone of the company forever. Get them wrong and resentment compounds at every fundraise. Get them right and they barely come up again."),
    h("Three common approaches"),
    li([
      "Equal split (50/50, 33/33/33): simple, signals partnership. Works when contributions are genuinely equal.",
      "Weighted split: factors in idea origination, time committed, capital invested, prior work, role criticality.",
      "Slicing pie / dynamic equity: equity grows over time based on contribution. Best for very early teams.",
    ]),
    h("The honest weighted-split conversation"),
    st([
      "Each co-founder writes down their proposed % independently.",
      "Compare. The gaps reveal unspoken assumptions.",
      "Discuss each factor: idea, capital, time, role, replacement cost.",
      "Settle on a split everyone can defend in five years. Document and sign within 7 days.",
    ]),
    tip("Build a 5–10% buffer for a future co-founder or critical first hire. Easier to allocate later than to claw back."),
    warn("Never split equity without vesting. Equal split + no vesting + co-founder leaves at month 6 = company killer."),
  ],

  "Naming Your Startup": [
    p("A great name doesn't make a company. A bad name (unsearchable, hard to spell, trademarked) actively slows it down. Spend a week, not a month."),
    h("The 5-filter checklist"),
    li([
      "Spellable on first hearing — no 'is that with a Z or an S?'",
      ".com or .in available, or a clean .io / .co alternative.",
      "Trademark search clean in your industry class (search ipindia.gov.in).",
      "MCA name approval likely — avoid restricted words like 'Bank', 'Insurance', 'India'.",
      "Doesn't mean something embarrassing in Hindi, Tamil, or any major language.",
    ]),
    h("Quick generation methods"),
    li([
      "Real words slightly altered (Lyft, Tumblr, Flickr).",
      "Compound words (Facebook, Snowflake, Razorpay).",
      "Made-up but pronounceable (Zomato, Meesho, Paytm).",
      "Founder name or place (Tata, Mahindra) — works for legacy plays only.",
    ]),
    tip("Buy the .com via a domain broker even if it costs ₹50,000 — long-term it's worth it. Avoid weird TLDs like .xyz for B2B."),
  ],

  "Your First 90 Days": [
    p("The first 90 days set the operating cadence of the company. Done well, you exit Q1 with conviction, a tiny team, and a real customer pipeline."),
    h("Days 1–30: incorporate and validate"),
    li([
      "Incorporate as Pvt Ltd; sign founder vesting agreement.",
      "Open current account; set up Zoho Books or QuickBooks.",
      "Run 30 customer interviews; finalise problem statement.",
    ]),
    h("Days 31–60: build the smallest thing that proves value"),
    li([
      "Ship a manual or no-code MVP. Aim for 5 paying or committed users.",
      "Set up basic analytics: signups, activations, retention.",
      "Document weekly: what worked, what to change.",
    ]),
    h("Days 61–90: prove a repeatable acquisition motion"),
    li([
      "Pick one channel (outbound, content, partnerships). Run a 4-week test.",
      "Track CAC, payback, conversion at each stage.",
      "Decide: double down, switch channel, or rethink ICP.",
    ]),
    tip("Don't hire in the first 90 days unless absolutely critical. Founders learning the business themselves is irreplaceable."),
  ],

  "Killing Ideas Without Regret": [
    p("Killing an idea is harder than starting one. Founders rationalise, double-down, and stay too long because the alternative — admitting the idea won't work — feels like personal failure. It isn't. It's data."),
    h("Set kill criteria before you start"),
    li([
      "Time bound: 'I'll give this 6 months and ₹X.'",
      "Signal-based: 'If we don't have 50 paying users by month 4, we pivot or shut down.'",
      "Burn-based: 'If runway drops below 6 months without a product signal, we stop.'",
    ]),
    h("Honest signs an idea isn't working"),
    li([
      "Customers are polite but never pay or refer.",
      "You're chasing every meeting because no inbound exists.",
      "Retention curves drop to zero by week 4.",
      "Your team's energy collapses when discussing the product.",
    ]),
    tip("Kill the idea, not the company. Pivot mechanics, intros, learnings, and even the team often survive — Slack, Twitter, and Instagram are all pivots."),
  ],

  "Pre-incorporation Checklist": [
    p("Twelve things to lock down before you spend a single rupee on registration. Skipping these creates rework and friction during your first fundraise."),
    li([
      "Final entity choice (Pvt Ltd vs LLP vs OPC).",
      "Co-founder split written and signed.",
      "Vesting agreement template ready.",
      "Company name shortlist (5 options, MCA-friendly).",
      "Trademark search complete.",
      "Domain purchased.",
      "Registered office address confirmed.",
      "DSC (Digital Signature) for each director.",
      "DIN (Director ID) application started.",
      "Bank account research done (compare 3 banks).",
      "Accounting tool decided.",
      "Founder agreement signed (separate from incorporation docs).",
    ]),
    warn("Don't incorporate without a co-founder agreement. Incorporation creates legal entities; the founder agreement governs how you behave inside them."),
  ],

  "Building in Public vs Stealth": [
    p("Building in public means sharing the journey — metrics, mistakes, decisions — on Twitter/LinkedIn. It can be a distribution superpower or a moat-leaking distraction. Decide on purpose."),
    h("Build in public if"),
    li([
      "Your customers live where you'd post (developers, indie hackers, marketers).",
      "Your moat is brand, community, or trust — not technology.",
      "You can sustain a 12-month posting cadence without it eating product time.",
    ]),
    h("Stay in stealth if"),
    li([
      "Your edge is a research insight a competitor could replicate in 6 weeks.",
      "Your customers are enterprise — they care about quiet credibility, not posts.",
      "You'd resent the time spent on content vs product.",
    ]),
    tip("Hybrid works: build product in stealth for 6 months, then go public with a strong launch. Best of both."),
  ],

  "Avoiding First-Time Founder Mistakes": [
    p("These ten mistakes show up in 80%+ of first-time founder journeys. Knowing them won't make you immune, but it will help you catch them earlier."),
    li([
      "Building in isolation for 6+ months before talking to users.",
      "Hiring before you have the workload (every hire is a 12-month commitment).",
      "Optimising for valuation instead of investor quality.",
      "Skipping vesting because 'we trust each other'.",
      "Spending on growth before retention is fixed.",
      "Saying yes to every customer feature request.",
      "Treating the cap table casually.",
      "Avoiding hard conversations with co-founders.",
      "Confusing fundraising with progress.",
      "Burning out by month 9 because there's no rhythm or rest.",
    ]),
    tip("Read this list every quarter. The mistakes you're most defensive about reading are usually the ones you're making."),
  ],

  // ---------- Company Setup ----------
  "Step-by-Step Pvt Ltd Incorporation": [
    p("Incorporating a Pvt Ltd in India takes 10–15 working days end-to-end if nothing breaks. Here's the exact sequence with timelines, fees, and the gotchas that delay most founders by 2–3 weeks."),
    h("Step 1 — Digital Signatures (DSC)"),
    p("Every director and subscriber needs a Class-3 DSC. Procured from licensed agencies (eMudhra, Sify). Cost: ₹1,500–2,500 per DSC. Time: 1–2 days. Requires PAN, Aadhaar, and a passport-size photo."),
    h("Step 2 — Director Identification Number (DIN)"),
    p("DIN is allotted automatically through SPICe+ during incorporation now — no separate application needed. Each director can hold only one DIN, lifetime."),
    h("Step 3 — Name approval (RUN / SPICe+ Part A)"),
    li([
      "Submit 2 name options via SPICe+ Part A on MCA portal.",
      "Names must be unique, follow naming rules, and not conflict with trademarks.",
      "Cost: ₹1,000. Time: 2–4 working days.",
      "If both rejected, you re-submit with new options (same fee).",
    ]),
    h("Step 4 — SPICe+ Part B (incorporation form)"),
    li([
      "Combined form for incorporation, PAN, TAN, EPFO, ESIC, professional tax, and bank account.",
      "Attach: AOA, MOA, INC-9 (declaration), DIR-2 (director consent), proof of registered office.",
      "Stamp duty varies by state; ₹1,000–₹15,000.",
      "Time: 5–7 working days for Certificate of Incorporation.",
    ]),
    h("Step 5 — Post-incorporation"),
    li([
      "Receive: Certificate of Incorporation, PAN, TAN, EPFO, ESIC numbers.",
      "Open current account (banks need CoI, MOA, AOA, board resolution).",
      "Issue share certificates within 60 days.",
      "Hold first board meeting within 30 days.",
    ]),
    tip("Use a CA or service (IndiaFilings, Razorpay Rize, Vakilsearch) for your first incorporation. ₹6,000–₹15,000 well spent to avoid form-rejection loops."),
    warn("Registered office proof must include a recent (under 2 months) utility bill and an NOC from the owner. Stale documents are the #1 reason for SPICe+ rejection."),
  ],

  "Opening a Startup Bank Account": [
    p("Your bank account is your daily operating tool. Pick wrong and you'll spend years dealing with bad UPI limits, slow international wires, and unhelpful relationship managers."),
    h("Top startup-friendly current accounts (India, 2024)"),
    li([
      "ICICI iStartup: best for early stage. Zero balance for 12 months, easy KYC, reliable internet banking.",
      "HDFC SmartUp: strong relationship support, decent FX rates, good for Series A and beyond.",
      "Kotak 811 Business: low fees, modern UI, weaker on corporate features.",
      "Axis Easy Access: fast onboarding, good for bootstrapped, weaker FX.",
      "RazorpayX / Open: neobank layers on top of ICICI/RBL — best UX, automation-friendly, weaker for cash deposits.",
    ]),
    h("Documents you'll need"),
    li([
      "Certificate of Incorporation, MOA, AOA.",
      "PAN of the company.",
      "Board resolution authorising account opening and signatories.",
      "KYC of all directors (PAN, Aadhaar, address proof).",
      "Registered office proof.",
    ]),
    tip("Open with two banks: one for primary operations (ICICI/HDFC) and one for FX-heavy work (a neobank or Axis FX-focused branch). Single-bank dependency hurts when things break."),
  ],

  "Founder Restricted Stock Agreement": [
    p("A Founder Restricted Stock Agreement (FRSA) is what gives the company the right to repurchase a co-founder's unvested shares if they leave. Without it, every share issued at incorporation is permanently theirs."),
    h("Key clauses"),
    li([
      "Vesting schedule (4 years, 1-year cliff is standard).",
      "Repurchase right at face value (₹10/share) on departure.",
      "Acceleration on acquisition (single or double trigger).",
      "Definitions of 'Cause', 'Good Reason', 'Disability'.",
      "IP assignment in favour of company.",
      "Confidentiality and non-compete (enforceable scope only).",
    ]),
    ex("Sample vesting clause", "25% of the Restricted Shares shall vest on the first anniversary of the Vesting Commencement Date. The remaining 75% shall vest in 36 equal monthly instalments thereafter."),
    warn("Sign FRSAs at incorporation, not after. Reverse-vesting an existing co-founder later requires their consent and creates unnecessary friction."),
  ],

  "DPIIT Recognition & Startup India Benefits": [
    p("DPIIT (Department for Promotion of Industry and Internal Trade) recognition unlocks tangible benefits: tax holidays, IP fast-track, easier government tenders, and inclusion in SISFS funding."),
    h("Eligibility"),
    li([
      "Pvt Ltd, LLP, or Registered Partnership.",
      "Less than 10 years from incorporation.",
      "Annual turnover under ₹100 Cr.",
      "Working on innovation, development, or improvement of products/services with potential for wealth creation.",
    ]),
    h("Real benefits"),
    li([
      "Section 80-IAC tax holiday: 100% profit deduction for 3 of first 10 years.",
      "Angel tax exemption (Section 56(2)(viib)) on share premium up to ₹25 Cr.",
      "Patent fee rebate (80%) and trademark fee rebate (50%).",
      "Self-certification under 9 labour and environmental laws.",
      "Easier participation in government tenders (no prior experience requirement).",
    ]),
    st([
      "Apply on startupindia.gov.in.",
      "Upload incorporation certificate, write-up on innovation, website link.",
      "Approval typically in 7–10 working days.",
    ]),
    tip("Apply within 90 days of incorporation. Some benefits (like the tax holiday window) start from the recognition date."),
  ],

  "Registered Office Setup": [
    p("Your registered office is the legal address where MCA, ROC, and tax authorities send notices. It must be a real address you can receive mail at — not a vague PO box."),
    h("Acceptable options"),
    li([
      "Co-working space with a dedicated business address (WeWork, 91springboard, Awfis).",
      "Virtual office providers with mail handling (Regus, MyHQ).",
      "Home address (allowed if owned or rented and you have an NOC).",
      "Owned commercial space.",
    ]),
    h("Documents required"),
    li([
      "Recent utility bill (electricity/water, under 2 months old).",
      "Rent agreement or sale deed.",
      "NOC from owner (mandatory for rented and home addresses).",
    ]),
    warn("Some virtual offices are blacklisted by MCA after misuse. Verify the provider has handled at least 50 incorporations. A blacklisted address means re-doing your registration — expensive and slow."),
  ],

  "GST Registration for Startups": [
    p("GST registration is mandatory above ₹20 L (services) or ₹40 L (goods) annual turnover, and immediately if you sell across states or via marketplaces. Below thresholds, you can register voluntarily for input credit benefits."),
    h("Voluntary vs mandatory"),
    li([
      "Mandatory: cross-state supply, e-commerce, agent supply, threshold breach.",
      "Voluntary: claim input tax credit on purchases (rent, software, services).",
      "Composition scheme: turnover under ₹1.5 Cr, single rate (1–6%), no input credit. Suits trading and small services.",
    ]),
    h("Filing cadence"),
    li([
      "GSTR-1 (sales): monthly by 11th, or quarterly under QRMP.",
      "GSTR-3B (summary + payment): monthly by 20th.",
      "GSTR-9 (annual return): once a year.",
    ]),
    tip("If most of your customers are businesses (B2B), register early. They want input credit and may not buy from an unregistered vendor."),
    warn("Late filing penalty is ₹50–₹200 per day plus interest. Set calendar reminders or use a CA/automation tool from day one."),
  ],

  "PAN, TAN, and PF/ESIC Registration": [
    p("Post-incorporation, you'll need a stack of registrations. SPICe+ now bundles most of them, but the operational obligations differ. Here's the sequence and which to delay."),
    li([
      "PAN: auto-issued via SPICe+. Required for everything.",
      "TAN: auto-issued via SPICe+. Required to deduct TDS on salaries, rent, professional fees.",
      "EPFO: auto-allotted via SPICe+. Compliance kicks in only when you cross 20 employees.",
      "ESIC: auto-allotted via SPICe+. Compliance kicks in at 10 employees.",
      "Professional Tax: state-specific. Maharashtra, Karnataka, WB, etc. Register when you hire your first employee.",
      "Shops & Establishment: state-specific. Register within 30 days of starting operations.",
    ]),
    tip("EPFO/ESIC numbers are issued but compliance is conditional. Don't start filing returns until you cross the headcount threshold — you'll create unnecessary work."),
  ],

  "Co-founder Agreement Essentials": [
    p("A co-founder agreement is the operating constitution of your company. It governs how decisions are made, how disputes are resolved, and what happens when life events disrupt the team."),
    h("The 8 sections every agreement must cover"),
    li([
      "Roles and responsibilities — clear ownership of functions.",
      "Equity split and vesting — ratios, schedule, repurchase rights.",
      "Decision-making — what needs unanimous, majority, or single approval.",
      "IP assignment — all current and future IP belongs to the company.",
      "Confidentiality and non-compete — scope and duration.",
      "Compensation — salary now, salary at funding milestones.",
      "Exit and departure — voluntary, involuntary, death/disability.",
      "Dispute resolution — arbitration clause, governing law.",
    ]),
    tip("Write the agreement assuming the friendliest co-founder might leave on the worst terms. That stress test reveals clauses you forgot."),
    warn("Templates are starting points, not finished documents. Get a startup-specialist lawyer to review before signing. ₹40,000–₹80,000 today vs lakhs in litigation later."),
  ],

  // ---------- Legal & Compliance ----------
  "IP Assignment for Founders & Employees": [
    p("Intellectual property — code, designs, brand, methods — is what makes a startup valuable. If it isn't owned by the company in writing, it isn't owned at all. Investors will refuse to fund until every contributor has signed an IP assignment."),
    h("Who needs to sign"),
    li([
      "Every co-founder (typically inside the FRSA or co-founder agreement).",
      "Every employee (inside the employment contract).",
      "Every contractor or freelancer (separate IP assignment, signed before work starts).",
      "Every advisor receiving equity.",
    ]),
    h("Key clause language"),
    p("'All Intellectual Property created by the Contributor in the course of providing services to the Company, whether during or outside business hours, shall vest exclusively and irrevocably in the Company.'"),
    warn("Don't accept work from a contractor without a signed IP assignment dated before they start. A contractor who built your core algorithm in 2022 can claim co-ownership in 2026 if there's no document."),
  ],

  "NDAs That Actually Protect You": [
    p("NDAs (Non-Disclosure Agreements) protect confidential information. They're essential for vendor and partnership conversations, and useless — even harmful — in some founder/investor contexts."),
    h("When to use"),
    li([
      "Vendor or partnership discussions involving your roadmap or customer list.",
      "Acquisition or M&A conversations.",
      "Hiring senior candidates who will see customer data.",
    ]),
    h("When NOT to use"),
    li([
      "Investor pitches — VCs see hundreds of decks; an NDA-required pitch will get skipped.",
      "Casual mentor or advisor conversations.",
      "Hackathon or community discussions.",
    ]),
    h("Mutual vs one-way"),
    p("Mutual NDA: both parties protect each other's information. Use this 90% of the time. One-way NDA: only one party's info is protected. Use only when you're receiving sensitive data (e.g., customer's user data for a pilot)."),
    tip("Keep the NDA short — 2 pages max. Long NDAs signal paranoia and slow deals."),
  ],

  "Trademark Registration in India": [
    p("A registered trademark gives you exclusive rights to your brand name, logo, or tagline in a specific class of goods/services. It's the legal moat for your brand. The process takes 12–18 months but enforcement starts from filing date."),
    h("The process"),
    st([
      "Trademark search on ipindia.gov.in for your class. Cost: free. Time: 1 day.",
      "File TM-A application. Cost: ₹4,500 (startup, individual) or ₹9,000 (others). Time: same day filing.",
      "Examination by registry. Time: 3–6 months. Either accepted or 'objection' (Examination Report).",
      "Reply to objection within 30 days. Time: 2–4 months back-and-forth.",
      "Publication in Trademark Journal. Time: 4 months opposition window.",
      "If no opposition, registration certificate issued. Total: 12–18 months.",
    ]),
    h("Common gotchas"),
    li([
      "Class selection: your brand applies to a specific class (45 total). Software is Class 9 + Class 42; e-commerce is Class 35.",
      "Distinctiveness: descriptive names (e.g., 'Best Foods') often get rejected. Made-up or arbitrary names sail through.",
      "Use in commerce: file 'Proposed to be Used' if you haven't launched; 'Used Since' if you have evidence.",
    ]),
    tip("DPIIT-recognised startups get 50% off government fees. Always claim it."),
  ],

  "Patent Basics for Startups": [
    p("Patents protect inventions — novel, non-obvious, useful processes, machines, or compositions. They're powerful in deep-tech, hardware, and biotech. For most software startups, patents are slow, expensive, and rarely worth the effort."),
    h("Patentable in India"),
    li([
      "Novel hardware, mechanical, chemical, or biological inventions.",
      "Software 'with technical effect' (rare; pure algorithms are not patentable in India).",
      "Process patents for new manufacturing methods.",
    ]),
    h("Not patentable"),
    li([
      "Pure software algorithms (Section 3(k) of Patents Act).",
      "Business methods.",
      "Mathematical methods.",
      "Discovery of natural phenomena.",
    ]),
    h("Provisional vs complete"),
    p("File a Provisional Application first (₹1,600 for startup) to lock in the priority date. You then have 12 months to file the Complete Application. This buys time to refine the invention while protecting it."),
    h("Cost reality"),
    p("Indian patent: ₹40,000–₹1.5 L total over 4–6 years. PCT international filing: ₹3–8 L. Worth it for hardware/deep-tech moats; rarely worth it for SaaS."),
    tip("Talk to a patent attorney before publishing or pitching publicly. Public disclosure can destroy patentability in many countries."),
  ],

  "Vendor & Customer Contract Templates": [
    p("Most disputes between startups and their vendors or customers come from missing or vague contracts. A clear MSA + SOW prevents 90% of these disputes."),
    h("Master Service Agreement (MSA)"),
    p("The umbrella contract. Defines: parties, governing law, payment terms, IP ownership, confidentiality, indemnity, limitation of liability, termination. Signed once per relationship."),
    h("Statement of Work (SOW)"),
    p("Specific to a project or engagement. Defines: scope, deliverables, timelines, milestones, fees. Signed for each engagement under the MSA."),
    h("Critical clauses to never skip"),
    li([
      "Payment terms with explicit late-fee and dispute mechanisms.",
      "IP ownership — work-for-hire is the default for most engagements.",
      "Indemnity caps — limit liability to 12 months of fees, not unlimited.",
      "Termination — both for cause and for convenience, with notice periods.",
      "Governing law and venue (typically Bangalore/Mumbai for India deals).",
    ]),
    warn("Don't use a US SaaS template for an India-India deal. Indemnity, jurisdiction, and stamp duty clauses must be India-specific."),
  ],

  "Privacy Policy & Terms of Use": [
    p("If you collect any user data — email, name, IP address — you need a Privacy Policy. It's a legal requirement under the IT Act and the upcoming Digital Personal Data Protection Act (DPDP) 2023."),
    h("Privacy Policy must include"),
    li([
      "What data you collect and why.",
      "How long you retain it.",
      "Whether you share with third parties (analytics, payment gateways, etc.).",
      "User rights: access, correction, deletion, withdrawal of consent.",
      "Contact for data protection queries.",
      "Cookie policy if you use cookies.",
    ]),
    h("Terms of Use must include"),
    li([
      "Acceptable use rules.",
      "Account termination conditions.",
      "Disclaimer of warranties.",
      "Limitation of liability.",
      "Refund and cancellation policy (especially for paid products).",
      "Governing law and dispute resolution.",
    ]),
    warn("Generic templates can violate DPDP. The 'Right to Erasure' and 'Consent Withdrawal' clauses must be operationally implementable, not just words on a page."),
  ],

  "Annual ROC Compliance Calendar": [
    p("Every Pvt Ltd has annual MCA filings. Miss them and you face penalties (₹100/day per form, no upper cap), director disqualification, and eventual strike-off."),
    h("Annual compliance calendar"),
    li([
      "Board Meetings: minimum 4 per year, gap not exceeding 120 days.",
      "AGM: within 6 months of FY end (by Sept 30 for March 31 FY).",
      "AOC-4 (financial statements): within 30 days of AGM.",
      "MGT-7 (annual return): within 60 days of AGM.",
      "DIR-3 KYC (for every director): annually by Sept 30.",
      "DPT-3 (deposit return): annually by June 30.",
      "Form 11 (LLPs only): within 60 days of FY end.",
    ]),
    tip("Hire a Company Secretary or use a compliance service (Vakilsearch, IndiaFilings) from year one. ₹15,000–₹30,000/year is cheap insurance against six-figure penalties."),
  ],

  "Statutory Audit & Tax Filings": [
    p("A Pvt Ltd must have its accounts audited annually by a Chartered Accountant, regardless of revenue. Missing this triggers ROC and tax penalties."),
    h("Annual finance compliance"),
    li([
      "Statutory audit by independent CA — within 6 months of FY end.",
      "Income Tax Return (ITR-6) — by Oct 31 (or Nov 30 if transfer pricing applies).",
      "Tax Audit Report (Form 3CD) — required if turnover > ₹1 Cr (business) or ₹50 L (profession).",
      "Transfer Pricing Report — if related-party transactions cross threshold.",
      "Advance tax — quarterly (June 15, Sept 15, Dec 15, March 15).",
    ]),
    h("Choosing an auditor"),
    li([
      "Independent (cannot be your accountant).",
      "Experience with startups in your stage.",
      "Reasonable fees: ₹40,000–₹1.5 L/year for early-stage; higher for funded.",
      "Responsive — late audit reports delay AGM and ROC filings.",
    ]),
    warn("Don't pick the cheapest CA. A bad audit report surfaces during investor diligence and forces re-audits — costly and embarrassing."),
  ],

  "Employment Contracts & Offer Letters": [
    p("Indian labour law is contract-friendly but enforceability hinges on specific clauses being drafted correctly. A vague offer letter creates exposure for both sides."),
    h("Must-have clauses"),
    li([
      "Job title, role, reporting structure.",
      "Compensation: gross CTC breakdown (basic, HRA, special allowance, PF, gratuity, ESOPs separately).",
      "Probation period (3–6 months) and confirmation criteria.",
      "Notice period (30–90 days; longer for senior roles).",
      "Confidentiality and IP assignment.",
      "Non-compete (limited scope, max 12 months, geographically narrow).",
      "Non-solicitation (employees, customers, vendors).",
      "Termination clauses for cause and without cause.",
      "Governing law and dispute resolution.",
    ]),
    warn("Wide non-competes ('cannot work in any tech company in India for 2 years') are unenforceable in India. Keep them narrow: same product category, same customer base, same geography."),
  ],

  "Handling Investor Due Diligence": [
    p("After the term sheet, investors run legal, financial, and commercial diligence. Founders who prepare a clean data room close in 4 weeks; those who don't close in 12+ weeks (if at all)."),
    h("The 80-document data room"),
    li([
      "Corporate: incorporation docs, MOA/AOA, board minutes, share certificates, cap table.",
      "Financial: 3-year financials, monthly P&L, bank statements, GST returns, tax returns.",
      "Legal: contracts (top 20 customers, all vendors, leases), IP assignments, litigation status.",
      "Employment: org chart, employment contracts, ESOP grants, founder agreements.",
      "Commercial: customer list, churn data, unit economics, pipeline.",
      "Compliance: ROC filings, GST, PF/ESIC status, DPIIT certificate.",
    ]),
    st([
      "Build the data room before you start fundraising.",
      "Use a structured tool (Google Drive, Notion, or DocSend) with clear folder hierarchy.",
      "Pre-redact sensitive customer data.",
      "Have your CA and lawyer review before sharing.",
    ]),
    tip("A clean data room signals operational maturity and accelerates trust. It is the cheapest way to look like a Series A company at seed."),
  ],

  "FEMA & Foreign Investment Compliance": [
    p("Accepting investment from a foreign investor (FDI) triggers FEMA compliance. Mishandled, it can invalidate the investment and create personal liability for directors."),
    h("Two routes"),
    li([
      "Automatic route: most sectors, no prior approval. Just file FCGPR within 30 days of share allotment.",
      "Approval route: regulated sectors (defence, telecom, broadcasting). Requires DPIIT/FIPB approval pre-investment.",
    ]),
    h("Mandatory filings"),
    li([
      "FCGPR (Foreign Currency-Gross Provisional Return): within 30 days of share allotment. Filed via FIRMS portal of RBI.",
      "FLA Return: annually by July 15.",
      "Annual Performance Report (if applicable).",
    ]),
    h("Pricing guidelines"),
    p("FDI shares must be priced at or above fair market value as per a registered valuer's report. Pricing below FMV invalidates the investment under FEMA."),
    warn("Late FCGPR filing penalty: 1% of investment amount per quarter, compounded. A ₹5 Cr round filed 6 months late = ₹15+ L penalty. Set a reminder."),
  ],

  // ---------- Finance & Cap Table ----------
  "Modelling Your Burn & Runway": [
    p("Burn is how much cash you spend per month after revenue. Runway is how many months you can sustain that burn before you run out. Get these wrong and you'll fundraise from a position of weakness."),
    h("Calculate burn"),
    p("Net Burn = Cash Out − Cash In (per month). Gross Burn = Cash Out only. Investors care about Net Burn."),
    h("Calculate runway"),
    p("Runway (months) = Cash in Bank ÷ Average Net Burn (last 3 months). Always use the last 3-month average — recent trends matter more than annual averages."),
    h("The 18-month rule"),
    p("Always raise enough to have 18+ months of runway post-close. Fundraising takes 3–6 months. Closing with 12 months runway means you're back fundraising in 6. Closing with 6 means you're closing whatever offer comes."),
    ex("Worked example", "Cash: ₹3 Cr. Last 3 months net burn average: ₹25 L. Runway = 12 months. To get to 18 months runway after close, raise at least 6 months × ₹25 L = ₹1.5 Cr extra (over what you'll keep burning)."),
    tip("Build a 3-scenario model: base, optimistic, conservative. Track which scenario you're tracking against monthly."),
  ],

  "Reading a P&L, Balance Sheet, and Cash Flow": [
    p("Three statements tell the complete story of a business. Founders who can't read them get blindsided by their own CFO and bullied by investors."),
    h("Profit & Loss (P&L)"),
    p("Shows revenue, costs, and profit over a period. Top line: revenue. Below: COGS (cost of goods sold) → Gross Profit → Operating Expenses → EBITDA → Tax → Net Profit. Read top-to-bottom: where is the leakage?"),
    h("Balance Sheet"),
    p("Snapshot at a point in time. Assets = Liabilities + Equity. Watch: cash, receivables, inventory (assets) vs payables, debt (liabilities). High receivables = customers aren't paying. High payables = you're not paying vendors."),
    h("Cash Flow Statement"),
    p("How cash moved during the period. Three sections: Operating, Investing, Financing. Operating cash flow tells you if the core business generates cash. Negative operating cash flow + positive net profit = accounting tricks; investigate."),
    tip("Profit ≠ cash. A profitable company can run out of cash if customers pay slowly. Always look at cash flow first."),
    warn("If your auditor's report has 'qualifications' or 'emphasis of matter', address them before fundraising. Investors read these line by line."),
  ],

  "SaaS Unit Economics: CAC, LTV, Payback": [
    p("Unit economics tell you whether the business model works on a per-customer basis. If unit economics are broken, no amount of growth fixes the company."),
    h("Customer Acquisition Cost (CAC)"),
    p("CAC = Total Sales + Marketing Spend ÷ New Customers Acquired (same period). Include salaries of S&M team. Don't cherry-pick periods."),
    h("Lifetime Value (LTV)"),
    p("LTV = Average Revenue per Customer × Gross Margin × Average Customer Lifespan (years). For SaaS, lifespan = 1 ÷ Annual Churn Rate."),
    h("Payback period"),
    p("CAC Payback = CAC ÷ Monthly Gross Profit per Customer. Measured in months. Healthy SaaS: <12 months. Best-in-class: <6 months."),
    h("LTV:CAC ratio"),
    p("Healthy SaaS: 3:1 or higher. Below 3: you're paying too much to acquire. Above 5: you're under-investing in growth."),
    ex("Worked example", "ARPU: ₹10,000/year. Gross margin: 80%. Annual churn: 20%. Lifespan: 5 years. LTV = ₹10,000 × 80% × 5 = ₹40,000. CAC: ₹15,000. LTV:CAC = 2.7. Marginal — focus on reducing churn."),
    tip("Calculate CAC by channel. The blended number hides expensive channels you should kill."),
  ],

  "Pricing Models for Indian SaaS": [
    p("Pricing is the highest-leverage decision in SaaS. A 10% price increase often delivers more profit than 10% more customers — and is far cheaper to test."),
    h("Common models"),
    li([
      "Per-seat: predictable, easy to sell. Best for collaboration tools.",
      "Usage-based: scales with customer success. Best for infrastructure, APIs, AI.",
      "Tiered (Good/Better/Best): captures different willingness-to-pay. Best for horizontal SaaS.",
      "Freemium: free tier drives discovery, paid drives revenue. Best when network effects exist.",
      "Flat-rate: simplest, leaves money on the table for power users.",
    ]),
    h("Indian pricing reality"),
    li([
      "Indian buyers expect 30–70% discount vs US pricing for the same product.",
      "Annual prepay (with 15–25% discount) is the highest-converting offer.",
      "GST inclusive vs exclusive must be clear; B2B buyers want GST-exclusive.",
      "Razorpay, Stripe, and bank transfer are the standard payment methods.",
    ]),
    tip("Don't be the cheapest. Cheap signals weak. Price 20–30% below the global leader and over-deliver on local support."),
  ],

  "Setting up Accounting from Day One": [
    p("Bad bookkeeping in year one becomes a nightmare in year three when investors run diligence. Set it up right at incorporation."),
    h("Choose the tool"),
    li([
      "Zoho Books: best for India. GST-native, affordable, strong UI.",
      "QuickBooks: global standard, decent India support, more expensive.",
      "Tally: legacy, accountant-friendly, weak modern integrations.",
      "Razorpay X: layers automation on top, integrates with banks and payroll.",
    ]),
    h("Set up the chart of accounts correctly"),
    li([
      "Revenue: by product line and customer segment.",
      "COGS: hosting, payment gateway fees, third-party APIs.",
      "Operating expenses: salaries, rent, marketing, software, professional fees.",
      "Capital: founder contribution, share capital, reserves.",
    ]),
    h("Monthly closing discipline"),
    p("Close books within 7 days of month-end. Reconcile bank, credit card, and payment gateway. Review P&L with co-founder. This rhythm catches errors early and prevents 6-month cleanups before audits."),
    tip("Hire a part-time accountant (₹15,000–30,000/month) from month two. Founder-done accounting always breaks at scale."),
  ],

  "Founder Salary & Tax Optimisation": [
    p("Most founders pay themselves nothing for the first 6–12 months and then suddenly pay themselves too much when funding lands. Both extremes hurt — burnout from no income, or distorted unit economics from inflated comp."),
    h("Recommended salary by stage"),
    li([
      "Pre-seed / bootstrapped: ₹0–50,000/month if you can survive on savings.",
      "Post-seed (₹2–10 Cr raised): ₹1–2 L/month.",
      "Post-Series A (₹15+ Cr raised): ₹2.5–5 L/month.",
      "Always include yourself in the cap table model and burn calculation.",
    ]),
    h("Salary structure for tax efficiency"),
    li([
      "Basic: 40–50% of CTC.",
      "HRA: 40–50% of basic; claim if you pay rent.",
      "LTA, telephone, internet, books: tax-free perks within limits.",
      "Special allowance: balance.",
      "PF and gratuity: mandatory.",
    ]),
    tip("ESOPs for founders are taxed twice (at exercise and at sale). Most Indian founders take only equity from their FRSA, not additional ESOPs."),
  ],

  "Convertible Notes vs SAFEs vs CCDs": [
    p("Convertible instruments delay the valuation conversation to a future round. They're founder-friendly when used at pre-seed and seed. In India, regulatory quirks make CCD the most common variant."),
    h("Convertible Note"),
    p("Debt that converts to equity at the next priced round, usually with a discount and/or valuation cap. Common globally; less common in India because of FEMA rules on debt from foreign investors."),
    h("SAFE (Simple Agreement for Future Equity)"),
    p("Not debt, not equity. Converts to equity at the next round. Y Combinator's standard. In India, SAFEs are not directly issuable to foreign investors under FEMA — they must be structured as Compulsorily Convertible instruments."),
    h("CCD (Compulsorily Convertible Debenture)"),
    p("The Indian workaround. Treated as equity for FDI purposes. Must convert into equity within 10 years of issuance. Most Indian seed rounds from foreign investors use CCDs."),
    h("Key terms in any convertible"),
    li([
      "Valuation cap: maximum valuation at which the note converts.",
      "Discount: % off the next round's price (typical: 15–20%).",
      "Most Favoured Nation (MFN): note holder gets the best terms of any later note.",
      "Conversion event: usually next priced round of ₹X Cr or more.",
    ]),
    tip("Cap and discount both apply; the investor gets whichever produces more equity at conversion. Founders should model both scenarios before signing."),
    warn("Multiple convertible rounds with overlapping caps and discounts create ugly cap tables. After 2 convertibles, do a priced round — even a small one."),
  ],

  // ---------- Fundraising ----------
  "Building Your Pitch Deck": [
    p("A great pitch deck is 12 slides, designed to be skimmed in 3 minutes by an investor on a phone. It's a teaser, not an explainer. The goal is the next meeting, not the term sheet."),
    h("The 12 essential slides"),
    st([
      "Cover: company name, one-line description, contact.",
      "Problem: who hurts, how much, why now.",
      "Solution: your product, in plain language.",
      "Market: TAM, SAM, SOM, with credible sources.",
      "Product: 2–3 screenshots or workflow.",
      "Traction: revenue, users, growth rate. Numbers > words.",
      "Business model: how you make money, unit economics.",
      "Go-to-market: how you acquire customers.",
      "Competition: 2x2 matrix or feature comparison.",
      "Team: founders' relevant experience.",
      "Financials & ask: 18-month projection, round size, use of funds.",
      "Vision: where you go in 5 years.",
    ]),
    h("Slides VCs read first"),
    p("Most Indian VCs read: cover → traction → team → market. If those four don't make them want to meet, the rest doesn't matter. Spend 50% of your design time on those four slides."),
    tip("Keep word count under 30 per slide. If it needs more, you're explaining instead of pitching."),
    warn("Don't put NDA requests, password protection, or 'do not share' watermarks. VCs share decks internally; these signals make them skip you."),
  ],

  "Mastering the 3-Minute Pitch": [
    p("In a cold meeting, you have 3 minutes before the investor decides whether to engage. Use this structure: Hook → Problem → Solution → Traction → Ask."),
    h("The structure"),
    st([
      "Hook (15 sec): one sentence that creates curiosity. 'We help 2 Cr Indian SMBs collect payments without WhatsApp chaos.'",
      "Problem (30 sec): who hurts, how much, what they do today.",
      "Solution (45 sec): your product in 2 sentences + one example.",
      "Traction (45 sec): real numbers — users, revenue, growth, retention.",
      "Ask (15 sec): round size, what it funds, what you want from this investor.",
      "Q&A (remaining time): let them drive.",
    ]),
    h("Common pitch mistakes"),
    li([
      "Starting with company history instead of the hook.",
      "Listing features instead of customer outcomes.",
      "Vague TAM ('it's a huge market').",
      "No specific ask ('we're raising about ₹3–7 Cr').",
      "Defensive answers when challenged.",
    ]),
    tip("Record yourself pitching. Watch it back. The pauses, the filler words, the lack of conviction — all visible immediately."),
  ],

  "Building Your Investor List": [
    p("A great investor list has 40–60 names: lead candidates, follow candidates, and angels. Building it well saves 3 months of fundraising."),
    h("Sources"),
    li([
      "Crunchbase, Tracxn — search by stage, sector, geography.",
      "VC website portfolio pages — filter for ones investing in adjacent companies.",
      "Twitter — most Indian VCs are active and thesis-public.",
      "Founder community — ask 5 founded peers who they liked working with.",
    ]),
    h("Qualify each name"),
    li([
      "Stage fit: do they invest at your stage and cheque size?",
      "Sector fit: have they invested in your space (without being conflicted)?",
      "Recent activity: 2+ deals in the last 12 months?",
      "Cheque size: matches your round?",
      "Reputation: founder-friendly per backchannel checks.",
    ]),
    h("Get warm intros"),
    p("Cold emails work but warm intros work 5x better. For each VC: find 2–3 founders they've backed, reach out asking for an honest take, and request an intro if it's a fit. Mediocre founders ask for intros first; great founders ask for an honest take first."),
    tip("Track in a spreadsheet: name, fund, partner, status, last contact, next step. Update weekly during the raise."),
  ],

  "Running a Tight Fundraise Process": [
    p("A great fundraise feels like a sales process: tight pipeline, parallel meetings, momentum, and a forcing function. A bad fundraise is a series of one-off meetings spread over 9 months."),
    h("The 6-week structure"),
    st([
      "Week 1: warm up top 5 investors with informal updates. Don't pitch yet.",
      "Week 2: open the round. Send pitch + data room to top 20 in parallel.",
      "Week 3: first meetings. Drive momentum — share traction updates weekly.",
      "Week 4: partner meetings and diligence. Set expectation of 'closing in 2 weeks'.",
      "Week 5: term sheets. Negotiate from a position of multiple offers.",
      "Week 6: pick the lead. Communicate to others. Run docs in parallel.",
    ]),
    h("Momentum tactics"),
    li([
      "Send weekly updates to all engaged investors (KPIs, customer wins).",
      "Share that other investors are diligencing — without naming.",
      "Set a soft deadline ('we hope to close by end of month') without lying.",
    ]),
    warn("Don't accept the first term sheet without 2–3 in parallel. The leverage from competition is the difference between a good deal and a great one."),
  ],

  "What Indian Angels Actually Want": [
    p("Indian angels write ₹5 L–₹50 L cheques. They're often founders or operators themselves. They expect something different from VCs."),
    h("What they care about"),
    li([
      "Founder hustle and clarity, more than market sizing.",
      "Personal connection — they want to like you.",
      "Some early validation (5–10 customers, even if non-paying).",
      "Reasonable cheque-to-ownership: ₹15 L for 1.5–3% is normal at pre-seed.",
    ]),
    h("Where to find them"),
    li([
      "AngelList India — syndicates from active angels.",
      "LetsVenture — pooled angel rounds.",
      "Indian Angel Network (IAN), Mumbai Angels — formal networks.",
      "Operator-angels via warm intros from your network.",
    ]),
    h("Setting expectations"),
    p("Angels rarely follow on. Many invest, then disappear unless asked. Send monthly updates; ask for help on specific things (intros, hiring). The best angels become long-term advisors."),
    tip("Don't take 30 angels at ₹5 L each. The cap table chaos isn't worth it. Aim for 5–10 angels with ₹15–50 L cheques each, plus a small lead."),
  ],

  "Pre-seed vs Seed vs Series A in India": [
    p("Stage definitions blur, but expectations don't. Knowing what each stage requires saves you from pitching too early or too late."),
    h("Pre-seed"),
    li([
      "Stage: idea or prototype.",
      "Round size: ₹50 L–₹3 Cr.",
      "Valuation: ₹5–25 Cr post.",
      "Investors: angels, micro-VCs (Antler, Better Capital, All In Capital).",
      "Milestone: prove problem and basic solution.",
    ]),
    h("Seed"),
    li([
      "Stage: early product, first customers.",
      "Round size: ₹3–15 Cr.",
      "Valuation: ₹20–80 Cr post.",
      "Investors: Blume, Elevation, Stellaris, India Quotient, etc.",
      "Milestone: prove repeatable customer acquisition.",
    ]),
    h("Series A"),
    li([
      "Stage: product–market fit, ₹3–10 Cr ARR for SaaS.",
      "Round size: ₹15–60 Cr.",
      "Valuation: ₹100–400 Cr post.",
      "Investors: Accel, Sequoia/Peak XV, Lightspeed, Nexus, Matrix.",
      "Milestone: prove the company can scale to ₹100 Cr ARR.",
    ]),
    tip("Don't try to skip stages. Raising 'pre-seed at seed valuation' means you'll be raising again in 12 months without enough progress."),
  ],

  "Handling Investor Rejection": [
    p("You will hear no 50+ times during a fundraise. Most rejections are not about you. They're about fund mandate, portfolio conflict, partner bandwidth, or simply timing."),
    h("Categorise the no"),
    li([
      "Soft no ('come back when you have more traction'): keep them on monthly updates.",
      "Hard no with specific feedback: thank them, ask if they'd refer 2 other investors.",
      "Ghosted: chase twice, then move on. Don't take it personally.",
    ]),
    h("Extract value from each no"),
    p("Ask: 'What would have made you invest?' The answers cluster — if 5 investors mention the same gap, fix it before the next round of pitches."),
    tip("Keep a 'no but stay in touch' list. Many of those become yeses 6–12 months later when you've shown progress."),
    warn("Don't argue with a rejection. The investor has decided. Arguing burns the relationship and the warm-intro chain behind them."),
  ],

  "Bridge Rounds and Down Rounds": [
    p("A bridge round buys you time when the next priced round is delayed. A down round prices the company below the previous round. Both are stigmatised but sometimes necessary — handled badly, they kill morale and dilute brutally."),
    h("Bridge round mechanics"),
    li([
      "Usually convertible (CCD or note).",
      "Cap at the next-round valuation, with a 15–25% discount.",
      "Size: 6–9 months of runway, no more.",
      "From existing investors first; new investors second.",
    ]),
    h("Down round mechanics"),
    p("If your last round was at ₹100 Cr post and the new round is at ₹70 Cr post, anti-dilution clauses kick in. Existing preferred investors get more shares to compensate, which dilutes founders further."),
    h("Surviving a down round"),
    li([
      "Communicate honestly with existing investors before negotiating.",
      "Push for broad-based weighted average anti-dilution (not full ratchet).",
      "Refresh the ESOP pool to retain talent demoralised by the optics.",
      "Reset the founder narrative — focus on the path forward, not the past valuation.",
    ]),
    tip("A clean bridge with existing investors signals confidence. A bridge with new investors at a worse cap signals desperation. Order matters."),
  ],

  "Government Grants & Schemes": [
    p("India has surprisingly good non-dilutive funding. Grants are slow, paperwork-heavy, and selective — but free money is free money."),
    h("Top schemes"),
    li([
      "Startup India Seed Fund Scheme (SISFS): ₹20 L grant + ₹50 L convertible. Apply via incubators.",
      "SIDBI Fund of Funds: ₹10,000 Cr corpus invested in VCs that back Indian startups.",
      "BIRAC: biotech-focused grants up to ₹50 L (BIG scheme) and ₹2 Cr (BIPP).",
      "MeitY TIDE 2.0: deep-tech and electronics grants up to ₹4 L per startup.",
      "NIDHI PRAYAS: ₹10 L prototype grant via incubators.",
      "State-level: KSUM (Kerala), TANSEED (Tamil Nadu), Karnataka StartUp Cell, etc.",
    ]),
    h("Apply through the right gateway"),
    p("Most schemes route through approved incubators. Get into a recognised incubator first; the application becomes 5x easier. Top incubators: T-Hub, IIM-Bangalore NSRCEL, IIT-Madras IC&SR, IIIT-Hyderabad CIE."),
    tip("Apply for grants in parallel with VC fundraising — they don't compete. Grant capital extends runway and signals validation."),
  ],

  "Closing Mechanics: From Term Sheet to Money": [
    p("The term sheet is signed. Now the real work starts. Closing typically takes 4–10 weeks and involves three parallel workstreams: legal, financial, and regulatory."),
    h("Legal workstream"),
    li([
      "Definitive Agreements: SHA (Shareholders Agreement) and SSA (Share Subscription Agreement).",
      "Drafted by investor's lawyer; reviewed by yours.",
      "Negotiation focus: anti-dilution, board, vesting, drag-along, ROFR.",
      "Founders sign FRSA, IP assignments, and updated employment agreements.",
    ]),
    h("Financial workstream"),
    li([
      "Closing financials: clean trial balance, latest cap table.",
      "Investor diligence questions answered (60–80 docs).",
      "Tax structure confirmed.",
    ]),
    h("Regulatory workstream"),
    li([
      "Board resolution authorising allotment.",
      "Shareholder resolution if required.",
      "Share allotment within 60 days of receiving funds.",
      "FCGPR filing within 30 days of allotment (for FDI).",
      "PAS-3 (return of allotment) with ROC.",
    ]),
    tip("Set a closing checklist with owners and dates. The reason most closes slip is no single person owning the workflow."),
    warn("Don't spend the money before share allotment is complete and FCGPR is filed. Premature spending creates FEMA exposure."),
  ],

  "Investor Updates That Build Trust": [
    p("A monthly investor update is the cheapest and highest-ROI relationship-building activity a founder does. It compounds trust, surfaces help, and pre-funds your next round."),
    h("The 5-section format"),
    li([
      "Highlights: 3–5 wins of the month.",
      "Lowlights: 2–3 things that didn't go well + what you're doing about it.",
      "Metrics: revenue, users, growth, runway. Same numbers every month.",
      "Asks: specific intros, hires, advice.",
      "Cash position: bank balance, monthly burn, runway months.",
    ]),
    h("Cadence rules"),
    li([
      "Monthly, before the 10th.",
      "Same format every time — investors skim, they need pattern matching.",
      "Send to all investors and key advisors.",
      "BCC to avoid reply-all chains.",
    ]),
    tip("Be honest about lowlights. Investors trust founders who admit struggles more than founders whose updates are always rainbows. Honesty pre-funds the next round."),
  ],

  "Saying No to the Wrong Money": [
    p("Bad money is worse than no money. A misaligned investor on your cap table can block your next round, force unwanted exits, and drain founder energy for years."),
    h("Red flags during diligence"),
    li([
      "Aggressive term sheet (participating preference, full ratchet, founder buyback rights).",
      "Slow or evasive references from their past portfolio.",
      "Trying to add their consultants/auditors as conditions.",
      "Pushing you to fire team members as a condition.",
      "Vague on board behaviour, signal rights, follow-on commitment.",
    ]),
    h("Reference-check the investor"),
    p("For every term sheet, talk to 3 founders they've backed — at least one whose company didn't go well. Ask: 'How did they behave when things were hard?'"),
    tip("Walking away from a term sheet feels terrifying. It's also one of the most experienced-founder things you can do. Bad money compounds; good money compounds; mixing them destroys both."),
  ],

  // ---------- Hiring & ESOPs ----------
  "Writing Job Descriptions That Attract A-Players": [
    p("Bad JDs read like checklists. Great JDs read like opportunities — they describe the outcome the role exists to deliver, the person it's perfect for, and the company they'd be joining."),
    h("Structure that converts"),
    st([
      "One-line role pitch: 'Build the data team that powers a 10x growth year.'",
      "About the company: 3 sentences on mission, traction, why now.",
      "What you'll do: 4–6 outcomes (not tasks).",
      "What you bring: 3 must-haves, 3 nice-to-haves.",
      "What we offer: comp range, ESOP, work mode, growth path.",
      "How to apply: clear instruction, response time commitment.",
    ]),
    h("Outcomes vs tasks"),
    p("Bad: 'Manage the SEO strategy.' Great: 'Take organic traffic from 5K to 50K monthly visitors in 12 months.' Outcomes attract A-players; tasks attract execution-only candidates."),
    tip("Always include a salary range. JDs without one signal opacity and lose 30%+ of qualified applicants who self-select out of conversations they think will waste time."),
  ],

  "Sourcing Your First 10 Engineers": [
    p("Without an employer brand, you can't passively wait for applications. The first 10 engineers come from active sourcing, founder-led pitches, and ruthless follow-up."),
    h("Channels that actually work"),
    li([
      "Cuvette, CutShort, Wellfound (AngelList): startup-friendly, decent quality at seed.",
      "LinkedIn outbound: search by skill + company. Personalised messages get 20–30% response.",
      "Twitter / X: tag relevant communities; founders who post hire faster.",
      "Referrals: existing team's network; offer cash + ESOPs for closes.",
      "University placement cells: IIT, IIIT, NIT — strong for fresher hires.",
    ]),
    h("The founder-led close"),
    p("For senior engineers, the founder must do the closing call. Tech leads care about the founder's vision and judgment, not HR's culture deck. Allocate 4–6 hours per week to closing in the first year."),
    tip("Hire one slightly senior engineer first ('staff' or 'senior') to anchor the team. They'll attract 5+ peers in the next year."),
  ],

  "Structured Interviewing & Hiring Scorecards": [
    p("Unstructured interviews are biased and unreliable. Structured interviews with scorecards reduce bad hires by 50–70% and create a data trail for future calibration."),
    h("Build a scorecard for every role"),
    li([
      "Mission: one sentence on the role's purpose.",
      "Outcomes: 4–6 measurable goals for first 12 months.",
      "Competencies: 5–8 must-have abilities (e.g., 'systems thinking', 'customer empathy').",
      "Rating scale: 1 (poor) to 5 (excellent) for each competency.",
    ]),
    h("Run interviews against the scorecard"),
    li([
      "Each interviewer assesses 1–2 competencies, not all.",
      "Use behavioural questions: 'Tell me about a time you...'.",
      "Probe with the STAR framework: Situation, Task, Action, Result.",
      "Score immediately after the interview, not days later.",
    ]),
    h("Calibration meeting"),
    p("All interviewers meet, share scores, debate gaps. Average scores are misleading; one interviewer's 2 on a critical competency should outweigh four 4s. Decision: hire / no hire / need another loop."),
    tip("Always do a reference call. Two minimum, ideally with people the candidate didn't suggest. Backchannel via shared connections."),
  ],

  "Compensation Benchmarks (India, 2024)": [
    p("Compensation varies wildly by stage, city, and skill. These ranges reflect actual offers from 200+ funded Indian startups in 2024."),
    h("Engineering"),
    li([
      "Junior (0–2 yr): ₹6–12 L cash + 0.05–0.15% ESOP.",
      "Mid (3–5 yr): ₹15–30 L cash + 0.1–0.4% ESOP.",
      "Senior (6–10 yr): ₹35–70 L cash + 0.2–0.6% ESOP.",
      "Staff / Principal: ₹70 L–₹1.5 Cr cash + 0.4–1% ESOP.",
    ]),
    h("Product"),
    li([
      "APM / PM (0–3 yr): ₹15–30 L cash + 0.1–0.3% ESOP.",
      "Senior PM (4–7 yr): ₹35–60 L cash + 0.3–0.6% ESOP.",
      "Group PM / Principal: ₹70 L–1.2 Cr cash + 0.5–1% ESOP.",
    ]),
    h("GTM"),
    li([
      "SDR / BDR: ₹6–12 L cash + variable + 0.05% ESOP.",
      "AE: ₹15–35 L cash (60/40 split) + 0.1–0.3% ESOP.",
      "Sales Lead: ₹40–80 L cash + 0.3–0.7% ESOP.",
    ]),
    h("Leadership"),
    li([
      "VP-level: ₹70 L–1.5 Cr cash + 0.5–2% ESOP.",
      "C-level (post-Series A): ₹1–3 Cr cash + 1–4% ESOP.",
    ]),
    tip("Adjust by stage: pre-seed pays cash 30–40% lower, ESOPs 50%+ higher than these ranges. Series B+ pays cash close to MNC rates, ESOPs lower."),
  ],

  "Building Your First Sales Team": [
    p("Founder-led sales is the right model for the first 10–20 customers. Beyond that, scale requires a real sales function. Hiring this team too early is the #1 reason early-stage startups burn cash on flat revenue."),
    h("When to hire your first AE"),
    li([
      "Founder is consistently closing > 1 deal/month.",
      "Repeatable playbook documented (ICP, pitch, objections, pricing).",
      "Pipeline > capacity — leads are sitting unworked.",
      "12+ months of runway to fund the ramp.",
    ]),
    h("First AE profile"),
    li([
      "3–7 years experience, sold a similar product to similar customers.",
      "Comfortable in scrappy environments, not waiting for marketing to feed leads.",
      "Strong outbound muscle (you don't have inbound yet).",
      "OTE: ₹25–45 L (60% base / 40% variable). ESOP: 0.1–0.3%.",
    ]),
    h("Comp plan structure"),
    p("Base + variable. Variable tied to ARR closed. Accelerators above quota (e.g., 2x commission rate above 100% attainment). Quota: 3–5x OTE. Pay commission on collections, not bookings, until cash collection is mature."),
    h("The 90-day ramp"),
    li([
      "Days 1–30: shadow founder calls, study deals, build pipeline.",
      "Days 31–60: lead small deals with founder backup.",
      "Days 61–90: close own deals; quota at 50% by day 90.",
      "Full quota: month 4 onwards.",
    ]),
    warn("Don't hire 2 AEs at once before the first one ramps. If the playbook isn't repeatable for one, two won't fix it — you'll just burn 2x faster."),
  ],
};
