"use client";

import { useLanguage } from "../context/LanguageContext";
import { ProjectList } from "./ProjectList";
import { Project } from "../lib/api";

interface ProjectsContentProps {
    projects: {
        en: Project[];
        th: Project[];
    };
}

export function ProjectsContent({ projects }: ProjectsContentProps) {
    const { t } = useLanguage();

    return (
        <main className="container mx-auto px-6 py-32">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    {t.portfolio.title}
                </h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-300">
                    {t.portfolio.subtitle}
                </p>
            </div>

            <ProjectList initialProjects={projects} />
        </main>
    );
}
