"use client";

"use client";

import Logo from "./Logo";
import Link from "next/link";
import { ArrowRight, Code, Sparkles, Users, Award, MessageCircle, Mail, Newspaper, Calendar, ExternalLink, Pin } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useCountAnimation } from "../hooks/useCountAnimation";
import { useLanguage } from "../context/LanguageContext";
import { Project, PressItem } from "../lib/api";

const getCategoryIcon = (category: PressItem['frontmatter']['category']) => {
  switch (category) {
    case 'press': return Newspaper;
    case 'award': return Award;
    case 'event': return Users;
    case 'partnership': return Sparkles;
    case 'community': return Users;
    case 'media': return Newspaper;
    default: return Newspaper;
  }
};

interface HomeContentProps {
  projects: {
    en: Project[];
    th: Project[];
  };
  press: {
    en: PressItem[];
    th: PressItem[];
  };
}

export default function HomeContent({ projects: initialProjects, press: initialPress }: HomeContentProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [animationTrigger, setAnimationTrigger] = useState(0);
  const { t, language } = useLanguage();

  // Get projects for current language, fallback to EN if empty (though API ensures structure)
  const projects = (initialProjects[language] || initialProjects.en).slice(0, 3);

  // Get press items for current language
  const pressItems = (initialPress[language] || initialPress.en).slice(0, 6);

  // Animated counters - re-trigger on theme change
  const projectsCount = useCountAnimation(50, 2000, mounted ? animationTrigger : false);
  const clientsCount = useCountAnimation(30, 2000, mounted ? animationTrigger : false);
  const yearsCount = useCountAnimation(8, 2000, mounted ? animationTrigger : false);
  const teamCount = useCountAnimation(15, 2000, mounted ? animationTrigger : false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Trigger animation on theme change
  useEffect(() => {
    if (mounted) {
      setAnimationTrigger(prev => prev + 1);
    }
  }, [resolvedTheme, mounted]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden pt-16 md:pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 dark:from-primary/10 dark:to-accent/10"></div>
        <div className="container mx-auto px-6 py-24 md:py-32 relative">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
            <div className="animate-fade-in relative w-[180px] md:w-[280px] h-auto">
              {mounted && (
                <img
                  src={resolvedTheme === 'dark' ? '/ptx-logo-dark.png' : '/ptx-logo-light.png'}
                  alt="PT X Logo"
                  className="w-full h-auto"
                />
              )}
              {!mounted && (
                <img
                  src="/ptx-logo-light.png"
                  alt="PT X Logo"
                  className="w-full h-auto"
                />
              )}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground animate-fade-in-up delay-100">
              {t.hero.title}
              <span className="block text-accent mt-2">{t.hero.subtitle}</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl animate-fade-in-up delay-200">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in-up delay-300">
              <Link
                href="#portfolio"
                className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                {t.hero.viewWork} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                {t.hero.contactUs}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ScrollAnimation animation="fade-in">
        <section className="py-16 bg-gradient-to-br from-accent/10 to-primary/10 dark:bg-night-sky">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <ScrollAnimation delay={100} animation="scale-in" className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-2">{projectsCount}+</div>
                <div className="text-sm md:text-base text-foreground/80 font-medium">{t.stats.projects}</div>
              </ScrollAnimation>
              <ScrollAnimation delay={200} animation="scale-in" className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-2">{clientsCount}+</div>
                <div className="text-sm md:text-base text-foreground/80 font-medium">{t.stats.clients}</div>
              </ScrollAnimation>
              <ScrollAnimation delay={300} animation="scale-in" className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-2">{yearsCount}+</div>
                <div className="text-sm md:text-base text-foreground/80 font-medium">{t.stats.years}</div>
              </ScrollAnimation>
              <ScrollAnimation delay={400} animation="scale-in" className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-2">{teamCount}+</div>
                <div className="text-sm md:text-base text-foreground/80 font-medium">{t.stats.team}</div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background scroll-mt-20">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fade-in-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t.services.title}</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation delay={100} animation="fade-in-up">
              <div className="p-8 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-colors h-full">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.services.customSoftware}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {t.services.customSoftwareDesc}
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200} animation="fade-in-up">
              <div className="p-8 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-colors h-full">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.services.webMobile}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {t.services.webMobileDesc}
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={300} animation="fade-in-up">
              <div className="p-8 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-colors h-full">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.services.consulting}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {t.services.consultingDesc}
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={100} animation="fade-in-up">
              <div className="p-8 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-colors h-full">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.services.productDesign}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {t.services.productDesignDesc}
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200} animation="fade-in-up">
              <div className="p-8 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-colors h-full">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.services.cloudSolutions}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {t.services.cloudSolutionsDesc}
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={300} animation="fade-in-up">
              <div className="p-8 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-colors h-full">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.services.aiMl}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {t.services.aiMlDesc}
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-24 bg-zinc-50 scroll-mt-20"
        style={{ backgroundColor: mounted && resolvedTheme === 'dark' ? '#061629' : '' }}
      >
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fade-in-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t.portfolio.title}</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              {t.portfolio.subtitle}
            </p>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link href={`/projects/${project.slug}`} key={project.slug} className="group !bg-white rounded-xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-200 hover:border-accent dark:hover:border-accent transition-all hover:shadow-xl flex flex-col relative">
                {project.frontmatter.featured && (
                  <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-3 py-1 rounded-bl-lg shadow-sm z-20 flex items-center gap-1">
                    <Pin className="w-3 h-3 fill-current" />
                    <span className="text-[10px] font-bold uppercase">Featured</span>
                  </div>
                )}
                <div className="aspect-video relative overflow-hidden bg-zinc-100 dark:bg-zinc-100">
                  {project.frontmatter.coverImage ? (
                    <img
                      src={project.frontmatter.coverImage}
                      alt={project.frontmatter.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${project.frontmatter.gradient || 'from-primary to-accent'}`}></div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs !text-[#71717a] mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(project.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 !text-[#0A2342] group-hover:!text-accent transition-colors">
                    {project.frontmatter.title}
                  </h3>
                  <p className="!text-[#52525b] mb-4 flex-1">
                    {project.frontmatter.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.frontmatter.tags.map((tag: string) => (
                      <span key={tag} className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <ScrollAnimation delay={200} animation="fade-in" className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all"
            >
              {t.portfolio.viewAll}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* Press & Activity Section */}
      <section id="press" className="py-24 bg-background scroll-mt-20">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fade-in-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t.press.title}</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              {t.press.subtitle}
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Press Release 1 */}
            {pressItems.map((item, index) => {
              const Icon = getCategoryIcon(item.frontmatter.category);
              return (
                <ScrollAnimation key={index} delay={100 + (index % 3) * 100} animation="fade-in-up">
                  <Link href={`/press/${item.slug}`} className="block h-full">
                    <article className="group !bg-white rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-200 hover:border-accent dark:hover:border-accent transition-all hover:shadow-lg h-full flex flex-col relative">
                      {item.frontmatter.pinned && (
                        <div className="absolute top-0 right-0 bg-accent text-[#0A2342] px-3 py-1 rounded-bl-lg shadow-sm z-10 flex items-center gap-1">
                          <Pin className="w-3 h-3 fill-current" />
                          <span className="text-[10px] font-bold uppercase">Pinned</span>
                        </div>
                      )}
                      <div className="p-6 flex-1 flex flex-col">
                        <div
                          className="flex items-center gap-2 text-sm mb-3"
                          style={{ color: mounted && resolvedTheme === 'dark' ? '#0A2342' : 'var(--accent)' }}
                        >
                          <Icon className="w-4 h-4" />
                          <span className="font-semibold">{t.press.types[item.frontmatter.category as keyof typeof t.press.types]}</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 !text-[#0A2342] group-hover:!text-accent transition-colors">
                          {item.frontmatter.title}
                        </h3>
                        <p className="!text-[#52525b] mb-4 flex-1">
                          {item.frontmatter.description}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-200">
                          <div className="flex items-center gap-2 text-sm !text-[#71717a]">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(item.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                          </div>
                          <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </article>
                  </Link>
                </ScrollAnimation>
              );
            })}
          </div>

          {/* View All Press Button */}
          <ScrollAnimation delay={200} animation="fade-in" className="text-center mt-12">
            <Link
              href="/press"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all"
            >
              {t.press.viewAll}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* Clients Section */}
      <section
        id="clients"
        className="py-24 bg-zinc-50 scroll-mt-20"
        style={{ backgroundColor: mounted && resolvedTheme === 'dark' ? '#061629' : '' }}
      >
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fade-in-up" className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            >
              {t.clients.title}
            </h2>
            <p
              className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto"
            >
              {t.clients.subtitle}
            </p>
          </ScrollAnimation>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
            <ScrollAnimation delay={100} animation="fade-in">
              <div className="flex items-center justify-center p-8 bg-background rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-all hover:shadow-lg group">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-lg bg-gradient-to-br from-primary to-accent mb-3 flex items-center justify-center">
                    <span
                      className="font-bold text-xl"
                      style={{ color: mounted && resolvedTheme === 'dark' ? '#ffffff' : '#0A2342' }}
                    >
                      TC
                    </span>
                  </div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: mounted && resolvedTheme === 'dark' ? '#ffffff' : '#0A2342' }}
                  >
                    TechCorp Global
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={150} animation="fade-in">
              <div className="flex items-center justify-center p-8 bg-background rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-all hover:shadow-lg group">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-lg bg-gradient-to-br from-accent to-sun mb-3 flex items-center justify-center">
                    <span
                      className="font-bold text-xl"
                      style={{ color: mounted && resolvedTheme === 'dark' ? '#ffffff' : '#0A2342' }}
                    >
                      FI
                    </span>
                  </div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: mounted && resolvedTheme === 'dark' ? '#ffffff' : '#0A2342' }}
                  >
                    FinanceInc
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200} animation="fade-in">
              <div className="flex items-center justify-center p-8 bg-background rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-all hover:shadow-lg group">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-lg bg-gradient-to-br from-sky to-primary mb-3 flex items-center justify-center">
                    <span
                      className="font-bold text-xl"
                      style={{ color: mounted && resolvedTheme === 'dark' ? '#ffffff' : '#0A2342' }}
                    >
                      HC
                    </span>
                  </div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: mounted && resolvedTheme === 'dark' ? '#ffffff' : '#0A2342' }}
                  >
                    HealthCare Plus
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={250} animation="fade-in">
              <div className="flex items-center justify-center p-8 bg-background rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-all hover:shadow-lg group">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-lg bg-gradient-to-br from-spots to-night-sky mb-3 flex items-center justify-center">
                    <span
                      className="font-bold text-xl"
                      style={{ color: mounted && resolvedTheme === 'dark' ? '#ffffff' : '#0A2342' }}
                    >
                      EL
                    </span>
                  </div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: mounted && resolvedTheme === 'dark' ? '#ffffff' : '#0A2342' }}
                  >
                    EduLearn
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={100} animation="fade-in">
              <div className="flex items-center justify-center p-8 bg-background rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-all hover:shadow-lg group">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-lg bg-gradient-to-br from-sun to-accent mb-3 flex items-center justify-center">
                    <span
                      className="font-bold text-xl"
                      style={{ color: mounted && resolvedTheme === 'dark' ? '#ffffff' : '#0A2342' }}
                    >
                      RM
                    </span>
                  </div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: mounted && resolvedTheme === 'dark' ? '#ffffff' : '#0A2342' }}
                  >
                    RetailMax
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={150} animation="fade-in">
              <div className="flex items-center justify-center p-8 bg-background rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-all hover:shadow-lg group">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-lg bg-gradient-to-br from-primary to-night-sky mb-3 flex items-center justify-center">
                    <span
                      className="font-bold text-xl"
                      style={{ color: mounted && resolvedTheme === 'dark' ? '#ffffff' : '#0A2342' }}
                    >
                      LS
                    </span>
                  </div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: mounted && resolvedTheme === 'dark' ? '#ffffff' : '#0A2342' }}
                  >
                    LogiSolutions
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200} animation="fade-in">
              <div className="flex items-center justify-center p-8 bg-background rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-all hover:shadow-lg group">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-lg bg-gradient-to-br from-accent to-primary mb-3 flex items-center justify-center">
                    <span
                      className="font-bold text-xl"
                      style={{ color: mounted && resolvedTheme === 'dark' ? '#ffffff' : '#0A2342' }}
                    >
                      MP
                    </span>
                  </div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: mounted && resolvedTheme === 'dark' ? '#ffffff' : '#0A2342' }}
                  >
                    MediaPro
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={250} animation="fade-in">
              <div className="flex items-center justify-center p-8 bg-background rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-all hover:shadow-lg group">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-lg bg-gradient-to-br from-sky to-accent mb-3 flex items-center justify-center">
                    <span
                      className="font-bold text-xl"
                      style={{ color: mounted && resolvedTheme === 'dark' ? '#ffffff' : '#0A2342' }}
                    >
                      SM
                    </span>
                  </div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: mounted && resolvedTheme === 'dark' ? '#ffffff' : '#0A2342' }}
                  >
                    StartupMakers
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section
        id="contact"
        className="py-24 scroll-mt-20"
        style={{ backgroundColor: mounted && resolvedTheme === 'dark' ? '#0A2342' : '#ffffff' }}
      >
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fade-in-up" className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: mounted && resolvedTheme === 'dark' ? '#ffffff' : '#0A2342' }}
            >
              {t.contact.title}
            </h2>
            <p
              className="text-lg mb-8"
              style={{ color: mounted && resolvedTheme === 'dark' ? 'rgba(255,255,255,0.8)' : 'rgba(10,35,66,0.8)' }}
            >
              {t.contact.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@ptx.co.th"
                className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                {t.contact.email}
              </a>
              <a
                href="tel:+6621620878"
                className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                {t.contact.schedule}
              </a>
              <a
                href="https://line.me/R/ti/p/@pt-x"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                LineOA: @pt-x
              </a>
            </div>
            <div
              className="mt-12 pt-12 border-t"
              style={{ borderColor: mounted && resolvedTheme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(10,35,66,0.2)' }}
            >
              <div
                className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 text-sm md:text-base"
                style={{ color: mounted && resolvedTheme === 'dark' ? 'rgba(255,255,255,0.6)' : 'rgba(10,35,66,0.6)' }}
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span className="whitespace-nowrap">{t.contact.info}</span>
                </div>
                <div className="hidden md:block">•</div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="whitespace-nowrap">{t.contact.phone}</span>
                </div>
                <div className="hidden md:block">•</div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <a href="https://line.me/R/ti/p/@pt-x" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap hover:underline">LineOA: @pt-x</a>
                </div>
                <div className="hidden md:block">•</div>
                <div className="flex items-center gap-2 max-w-[300px] md:max-w-none text-center md:text-left">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{t.contact.address}</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      < footer className="py-8 bg-background border-t border-zinc-200 dark:border-zinc-800" >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Logo className="w-24 h-auto" />
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {t.footer.rights.replace('{year}', new Date().getFullYear().toString())}
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors">
                {t.footer.privacy}
              </Link>
              <Link href="/terms" className="text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors">
                {t.footer.terms}
              </Link>
              <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors">
                {t.footer.contact}
              </a>
            </div>
          </div>
        </div>
      </footer >

    </div >
  );
}
