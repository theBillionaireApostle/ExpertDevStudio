// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FomoToasts from "../components/FomoToasts";

export const metadata: Metadata = {
  title: {
    default: "Expert Dev Studio",
    template: "%s · Expert Dev Studio",
  },
  description:
    "Elegant by design. Ruthless on performance. Conversion-focused websites and apps.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    title: "Expert Dev Studio",
    description:
      "Elegant by design. Ruthless on performance. Conversion-focused websites and apps.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Dev Studio",
    description:
      "Elegant by design. Ruthless on performance. Conversion-focused websites and apps.",
    images: ["/og-image.png"],
  },
  viewport: { width: "device-width", initialScale: 1, maximumScale: 1, viewportFit: "cover" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&family=Poppins:wght@500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
/>

        {/* Tailwind Play CDN */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.tailwind={};
              tailwind.config = {
                darkMode: "class",
                theme: {
                  extend: {
                    colors: {
                      richblack:"#00171F",
                      prussian:"#003459",
                      cerulean:"#007EA7",
                      platinum:"#E5E5E5",
                      accent:"#FCA311"
                    },
                    container: { center: true, padding: "1rem" },
                    fontFamily: {
                      sans: ["Poppins", "system-ui", "ui-sans-serif", "Segoe UI", "Arial"],
                      body: ["Montserrat", "system-ui", "ui-sans-serif", "Segoe UI", "Arial"]
                    },
                    boxShadow: { soft: "0 10px 30px -15px rgba(0,0,0,0.15)" }
                  }
                }
              };
            `,
          }}
        />
        <script src="https://cdn.tailwindcss.com"></script>

        {/* Base fonts */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root { color-scheme: light; }
              html, body { height: 100%; }
              body { font-family: Montserrat, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
              h1,h2,h3,.font-display { font-family: Poppins, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; }
            `,
          }}
        />
        {/* Security hardening + privacy: purge/block sensitive keys and transparently encrypt EDS lists in localStorage */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    // -------- Settings --------
    // Keys we never want in storage at all (removed + writes ignored)
    const BLOCK_KEYS = [/^admin_jwt$/i, /^__clerk_environment$/i];

    // Keys we DO allow but want to store encrypted (names, avatars, images etc)
    const SENSITIVE_PATTERNS = [
      /^eds_.*seen.*(names|images|avatars)/i,
      /^eds_fomo_.*(names|images|avatars)/i,
      /^eds_seen_testimonial_.*(names|images)/i
    ];

    const shouldBlock = (k) => BLOCK_KEYS.some((r) => r.test(String(k)));
    const shouldEncrypt = (k) => SENSITIVE_PATTERNS.some((r) => r.test(String(k)));

    // Pepper (optional) – you can set NEXT_PUBLIC_LOCAL_ENC_PEPPER in env to rotate
    const PEPPER = (${JSON.stringify(process.env.NEXT_PUBLIC_LOCAL_ENC_PEPPER || "")} || "eds_pepper_dev") + "@" + (location.hostname || "local");
    const ENC_PREFIX = "enc:v1:";

    // -------- Lightweight sync "encryption" (obfuscation) --------
    // Note: This is designed for privacy against casual inspection (DevTools), not strong cryptography.
    const hashStr = (s) => {
      let h = 2166136261 >>> 0; // FNV-1a
      for (let i = 0; i < s.length; i++) {
        h ^= s.charCodeAt(i);
        h = Math.imul(h, 16777619) >>> 0;
      }
      return h >>> 0;
    };
    const keyFromPepper = (() => {
      const h = hashStr(PEPPER);
      const bytes = new Uint8Array(32);
      for (let i = 0; i < bytes.length; i++) bytes[i] = (h >>> ((i % 4) * 8)) & 0xff;
      return bytes;
    })();

    const textToBytes = (t) => {
      const arr = new Uint8Array(t.length);
      for (let i = 0; i < t.length; i++) arr[i] = t.charCodeAt(i) & 0xff;
      return arr;
    };
    const bytesToText = (b) => {
      let s = "";
      for (let i = 0; i < b.length; i++) s += String.fromCharCode(b[i]);
      return s;
    };
    const b64encode = (bytes) => {
      let bin = "";
      for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
      return btoa(bin);
    };
    const b64decode = (str) => {
      const bin = atob(str);
      const out = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i) & 0xff;
      return out;
    };

    const xorBytes = (data, key) => {
      const out = new Uint8Array(data.length);
      for (let i = 0; i < data.length; i++) out[i] = data[i] ^ key[i % key.length];
      return out;
    };

    const encryptString = (plain) => {
      try {
        const pt = textToBytes(String(plain));
        const ct = xorBytes(pt, keyFromPepper);
        return ENC_PREFIX + b64encode(ct);
      } catch {
        return ENC_PREFIX + btoa(unescape(encodeURIComponent(String(plain))));
      }
    };
    const decryptString = (enc) => {
      try {
        if (!enc || typeof enc !== "string") return enc;
        if (!enc.startsWith(ENC_PREFIX)) return enc;
        const raw = enc.slice(ENC_PREFIX.length);
        const ct = b64decode(raw);
        const pt = xorBytes(ct, keyFromPepper);
        return bytesToText(pt);
      } catch {
        try {
          return decodeURIComponent(escape(atob(String(enc).slice(ENC_PREFIX.length))));
        } catch {
          return "";
        }
      }
    };

    // -------- Purge blocked keys immediately --------
    try {
      const toRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && shouldBlock(key)) toRemove.push(key);
      }
      toRemove.forEach((k) => localStorage.removeItem(k));
    } catch {}

    // -------- Patch getItem / setItem to transparently enc/dec sensitive keys --------
    const _getItem = localStorage.getItem.bind(localStorage);
    const _setItem = localStorage.setItem.bind(localStorage);
    const _removeItem = localStorage.removeItem.bind(localStorage);

    localStorage.setItem = (k, v) => {
      try {
        if (shouldBlock(k)) return; // ignore
        if (shouldEncrypt(k) && typeof v === "string" && !String(v).startsWith(ENC_PREFIX)) {
          v = encryptString(v);
        }
      } catch {}
      return _setItem(k, v);
    };

    localStorage.getItem = (k) => {
      const v = _getItem(k);
      try {
        if (shouldEncrypt(k) && typeof v === "string" && String(v).startsWith(ENC_PREFIX)) {
          return decryptString(v);
        }
      } catch {}
      return v;
    };

    localStorage.removeItem = (k) => {
      if (shouldBlock(k)) return;
      return _removeItem(k);
    };

    // -------- One-time migration of existing plaintext sensitive values --------
    try {
      const toEncrypt = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key) continue;
        if (shouldEncrypt(key)) {
          const val = _getItem(key);
          if (typeof val === "string" && !val.startsWith(ENC_PREFIX)) {
            toEncrypt.push([key, val]);
          }
        }
      }
      toEncrypt.forEach(([k, v]) => {
        try {
          _setItem(k, encryptString(v));
        } catch {}
      });
    } catch {}

  } catch {}
})();`,
          }}
        />
      </head>

      <body className="min-h-dvh bg-gradient-to-b from-white to-platinum/40 text-richblack antialiased">
        {/* Decorative background glow */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute left-1/2 top-[-10rem] h-[28rem] w-[48rem] -translate-x-1/2 rounded-full bg-cerulean/10 blur-3xl" />
          <div className="absolute right-[-10rem] bottom-[-8rem] h-[22rem] w-[36rem] rounded-full bg-accent/20 blur-3xl" />
        </div>

        {/* Anchor for "Back to top" */}
        <div id="top" className="sr-only" />

        {/* Header component */}
        <Header />

        {/* Page content */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Global FOMO popups */}
        <FomoToasts position="bottom-right" />
      </body>
    </html>
  );
}