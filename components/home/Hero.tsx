// components/home/Hero.tsx
"use client";

import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, fadeInUp, MotionSection } from "../ui/motion";
import { hero } from "./data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-black/5 bg-gradient-to-b from-white to-platinum/40"
      aria-labelledby="hero-title"
    >
      {/* Ambient background glows + subtle pattern */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-14rem] h-[30rem] w-[52rem] -translate-x-1/2 rounded-full bg-cerulean/10 blur-3xl" />
        <div className="absolute right-[-12rem] bottom-[-12rem] h-[26rem] w-[42rem] rounded-full bg-accent/25 blur-3xl" />
        {/* soft radial tint */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,62,95,0.06),transparent_60%)]" />
        {/* light grid mask for polish */}
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)] bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.035)_0,rgba(0,0,0,0.035)_1px,transparent_1px,transparent_12px)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection amount={0.3} className="py-20 sm:py-24">
          {/* Eyebrow */}
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/70 shadow-sm backdrop-blur"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-cerulean" aria-hidden />
            {hero.pill}
          </motion.span>

          {/* Title */}
          <motion.h1
            id="hero-title"
            variants={fadeInUp}
            className="mt-5 max-w-4xl font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
          >
            {hero.titleHtml}
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="mt-5 max-w-2xl text-base leading-relaxed text-black/70 sm:text-lg"
          >
            {hero.desc}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap items-center gap-3 justify-center sm:justify-start"
          >
            {/* Primary: premium gradient, centered contents, strong focus */}
            <a
              href={hero.ctas[0].href}
              className="group relative inline-flex min-w-[180px] items-center justify-center gap-2
                         rounded-xl px-6 py-3 text-sm font-semibold text-white
                         bg-[linear-gradient(90deg,#0A6F95_0%,#007EA7_45%,#003459_100%)]
                         shadow-[0_8px_24px_-12px_rgba(0,126,167,0.6)]
                         transition-colors
                         hover:bg-[linear-gradient(90deg,#0C88B4_0%,#009BC4_45%,#074A77_100%)]
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                         focus-visible:ring-accent focus-visible:ring-offset-white"
            >
              <Sparkles className="h-4 w-4" aria-hidden />
              {hero.ctas[0].label}
            </a>

            {/* Secondary: refined outline */}
            <a
              href={hero.ctas[1].href}
              className="inline-flex min-w-[180px] items-center justify-center gap-2
                         rounded-xl border border-black/10 bg-white px-6 py-3
                         text-sm font-medium text-black transition-colors
                         hover:bg-black/5 focus-visible:outline-none
                         focus-visible:ring-2 focus-visible:ring-offset-2
                         focus-visible:ring-prussian/30"
            >
              {hero.ctas[1].label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </motion.div>

          {/* Trust row */}
          <motion.dl
            variants={fadeInUp}
            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {hero.trust.map(([k, v]) => (
              <div
                key={k}
                className="rounded-2xl border border-black/10 bg-white/90 p-4 shadow-sm"
              >
                <div className="flex items-center gap-2 text-prussian">
                  <CheckCircle2 className="h-4 w-4" aria-hidden />
                  <dt className="text-xs uppercase tracking-wide text-black/60">{v}</dt>
                </div>
                <dd className="mt-1 text-base font-semibold">{k}</dd>
              </div>
            ))}
          </motion.dl>
        </MotionSection>
      </div>
    </section>
  );
}