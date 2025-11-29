# ptx-official-website

This is the official website for PTX Co., Ltd. It's an open-source project built with [Next.js](https://nextjs.org) (App Router), [Tailwind CSS](https://tailwindcss.com/), and uses Markdown files for content management. The site is designed for static HTML export, making it compatible with platforms like [Cloudflare Pages](https://pages.cloudflare.com/).

## Features

-   **Next.js App Router:** Modern React framework for building web applications.
-   **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
-   **Markdown Content:** Manage "Projects" or "Articles" using Markdown files with Frontmatter.
-   **Static HTML Export:** Optimized for deployment on static hosting platforms.
-   **`gray-matter`:** Parses Frontmatter from Markdown files.
-   **`date-fns`:** For efficient date manipulation and sorting of content.
-   **`remark` & `remark-html`:** Converts Markdown content to HTML for rendering.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx` or adding new Markdown files in the `_projects` directory. The page auto-updates as you edit the files.

### Building and Exporting for Production

To build your application and export it as static HTML:

```bash
npm run build
npm run export
```

The static files will be generated in the `out` directory.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

This project is configured for static HTML export, making it ideal for deployment on platforms like [Cloudflare Pages](https://pages.cloudflare.com/). After running `npm run build` and `npm run export`, simply deploy the contents of the `out` directory to your chosen static hosting provider.

## Licensing

Code is MIT Licensed, but Logos and Branding assets are proprietary to PTX Co., Ltd.