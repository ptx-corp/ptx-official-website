"use client";

import { useLanguage } from "../context/LanguageContext";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2 border border-zinc-300 dark:border-zinc-800 rounded-lg p-1 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
            <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-xs font-medium rounded-md transition-colors ${language === 'en'
                    ? 'bg-gold text-primary'
                    : 'text-zinc-700 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                    }`}
            >
                EN
            </button>
            <button
                onClick={() => setLanguage('th')}
                className={`px-2 py-1 text-xs font-medium rounded-md transition-colors ${language === 'th'
                    ? 'bg-gold text-primary'
                    : 'text-zinc-700 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                    }`}
            >
                TH
            </button>
        </div>
    );
}
