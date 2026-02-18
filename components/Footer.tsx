"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="py-8 bg-background border-t border-zinc-200 dark:border-zinc-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <Link href="/">
                            <Logo className="w-24 h-auto" />
                        </Link>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            {t.footer.rights.replace('{year}', new Date().getFullYear().toString())}
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors">
                            {t.footer.privacy}
                        </Link>
                        <Link href="/terms" className="text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors">
                            {t.footer.terms}
                        </Link>
                        {/* Added contact link just in case, though not explicitly in original footer structure but translation key exists */}
                        {/* <Link href="/contact" className="text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors">
              {t.footer.contact}
            </Link> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
