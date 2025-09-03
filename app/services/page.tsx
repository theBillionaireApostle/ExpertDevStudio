"use client";

import { motion } from "framer-motion";
import { MotionSection, fadeInUp } from "../../components/ui/motion";
import {
  Layers3,
  CheckCircle2,
  ShoppingCart,
  LayoutDashboard,
  GaugeCircle,
  Wrench,
  Rocket,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  Search,
  MoveRight,
} from "lucide-react";

// --- Currency/pricing helpers ---
type Currency = "INR" | "USD" | "EUR" | "GBP" | "AED" | "AUD" | "CAD" | "SGD";
type PkgCode = "L0" | "L1" | "L2" | "L3";

function detectCurrency(): Currency {
  try {
    // Prefer time zone (more reliable on iOS Safari) then language region
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const lang = (typeof navigator !== "undefined" && navigator.language) ? navigator.language : "en-US";
    const region = (lang.split("-")[1] || "").toUpperCase();

    const tzLower = tz.toLowerCase();
    if (tzLower.includes("kolkata") || tzLower.includes("calcutta")) return "INR";
    if (tzLower.includes("dubai") || tzLower.includes("muscat") || tzLower.includes("abu_dhabi")) return "AED";
    if (tzLower.includes("london")) return "GBP";
    if (tzLower.includes("singapore")) return "SGD";
    if (tzLower.includes("sydney") || tzLower.includes("melbourne")) return "AUD";
    if (tzLower.includes("toronto") || tzLower.includes("vancouver")) return "CAD";
    if (tzLower.includes("berlin") || tzLower.includes("paris") || tzLower.includes("madrid") || tzLower.includes("rome")) return "EUR";

    switch (region) {
      case "IN": return "INR";
      case "AE": return "AED";
      case "GB": return "GBP";
      case "SG": return "SGD";
      case "AU": return "AUD";
      case "CA": return "CAD";
      case "IE": case "DE": case "FR": case "ES": case "IT": case "NL": case "PT": case "AT": case "BE": case "FI": case "GR": case "SK": case "SI": case "LV": case "LT": case "EE": case "CY": case "MT":
        return "EUR";
      default: return "USD";
    }
  } catch {
    return "USD";
  }
}

// Nicely rounded, pre-localized display prices per currency
const PRICE_TABLE: Record<PkgCode, Record<Currency, string>> = {
  L0: {
    INR: "₹29,000",
    USD: "$349",
    EUR: "€329",
    GBP: "£289",
    AED: "AED 1,299",
    AUD: "A$529",
    CAD: "CA$479",
    SGD: "S$479",
  },
  L1: {
    INR: "₹79,000",
    USD: "$952",
    EUR: "€899",
    GBP: "£799",
    AED: "AED 3,499",
    AUD: "A$1,399",
    CAD: "CA$1,299",
    SGD: "S$1,299",
  },
  L2: {
    INR: "from ₹1,50,000",
    USD: "from $1,807",
    EUR: "from €1,699",
    GBP: "from £1,499",
    AED: "from AED 6,650",
    AUD: "from A$2,699",
    CAD: "from CA$2,499",
    SGD: "from S$2,499",
  },
  L3: {
    INR: "from ₹3,50,000",
    USD: "from $4,200",
    EUR: "from €3,900",
    GBP: "from £3,400",
    AED: "from AED 15,500",
    AUD: "from A$6,400",
    CAD: "from CA$5,900",
    SGD: "from S$5,900",
  },
};

