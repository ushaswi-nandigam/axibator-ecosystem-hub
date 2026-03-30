import { motion } from "framer-motion";
import { Target, Eye, Zap, MapPin, Users, Rocket, Globe, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const originPoints = [
  "Students with ideas were lost in outdated curriculum",
  "Small-town founders had no access to early believers",
  "Theory-heavy incubators asking for pitch decks before ideas",
  "English fluency prioritized over clarity of intent",
  "Startup pedigree valued over real intent to build",
];

const differentiators = [
  {
    icon: Zap,
    title: "Execution over theory",
    desc: "You'll build, break, launch. No endless slides or theoretical frameworks.",
  },
  {
    icon: MapPin,
    title: "We meet you where you are",
    desc: "Whether that's a tier-3 town or a college hostel. Geography doesn't limit ambition.",
  },
  {
    icon: Users,
    title: "Community-native",
    desc: "Everything is peer-led, mentor-backed, founder-run. Real connections, not networking.",
  },
  {
    icon: Rocket,
    title: "Beyond slides",
    desc: "From rural labs to Builder Nest sprints, this is real work with real impact.",
  },
];

const team = [
  { name: "Arjun Kumar", role: "Founder & Lead Architect", location: "Andhra Pradesh", desc: "Building first-mile infrastructure for grassroots founders across India." },
  { name: "Priya Nayak", role: "Zone Lead - Coastal AP", location: "Vijayawada, AP", desc: "Student founder turned community builder. Connecting tier-2/3 college entrepreneurs." },
  { name: "Rakesh Gupta", role: "Village Innovation Lead", location: "Warangal, Telangana", desc: "Rural innovator and mentor. Building ground-up solutions for real problems." },
  { name: "Anjali Reddy", role: "Program Architect", location: "Guntur, AP", desc: "Designing execution-first experiences for first-time builders." },
  { name: "Sriram Venkat", role: "Tech & Alumni Network", location: "Hyderabad, Telangana", desc: "Connecting builders with technical mentorship and resources." },
  { name: "Kavya Sharma", role: "Community & Outreach", location: "Visakhapatnam, AP", desc: "Building bridges between campus clubs, rural NGOs, and innovation ecosystems." },
];

const partners = [
  { name: "Local Innovation Cells", tag: "Campus Partners" },
  { name: "Global Tech Operators", tag: "Mentorship" },
  { name: "Campus Clubs", tag: "Community" },
  { name: "Rural NGOs", tag: "Grassroots" },
  { name: "WissionX Ecosystem", tag: "Infrastructure" },
  { name: "FoundersNest", tag: "Alumni Network" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="hero-dark relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-[30%] left-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-accent/[0.04] blur-[100px]" />

        <div className="container relative text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="section-label-light">
            About Axibator
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-extrabold text-secondary-foreground leading-[1.05] mt-4"
          >
            Why We{" "}
            <span className="text-primary">Exist</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-secondary-foreground/60 leading-relaxed"
          >
            India is bursting with talent—but most incubators still cater to the privileged few.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 max-w-2xl mx-auto text-base text-secondary-foreground/50 leading-relaxed"
          >
            Axibator exists to unlock the raw, gritty, unstoppable potential of student, rural, and small-town founders.{" "}
            <span className="text-accent font-semibold">We're the battleground for builders who start before they're ready.</span>
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding section-light">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            {[
              { icon: Target, title: "Mission", text: "To decentralize startup incubation by enabling grassroots and student founders with practical direction, peer-driven support, and execution-first infrastructure." },
              { icon: Eye, title: "Vision", text: "To be India's most action-first, inclusive, and premium incubation experience — made for underdog builders with global ambition." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="relative"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">{item.title}</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-padding section-light-alt">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-2 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="section-label">Our Origin</span>
              <h2 className="section-title text-foreground">The Pattern<br />We Saw</h2>
              <div className="mt-10 space-y-5">
                {originPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-primary/60 shrink-0" />
                    <p className="text-muted-foreground text-lg">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Axibator emerged to <span className="text-primary">flip the model.</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                It started with honest conversations in classrooms, hostels, chai stalls, and shared WhatsApp groups. We realized what grassroots founders needed wasn't just inspiration — but systems, grit, mentorship, and the confidence to start ugly and build loud.
              </p>
              <div className="relative pl-6 border-l-2 border-accent/40">
                <p className="text-xl italic text-foreground/80 leading-relaxed">
                  "What started as a WhatsApp group between passionate builders became a movement."
                </p>
              </div>
              <p className="mt-8 text-muted-foreground leading-relaxed">
                Today, we're laying the foundation across Andhra Pradesh, Telangana, and beyond — from villages to college clubs, from living rooms to Builder Nests. The future is being built. And it starts here.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-padding section-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="section-header"
          >
            <span className="section-label">What Sets Us Apart</span>
            <h2 className="section-title text-foreground">What Makes Us<br />Different</h2>
          </motion.div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-5 transition-colors group-hover:bg-primary/20">
                  <d.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{d.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who's Behind */}
      <section className="hero-dark section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--accent)) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-header"
          >
            <span className="section-label-light">The Team</span>
            <h2 className="section-title text-secondary-foreground">Who's Behind<br />Axibator?</h2>
            <p className="section-desc text-secondary-foreground/50">
              Built by a team of young founders, operators, and ecosystem enablers at Wission Axis — a startup incubator that believes India's next great founders are sitting in classrooms and hostels, not boardrooms.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.03] transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 mb-4 text-xl font-bold text-primary">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-lg font-bold text-secondary-foreground">{member.name}</h3>
                <p className="text-sm font-semibold text-accent mt-1">{member.role}</p>
                <div className="flex items-center gap-1.5 mt-2 text-xs text-secondary-foreground/40">
                  <MapPin size={12} />
                  {member.location}
                </div>
                <p className="mt-3 text-sm text-secondary-foreground/50 leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding section-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-header"
          >
            <span className="section-label">Ecosystem</span>
            <h2 className="section-title text-foreground">Partners Who<br />Believe</h2>
            <p className="section-desc">
              Local innovation cells, global tech operators, campus clubs, rural NGOs, and ecosystem allies rooting for real Bharat founders.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="flex items-center gap-4 p-5 rounded-xl border border-border/50 transition-all duration-300 hover:border-primary/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">{p.name}</p>
                  <p className="text-xs text-muted-foreground">{p.tag}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-dark py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-secondary-foreground">
              Ready to <span className="text-primary">Build?</span>
            </h2>
            <p className="mt-4 text-secondary-foreground/50 text-lg max-w-lg mx-auto">
              Join the movement of grassroots builders shaping India's startup future.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/apply">
                <Button size="lg" className="rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-lg shadow-primary/25">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/partners">
                <Button size="lg" variant="outline" className="rounded-full border-accent/40 text-accent hover:bg-accent/10">
                  Join as Mentor or Partner
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
