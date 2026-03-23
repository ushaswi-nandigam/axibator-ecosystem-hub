import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home, Users, Wrench, Coffee, MapPin, ArrowRight, Wifi, BookOpen,
  Mic, Calendar, Star, Zap, Rocket, Sparkles
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const activities = [
  "Whiteboard brainstorms & feedback circles",
  "Weekend build jams & hackathons",
  "Coworking sprints & deep work corners",
  "Chai breaks that become co-founder meetings",
  "Podcast recordings & live story nights",
  "Founder potlucks & community dinners",
  "AMA nights, investor dinners, founder breakfasts",
];

const whoIsItFor = [
  { emoji: "🧱", label: "Student or early-stage founders building real MVPs" },
  { emoji: "🌾", label: "Rural innovators or solopreneurs solving hard problems" },
  { emoji: "👩‍💻", label: "Indie builders and side project hackers" },
  { emoji: "🔁", label: "Ex-cofounders or early employees starting fresh" },
  { emoji: "✨", label: "Anyone who wants to build something and is doing the work" },
];

const amenities = [
  { icon: Wifi, label: "High-speed Wi-Fi & power backup" },
  { icon: Wrench, label: "Writable walls & whiteboards everywhere" },
  { icon: Home, label: "Desks, floor seating & chill zones" },
  { icon: BookOpen, label: "Book shelf with founder picks" },
  { icon: Coffee, label: "Kitchen with local cook (chai, snacks)" },
  { icon: Mic, label: "Podcast mic & content room" },
];

const locations = [
  { city: "Amaravati", tag: "Builder Nest Alpha", status: "active" },
  { city: "Vizag", tag: "Builder Nest Alpha", status: "active" },
  { city: "Warangal", tag: "Upcoming", status: "upcoming" },
  { city: "Vijayawada", tag: "Scouting space", status: "scouting" },
];

const weeklyRhythm = [
  { day: "Monday", activity: "Community coworking + check-ins" },
  { day: "Wednesday", activity: "Builder Circle (feedback + demos)" },
  { day: "Friday Eve", activity: "Fireside or Builder Mixer" },
  { day: "Saturday", activity: "Build Jam / Design Critique" },
  { day: "Sunday", activity: "Chill Day / Founder Potluck" },
];

const rituals = [
  { icon: Mic, title: "Open Mic / Midnight Mic", desc: "Open idea jam sessions after 10 AM/PM", time: "10 AM/PM" },
  { icon: Zap, title: "10-Min Demo", desc: "Show anything shipped that week", time: "Fridays" },
  { icon: Star, title: "Grit Coin", desc: "Hand this token to someone who helped you build", time: "Anytime" },
  { icon: Calendar, title: "Sunday Wall Shot", desc: "Weekly group photo at the Builder Wall", time: "Sundays" },
];

const tiers = [
  { name: "Free / Day Pass", price: "Free", desc: "Open coworking", perks: ["Coworking space", "Basic amenities", "Community access"] },
  { name: "Builder-in-Residence", price: "₹2,000–5,000/mo", desc: "Nominal monthly rent + perks", perks: ["Private desk", "Kitchen access", "Event priority", "Storage space"], highlighted: true },
  { name: "Premium Resident", price: "₹5,000–10,000/mo", desc: "Grants, podcast studio, mentorship", perks: ["All perks", "Podcast studio", "Mentorship", "Grant access"] },
];

const testimonials = [
  { quote: "This place gave me more progress in one weekend than 3 months in a startup club.", name: "Aakash", from: "student founder from Vizag" },
  { quote: "I stopped overthinking and started shipping. It's the nest I didn't know I needed.", name: "Jahnavi", from: "solo builder, Warangal" },
];

const ethos = [
  "No sir/ma'am culture", "Action > Pitch", "Help > Hype",
  "Progress > Perfection", "We show, not tell", "We support, not gatekeep",
];

