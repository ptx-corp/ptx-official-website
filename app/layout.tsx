import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "../components/client-providers";
import { ThemeToggle } from "../components/theme-toggle";
import { Navigation } from "../components/Navigation";

import { NotificationWrapper } from "../components/NotificationWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT X - พีที เอกซ์",
  description: "เว็บไซต์อย่างเป็นทางการของ PT X จำกัด แสดงผลงานและโครงการโอเพ่นซอร์สของเรา",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientProviders
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <NotificationWrapper />
          <Navigation />
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}