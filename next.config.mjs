/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site → export to plain HTML/CSS/JS for Cloudflare Pages
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
