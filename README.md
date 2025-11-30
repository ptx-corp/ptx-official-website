# PT X Official Website

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)


This is the official website for PT X, a technology company specializing in innovative software solutions. Built with [Next.js](https://nextjs.org) (App Router) and [Tailwind CSS](https://tailwindcss.com/), it features a dynamic project portfolio managed via Markdown files and full multilingual support (Thai/English). The site is optimized for static HTML export, making it compatible with platforms like [Cloudflare Pages](https://pages.cloudflare.com/).

## Features

-   **Multilingual Support:** Full support for Thai (Default) and English languages with a custom context provider and switcher.
-   **Next.js App Router:** Modern React framework for building performant web applications.
-   **Tailwind CSS:** Utility-first CSS framework for rapid, responsive UI development.
-   **Dynamic Portfolio:** Manage projects using Markdown files with Frontmatter, supporting localized content.
-   **Featured Projects:** Pin important projects to the home page using a simple flag.
-   **Pagination:** Automatically paginated project listing page (`/projects`).
-   **CLI Generator:** Built-in script to easily generate new project files for both languages simultaneously.
-   **Static Export:** Configured for static HTML export (`output: 'export'`).
-   **Dark Mode:** Built-in dark/light mode support using `next-themes`.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Managing Projects

Projects are stored as Markdown files in the `_projects/` directory, organized by language.

-   `_projects/en/`: English versions of project files.
-   `_projects/th/`: Thai versions of project files.

### Creating a New Project

You can easily create a new project using the included CLI script:

```bash
npm run new-project
```

Follow the prompts to enter:
1.  **Project Title (English & Thai)**
2.  **Short Excerpt (English & Thai)**
3.  **Tags & Cover Image** (Shared)

The script will automatically generate two `.md` files (one in `en/` and one in `th/`) with the correct format and templates.

### Project Frontmatter

A typical project file looks like this:

```markdown
---
title: 'My Awesome Project'
date: '2024-11-29'
excerpt: 'A brief description of the project.'
coverImage: '/projects/my-image.jpg'
featured: true
tags: ['React', 'Next.js', 'TypeScript']
---

## Project Overview

Your content goes here...
```

*   **title**: The name of the project.
*   **date**: The publication date (YYYY-MM-DD). Used for sorting.
*   **excerpt**: A short summary displayed on the card.
*   **coverImage**: Path to the project image (stored in `public/projects/`).
*   **featured**: Set to `true` to pin this project to the top of the Home page list.
*   **tags**: A list of technologies or categories.

### Featured Projects

The Home page displays the top 3 projects. Projects marked with `featured: true` will appear first, followed by the most recent non-featured projects.

### All Projects

The `/projects` page lists all projects with pagination (6 projects per page).

## Managing Press & Activities

Press releases, awards, and events are stored as Markdown files in the `_press/` directory, organized by language.

-   `_press/en/`: English versions of press items.
-   `_press/th/`: Thai versions of press items.

### Creating a New Press Item

You can easily create a new press release or activity using the included CLI script:

```bash
npm run new-press
```

Follow the prompts to enter:
1.  **Title (English & Thai)**
2.  **Short Description (English & Thai)**
3.  **Category** (press, award, event, partnership, community, media)
4.  **Date & Pinned Status**

The script will automatically generate two `.md` files (one in `en/` and one in `th/`) with the correct format and templates.

### Press Frontmatter

A typical press file looks like this:

```markdown
---
title: "Named 'Best Tech Startup 2024'"
description: "PT X recognized for outstanding innovation."
date: "2024-10-28"
category: "award"
pinned: true
---

# Title Here

Content goes here...
```

*   **title**: The headline of the press release or activity.
*   **description**: A short summary displayed on the card.
*   **date**: The publication or event date (YYYY-MM-DD).
*   **category**: The type of item. Options: `press`, `award`, `event`, `partnership`, `community`, `media`.
*   **pinned**: Set to `true` to pin this item to the top of the list.

## Sticky Notification Bar

The website features a global sticky notification bar at the top of the page, useful for announcements or development status.

### Managing the Notification Bar

You can easily manage the notification bar (toggle on/off, change message, update colors) using the CLI script:

```bash
npm run manage-notification
```

Follow the interactive prompts to:
1.  **Toggle On/Off**: Enable or disable the bar.
2.  **Change Message**: Update the text displayed.
3.  **Change Colors**: Customize the background and text colors.

### Configuration

The configuration is stored in `config/notification.json`. You can also edit this file manually:

```json
{
  "enabled": true,
  "message": "Your message here...",
  "backgroundColor": "#ef4444",
  "textColor": "#ffffff"
}
```

## Building for Production

To build the application for production (static HTML export):

```bash
npm run build
```

The static files will be generated in the `out` directory. You can deploy this directory to any static hosting provider (Cloudflare Pages, Vercel, Netlify, GitHub Pages, etc.).

## Project Structure

*   `app/`: Next.js App Router pages and API routes.
*   `components/`: Reusable React components (Navigation, ProjectList, LanguageSwitcher, etc.).
*   `config/`: Configuration files (notification settings).
*   `context/`: React Context providers (LanguageContext).
*   `lib/`: Utility functions (Markdown parsing, API logic, Translations).
*   `_projects/`: Markdown source files for portfolio projects (split into `en` and `th`).
*   `_press/`: Markdown source files for press & activities (split into `en` and `th`).
*   `public/`: Static assets (images, logos).
*   `scripts/`: Utility scripts (project generator).

## Licensing

Code is MIT Licensed. Logos, branding assets, and project content are proprietary to PT X.