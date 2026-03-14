import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

const BuilderNest = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="relative z-10">
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28" style={{
          background: 'linear-gradient(160deg, hsl(220 30% 96%) 0%, hsl(210 40% 92%) 40%, hsl(217 30% 94%) 100%)'
        }}>
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
          <div className="absolute top-10 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.08] blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/[0.08] blur-[100px]" />

          <div className="container relative text-center max-w-3xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 inline-flex items-center gap-2.5 rounded-full border-2 border-primary/40 bg-primary/15 px-5 py-2 text-xs font-bold tracking-wide text-primary shadow-sm"
            >
              🛖 The Shipyard
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="section-title"
            >
              Axibator <span className="text-primary">Builder Nest</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="section-desc mx-auto text-center"
            >
              "Not a WeWork. Not an incubator. Not a rented lab. It's a home for founders to build bold things — together."
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <Link to="/apply">
                <Button size="lg" className="group h-14 rounded-full bg-primary px-10 text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/35 transition-all duration-300">
                  Apply to Join a Nest
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/apply">
                <Button variant="outline" size="lg" className="h-14 rounded-full px-10 text-base font-semibold border-2 border-border text-foreground hover:bg-muted hover:border-primary/30 transition-all duration-300">
                  Apply to Host
                </Button>
              </Link>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* What is Builder Nest */}
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
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="section-label">The Concept</span>
              <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">What is the Builder Nest?</h2>
              <p className="section-desc mx-auto text-center">
                A physical, founder-first space built for action — not optics. A cozy, gritty, well-designed house where startup builders come together to create, fail, grow, and win.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { step: "1", text: "Walk in with an idea" },
                { step: "2", text: "Meet collaborators over chai" },
                { step: "3", text: "Stay up late breaking product flows" },
                { step: "4", text: "Ship MVPs together over the weekend" },
              ].map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="group rounded-2xl bg-card border-2 border-border p-8 text-center transition-all duration-500 hover:border-primary/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/15"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-lg shadow-primary/30">{s.step}</span>
                  <p className="mt-4 text-sm font-bold text-foreground">{s.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* What Happens Inside */}
        <section className="section-padding relative overflow-hidden" style={{
          background: 'linear-gradient(160deg, hsl(217 30% 95%) 0%, hsl(215 30% 93%) 50%, hsl(220 25% 94%) 100%)'
        }}>
          <div className="absolute top-[20%] left-0 w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[100px]" />

          <div className="container relative">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <span className="section-label">Inside the Nest</span>
              <h2 className="section-title text-3xl md:text-4xl">What Happens Inside?</h2>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {activities.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-4 rounded-2xl border-2 border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                >
                  <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-primary shadow-md shadow-primary/30" />
                  <span className="text-sm font-medium text-foreground">{a}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who's It For */}
        <section className="section-padding relative overflow-hidden" style={{
          background: 'linear-gradient(160deg, hsl(213 30% 94%) 0%, hsl(210 40% 90%) 50%, hsl(220 25% 93%) 100%)'
        }}>
          <div className="absolute top-[30%] right-0 w-[450px] h-[450px] rounded-full bg-accent/[0.06] blur-[100px]" />

          <div className="container relative">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <span className="section-label">Our Builders</span>
              <h2 className="section-title text-3xl md:text-4xl">Who's It For?</h2>
            </motion.div>
            <div className="mx-auto max-w-2xl space-y-4">
              {whoIsItFor.map((w, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-5 rounded-2xl border-2 border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-3xl">{w.emoji}</span>
                  <span className="text-sm font-bold text-foreground">{w.label}</span>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-primary/70"
            >
              No filters. No stage. No pitching. Just builders who show up.
            </motion.p>
          </div>
        </section>

        {/* Amenities */}
        <section className="section-padding relative overflow-hidden" style={{
          background: 'linear-gradient(160deg, hsl(217 30% 95%) 0%, hsl(215 30% 93%) 50%, hsl(220 25% 94%) 100%)'
        }}>
          <div className="absolute top-[20%] left-0 w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[100px]" />

          <div className="container relative">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <span className="section-label">The Space</span>
              <h2 className="section-title text-3xl md:text-4xl">What's Inside?</h2>
            </motion.div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {amenities.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-center gap-5 rounded-2xl border-2 border-border bg-card p-6 transition-all duration-500 hover:border-primary/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/15"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary transition-all duration-300 group-hover:bg-primary/25 group-hover:shadow-lg group-hover:shadow-primary/15">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold text-foreground">{a.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {["Builder Wall", "Shipping Streak Board", "Resident Founder Slots", "Raw Wins Wall"].map((b, i) => (
                <motion.div
                  key={b}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border-2 border-primary/20 bg-primary/5 p-5 text-center transition-all hover:bg-primary/10"
                >
                  <span className="text-sm font-bold text-primary">{b}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="section-padding relative overflow-hidden" style={{
          background: 'linear-gradient(160deg, hsl(213 30% 94%) 0%, hsl(210 40% 90%) 50%, hsl(220 25% 93%) 100%)'
        }}>
          <div className="absolute top-[30%] right-0 w-[450px] h-[450px] rounded-full bg-secondary/[0.06] blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} />

          <div className="container relative">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <span className="section-label">Phase 1 — 2025</span>
              <h2 className="section-title text-3xl md:text-4xl">Where We're Starting</h2>
            </motion.div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.city}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`group rounded-2xl border-2 p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                    loc.status === "active"
                      ? "border-primary/40 bg-primary/5 hover:shadow-primary/15"
                      : "border-border bg-card hover:border-primary/30 hover:shadow-primary/10"
                  }`}
                >
                  <MapPin className={`mx-auto h-7 w-7 transition-all duration-300 group-hover:scale-110 ${loc.status === "active" ? "text-primary" : "text-muted-foreground"}`} />
                  <h3 className="mt-4 text-xl font-bold text-foreground">{loc.city}</h3>
                  <span className={`mt-2 inline-block text-[11px] font-bold uppercase tracking-[0.2em] ${
                    loc.status === "active" ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {loc.tag}
                  </span>
                </motion.div>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 text-center text-sm text-muted-foreground"
            >
              Interest stage: Tirupati, Karimnagar, Nellore
            </motion.p>
          </div>
        </section>

        {/* Weekly Rhythm */}
        <section className="section-padding relative overflow-hidden" style={{
          background: 'linear-gradient(160deg, hsl(217 30% 95%) 0%, hsl(215 30% 93%) 50%, hsl(220 25% 94%) 100%)'
        }}>
          <div className="absolute top-[20%] left-0 w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[100px]" />

          <div className="container relative">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <span className="section-label">The Rhythm</span>
              <h2 className="section-title text-3xl md:text-4xl">Weekly Rhythm</h2>
            </motion.div>
            <div className="mx-auto max-w-2xl space-y-4">
              {weeklyRhythm.map((w, i) => (
                <motion.div
                  key={w.day}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="flex items-center gap-5 rounded-2xl border-2 border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                >
                  <span className="w-28 shrink-0 text-sm font-bold text-primary">{w.day}</span>
                  <span className="text-sm font-medium text-foreground">{w.activity}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Signature Rituals */}
        <section className="section-padding relative overflow-hidden" style={{
          background: 'linear-gradient(160deg, hsl(213 30% 94%) 0%, hsl(210 40% 90%) 50%, hsl(220 25% 93%) 100%)'
        }}>
          <div className="absolute top-[30%] right-0 w-[450px] h-[450px] rounded-full bg-accent/[0.06] blur-[100px]" />

          <div className="container relative">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <span className="section-label">Traditions</span>
              <h2 className="section-title text-3xl md:text-4xl">Signature Rituals</h2>
            </motion.div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {rituals.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="group rounded-2xl bg-card border-2 border-border p-8 text-center transition-all duration-500 hover:border-primary/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/15"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/15 text-primary transition-all duration-300 group-hover:bg-primary/25 group-hover:shadow-lg group-hover:shadow-primary/15">
                    <r.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-foreground">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                  <span className="mt-3 inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-primary/70 bg-primary/10 px-3 py-1 rounded-full">{r.time}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Residency Tiers */}
        <section className="section-padding relative overflow-hidden" style={{
          background: 'linear-gradient(160deg, hsl(24 30% 95%) 0%, hsl(30 35% 93%) 50%, hsl(220 25% 94%) 100%)'
        }}>
          <div className="absolute top-[20%] left-0 w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[100px]" />

          <div className="container relative">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <span className="section-label">Membership</span>
              <h2 className="section-title text-3xl md:text-4xl">Residency Tiers</h2>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-3">
              {tiers.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`group rounded-2xl border-2 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                    t.highlighted
                      ? "border-primary/40 bg-primary/5 shadow-xl shadow-primary/10 hover:shadow-primary/20"
                      : "border-border bg-card hover:border-primary/30 hover:shadow-primary/10"
                  }`}
                >
                  {t.highlighted && (
                    <span className="mb-4 inline-block rounded-full bg-primary px-4 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground shadow-lg shadow-primary/30">
                      Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-foreground">{t.name}</h3>
                  <p className="mt-2 text-3xl font-bold text-primary">{t.price}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {t.perks.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm font-medium text-foreground">
                        <span className="h-2 w-2 rounded-full bg-primary shadow-sm shadow-primary/30" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link to="/apply">
                    <Button className={`mt-8 w-full h-12 rounded-full font-bold transition-all ${
                      t.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30"
                        : "bg-muted text-foreground hover:bg-primary/10 hover:text-primary"
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
        <section className="section-padding relative overflow-hidden" style={{
          background: 'linear-gradient(160deg, hsl(213 30% 94%) 0%, hsl(210 40% 90%) 50%, hsl(220 25% 93%) 100%)'
        }}>
          <div className="absolute top-[30%] right-0 w-[450px] h-[450px] rounded-full bg-secondary/[0.06] blur-[100px]" />

          <div className="container relative">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <span className="section-label">Voices</span>
              <h2 className="section-title text-3xl md:text-4xl">Words from Founders</h2>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border-2 border-border bg-card p-10 transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
                >
                  <p className="text-lg italic leading-relaxed text-foreground">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-base font-bold text-primary shadow-md shadow-primary/15">
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
        <section className="section-padding relative overflow-hidden" style={{
          background: 'linear-gradient(160deg, hsl(24 30% 95%) 0%, hsl(30 35% 93%) 50%, hsl(220 25% 94%) 100%)'
        }}>
          <div className="container relative text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
              <span className="section-label">Our Code</span>
              <h2 className="section-title text-3xl md:text-4xl">The Builder Ethos</h2>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-4">
              {ethos.map((e, i) => (
                <motion.span
                  key={e}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-full border-2 border-border bg-card px-6 py-3 text-sm font-bold text-foreground transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1"
                >
                  {e}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding relative overflow-hidden" style={{
          background: 'linear-gradient(160deg, hsl(213 30% 94%) 0%, hsl(210 40% 90%) 50%, hsl(220 25% 93%) 100%)'
        }}>
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-3xl rounded-2xl border-2 border-primary/20 bg-card p-10 text-center shadow-2xl shadow-primary/10 md:p-14"
            >
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Want to Visit or Start One?</h2>
              <div className="mx-auto mt-6 max-w-lg space-y-3 text-left text-sm text-muted-foreground">
                <p>✅ Founders can co-work anytime (free or by invite)</p>
                <p>🖐️ Local leaders can apply to set up a Nest</p>
                <p>🧰 We'll help with setup, branding, and community playbooks</p>
                <p>🛏 Builder-in-Residence — Apply to live at the Nest for 1–3 months</p>
                <p>🔁 Founder Exchange Residency — Switch Nests for 2 weeks across cities</p>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/apply">
                  <Button size="lg" className="group h-14 rounded-full bg-primary px-10 text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/35">
                    Apply to Join or Host
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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
