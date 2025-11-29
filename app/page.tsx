"use client";

import Logo from "../components/Logo";
import Link from "next/link";
import { ArrowRight, Code, Sparkles, Users, Award, MessageCircle, Mail, Newspaper, Calendar, ExternalLink } from "lucide-react";
import { ScrollAnimation } from "../components/ScrollAnimation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useCountAnimation } from "../hooks/useCountAnimation";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [animationTrigger, setAnimationTrigger] = useState(0);

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
            <div className="animate-fade-in relative w-[250px] md:w-[400px] h-auto">
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
              Building the Future with
              <span className="block text-accent mt-2">Innovation & Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl animate-fade-in-up delay-200">
              PT X is a technology company dedicated to creating innovative solutions
              that empower businesses and communities through cutting-edge software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in-up delay-300">
              <Link
                href="#portfolio"
                className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                View Our Work <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                Get In Touch
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
                <div className="text-sm md:text-base text-foreground/80 font-medium">Projects Delivered</div>
              </ScrollAnimation>
              <ScrollAnimation delay={200} animation="scale-in" className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-2">{clientsCount}+</div>
                <div className="text-sm md:text-base text-foreground/80 font-medium">Happy Clients</div>
              </ScrollAnimation>
              <ScrollAnimation delay={300} animation="scale-in" className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-2">{yearsCount}+</div>
                <div className="text-sm md:text-base text-foreground/80 font-medium">Years Experience</div>
              </ScrollAnimation>
              <ScrollAnimation delay={400} animation="scale-in" className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary dark:text-accent mb-2">{teamCount}+</div>
                <div className="text-sm md:text-base text-foreground/80 font-medium">Team Members</div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background scroll-mt-20">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fade-in-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Services</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              We offer comprehensive technology solutions tailored to your business needs
            </p>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation delay={100} animation="fade-in-up">
              <div className="p-8 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-colors h-full">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Custom Software Development</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Tailored software solutions designed to meet your unique business requirements and drive growth.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200} animation="fade-in-up">
              <div className="p-8 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-colors h-full">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Web & Mobile Applications</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Responsive and performant applications that deliver exceptional user experiences across all devices.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={300} animation="fade-in-up">
              <div className="p-8 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-colors h-full">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Digital Consulting</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Strategic guidance to help you navigate digital transformation and leverage technology effectively.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={100} animation="fade-in-up">
              <div className="p-8 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-colors h-full">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Product Design</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  User-centered design that creates intuitive and engaging digital products.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200} animation="fade-in-up">
              <div className="p-8 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-colors h-full">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cloud Solutions</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Scalable cloud infrastructure and deployment strategies for modern applications.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={300} animation="fade-in-up">
              <div className="p-8 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-colors h-full">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI & Machine Learning</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Intelligent solutions powered by artificial intelligence and advanced data analytics.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-zinc-50 dark:bg-zinc-900/50 scroll-mt-20">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fade-in-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Explore some of our recent work and success stories
            </p>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-background rounded-xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-all hover:shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-primary to-accent"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  E-Commerce Platform
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  A comprehensive online marketplace with advanced inventory management and payment integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">React</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">Node.js</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">PostgreSQL</span>
                </div>
              </div>
            </div>
            <div className="group bg-background rounded-xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-all hover:shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-accent to-sun"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  Healthcare Management System
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Digital solution for patient management, appointments, and medical records.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">Next.js</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">TypeScript</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">MongoDB</span>
                </div>
              </div>
            </div>
            <div className="group bg-background rounded-xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-all hover:shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-sky to-primary"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  Financial Analytics Dashboard
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Real-time data visualization and reporting for investment portfolio management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">Vue.js</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">Python</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">Redis</span>
                </div>
              </div>
            </div>
            <div className="group bg-background rounded-xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-all hover:shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-spots to-night-sky"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  Smart Logistics Platform
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  AI-powered route optimization and real-time tracking for delivery services.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">React Native</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">Go</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">Docker</span>
                </div>
              </div>
            </div>
            <div className="group bg-background rounded-xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-all hover:shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-sun to-accent"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  Education Learning Portal
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Interactive online learning platform with video streaming and progress tracking.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">Angular</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">Django</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">AWS</span>
                </div>
              </div>
            </div>
            <div className="group bg-background rounded-xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-all hover:shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-primary to-sky"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  IoT Monitoring System
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  Industrial IoT platform for real-time sensor data collection and analysis.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">Node.js</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">MQTT</span>
                  <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">InfluxDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press & Activity Section */}
      <section id="press" className="py-24 bg-background scroll-mt-20">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fade-in-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Press & Activities</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Latest news, events, and milestones from PT X
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Press Release 1 */}
            <ScrollAnimation delay={100} animation="fade-in-up">
              <article className="group bg-zinc-50 dark:bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-all hover:shadow-lg h-full flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-accent mb-3">
                    <Newspaper className="w-4 h-4" />
                    <span className="font-semibold">Press Release</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    PT X Secures $5M Series A Funding to Expand AI Solutions
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 flex-1">
                    Leading venture capital firm invests in PT X's innovative approach to enterprise AI solutions, enabling expansion across Southeast Asia.
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <Calendar className="w-4 h-4" />
                      <span>Nov 15, 2024</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </article>
            </ScrollAnimation>

            {/* Company News 2 */}
            <ScrollAnimation delay={200} animation="fade-in-up">
              <article className="group bg-zinc-50 dark:bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-all hover:shadow-lg h-full flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-accent mb-3">
                    <Award className="w-4 h-4" />
                    <span className="font-semibold">Award</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    Named "Best Tech Startup 2024" by Indonesia Tech Awards
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 flex-1">
                    PT X recognized for outstanding innovation and contribution to Indonesia's technology ecosystem and digital transformation.
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <Calendar className="w-4 h-4" />
                      <span>Oct 28, 2024</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </article>
            </ScrollAnimation>

            {/* Event 3 */}
            <ScrollAnimation delay={300} animation="fade-in-up">
              <article className="group bg-zinc-50 dark:bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-all hover:shadow-lg h-full flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-accent mb-3">
                    <Users className="w-4 h-4" />
                    <span className="font-semibold">Event</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    PT X Hosts Annual Developer Conference 2024
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 flex-1">
                    Over 500 developers gathered to explore the latest in cloud computing, AI, and software engineering best practices.
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <Calendar className="w-4 h-4" />
                      <span>Oct 12, 2024</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </article>
            </ScrollAnimation>

            {/* Partnership 4 */}
            <ScrollAnimation delay={100} animation="fade-in-up">
              <article className="group bg-zinc-50 dark:bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-all hover:shadow-lg h-full flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-accent mb-3">
                    <Sparkles className="w-4 h-4" />
                    <span className="font-semibold">Partnership</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    Strategic Partnership with Global Cloud Provider
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 flex-1">
                    PT X partners with leading cloud infrastructure provider to deliver enhanced enterprise solutions to clients worldwide.
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <Calendar className="w-4 h-4" />
                      <span>Sep 20, 2024</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </article>
            </ScrollAnimation>

            {/* Community 5 */}
            <ScrollAnimation delay={200} animation="fade-in-up">
              <article className="group bg-zinc-50 dark:bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-all hover:shadow-lg h-full flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-accent mb-3">
                    <Users className="w-4 h-4" />
                    <span className="font-semibold">Community</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    Launched Free Coding Bootcamp for Underserved Youth
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 flex-1">
                    PT X's social initiative provides free programming education to 100 students from underrepresented communities.
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <Calendar className="w-4 h-4" />
                      <span>Aug 15, 2024</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </article>
            </ScrollAnimation>

            {/* Media Coverage 6 */}
            <ScrollAnimation delay={300} animation="fade-in-up">
              <article className="group bg-zinc-50 dark:bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-accent dark:hover:border-accent transition-all hover:shadow-lg h-full flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-accent mb-3">
                    <Newspaper className="w-4 h-4" />
                    <span className="font-semibold">Media Coverage</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    Featured in TechCrunch: "The Future of Enterprise Software"
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 flex-1">
                    PT X's CEO discusses the company's vision for transforming how businesses leverage technology for growth.
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <Calendar className="w-4 h-4" />
                      <span>Jul 30, 2024</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </article>
            </ScrollAnimation>
          </div>

          {/* View All Press Button */}
          <ScrollAnimation delay={200} animation="fade-in" className="text-center mt-12">
            <Link
              href="/press"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all"
            >
              View All Press Releases
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* Team/About Section */}
      <section id="team" className="py-24 bg-zinc-50 dark:bg-zinc-900/50 scroll-mt-20">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fade-in-up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Team</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
              Meet the talented people behind our success
            </p>
          </ScrollAnimation>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent mb-4"></div>
              <h3 className="font-semibold text-lg mb-1">Alex Thompson</h3>
              <p className="text-sm text-accent mb-2">CEO & Founder</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">Visionary leader with 15+ years in tech</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent to-sun mb-4"></div>
              <h3 className="font-semibold text-lg mb-1">Jessica Lee</h3>
              <p className="text-sm text-accent mb-2">CTO</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">Tech innovator & architecture expert</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-sky to-primary mb-4"></div>
              <h3 className="font-semibold text-lg mb-1">David Park</h3>
              <p className="text-sm text-accent mb-2">Lead Developer</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">Full-stack expert & team mentor</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-spots to-night-sky mb-4"></div>
              <h3 className="font-semibold text-lg mb-1">Maria Santos</h3>
              <p className="text-sm text-accent mb-2">Design Director</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">UX/UI specialist & creative thinker</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-24 bg-primary dark:bg-night-sky scroll-mt-20">
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fade-in-up" className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Let's discuss how we can help transform your ideas into reality.
              Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@ptx.com"
                className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
              <a
                href="tel:+1234567890"
                className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                Schedule a Call
              </a>
            </div>
            <div className="mt-12 pt-12 border-t border-white/20">
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-white/60">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@ptx.com</span>
                </div>
                <div className="hidden md:block">•</div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+1 (234) 567-890</span>
                </div>
                <div className="hidden md:block">•</div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Logo className="w-24 h-auto" />
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} PT X. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors">
                Privacy
              </a>
              <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors">
                Terms
              </a>
              <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
