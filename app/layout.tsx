import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "../components/client-providers";
import { ThemeToggle } from "../components/theme-toggle";
import { Navigation } from "../components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PTX Official Website",
  description: "The official website for PTX Co., Ltd., showcasing our open-source projects and initiatives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProviders
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navigation />
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}