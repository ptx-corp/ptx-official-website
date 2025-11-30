"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, ChevronLeft, ChevronRight, ExternalLink, Newspaper, Award, Users, Sparkles, Pin } from "lucide-react";
import { PressItem } from "@/lib/api";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "next-themes";

interface PressListProps {
    initialPress: {
        en: PressItem[];
        th: PressItem[];
    };
}

const ITEMS_PER_PAGE = 9;

const getCategoryIcon = (category: PressItem['frontmatter']['category']) => {
    switch (category) {
        case 'press': return Newspaper;
        case 'award': return Award;
        case 'event': return Users;
        case 'partnership': return Sparkles;
        case 'community': return Users;
        case 'media': return Newspaper;
        default: return Newspaper;
    }
};

export function PressList({ initialPress }: PressListProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const { t, language } = useLanguage();
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const pressItems = initialPress[language] || initialPress.en;

    // Get unique categories
    const categories = ['all', ...Array.from(new Set(pressItems.map(item => item.frontmatter.category)))];

    // Filter items
    const filteredItems = selectedCategory === 'all'
        ? pressItems
        : pressItems.filter(item => item.frontmatter.category === selectedCategory);

    const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentPressItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    return (
        <>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                            ? "bg-accent text-accent-foreground shadow-lg scale-105"
                            : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                            }`}
                    >
                        {category === 'all'
                            ? t.press.all
                            : t.press.types[category as keyof typeof t.press.types]}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {currentPressItems.map((item, index) => {
                    const Icon = getCategoryIcon(item.frontmatter.category);
                    return (
                        <Link href={`/press/${item.slug}`} key={index} className="block h-full">
                            <article className="group !bg-white rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-200 hover:border-accent dark:hover:border-accent transition-all hover:shadow-lg h-full flex flex-col relative">
                                {item.frontmatter.pinned && (
                                    <div className="absolute top-0 right-0 bg-accent text-[#0A2342] px-3 py-1 rounded-bl-lg shadow-sm z-10 flex items-center gap-1">
                                        <Pin className="w-3 h-3 fill-current" />
                                        <span className="text-[10px] font-bold uppercase">Pinned</span>
                                    </div>
                                )}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div
                                        className="flex items-center gap-2 text-sm mb-3"
                                        style={{ color: mounted && resolvedTheme === 'dark' ? '#0A2342' : 'var(--accent)' }}
                                    >
                                        <Icon className="w-4 h-4" />
                                        <span className="font-semibold">{t.press.types[item.frontmatter.category as keyof typeof t.press.types]}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 !text-[#0A2342] group-hover:!text-accent transition-colors">
                                        {item.frontmatter.title}
                                    </h3>
                                    <p className="!text-[#52525b] mb-4 flex-1">
                                        {item.frontmatter.description}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-200">
                                        <div className="flex items-center gap-2 text-sm !text-[#71717a]">
                                            <Calendar className="w-4 h-4" />
                                            <span>{new Date(item.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                        </div>
                                        <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    );
                })}
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
