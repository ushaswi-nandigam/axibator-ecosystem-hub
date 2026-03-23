import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users, FileCheck, BarChart3, Settings, Shield, Search,
  CheckCircle2, XCircle, Clock, Eye, ChevronRight, ArrowRight,
  TrendingUp, UserPlus, Rocket, Calendar, LogOut, Bell,
  Edit, Trash2, MoreHorizontal
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const stats = [
  { label: "Total Users", value: "1,247", change: "+12%", icon: Users, color: "text-primary" },
  { label: "Active Applications", value: "89", change: "+23%", icon: FileCheck, color: "text-primary" },
  { label: "Programs Running", value: "6", change: "0%", icon: Rocket, color: "text-primary" },
  { label: "Upcoming Events", value: "14", change: "+5", icon: Calendar, color: "text-primary" },
];

const mockUsers = [
  { id: 1, name: "Arjun Mehta", email: "arjun@example.com", program: "BuildLab", status: "active", joined: "Jan 2026" },
  { id: 2, name: "Priya Sharma", email: "priya@example.com", program: "LaunchPad", status: "active", joined: "Feb 2026" },
  { id: 3, name: "Rahul Verma", email: "rahul@example.com", program: "Ignite", status: "inactive", joined: "Dec 2025" },
  { id: 4, name: "Sneha Patel", email: "sneha@example.com", program: "HerPreneur", status: "active", joined: "Mar 2026" },
  { id: 5, name: "Vikram Singh", email: "vikram@example.com", program: "TechXcelerate", status: "active", joined: "Jan 2026" },
  { id: 6, name: "Ananya Roy", email: "ananya@example.com", program: "BuildLab", status: "pending", joined: "Mar 2026" },
];

const applications = [
  { id: 1, name: "Kavya Nair", program: "BuildLab", submitted: "Mar 20, 2026", status: "pending", startup: "EcoTrack" },
  { id: 2, name: "Amit Das", program: "TechXcelerate", submitted: "Mar 18, 2026", status: "pending", startup: "NeuroAI" },
  { id: 3, name: "Riya Gupta", program: "HerPreneur", submitted: "Mar 15, 2026", status: "approved", startup: "FemFin" },
  { id: 4, name: "Saurav Joshi", program: "LaunchPad", submitted: "Mar 12, 2026", status: "rejected", startup: "QuickServe" },
  { id: 5, name: "Meera Iyer", program: "Ignite", submitted: "Mar 10, 2026", status: "approved", startup: "GreenByte" },
];

const programMetrics = [
  { name: "BuildLab", enrolled: 45, capacity: 50, completion: 72 },
  { name: "LaunchPad", enrolled: 38, capacity: 40, completion: 65 },
  { name: "Ignite", enrolled: 60, capacity: 80, completion: 40 },
  { name: "HerPreneur", enrolled: 22, capacity: 30, completion: 58 },
  { name: "TechXcelerate", enrolled: 18, capacity: 25, completion: 80 },
  { name: "Rural Innovators", enrolled: 30, capacity: 40, completion: 45 },
];

