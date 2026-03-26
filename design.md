# Axibator — Design Documentation

## Overview

Axibator is a startup ecosystem platform built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, and **Framer Motion**. It features a dark-hero / light-section design language with bold blue accents.

---

## Design System

### Typography
| Role    | Font           | Usage                        |
|---------|----------------|------------------------------|
| Display | Space Grotesk  | Headings, buttons, hero text |
| Body    | Inter          | Paragraphs, labels, UI text  |

### Color Tokens (HSL)
| Token                | HSL Value         | Usage                          |
|----------------------|-------------------|--------------------------------|
| `--primary`          | 221 89% 61%      | Brand blue, CTAs, links        |
| `--primary-foreground` | 0 0% 100%      | Text on primary backgrounds    |
| `--secondary`        | 220 60% 8%       | Dark backgrounds (hero, nav)   |
| `--secondary-foreground` | 0 0% 92%    | Light text on dark backgrounds |
| `--accent`           | 221 85% 68%      | Lighter blue accents, badges   |
| `--accent-foreground`| 0 0% 100%        | Text on accent backgrounds     |
| `--background`       | 0 0% 100%        | Page background (light)        |
| `--foreground`       | 220 30% 6%       | Default text color             |
| `--muted`            | 0 0% 92%         | Subtle backgrounds             |
| `--muted-foreground` | 220 12% 45%      | Secondary text                 |
| `--border`           | 0 0% 85%         | Borders, dividers              |
| `--destructive`      | 0 84% 60%        | Error states, delete actions   |
| `--deep-blue`        | 220 60% 8%       | Alias for secondary            |
| `--ecosystem-bg`     | 0 0% 96%         | Light section backgrounds      |

### Design Patterns
- **Hero sections**: Dark background (`bg-secondary`), radial dot pattern overlay, blurred gradient orbs
- **Content sections**: Light background with `.section-light` / `.section-padding` utility classes
- **Cards**: Rounded borders (`rounded-2xl`), subtle hover lift (`hover:-translate-y-1`), border transitions
- **Animations**: Framer Motion `fadeUp` variants with staggered delays, scroll-triggered via `useInView`
- **Buttons**: Custom variants including `hero`, `hero-outline`, `ecosystem` (see Button component)

---

## Pages

### Public Pages

| Route           | File                    | Description                                                    |
|-----------------|-------------------------|----------------------------------------------------------------|
| `/`             | `Index.tsx`             | Landing page — hero, what-is, programs, ecosystem stats, founder journey, partners, events, CTA |
| `/about`        | `About.tsx`             | About Axibator — mission, team, values                         |
| `/programs`     | `Programs.tsx`          | Full programs listing with details                             |
| `/builder-nest` | `BuilderNest.tsx`       | Builder Nest coworking/community space info                    |
| `/startups`     | `Startups.tsx`          | Portfolio startups showcase                                    |
| `/partners`     | `Partners.tsx`          | Ecosystem partners and sponsors                                |
| `/events`       | `Events.tsx`            | Upcoming and past events calendar                              |
| `/resources`    | `Resources.tsx`         | Startup resources, guides, and materials                       |
| `/apply`        | `Apply.tsx`             | Application form for programs                                  |
| `/login`        | `Login.tsx`             | Login page (UI only, no auth backend)                          |
| `/signup`       | `Signup.tsx`            | Signup page (UI only, no auth backend)                         |

### Dashboard Pages

| Route                | File                      | Description                                                  |
|----------------------|---------------------------|--------------------------------------------------------------|
| `/dashboard`         | `Dashboard.tsx`           | Dashboard hub — choose between Student and Admin dashboards  |
| `/student-dashboard` | `StudentDashboard.tsx`    | Student view: program progress, events, resources, profile   |
| `/admin-dashboard`   | `AdminDashboard.tsx`      | Admin view: user management, applications, analytics, content|

### Error Pages

| Route | File            | Description       |
|-------|-----------------|-------------------|
| `*`   | `NotFound.tsx`  | 404 fallback page |

---

## Components

### Layout

| Component       | File                      | Description                                                         |
|-----------------|---------------------------|---------------------------------------------------------------------|
| `Navbar`        | `Navbar.tsx`              | Fixed top nav with logo, desktop links, mobile hamburger menu, Login/Apply buttons |
| `Footer`        | `Footer.tsx`              | Site footer with nav links, social media icons (X, LinkedIn, Instagram, YouTube), copyright |
| `LoadingScreen` | `LoadingScreen.tsx`       | Animated splash screen shown for 2.8s on initial load               |
| `NavLink`       | `NavLink.tsx`             | Reusable navigation link with active state styling                  |

### Landing Page Sections

