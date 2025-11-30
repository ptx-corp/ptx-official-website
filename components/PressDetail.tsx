"use client";

import Link from 'next/link';
import { format } from 'date-fns';
import { useLanguage } from "../context/LanguageContext";
import { PressItem } from "../lib/api";

interface PressDetailProps {
    press: {
        en: PressItem;
        th: PressItem;
    };
}

export default function PressDetail({ press: localizedPress }: PressDetailProps) {
    const { language } = useLanguage();
    const press = localizedPress[language] || localizedPress.en;

    return (
        <div className="flex min-h-screen justify-center bg-background font-sans text-foreground">
            <main className="w-full max-w-3xl py-32 px-8 sm:px-16 bg-background">
                <header className="flex flex-col gap-4 mb-8">
                    <Link href="/press" className="text-accent hover:underline">
                        &larr; Back to press
                    </Link>
                    <h1 className="text-4xl font-bold tracking-tight">
                        {press.frontmatter.title}
                    </h1>
                    <time dateTime={press.frontmatter.date} className="text-sm text-zinc-500 dark:text-zinc-400">
                        {format(new Date(press.frontmatter.date), 'MMMM d, yyyy')}
                    </time>
                </header>
                <article
                    className="prose prose-zinc dark:prose-invert prose-headings:text-foreground prose-a:text-accent hover:prose-a:underline"
                    dangerouslySetInnerHTML={{ __html: press.content }}
                />
            </main>
        </div>
    );
}
