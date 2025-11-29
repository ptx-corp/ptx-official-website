import Logo from "../components/Logo";
import Link from "next/link";
import { getAllProjects } from "../lib/api"; // Using relative path
import { format } from 'date-fns';

export default async function Home() {
  const allProjects = await getAllProjects();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background font-sans text-foreground">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center gap-16 py-32 px-16 bg-background sm:items-start">
        <Logo className="w-[150px] h-auto" />
        <header className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Our Projects
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            A collection of our open source work.
          </p>
        </header>

        <section className="w-full">
          <div className="grid grid-cols-1 gap-8">
            {allProjects.map((project) => (
              <Link href={`/projects/${project.slug}`} key={project.slug}>
                <article className="group relative flex flex-col gap-2">
                  <h2 className="text-2xl font-semibold tracking-tight group-hover:text-accent">
                    {project.frontmatter.title}
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {project.frontmatter.excerpt}
                  </p>
                  <time dateTime={project.frontmatter.date} className="text-sm text-zinc-500 dark:text-zinc-500">
                    {format(new Date(project.frontmatter.date), 'MMMM d, yyyy')}
                  </time>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}