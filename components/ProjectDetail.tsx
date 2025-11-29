"use client";

import Link from 'next/link';
import { format } from 'date-fns';
import { useLanguage } from "../context/LanguageContext";
import { Project } from "../lib/api";

interface ProjectDetailProps {
    project: {
        en: Project;
        th: Project;
    };
}

export default function ProjectDetail({ project: localizedProject }: ProjectDetailProps) {
    const { language } = useLanguage();
    const project = localizedProject[language] || localizedProject.en;

    return (
        <div className="flex min-h-screen justify-center bg-background font-sans text-foreground">
            <main className="w-full max-w-3xl py-32 px-8 sm:px-16 bg-background">
                <header className="flex flex-col gap-4 mb-8">
                    <Link href="/projects" className="text-accent hover:underline">
                        &larr; Back to projects
                    </Link>
                    <h1 className="text-4xl font-bold tracking-tight">
                        {project.frontmatter.title}
                    </h1>
                    <time dateTime={project.frontmatter.date} className="text-sm text-zinc-500 dark:text-zinc-400">
                        {format(new Date(project.frontmatter.date), 'MMMM d, yyyy')}
                    </time>
                </header>
                <article
                    className="prose prose-zinc dark:prose-invert prose-headings:text-foreground prose-a:text-accent hover:prose-a:underline"
                    dangerouslySetInnerHTML={{ __html: project.content }}
                />
            </main>
        </div>
    );
}
