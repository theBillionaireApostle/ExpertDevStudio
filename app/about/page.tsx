// app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { MotionSection, fadeInUp } from "../../components/ui/motion";
import {
  Sparkles,
  ShieldCheck,
  Rocket,
  HeartHandshake,
  Timer,
  Wrench,
  ArrowRight,
  Quote,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden border-b border-black/5 bg-gradient-to-b from-white to-platinum/40"
        aria-labelledby="about-hero-title"
      >
        {/* ambient glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-14rem] h-[30rem] w-[52rem] -translate-x-1/2 rounded-full bg-cerulean/10 blur-3xl" />
          <div className="absolute right-[-12rem] bottom-[-12rem] h-[26rem] w-[42rem] rounded-full bg-accent/25 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection amount={0.25} className="py-16 sm:py-20 text-center">
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/70 shadow-sm backdrop-blur mx-auto"
            >
              <Sparkles className="h-3.5 w-3.5 text-cerulean" />
              About Expert Dev Studio
            </motion.span>

            <motion.h1
              id="about-hero-title"
              variants={fadeInUp}
              className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight sm:text-5xl mx-auto text-center"
            >
              Built for clarity, engineered for speed.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-5 max-w-3xl text-base leading-relaxed text-black/70 sm:text-lg mx-auto text-center"
            >
              We design and ship conversion‑focused websites and web apps that look luxury and load fast. Our
              process is calm, opinionated where it matters, and relentlessly practical—so your brand wins on
              every device.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="/work"
                className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black hover:bg-black/5"
              >
                See recent work
              </a>
              <a
                href="/contact"
                aria-label="Start a project"
                className="group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] ring-2 ring-black/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-cerulean/50"
                style={{ background: "linear-gradient(135deg,#FCA311 0%,#FFD56A 100%)" }}
              >
                Start a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </MotionSection>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="principles-title">
        <MotionSection amount={0.25}>
          <motion.h2 variants={fadeInUp} id="principles-title" className="font-display text-2xl font-semibold">
            Principles we won’t compromise
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-2 max-w-2xl text-sm text-black/70">
            These shape every decision—from scope and design to implementation and hand‑off.
          </motion.p>

          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Clarity first",
                desc: "Messaging, IA, and UX patterns that reduce friction and boost conversion.",
              },
              {
                icon: Rocket,
                title: "Performance by default",
                desc: "Lean pages, disciplined assets, and fast Time‑to‑Value on mobile.",
              },
              {
                icon: Wrench,
                title: "Engineering craft",
                desc: "Predictable codebases and clean hand‑offs your team can build on.",
              },
              {
                icon: HeartHandshake,
                title: "Partner mindset",
                desc: "Transparent scope, proactive comms, and disciplined sprints.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.article
                key={title}
                variants={fadeInUp}
                whileHover={{ y: -3, transition: { duration: 0.18 } }}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-prussian/10">
                    <Icon className="h-4 w-4 text-prussian" />
                  </span>
                  <h3 className="text-base font-semibold">{title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-black/70">{desc}</p>
              </motion.article>
            ))}
          </div>

          {/* small trust row */}
          <motion.dl variants={fadeInUp} className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["< 1.5s", "Mobile LCP"],
              ["99.9%", "Uptime across sites"],
              ["A/B ready", "Analytics & events"],
              ["Global", "Clients"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-2xl border border-black/10 bg-white p-4">
                <dt className="text-xs uppercase tracking-wide text-black/50">{v}</dt>
                <dd className="mt-1 text-base font-medium">{k}</dd>
              </div>
            ))}
          </motion.dl>
        </MotionSection>
      </section>

      {/* PROCESS */}
      <section className="border-y border-black/5 bg-white/60" aria-labelledby="process-title">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <MotionSection amount={0.2}>
            <motion.h2 variants={fadeInUp} id="process-title" className="font-display text-2xl font-semibold">
              A calm, fast process
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 max-w-2xl text-sm text-black/70">
              Scope with intent. Ship value weekly. No drama.
            </motion.p>

            <ol className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {[
                ["01", "Discovery", "Goals, audience, constraints. Rapid alignment."],
                ["02", "Messaging", "Sharp value prop, IA, and wire flows."],
                ["03", "Design", "Elegant UI built on reusable patterns."],
                ["04", "Build", "Clean components, accessible and fast."],
                ["05", "Launch", "Analytics, QA, and smooth hand‑off."],
              ].map(([num, title, desc]) => (
                <motion.li
                  key={num}
                  variants={fadeInUp}
                  className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
                >
                  <div className="text-xs font-semibold tracking-wider text-black/50">{num}</div>
                  <div className="mt-1 text-base font-semibold">{title}</div>
                  <p className="mt-2 text-sm text-black/70">{desc}</p>
                </motion.li>
              ))}
            </ol>
          </MotionSection>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="founder-title">
        <MotionSection amount={0.25}>
          <div className="mx-auto max-w-4xl">
            <motion.h2 variants={fadeInUp} id="founder-title" className="font-display text-2xl font-semibold">
              From the founder’s desk
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="mt-6 rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-black/10">
                  {/* Prefer a local /public/rufus.jpg if you add one; fallback to generated avatar */}
                  <img
                    src="/img/rufusbright.jpeg"
                    alt="Rufus Bright"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width={56}
                    height={56}
                  />
                </div>

                <div className="min-w-0">
                  <div className="text-sm font-semibold">Rufus Bright</div>
                  <div className="text-xs text-black/60">Founder, Expert Dev Studio</div>
                </div>

                <ShieldCheck className="ml-auto h-5 w-5 text-prussian/70" aria-hidden />
              </div>

              <blockquote className="mt-4 text-[15px] leading-relaxed text-black/80">
                <p>
                  “We built this studio for founders who value momentum. Our promise is simple: elegant interfaces,
                  ruthless performance, and honest scope. We’ll help you say less, say it better, and ship faster.”
                </p>
                <p className="mt-3">
                  If that resonates, I’d love to understand your goals and sketch the shortest path to launch.”
                </p>
              </blockquote>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="/contact"
                  aria-label="Talk to us"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] ring-2 ring-black/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-cerulean/50"
                  style={{ background: "linear-gradient(135deg,#FCA311 0%,#FFD56A 100%)" }}
                >
                  Talk to us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <div className="text-xs text-black/60">Typically replies within 1 business day.</div>
              </div>
            </motion.div>
          </div>
        </MotionSection>
      </section>

      {/* CTA */}
      <section className="border-t border-black/5 bg-white/70" aria-labelledby="about-cta-title">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <MotionSection amount={0.25} className="text-center">
            <motion.h2 variants={fadeInUp} id="about-cta-title" className="font-display text-2xl font-semibold text-center">
              Ready to move fast—without the mess?
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-2 max-w-2xl text-sm text-black/70 mx-auto text-center">
              Book a 15‑minute discovery call. If there’s a fit, your first sprint starts this week.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-4 flex justify-center">
              <a
                href="/contact"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] ring-2 ring-black/5 hover:opacity-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-cerulean/50"
                style={{ background: "linear-gradient(135deg,#FCA311 0%,#FFD56A 100%)" }}
              >
                Get your website built
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </MotionSection>
        </div>
      </section>
    </>
  );
}
