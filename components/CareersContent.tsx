"use client";

import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { ScrollAnimation } from "./ScrollAnimation";
import { Briefcase, MapPin, Clock, DollarSign, Send, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Footer from "./Footer";

// Mock job data structure for future use
interface JobPosition {
    id: string;
    title: string;
    type: string;
    location: string;
    salary: string;
    posted: string;
    description: string;
    requirements: string[];
    responsibilities: string[];
    benefits: string[];
}

export default function CareersContent() {
    const { t, language } = useLanguage();
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Example of how job data would look. Empty for now to show "No positions" state.
    // You can uncomment and populate this array to show jobs.
    const jobs: JobPosition[] = [
        // {
        //   id: "1",
        //   title: "Senior Software Engineer",
        //   type: "Full-time",
        //   location: "Bangkok (Hybrid)",
        //   salary: "Negotiable",
        //   posted: "2024-03-15",
        //   description: "We are looking for an experienced software engineer...",
        //   requirements: ["5+ years experience", "React & Node.js"],
        //   responsibilities: ["Develop features", "Mentor juniors"],
        //   benefits: ["Health insurance", "Bonus"]
        // }
    ];

    return (
        <div className="min-h-screen bg-background pt-16 md:pt-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 md:py-32">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 dark:from-primary/10 dark:to-accent/10"></div>
                <div className="container mx-auto px-6 relative text-center">
                    <ScrollAnimation animation="fade-in-up">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">
                            {t.careers.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto mb-10">
                            {t.careers.subtitle}
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Open Positions Section */}
            <section className="py-20 bg-zinc-50 dark:bg-zinc-900/30">
                <div className="container mx-auto px-6">
                    <ScrollAnimation animation="fade-in-up" className="mb-12 text-center">
                        <h2 className="text-3xl font-bold text-foreground inline-flex items-center gap-3">
                            <Briefcase className="w-8 h-8 text-accent" />
                            {t.careers.positions}
                        </h2>
                    </ScrollAnimation>

                    {jobs.length > 0 ? (
                        <div className="grid gap-6 max-w-4xl mx-auto">
                            {jobs.map((job) => (
                                <ScrollAnimation key={job.id} animation="fade-in-up">
                                    <div className="bg-white dark:bg-zinc-800/80 rounded-xl p-6 md:p-8 shadow-sm border border-zinc-200 dark:border-zinc-700 hover:border-accent dark:hover:border-accent transition-all group">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                            <div>
                                                <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                                                    {job.title}
                                                </h3>
                                                <div className="flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                                                    <div className="flex items-center gap-1">
                                                        <Briefcase className="w-4 h-4" />
                                                        <span>{job.type}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <MapPin className="w-4 h-4" />
                                                        <span>{job.location}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <DollarSign className="w-4 h-4" />
                                                        <span>{job.salary}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="w-4 h-4" />
                                                        <span>{job.posted}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link
                                                href={`/careers/${job.id}`}
                                                className="px-6 py-2 bg-accent/10 hover:bg-accent text-accent hover:text-accent-foreground rounded-lg font-semibold transition-all text-center whitespace-nowrap"
                                            >
                                                {t.careers.viewDetails}
                                            </Link>
                                        </div>

                                        <p className="text-zinc-600 dark:text-zinc-300 mb-6 line-clamp-2">
                                            {job.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {job.requirements.slice(0, 3).map((req, i) => (
                                                <span key={i} className="px-3 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-700/50 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-600">
                                                    {req}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    ) : (
                        <ScrollAnimation animation="scale-in">
                            <div className="max-w-md mx-auto text-center p-12 bg-white dark:bg-zinc-800/50 rounded-2xl border-2 border-dashed border-zinc-200 dark:border-zinc-700">
                                <div className="w-20 h-20 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Briefcase className="w-10 h-10 text-zinc-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{t.careers.noPositions}</h3>
                                <p className="text-zinc-500 dark:text-zinc-400">
                                    Check back later or follow us on social media for updates.
                                </p>
                            </div>
                        </ScrollAnimation>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <ScrollAnimation animation="fade-in-up">
                        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-accent rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                    {t.careers.title}
                                </h2>
                                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                    {t.careers.sendResume}
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <a
                                        href="mailto:info@ptx.co.th"
                                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-white/90 transition-colors shadow-lg"
                                    >
                                        <Send className="w-5 h-5" />
                                        info@ptx.co.th
                                    </a>
                                </div>
                                <p className="mt-6 text-sm text-white/70">
                                    {language === 'th'
                                        ? "หรือติดต่อเราผ่านทาง Social Media"
                                        : "Or contact us via Social Media"}
                                </p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            <Footer />
        </div >
    );
}
