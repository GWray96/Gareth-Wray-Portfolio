"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-zinc-900">
      {/* Full-page background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-amber-50/60 via-white to-emerald-50/40" />
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-72 h-72 rounded-full bg-amber-100/50 blur-3xl" />
        <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-emerald-50/30 blur-3xl" />
      </div>
      {/* Navigation */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/80 bg-white/95 shadow-sm shadow-zinc-200/50 backdrop-blur-md"
      >
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="group flex items-center gap-2 text-base font-semibold text-zinc-900 transition-colors hover:text-emerald-700 sm:text-lg" onClick={() => setNavOpen(false)}>
            <span className="h-2 w-2 rounded-full bg-emerald-500 transition-colors group-hover:bg-emerald-600" />
            Gareth Wray
          </a>
          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex md:gap-2">
            <a href="#about" className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-emerald-50 hover:text-emerald-800">
              About
            </a>
            <a href="#services" className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-emerald-50 hover:text-emerald-800">
              Services
            </a>
            <a href="#portfolio" className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-emerald-50 hover:text-emerald-800">
              Work
            </a>
            <a href="#contact" className="ml-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-emerald-700 hover:shadow-md hover:shadow-emerald-200/50 sm:ml-4">
              Contact
            </a>
          </div>
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setNavOpen(!navOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-700 hover:bg-zinc-100 md:hidden"
            aria-label={navOpen ? "Close menu" : "Open menu"}
            aria-expanded={navOpen}
          >
            {navOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
            )}
          </button>
        </nav>
        {/* Mobile nav dropdown */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-zinc-200/80 bg-white/98 backdrop-blur-md md:hidden"
            >
              <div className="flex flex-col px-4 py-4">
                <a href="#about" className="rounded-lg px-4 py-3 text-base font-medium text-zinc-700 hover:bg-emerald-50 hover:text-emerald-800" onClick={() => setNavOpen(false)}>About</a>
                <a href="#services" className="rounded-lg px-4 py-3 text-base font-medium text-zinc-700 hover:bg-emerald-50 hover:text-emerald-800" onClick={() => setNavOpen(false)}>Services</a>
                <a href="#portfolio" className="rounded-lg px-4 py-3 text-base font-medium text-zinc-700 hover:bg-emerald-50 hover:text-emerald-800" onClick={() => setNavOpen(false)}>Work</a>
                <a href="#contact" className="mt-2 rounded-full bg-emerald-600 px-4 py-3 text-center text-base font-semibold text-white hover:bg-emerald-700" onClick={() => setNavOpen(false)}>Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="relative z-10 pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="relative z-10 mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12 md:py-20 text-center min-h-[calc(100vh-4.5rem)] sm:min-h-[calc(100vh-5rem)] flex flex-col justify-center">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="relative flex flex-col items-center space-y-5"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex max-w-[min(100%,20rem)] sm:max-w-none flex-wrap items-center justify-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3 py-1.5 sm:px-4"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
              <span className="text-sm font-medium text-emerald-800 sm:text-base">
                Gareth Wray — Digital Marketing & Growth Specialist
              </span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Stop wasting ad spend.
              <br />
              Start filling your funnel with{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-emerald-700">qualified leads</span>
                <span className="absolute bottom-1 left-0 right-0 z-0 h-2 bg-emerald-200/80" />
              </span>{" "}
              who convert.
            </motion.h1>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-700 sm:text-lg md:text-xl">
              I build funnels, run paid ads, and create marketing systems
              <br className="hidden sm:block" />
              that generate measurable ROI for small businesses.
              <br className="hidden sm:block" />
              Based in Ipswich, UK.
            </p>
            <div className="pt-2">
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-200/50 transition-all hover:bg-emerald-700 hover:shadow-emerald-300/50 hover:-translate-y-0.5"
              >
                See My Work
                <span className="transition-transform group-hover:translate-y-0.5">↓</span>
              </a>
            </div>
            <div className="relative z-20 flex flex-col items-center gap-4 pt-8">
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider">
                Worked with
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
                {/* Rich + Niche: white text on black - dark background makes white text pop */}
                <div className="flex h-12 w-28 items-center justify-center rounded-lg border border-zinc-300 bg-zinc-900 px-3 py-2 shadow-md sm:h-14 sm:w-36 sm:px-4 sm:py-3">
                  <Image
                    src="/rich-and-niche-logo.png"
                    alt="Rich + Niche"
                    width={128}
                    height={48}
                    className="h-7 w-auto max-w-full object-contain sm:h-9"
                    unoptimized
                  />
                </div>
                {/* Aspire 1: black/dark text - light background maximizes contrast */}
                <div className="flex h-12 w-28 items-center justify-center rounded-lg border border-zinc-200 bg-white px-3 py-2 shadow-md sm:h-14 sm:w-36 sm:px-4 sm:py-3">
                  <Image
                    src="/aspire-1-coaching-logo.png"
                    alt="Aspire 1 Coaching"
                    width={128}
                    height={48}
                    className="h-7 w-auto max-w-full object-contain sm:h-9"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid gap-12 items-center md:grid-cols-2 md:gap-16"
            >
              {/* Left column - Content */}
              <div>
                <h2 className="text-sm font-medium text-zinc-700 uppercase tracking-wider mb-4">
                  Why work with me
                </h2>
                <h3 className="text-xl font-semibold text-zinc-900 mb-6 sm:text-2xl">
                  There&apos;s no shortage of marketers out there. So here&apos;s
                  the honest answer to why it should be me.
                </h3>
                <p className="text-zinc-800 leading-relaxed mb-6">
                  Most agencies and freelancers will build you something that
                  looks great in a deck. I build things that convert, because
                  before I ever touched a marketing tool, I spent five years in
                  high-performance sales understanding exactly what makes people
                  say yes. That insight doesn&apos;t come from a course. It
                  comes from thousands of real conversations, objections
                  handled, and deals closed.
                </p>
                <p className="text-zinc-800 leading-relaxed mb-6">
                  I&apos;ve since trained in full-funnel marketing through the
                  Rich and Niche Academy, and I apply that sales intelligence to
                  every campaign I run. The results speak for themselves: a 77%
                  CTR improvement and ROAS growth from 2.76x to 6.51x on a live
                  Meta campaign aren&apos;t numbers from a case study template.
                  They&apos;re from real work, on a real budget.
                </p>
                <AnimatePresence initial={false}>
                  {aboutExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-zinc-800 leading-relaxed mb-6">
                        I also handle the full picture. Strategy, execution,
                        copywriting, ads, funnels, CRM automation across Webflow,
                        Go High Level, Meta Ads, and Canva. You won&apos;t be
                        passed between a strategist, a designer, and a
                        copywriter. You get one person who owns the outcome.
                      </p>
                      <p className="text-zinc-800 leading-relaxed mb-6">
                        And unlike most agencies, there are no lock-in
                        contracts. You stay because it&apos;s working, not
                        because you&apos;re stuck.
                      </p>
                      <p className="text-zinc-800 leading-relaxed mb-6">
                        If that sounds like what you&apos;ve been looking for,
                        let&apos;s have a conversation.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setAboutExpanded(!aboutExpanded)}
                    className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    {aboutExpanded ? "Show less" : "Read more"}
                  </button>
                  {!aboutExpanded && (
                    <a
                      href="#contact"
                      className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-200/50 transition-all hover:bg-emerald-700 hover:shadow-emerald-300/50"
                    >
                      Let&apos;s have a conversation
                    </a>
                  )}
                </div>
                {aboutExpanded && (
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-200/50 transition-all hover:bg-emerald-700 hover:shadow-emerald-300/50"
                  >
                    Let&apos;s have a conversation
                  </a>
                )}
              </div>

              {/* Right column - Profile picture with floating text boxes */}
              <div className="relative flex justify-center md:justify-end">
                <div className="relative aspect-square w-full max-w-sm">
                  {/* Profile image */}
                  <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src="/profile.png"
                      alt="Gareth Wray"
                      width={400}
                      height={400}
                      className="aspect-square w-full object-cover"
                      priority
                    />
                  </div>
                  {/* Floating text boxes - hidden on small screens to avoid overflow */}
                  <div className="absolute left-0 top-1/2 z-20 hidden w-48 -translate-x-[55%] -translate-y-1/2 rounded-lg border border-emerald-700/30 bg-emerald-800/95 px-4 py-3 shadow-lg md:block md:w-52">
                    <p className="font-bold text-white">Growth Focused</p>
                    <p className="mt-0.5 text-xs text-white/90">Every asset designed to bring in leads</p>
                  </div>
                  <div className="absolute right-0 top-1/2 z-20 hidden w-48 translate-x-1/2 -translate-y-1/2 rounded-lg border border-emerald-700/30 bg-emerald-800/95 px-4 py-3 shadow-lg md:block md:w-52">
                    <p className="font-bold text-white">Sales DNA</p>
                    <p className="mt-0.5 text-xs text-white/90">Marketing built around what actually converts</p>
                  </div>
                  <div className="absolute bottom-0 left-1/2 z-20 hidden w-48 -translate-x-1/2 translate-y-1/2 rounded-lg border border-emerald-700/30 bg-emerald-800/95 px-4 py-3 shadow-lg md:block md:w-56">
                    <p className="font-bold text-white">Purpose Built</p>
                    <p className="mt-0.5 text-xs text-white/90">Every asset created with a goal in mind</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Text Testimonial Section */}
        <section id="text-testimonial" className="bg-emerald-100/90 py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-lg sm:p-8 md:p-10"
            >
              <div className="mb-6 flex justify-center gap-1" aria-hidden>
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-amber-400">★</span>
                ))}
              </div>
              <blockquote className="mb-8 text-center text-lg font-bold leading-relaxed text-zinc-900 sm:text-xl">
                &ldquo;Outstanding service from Gareth! He took care of everything, from setting up automations to creating lead magnets. Excited for what we can achieve together 💪 Highly recommend!&rdquo;
              </blockquote>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:flex-nowrap sm:gap-8">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/mazin-profile.png"
                    alt="Mazin Alneami"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-bold text-zinc-900">Mazin Alneami</p>
                  <p className="text-sm text-zinc-500">Head Coach / Founder of Aspire 1 Coaching</p>
                </div>
                <div className="flex h-10 w-28 items-center justify-center">
                  <Image
                    src="/aspire-1-coaching-logo.png"
                    alt="Aspire 1 Coaching"
                    width={112}
                    height={40}
                    className="h-8 w-auto object-contain"
                    unoptimized
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-zinc-700 uppercase tracking-wider mb-4"
            >
              What I do
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-lg text-zinc-800 mb-12 max-w-3xl"
            >
              I help businesses grow online by combining strategic thinking with
              hands-on execution. From driving traffic to converting it, I cover
              the full funnel, so nothing gets lost between strategy and results.
            </motion.p>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  title: "Meta Ads / Paid Advertising",
                  tagline: "Turn ad spend into real returns",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-emerald-600">
                      <path d="M3 3v18h18" />
                      <path d="M18 9l-5 5-4-4-3 3" />
                    </svg>
                  ),
                  description:
                    "I build and manage Meta ad campaigns that are engineered to convert, not just get clicks. From audience research and creative strategy to ongoing optimisation, every decision is driven by data and real-world sales psychology.",
                },
                {
                  title: "Funnel Building",
                  tagline: "Guide your audience from stranger to paying customer",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-emerald-600">
                      <path d="M2 2h20l-4 8v10H6V10L2 2z" />
                    </svg>
                  ),
                  description:
                    "I design and build high-converting sales funnels that move people through each stage of the buying journey with purpose. No dead ends, no drop-off points, just a clear path to conversion.",
                },
                {
                  title: "Webflow Web Design",
                  tagline: "Websites that work as hard as you do",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-emerald-600">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  ),
                  description:
                    "I build fast, professional websites in Webflow that are designed around your business goals, not just aesthetics. Clean, conversion-focused, and built to grow with you.",
                },
                {
                  title: "CRM & Automation",
                  tagline: "Stop letting leads fall through the cracks",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-emerald-600">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                  ),
                  description:
                    "I set up and optimise CRM pipelines and automation workflows that keep your leads warm, your follow-ups consistent, and your time protected. Built on Go High Level and tailored to how you actually work.",
                },
                {
                  title: "Conversion Copywriting",
                  tagline: "Words that make people act",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-emerald-600">
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  ),
                  description:
                    "Every word on your website, ad, or landing page is either earning or losing you money. I write copy rooted in buyer psychology and sales experience. The kind that speaks directly to what your audience actually cares about.",
                },
                {
                  title: "SEO",
                  tagline: "Get found by the right people at the right time",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-emerald-600">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  ),
                  description:
                    "I implement SEO strategies that build sustainable, long-term visibility in search. From technical foundations and on-page optimisation to content that ranks and converts.",
                },
              ].map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * Math.min(i, 4) }}
                  className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    {service.icon}
                  </div>
                  <h4 className="font-semibold text-zinc-900 mb-1">{service.title}</h4>
                  <p className="text-sm font-medium text-emerald-700 mb-3">{service.tagline}</p>
                  <p className="text-sm text-zinc-800">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Text Testimonial - Harry Kirk */}
        <section id="testimonial-harry" className="bg-emerald-100/90 py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-lg sm:p-8 md:p-10"
            >
              <div className="mb-6 flex justify-center gap-1" aria-hidden>
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-amber-400">★</span>
                ))}
              </div>
              <blockquote className="mb-8 text-center text-lg font-bold leading-relaxed text-zinc-900 sm:text-xl">
                &ldquo;Had an extremely helpful call with Gareth, who was extremely knowledgeable, clear and concise. Giving me a perfect structure upon how to put together my marketing for my business, giving me the structure I needed.&rdquo;
              </blockquote>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:flex-nowrap sm:gap-8">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/harry-kirk-profile.png"
                    alt="Harry Kirk"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-bold text-zinc-900">Harry Kirk</p>
                  <p className="text-sm text-zinc-500">Head Coach / Founder of Harry Kirk Online Coach</p>
                </div>
                <p className="text-sm font-semibold text-zinc-600">Harry Kirk Online Coach</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-zinc-700 uppercase tracking-wider mb-4"
            >
              My work
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-xl font-semibold text-zinc-900 mb-8 sm:text-2xl sm:mb-12"
            >
              Recent projects
            </motion.h3>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {[
                {
                  client: "Rich and Niche Academy",
                  title: "Meta Ad Creative Overhaul",
                  description:
                    "Rich and Niche Academy's paid social campaign was generating clicks, but the creative wasn't converting at the level the budget deserved. I redesigned the ad creatives from the ground up: new visuals, new copy, built around the audience rather than the brand. The results spoke for themselves: click-through rate jumped from 4.94% to 8.74%, ROAS more than doubled from 2.76x to 6.51x, and total clicks grew by 223% (from 1,257 to 4,063) while cost per click dropped from $0.04 to $0.03.",
                  tagline: "Better creative. Same budget. Dramatically better returns.",
                  tags: ["Meta Ads", "Ad Creative", "Conversion Copy", "Conversion Optimisation"],
                  link: "#",
                  image: "/rich-niche-case-study.png",
                },
                {
                  client: "Aspire 1 Coaching",
                  title: "Lead Generation System Build",
                  description:
                    "Aspire 1 Coaching had a great service but no digital system to capture or nurture leads. Everything came through word of mouth. I built their lead generation infrastructure from scratch: a conversion-focused landing page, a professionally designed ebook lead magnet, a CRM pipeline in GoHighLevel, and an automated email sequence to deliver the ebook and follow up with new subscribers. They went from zero digital lead capture to a fully functioning funnel that works while they sleep.",
                  tagline: "From referral-only to a proper digital sales system.",
                  tags: ["Landing Page", "Lead Magnet", "GoHighLevel", "Email Automation"],
                  link: "#",
                  image: "/aspire-1-case-study.png",
                },
              ].map((project, i) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-video overflow-hidden bg-zinc-100">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.client} - ${project.title}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-zinc-100 to-zinc-200">
                        <span className="text-sm font-medium text-zinc-400">
                          Project image
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="mb-1 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                      {project.client}
                    </p>
                    <h4 className="mb-3 text-lg font-semibold text-zinc-900">
                      {project.title}
                    </h4>
                    <p className="mb-3 text-sm text-zinc-800 leading-relaxed">
                      {project.description}
                    </p>
                    {project.tagline && (
                      <p className="mb-4 text-sm font-medium italic text-emerald-700">
                        {project.tagline}
                      </p>
                    )}
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-emerald-200/50 transition-all hover:bg-emerald-700 hover:shadow-emerald-300/50"
                    >
                      Let&apos;s do something like this
                      <span className="transition-transform group-hover:translate-x-0.5">→</span>
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-emerald-100/90">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
            <div className="grid gap-12 items-center lg:grid-cols-2 lg:gap-16">
              {/* Left column - Text content */}
              <div>
                <h2 className="mb-8 border-b border-zinc-300 pb-2 text-sm font-medium text-zinc-500 uppercase tracking-wider">
                  Customer stories
                </h2>
                <span className="text-5xl font-serif text-emerald-600 leading-none" aria-hidden>&ldquo;</span>
                <blockquote className="mt-2 text-xl font-semibold text-zinc-900 leading-snug sm:text-2xl md:text-3xl">
                  Definitely give Gareth a try if you&apos;re looking for a full stack marketer.
                </blockquote>
                <div className="mt-4 flex gap-1" aria-hidden>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-amber-500">★</span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src="/rich-ux-profile.png"
                      alt="Rich UX"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <p className="font-medium text-zinc-900">Rich UX</p>
                    <p className="text-sm text-zinc-500">Rich and Niche Academy</p>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-4 rounded-xl border border-emerald-700/30 bg-emerald-800/90 p-4 shadow-sm sm:grid-cols-3 sm:gap-4 sm:p-6">
                  <div className="py-4 text-center sm:py-0">
                    <p className="text-xl font-bold text-white">77%</p>
                    <p className="text-sm text-white/90">CTR improvement</p>
                  </div>
                  <div className="border-x-0 border-t border-b border-white/40 py-4 text-center sm:border-x sm:border-t-0 sm:border-b-0 sm:py-0">
                    <p className="text-xl font-bold text-white">2.4x</p>
                    <p className="text-sm text-white/90">ROAS growth</p>
                  </div>
                  <div className="py-4 text-center sm:py-0">
                    <p className="text-xl font-bold text-white">223%</p>
                    <p className="text-sm text-white/90">More clicks</p>
                  </div>
                </div>
              </div>

              {/* Right column - Video */}
              <div className="flex flex-col items-center">
                <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-200 bg-black shadow-lg">
                  <div className="relative aspect-9/16">
                    <iframe
                      src="https://www.youtube.com/embed/TrQqcXaLJEE?rel=0"
                      title="Video testimonial from Rich UX, Rich and Niche Academy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                </div>
                <p className="mt-4 w-full max-w-sm text-center text-sm text-zinc-500">
                  Watch Rich share his experience working with me
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-emerald-200/80 bg-white p-6 text-center shadow-xl sm:rounded-3xl sm:p-10 md:p-14"
            >
              <h2 className="text-sm font-medium text-emerald-700 uppercase tracking-wider mb-3">
                Ready to grow?
              </h2>
              <h3 className="text-xl font-bold text-zinc-900 sm:text-2xl md:text-3xl mb-4">
                Book a free 30-minute strategy call
              </h3>
              <p className="mx-auto max-w-2xl text-zinc-600 mb-8 text-base leading-relaxed sm:text-lg">
                No pitch, no pressure. We&apos;ll look at your current setup,
                identify the biggest opportunity, and map out a clear path
                forward. If it&apos;s a fit, we&apos;ll talk next steps.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
                <a
                  href="mailto:hello@garethrswray.com?subject=Strategy%20Call%20Request"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-200/50 transition-all hover:bg-emerald-700 hover:shadow-emerald-300/50 hover:-translate-y-0.5 sm:w-auto"
                >
                  Get in touch
                  <span>→</span>
                </a>
                <a
                  href="mailto:hello@garethrswray.com?subject=Strategy%20Call%20Request"
                  className="text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  hello@garethrswray.com
                </a>
              </div>
              <p className="mt-6 text-sm text-zinc-500">
                Based in Ipswich, UK • Typically responds within 24 hours
              </p>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
            <p className="text-sm text-zinc-700">
              © {new Date().getFullYear()} Gareth Wray. Ipswich, UK.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
