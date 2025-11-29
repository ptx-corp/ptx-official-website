"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/#services", label: t.nav.services },
    { href: "/#portfolio", label: t.nav.portfolio },
    { href: "/#press", label: t.nav.press },
    { href: "/#clients", label: t.nav.clients },
    { href: "/#contact", label: t.nav.contact },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-md border-b border-zinc-200 dark:border-zinc-800"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={handleLinkClick}>
            <Logo className="w-12 sm:w-16 md:w-20 h-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 border-l border-zinc-200 dark:border-zinc-800 pl-6">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-background border-t border-zinc-200 dark:border-zinc-800 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-semibold text-foreground hover:text-accent transition-all py-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