const contentItems = [
  { title: "Workshop: Growth Hacking 101", type: "Event", status: "published", date: "Apr 2, 2026" },
  { title: "Startup Playbook v3.0", type: "Resource", status: "published", date: "Mar 15, 2026" },
  { title: "Demo Day 2026", type: "Event", status: "draft", date: "Jun 15, 2026" },
  { title: "Financial Modeling Template", type: "Resource", status: "published", date: "Feb 28, 2026" },
  { title: "Mentor Network Guide", type: "Resource", status: "draft", date: "Apr 10, 2026" },
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = mockUsers.filter(u =>
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="hero-dark relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full bg-primary/[0.06] blur-[120px]" />

        <div className="container relative">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <Badge className="bg-primary/20 text-primary border-0 text-xs font-bold uppercase tracking-wider">Admin Panel</Badge>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-extrabold text-foreground">
                Admin <span className="text-primary">Dashboard</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                className="mt-2 text-muted-foreground">Manage your ecosystem, review applications, and monitor analytics.</motion.p>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-3">
              <div className="relative">
                <Bell className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
                <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-destructive" />
              </div>
              <Link to="/login">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-muted">
                  <LogOut className="h-4 w-4 mr-1" /> Logout
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border/60 bg-muted/40 backdrop-blur-sm px-5 py-4">
                <div className="flex items-center justify-between mb-1">
                  <stat.icon className="h-4 w-4 text-primary/60" />
                  <span className="text-xs font-bold text-green-600">{stat.change}</span>
                </div>
                <span className="text-2xl font-extrabold text-foreground">{stat.value}</span>
                <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-light py-12 md:py-16">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-muted/60 rounded-full p-1 mb-10 flex-wrap">
              <TabsTrigger value="overview" className="rounded-full px-5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Overview</TabsTrigger>
              <TabsTrigger value="users" className="rounded-full px-5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Users</TabsTrigger>
              <TabsTrigger value="applications" className="rounded-full px-5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Applications</TabsTrigger>
              <TabsTrigger value="content" className="rounded-full px-5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Content</TabsTrigger>
            </TabsList>

            {/* OVERVIEW TAB */}
            <TabsContent value="overview">
              <div className="grid lg:grid-cols-2 gap-10">
                {/* Program Metrics */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" /> Program Metrics
                  </h3>
                  <div className="space-y-4">
                    {programMetrics.map((prog, i) => (
                      <motion.div key={prog.name} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="rounded-xl bg-muted/40 px-5 py-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-sm text-foreground">{prog.name}</span>
                          <span className="text-xs text-muted-foreground">{prog.enrolled}/{prog.capacity} enrolled</span>
                        </div>
                        <Progress value={prog.completion} className="h-1.5 bg-muted" />
                        <p className="text-xs text-muted-foreground mt-1">{prog.completion}% avg completion</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Recent Applications */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                    <FileCheck className="h-5 w-5 text-primary" /> Recent Applications
                  </h3>
                  <div className="space-y-3">
                    {applications.slice(0, 4).map((app, i) => (
                      <motion.div key={app.id} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="flex items-center justify-between rounded-xl bg-muted/40 px-5 py-4">
                        <div>
                          <p className="font-semibold text-sm text-foreground">{app.name}</p>
                          <p className="text-xs text-muted-foreground">{app.startup} → {app.program}</p>
                        </div>
                        <Badge className={`border-0 text-xs ${
                          app.status === "approved" ? "bg-green-500/15 text-green-600" :
                          app.status === "rejected" ? "bg-destructive/15 text-destructive" :
                          "bg-primary/15 text-primary"
                        }`}>
                          {app.status}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                  <Button variant="ghost" className="mt-4 text-primary text-sm w-full hover:bg-primary/5" onClick={() => setActiveTab("applications")}>
                    View All Applications <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* USERS TAB */}
            <TabsContent value="users">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" /> User Management
                </h3>
                <div className="relative w-full sm:w-72">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text" placeholder="Search users..."
                    value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-full border border-border bg-background pl-10 pr-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              <div className="rounded-xl border border-border/60 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/40 hover:bg-muted/40">
                      <TableHead className="font-bold text-xs uppercase tracking-wider">Name</TableHead>
                      <TableHead className="font-bold text-xs uppercase tracking-wider">Email</TableHead>
                      <TableHead className="font-bold text-xs uppercase tracking-wider">Program</TableHead>
                      <TableHead className="font-bold text-xs uppercase tracking-wider">Status</TableHead>
                      <TableHead className="font-bold text-xs uppercase tracking-wider">Joined</TableHead>
                      <TableHead className="font-bold text-xs uppercase tracking-wider text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id} className="hover:bg-muted/30">
                        <TableCell className="font-semibold text-foreground">{user.name}</TableCell>
                        <TableCell className="text-muted-foreground">{user.email}</TableCell>
                        <TableCell><Badge variant="outline" className="border-primary/20 text-xs">{user.program}</Badge></TableCell>
                        <TableCell>
                          <Badge className={`border-0 text-xs ${
                            user.status === "active" ? "bg-green-500/15 text-green-600" :
                            user.status === "pending" ? "bg-primary/15 text-primary" :
                            "bg-muted text-muted-foreground"
                          }`}>{user.status}</Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">{user.joined}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button className="p-1.5 rounded-lg hover:bg-muted transition-colors"><Eye className="h-4 w-4 text-muted-foreground" /></button>
                            <button className="p-1.5 rounded-lg hover:bg-muted transition-colors"><Edit className="h-4 w-4 text-muted-foreground" /></button>
                            <button className="p-1.5 rounded-lg hover:bg-destructive/10 transition-colors"><Trash2 className="h-4 w-4 text-destructive/60" /></button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            {/* APPLICATIONS TAB */}
            <TabsContent value="applications">
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-primary" /> Application Review
              </h3>
              <div className="space-y-3">
                {applications.map((app, i) => (
                  <motion.div key={app.id} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-border/60 bg-background px-6 py-5 hover:border-primary/20 transition-all">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="font-bold text-foreground">{app.name}</h4>
                        <Badge variant="outline" className="border-primary/20 text-xs">{app.program}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Startup: {app.startup} • Submitted: {app.submitted}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {app.status === "pending" ? (
                        <>
                          <Button size="sm" className="rounded-full bg-green-500/15 text-green-600 hover:bg-green-500/25 border-0 text-xs font-bold">
                            <CheckCircle2 className="h-3.5 w-3.5 mr-1" /> Approve
                          </Button>
                          <Button size="sm" className="rounded-full bg-destructive/15 text-destructive hover:bg-destructive/25 border-0 text-xs font-bold">
                            <XCircle className="h-3.5 w-3.5 mr-1" /> Reject
                          </Button>
                        </>
                      ) : (
                        <Badge className={`border-0 text-xs ${
                          app.status === "approved" ? "bg-green-500/15 text-green-600" : "bg-destructive/15 text-destructive"
                        }`}>{app.status}</Badge>
                      )}
                      <button className="p-1.5 rounded-lg hover:bg-muted transition-colors"><Eye className="h-4 w-4 text-muted-foreground" /></button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* CONTENT TAB */}
            <TabsContent value="content">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" /> Content Management
                </h3>
                <Button size="sm" className="rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90">
                  + Add New
                </Button>
              </div>

              <div className="rounded-xl border border-border/60 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/40 hover:bg-muted/40">
                      <TableHead className="font-bold text-xs uppercase tracking-wider">Title</TableHead>
                      <TableHead className="font-bold text-xs uppercase tracking-wider">Type</TableHead>
                      <TableHead className="font-bold text-xs uppercase tracking-wider">Status</TableHead>
                      <TableHead className="font-bold text-xs uppercase tracking-wider">Date</TableHead>
                      <TableHead className="font-bold text-xs uppercase tracking-wider text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contentItems.map((item) => (
                      <TableRow key={item.title} className="hover:bg-muted/30">
                        <TableCell className="font-semibold text-foreground">{item.title}</TableCell>
                        <TableCell><Badge variant="outline" className="text-xs">{item.type}</Badge></TableCell>
                        <TableCell>
                          <Badge className={`border-0 text-xs ${
                            item.status === "published" ? "bg-green-500/15 text-green-600" : "bg-primary/15 text-primary"
                          }`}>{item.status}</Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">{item.date}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-1">
                            <button className="p-1.5 rounded-lg hover:bg-muted transition-colors"><Edit className="h-4 w-4 text-muted-foreground" /></button>
                            <button className="p-1.5 rounded-lg hover:bg-destructive/10 transition-colors"><Trash2 className="h-4 w-4 text-destructive/60" /></button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
