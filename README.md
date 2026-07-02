# Istaqim Landing Page

A modern, fully responsive landing page for the Istaqim platform -- a mosque and halaqah management system. Built with React, TypeScript, Vite, and SCSS, this project demonstrates a clean component architecture, bilingual support (Arabic RTL / English LTR), and production-ready tooling.


## Features

- Bilingual internationalization with i18next -- full Arabic (RTL) and English (LTR) support with dynamic layout switching
- Scroll-aware navigation bar that hides on scroll-down and reappears on scroll-up
- Mobile drawer menu with animated hamburger toggle
- Reusable UI components (buttons, links, icons, CTAs, dividers, language switcher)
- Responsive layout optimized for desktop, tablet, and mobile viewports
- SCSS architecture with CSS custom properties, mixins, and utility patterns for consistent styling
- Timeline visualization for the "How It Works" section
- Configurable feature toggle cards demonstrating the platform's flexibility
- Section-based layout with clear separation between Hero, Problem, Solution, Features, How It Works, Benefits, and Call-to-Action

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React 19 | UI library |
| TypeScript 6 | Type safety and developer tooling |
| Vite 8 | Build tool and dev server |
| SCSS Modules | Scoped styling with custom properties and mixins |
| i18next + react-i18next | Internationalization with Arabic and English locales |
| ESLint | Code quality and linting |
| react-icons | Icon library for UI elements |

## Project Structure

```
src/
  assets/          Static assets (SVG icons, fonts, background patterns)
  components/
    layout/        Layout components (NavBar, Drawer, FeatureIconsLayout)
    ui/            Reusable UI primitives (Button, CTA, Logo, Divider, etc.)
  hooks/           Custom React hooks
  i18n/            i18next configuration and locale JSON files
  sections/        Page sections (Hero, Problem, Solution, Features, etc.)
  styles/          Global styles, SCSS variables, mixins, and base rules
  utils/           Utility hooks (useScrollNavbar)
  App.tsx          Root component composing all sections
  main.tsx         Application entry point
```

## Installation

```bash
git clone https://github.com/your-username/istaqim-landing.git
cd istaqim-landing
npm install
```

## Running the Project

```bash
npm run dev
```

The development server starts at `http://localhost:5173`.

## Build for Production

```bash
npm run build
```

The output is written to the `dist/` directory. Preview the production build with:

```bash
npm run preview
```

## What I Learned

- Structuring a bilingual React application with seamless RTL/LTR switching
- Building a reusable component library from scratch with SCSS Modules for scoped styling
- Implementing a scroll-aware navbar with show-on-scroll-up behavior using React hooks
- Architecting SCSS with design tokens (custom properties), mixins, and a responsive typography system
- Composing a landing page from independently developed, reusable sections
- Configuring Vite with TypeScript strict mode for production-grade development


## Live demo 

https://istaqim-landing-page.vercel.app/
