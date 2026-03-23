import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Rocket, BookOpen, Calendar, User, Settings, Bell, 
  CheckCircle2, Clock, ArrowRight, FileText, Video,
  Target, TrendingUp, Award, ChevronRight, LogOut
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const mockStudent = {
  name: "Arjun Mehta",
  email: "arjun@example.com",
  program: "BuildLab – Core Incubation",
  cohort: "Cohort 7 • 2026",
  avatar: "AM",
  joinedDate: "Jan 2026",
};

const programMilestones = [
  { title: "Onboarding & Orientation", status: "completed", date: "Jan 15" },
  { title: "Problem Validation Sprint", status: "completed", date: "Feb 1" },
  { title: "MVP Development", status: "in-progress", date: "Mar 10" },
  { title: "Market Testing & Feedback", status: "upcoming", date: "Apr 5" },
  { title: "Pitch Deck Preparation", status: "upcoming", date: "May 1" },
  { title: "Demo Day", status: "upcoming", date: "Jun 15" },
];

const upcomingEvents = [
  { title: "Founder Fireside Chat", date: "Mar 25, 2026", time: "6:00 PM", type: "Virtual" },
  { title: "Mentor Office Hours", date: "Mar 28, 2026", time: "2:00 PM", type: "In-Person" },
  { title: "Workshop: Growth Hacking 101", date: "Apr 2, 2026", time: "4:00 PM", type: "Virtual" },
  { title: "Cohort Standup", date: "Apr 5, 2026", time: "10:00 AM", type: "In-Person" },
];

const resources = [
  { title: "Startup Playbook v3.0", type: "PDF", icon: FileText, category: "Guide" },
  { title: "Financial Modeling Template", type: "Excel", icon: FileText, category: "Template" },
  { title: "Pitch Deck Masterclass", type: "Video", icon: Video, category: "Recording" },
  { title: "Market Research Toolkit", type: "PDF", icon: FileText, category: "Toolkit" },
  { title: "Cap Table Template", type: "Excel", icon: FileText, category: "Template" },
  { title: "Demo Day Prep Guide", type: "PDF", icon: BookOpen, category: "Guide" },
];