const BuilderNest = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="hero-dark relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-[30%] left-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-accent/[0.04] blur-[100px]" />

        <div className="container relative text-center">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-label">🛖 The Shipyard</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-extrabold text-foreground leading-[1.05] mt-4">
            Axibator <span className="text-primary">Builder Nest</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            "Not a WeWork. Not an incubator. Not a rented lab. It's a home for founders to build bold things — together."
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/apply">
              <Button size="lg" className="rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-lg shadow-primary/25">
                Apply to Join a Nest <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/apply">
              <Button size="lg" variant="outline" className="rounded-full border-border text-foreground hover:bg-muted">Apply to Host</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What is Builder Nest */}
      <section className="section-padding section-light">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-3xl text-center section-header">
            <span className="section-label">The Concept</span>
            <h2 className="section-title text-foreground">What is the Builder Nest?</h2>
            <p className="section-desc mx-auto text-center">
              A physical, founder-first space built for action — not optics. A cozy, gritty, well-designed house where startup builders come together to create, fail, grow, and win.
            </p>
          </motion.div>

          <div className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "1", text: "Walk in with an idea" },
              { step: "2", text: "Meet collaborators over chai" },
              { step: "3", text: "Stay up late breaking product flows" },
              { step: "4", text: "Ship MVPs together over the weekend" },
            ].map((s, i) => (
              <motion.div key={s.step} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">{s.step}</span>
                <p className="mt-4 text-sm font-bold text-foreground">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens Inside */}
      <section className="section-padding section-light-alt">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center section-header">
            <span className="section-label">Inside the Nest</span>
            <h2 className="section-title text-foreground">What Happens Inside?</h2>
          </motion.div>
          <div className="mx-auto max-w-2xl space-y-4">
            {activities.map((a, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4">
                <div className="mt-1.5 h-2.5 w-2.5 rounded-full bg-primary/60 shrink-0" />
                <span className="text-muted-foreground text-lg">{a}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who's It For */}
      <section className="section-padding section-light">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center section-header">
            <span className="section-label">Our Builders</span>
            <h2 className="section-title text-foreground">Who's It For?</h2>
          </motion.div>
          <div className="mx-auto max-w-2xl space-y-5">
            {whoIsItFor.map((w, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-5">
                <span className="text-3xl">{w.emoji}</span>
                <span className="text-lg font-medium text-foreground">{w.label}</span>
              </motion.div>
            ))}
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="mt-8 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-primary/70">
            No filters. No stage. No pitching. Just builders who show up.
          </motion.p>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-padding section-light-alt">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center section-header">
            <span className="section-label">The Space</span>
            <h2 className="section-title text-foreground">What's Inside?</h2>
          </motion.div>
          <div className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group flex items-center gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <a.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-bold text-foreground">{a.label}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {["Builder Wall", "Shipping Streak Board", "Resident Founder Slots", "Raw Wins Wall"].map((b, i) => (
              <motion.span key={b} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-full bg-primary/5 px-5 py-2.5 text-sm font-bold text-primary">
                {b}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding section-light">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center section-header">
            <span className="section-label">Phase 1 — 2025</span>
            <h2 className="section-title text-foreground">Where We're Starting</h2>
          </motion.div>
          <div className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((loc, i) => (
              <motion.div key={loc.city} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center group">
                <MapPin className={`mx-auto h-7 w-7 transition-transform group-hover:scale-110 ${loc.status === "active" ? "text-primary" : "text-muted-foreground"}`} />
                <h3 className="mt-4 text-xl font-bold text-foreground">{loc.city}</h3>
                <span className={`mt-2 inline-block text-[11px] font-bold uppercase tracking-[0.2em] ${loc.status === "active" ? "text-primary" : "text-muted-foreground"}`}>
                  {loc.tag}
                </span>
              </motion.div>
            ))}
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="mt-8 text-center text-sm text-muted-foreground">
            Interest stage: Tirupati, Karimnagar, Nellore
          </motion.p>
        </div>
      </section>

      {/* Weekly Rhythm */}
      <section className="section-padding section-light-alt">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center section-header">
            <span className="section-label">The Rhythm</span>
            <h2 className="section-title text-foreground">Weekly Rhythm</h2>
          </motion.div>
          <div className="mx-auto max-w-2xl space-y-4">
            {weeklyRhythm.map((w, i) => (
              <motion.div key={w.day} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-5">
                <span className="w-28 shrink-0 text-sm font-bold text-primary">{w.day}</span>
                <span className="text-sm font-medium text-foreground">{w.activity}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Rituals */}
      <section className="section-padding section-light">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center section-header">
            <span className="section-label">Traditions</span>
            <h2 className="section-title text-foreground">Signature Rituals</h2>
          </motion.div>
          <div className="grid gap-y-10 gap-x-12 sm:grid-cols-2 lg:grid-cols-4">
            {rituals.map((r, i) => (
              <motion.div key={r.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center group">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <r.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-5 text-base font-bold text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                <span className="mt-3 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-primary/70">{r.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Residency Tiers */}
      <section className="section-padding section-light-alt">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center section-header">
            <span className="section-label">Membership</span>
            <h2 className="section-title text-foreground">Residency Tiers</h2>
          </motion.div>
          <div className="grid gap-12 md:grid-cols-3">
            {tiers.map((t, i) => (
              <motion.div key={t.name} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative">
                {t.highlighted && (
                  <span className="mb-4 inline-block rounded-full bg-primary px-4 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground">Popular</span>
                )}
                <h3 className="text-xl font-bold text-foreground">{t.name}</h3>
                <p className="mt-2 text-3xl font-bold text-primary">{t.price}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                <ul className="mt-6 space-y-3">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm font-medium text-foreground">
                      <span className="h-2 w-2 rounded-full bg-primary/60" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link to="/apply">
                  <Button className={`mt-8 rounded-full font-bold ${
                    t.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                      : "bg-muted text-foreground hover:bg-primary/10 hover:text-primary"
                  }`}>Apply Now</Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding section-light">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center section-header">
            <span className="section-label">Voices</span>
            <h2 className="section-title text-foreground">Words from Founders</h2>
          </motion.div>
          <div className="grid gap-16 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="relative pl-6 border-l-2 border-primary/40">
                  <p className="text-xl italic text-foreground/80 leading-relaxed">"{t.quote}"</p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-base font-bold text-primary">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.from}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Builder Ethos */}
      <section className="section-padding section-light-alt">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-header">
            <span className="section-label">Our Code</span>
            <h2 className="section-title text-foreground">The Builder Ethos</h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {ethos.map((e, i) => (
              <motion.span key={e} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-full bg-primary/5 px-6 py-3 text-sm font-bold text-foreground transition-colors hover:bg-primary/10">
                {e}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-warm py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Want to <span className="text-primary">Visit or Start One?</span>
            </h2>
            <div className="mx-auto mt-6 max-w-lg space-y-2 text-left text-sm text-muted-foreground">
              <p>✅ Founders can co-work anytime (free or by invite)</p>
              <p>🖐️ Local leaders can apply to set up a Nest</p>
              <p>🧰 We'll help with setup, branding, and community playbooks</p>
              <p>🛏 Builder-in-Residence — Apply to live at the Nest for 1–3 months</p>
              <p>🔁 Founder Exchange Residency — Switch Nests for 2 weeks across cities</p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/apply">
                <Button size="lg" className="rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-lg shadow-primary/25">
                  Apply to Join or Host <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BuilderNest;
