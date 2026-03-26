# Axibator — Design Documentation

## Overview

Axibator is a startup ecosystem platform featuring a dark-hero / light-section design language with bold blue accents.

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
- **Hero sections**: Dark background, radial dot pattern overlay, blurred gradient orbs
- **Content sections**: Light background with consistent vertical padding
- **Cards**: Large rounded borders, subtle hover lift, border color transitions
- **Animations**: Fade-up variants with staggered delays, scroll-triggered reveals
- **Buttons**: Custom variants including hero, hero-outline, and ecosystem styles

---

## Pages

### Public Pages

| Route           | Description                                                    |
|-----------------|----------------------------------------------------------------|
| `/`             | Landing page — hero, what-is, programs, ecosystem stats, founder journey, partners, events, CTA |
| `/about`        | About Axibator — mission, team, values                         |
| `/programs`     | Full programs listing with details                             |
| `/builder-nest` | Builder Nest coworking/community space info                    |
| `/startups`     | Portfolio startups showcase                                    |
| `/partners`     | Ecosystem partners and sponsors                                |
| `/events`       | Upcoming and past events calendar                              |
| `/resources`    | Startup resources, guides, and materials                       |
| `/apply`        | Application form for programs                                  |
| `/login`        | Login page (UI only, no auth backend)                          |
| `/signup`       | Signup page (UI only, no auth backend)                         |

### Dashboard Pages

| Route                | Description                                                  |
|----------------------|--------------------------------------------------------------|
| `/dashboard`         | Dashboard hub — choose between Student and Admin dashboards  |
| `/student-dashboard` | Student view: program progress, events, resources, profile   |
| `/admin-dashboard`   | Admin view: user management, applications, analytics, content|

### Error Pages

| Route | Description       |
|-------|-------------------|
| `*`   | 404 fallback page |

---

## Components

### Layout

| Component       | Description                                                         |
|-----------------|---------------------------------------------------------------------|
| Navbar          | Fixed top nav with logo, desktop links, mobile hamburger menu, Login/Apply buttons |
| Footer          | Site footer with nav links, social media icons (X, LinkedIn, Instagram, YouTube), copyright |
| Loading Screen  | Animated splash screen shown on initial load                        |
| Nav Link        | Reusable navigation link with active state styling                  |

### Landing Page Sections

| Component            | Description                                                        |
|----------------------|--------------------------------------------------------------------|
| Hero Section         | Full-width dark hero with headline, subtitle, and CTA buttons      |
| What Is Section      | "What is Axibator" explainer with feature highlights                |
| Problem Section      | Problem statement section outlining startup challenges              |
| Programs Section     | Program cards grid with icons, durations, and descriptions          |
| Ecosystem Stats      | Animated counter statistics (startups, mentors, etc.)               |
| Ecosystem Network    | Visual network/graph representation of the ecosystem                |
| Founder Journey      | Stage-based journey visualization with SVG paths and animations     |
| Builder Nest Section | Builder Nest preview with features grid and expansion map           |
| Startups Section     | Featured startups showcase                                         |
| Partners Section     | Auto-scrolling partner logos in two rows                            |
| Events Section       | Upcoming events list with dates, locations, and descriptions        |
| CTA Section          | Final call-to-action section with apply button                     |

### Visual / Background

| Component            | Description                                          |
|----------------------|------------------------------------------------------|
| Network Background   | Animated network/particle background effect           |
| Innovation Background| Decorative background for innovation-themed sections  |
| Expansion Map        | Geographic expansion visualization map                |

### UI Components (shadcn/ui)

Standard shadcn/ui component library with notable customizations:

| Component         | Notable Customizations                                    |
|-------------------|-----------------------------------------------------------|
| Button            | Custom variants: ecosystem, hero, hero-outline            |
| Card              | Standard card with header, content, footer                |
| Dialog            | Modal dialogs with overlay                                |
| Drawer            | Bottom sheet drawer                                       |
| Dropdown Menu     | Context/action menus                                      |
| Form              | Form integration with validation                          |
| Input             | Text input with label support                             |
| Progress          | Used in student dashboard for program milestones          |
| Tabs              | Used in admin dashboard for content sections              |
| Toast / Sonner    | Notification system                                       |
| Sidebar           | Collapsible sidebar with mobile support                   |
| Accordion         | Expandable content sections                               |
| Navigation Menu   | Complex navigation patterns                               |

---

## Features

### ✅ Implemented (UI Only)

| Feature                  | Details                                                                 |
|--------------------------|-------------------------------------------------------------------------|
| Responsive Navigation    | Desktop nav links + mobile hamburger with slide-down menu               |
| Animated Landing Page    | Scroll-triggered animations with staggered fade-up reveals              |
| Loading Splash Screen    | Animated intro on first visit                                           |
| Program Browsing         | Card-based program listings with icons and durations                    |
| Ecosystem Statistics     | Animated counters triggered on scroll                                   |
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

### 🔲 Not Yet Implemented

| Feature              | Notes                                             |
|----------------------|---------------------------------------------------|
| Authentication       | Login/Signup are UI-only; no backend               |
| Database             | No persistent data storage                         |
| Real API Integration | All data is hardcoded/static                       |
| Search               | No search functionality                            |
| Dark Mode Toggle     | Color tokens defined but no toggle UI              |
| X / YouTube Links    | Social links still placeholder                     |
