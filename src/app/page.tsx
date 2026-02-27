"use client";

import { motion } from "framer-motion";

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
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      {/* Navigation */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md"
      >
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold">Gareth Wray</span>
          <div className="flex gap-8">
            <a
              href="#about"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>
      </motion.header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="space-y-6"
          >
            <motion.p
              variants={fadeInUp}
              className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider"
            >
              Digital Marketing & Growth Specialist
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              I help brands grow through{" "}
              <span className="text-zinc-500 dark:text-zinc-400">
                data-driven
              </span>{" "}
              marketing
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400"
            >
              Based in Ipswich, UK. I combine creativity with analytics to
              deliver campaigns that drive real results.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Get in touch
              </a>
              <a
                href="#services"
                className="inline-flex items-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-600"
              >
                View services
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="border-t border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid gap-12 md:grid-cols-2 md:gap-16"
            >
              <div>
                <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4">
                  About me
                </h2>
                <h3 className="text-2xl font-semibold mb-4">
                  Passionate about growth and measurable results
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  I&apos;m Gareth Wray, a Digital Marketing & Growth Specialist
                  based in Ipswich, UK. With expertise spanning paid media, SEO,
                  content strategy, and conversion optimisation, I help
                  businesses of all sizes achieve their growth objectives.
                </p>
              </div>
              <div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Whether you need to scale your customer acquisition, improve
                  your digital presence, or build a data-driven marketing
                  strategy, I bring a blend of creativity and analytical rigour
                  to every project.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="border-t border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4"
            >
              Services
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-2xl font-semibold mb-12"
            >
              What I offer
            </motion.h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Paid Media",
                  description:
                    "PPC, social advertising, and display campaigns optimised for conversion.",
                },
                {
                  title: "SEO & Content",
                  description:
                    "Organic growth through search optimisation and strategic content.",
                },
                {
                  title: "Growth Strategy",
                  description:
                    "Data-driven planning to scale your marketing and reach.",
                },
              ].map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50"
                >
                  <h4 className="font-semibold mb-2">{service.title}</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="border-t border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4">
                Contact
              </h2>
              <h3 className="text-2xl font-semibold mb-4">
                Let&apos;s work together
              </h3>
              <p className="max-w-xl text-zinc-600 dark:text-zinc-400 mb-8">
                Interested in growing your brand? Get in touch to discuss how we
                can achieve your marketing goals.
              </p>
              <a
                href="mailto:hello@garethwray.com"
                className="inline-flex items-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                hello@garethwray.com
              </a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-200 dark:border-zinc-800">
          <div className="mx-auto max-w-5xl px-6 py-8">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              © {new Date().getFullYear()} Gareth Wray. Ipswich, UK.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