function priceFor(code: PkgCode): string {
  const cur = detectCurrency();
  return PRICE_TABLE[code][cur] ?? PRICE_TABLE[code].USD;
}

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden border-b border-black/5 bg-gradient-to-b from-white to-platinum/40"
        aria-labelledby="services-hero-title"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-14rem] h-[30rem] w-[52rem] -translate-x-1/2 rounded-full bg-cerulean/10 blur-3xl" />
          <div className="absolute right-[-12rem] bottom-[-12rem] h-[26rem] w-[42rem] rounded-full bg-accent/25 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection amount={0.25} className="py-16 text-center sm:py-20">
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/70 shadow-sm backdrop-blur"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-prussian" />
              Opinionated where it matters. Practical everywhere else.
            </motion.span>

            <motion.h1
              id="services-hero-title"
              variants={fadeInUp}
              className="mx-auto mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              Services crafted to convert—<span className="text-cerulean">engineered</span> for speed.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-black/70 sm:text-lg"
            >
              We design and build premium websites and web apps that look luxury and load fast.
              Clear messaging, disciplined execution, and calm delivery—so you can ship with confidence.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/#packages"
                className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black shadow-sm hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cerulean/40"
              >
                See transparent packages
              </a>
              <a
                href="/contact"
                aria-label="Get your website built"
                className="group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] ring-2 ring-black/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-cerulean/50"
                style={{ background: "linear-gradient(135deg,#FCA311 0%,#FFD56A 100%)" }}
              >
                Get your website built
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </MotionSection>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="what-we-do-title">
        <MotionSection amount={0.25}>
          <motion.h2
            variants={fadeInUp}
            id="what-we-do-title"
            className="font-display text-center text-2xl font-semibold tracking-tight sm:text-left sm:text-3xl"
          >
            What we do best
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-2 max-w-2xl text-center text-sm text-black/70 sm:mx-0 sm:text-left"
          >
            Focused, high‑impact work. No bloat, no fluff—just the parts that move the needle.
          </motion.p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                code: "L0" as PkgCode,
                t: "L0 · Landing Page Sprint",
                d: ["High‑converting hero, proof, CTA", "Analytics + events wired", "Ships in 7 days"],
                Icon: Layers3,
              },
              {
                code: "L1" as PkgCode,
                t: "L1 · Authority Site",
                d: ["3–5 pages + blog", "SEO basics + schema", "Lead magnet + opt‑in"],
                Icon: CheckCircle2,
              },
              {
                code: "L2" as PkgCode,
                t: "L2 · Storefront",
                d: ["Catalog & product pages", "Razorpay checkout", "Perf‑tuned for mobile"],
                Icon: ShoppingCart,
              },
              {
                code: "L3" as PkgCode,
                t: "L3 · Custom Build",
                d: ["Bespoke scope", "Integrations & auth", "Roadmap partnership"],
                Icon: Rocket,
              },
              {
                t: "Dashboards & Admins",
                d: ["Role‑based UIs", "Clean data flows", "Accessible components"],
                Icon: LayoutDashboard,
              },
              {
                t: "Performance Tuning",
                d: ["Core Web Vitals wins", "Asset budgets & caching", "Edge/CDN strategy"],
                Icon: GaugeCircle,
              },
              {
                t: "Maintenance & Growth",
                d: ["Retainers & SLOs", "A/B, analytics, SEO", "Quarterly roadmap"],
                Icon: Wrench,
              },
              {
                t: "Content & SEO",
                d: ["Keyword strategy & IA", "Editorial system & CMS", "On‑page SEO & schema"],
                Icon: Search,
              },
              {
                t: "Migration & Replatforming",
                d: ["Tech audit & plan", "Zero‑downtime migration", "Perf & SEO safeguards"],
                Icon: MoveRight,
              },
            ].map(({ t, d, Icon, code }) => (
              <motion.article
                key={t}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.18 } }}
                className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-prussian/10">
                    <Icon className="h-5 w-5 text-prussian" aria-hidden />
                  </span>
                  <h3 className="text-base font-semibold tracking-tight">{t}</h3>
                </div>
                {code && (
                  <div className="mt-1 text-sm font-semibold text-prussian">{priceFor(code)}</div>
                )}
                <ul className="mt-3 space-y-2 text-sm text-black/70">
                  {d.map((x) => (
                    <li key={x} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-cerulean" aria-hidden />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </MotionSection>
      </section>

      {/* PROCESS */}
      <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="process-title">
        <MotionSection amount={0.25}>
          <motion.h2
            variants={fadeInUp}
            id="process-title"
            className="font-display text-center text-2xl font-semibold tracking-tight sm:text-left sm:text-3xl"
          >
            A calm, fast process
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-2 max-w-2xl text-center text-sm text-black/70 sm:mx-0 sm:text-left"
          >
            Scope with intent. Ship value weekly. No chaos.
          </motion.p>

          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {[
              ["01", "Discovery", "Goals, audience, constraints. Rapid alignment."],
              ["02", "Messaging", "Sharp value prop, IA, and wire flows."],
              ["03", "Design", "Elegant UI on reusable patterns."],
              ["04", "Build", "Clean components. Accessible and fast."],
              ["05", "Launch", "Analytics, QA, and smooth hand‑off."],
            ].map(([step, title, desc]) => (
              <motion.div
                key={step}
                variants={fadeInUp}
                className="rounded-2xl border border-black/10 bg-white p-5"
              >
                <div className="text-xs font-semibold tracking-wide text-black/50">{step}</div>
                <div className="mt-1 text-sm font-semibold">{title}</div>
                <p className="mt-1 text-sm text-black/70">{desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.dl variants={fadeInUp} className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["< 1.5s", "Mobile LCP"],
              ["99.9%", "Uptime sites"],
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

      {/* PRICING SUMMARY */}
      <section className="border-y border-black/5 bg-white/60" aria-labelledby="pricing-title">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <MotionSection amount={0.25}>
            <motion.h2
              variants={fadeInUp}
              id="pricing-title"
              className="font-display text-center text-2xl font-semibold tracking-tight sm:text-left sm:text-3xl"
            >
              Transparent pricing
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-2 max-w-2xl text-center text-sm text-black/70 sm:mx-0 sm:text-left"
            >
              Prices auto‑localize to your currency. See detailed options on the homepage.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-6 flex justify-center">
              <a
                href="/#packages"
                className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black shadow-sm hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cerulean/40"
              >
                View packages
                <Rocket className="h-4 w-4" aria-hidden />
              </a>
            </motion.div>
          </MotionSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="faq-title">
        <MotionSection amount={0.2}>
          <motion.h2 variants={fadeInUp} id="faq-title" className="font-display text-2xl font-semibold">
            Frequently asked
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-2 max-w-2xl text-sm text-black/70">
            Simple, honest answers. If you need deeper detail, just ask.
          </motion.p>

          <div className="mt-6 space-y-3">
            {[
              {
                q: "How fast can we start?",
                a: "Discovery calls are usually available this week. If there’s a fit, your first sprint starts within 5–10 days.",
              },
              {
                q: "What’s included in a sprint?",
                a: "Clear goals, a prioritized scope, design and build on agreed patterns, QA, analytics/events, and a clean hand‑off.",
              },
              {
                q: "Do you work with existing stacks?",
                a: "Yes. We’re comfortable integrating into established systems or starting greenfield—whichever moves the needle faster.",
              },
              {
                q: "Can you support us after launch?",
                a: "Absolutely. We offer retainers with response‑time SLOs, quarterly roadmaps, and growth work (A/B, SEO, performance).",
              },
            ].map(({ q, a }) => (
              <motion.details
                key={q}
                variants={fadeInUp}
                className="group rounded-2xl border border-black/10 bg-white p-4 shadow-sm open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-prussian" aria-hidden />
                    <span className="text-sm font-semibold">{q}</span>
                  </div>
                  <span className="text-xs text-black/50 group-open:hidden">Show</span>
                  <span className="text-xs text-black/50 hidden group-open:inline">Hide</span>
                </summary>
                <p className="mt-2 text-sm text-black/70">{a}</p>
              </motion.details>
            ))}
          </div>
        </MotionSection>
      </section>

      {/* CTA */}
      <section className="border-t border-black/5 bg-white/70" aria-labelledby="cta-title">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <MotionSection amount={0.25} className="text-center">
            <motion.h2 variants={fadeInUp} id="cta-title" className="font-display text-2xl font-semibold">
              Ready to move fast—without the mess?
            </motion.h2>
            <motion.p variants={fadeInUp} className="mx-auto mt-2 max-w-2xl text-sm text-black/70">
              Book a 15‑minute discovery call. If there’s a fit, your first sprint starts this week.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-4 flex justify-center">
              <a
                href="/contact"
                aria-label="Get your website built"
                className="group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] ring-2 ring-black/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-cerulean/50"
                style={{ background: "linear-gradient(135deg,#FCA311 0%,#FFD56A 100%)" }}
              >
                Get your website built
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </MotionSection>
        </div>
      </section>

      {/* JSON‑LD: Service + FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Web design and development",
            provider: { "@type": "Organization", name: "Expert Dev Studio" },
            areaServed: "Global",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Website packages",
              itemListElement: [
                { "@type": "Offer", name: "Landing Page Sprint (L0)" },
                { "@type": "Offer", name: "Authority Site (L1)" },
                { "@type": "Offer", name: "Storefront (L2)" },
              ],
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": "https://expertdev.studio/services" },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How fast can we start?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Discovery calls are usually available this week. If there’s a fit, your first sprint starts within 5–10 days.",
                },
              },
              {
                "@type": "Question",
                name: "What’s included in a sprint?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Clear goals, a prioritized scope, design and build on agreed patterns, QA, analytics/events, and a clean hand-off.",
                },
              },
              {
                "@type": "Question",
                name: "Do you work with existing stacks?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes. We’re comfortable integrating into established systems or starting greenfield—whichever moves the needle faster.",
                },
              },
              {
                "@type": "Question",
                name: "Can you support us after launch?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Absolutely. We offer retainers with response‑time SLOs, quarterly roadmaps, and growth work (A/B, SEO, performance).",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
