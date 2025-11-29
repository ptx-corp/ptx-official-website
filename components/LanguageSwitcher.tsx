"use client";

import { useLanguage } from "../context/LanguageContext";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-3">
            {/* EN Label */}
            <button
                onClick={() => setLanguage('en')}
                className={`text-sm font-bold transition-colors ${language === 'en'
                    ? 'text-gold drop-shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300'
                    }`}
            >
                EN
            </button>

            {/* Toggle Switch */}
            <button
                onClick={() => setLanguage(language === 'en' ? 'th' : 'en')}
                className="group relative w-14 h-8 bg-zinc-200 dark:bg-zinc-800 rounded-full shadow-inner transition-all duration-300 focus:outline-none ring-1 ring-black/5 dark:ring-white/10 hover:ring-gold/50 hover:shadow-[0_0_8px_rgba(255,193,7,0.2)]"
                aria-label="Toggle Language"
            >
                <div
                    className={`absolute top-1 w-6 h-6 bg-white dark:bg-zinc-700 rounded-full shadow-md transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center overflow-hidden border border-zinc-100 dark:border-zinc-600 group-active:scale-90 ${language === 'th' ? 'left-[calc(100%-1.75rem)] rotate-360' : 'left-1 rotate-0'
                        }`}
                >
                    <img
                        src={language === 'en' ? "/images/flags/united-states.png" : "/images/flags/thailand.png"}
                        alt={language === 'en' ? "English" : "Thai"}
                        className="w-full h-full object-cover"
                    />
                </div>
            </button>

            {/* TH Label */}
            <button
                onClick={() => setLanguage('th')}
                className={`text-sm font-bold transition-colors ${language === 'th'
                    ? 'text-gold drop-shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300'
                    }`}
            >
                TH
            </button>
        </div>
    );
}
