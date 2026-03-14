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
  { icon: Mic, title: "Open Mic / Midnight Mic", desc: "Open idea jam sessions", time: "10 AM/PM" },
  { icon: Zap, title: "10-Min Demo", desc: "Show anything shipped that week", time: "Fridays" },
  { icon: Star, title: "Grit Coin", desc: "Token for someone who helped you build", time: "Anytime" },
  { icon: Calendar, title: "Sunday Wall Shot", desc: "Weekly group photo at the Builder Wall", time: "Sundays" },
];

const tiers = [
  { name: "Free / Day Pass", price: "Free", desc: "Open coworking", perks: ["Coworking space", "Basic amenities", "Community access"] },
  { name: "Builder-in-Residence", price: "₹2,000–5,000/mo", desc: "Monthly rent + perks", perks: ["Private desk", "Kitchen access", "Event priority", "Storage space"], highlighted: true },
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
    <div className="relative min-h-screen">
      <Navbar />
      <main className="relative z-10">
        {/* Hero */}
        <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 hero-dark">
          <div className="container relative text-center max-w-3xl mx-auto">
            <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-label-light !text-primary">
              🛖 Builder Nest
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="section-title text-white">
              Axibator <span className="text-primary">Builder Nest</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="section-desc mx-auto text-center !text-white/50">
              Not a WeWork. Not an incubator. A home for founders to build bold things — together.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/apply">
                <Button size="lg" className="h-14 rounded-full bg-primary px-10 text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/25">
                  Apply to Join <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/apply">
                <Button variant="outline" size="lg" className="h-14 rounded-full px-10 text-base font-semibold border border-white/20 text-white hover:bg-white/10">
                  Apply to Host
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* What is it */}
        <section className="section-padding section-light">
          <div className="container">
            <div className="text-center mb-12">
              <span className="section-label">The Concept</span>
              <h2 className="section-title text-3xl md:text-4xl">What is the Builder Nest?</h2>
              <p className="section-desc mx-auto text-center">A physical, founder-first space built for action — not optics.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {["Walk in with an idea", "Meet collaborators over chai", "Stay up late breaking product flows", "Ship MVPs together over the weekend"].map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="rounded-2xl bg-card border border-border p-8 text-center transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</span>
                  <p className="mt-4 text-sm font-bold text-foreground">{s}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities */}
        <section className="section-padding section-grey">
          <div className="container">
            <div className="text-center mb-12">
              <span className="section-label">Inside</span>
              <h2 className="section-title text-3xl md:text-4xl">What Happens Inside?</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {activities.map((a, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                  <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-primary" />
                  <span className="text-sm font-medium text-foreground">{a}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who's it for */}
        <section className="section-padding section-white">
          <div className="container">
            <div className="text-center mb-12">
              <span className="section-label">Our Builders</span>
              <h2 className="section-title text-3xl md:text-4xl">Who's It For?</h2>
            </div>
            <div className="mx-auto max-w-2xl space-y-4">
              {whoIsItFor.map((w, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-5 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 hover:shadow-md">
                  <span className="text-3xl">{w.emoji}</span>
                  <span className="text-sm font-bold text-foreground">{w.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="section-padding section-grey">
          <div className="container">
            <div className="text-center mb-12">
              <span className="section-label">The Space</span>
              <h2 className="section-title text-3xl md:text-4xl">What's Inside?</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {amenities.map((a, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="group flex items-center gap-5 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20">
                    <a.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold text-foreground">{a.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="section-padding section-white">
          <div className="container">
            <div className="text-center mb-12">
              <span className="section-label">Phase 1 — 2025</span>
              <h2 className="section-title text-3xl md:text-4xl">Where We're Starting</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {locations.map((loc, i) => (
                <motion.div key={loc.city} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className={`group rounded-xl border p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    loc.status === "active" ? "border-primary/40 bg-primary/5" : "border-border bg-card"
                  }`}>
                  <MapPin className={`mx-auto h-6 w-6 ${loc.status === "active" ? "text-primary" : "text-muted-foreground"}`} />
                  <h3 className="mt-4 text-xl font-bold text-foreground">{loc.city}</h3>
                  <span className={`mt-2 inline-block text-[10px] font-bold uppercase tracking-[0.15em] ${
                    loc.status === "active" ? "text-primary" : "text-muted-foreground"
                  }`}>{loc.tag}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Weekly Rhythm */}
        <section className="section-padding section-grey">
          <div className="container">
            <div className="text-center mb-12">
              <span className="section-label">The Rhythm</span>
              <h2 className="section-title text-3xl md:text-4xl">Weekly Rhythm</h2>
            </div>
            <div className="mx-auto max-w-2xl space-y-4">
              {weeklyRhythm.map((w, i) => (
                <motion.div key={w.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-5 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md">
                  <span className="w-28 shrink-0 text-sm font-bold text-primary">{w.day}</span>
                  <span className="text-sm font-medium text-foreground">{w.activity}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Rituals */}
        <section className="section-padding section-white">
          <div className="container">
            <div className="text-center mb-12">
              <span className="section-label">Traditions</span>
              <h2 className="section-title text-3xl md:text-4xl">Signature Rituals</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {rituals.map((r, i) => (
                <motion.div key={r.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="group rounded-xl bg-card border border-border p-8 text-center transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-foreground">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                  <span className="mt-3 inline-block text-[10px] font-bold uppercase tracking-[0.15em] text-primary bg-primary/10 px-3 py-1 rounded-full">{r.time}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tiers */}
        <section className="section-padding section-grey">
          <div className="container">
            <div className="text-center mb-12">
              <span className="section-label">Membership</span>
              <h2 className="section-title text-3xl md:text-4xl">Residency Tiers</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {tiers.map((t, i) => (
                <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`group rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    t.highlighted ? "border-primary/40 bg-primary/5 shadow-lg" : "border-border bg-card"
                  }`}>
                  {t.highlighted && (
                    <span className="mb-4 inline-block rounded-full bg-primary px-4 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-primary-foreground">Popular</span>
                  )}
                  <h3 className="text-xl font-bold text-foreground">{t.name}</h3>
                  <p className="mt-2 text-3xl font-bold text-primary">{t.price}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {t.perks.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm font-medium text-foreground">
                        <span className="h-2 w-2 rounded-full bg-primary" /> {p}
                      </li>
                    ))}
                  </ul>
                  <Link to="/apply">
                    <Button className={`mt-8 w-full h-12 rounded-full font-bold ${
                      t.highlighted ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20" : "bg-muted text-foreground hover:bg-primary/10"
                    }`}>Apply Now</Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding section-white">
          <div className="container">
            <div className="text-center mb-12">
              <span className="section-label">Voices</span>
              <h2 className="section-title text-3xl md:text-4xl">Words from Founders</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-10 transition-all hover:shadow-lg">
                  <p className="text-lg italic leading-relaxed text-foreground">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-base font-bold text-primary">{t.name[0]}</div>
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

        {/* Ethos */}
        <section className="section-padding section-grey">
          <div className="container text-center">
            <span className="section-label">Our Code</span>
            <h2 className="section-title text-3xl md:text-4xl mb-10">The Builder Ethos</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {ethos.map((e, i) => (
                <motion.span key={e} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="rounded-full border border-border bg-card px-6 py-3 text-sm font-bold text-foreground transition-all hover:border-primary/40 hover:shadow-md hover:-translate-y-1">
                  {e}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding section-white">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-card p-10 text-center shadow-xl md:p-14">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Want to Visit or Start One?</h2>
              <div className="mx-auto mt-6 max-w-lg space-y-3 text-left text-sm text-muted-foreground">
                <p>✅ Founders can co-work anytime (free or by invite)</p>
                <p>🖐️ Local leaders can apply to set up a Nest</p>
                <p>🧰 We'll help with setup, branding, and community playbooks</p>
                <p>🛏 Builder-in-Residence — Apply to live at the Nest for 1–3 months</p>
                <p>🔁 Founder Exchange Residency — Switch Nests for 2 weeks across cities</p>
              </div>
              <Link to="/apply">
                <Button size="lg" className="mt-8 h-14 rounded-full bg-primary px-10 text-base font-bold text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/25">
                  Apply to Join or Host <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BuilderNest;
