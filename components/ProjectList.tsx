"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "@/lib/api";

interface ProjectListProps {
    initialProjects: Project[];
}

const ITEMS_PER_PAGE = 6;

export function ProjectList({ initialProjects }: ProjectListProps) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(initialProjects.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProjects = initialProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {currentProjects.map((project) => (
                    <Link href={`/projects/${project.slug}`} key={project.slug} className="group bg-background rounded-xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-all hover:shadow-xl flex flex-col">
                        <div className="aspect-video relative overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                            {project.frontmatter.coverImage ? (
                                <img
                                    src={project.frontmatter.coverImage}
                                    alt={project.frontmatter.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            ) : (
                                <div className={`w-full h-full bg-gradient-to-br ${project.frontmatter.gradient || 'from-primary to-accent'}`}></div>
                            )}
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                                <Calendar className="w-3 h-3" />
                                <span>{new Date(project.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                                {project.frontmatter.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-4 flex-1">
                                {project.frontmatter.excerpt}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.frontmatter.tags.map((tag: string) => (
                                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        aria-label="Previous page"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <span className="text-sm font-medium">
                        Page {currentPage} of {totalPages}
                    </span>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        aria-label="Next page"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            )}
        </>
    );
}
