const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: ["avatars.githubusercontent.com", "images.unsplash.com", "flowbite.s3.amazonaws.com", "cdn.dribbble.com", "images.pexels.com", "d33wubrfki0l68.cloudfront.net"],
  },
  experimental: {
    appDir: true,
  }
}

module.exports = withContentlayer(nextConfig)