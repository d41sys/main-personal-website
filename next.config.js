const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", 
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["avatars.githubusercontent.com", "images.unsplash.com"],
  },
  experimental: {
    appDir: true,
  },
  images : {
    domains: ["flowbite.s3.amazonaws.com", "cdn.dribbble.com", "images.pexels.com"]
  }
}

module.exports = withContentlayer(nextConfig)