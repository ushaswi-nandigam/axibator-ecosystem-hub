import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InnovationBackground from "@/components/InnovationBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Home, Users, Wrench, Coffee, MapPin, ArrowRight, Wifi, BookOpen,
  Mic, Calendar, Star, Zap, Rocket, Sparkles
} from "lucide-react";

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
  {
    name: "Free / Day Pass",
    price: "Free",
    desc: "Open coworking",
    perks: ["Coworking space", "Basic amenities", "Community access"],
  },
  {
    name: "Builder-in-Residence",
    price: "₹2,000–5,000/mo",
    desc: "Nominal monthly rent + perks",
    perks: ["Private desk", "Kitchen access", "Event priority", "Storage space"],
    highlighted: true,
  },
  {
    name: "Premium Resident",
    price: "₹5,000–10,000/mo",
    desc: "Grants, podcast studio, mentorship",
    perks: ["All perks", "Podcast studio", "Mentorship", "Grant access"],
  },
];

const testimonials = [
  { quote: "This place gave me more progress in one weekend than 3 months in a startup club.", name: "Aakash", from: "student founder from Vizag" },
  { quote: "I stopped overthinking and started shipping. It's the nest I didn't know I needed.", name: "Jahnavi", from: "solo builder, Warangal" },
];

const ethos = [
  "No sir/ma'am culture",
  "Action > Pitch",
  "Help > Hype",
  "Progress > Perfection",
  "We show, not tell",
  "We support, not gatekeep",
];

const fadeUp = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } };

