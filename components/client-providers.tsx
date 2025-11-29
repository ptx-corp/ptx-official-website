"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { LanguageProvider } from "../context/LanguageContext";

export function ClientProviders({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    return (
        <NextThemesProvider {...props}>
            <LanguageProvider>
                {children}
            </LanguageProvider>
        </NextThemesProvider>
    );
}
