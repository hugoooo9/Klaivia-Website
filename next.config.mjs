/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow high-quality image rendering for portfolio visuals
    qualities: [75, 90, 100],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
