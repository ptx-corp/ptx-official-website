"use client";

import { useLanguage } from "../context/LanguageContext";
import { PressList } from "./PressList";
import { PressItem } from "../lib/api";

interface PressContentProps {
    press: {
        en: PressItem[];
        th: PressItem[];
    };
}

export function PressContent({ press }: PressContentProps) {
    const { t } = useLanguage();

    return (
        <main className="container mx-auto px-6 py-32">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    {t.press.title}
                </h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-300">
                    {t.press.subtitle}
                </p>
            </div>

            <PressList initialPress={press} />
        </main>
    );
}
