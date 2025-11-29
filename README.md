# PT X Official Website

This is the official website for PT X, a technology company specializing in innovative software solutions. Built with [Next.js](https://nextjs.org) (App Router) and [Tailwind CSS](https://tailwindcss.com/), it features a dynamic project portfolio managed via Markdown files. The site is optimized for static HTML export, making it compatible with platforms like [Cloudflare Pages](https://pages.cloudflare.com/).

## Features

-   **Next.js App Router:** Modern React framework for building performant web applications.
-   **Tailwind CSS:** Utility-first CSS framework for rapid, responsive UI development.
-   **Dynamic Portfolio:** Manage projects using Markdown files with Frontmatter.
-   **Featured Projects:** Pin important projects to the home page using a simple flag.
-   **Pagination:** Automatically paginated project listing page (`/projects`).
-   **CLI Generator:** Built-in script to easily generate new project files.
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

Projects are stored as Markdown files in the `_projects/` directory. Each file contains frontmatter for metadata and the main content.

### Creating a New Project

You can easily create a new project using the included CLI script:

```bash
npm run new-project
```

Follow the prompts to enter the project title, excerpt, tags, and cover image. The script will generate a new `.md` file with the correct format.

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

## Building for Production

To build the application for production (static HTML export):

```bash
npm run build
```

The static files will be generated in the `out` directory. You can deploy this directory to any static hosting provider (Cloudflare Pages, Vercel, Netlify, GitHub Pages, etc.).

## Project Structure

*   `app/`: Next.js App Router pages and API routes.
*   `components/`: Reusable React components (Navigation, ProjectList, etc.).
*   `lib/`: Utility functions (Markdown parsing, API logic).
*   `_projects/`: Markdown source files for portfolio projects.
*   `public/`: Static assets (images, logos).
*   `scripts/`: Utility scripts (project generator).

## Licensing

Code is MIT Licensed. Logos, branding assets, and project content are proprietary to PT X.