const notifications = [
  { text: "New mentor session available for booking", time: "2h ago", unread: true },
  { text: "Your MVP milestone feedback is ready", time: "1d ago", unread: true },
  { text: "Workshop recording uploaded: Growth Hacking", time: "3d ago", unread: false },
];

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const completedMilestones = programMilestones.filter(m => m.status === "completed").length;
  const progressPercent = Math.round((completedMilestones / programMilestones.length) * 100);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="hero-dark relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-[30%] left-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[120px]" />

        <div className="container relative">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-primary font-bold text-lg">
                  {mockStudent.avatar}
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-extrabold text-secondary-foreground">
                    Welcome back, <span className="text-primary">{mockStudent.name.split(" ")[0]}</span>
                  </h1>
                  <p className="text-sm text-secondary-foreground/50">{mockStudent.program} • {mockStudent.cohort}</p>
                </div>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="flex items-center gap-3">
              <div className="relative">
                <Bell className="h-5 w-5 text-secondary-foreground/50 cursor-pointer hover:text-secondary-foreground transition-colors" />
                <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-primary" />
              </div>
              <Link to="/login">
                <Button variant="ghost" size="sm" className="text-secondary-foreground/50 hover:text-secondary-foreground hover:bg-white/10">
                  <LogOut className="h-4 w-4 mr-1" /> Logout
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Program Progress", value: `${progressPercent}%`, icon: TrendingUp },
              { label: "Milestones Done", value: `${completedMilestones}/${programMilestones.length}`, icon: Target },
              { label: "Upcoming Events", value: `${upcomingEvents.length}`, icon: Calendar },
              { label: "Resources Available", value: `${resources.length}`, icon: BookOpen },
            ].map((stat, i) => (
              <div key={stat.label} className="rounded-xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm px-5 py-4">
                <div className="flex items-center gap-2 mb-1">
                  <stat.icon className="h-4 w-4 text-primary/60" />
                  <span className="text-xs font-medium text-secondary-foreground/40 uppercase tracking-wider">{stat.label}</span>
                </div>
                <span className="text-2xl font-extrabold text-secondary-foreground">{stat.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-light py-12 md:py-16">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-muted/60 rounded-full p-1 mb-10">
              <TabsTrigger value="overview" className="rounded-full px-5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Overview</TabsTrigger>
              <TabsTrigger value="events" className="rounded-full px-5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Events</TabsTrigger>
              <TabsTrigger value="resources" className="rounded-full px-5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Resources</TabsTrigger>
              <TabsTrigger value="profile" className="rounded-full px-5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Profile</TabsTrigger>
            </TabsList>

            {/* OVERVIEW TAB */}
            <TabsContent value="overview">
              <div className="grid lg:grid-cols-3 gap-10">
                {/* Program Progress */}
                <div className="lg:col-span-2">
                  <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-primary" /> Program Milestones
                  </h3>
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Overall Progress</span>
                      <span className="font-bold text-primary">{progressPercent}%</span>
                    </div>
                    <Progress value={progressPercent} className="h-2 bg-muted" />
                  </div>
                  <div className="space-y-3">
                    {programMilestones.map((milestone, i) => (
                      <motion.div key={milestone.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`flex items-center gap-4 rounded-xl px-5 py-4 transition-all ${
                          milestone.status === "completed" ? "bg-primary/[0.06]" :
                          milestone.status === "in-progress" ? "bg-accent/[0.08] border border-primary/20" : "bg-muted/40"
                        }`}>
                        <div className={`flex h-9 w-9 items-center justify-center rounded-full ${
                          milestone.status === "completed" ? "bg-primary/15 text-primary" :
                          milestone.status === "in-progress" ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                        }`}>
                          {milestone.status === "completed" ? <CheckCircle2 className="h-5 w-5" /> :
                           milestone.status === "in-progress" ? <Clock className="h-5 w-5 animate-pulse" /> :
                           <span className="text-xs font-bold">{i + 1}</span>}
                        </div>
                        <div className="flex-1">
                          <p className={`font-semibold text-sm ${milestone.status === "upcoming" ? "text-muted-foreground" : "text-foreground"}`}>{milestone.title}</p>
                          <p className="text-xs text-muted-foreground">{milestone.date}</p>
                        </div>
                        {milestone.status === "in-progress" && (
                          <Badge className="bg-primary/15 text-primary border-0 text-xs">In Progress</Badge>
                        )}
                        {milestone.status === "completed" && (
                          <Badge className="bg-primary/10 text-primary/70 border-0 text-xs">Done</Badge>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Notifications */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                    <Bell className="h-5 w-5 text-primary" /> Notifications
                  </h3>
                  <div className="space-y-3">
                    {notifications.map((n, i) => (
                      <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className={`rounded-xl px-5 py-4 ${n.unread ? "bg-primary/[0.06] border border-primary/10" : "bg-muted/40"}`}>
                        <p className={`text-sm ${n.unread ? "font-semibold text-foreground" : "text-muted-foreground"}`}>{n.text}</p>
                        <p className="text-xs text-muted-foreground mt-1">{n.time}</p>
                      </motion.div>
                    ))}
                  </div>
                  <Button variant="ghost" className="mt-4 text-primary text-sm w-full hover:bg-primary/5">
                    View All Notifications <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* EVENTS TAB */}
            <TabsContent value="events">
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" /> Upcoming Events
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {upcomingEvents.map((event, i) => (
                  <motion.div key={event.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="rounded-xl border border-border/60 bg-background px-6 py-5 hover:border-primary/30 transition-all group">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="outline" className={`text-xs ${event.type === "Virtual" ? "border-primary/30 text-primary" : "border-accent/30 text-accent"}`}>
                        {event.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{event.time}</span>
                    </div>
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{event.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{event.date}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* RESOURCES TAB */}
            <TabsContent value="resources">
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" /> Learning Resources
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {resources.map((res, i) => (
                  <motion.div key={res.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="rounded-xl border border-border/60 bg-background px-6 py-5 hover:border-primary/30 transition-all cursor-pointer group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <res.icon className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-xs border-muted-foreground/30">{res.category}</Badge>
                    </div>
                    <h4 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">{res.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{res.type}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* PROFILE TAB */}
            <TabsContent value="profile">
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <User className="h-5 w-5 text-primary" /> Profile & Settings
              </h3>
              <div className="max-w-2xl space-y-8">
                <div className="flex items-center gap-5">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/15 text-primary font-bold text-2xl">
                    {mockStudent.avatar}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">{mockStudent.name}</h4>
                    <p className="text-sm text-muted-foreground">{mockStudent.email}</p>
                    <p className="text-xs text-muted-foreground mt-1">Joined {mockStudent.joinedDate}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Full Name", value: mockStudent.name },
                    { label: "Email", value: mockStudent.email },
                    { label: "Program", value: mockStudent.program },
                    { label: "Cohort", value: mockStudent.cohort },
                  ].map((field) => (
                    <div key={field.label} className="flex items-center justify-between rounded-xl bg-muted/40 px-5 py-4">
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{field.label}</p>
                        <p className="text-sm font-semibold text-foreground mt-0.5">{field.value}</p>
                      </div>
                      <Settings className="h-4 w-4 text-muted-foreground/40" />
                    </div>
                  ))}
                </div>

                <Button className="rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-lg shadow-primary/25">
                  Edit Profile <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default StudentDashboard;