const BuilderNest = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <InnovationBackground />
      <Navbar />
      <main className="relative z-10">
        {/* Hero */}
        <section className="pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="container text-center">
            <motion.span {...fadeUp} className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
              🛖 The Shipyard
            </motion.span>
            <motion.h1 {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl font-bold md:text-5xl lg:text-6xl">
              Axibator <span className="text-primary">Builder Nest</span>
            </motion.h1>
            <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              "Not a WeWork. Not an incubator. Not a rented lab. It's a home for founders to build bold things — together."
            </motion.p>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }} className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/apply">
                <Button size="lg" className="group rounded-full bg-primary px-8 text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25">
                  Apply to Join a Nest
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/apply">
                <Button variant="outline" size="lg" className="rounded-full border-border px-8 hover:bg-muted">
                  Apply to Host
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* What is Builder Nest */}
        <section className="section-padding">
          <div className="container">
            <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
              <h2 className="section-header">What is the Builder Nest?</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                A physical, founder-first space built for action — not optics. A cozy, gritty, well-designed house where startup builders come together to create, fail, grow, and win — without the pressure of pitch decks or polished resumes.
              </p>
            </motion.div>

            {/* Why it exists steps */}
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { step: "1", text: "Walk in with an idea" },
                { step: "2", text: "Meet collaborators over chai" },
                { step: "3", text: "Stay up late breaking product flows" },
                { step: "4", text: "Ship MVPs together over the weekend" },
              ].map((s, i) => (
                <motion.div key={s.step} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">{s.step}</span>
                  <p className="mt-3 text-sm font-medium text-foreground">{s.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Happens Inside */}
        <section className="section-padding bg-muted/30">
          <div className="container">
            <motion.h2 {...fadeUp} className="section-header text-center">What Happens Inside?</motion.h2>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {activities.map((a, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-sm text-foreground">{a}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who's It For */}
        <section className="section-padding">
          <div className="container">
            <motion.h2 {...fadeUp} className="section-header text-center">Who's It For?</motion.h2>
            <div className="mx-auto mt-10 max-w-2xl space-y-3">
              {whoIsItFor.map((w, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30"
                >
                  <span className="text-2xl">{w.emoji}</span>
                  <span className="text-sm font-medium text-foreground">{w.label}</span>
                </motion.div>
              ))}
            </div>
            <motion.p {...fadeUp} className="mt-6 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              No filters. No stage. No pitching. Just builders who show up.
            </motion.p>
          </div>
        </section>

        {/* What's Inside (amenities) */}
        <section className="section-padding bg-muted/30">
          <div className="container">
            <motion.h2 {...fadeUp} className="section-header text-center">What's Inside?</motion.h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {amenities.map((a, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{a.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Signature boards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {["Builder Wall", "Shipping Streak Board", "Resident Founder Slots", "Raw Wins Wall"].map((b, i) => (
                <motion.div key={b} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-center"
                >
                  <span className="text-sm font-bold text-primary">{b}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="section-padding">
          <div className="container">
            <motion.h2 {...fadeUp} className="section-header text-center">Where We're Starting</motion.h2>
            <motion.p {...fadeUp} className="mt-2 text-center text-sm text-muted-foreground">Phase 1 Locations (2025)</motion.p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {locations.map((loc, i) => (
                <motion.div key={loc.city} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`rounded-2xl border p-6 text-center transition-all hover:shadow-md ${
                    loc.status === "active" ? "border-primary/30 bg-primary/5" : "border-border bg-card"
                  }`}
                >
                  <MapPin className={`mx-auto h-6 w-6 ${loc.status === "active" ? "text-primary" : "text-muted-foreground"}`} />
                  <h3 className="mt-3 text-lg font-bold text-foreground">{loc.city}</h3>
                  <span className={`mt-1 inline-block text-xs font-semibold uppercase tracking-wider ${
                    loc.status === "active" ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {loc.tag}
                  </span>
                </motion.div>
              ))}
            </div>
            <motion.p {...fadeUp} className="mt-6 text-center text-sm text-muted-foreground">
              Interest stage: Tirupati, Karimnagar, Nellore
            </motion.p>
          </div>
        </section>

        {/* Weekly Rhythm */}
        <section className="section-padding bg-muted/30">
          <div className="container">
            <motion.h2 {...fadeUp} className="section-header text-center">Weekly Rhythm</motion.h2>
            <div className="mx-auto mt-10 max-w-2xl space-y-3">
              {weeklyRhythm.map((w, i) => (
                <motion.div key={w.day} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4"
                >
                  <span className="w-28 shrink-0 text-sm font-bold text-primary">{w.day}</span>
                  <span className="text-sm text-foreground">{w.activity}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Signature Rituals */}
        <section className="section-padding">
          <div className="container">
            <motion.h2 {...fadeUp} className="section-header text-center">Signature Rituals</motion.h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {rituals.map((r, i) => (
                <motion.div key={r.title} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-foreground">{r.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{r.desc}</p>
                  <span className="mt-2 inline-block text-[10px] font-semibold uppercase tracking-wider text-primary">{r.time}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Residency Tiers */}
        <section className="section-padding bg-muted/30">
          <div className="container">
            <motion.h2 {...fadeUp} className="section-header text-center">Residency Tiers</motion.h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {tiers.map((t, i) => (
                <motion.div key={t.name} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`rounded-2xl border p-7 transition-all hover:shadow-lg ${
                    t.highlighted
                      ? "border-primary/40 bg-primary/5 shadow-md"
                      : "border-border bg-card"
                  }`}
                >
                  {t.highlighted && (
                    <span className="mb-3 inline-block rounded-full bg-primary px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                      Popular
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-foreground">{t.name}</h3>
                  <p className="mt-1 text-2xl font-bold text-primary">{t.price}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{t.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {t.perks.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link to="/apply">
                    <Button className={`mt-6 w-full rounded-full font-semibold ${
                      t.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}>
                      Apply Now
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding">
          <div className="container">
            <motion.h2 {...fadeUp} className="section-header text-center">Words from Founders</motion.h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {testimonials.map((t, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="rounded-2xl border border-border bg-card p-8"
                >
                  <p className="text-base italic leading-relaxed text-foreground">"{t.quote}"</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
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
        <section className="section-padding bg-muted/30">
          <div className="container text-center">
            <motion.h2 {...fadeUp} className="section-header">The Builder Ethos</motion.h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {ethos.map((e, i) => (
                <motion.span key={e} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground"
                >
                  {e}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container">
            <motion.div {...fadeUp}
              className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center md:p-14"
            >
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">Want to Visit or Start One?</h2>
              <div className="mx-auto mt-6 max-w-lg space-y-2 text-left text-sm text-muted-foreground">
                <p>✅ Founders can co-work anytime (free or by invite)</p>
                <p>🖐️ Local leaders can apply to set up a Nest</p>
                <p>🧰 We'll help with setup, branding, and community playbooks</p>
                <p>🛏 Builder-in-Residence — Apply to live at the Nest for 1–3 months</p>
                <p>🔁 Founder Exchange Residency — Switch Nests for 2 weeks across cities</p>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/apply">
                  <Button size="lg" className="group rounded-full bg-primary px-8 text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25">
                    Apply to Join or Host
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
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

export default BuilderNest;
