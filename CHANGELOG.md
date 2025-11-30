# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-30

### Added
- **Core Framework**: Initial release built with Next.js 15 (App Router) and Tailwind CSS v4.
- **Multilingual Support**: Full Thai and English language support with `LanguageContext` and switcher.
- **Dark Mode**: System-aware dark mode support using `next-themes` with custom color palettes (Navy/Gold).
- **Portfolio System**:
  - Dynamic project pages generated from Markdown files (`_projects/`).
  - "Featured Projects" section on the homepage.
  - Paginated `/projects` listing page.
  - `npm run new-project` CLI tool for generating project files.
- **Press & Activities**:
  - News and events management via Markdown (`_press/`).
  - "Press & Activities" section on the homepage.
  - Dedicated `/press` listing page with category filtering.
  - `npm run new-press` CLI tool for generating press items.
- **UI Components**:
  - Responsive Navigation bar with mobile menu.
  - "Our Clients" section with logo cards.
  - "Contact" section with email, phone, and LineOA links.
  - **Sticky Notification Bar**: Global alert bar for announcements.
    - Configurable via `config/notification.json` or CLI (`npm run manage-notification`).
    - Dismissible by user (persists per session).
  - Scroll animations and hover effects.
- **Legal & Compliance**:
  - **Privacy Policy**: Bilingual page (`/privacy`) compliant with PDPA/GDPR (Data Controller/Processor, International Transfer).
  - **Terms of Use**: Bilingual page (`/terms`) covering IP, liability, and external links.
  - **Footer Links**: Direct access to legal pages.
- **SEO & Performance**:
  - Static HTML export configuration (`output: 'export'`).
  - Metadata and OpenGraph tags.
  - Optimized font loading (Geist Sans/Mono).
