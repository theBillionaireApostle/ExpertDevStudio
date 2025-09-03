
"use client";

import { motion } from "framer-motion";
import { fadeInUp, MotionSection } from "../../components/ui/motion";
import {
  ShieldCheck,
  Cookie,
  Eye,
  Lock,
  Database,
  Mail,
  Phone,
  Globe,
  FileText,
  ArrowUpRight,
  Printer,
} from "lucide-react";

// Public knobs with safe fallbacks
const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@expertdev.studio";
const CONTACT_PHONE =
  process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 95103 94742";
const OFFICE_ADDRESS =
  process.env.NEXT_PUBLIC_OFFICE_ADDRESS ||
  "Dubai Design District (d3), Building 1, Dubai, UAE";

const SECTIONS = [
  { id: "intro", label: "Overview" },
  { id: "info-we-collect", label: "Information we collect" },
  { id: "how-we-use", label: "How we use information" },
  { id: "legal-bases", label: "Legal bases (GDPR)" },
  { id: "sharing", label: "Sharing & processors" },
  { id: "payments", label: "Payments" },
  { id: "cookies", label: "Cookies" },
  { id: "analytics", label: "Analytics & ads" },
  { id: "email", label: "Email & marketing" },
  { id: "retention", label: "Data retention" },
  { id: "rights", label: "Your rights" },
  { id: "security", label: "Security" },
  { id: "transfers", label: "International transfers" },
  { id: "children", label: "Children’s privacy" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "Contact" },
] as const;

