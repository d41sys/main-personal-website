const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
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
  },
  // redirects() {
  //   return [
  //     {
  //       source: "/components",
  //       destination: "/docs/components/accordion",
  //       permanent: true,
  //     },
  //     {
  //       source: "/components",
  //       destination: "/docs/components/accordion",
  //       permanent: true,
  //     },
  //     {
  //       source: "/docs/components",
  //       destination: "/docs/components/accordion",
  //       permanent: true,
  //     },
  //     {
  //       source: "/examples",
  //       destination: "/examples/dashboard",
  //       permanent: false,
  //     },
  //     {
  //       source: "/docs/primitives/:path*",
  //       destination: "/docs/components/:path*",
  //       permanent: true,
  //     },
  //     {
  //       source: "/figma",
  //       destination: "/docs/figma",
  //       permanent: true,
  //     },
  //     {
  //       source: "/docs/forms",
  //       destination: "/docs/forms/react-hook-form",
  //       permanent: false,
  //     },
  //   ]
  // },
}

module.exports = withContentlayer(nextConfig)