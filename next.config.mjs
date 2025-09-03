/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "randomuser.me" },
      // If you keep pravatar for anything:
      { protocol: "https", hostname: "i.pravatar.cc" },
    ],
  },
};
export default nextConfig;