export default function PrivacyPage() {
  const updated = new Date();

  return (
    <>
      {/* HERO */}
      <section
        className="relative overflow-hidden border-b border-black/5 bg-gradient-to-b from-white to-platinum/40"
        aria-labelledby="privacy-title"
      >
        {/* ambient glow */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-14rem] h-[30rem] w-[52rem] -translate-x-1/2 rounded-full bg-cerulean/10 blur-3xl" />
          <div className="absolute right-[-12rem] bottom-[-12rem] h-[26rem] w-[42rem] rounded-full bg-accent/25 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection amount={0.25} className="py-16 sm:py-20">
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/70 shadow-sm backdrop-blur"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-prussian" />
              Legal · Privacy first
            </motion.span>

            <motion.h1
              id="privacy-title"
              variants={fadeInUp}
              className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              Privacy Policy
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-3 max-w-2xl text-sm text-black/70 sm:text-base"
            >
              We design for clarity and treat your data with the same care. This
              page explains what we collect, why we collect it, and the choices
              you have. It applies to expertdev.studio and our client projects.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-5 flex flex-wrap gap-2">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs text-black/70 hover:bg-black/5"
                >
                  {s.label}
                </a>
              ))}
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-black hover:bg-black/5"
              >
                <Printer className="h-3.5 w-3.5" />
                Print
              </button>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-5 text-xs text-black/60"
            >
              Last updated:{" "}
              <time dateTime={updated.toISOString()}>
                {updated.toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                })}
              </time>
            </motion.p>
          </MotionSection>
        </div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Sticky quick‑nav on large screens */}
          <aside className="lg:col-span-3">
            <div className="sticky top-20 hidden lg:block">
              <nav aria-label="On this page" className="space-y-2">
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block rounded-lg border border-black/10 bg-white px-3 py-2 text-xs text-black/70 hover:bg-black/5"
                  >
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main */}
          <div className="lg:col-span-9">
            <MotionSection amount={0.2} className="space-y-10">
              {/* OVERVIEW */}
              <motion.section id="intro" variants={fadeInUp} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold">Overview</h2>
                <p className="mt-2 text-sm leading-relaxed text-black/70">
                  Expert Dev Studio (“we”, “us”, “our”) provides design and
                  engineering services. We collect only what we need to operate
                  our site, deliver services, and improve user experience. We do
                  not sell personal information.
                </p>
              </motion.section>

              {/* INFORMATION WE COLLECT */}
              <motion.section id="info-we-collect" variants={fadeInUp} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold">
                  Information we collect
                </h2>
                <div className="mt-3 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="flex items-center gap-2">
                      <Database className="h-4 w-4 text-cerulean" />
                      <div className="text-sm font-semibold">Contact data</div>
                    </div>
                    <p className="mt-2 text-sm text-black/70">
                      Name, email, and any content you submit via forms or
                      email. If you start a project with us, we may also collect
                      company, billing, and support information.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4 text-cerulean" />
                      <div className="text-sm font-semibold">Usage data</div>
                    </div>
                    <p className="mt-2 text-sm text-black/70">
                      Anonymous analytics (pages viewed, approximate location,
                      device, referrer). We aim for privacy‑respecting tools and
                      minimal cookies.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* HOW WE USE */}
              <motion.section id="how-we-use" variants={fadeInUp} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold">How we use information</h2>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-black/70">
                  <li>Respond to enquiries and deliver contracted services.</li>
                  <li>Operate the website, prevent abuse, and secure our systems.</li>
                  <li>Measure performance and improve UX &amp; content.</li>
                  <li>Send essential updates; marketing only with consent or where permitted by law.</li>
                </ul>
              </motion.section>

              {/* LEGAL BASES */}
              <motion.section id="legal-bases" variants={fadeInUp} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold">Legal bases (GDPR)</h2>
                <p className="mt-2 text-sm text-black/70">
                  For users in the EEA/UK, we process personal data under these bases:
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-black/70">
                  <li><span className="font-medium">Contract</span>: to provide services you request.</li>
                  <li><span className="font-medium">Legitimate interests</span>: site security, product improvement.</li>
                  <li><span className="font-medium">Consent</span>: analytics/marketing cookies (where required).</li>
                  <li><span className="font-medium">Legal obligation</span>: tax, accounting, and compliance.</li>
                </ul>
              </motion.section>

              {/* SHARING */}
              <motion.section id="sharing" variants={fadeInUp} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold">Sharing &amp; processors</h2>
                <p className="mt-2 text-sm text-black/70">
                  We share data with trusted providers who help us run our business
                  (hosting, analytics, email). They only process it on our
                  instructions and under appropriate safeguards. We do not sell
                  personal data.
                </p>
              </motion.section>

              {/* PAYMENTS */}
              <motion.section id="payments" variants={fadeInUp} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold">Payments</h2>
                <p className="mt-2 text-sm text-black/70">
                  For projects, we may use secure processors (e.g., Razorpay in
                  India or Stripe internationally). We don’t store card numbers.
                  Payment providers process your data under their own policies.
                </p>
              </motion.section>

              {/* COOKIES */}
              <motion.section id="cookies" variants={fadeInUp} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold">Cookies</h2>
                <div className="mt-2 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="flex items-center gap-2">
                      <Cookie className="h-4 w-4 text-cerulean" />
                      <div className="text-sm font-semibold">Essential</div>
                    </div>
                    <p className="mt-2 text-sm text-black/70">
                      Required for core functionality (e.g., session, CSRF).
                      These cannot be switched off.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4 text-cerulean" />
                      <div className="text-sm font-semibold">Analytics</div>
                    </div>
                    <p className="mt-2 text-sm text-black/70">
                      Helps us understand usage in aggregate. We prefer
                      privacy‑friendly tools and respect browser signals where possible.
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-black/60">
                  Tip: you can control cookies from your browser settings; blocking
                  some types may impact site experience.
                </p>
              </motion.section>

              {/* ANALYTICS */}
              <motion.section id="analytics" variants={fadeInUp} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold">Analytics &amp; ads</h2>
                <p className="mt-2 text-sm text-black/70">
                  We currently do not run third‑party ads. If we use analytics,
                  we aim for anonymous or pseudonymous collection and avoid
                  cross‑site tracking.
                </p>
              </motion.section>

              {/* EMAIL */}
              <motion.section id="email" variants={fadeInUp} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold">Email &amp; marketing</h2>
                <p className="mt-2 text-sm text-black/70">
                  We may send service messages. Marketing emails are sent with
                  consent and include an unsubscribe link. You can also email{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-medium text-prussian underline decoration-black/20 underline-offset-2"
                  >
                    {CONTACT_EMAIL}
                  </a>{" "}
                  to opt out.
                </p>
              </motion.section>

              {/* RETENTION */}
              <motion.section id="retention" variants={fadeInUp} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold">Data retention</h2>
                <p className="mt-2 text-sm text-black/70">
                  We keep personal data only as long as necessary for the
                  purposes described above, to comply with law, or to resolve
                  disputes. When no longer needed, we delete or de‑identify it.
                </p>
              </motion.section>

              {/* RIGHTS */}
              <motion.section id="rights" variants={fadeInUp} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold">Your rights</h2>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-black/70">
                  <li>Access, correction, deletion, and portability of your data.</li>
                  <li>Withdraw consent or object to certain processing.</li>
                  <li>Complain to your local supervisory authority.</li>
                </ul>
              </motion.section>

              {/* SECURITY */}
              <motion.section id="security" variants={fadeInUp} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold">Security</h2>
                <div className="mt-2 rounded-2xl border border-black/10 bg-white p-4">
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-cerulean" />
                    <div className="text-sm font-semibold">Practical safeguards</div>
                  </div>
                  <p className="mt-2 text-sm text-black/70">
                    We use TLS in transit, access controls, and least‑privilege
                    practices. No method is 100% secure, but we work to protect
                    your information.
                  </p>
                </div>
              </motion.section>

              {/* TRANSFERS */}
              <motion.section id="transfers" variants={fadeInUp} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold">International transfers</h2>
                <p className="mt-2 text-sm text-black/70">
                  We may process data outside your country. Where required, we
                  rely on standard contractual clauses or equivalent safeguards.
                </p>
              </motion.section>

              {/* CHILDREN */}
              <motion.section id="children" variants={fadeInUp} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold">Children’s privacy</h2>
                <p className="mt-2 text-sm text-black/70">
                  Our services are not directed to children under 13 (or the age
                  required by your region). We do not knowingly collect data from
                  children.
                </p>
              </motion.section>

              {/* CHANGES */}
              <motion.section id="changes" variants={fadeInUp} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold">Changes to this policy</h2>
                <p className="mt-2 text-sm text-black/70">
                  We may update this page to reflect changes in our practices or
                  the law. We’ll adjust the “Last updated” date above and, if the
                  changes are material, provide a more prominent notice.
                </p>
              </motion.section>

              {/* CONTACT */}
              <motion.section id="contact" variants={fadeInUp} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold">Contact</h2>
                <div className="mt-3 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-cerulean" />
                      <div className="text-sm font-semibold">Email</div>
                    </div>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="mt-1 block text-sm text-prussian underline decoration-black/20 underline-offset-2"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-cerulean" />
                      <div className="text-sm font-semibold">Phone</div>
                    </div>
                    <a
                      href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                      className="mt-1 block text-sm text-black/70"
                    >
                      {CONTACT_PHONE}
                    </a>
                  </div>
                  <div className="rounded-2xl border border-black/10 bg-white p-4 sm:col-span-2">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-cerulean" />
                      <div className="text-sm font-semibold">Address</div>
                    </div>
                    <p className="mt-1 text-sm text-black/70">{OFFICE_ADDRESS}</p>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[linear-gradient(135deg,#FCA311_0%,#FFD56A_100%)] px-4 py-2 text-sm font-semibold text-black shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] ring-2 ring-black/5 hover:opacity-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cerulean/50"
                >
                  Talk to us
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.section>
            </MotionSection>
          </div>
        </div>
      </section>

      {/* SEO: structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            url: "https://expertdev.studio/privacy",
            about: "Privacy practices of Expert Dev Studio",
            dateModified: new Date().toISOString(),
            publisher: {
              "@type": "Organization",
              name: "Expert Dev Studio",
            },
          }),
        }}
      />
    </>
  );
}
