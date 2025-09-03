// components/home/data.ts
import { Layers3, CheckCircle2, ShoppingCart, LayoutDashboard } from "lucide-react";

export const hero = {
  pill: "Conversion-focused • Lightning-fast • Elegant",
  titleHtml: <>Elegant by design. <span className="text-cerulean">Ruthless</span> on performance.</>,
  desc:
    "Expert Dev Studio builds premium websites and apps that look luxury and sell hard. We obsess over speed, UX, and clarity-so your brand converts on every device.",
  ctas: [
    { href: "/contact", label: "Get a quote", accent: true },
    { href: "#packages", label: "View packages", accent: false },
  ],
  trust: [
    ["< 1.5s", "Mobile LCP"],
    ["Clean UX", "Modern patterns"],
    ["SEO-ready", "Schema + meta"],
    ["Razorpay", "Native checkout"],
  ],
};

export const services = [
  { t: "Landing Page Sprint", d: "High-converting hero, proof, CTA. Analytics included.", Icon: Layers3 },
  { t: "Authority Sites", d: "3–5 pages, blog, SEO basics, lead magnet.", Icon: CheckCircle2 },
  { t: "E-commerce Storefront", d: "Catalog, Razorpay checkout, blazing performance.", Icon: ShoppingCart },
  { t: "Dashboards & Admins", d: "Role-based UIs with clean, reliable data flows.", Icon: LayoutDashboard },
];

export const packages = [
  { title: "L0 · Landing Sprint", price: "₹29,000", features: ["1 page", "Hero + proof + CTA", "Analytics", "7 days"], accent: false },
  { title: "L1 · Authority Site", price: "₹79,000", features: ["3–5 pages", "Blog & SEO basics", "Lead magnet", "2 weeks"], accent: true },
  { title: "L2 · Storefront", price: "from ₹1.5L", features: ["Catalog", "Razorpay", "Speed tuned", "Schema"], accent: false },
  { title: "L3 · Custom Build", price: "from ₹3,50,000", features: ["Bespoke scope", "Integrations & auth", "Roadmap partnership", "Priority support"], accent: false },
];

export const testimonials = [
  { m: "“Clean build, clear message. Mobile speed jumped and leads doubled in two weeks.”", n: "Anika • Coach" },
  { m: "“Finally a storefront that loads fast and looks premium. Checkout is smooth.”", n: "Rahul • D2C" },
  { m: "“Straightforward process, great comms, and pixel-perfect execution.”", n: "Maya • Founder" },
];

export const cta = {
  title: "Get your website built - fast, elegant, conversion-first",
  desc: "Book a 15-minute discovery call. If we’re a fit, we’ll start your sprint this week.",
  primary: { href: "/contact", label: "Start your project" },
  secondary: { href: "#services", label: "Explore services" },
};