| Component            | File                        | Description                                                        |
|----------------------|-----------------------------|--------------------------------------------------------------------|
| `HeroSection`        | `HeroSection.tsx`           | Full-width dark hero with headline, subtitle, and CTA buttons      |
| `WhatIsSection`      | `WhatIsSection.tsx`         | "What is Axibator" explainer with feature highlights                |
| `ProblemSection`     | `ProblemSection.tsx`        | Problem statement section outlining startup challenges              |
| `ProgramsSection`    | `ProgramsSection.tsx`       | Program cards grid with icons, durations, and descriptions          |
| `EcosystemStats`     | `EcosystemStats.tsx`        | Animated counter statistics (startups, mentors, etc.)               |
| `EcosystemNetwork`   | `EcosystemNetwork.tsx`      | Visual network/graph representation of the ecosystem                |
| `FounderJourney`     | `FounderJourney.tsx`        | Stage-based journey visualization with SVG paths and animations     |
| `BuilderNestSection` | `BuilderNestSection.tsx`    | Builder Nest preview with features grid and expansion map           |
| `StartupsSection`    | `StartupsSection.tsx`       | Featured startups showcase                                         |
| `PartnersSection`    | `PartnersSection.tsx`       | Auto-scrolling partner logos in two rows                            |
| `EventsSection`      | `EventsSection.tsx`         | Upcoming events list with dates, locations, and descriptions        |
| `CTASection`         | `CTASection.tsx`            | Final call-to-action section with apply button                     |

### Visual / Background

| Component              | File                          | Description                                          |
|------------------------|-------------------------------|------------------------------------------------------|
| `NetworkBackground`    | `NetworkBackground.tsx`       | Animated network/particle background effect           |
| `InnovationBackground` | `InnovationBackground.tsx`    | Decorative background for innovation-themed sections  |
| `ExpansionMap`         | `ExpansionMap.tsx`            | Geographic expansion visualization map                |

### UI Components (shadcn/ui)

All located in `src/components/ui/`. Standard shadcn/ui component library including:

| Component         | Notable Customizations                                    |
|-------------------|-----------------------------------------------------------|
| `Button`          | Custom variants: `ecosystem`, `hero`, `hero-outline`      |
| `Card`            | Standard card with header, content, footer                |
| `Dialog`          | Modal dialogs with overlay                                |
| `Drawer`          | Bottom sheet drawer (vaul-based)                          |
| `Dropdown Menu`   | Context/action menus                                      |
| `Form`            | react-hook-form integration with validation               |
| `Input`           | Text input with label support                             |
| `Progress`        | Used in student dashboard for program milestones          |
| `Tabs`            | Used in admin dashboard for content sections              |
| `Toast / Sonner`  | Notification system (dual: radix toast + sonner)          |
| `Sidebar`         | Collapsible sidebar with mobile support                   |
| `Accordion`       | Expandable content sections                               |
| `Navigation Menu` | Complex navigation patterns                               |

Full list: accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, hover-card, input, input-otp, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, switch, table, tabs, textarea, toast, toaster, toggle, toggle-group, tooltip.

---

## Features

### ✅ Implemented (UI Only)

| Feature                  | Details                                                                 |
|--------------------------|-------------------------------------------------------------------------|
| Responsive Navigation    | Desktop nav links + mobile hamburger with slide-down menu               |
| Animated Landing Page    | Scroll-triggered animations via Framer Motion `useInView`               |
| Loading Splash Screen    | 2.8s animated intro on first visit                                      |
| Program Browsing         | Card-based program listings with icons and durations                    |
| Ecosystem Statistics     | Animated counters with IntersectionObserver                             |
| Founder Journey Map      | Multi-stage visual journey with SVG connectors                          |
| Partner Showcase         | Infinite auto-scrolling logo rows (2 directions)                        |
| Events Listing           | Date-formatted event cards with location info                           |
| Application Form         | Multi-field form with validation (UI only)                              |
| Student Dashboard        | Program progress (milestones), events, resources, profile settings      |
| Admin Dashboard          | User table, application review, analytics stats, content management     |
| Dashboard Portal         | Hub page to select Student or Admin dashboard                           |
| Login / Signup           | Form UI with email/password fields (no backend auth)                    |
| Social Media Links       | Footer icons linking to Instagram and LinkedIn (X and YouTube pending)  |
| Builder Nest             | Coworking space info with features and expansion map                    |
| SEO Basics               | robots.txt present                                                      |

### 🔲 Not Yet Implemented

| Feature              | Notes                                             |
|----------------------|---------------------------------------------------|
| Authentication       | Login/Signup are UI-only; no backend               |
| Database             | No persistent data storage                         |
| Real API Integration | All data is hardcoded/static                       |
| Search               | No search functionality                            |
| Dark Mode Toggle     | CSS variables defined but no toggle UI             |
| X / YouTube Links    | Social links still placeholder (`#`)               |

---

## Tech Stack

| Layer       | Technology                                    |
|-------------|-----------------------------------------------|
| Framework   | React 18 + TypeScript                         |
| Build       | Vite 5                                        |
| Styling     | Tailwind CSS 3 + tailwindcss-animate          |
| Components  | shadcn/ui (Radix UI primitives)               |
| Animation   | Framer Motion 12                              |
| Routing     | React Router DOM 6                            |
| Forms       | React Hook Form + Zod                         |
| Charts      | Recharts                                      |
| State       | React Query (TanStack)                        |
| Icons       | Lucide React                                  |

---

## File Structure

```
src/
├── assets/            # Static assets (logos, SVGs)
├── components/
│   ├── ui/            # shadcn/ui component library (40+ components)
│   └── *.tsx          # Feature/section components
├── hooks/             # Custom hooks (use-mobile, use-toast)
├── lib/               # Utilities (cn helper)
├── pages/             # Route-level page components
├── test/              # Test setup and example tests
├── index.css          # Design tokens and global styles
├── main.tsx           # App entry point
└── App.tsx            # Router and providers
public/
├── partners/          # Partner logo images
├── robots.txt         # SEO
└── placeholder.svg    # Default placeholder
```
